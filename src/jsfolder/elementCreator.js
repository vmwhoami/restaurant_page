export class ElementCreator {
  constructor(elem, clss, parent, ...options) {
    this.elem = elem;
    this.clss = clss;
    this.parent = parent;
    this.options = [...options];
    this.el = this.create();
    this.addClass(this.el);
    this.addText();
    this.parent.appendChild(this.el);
  }

  create() {
    return document.createElement(this.elem);
  }

  addClass(el) {
    return el.classList.add(this.clss);
  }

  getNodeByClass() {
    return document.querySelector(`.${this.clss}`);
  }

  addId(name) {
    this.el.setAttribute('id', name);
  }

  addText() {
    if (this.options.length > 0) {
      const text = this.options[0];
      this.el.textContent = text;
    }
  }
}

export const content = document.getElementById('content');
export const container = new ElementCreator('div', 'container', content).getNodeByClass();
export const background = new ElementCreator('div', 'background', container).getNodeByClass();
