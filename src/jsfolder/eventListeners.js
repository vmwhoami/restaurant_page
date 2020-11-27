
import { navbar } from "./nav";
import { createMain } from './mainpage';
import { createMenu } from './menupage';
import { createContact } from './contactpage';


export function changePages() {
  for (const key in navbar) {
    if (navbar.hasOwnProperty(key)) {
      const link = navbar[key];
      link.addEventListener('click', e => {
        let cont = document.querySelector('.cont')
        remove(cont)

        if (e.target.getAttribute('id') === 'home') {
          createMain()
        } else if (e.target.getAttribute('id') === 'menu') {
          createMenu()
        } else if (e.target.getAttribute('id') === 'contact') {
          createContact()
        }
      })
    }
  }

  function remove(elem) {
    elem.parentNode.removeChild(elem);
  }

}
