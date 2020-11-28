import { ElementCreator, container } from './elementCreator';

const exports = {};
const createBooking = () => {
  const cont = new ElementCreator('div', 'cont', container).getNodeByClass();
  const calendat = new ElementCreator('div', 'calendar', cont).getNodeByClass();

  const sendToExports = () => {
    exports.calendat = calendat;
  };
  sendToExports();
};

export default createBooking;