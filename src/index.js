import appendHome from './home';
import appendMenu from './menu';
import appendMap from './map';

function createHeader() {
  const header = document.createElement('header');
  const logo = document.createElement('h1');
  logo.textContent = 'UK GOLD';
  const ul = document.createElement('ul');

  const firstMenu = document.createElement('li');
  const secondMenu = document.createElement('li');
  const thirdMenu = document.createElement('li');

  firstMenu.classList.add('tab-class');
  firstMenu.textContent = 'Home';
  secondMenu.textContent = 'Menu';
  thirdMenu.textContent = 'Map';

  firstMenu.addEventListener('click', (e) => {
    if (e.target.classList.contains('active')) return;
    setActiveButton(firstMenu);
    appendHome();
  });

  secondMenu.addEventListener('click', (e) => {
    if (e.target.classList.contains('active')) return;
    setActiveButton(secondMenu);
    appendMenu();
  });

  thirdMenu.addEventListener('click', (e) => {
    if (e.target.classList.contains('active')) return;
    setActiveButton(thirdMenu);
    appendMap();
  });

  ul.append(firstMenu, secondMenu, thirdMenu);
  header.append(logo, ul);

  return header;
}

function setActiveButton(button) {
  const btns = document.querySelectorAll('li');

  btns.forEach((btn) => {
    if (btn !== this) {
      btn.classList.remove('active');
    }
  });

  button.classList.add('active');
}

function createMain() {
  const main = document.createElement('main');
  main.classList.add('main');
  main.setAttribute('id', 'main');
  return main;
}

function createFooter() {
  const footer = document.createElement('footer');
  const copy = document.createElement('p');
  copy.textContent = `Copyright © ${new Date().getFullYear()} `;
  const gLink = document.createElement('a');
  gLink.textContent = 'dwzm0';
  gLink.href = 'https://github.com/dwzm0';
  footer.append(copy, gLink);

  return footer;
}

function createWebsite() {
  const content = document.getElementById('content');
  content.append(createHeader(), createMain(), createFooter());
  setActiveButton(document.querySelector('li'));
  appendHome();
}

createWebsite();
