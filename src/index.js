import './style/style.scss';
import { createNav } from './jsfolder/nav';
import { createMain } from './jsfolder/mainpage';
import changePages from './jsfolder/eventListeners';

createNav();
createMain();
changePages();
