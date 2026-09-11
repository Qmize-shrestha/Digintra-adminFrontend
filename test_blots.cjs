const { JSDOM } = require('jsdom');
const dom = new JSDOM('<!DOCTYPE html><html><body><div id="editor"></div></body></html>');

global.window = dom.window;
global.document = dom.window.document;
global.navigator = dom.window.navigator;
global.HTMLElement = dom.window.HTMLElement;
global.HTMLDivElement = dom.window.HTMLDivElement;
global.Node = dom.window.Node;
global.DocumentFragment = dom.window.DocumentFragment;

const Quill = require('d:/Digintra_master/Digintra_WebFile/node_modules/quill/dist/quill.js');
const Parchment = Quill.import('parchment');

// 1. Register generic Attributors
const ClassAttribute = new Parchment.Attributor.Attribute('class', 'class', { scope: Parchment.Scope.ANY });
Quill.register(ClassAttribute, true);

// 2. Override Block blot
const Block = Quill.import('blots/block');
class CustomBlock extends Block {
  static create(value) {
    let node = super.create();
    if (value && typeof value === 'object') {
      if (value.class) node.setAttribute('class', value.class);
    }
    return node;
  }
  static formats(node) {
    let format = super.formats(node) || {};
    if (node.hasAttribute('class')) format.class = node.getAttribute('class');
    return format;
  }
}
Quill.register(CustomBlock, true);

// 3. Section and Div
class SectionBlot extends CustomBlock {}
SectionBlot.blotName = 'section';
SectionBlot.tagName = 'section';

class DivBlot extends CustomBlock {}
DivBlot.blotName = 'div';
DivBlot.tagName = 'div';

Quill.register(SectionBlot, true);
Quill.register(DivBlot, true);

const container = document.getElementById('editor');
const quill = new Quill(container, { theme: 'snow' });

const sampleHtml = `<section class="sec-class"><div class="ml-7 max-w-4xl mx-auto px-5 mb-5"><h1 class="text-3xl font-bold">Title</h1><p class="text-black">Text</p></div></section>`;
quill.clipboard.dangerouslyPasteHTML(sampleHtml);

console.log(quill.root.innerHTML);
