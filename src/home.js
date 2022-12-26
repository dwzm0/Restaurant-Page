function createHome() {
  const home = document.createElement('div');
  home.classList.add('home-container');

  const firstHead = document.createElement('h2');
  firstHead.innerHTML = 'Greetings! Try the BEST food of the UK!';
  const image = document.createElement('img');
  image.src = 'assets/Fish_and_chips_normal-transformed.png';
  image.alt = 'Fish and chips';
  image.classList.add('home-image');
  const homeDisc = document.createElement('p');
  homeDisc.textContent = 'Try the absolute gold of UK cooking tradition!';
  homeDisc.classList.add('home-p');
  home.append(firstHead, image, homeDisc);

  return home;
}

function appendHome() {
  const main = document.getElementById('main');
  main.textContent = '';
  main.append(createHome());
}

export default appendHome;
