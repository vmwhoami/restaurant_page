
import { ElementCreator, container, cont } from './elementCreator';


export function createContact() {
  let cont = new ElementCreator('div', 'cont', container).getNodeByClass()
  let formContainer = new ElementCreator('div', 'form', cont).getNodeByClass()

  let map = new ElementCreator('div', 'map', cont).getNodeByClass()

  let iframe = new ElementCreator('iframe', 'iframe', map).getNodeByClass()
  iframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8883.972111763507!2d-0.15423895244181055!3d50.82881173601424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe6ef33baa40d0dee!2sThe%20Lion%20%26%20Lobster!5e0!3m2!1sen!2s!4v1606515708430!5m2!1sen!2s"
  let form = new ElementCreator('form', 'form__form', formContainer).getNodeByClass()
  let name = new ElementCreator('input', 'input__name', form).getNodeByClass()
  name.placeholder = "Name..."
  let email = new ElementCreator('input', 'input__email', form).getNodeByClass()
  email.placeholder = "Email..."
  let message = new ElementCreator('input', 'input__message', form).getNodeByClass()
  message.placeholder = "Your message..."

  let btn = new ElementCreator('a', 'btn', form, "send").getNodeByClass()

}
