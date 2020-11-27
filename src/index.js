import './style/style.scss';
// import { ElementCreator, container } from './jsfolder/elementCreator';
import { createNav } from './jsfolder/nav';
import { createMain } from './jsfolder/mainpage';
import { changePages } from './jsfolder/eventListeners';

createNav();
createMain();
changePages();
