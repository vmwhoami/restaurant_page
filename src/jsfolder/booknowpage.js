import { ElementCreator, container } from './elementCreator';

const exports = {};
export default function createBooking() {
  const cont = new ElementCreator('div', 'cont', container).getNodeByClass();
  const calendat = new ElementCreator('div', 'calendar', cont).getNodeByClass();

  function sendToExports() {
    exports.calendat = calendat;
  }
  sendToExports();
}
