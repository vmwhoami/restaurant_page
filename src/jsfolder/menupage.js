import { ElementCreator, container, cont } from './elementCreator';
import { createMain, con } from './mainpage';


export function createMenu() {
  let cont = new ElementCreator('div', 'cont', container).getNodeByClass()
  let menu = new ElementCreator('div', 'menu', cont).getNodeByClass()


  function menuCreate(num) {
    for (let i = 0; i < num; i++) {
      new ElementCreator('div', 'menu__imgcont', menu)
    }
  }

  menuCreate(4)
  let menuContainers = document.querySelectorAll('.menu__imgcont');
  menuContainers.forEach(elem => {
    new ElementCreator('div', 'menu__info', elem)
  })

  let menuInfo = document.querySelectorAll('.menu__info')

  menuInfo.forEach(elem => {
    new ElementCreator('h2', 'menu__h2', elem, "This is going to")
    new ElementCreator('span', 'menu__span', elem, "120$")
    new ElementCreator('p', 'menu__p', elem, "text goes here")
    new ElementCreator('a', 'menu__btn', elem, "order now")
  })



  let img1 = document.createElement('img')
  img1.alt = "sushi_caviar"
  img1.src = "../src/img/sushi_caviar.jpg"
  menuContainers[0].appendChild(img1)


  let img2 = document.createElement('img')
  img2.alt = "sushi_fila"
  img2.src = "../src/img/sushi_fila.jpg"
  menuContainers[1].appendChild(img2)


  let img3 = document.createElement('img')
  img3.alt = "sushi_rolls"
  img3.src = "../src/img/sushi_rolls.jpg"
  menuContainers[2].appendChild(img3)


  let img4 = document.createElement('img')
  img4.src = "../src/img/sushi.jpg"
  menuContainers[3].appendChild(img4)


}