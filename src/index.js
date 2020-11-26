import './style/style.scss';



const content = document.querySelector('.content');

// let nav = document.createElement('nav')

function elemCreator(elem, clss) {
  let el = document.createElement(elem);
  let final = el.classList.add(clss)
  return final
}


let nav = elemCreator('nav', 'nav')
// let container = new ElemetCreator("div")

content.appendChild(nav)