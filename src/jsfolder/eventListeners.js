import { navbar } from './nav';
import { createMain } from './mainpage';
import createMenu from './menupage';
import createContact from './contactpage';
import createBooking from './booknowpage';

export default function changePages() {
  function remove(elem) {
    elem.parentNode.removeChild(elem);
  }

  Object.keys(navbar).forEach(key => {
    const link = navbar[key];
    link.addEventListener('click', e => {
      const cont = document.querySelector('.cont');
      remove(cont);

      if (e.target.getAttribute('id') === 'home') {
        createMain();
      } else if (e.target.getAttribute('id') === 'menu') {
        createMenu();
      } else if (e.target.getAttribute('id') === 'contact') {
        createContact();
      } else {
        createBooking();
      }
    });
  });
}
