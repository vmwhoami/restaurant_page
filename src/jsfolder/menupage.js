import { ElementCreator, container } from './elementCreator';

const createMenu = () => {
  const cont = new ElementCreator('div', 'cont', container).getNodeByClass();
  const menu = new ElementCreator('div', 'menu', cont).getNodeByClass();

  const garbage = {};
  const menuCreate = (num) => {
    for (let i = 0; i < num; i += 1) {
      const menuImgConts = new ElementCreator('div', 'menu__imgcont', menu);
      garbage.menuImgConts = menuImgConts;
      delete garbage.menuImgConts;
    }
  };
  menuCreate(4);
  const menuContainers = document.querySelectorAll('.menu__imgcont');

  menuContainers.forEach(elem => {
    const menuInfos = new ElementCreator('div', 'menu__info', elem);
    garbage.menuInfos = menuInfos;
    delete garbage.menuInfos;
  });

  const menuInfo = document.querySelectorAll('.menu__info');

  menuInfo.forEach(elem => {
    const menuH2 = new ElementCreator('h2', 'menu__h2', elem, 'This is going to');
    const menuSpan = new ElementCreator('span', 'menu__span', elem, '120$');
    const menuP = new ElementCreator('p', 'menu__p', elem, 'text goes here');
    const menuBtn = new ElementCreator('a', 'menu__btn', elem, 'order now');
    garbage.menuH2 = menuH2;
    garbage.menuSpan = menuSpan;
    garbage.menuP = menuP;
    garbage.menuBtn = menuBtn;
    delete garbage.menuH2;
    delete garbage.menuSpan;
    delete garbage.menuP;
    delete garbage.menuBtn;
  });

  const img1 = document.createElement('img');
  img1.alt = 'sushi_caviar';
  img1.src = '../src/img/sushi_caviar.jpg';
  menuContainers[0].appendChild(img1);

  const img2 = document.createElement('img');
  img2.alt = 'sushi_fila';
  img2.src = '../src/img/sushi_fila.jpg';
  menuContainers[1].appendChild(img2);

  const img3 = document.createElement('img');
  img3.alt = 'sushi_rolls';
  img3.src = '../src/img/sushi_rolls.jpg';
  menuContainers[2].appendChild(img3);

  const img4 = document.createElement('img');
  img4.src = '../src/img/sushi.jpg';
  menuContainers[3].appendChild(img4);
};

export default createMenu;