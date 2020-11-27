import { ElementCreator, container } from './elementCreator';

export const con = {};
export function createMain() {
  const cont = new ElementCreator('div', 'cont', container).getNodeByClass();
  const main = new ElementCreator('div', 'main', cont).getNodeByClass();
  const mainHeading = new ElementCreator('div', 'main__heading', main).getNodeByClass();
  const promo = new ElementCreator('span', 'main__promo', mainHeading, 'promo').getNodeByClass();
  const h1 = new ElementCreator('h1', 'main__h1', mainHeading, 'Amazing Table with River View & a lot of Menus').getNodeByClass();
  const btn = new ElementCreator('a', 'btn', mainHeading, 'Check').getNodeByClass();
  const side = new ElementCreator('div', 'side', cont).getNodeByClass();
  const sideImgContainer = new ElementCreator('div', 'side__imgcontainer', side).getNodeByClass();
  const leftimage = new ElementCreator('img', 'side__img', sideImgContainer).getNodeByClass();
  leftimage.src = '../src/img/sushi.jpg';
  leftimage.alt = 'sushi plate';

  function sendInfo() {
    con.cont = cont;
    con.promo = promo;
    con.h1 = h1;
    con.btn = btn;
  }
  sendInfo();
}
