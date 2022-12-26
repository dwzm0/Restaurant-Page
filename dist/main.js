/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createHome() {\n  const home = document.createElement('div');\n  home.classList.add('home-container');\n\n  const firstHead = document.createElement('h2');\n  firstHead.innerHTML = 'Greetings! Try the BEST food of the UK!';\n  const image = document.createElement('img');\n  image.src = 'assets/Fish_and_chips_normal-transformed.png';\n  image.alt = 'Fish and chips';\n  image.classList.add('home-image');\n  const homeDisc = document.createElement('p');\n  homeDisc.textContent = 'Try the absolute gold of UK cooking tradition!';\n  homeDisc.classList.add('home-p');\n  home.append(firstHead, image, homeDisc);\n\n  return home;\n}\n\nfunction appendHome() {\n  const main = document.getElementById('main');\n  main.textContent = '';\n  main.append(createHome());\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (appendHome);\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./map */ \"./src/map.js\");\n\n\n\n\nfunction createHeader() {\n  const header = document.createElement('header');\n  const logo = document.createElement('h1');\n  logo.textContent = 'UK GOLD';\n  const ul = document.createElement('ul');\n\n  const firstMenu = document.createElement('li');\n  const secondMenu = document.createElement('li');\n  const thirdMenu = document.createElement('li');\n\n  firstMenu.classList.add('tab-class');\n  firstMenu.textContent = 'Home';\n  secondMenu.textContent = 'Menu';\n  thirdMenu.textContent = 'Map';\n\n  firstMenu.addEventListener('click', (e) => {\n    if (e.target.classList.contains('active')) return;\n    setActiveButton(firstMenu);\n    (0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  });\n\n  secondMenu.addEventListener('click', (e) => {\n    if (e.target.classList.contains('active')) return;\n    setActiveButton(secondMenu);\n    (0,_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  });\n\n  thirdMenu.addEventListener('click', (e) => {\n    if (e.target.classList.contains('active')) return;\n    setActiveButton(thirdMenu);\n    (0,_map__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  });\n\n  ul.append(firstMenu, secondMenu, thirdMenu);\n  header.append(logo, ul);\n\n  return header;\n}\n\nfunction setActiveButton(button) {\n  const btns = document.querySelectorAll('li');\n\n  btns.forEach((btn) => {\n    if (btn !== this) {\n      btn.classList.remove('active');\n    }\n  });\n\n  button.classList.add('active');\n}\n\nfunction createMain() {\n  const main = document.createElement('main');\n  main.classList.add('main');\n  main.setAttribute('id', 'main');\n  return main;\n}\n\nfunction createFooter() {\n  const footer = document.createElement('footer');\n  const copy = document.createElement('p');\n  copy.textContent = `Copyright © ${new Date().getFullYear()} `;\n  const gLink = document.createElement('a');\n  gLink.textContent = 'dwzm0';\n  gLink.href = 'https://github.com/dwzm0';\n  footer.append(copy, gLink);\n\n  return footer;\n}\n\nfunction createWebsite() {\n  const content = document.getElementById('content');\n  content.append(createHeader(), createMain(), createFooter());\n  setActiveButton(document.querySelector('li'));\n  (0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n}\n\ncreateWebsite();\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/map.js":
/*!********************!*\
  !*** ./src/map.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction loadMap() {\n  const mapContainer = document.createElement('div');\n  mapContainer.classList.add('map-container');\n  const mapInfo = document.createElement('div');\n  mapInfo.classList.add('map-info');\n  const p = document.createElement('p');\n  p.textContent =\n    \"Very cool place. Trust me. Don't pay attention on your stomach.\";\n  mapInfo.append(p);\n  const map = document.createElement('div');\n  map.innerHTML = `<iframe\nsrc=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d369.0958411032714!2d-0.13584716599353389!3d51.51374881523108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604d4bd2fce31%3A0x5d407275930c797a!2s26-28%20Broadwick%20St%2C%20London%20W1F%208JB%2C%20UK!5e0!3m2!1sen!2sua!4v1671990276398!5m2!1sen!2sua\"\nwidth=\"600\"\nheight=\"450\"\nstyle=\"border:0;\"\nallowfullscreen=\"\"\nloading=\"lazy\"\nreferrerpolicy=\"no-referrer-when-downgrade\"\n></iframe>;`;\n\n  mapContainer.append(mapInfo, map);\n  return mapContainer;\n}\n\nfunction appendMap() {\n  const main = document.getElementById('main');\n  main.textContent = '';\n  main.append(loadMap());\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (appendMap);\n\n\n//# sourceURL=webpack://restaurant-page/./src/map.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createMenuItem(name, description) {\n  const menuItem = document.createElement('div');\n  menuItem.classList.add('menu-container');\n\n  const itemName = document.createElement('h2');\n  itemName.textContent = name;\n\n  const itemDescription = document.createElement('p');\n  itemDescription.textContent = description;\n\n  const itemImage = document.createElement('img');\n  itemImage.src = `assets/menu-images/${name.toLowerCase()}.png`;\n  itemImage.alt = `${name}`;\n\n  menuItem.append(itemName, itemImage, itemDescription);\n\n  return menuItem;\n}\n\nfunction loadMenu() {\n  const menu = document.createElement('div');\n  menu.classList.add('menu');\n\n  menu.append(\n    createMenuItem(\n      'Deep Fried Mars',\n      'Invented in Scotland, this dish has now become famous worldwide. It is an excellent source of fat, sugar and calories.'\n    )\n  );\n  menu.append(\n    createMenuItem(\n      'Faggots',\n      \"Faggots are meatballs made from minced off-cuts and offal, especially pork ( traditionally pig's heart, liver, and fatty belly meat or bacon ) together with herbs for flavouring and sometimes added bread crumbs.\"\n    )\n  );\n  menu.append(\n    createMenuItem(\n      'Spotted Dick',\n      'Spotted dick is a traditional British steamed pudding, historically made with suet and dried fruit and often served with custard.'\n    )\n  );\n  menu.append(createMenuItem('Stargazy pie', 'What. Is. That?'));\n  menu.append(\n    createMenuItem(\n      'Banana Pizza',\n      'Yes. Very popular in Sweden but also in UK. Disgusting!'\n    )\n  );\n  return menu;\n}\n\nfunction appendMenu() {\n  const main = document.getElementById('main');\n  main.textContent = '';\n  main.append(loadMenu());\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (appendMenu);\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;