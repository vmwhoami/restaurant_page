import { ElementCreator, content } from './jsfolder/elementCreator';


function createNav() {
  let background = new ElementCreator('div', 'background', container).getNodeByClass()
  let nav = new ElementCreator('nav', 'nav', container).getNodeByClass()
  let about = new ElementCreator('a', 'nav__el', nav, "about").addId("about")
  let menu = new ElementCreator('a', 'nav__el', nav, "menu").addId("menu")
  let logo = new ElementCreator('a', 'nav__logo', nav).getNodeByClass()
  let img = new ElementCreator('img', 'imglogo', logo).getNodeByClass()
  img.src = "../src/img/sushi_lounge_logo.png";
  img.alt = "logo";
  let contact = new ElementCreator('a', 'nav__el', nav, "contact").addId("contact")
  let booknow = new ElementCreator('a', 'nav__el', nav, "book now").addId("booknow")
}

