
import { ElementCreator, container, cont } from './elementCreator';


export function createContact() {
  let cont = new ElementCreator('div', 'cont', container).getNodeByClass()
  let formContainer = new ElementCreator('div', 'form', cont).getNodeByClass()
  let side = new ElementCreator('div', 'side', cont).getNodeByClass()

  let form = new ElementCreator('form', 'form__form', formContainer).getNodeByClass()
  let name = new ElementCreator('input', 'input__name', form).getNodeByClass()
  let email = new ElementCreator('input', 'input__email', form).getNodeByClass()

}
