import React, { useState } from 'react';
import { Quill } from 'react-quill';
import { toast } from 'react-hot-toast';

// 1. Register Custom Table Blot for Quill (Quill 1.3.7 doesn't support <table> by default)
if (Quill) {
  try {
    const BlockEmbed = Quill.import('blots/block/embed');

    class CustomTableBlot extends BlockEmbed {
      static create(value) {
        const node = super.create();
        node.setAttribute('contenteditable', 'false');
        if (typeof value === 'string') {
          node.innerHTML = value;
        }
        // Ensure table cells are editable by user
        node.querySelectorAll('td, th').forEach((cell) => {
          cell.setAttribute('contenteditable', 'true');
        });
        return node;
      }

      static value(domNode) {
        return domNode.innerHTML;
      }
    }

    CustomTableBlot.blotName = 'customTable';
    CustomTableBlot.tagName = 'div';
    CustomTableBlot.className = 'table-responsive';

    Quill.register('formats/customTable', CustomTableBlot, true);
    Quill.register(CustomTableBlot, true);

    // Register generic Attributors and Blots so Quill preserves class, style, id, target, rel, section, and div
    const Parchment = Quill.import('parchment');

    const ClassAttribute = new Parchment.Attributor.Attribute('class', 'class', {
      scope: Parchment.Scope.ANY
    });
    const StyleAttribute = new Parchment.Attributor.Attribute('style', 'style', {
      scope: Parchment.Scope.ANY
    });
    const IdAttribute = new Parchment.Attributor.Attribute('id', 'id', {
      scope: Parchment.Scope.ANY
    });
    const TargetAttribute = new Parchment.Attributor.Attribute('target', 'target', {
      scope: Parchment.Scope.ANY
    });
    const RelAttribute = new Parchment.Attributor.Attribute('rel', 'rel', {
      scope: Parchment.Scope.ANY
    });

    const Block = Quill.import('blots/block');
    class SectionBlot extends Block { }
    SectionBlot.blotName = 'section';
    SectionBlot.tagName = 'section';

    class DivBlot extends Block { }
    DivBlot.blotName = 'div';
    DivBlot.tagName = 'div';

    Quill.register(ClassAttribute, true);
    Quill.register(StyleAttribute, true);
    Quill.register(IdAttribute, true);
    Quill.register(TargetAttribute, true);
    Quill.register(RelAttribute, true);
    Quill.register(SectionBlot, true);
    Quill.register(DivBlot, true);

    // Register Table icon for Quill toolbar
    const icons = Quill.import('ui/icons');
    if (icons && !icons['table']) {
      icons['table'] = `<svg viewBox="0 0 18 18">
        <rect class="ql-stroke" height="12" width="14" x="2" y="3"></rect>
        <line class="ql-stroke" x1="2" x2="16" y1="7" y2="7"></line>
        <line class="ql-stroke" x1="2" x2="16" y1="11" y2="11"></line>
        <line class="ql-stroke" x1="7" x2="7" y1="3" y2="15"></line>
        <line class="ql-stroke" x1="11" x2="11" y1="3" y2="15"></line>
      </svg>`;
    }
  } catch (e) {
    console.error('Error registering quill customTable blot or attributors', e);
  }
}

/**
 * Finds the currently active or last focused table cell inside the Quill editor.
 */
export const getActiveTableCell = (quillRef, lastFocusedCellRef) => {
  const editor = quillRef?.current?.getEditor ? quillRef.current.getEditor() : quillRef;
  if (!editor || !editor.root) return null;

  const sel = window.getSelection();
  if (sel && sel.anchorNode) {
    let node = sel.anchorNode;
    if (node.nodeType === 3) node = node.parentElement;
    const cell = node?.closest?.('td, th');
    if (cell && editor.root.contains(cell)) {
      return cell;
    }
  }

  if (lastFocusedCellRef?.current && editor.root.contains(lastFocusedCellRef.current)) {
    return lastFocusedCellRef.current;
  }

  const anyCell = editor.root.querySelector('.table-responsive td, .table-responsive th, table td, table th');
  return anyCell || null;
};

/**
 * Formats table cell or selected text inside cell using main editor toolbar
 */
export const formatTableCellOrSelection = (formatType, value, quillRef, lastFocusedCellRef, setContent) => {
  const editor = quillRef?.current?.getEditor ? quillRef.current.getEditor() : quillRef;
  if (!editor) return;

  const sel = window.getSelection();
  let range = null;
  let targetCell = null;

  if (sel && sel.rangeCount > 0) {
    range = sel.getRangeAt(0);
    const node = range.commonAncestorContainer;
    targetCell = (node.nodeType === 3 ? node.parentElement : node)?.closest?.('td, th');
  }

  if (!targetCell && lastFocusedCellRef?.current) {
    targetCell = lastFocusedCellRef.current;
  }

  if (!targetCell) return;

  const hasTextSelected = range && !range.collapsed && targetCell.contains(range.commonAncestorContainer);

  if (hasTextSelected) {
    if (formatType === 'bold') {
      document.execCommand('bold', false, null);
    } else if (formatType === 'italic') {
      document.execCommand('italic', false, null);
    } else if (formatType === 'underline') {
      document.execCommand('underline', false, null);
    } else if (formatType === 'strike') {
      document.execCommand('strikeThrough', false, null);
    } else if (formatType === 'size') {
      const span = document.createElement('span');
      span.style.fontSize = value || '14px';
      try {
        range.surroundContents(span);
      } catch (e) {
        document.execCommand('fontSize', false, '7');
        targetCell.querySelectorAll('font[size="7"]').forEach((el) => {
          el.removeAttribute('size');
          el.style.fontSize = value;
        });
      }
    } else if (formatType === 'font') {
      const span = document.createElement('span');
      span.style.fontFamily = value ? `'${value}', sans-serif` : 'inherit';
      try {
        range.surroundContents(span);
      } catch (e) {
        document.execCommand('fontName', false, value);
      }
    } else if (formatType === 'color') {
      document.execCommand('foreColor', false, value);
    } else if (formatType === 'background') {
      document.execCommand('hiliteColor', false, value);
    }
  } else {
    // Apply styling to the whole cell
    if (formatType === 'bold') {
      const isBold = targetCell.style.fontWeight === 'bold' || targetCell.style.fontWeight === '700';
      targetCell.style.fontWeight = isBold ? 'normal' : 'bold';
    } else if (formatType === 'italic') {
      targetCell.style.fontStyle = targetCell.style.fontStyle === 'italic' ? 'normal' : 'italic';
    } else if (formatType === 'underline') {
      targetCell.style.textDecoration = targetCell.style.textDecoration === 'underline' ? 'none' : 'underline';
    } else if (formatType === 'strike') {
      targetCell.style.textDecoration = targetCell.style.textDecoration === 'line-through' ? 'none' : 'line-through';
    } else if (formatType === 'size') {
      targetCell.style.fontSize = value;
      targetCell.querySelectorAll('*').forEach((el) => {
        el.style.fontSize = value;
      });
    } else if (formatType === 'font') {
      targetCell.style.fontFamily = `'${value}', sans-serif`;
      targetCell.querySelectorAll('*').forEach((el) => {
        el.style.fontFamily = `'${value}', sans-serif`;
      });
    } else if (formatType === 'color') {
      targetCell.style.color = value;
      targetCell.querySelectorAll('*').forEach((el) => {
        el.style.color = value;
      });
    } else if (formatType === 'background') {
      targetCell.style.backgroundColor = value;
    } else if (formatType === 'align') {
      targetCell.style.textAlign = value;
    }
  }

  editor.update();
  if (setContent) {
    setContent(editor.root.innerHTML);
  }
};

/**
 * Setup listeners for cell focus, typing inside cells, Tab navigation, and connecting the main Quill toolbar.
 */
export const setupQuillTableListeners = (quill, setContent, lastFocusedCellRef) => {
  if (!quill || !quill.root) return () => { };

  const root = quill.root;

  // Make sure existing table cells have contenteditable="true"
  const ensureEditable = () => {
    root.querySelectorAll('.table-responsive td, .table-responsive th, table td, table th').forEach((cell) => {
      if (cell.getAttribute('contenteditable') !== 'true') {
        cell.setAttribute('contenteditable', 'true');
      }
    });
  };

  ensureEditable();

  // Register clipboard matcher so pasted/loaded HTML with <table> is converted to customTable
  if (quill.clipboard) {
    try {
      const Delta = Quill.import('delta');
      quill.clipboard.addMatcher('table', (node) => {
        if (node.closest('.table-responsive')) {
          return new Delta();
        }
        return new Delta().insert({ customTable: node.outerHTML });
      });
      quill.clipboard.addMatcher('div.table-responsive', (node) => {
        return new Delta().insert({ customTable: node.innerHTML });
      });
    } catch (e) {
      console.error('Error adding table clipboard matcher', e);
    }
  }

  // When user clicks or navigates into a cell
  const handleFocus = (e) => {
    const cell = e.target?.closest?.('td, th');
    if (cell && root.contains(cell)) {
      if (lastFocusedCellRef) lastFocusedCellRef.current = cell;
    }
  };

  // When user types inside a cell
  const handleInput = (e) => {
    const cell = e.target?.closest?.('td, th');
    if (cell && root.contains(cell)) {
      if (lastFocusedCellRef) lastFocusedCellRef.current = cell;
      if (setContent) {
        setContent(root.innerHTML);
      }
    }
  };

  // Tab key navigation between cells
  const handleKeyDown = (e) => {
    if (e.key === 'Tab') {
      const cell = e.target?.closest?.('td, th');
      if (cell && root.contains(cell)) {
        e.preventDefault();
        const table = cell.closest('table');
        if (table) {
          const cells = Array.from(table.querySelectorAll('td, th'));
          const idx = cells.indexOf(cell);
          const nextIdx = e.shiftKey ? idx - 1 : idx + 1;
          if (cells[nextIdx]) {
            cells[nextIdx].focus();
            if (lastFocusedCellRef) lastFocusedCellRef.current = cells[nextIdx];
          }
        }
      }
    }
  };

  root.addEventListener('click', handleFocus);
  root.addEventListener('keyup', handleFocus);
  root.addEventListener('input', handleInput);
  root.addEventListener('keydown', handleKeyDown);

  // Connect the MAIN Quill editor toolbar to format table text/cells
  const toolbar = quill.container?.parentElement?.querySelector('.ql-toolbar');
  let handleToolbarClick = null;

  if (toolbar) {
    handleToolbarClick = (e) => {
      const btn = e.target.closest('button, .ql-picker-item, .ql-picker-label');
      if (!btn) return;

      const activeCell = getActiveTableCell(quill, lastFocusedCellRef);
      if (!activeCell) return;

      // Format actions from main editor toolbar
      if (btn.classList.contains('ql-bold') || btn.closest('.ql-bold')) {
        e.preventDefault();
        formatTableCellOrSelection('bold', null, quill, lastFocusedCellRef, setContent);
      } else if (btn.classList.contains('ql-italic') || btn.closest('.ql-italic')) {
        e.preventDefault();
        formatTableCellOrSelection('italic', null, quill, lastFocusedCellRef, setContent);
      } else if (btn.classList.contains('ql-underline') || btn.closest('.ql-underline')) {
        e.preventDefault();
        formatTableCellOrSelection('underline', null, quill, lastFocusedCellRef, setContent);
      } else if (btn.classList.contains('ql-strike') || btn.closest('.ql-strike')) {
        e.preventDefault();
        formatTableCellOrSelection('strike', null, quill, lastFocusedCellRef, setContent);
      } else if (btn.closest('.ql-size') && (btn.getAttribute('data-value') || btn.classList.contains('ql-picker-item'))) {
        const size = btn.getAttribute('data-value') || '14px';
        formatTableCellOrSelection('size', size, quill, lastFocusedCellRef, setContent);
      } else if (btn.closest('.ql-font') && (btn.getAttribute('data-value') || btn.classList.contains('ql-picker-item'))) {
        const font = btn.getAttribute('data-value') || '';
        formatTableCellOrSelection('font', font, quill, lastFocusedCellRef, setContent);
      } else if (btn.closest('.ql-color') && btn.getAttribute('data-value')) {
        const color = btn.getAttribute('data-value');
        formatTableCellOrSelection('color', color, quill, lastFocusedCellRef, setContent);
      } else if (btn.closest('.ql-background') && btn.getAttribute('data-value')) {
        const bg = btn.getAttribute('data-value');
        formatTableCellOrSelection('background', bg, quill, lastFocusedCellRef, setContent);
      } else if (btn.closest('.ql-align') && btn.getAttribute('data-value') !== null) {
        const align = btn.getAttribute('data-value') || 'left';
        formatTableCellOrSelection('align', align, quill, lastFocusedCellRef, setContent);
      }
    };

    toolbar.addEventListener('click', handleToolbarClick, true);
  }

  return () => {
    root.removeEventListener('click', handleFocus);
    root.removeEventListener('keyup', handleFocus);
    root.removeEventListener('input', handleInput);
    root.removeEventListener('keydown', handleKeyDown);
    if (toolbar && handleToolbarClick) {
      toolbar.removeEventListener('click', handleToolbarClick, true);
    }
  };
};

/**
 * Executes a table manipulation action (addRowBelow, addColumnRight, deleteRow, deleteColumn, deleteTable)
 */
export const executeTableAction = (action, quillRef, lastFocusedCellRef, setContent) => {
  const cell = getActiveTableCell(quillRef, lastFocusedCellRef);
  if (!cell) {
    toast.error('Please click inside a table cell first!');
    return false;
  }

  const row = cell.closest('tr');
  const table = cell.closest('table');
  const editor = quillRef?.current?.getEditor ? quillRef.current.getEditor() : quillRef;
  if (!row || !table || !editor) return false;

  const colIndex = Array.from(row.children).indexOf(cell);

  if (action === 'addRowBelow') {
    const colCount = row.children.length;
    const newRow = document.createElement('tr');
    newRow.style.backgroundColor = table.querySelectorAll('tr').length % 2 === 0 ? '#f8fafc' : '#ffffff';

    for (let i = 0; i < colCount; i++) {
      const td = document.createElement('td');
      td.style.border = '1px solid #e2e8f0';
      td.style.padding = '8px 12px';
      td.style.color = '#334155';
      td.setAttribute('contenteditable', 'true');
      td.innerHTML = '&nbsp;';
      newRow.appendChild(td);
    }

    row.insertAdjacentElement('afterend', newRow);
    const targetCell = newRow.children[Math.min(colIndex, colCount - 1)];
    if (lastFocusedCellRef) lastFocusedCellRef.current = targetCell;
    targetCell?.focus();

    editor.update();
    setContent(editor.root.innerHTML);
    toast.success('Row added below');
    return true;
  }

  if (action === 'addColumnRight') {
    const allRows = table.querySelectorAll('tr');
    allRows.forEach((r) => {
      const isHeaderRow = r.parentElement?.tagName === 'THEAD' || r.querySelector('th') !== null;
      const targetColIndex = Math.min(colIndex, r.children.length - 1);
      const targetChild = r.children[targetColIndex];

      if (isHeaderRow) {
        const th = document.createElement('th');
        th.style.border = '1px solid #cbd5e1';
        th.style.padding = '10px 14px';
        th.style.backgroundColor = '#f1f5f9';
        th.style.fontWeight = '600';
        th.style.textAlign = 'left';
        th.style.color = '#1e293b';
        th.setAttribute('contenteditable', 'true');
        th.innerHTML = 'Header';
        if (targetChild) {
          targetChild.insertAdjacentElement('afterend', th);
        } else {
          r.appendChild(th);
        }
      } else {
        const td = document.createElement('td');
        td.style.border = '1px solid #e2e8f0';
        td.style.padding = '8px 12px';
        td.style.color = '#334155';
        td.setAttribute('contenteditable', 'true');
        td.innerHTML = '&nbsp;';
        if (targetChild) {
          targetChild.insertAdjacentElement('afterend', td);
        } else {
          r.appendChild(td);
        }
      }
    });

    editor.update();
    setContent(editor.root.innerHTML);
    toast.success('Column added to the right');
    return true;
  }

  if (action === 'deleteRow') {
    const allRows = table.querySelectorAll('tr');
    if (allRows.length <= 1) {
      const wrapper = table.closest('.table-responsive') || table;
      wrapper.remove();
      if (lastFocusedCellRef) lastFocusedCellRef.current = null;
      editor.update();
      setContent(editor.root.innerHTML);
      toast.success('Table deleted');
      return true;
    }
    row.remove();
    if (lastFocusedCellRef) lastFocusedCellRef.current = null;
    editor.update();
    setContent(editor.root.innerHTML);
    toast.success('Row deleted');
    return true;
  }

  if (action === 'deleteColumn') {
    if (row.children.length <= 1) {
      const wrapper = table.closest('.table-responsive') || table;
      wrapper.remove();
      if (lastFocusedCellRef) lastFocusedCellRef.current = null;
      editor.update();
      setContent(editor.root.innerHTML);
      toast.success('Table deleted');
      return true;
    }
    const allRows = table.querySelectorAll('tr');
    allRows.forEach((r) => {
      if (r.children[colIndex]) {
        r.children[colIndex].remove();
      }
    });
    if (lastFocusedCellRef) lastFocusedCellRef.current = null;
    editor.update();
    setContent(editor.root.innerHTML);
    toast.success('Column deleted');
    return true;
  }

  if (action === 'deleteTable') {
    const wrapper = table.closest('.table-responsive') || table;
    wrapper.remove();
    if (lastFocusedCellRef) lastFocusedCellRef.current = null;
    editor.update();
    setContent(editor.root.innerHTML);
    toast.success('Table removed');
    return true;
  }

  return false;
};

/**
 * Inserts a brand new table with user-defined rows and columns.
 */
export const insertTableIntoQuill = (rowsCount, colsCount, hasHeader, quillRef, setContent) => {
  const quill = quillRef?.current?.getEditor ? quillRef.current.getEditor() : quillRef;
  if (!quill) return;

  const rows = Math.max(1, parseInt(rowsCount, 10) || 3);
  const cols = Math.max(1, parseInt(colsCount, 10) || 3);

  let tableHtml = `<table class="blog-custom-table" style="width:100%; border-collapse:collapse; border:1px solid #cbd5e1; margin:12px 0;">`;

  if (hasHeader) {
    tableHtml += `<thead><tr>`;
    for (let c = 1; c <= cols; c++) {
      tableHtml += `<th style="border:1px solid #cbd5e1; padding:10px 14px; background-color:#f1f5f9; font-weight:600; text-align:left; color:#1e293b;" contenteditable="true">Header ${c}</th>`;
    }
    tableHtml += `</tr></thead>`;
  }

  tableHtml += `<tbody>`;
  for (let r = 1; r <= rows; r++) {
    const rowBg = r % 2 === 0 ? 'background-color:#f8fafc;' : 'background-color:#ffffff;';
    tableHtml += `<tr style="${rowBg}">`;
    for (let c = 1; c <= cols; c++) {
      tableHtml += `<td style="border:1px solid #e2e8f0; padding:8px 12px; color:#334155;" contenteditable="true">Data ${r},${c}</td>`;
    }
    tableHtml += `</tr>`;
  }
  tableHtml += `</tbody></table>`;

  const range = quill.getSelection(true);
  const index = range ? range.index : quill.getLength();

  // Insert via CustomTableBlot embed so Quill does not strip the <table> tags
  quill.insertEmbed(index, 'customTable', tableHtml, Quill.sources.USER);
  quill.insertText(index + 1, '\n', Quill.sources.USER);
  quill.setSelection(index + 2, Quill.sources.SILENT);

  setTimeout(() => {
    quill.update();
    setContent(quill.root.innerHTML);
    const root = quill.root;
    root.querySelectorAll('.table-responsive td, .table-responsive th').forEach((c) => {
      c.setAttribute('contenteditable', 'true');
    });
    const firstCell = root.querySelector('.table-responsive:last-of-type td, .table-responsive:last-of-type th');
    if (firstCell) firstCell.focus();
  }, 60);

  toast.success(`Table inserted (${rows} rows × ${cols} cols)!`);
};

/**
 * Modal dialog for inserting a table
 */
export const InsertTableModal = ({ isOpen, onClose, onInsert }) => {
  const [rows, setRows] = useState(3);
  const [cols, setCols] = useState(3);
  const [hasHeader, setHasHeader] = useState(true);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onInsert(rows, cols, hasHeader);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 max-w-md w-full p-6 transition-all transform">
        <div className="flex items-center justify-between pb-3 border-b border-gray-100">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h3 className="text-base font-bold text-gray-900">Insert Table</h3>
              <p className="text-xs text-gray-500">Configure your table rows and columns</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 p-1.5 rounded-lg hover:bg-gray-100 transition cursor-pointer"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="mt-5 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                Number of Rows
              </label>
              <input
                type="number"
                min="1"
                max="50"
                value={rows}
                onChange={(e) => setRows(Math.max(1, parseInt(e.target.value, 10) || 1))}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none bg-white text-gray-900 shadow-2xs"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                Number of Columns
              </label>
              <input
                type="number"
                min="1"
                max="15"
                value={cols}
                onChange={(e) => setCols(Math.max(1, parseInt(e.target.value, 10) || 1))}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none bg-white text-gray-900 shadow-2xs"
                required
              />
            </div>
          </div>

          <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/60">
            <input
              type="checkbox"
              id="include-header"
              checked={hasHeader}
              onChange={(e) => setHasHeader(e.target.checked)}
              className="w-4 h-4 text-indigo-600 rounded focus:ring-indigo-500 cursor-pointer"
            />
            <label htmlFor="include-header" className="text-xs font-medium text-gray-700 cursor-pointer">
              Include Header Row (styled with background color & bold text)
            </label>
          </div>

          {/* Quick Preview Grid */}
          <div className="p-3 bg-gray-50 rounded-xl border border-gray-200">
            <div className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider mb-2">
              Preview: {rows} {rows === 1 ? 'Row' : 'Rows'} × {cols} {cols === 1 ? 'Column' : 'Columns'}
            </div>
            <div className="max-h-28 overflow-hidden rounded border border-gray-300 bg-white opacity-85">
              <div className="grid divide-y divide-gray-200">
                {hasHeader && (
                  <div
                    className="grid bg-slate-100 text-[10px] font-bold text-gray-700 divide-x divide-gray-200"
                    style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
                  >
                    {Array.from({ length: cols }).map((_, c) => (
                      <div key={c} className="p-1 text-center truncate">H{c + 1}</div>
                    ))}
                  </div>
                )}
                {Array.from({ length: Math.min(rows, 3) }).map((_, r) => (
                  <div
                    key={r}
                    className="grid text-[9px] text-gray-500 divide-x divide-gray-200"
                    style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
                  >
                    {Array.from({ length: cols }).map((_, c) => (
                      <div key={c} className="p-1 text-center truncate">Cell</div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-end gap-2.5 pt-3 border-t border-gray-100">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-gray-600 hover:text-gray-800 bg-gray-100 hover:bg-gray-200 rounded-xl transition cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 active:scale-95 rounded-xl shadow-md shadow-indigo-500/25 transition cursor-pointer flex items-center gap-1.5"
            >
              <span>Insert Table</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

/**
 * Top Action Bar rendered right above ReactQuill (Clean Layout Tools Only)
 */
export const TableActionToolbar = ({ onOpenModal, onAction }) => {
  return (
    <div className="flex flex-wrap items-center justify-between gap-2 p-2 bg-gradient-to-r from-slate-50 to-indigo-50/40 border border-slate-200 rounded-lg text-xs mb-2">
      <div className="flex items-center gap-1.5 font-semibold text-slate-700">
        <svg className="w-4 h-4 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
        <span>Table Tools:</span>
      </div>

      <div className="flex flex-wrap items-center gap-1.5">
        <button
          type="button"
          onMouseDown={(e) => e.preventDefault()}
          onClick={onOpenModal}
          className="px-2.5 py-1 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md font-semibold shadow-xs flex items-center gap-1 cursor-pointer transition active:scale-95"
          title="Create a new table"
        >
          <span>➕ Insert Table</span>
        </button>

        <div className="h-4 w-px bg-slate-300 mx-0.5" />

        <button
          type="button"
          onMouseDown={(e) => e.preventDefault()}
          onClick={() => onAction('addRowBelow')}
          className="px-2.5 py-1 bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 rounded-md font-medium shadow-2xs flex items-center gap-1 cursor-pointer transition active:scale-95"
          title="Add a row below the current cell"
        >
          <span>➕ Add Row</span>
        </button>

        <button
          type="button"
          onMouseDown={(e) => e.preventDefault()}
          onClick={() => onAction('addColumnRight')}
          className="px-2.5 py-1 bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 rounded-md font-medium shadow-2xs flex items-center gap-1 cursor-pointer transition active:scale-95"
          title="Add a column to the right"
        >
          <span>➕ Add Column</span>
        </button>

        <button
          type="button"
          onMouseDown={(e) => e.preventDefault()}
          onClick={() => onAction('deleteRow')}
          className="px-2.5 py-1 bg-white hover:bg-rose-50 text-rose-600 border border-rose-200 rounded-md font-medium shadow-2xs flex items-center gap-1 cursor-pointer transition active:scale-95"
          title="Delete current row"
        >
          <span>➖ Delete Row</span>
        </button>

        <button
          type="button"
          onMouseDown={(e) => e.preventDefault()}
          onClick={() => onAction('deleteColumn')}
          className="px-2.5 py-1 bg-white hover:bg-rose-50 text-rose-600 border border-rose-200 rounded-md font-medium shadow-2xs flex items-center gap-1 cursor-pointer transition active:scale-95"
          title="Delete current column"
        >
          <span>➖ Delete Column</span>
        </button>

        <button
          type="button"
          onMouseDown={(e) => e.preventDefault()}
          onClick={() => onAction('deleteTable')}
          className="px-2 py-1 bg-white hover:bg-rose-600 hover:text-white text-rose-700 border border-rose-300 rounded-md font-medium shadow-2xs flex items-center gap-1 cursor-pointer transition active:scale-95"
          title="Delete entire table"
        >
          <span>🗑️ Delete Table</span>
        </button>
      </div>
    </div>
  );
};
