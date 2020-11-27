import './style/style.scss';
import { ElementCreator, content } from './jsfolder/elementCreator';


let container = new ElementCreator('div', 'container', content).getNodeByClass()
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
let info = new ElementCreator('div', 'info', container).getNodeByClass()
let main = new ElementCreator('div', 'main', info).getNodeByClass()
let mainHeading = new ElementCreator('div', 'main__heading', main).getNodeByClass()
let promo = new ElementCreator('span', 'main__promo', mainHeading, "promo").getNodeByClass()
let h1 = new ElementCreator('h1', 'main__h1', mainHeading, "Amazing Table with River View & a lot of Menus").getNodeByClass()
let btn = new ElementCreator('a', 'btn', mainHeading, "Check").getNodeByClass()
let side = new ElementCreator('div', 'side', info).getNodeByClass()
let sideImgContainer = new ElementCreator('div', 'side__imgcontainer', side).getNodeByClass()
let leftimage = new ElementCreator('img', 'side__img', sideImgContainer).getNodeByClass()
leftimage.src = "../src/img/sushi.jpg";
leftimage.alt = "sushi plate"





