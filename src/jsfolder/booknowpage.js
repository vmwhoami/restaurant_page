import { ElementCreator, container } from './elementCreator';

export default function createBooking() {
  const cont = new ElementCreator('div', 'cont', container).getNodeByClass();
}
