export class ElementCreator {
  constructor(elem, clss, parent, ...options) {
    this.elem = elem;
    this.clss = clss;
    this.parent = parent;
    this.options = [...options]
    this.el = this.create(this.elem)
    this.addClass(this.el)
    this.addText()
    this.parent.appendChild(this.el)
  }

  create(el) {
    return document.createElement(el);
  }
  addClass(el) {
    return el.classList.add(this.clss)
  }

  getNodeByClass() {
    return document.querySelector(`.${this.clss}`)
  }

  addId(name) {
    this.el.setAttribute("id", name)
  }

  getNodeById(id) {
    document.querySelector(`#${id}`)
  }

  addText() {
    if (this.options.length > 0) {
      let text = this.options[0]
      this.el.textContent = text
    }
  }

}

export const content = document.getElementById('content');
export let container = new ElementCreator('div', 'container', content).getNodeByClass()
export let background = new ElementCreator('div', 'background', container).getNodeByClass()
