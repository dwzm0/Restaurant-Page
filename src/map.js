function loadMap() {
  const mapContainer = document.createElement('div');
  mapContainer.classList.add('map-container');
  const mapInfo = document.createElement('div');
  mapInfo.classList.add('map-info');
  const p = document.createElement('p');
  p.textContent =
    "Very cool place. Trust me. Don't pay attention on your stomach.";
  mapInfo.append(p);
  const map = document.createElement('div');
  map.innerHTML = `<iframe
src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d369.0958411032714!2d-0.13584716599353389!3d51.51374881523108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604d4bd2fce31%3A0x5d407275930c797a!2s26-28%20Broadwick%20St%2C%20London%20W1F%208JB%2C%20UK!5e0!3m2!1sen!2sua!4v1671990276398!5m2!1sen!2sua"
width="600"
height="450"
style="border:0;"
allowfullscreen=""
loading="lazy"
referrerpolicy="no-referrer-when-downgrade"
></iframe>;`;

  mapContainer.append(mapInfo, map);
  return mapContainer;
}

function appendMap() {
  const main = document.getElementById('main');
  main.textContent = '';
  main.append(loadMap());
}

export default appendMap;
