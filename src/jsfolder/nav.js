import { ElementCreator, container } from './elementCreator';

export const navbar = {};
export function createNav() {
  const nav = new ElementCreator('nav', 'nav', container).getNodeByClass();
  let home = new ElementCreator('a', 'nav__el', nav, 'home').addId('home');
  home = document.getElementById('home');
  let menu = new ElementCreator('a', 'nav__el', nav, 'menu').addId('menu');
  menu = document.getElementById('menu');
  const logo = new ElementCreator('a', 'nav__logo', nav).getNodeByClass();
  const img = new ElementCreator('img', 'imglogo', logo).getNodeByClass();
  img.src = '../src/img/sushi_lounge_logo.png';
  img.alt = 'logo';
  let contact = new ElementCreator('a', 'nav__el', nav, 'contact').addId('contact');
  contact = document.getElementById('contact');
  let booknow = new ElementCreator('a', 'nav__el', nav, 'book now').addId('booknow');
  booknow = document.getElementById('booknow');
  booknow.classList.add('booknow');
  function navSetter() {
    navbar.home = home;
    navbar.menu = menu;
    navbar.contact = contact;
    navbar.booknow = booknow;
  }
  navSetter();
}
