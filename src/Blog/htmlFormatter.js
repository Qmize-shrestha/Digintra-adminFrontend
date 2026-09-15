/**
 * Utility to format, align, and clean messy HTML (such as from Google Docs or rich-text editors).
 */

// Beautify and align HTML with clean 2-space indentation
export const formatHtml = (html) => {
  if (!html) return '';

  const tab = '  ';
  let result = '';
  let indent = 0;

  // Normalize block-level tags onto separate lines
  const blockTags = 'p|div|section|article|header|footer|h1|h2|h3|h4|h5|h6|table|thead|tbody|tfoot|tr|colgroup|ul|ol|blockquote|pre|figure|figcaption';
  const blockRegex = new RegExp(`(<(?:\\/)?(?:${blockTags})[^>]*>)`, 'gi');

  let cleaned = html.replace(blockRegex, '\n$1\n');
  const lines = cleaned.split('\n');

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i].trim();
    if (!line) continue;

    const isClosing = /^<\/[^>]+>/.test(line);
    const isSelfClosing = /^<(?:img|br|hr|input|meta|col|link)[^>]*\/?>/i.test(line) ||
                          /^<([a-zA-Z0-9]+)[^>]*>.*<\/\1>$/.test(line);

    if (isClosing) {
      indent = Math.max(0, indent - 1);
    }

    result += tab.repeat(indent) + line + '\n';

    if (!isClosing && !isSelfClosing && /^<[a-zA-Z0-9]+[^>]*>/.test(line)) {
      indent++;
    }
  }

  // Format table rows so cells are neatly aligned and legible
  result = result.replace(/([ \t]*)<tr[^>]*>\s*([\s\S]*?)\s*<\/tr>/gi, (match, spaces, inner) => {
    const cells = inner
      .split(/(<\/?t[dh][^>]*>)/gi)
      .filter(s => s.trim())
      .map(s => s.trim());

    let reconstructed = `${spaces}<tr>\n`;
    for (let j = 0; j < cells.length; j++) {
      if (/^<t[dh]/i.test(cells[j])) {
        const open = cells[j];
        let cellContent = '';
        j++;
        while (j < cells.length && !/^<\/t[dh]>/i.test(cells[j])) {
          cellContent += (cellContent ? ' ' : '') + cells[j];
          j++;
        }
        const close = cells[j] || (open.startsWith('<th') ? '</th>' : '</td>');
        reconstructed += `${spaces}  ${open}${cellContent}${close}\n`;
      }
    }
    reconstructed += `${spaces}</tr>`;
    return reconstructed;
  });

  // Keep single-line paragraphs and headings neat and readable
  result = result.replace(/([ \t]*)<p([^>]*)>\s*\n\s*([^<\n]+?)\s*\n\s*<\/p>/gi, '$1<p$2>$3</p>');
  result = result.replace(/([ \t]*)<h([1-6])([^>]*)>\s*\n\s*([^<\n]+?)\s*\n\s*<\/h\2>/gi, '$1<h$2$3>$4</h$2>');
  result = result.replace(/([ \t]*)<li([^>]*)>\s*\n\s*([^<\n]+?)\s*\n\s*<\/li>/gi, '$1<li$2>$3</li>');

  return result.trim();
};

/**
 * Clean redundant junk styling (Google Docs copy-paste artifacts like excessive &nbsp;,
 * transparent black spans, and default 12pt paragraph margins) and then format.
 */
export const cleanAndFormatHtml = (html) => {
  if (!html) return '';

  let cleaned = html
    // Replace non-breaking spaces with standard spaces
    .replace(/&nbsp;/g, ' ')
    // Clean default Google Docs paragraph line-height and margin styles (flexible spacing)
    .replace(/\s*style="line-height:\s*1\.38;?\s*margin-top:\s*12pt;?\s*margin-bottom:\s*12pt;?"/gi, '')
    // Strip redundant spans with color rgb(0,0,0)/black and transparent background
    .replace(/<span\s+style="[^"]*color:\s*(?:rgb\(0,\s*0,\s*0\)|#000000|black);?\s*background-color:\s*transparent;?[^"]*"[^>]*>([\s\S]*?)<\/span>/gi, '$1')
    .replace(/<span\s+style="[^"]*background-color:\s*transparent;?\s*color:\s*(?:rgb\(0,\s*0,\s*0\)|#000000|black);?[^"]*"[^>]*>([\s\S]*?)<\/span>/gi, '$1')
    .replace(/<span\s+style="background-color:\s*transparent;?"[^>]*>([\s\S]*?)<\/span>/gi, '$1')
    // Remove empty/redundant span tags
    .replace(/<span>([\s\S]*?)<\/span>/gi, '$1')
    // Clean empty style attributes
    .replace(/\s*style=""/gi, '');

  return formatHtml(cleaned);
};
