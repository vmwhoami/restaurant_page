import { ElementCreator, container } from './elementCreator';
import { con } from './mainpage';



export let navbar = {}
export function createNav() {
  let nav = new ElementCreator('nav', 'nav', container).getNodeByClass();
  let about = new ElementCreator('a', 'nav__el', nav, "about").addId("about");
  about = document.getElementById("about");
  let menu = new ElementCreator('a', 'nav__el', nav, "menu").addId("menu");
  menu = document.getElementById("menu");
  let logo = new ElementCreator('a', 'nav__logo', nav).getNodeByClass();
  let img = new ElementCreator('img', 'imglogo', logo).getNodeByClass();
  img.src = "../src/img/sushi_lounge_logo.png";
  img.alt = "logo";
  let contact = new ElementCreator('a', 'nav__el', nav, "contact").addId("contact");
  contact = document.getElementById("contact");
  let booknow = new ElementCreator('a', 'nav__el', nav, "book now").addId("booknow");
  booknow = document.getElementById("booknow");

  function navSetter() {
    navbar.about = about;
    navbar.menu = menu;
    navbar.contact = contact;
    navbar.booknow = booknow;
  }
  navSetter()

}

