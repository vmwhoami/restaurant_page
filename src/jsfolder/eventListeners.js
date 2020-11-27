
import { navbar } from "./nav";
import { createMain, con } from './mainpage';

export function changePages() {
  for (const key in navbar) {
    if (navbar.hasOwnProperty(key)) {
      const link = navbar[key];
      link.addEventListener('click', e => {
        con.cont.parentNode.removeChild(con.cont)

        if (e.target.getAttribute('id') === 'home') {
          createMain()
        }
      })
    }
  }

}
