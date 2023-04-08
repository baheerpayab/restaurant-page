import curveBg from './assets/curve-bg.svg';
import sampleFood from './assets/sample-food.png';
import logoBlackSvg from './assets/logo-black.svg';
import loadHome from './home';

const setBackground = () => {
  document.body.style.background = '';

  const main = document.getElementById('main');

  const curveDiv = document.createElement('div');
  curveDiv.classList.add('curve-bg');

  const curveImg = document.createElement('img');
  curveImg.src = curveBg;
  curveImg.classList.add('curve-bg-img');

  const foodImgDiv = document.createElement('div');
  foodImgDiv.classList.add('food-div');

  const foodImg = document.createElement('img');
  foodImg.src = sampleFood;

  foodImgDiv.appendChild(foodImg);
  curveDiv.appendChild(curveImg);
  main.appendChild(curveDiv);
  main.appendChild(foodImgDiv);
};

const setNav = () => {
  const header = document.getElementById('header');
  header.style.justifyContent = 'space-between';

  const logo = document.createElement('img');
  logo.src = logoBlackSvg;
  logo.id = 'corner-logo';

  logo.addEventListener('click', loadHome);

  header.appendChild(logo);
};

const createMenu = () => {
  const menuDiv = document.createElement('div');
  menuDiv.id = 'menu-div';

  const createMenuItems = () => {
    const div = document.createElement('div');
    div.id = 'menu-items';
    console.log(div);

    for (let i = 1; i <= 4; i += 1) {
      const item = document.createElement('div');
      item.classList.add('item');
      item.id = `item-${i}`;

      const itemName = document.createElement('p');
      itemName.classList.add('item-name');
      itemName.id = `item-name-${i}`;

      const itemDesc = document.createElement('p');
      itemDesc.classList.add('item-desc');
      itemDesc.id = `item-desc-${i}`;

      item.appendChild(itemName);
      item.appendChild(itemDesc);

      div.appendChild(item);
    }

    const setStarters = (e) => {
      e.target.classList.add('active');

      document.getElementById('item-name-1').textContent = 'Buffalo Caprese';
      document.getElementById('item-desc-1').textContent = 'Fresh mozzarella with grape tomatoes and organic basil';

      document.getElementById('item-name-2').textContent = 'Ñoquis';
      document.getElementById('item-desc-2').textContent = 'Traditional gnocchi with a touch of spinach, topped off with parmesan';

      document.getElementById('item-name-3').textContent = 'Courgette Flowers';
      document.getElementById('item-desc-3').textContent = 'Courgette flowers with a dreamy combination of goat cheese and violet jelly';

      document.getElementById('item-name-4').textContent = 'Lamb Carpaccio';
      document.getElementById('item-desc-4').textContent = 'Traditional carpaccio with lamb, garnished with quails eggs and green beans';
    };

    const setMains = (e) => {
      e.target.classList.add('active');

    };

    const setDesserts = (e) => {
      e.target.classList.add('active');

    };

    const setDrinks = (e) => {
      e.target.classList.add('active');

    };

    return {
      setStarters,
      setMains,
      setDesserts,
      setDrinks,
      div,
    };
  };

  const createMenuSelect = () => {
    const menuSelect = document.createElement('div');
    menuSelect.id = 'menu-select';

    const starters = document.createElement('button');
    starters.textContent = 'starters';
    starters.id = 'starters';
    starters.classList.add('selection');
    starters.addEventListener('click', createMenuItems().setStarters);

    const mains = document.createElement('button');
    mains.textContent = 'mains';
    mains.id = 'mains';
    mains.classList.add('selection');
    mains.addEventListener('click', createMenuItems().setMains);

    const desserts = document.createElement('button');
    desserts.textContent = 'desserts';
    desserts.id = 'desserts';
    desserts.classList.add('selection');
    desserts.addEventListener('click', createMenuItems().setDesserts);

    const drinks = document.createElement('button');
    drinks.textContent = 'drinks';
    drinks.id = 'drinks';
    drinks.classList.add('selection');
    drinks.addEventListener('click', createMenuItems().setDrinks);

    menuSelect.appendChild(starters);
    menuSelect.appendChild(mains);
    menuSelect.appendChild(desserts);
    menuSelect.appendChild(drinks);

    return menuSelect;
  };

  menuDiv.appendChild(createMenuSelect());
  menuDiv.appendChild(createMenuItems().div);

  return menuDiv;
};

const hoverImages = () => {

};

const loadMenu = () => {
  const main = document.getElementById('main');
  main.innerHTML = '';

  setBackground();
  setNav();

  main.appendChild(createMenu());
  const starters = document.getElementById('starters');
  starters.click();
};

export default loadMenu;
