function createMenuItem(name, description) {
  const menuItem = document.createElement('div');
  menuItem.classList.add('menu-container');

  const itemName = document.createElement('h2');
  itemName.textContent = name;

  const itemDescription = document.createElement('p');
  itemDescription.textContent = description;

  const itemImage = document.createElement('img');
  itemImage.src = `assets/menu-images/${name.toLowerCase()}.png`;
  itemImage.alt = `${name}`;

  menuItem.append(itemName, itemImage, itemDescription);

  return menuItem;
}

function loadMenu() {
  const menu = document.createElement('div');
  menu.classList.add('menu');

  menu.append(
    createMenuItem(
      'Deep Fried Mars',
      'Invented in Scotland, this dish has now become famous worldwide. It is an excellent source of fat, sugar and calories.'
    )
  );
  menu.append(
    createMenuItem(
      'Faggots',
      "Faggots are meatballs made from minced off-cuts and offal, especially pork ( traditionally pig's heart, liver, and fatty belly meat or bacon ) together with herbs for flavouring and sometimes added bread crumbs."
    )
  );
  menu.append(
    createMenuItem(
      'Spotted Dick',
      'Spotted dick is a traditional British steamed pudding, historically made with suet and dried fruit and often served with custard.'
    )
  );
  menu.append(createMenuItem('Stargazy pie', 'What. Is. That?'));
  menu.append(
    createMenuItem(
      'Banana Pizza',
      'Yes. Very popular in Sweden but also in UK. Disgusting!'
    )
  );
  return menu;
}

function appendMenu() {
  const main = document.getElementById('main');
  main.textContent = '';
  main.append(loadMenu());
}

export default appendMenu;
