import { ElementCreator, container } from './elementCreator';

export let con = {}
export function createMain() {
  let cont = new ElementCreator('div', 'cont', container).getNodeByClass()
  let main = new ElementCreator('div', 'main', cont).getNodeByClass()
  let mainHeading = new ElementCreator('div', 'main__heading', main).getNodeByClass()
  let promo = new ElementCreator('span', 'main__promo', mainHeading, "promo").getNodeByClass()
  let h1 = new ElementCreator('h1', 'main__h1', mainHeading, "Amazing Table with River View & a lot of Menus").getNodeByClass()
  let btn = new ElementCreator('a', 'btn', mainHeading, "Check").getNodeByClass()
  let side = new ElementCreator('div', 'side', cont).getNodeByClass()
  let sideImgContainer = new ElementCreator('div', 'side__imgcontainer', side).getNodeByClass()
  let leftimage = new ElementCreator('img', 'side__img', sideImgContainer).getNodeByClass()
  leftimage.src = "../src/img/sushi.jpg";
  leftimage.alt = "sushi plate"

  function sendInfo() {
    con.cont = cont
  }
  sendInfo()
}

