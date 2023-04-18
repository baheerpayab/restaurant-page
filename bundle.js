/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box;\n}\n\nhtml {\n  height: 100%;\n  width: 100%;\n}\n\nbody {\n  font-family: 'Poppins', sans-serif;\n  width: 100%;\n  height: 100%;\n  margin: auto;\n  overflow-y: hidden;\n}\n\nh1, h2, h3, h4, h5, p {\n  margin: 0;\n}\n\nbutton {\n  font-family: 'Poppins', sans-serif;\n}\n\n#content {\n  height: 100%;\n  width: 100%;\n}\n\nheader {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  margin: auto;\n  padding: 50px 50px 0 50px;\n  z-index: 3;\n}\n\nmain {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  margin: auto;\n}\n\n.gallery {\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  align-self: center;\n  width: 100%;\n  min-height: 100%;\n  overflow: hidden;\n}\n\n.gallery-div {\n  position: absolute;\n  width: 50%;\n  height: 600px;\n  text-align: center;\n  top: 100px;\n  left: 50%;\n  margin-left: -25%;\n}\n\n#logo-div {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n}\n\n#home-logo {\n  height: 175px;\n}\n\n#slogan {\n  margin: 0;\n  color: white;\n  font-size: 32px;\n  font-weight: 300;\n}\n\n.line-through {\n  text-decoration: line-through;\n  text-decoration-thickness: 2px;\n}\n\n.underline {\n  text-decoration: underline;\n  text-decoration-thickness: 2px;\n  text-underline-offset: 2px;\n}\n\n.bold {\n  font-weight: 600;\n}\n\n#michelin-div{\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  left: 150%;\n  gap: 20px;\n}\n\n#stars {\n  width: 65%;\n}\n\n#stars-text {\n  color: white;\n  font-size: 24px;\n  font-style: italic;\n  font-weight: 300px;\n  margin: 0;\n  width: 75%;\n}\n\n#quote-div {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  left: -150%;\n  gap: 20px;\n}\n\n#quote {\n  color: white;\n  margin: 0;\n  font-style: italic;\n  font-size: 42px;\n  font-weight: 300;\n}\n\n#quote-name {\n  color: white;\n  margin: 0;\n  font-style: italic;\n  font-size: 32px;\n  font-weight: 400;\n}\n\nnav {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 20px;\n  order: 2;\n}\n\n.nav-btn {\n  color: white;\n  font-size: 28px;\n  font-weight: 300;\n  border: 2px solid white;\n  background: none;\n  padding: 5px 20px;\n  transition: 500ms;\n}\n\n.nav-btn:hover {\n  cursor: pointer;\n  background-color: white;\n  color: black;\n}\n\n.nav-btn.active {\n  background-color: white;\n  color: black;\n}\n\n/* MENU */\n\n.curve-bg {\n  height: 100%;\n  width: 100%;\n  z-index: 1;\n}\n\n.curve-bg-img {\n  position: absolute;\n  left: -850px;\n}\n\n.background-img-div {\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 75%;\n  height: 125%;\n  z-index: 0;\n  overflow: hidden;\n}\n\n.background-img {\n  opacity: 100%;\n  transition: 500ms;\n  animation: fade-in 500ms ease-in-out;\n  max-height: 100%;\n}\n\n#corner-logo {\n  height: 115px;\n  fill: black;\n  order: 1;\n  cursor: pointer;\n}\n\n#menu-div {\n  position: absolute;\n  left: 75px;\n  top: 30%;\n\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  z-index: 2;\n  gap: 80px;\n}\n\n#menu-select {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 30px;\n}\n\n#menu-items {\n  display: flex;\n  flex-direction: column;\n}\n\n.selection {\n  min-width: 260px;\n  font-size: 28px;\n  font-weight: 300;\n  border: 3px solid black;\n  background: none;\n  padding: 5px 0 5px 0;\n  transition: 500ms;\n  color: black;\n}\n\n.selection:hover {\n  background-color: black;\n  color: white;\n  cursor: pointer;\n}\n\n.selection.active {\n  background-color: black;\n  color: white;\n}\n\n.item {\n  display: flex;\n  flex-direction: column;\n  width: 450px;\n  padding-bottom: 30px;\n}\n\n.item-name {\n  font-size: 28px;\n  font-weight: 300;\n  color: black;\n}\n\n.item-desc {\n  font-size: 18px;\n  font-weight: 200;\n  font-style: italic;\n  color: black;\n}\n\n.hidden {\n  display: none;\n}\n\n/* CONTACT PAGE */\n\n#contact-img {\n  position: absolute;\n  right: 0;\n}\n\n#info-parent-div {\n  position: absolute;\n  left: 75px;\n  top: 30%;\n\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n\n  width: 750px;\n  height: 450px;\n}\n\n#info-div {\n  \n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  align-items: flex-end;\n  z-index: 2;\n\n}\n\n.info-sub-div {\n  display: flex;\n  flex-direction: column;\n\n  height: 60px;\n  width: 650px;\n  overflow-y: hidden;\n\n  transition: height 500ms ease-in-out;\n  padding-bottom: 20px;\n}\n\n.info-sub-div:hover {\n  height: 250px;\n}\n\n.info-sub-div.active {\n  height: 250px;\n}\n\n.contact-heading {\n  border: 2px solid black;\n  padding-left: 20px;\n  \n  font-size: 28px;\n  font-weight: 300;\n}\n\n.info-sub-div.active .contact-heading {\n  background-color: black; \n  color: white;\n}\n\n.info-sub-div:hover .contact-heading { \n  background-color: black; \n  color: white;\n}\n\n.contact-text {\n  font-size: 24px;\n  font-weight: 200;\n  font-style: italic;\n  white-space: pre-line;\n\n  padding: 20px 0px 0px 20px;\n}\n\n#booking-div:hover {\n  height: 200px\n}\n\na {\n  color: black;\n}\n\na:focus {\n  color: grey;\n}\n\n#support-email:hover {\n  cursor: pointer;\n}\n\n#review-div:hover {\n  height: 350px;\n}\n\n#review-form {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  align-items: flex-start;\n  justify-content: flex-start;\n  row-gap: 20px;\n  column-gap: 5%;\n\n  padding-top: 20px;\n\n  width: 100%;\n  height: 200px;\n}\n\n\ninput {\n  font-family: 'Poppins', sans-serif;\n  font-size: 14px;\n\n  width: 45%;\n  height: 3rem;\n  border: 2px solid black;\n  padding-left: 10px;\n\n  outline: none;\n}\n\ntextarea {\n  font-family: 'Poppins', sans-serif;\n  font-size: 16px;\n\n  width: 95%;\n  border: 2px solid black;\n  background: none;\n  outline: none;\n\n  padding: 10px;\n\n}\n\nbutton[type='submit'] {\n  width: 5rem;\n  height: 3rem;\n  border: 2px solid black;\n  color: black;\n  background: none;\n}\n\nbutton[type='submit']:hover {\n  background-color: black;\n  color: white;\n  cursor: pointer;\n}\n\n/* FOOTER */\n\n.fa-github {\n  scale: 2;\n  color: white;\n\n  position: absolute;\n  right: 30px;\n  bottom: 30px;\n  z-index: 3;\n}\n\n.fa-github:hover {\n  transition: 0.3s;\n  scale: 2.2;\n  rotate: 360deg;\n  cursor: pointer;\n}\n\n/* KEYFRAMES */\n\n@keyframes fade-in {\n  0% {\n    display: block;\n    opacity: 0%;\n  }\n  100% {\n    opacity: 100%;\n  }\n}\n\n@keyframes grow {\n  0% {\n    scale: 1;\n  }\n  100% {\n    scale: 1.2;\n  }\n}\n\n/* MEDIA QUERIES */\n\n@media (max-width: 1080px) {\n  .curve-bg-img {\n    left: -55%;\n  }\n}\n\n@media (max-width: 1200px) {\n  .nav-btn {\n    color: black;\n    border: 2px solid black;\n  }\n  \n  .nav-btn:hover {\n    background-color: black;\n    color: white;\n  }\n  \n  .nav-btn.active {\n    background-color: rgb(0, 0, 0);\n    color: white;\n  }\n\n  .nav-btn.home {\n    color: white;\n    border: 2px solid white;\n  }\n\n  .nav-btn.home:hover {\n    color: black;\n    background-color: white;\n  }\n}\n\n@media (max-width: 850px) {\n\n  header {\n    width: min-content;\n    margin: auto;\n    justify-content: center;\n    align-items: center;\n    flex-direction: row;\n    flex-wrap: wrap;\n    column-gap: 50px;\n    row-gap: 20px;\n  }\n\n\n  .background-img-div {\n    display: none;\n  }\n\n  .curve-bg {\n    display: none;\n  }\n\n  #menu-div {\n    position: relative;\n    top: auto;\n    left: auto;\n    margin: auto;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: flex-start;\n    gap: 20px;\n    padding-top: 180px;\n    width: 90%;\n  }\n\n  #menu-select {\n    flex-direction: row;\n    align-items: flex-start;\n    justify-content: flex-start;\n    width: 100%;\n    overflow: scroll;\n    order: 2;\n  }\n\n  #menu-items {\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-items: center;\n    order: 1;\n    gap: 30px;\n  }\n\n  .item {\n    width: 45%;\n  }\n\n  .item-name {\n    font-size: 3.5vw;\n  }\n  \n  .item-desc {\n    font-size: 2vw;\n  }\n\n  #info-parent-div {\n    position: relative;\n    top: auto;\n    left: auto;\n    margin: auto;\n    width: 80%;\n    padding-top: 230px;\n  }\n\n  #info-div {\n    width: 100%;\n  }\n\n  .info-sub-div {\n    width: 100%;\n  }\n\n  #booking-div:hover {\n    height: 270px\n  }\n\n  #inquiries-div:hover {\n    height: 300px\n  }\n\n}\n\n@media (max-width: 700px) {\n\n  #menu-div {\n    gap: 40px;\n  }\n\n  #menu-items {\n    flex-direction: column;\n    flex-wrap: nowrap;\n    gap: 20px;\n  }\n\n  .item {\n    padding: 0;\n    width: 80%;\n  }\n\n  .item-name {\n    font-size: 20px;\n  }\n  \n  .item-desc {\n    font-size: 16px;\n  }\n\n}\n\n@media (max-width: 570px) {\n\n  #home-logo {\n    height: 25vw;\n  }\n\n  #slogan {\n    font-size: 24px;\n  }\n\n}\n\n@media (max-width: 450px) {\n  .item-name {\n    font-size: 18px;\n  }\n  \n  .item-desc {\n    font-size: 14px;\n  }\n}\n\n@media (max-width: 400px) {\n\n  #stars-text {\n    width: 95%;\n  }\n\n  #quote {\n    font-size: 24px;\n    width: 95%;\n  }\n\n  #quote-name {\n    font-size: 18px;\n  }\n\n  /* MENU */\n\n  /* CONTACT */\n\n  \n\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');\n\n* {\n  box-sizing: border-box;\n}\n\nhtml {\n  height: 100%;\n  width: 100%;\n}\n\nbody {\n  font-family: 'Poppins', sans-serif;\n  width: 100%;\n  height: 100%;\n  margin: auto;\n  overflow-y: hidden;\n}\n\nh1, h2, h3, h4, h5, p {\n  margin: 0;\n}\n\nbutton {\n  font-family: 'Poppins', sans-serif;\n}\n\n#content {\n  height: 100%;\n  width: 100%;\n}\n\nheader {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  margin: auto;\n  padding: 50px 50px 0 50px;\n  z-index: 3;\n}\n\nmain {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  margin: auto;\n}\n\n.gallery {\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  align-self: center;\n  width: 100%;\n  min-height: 100%;\n  overflow: hidden;\n}\n\n.gallery-div {\n  position: absolute;\n  width: 50%;\n  height: 600px;\n  text-align: center;\n  top: 100px;\n  left: 50%;\n  margin-left: -25%;\n}\n\n#logo-div {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n}\n\n#home-logo {\n  height: 175px;\n}\n\n#slogan {\n  margin: 0;\n  color: white;\n  font-size: 32px;\n  font-weight: 300;\n}\n\n.line-through {\n  text-decoration: line-through;\n  text-decoration-thickness: 2px;\n}\n\n.underline {\n  text-decoration: underline;\n  text-decoration-thickness: 2px;\n  text-underline-offset: 2px;\n}\n\n.bold {\n  font-weight: 600;\n}\n\n#michelin-div{\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  left: 150%;\n  gap: 20px;\n}\n\n#stars {\n  width: 65%;\n}\n\n#stars-text {\n  color: white;\n  font-size: 24px;\n  font-style: italic;\n  font-weight: 300px;\n  margin: 0;\n  width: 75%;\n}\n\n#quote-div {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  left: -150%;\n  gap: 20px;\n}\n\n#quote {\n  color: white;\n  margin: 0;\n  font-style: italic;\n  font-size: 42px;\n  font-weight: 300;\n}\n\n#quote-name {\n  color: white;\n  margin: 0;\n  font-style: italic;\n  font-size: 32px;\n  font-weight: 400;\n}\n\nnav {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 20px;\n  order: 2;\n}\n\n.nav-btn {\n  color: white;\n  font-size: 28px;\n  font-weight: 300;\n  border: 2px solid white;\n  background: none;\n  padding: 5px 20px;\n  transition: 500ms;\n}\n\n.nav-btn:hover {\n  cursor: pointer;\n  background-color: white;\n  color: black;\n}\n\n.nav-btn.active {\n  background-color: white;\n  color: black;\n}\n\n/* MENU */\n\n.curve-bg {\n  height: 100%;\n  width: 100%;\n  z-index: 1;\n}\n\n.curve-bg-img {\n  position: absolute;\n  left: -850px;\n}\n\n.background-img-div {\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 75%;\n  height: 125%;\n  z-index: 0;\n  overflow: hidden;\n}\n\n.background-img {\n  opacity: 100%;\n  transition: 500ms;\n  animation: fade-in 500ms ease-in-out;\n  max-height: 100%;\n}\n\n#corner-logo {\n  height: 115px;\n  fill: black;\n  order: 1;\n  cursor: pointer;\n}\n\n#menu-div {\n  position: absolute;\n  left: 75px;\n  top: 30%;\n\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  z-index: 2;\n  gap: 80px;\n}\n\n#menu-select {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 30px;\n}\n\n#menu-items {\n  display: flex;\n  flex-direction: column;\n}\n\n.selection {\n  min-width: 260px;\n  font-size: 28px;\n  font-weight: 300;\n  border: 3px solid black;\n  background: none;\n  padding: 5px 0 5px 0;\n  transition: 500ms;\n  color: black;\n}\n\n.selection:hover {\n  background-color: black;\n  color: white;\n  cursor: pointer;\n}\n\n.selection.active {\n  background-color: black;\n  color: white;\n}\n\n.item {\n  display: flex;\n  flex-direction: column;\n  width: 450px;\n  padding-bottom: 30px;\n}\n\n.item-name {\n  font-size: 28px;\n  font-weight: 300;\n  color: black;\n}\n\n.item-desc {\n  font-size: 18px;\n  font-weight: 200;\n  font-style: italic;\n  color: black;\n}\n\n.hidden {\n  display: none;\n}\n\n/* CONTACT PAGE */\n\n#contact-img {\n  position: absolute;\n  right: 0;\n}\n\n#info-parent-div {\n  position: absolute;\n  left: 75px;\n  top: 30%;\n\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n\n  width: 750px;\n  height: 450px;\n}\n\n#info-div {\n  \n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  align-items: flex-end;\n  z-index: 2;\n\n}\n\n.info-sub-div {\n  display: flex;\n  flex-direction: column;\n\n  height: 60px;\n  width: 650px;\n  overflow-y: hidden;\n\n  transition: height 500ms ease-in-out;\n  padding-bottom: 20px;\n}\n\n.info-sub-div:hover {\n  height: 250px;\n}\n\n.info-sub-div.active {\n  height: 250px;\n}\n\n.contact-heading {\n  border: 2px solid black;\n  padding-left: 20px;\n  \n  font-size: 28px;\n  font-weight: 300;\n}\n\n.info-sub-div.active .contact-heading {\n  background-color: black; \n  color: white;\n}\n\n.info-sub-div:hover .contact-heading { \n  background-color: black; \n  color: white;\n}\n\n.contact-text {\n  font-size: 24px;\n  font-weight: 200;\n  font-style: italic;\n  white-space: pre-line;\n\n  padding: 20px 0px 0px 20px;\n}\n\n#booking-div:hover {\n  height: 200px\n}\n\na {\n  color: black;\n}\n\na:focus {\n  color: grey;\n}\n\n#support-email:hover {\n  cursor: pointer;\n}\n\n#review-div:hover {\n  height: 350px;\n}\n\n#review-form {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  align-items: flex-start;\n  justify-content: flex-start;\n  row-gap: 20px;\n  column-gap: 5%;\n\n  padding-top: 20px;\n\n  width: 100%;\n  height: 200px;\n}\n\n\ninput {\n  font-family: 'Poppins', sans-serif;\n  font-size: 14px;\n\n  width: 45%;\n  height: 3rem;\n  border: 2px solid black;\n  padding-left: 10px;\n\n  outline: none;\n}\n\ntextarea {\n  font-family: 'Poppins', sans-serif;\n  font-size: 16px;\n\n  width: 95%;\n  border: 2px solid black;\n  background: none;\n  outline: none;\n\n  padding: 10px;\n\n}\n\nbutton[type='submit'] {\n  width: 5rem;\n  height: 3rem;\n  border: 2px solid black;\n  color: black;\n  background: none;\n}\n\nbutton[type='submit']:hover {\n  background-color: black;\n  color: white;\n  cursor: pointer;\n}\n\n/* FOOTER */\n\n.fa-github {\n  scale: 2;\n  color: white;\n\n  position: absolute;\n  right: 30px;\n  bottom: 30px;\n  z-index: 3;\n}\n\n.fa-github:hover {\n  transition: 0.3s;\n  scale: 2.2;\n  rotate: 360deg;\n  cursor: pointer;\n}\n\n/* KEYFRAMES */\n\n@keyframes fade-in {\n  0% {\n    display: block;\n    opacity: 0%;\n  }\n  100% {\n    opacity: 100%;\n  }\n}\n\n@keyframes grow {\n  0% {\n    scale: 1;\n  }\n  100% {\n    scale: 1.2;\n  }\n}\n\n/* MEDIA QUERIES */\n\n@media (max-width: 1080px) {\n  .curve-bg-img {\n    left: -55%;\n  }\n}\n\n@media (max-width: 1200px) {\n  .nav-btn {\n    color: black;\n    border: 2px solid black;\n  }\n  \n  .nav-btn:hover {\n    background-color: black;\n    color: white;\n  }\n  \n  .nav-btn.active {\n    background-color: rgb(0, 0, 0);\n    color: white;\n  }\n\n  .nav-btn.home {\n    color: white;\n    border: 2px solid white;\n  }\n\n  .nav-btn.home:hover {\n    color: black;\n    background-color: white;\n  }\n}\n\n@media (max-width: 850px) {\n\n  header {\n    width: min-content;\n    margin: auto;\n    justify-content: center;\n    align-items: center;\n    flex-direction: row;\n    flex-wrap: wrap;\n    column-gap: 50px;\n    row-gap: 20px;\n  }\n\n\n  .background-img-div {\n    display: none;\n  }\n\n  .curve-bg {\n    display: none;\n  }\n\n  #menu-div {\n    position: relative;\n    top: auto;\n    left: auto;\n    margin: auto;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: flex-start;\n    gap: 20px;\n    padding-top: 180px;\n    width: 90%;\n  }\n\n  #menu-select {\n    flex-direction: row;\n    align-items: flex-start;\n    justify-content: flex-start;\n    width: 100%;\n    overflow: scroll;\n    order: 2;\n  }\n\n  #menu-items {\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-items: center;\n    order: 1;\n    gap: 30px;\n  }\n\n  .item {\n    width: 45%;\n  }\n\n  .item-name {\n    font-size: 3.5vw;\n  }\n  \n  .item-desc {\n    font-size: 2vw;\n  }\n\n  #info-parent-div {\n    position: relative;\n    top: auto;\n    left: auto;\n    margin: auto;\n    width: 80%;\n    padding-top: 230px;\n  }\n\n  #info-div {\n    width: 100%;\n  }\n\n  .info-sub-div {\n    width: 100%;\n  }\n\n  #booking-div:hover {\n    height: 270px\n  }\n\n  #inquiries-div:hover {\n    height: 300px\n  }\n\n}\n\n@media (max-width: 700px) {\n\n  #menu-div {\n    gap: 40px;\n  }\n\n  #menu-items {\n    flex-direction: column;\n    flex-wrap: nowrap;\n    gap: 20px;\n  }\n\n  .item {\n    padding: 0;\n    width: 80%;\n  }\n\n  .item-name {\n    font-size: 20px;\n  }\n  \n  .item-desc {\n    font-size: 16px;\n  }\n\n}\n\n@media (max-width: 570px) {\n\n  #home-logo {\n    height: 25vw;\n  }\n\n  #slogan {\n    font-size: 24px;\n  }\n\n}\n\n@media (max-width: 450px) {\n  .item-name {\n    font-size: 18px;\n  }\n  \n  .item-desc {\n    font-size: 14px;\n  }\n}\n\n@media (max-width: 400px) {\n\n  #stars-text {\n    width: 95%;\n  }\n\n  #quote {\n    font-size: 24px;\n    width: 95%;\n  }\n\n  #quote-name {\n    font-size: 18px;\n  }\n\n  /* MENU */\n\n  /* CONTACT */\n\n  \n\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/assets/contact-bg.jpg":
/*!***********************************!*\
  !*** ./src/assets/contact-bg.jpg ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/contact-bg.jpg");

/***/ }),

/***/ "./src/assets/curve-bg.svg":
/*!*********************************!*\
  !*** ./src/assets/curve-bg.svg ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/curve-bg.svg");

/***/ }),

/***/ "./src/assets/home-bg.jpg":
/*!********************************!*\
  !*** ./src/assets/home-bg.jpg ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/home-bg.jpg");

/***/ }),

/***/ "./src/assets/logo-black.svg":
/*!***********************************!*\
  !*** ./src/assets/logo-black.svg ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/logo-black.svg");

/***/ }),

/***/ "./src/assets/logo.svg":
/*!*****************************!*\
  !*** ./src/assets/logo.svg ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/logo.svg");

/***/ }),

/***/ "./src/assets/menu-items/dessert-1.webp":
/*!**********************************************!*\
  !*** ./src/assets/menu-items/dessert-1.webp ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/dessert-1.webp");

/***/ }),

/***/ "./src/assets/menu-items/dessert-2.webp":
/*!**********************************************!*\
  !*** ./src/assets/menu-items/dessert-2.webp ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/dessert-2.webp");

/***/ }),

/***/ "./src/assets/menu-items/dessert-3.webp":
/*!**********************************************!*\
  !*** ./src/assets/menu-items/dessert-3.webp ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/dessert-3.webp");

/***/ }),

/***/ "./src/assets/menu-items/dessert-4.webp":
/*!**********************************************!*\
  !*** ./src/assets/menu-items/dessert-4.webp ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/dessert-4.webp");

/***/ }),

/***/ "./src/assets/menu-items/drink-1.jpg":
/*!*******************************************!*\
  !*** ./src/assets/menu-items/drink-1.jpg ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/drink-1.jpg");

/***/ }),

/***/ "./src/assets/menu-items/drink-2.jpg":
/*!*******************************************!*\
  !*** ./src/assets/menu-items/drink-2.jpg ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/drink-2.jpg");

/***/ }),

/***/ "./src/assets/menu-items/drink-3.jpg":
/*!*******************************************!*\
  !*** ./src/assets/menu-items/drink-3.jpg ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/drink-3.jpg");

/***/ }),

/***/ "./src/assets/menu-items/drink-4.jpg":
/*!*******************************************!*\
  !*** ./src/assets/menu-items/drink-4.jpg ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/drink-4.jpg");

/***/ }),

/***/ "./src/assets/menu-items/main-1.webp":
/*!*******************************************!*\
  !*** ./src/assets/menu-items/main-1.webp ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/main-1.webp");

/***/ }),

/***/ "./src/assets/menu-items/main-2.webp":
/*!*******************************************!*\
  !*** ./src/assets/menu-items/main-2.webp ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/main-2.webp");

/***/ }),

/***/ "./src/assets/menu-items/main-3.webp":
/*!*******************************************!*\
  !*** ./src/assets/menu-items/main-3.webp ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/main-3.webp");

/***/ }),

/***/ "./src/assets/menu-items/main-4.webp":
/*!*******************************************!*\
  !*** ./src/assets/menu-items/main-4.webp ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/main-4.webp");

/***/ }),

/***/ "./src/assets/menu-items/starter-1.webp":
/*!**********************************************!*\
  !*** ./src/assets/menu-items/starter-1.webp ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/starter-1.webp");

/***/ }),

/***/ "./src/assets/menu-items/starter-2.webp":
/*!**********************************************!*\
  !*** ./src/assets/menu-items/starter-2.webp ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/starter-2.webp");

/***/ }),

/***/ "./src/assets/menu-items/starter-3.webp":
/*!**********************************************!*\
  !*** ./src/assets/menu-items/starter-3.webp ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/starter-3.webp");

/***/ }),

/***/ "./src/assets/menu-items/starter-4.webp":
/*!**********************************************!*\
  !*** ./src/assets/menu-items/starter-4.webp ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/starter-4.webp");

/***/ }),

/***/ "./src/assets/michelin-stars.png":
/*!***************************************!*\
  !*** ./src/assets/michelin-stars.png ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/michelin-stars.png");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_curve_bg_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/curve-bg.svg */ "./src/assets/curve-bg.svg");
/* harmony import */ var _assets_logo_black_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/logo-black.svg */ "./src/assets/logo-black.svg");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _assets_contact_bg_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/contact-bg.jpg */ "./src/assets/contact-bg.jpg");






const setBackground = () => {
  document.body.style.background = '';

  const main = document.getElementById('main');

  const curveDiv = document.createElement('div');
  curveDiv.classList.add('curve-bg');

  const curveImg = document.createElement('img');
  curveImg.src = _assets_curve_bg_svg__WEBPACK_IMPORTED_MODULE_0__["default"];
  curveImg.classList.add('curve-bg-img');

  const backgroundImgDiv = document.createElement('div');
  backgroundImgDiv.classList.add('background-img-div');

  const backgroundImg = document.createElement('img');
  backgroundImg.id = 'contact-img';
  backgroundImg.src = _assets_contact_bg_jpg__WEBPACK_IMPORTED_MODULE_3__["default"];
  backgroundImg.classList.add('background-img');

  backgroundImgDiv.appendChild(backgroundImg);
  curveDiv.appendChild(curveImg);
  main.appendChild(curveDiv);
  main.appendChild(backgroundImgDiv);
};

const setNav = () => {
  if (!document.getElementById('corner-logo')) {
    const header = document.getElementById('header');
    header.style.justifyContent = 'space-between';
    const logo = document.createElement('img');
    logo.src = _assets_logo_black_svg__WEBPACK_IMPORTED_MODULE_1__["default"];
    logo.id = 'corner-logo';

    logo.addEventListener('click', _home__WEBPACK_IMPORTED_MODULE_2__["default"]);

    header.appendChild(logo);
  }

  const contactBtn = document.getElementById('contact-btn');
  const menuBtn = document.getElementById('menu-btn');
  menuBtn.classList.remove('active');
  menuBtn.classList.remove('home');
  contactBtn.classList.remove('home');
};

const createInfo = () => {
  const infoParentDiv = document.createElement('div');
  infoParentDiv.id = 'info-parent-div';

  const infoDiv = document.createElement('div');
  infoDiv.id = 'info-div';

  const createAddressDiv = () => {
    const div = document.createElement('div');
    div.classList.add('info-sub-div');
    div.id = 'address-div';

    const heading = document.createElement('div');
    heading.classList.add('contact-heading');
    heading.textContent = 'Address';

    const text = document.createElement('p');
    text.classList.add('contact-text');
    text.id = 'address-div';
    text.textContent = '“refined”\r\n3212 4th av.\r\nNew York City, NY\r\n212 332 2333';

    div.appendChild(heading);
    div.appendChild(text);

    div.classList.add('active');

    return div;
  };

  const createBookingDiv = () => {
    const div = document.createElement('div');
    div.classList.add('info-sub-div');
    div.id = 'booking-div';

    const heading = document.createElement('div');
    heading.classList.add('contact-heading');
    heading.textContent = 'Booking';

    const text = document.createElement('p');
    text.classList.add('contact-text');
    text.id = 'booking-div';
    text.innerHTML = 'To book a reservation, please either call us\r\n<span class="bold">212 332 2333</span>\r\n or click <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" target=”_blank”><span class="bold">here</span></a> to book online.';

    div.appendChild(heading);
    div.appendChild(text);

    return div;
  };

  const createInquiriesDiv = () => {
    const div = document.createElement('div');
    div.classList.add('info-sub-div');
    div.id = 'inquiries-div';

    const heading = document.createElement('div');
    heading.classList.add('contact-heading');
    heading.textContent = 'Inquiries';

    const text = document.createElement('p');
    text.classList.add('contact-text');
    text.id = 'inquiries-div';
    text.innerHTML = 'For further inquiries, send us an email at\r\n<span id="support-email" class="bold">support@refined.com</span>\r\nResponses can take up to a few hours.\r\nThank you!';

    div.appendChild(heading);
    div.appendChild(text);

    return div;
  };

  const createReviewDiv = () => {
    const div = document.createElement('div');
    div.classList.add('info-sub-div');
    div.id = 'review-div';

    const heading = document.createElement('div');
    heading.classList.add('contact-heading');
    heading.textContent = 'Review';

    const form = document.createElement('form');
    form.id = 'review-form';

    const firstName = document.createElement('input');
    firstName.type = 'text';
    firstName.required = true;
    firstName.placeholder = 'First Name';

    const lastName = document.createElement('input');
    lastName.type = 'text';
    lastName.required = true;
    lastName.placeholder = 'Last Name';

    const dateLabel = document.createElement('label');
    dateLabel.textContent = 'Visit Date';

    const date = document.createElement('input');
    date.type = 'date';
    date.required = true;
    date.placeholder = 'Date of Visit';

    const receipt = document.createElement('input');
    receipt.type = 'text';
    receipt.required = true;
    receipt.placeholder = 'Receipt Number e.g. #34D73c';

    const textArea = document.createElement('textarea');
    textArea.required = true;
    textArea.placeholder = 'Write your review here...';

    const submitBtn = document.createElement('button');
    submitBtn.type = 'submit';
    submitBtn.textContent = 'Submit';

    form.appendChild(firstName);
    form.appendChild(lastName);
    form.appendChild(date);
    form.appendChild(receipt);
    form.appendChild(textArea);
    form.appendChild(submitBtn);

    div.appendChild(heading);
    div.appendChild(form);

    return div;
  };

  infoDiv.appendChild(createAddressDiv());
  infoDiv.appendChild(createBookingDiv());
  infoDiv.appendChild(createInquiriesDiv());
  infoDiv.appendChild(createReviewDiv());

  infoParentDiv.appendChild(infoDiv);

  return infoParentDiv;
};

const enableDefaultHover = () => {
  const infoSubDivs = Array.from(document.getElementsByClassName('info-sub-div'));
  infoSubDivs.forEach((e) => {
    e.addEventListener('mouseover', () => {
      document.getElementById('address-div').classList.remove('active');
    });
    e.addEventListener('mouseout', () => {
      document.getElementById('address-div').classList.add('active');
    });
  });

  const url = document.getElementById('support-email');
  url.onclick = function copy() {
    navigator.clipboard.writeText(url.textContent);
    alert('Email copied!');
  };
};

const loadContact = () => {
  const main = document.getElementById('main');
  main.innerHTML = '';

  setBackground();
  setNav();

  main.appendChild(createInfo());
  enableDefaultHover();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);


/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_home_bg_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/home-bg.jpg */ "./src/assets/home-bg.jpg");
/* harmony import */ var _assets_logo_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/logo.svg */ "./src/assets/logo.svg");
/* harmony import */ var _assets_michelin_stars_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/michelin-stars.png */ "./src/assets/michelin-stars.png");




function setBackground() {
  document.body.style.background = `url(${_assets_home_bg_jpg__WEBPACK_IMPORTED_MODULE_0__["default"]})`;
  document.body.style.backgroundSize = 'cover';
}

function setNav() {
  const header = document.getElementById('header');
  header.style.justifyContent = 'center';

  if (document.getElementById('corner-logo')) {
    const cornerLogo = document.getElementById('corner-logo');
    cornerLogo.remove();
  }

  const menuBtn = document.getElementById('menu-btn');
  const contactBtn = document.getElementById('contact-btn');
  menuBtn.classList.remove('active');
  contactBtn.classList.remove('active');
  menuBtn.classList.add('home');
  contactBtn.classList.add('home');
}

function createGallery() {
  const gallery = document.createElement('div');
  gallery.classList.add('gallery');
  gallery.id = 'gallery';

  const logoDiv = () => {
    const div = document.createElement('div');
    div.id = 'logo-div';
    div.classList.add('gallery-div');

    const logo = document.createElement('img');
    logo.src = _assets_logo_svg__WEBPACK_IMPORTED_MODULE_1__["default"];
    logo.id = 'home-logo';

    const slogan = document.createElement('p');
    slogan.id = 'slogan';
    slogan.innerHTML = '<span class="underline">It\'s not</span> <span class="line-through">just food</span>. It\'s <span class="bold">art</span>.';

    div.appendChild(logo);
    div.appendChild(slogan);

    return div;
  };

  const michelinDiv = () => {
    const div = document.createElement('div');
    div.id = 'michelin-div';
    div.classList.add('gallery-div');

    const stars = document.createElement('img');
    stars.src = _assets_michelin_stars_png__WEBPACK_IMPORTED_MODULE_2__["default"];
    stars.id = 'stars';

    const text = document.createElement('p');
    text.innerHTML = 'Book an opportunity to dine in the world\'s <span class="bold">first</span> 3 Michelin Star restaurant.';
    text.id = 'stars-text';

    div.appendChild(stars);
    div.appendChild(text);

    return div;
  };

  const quoteDiv = () => {
    const div = document.createElement('div');
    div.id = 'quote-div';
    div.classList.add('gallery-div');

    const quote = document.createElement('h2');
    quote.textContent = '"I couldn\'t believe it. It was magic. Out of this world. This experience is mandatory."';
    quote.id = 'quote';

    const name = document.createElement('p');
    name.textContent = '- Gordon Ramsey -';
    name.id = 'quote-name';

    div.appendChild(quote);
    div.appendChild(name);

    return div;
  };

  gallery.appendChild(logoDiv());
  gallery.appendChild(michelinDiv());
  gallery.appendChild(quoteDiv());

  return gallery;
}

const enableSlides = () => {
  const gallery = document.getElementById('gallery');
  const galleryDivs = Array.from(document.getElementsByClassName('gallery-div'));
  setInterval(() => {
    galleryDivs.forEach((x) => {
      if (x.offsetLeft < 0) {
        x.animate({
          left: '150%',
        }, { duration: 0, fill: 'forwards' });
      } else if (x.offsetLeft > gallery.offsetWidth) {
        x.animate({
          left: '50%',
        }, { duration: 1000, fill: 'forwards', easing: 'ease-in-out' });
      } else {
        x.animate({
          left: '-150%',
        }, { duration: 1000, fill: 'forwards', easing: 'ease-in-out' });
      }
    });
  }, 4000);
};

function loadHome() {
  const main = document.getElementById('main');
  main.innerHTML = '';

  setBackground();
  setNav();

  main.appendChild(createGallery());
  enableSlides();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);

/* galleryDivs.forEach((e) => {
  console.log('adding');
  e.addEventListener('click', () => {
    galleryDivs.forEach((x) => {
      console.log(x.offsetLeft);
      if (x.offsetLeft < 0) {
        console.log('setting to 150%');
        console.log(x);
        x.animate({
          left: '150%',
        }, { duration: 0, fill: 'forwards' });
        console.log(x.style.left);
      } else if (x.offsetLeft > gallery.offsetWidth) {
        console.log('adding');
        console.log(x);
        x.animate({
          left: '50%',
        }, { duration: 500, fill: 'forwards' });
      } else {
        console.log('removing');
        console.log(x);
        x.animate({
          left: '-150%',
        }, { duration: 500, fill: 'forwards' });
      }
    });
  });
}); */


/***/ }),

/***/ "./src/init.js":
/*!*********************!*\
  !*** ./src/init.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact */ "./src/contact.js");



function createHeader() {
  const header = document.createElement('header');
  header.id = 'header';

  function createNav() {
    const nav = document.createElement('nav');
    nav.id = 'nav';

    const menuBtn = document.createElement('button');
    menuBtn.textContent = 'menu';
    menuBtn.classList.add('nav-btn');
    menuBtn.id = 'menu-btn';
    menuBtn.addEventListener('click', () => {
      if (!menuBtn.classList.contains('active')) {
        (0,_menu__WEBPACK_IMPORTED_MODULE_0__["default"])();
        menuBtn.classList.add('active');
      }
    });

    const contactBtn = document.createElement('button');
    contactBtn.textContent = 'contact';
    contactBtn.classList.add('nav-btn');
    contactBtn.id = 'contact-btn';
    contactBtn.addEventListener('click', () => {
      if (!contactBtn.classList.contains('active')) {
        (0,_contact__WEBPACK_IMPORTED_MODULE_1__["default"])();
        contactBtn.classList.add('active');
      }
    });

    nav.appendChild(menuBtn);
    nav.appendChild(contactBtn);

    return nav;
  }

  header.appendChild(createNav());

  return header;
}

function createMain() {
  const main = document.createElement('main');
  main.id = 'main';

  return main;
}

function createFooter() {
  const footer = document.createElement('footer');
  footer.id = 'footer';

  const link = document.createElement('a');
  link.href = 'https://github.com/baheerpayab';
  link.target = '_blank';

  const icon = document.createElement('i');
  icon.classList.add('fab');
  icon.classList.add('fa-github');

  link.appendChild(icon);
  footer.appendChild(link);

  return footer;
}

function init() {
  const div = document.getElementById('content');

  div.appendChild(createHeader());
  div.appendChild(createMain());
  div.appendChild(createFooter());
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (init);


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_curve_bg_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/curve-bg.svg */ "./src/assets/curve-bg.svg");
/* harmony import */ var _assets_logo_black_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/logo-black.svg */ "./src/assets/logo-black.svg");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _assets_menu_items_starter_1_webp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/menu-items/starter-1.webp */ "./src/assets/menu-items/starter-1.webp");
/* harmony import */ var _assets_menu_items_starter_2_webp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/menu-items/starter-2.webp */ "./src/assets/menu-items/starter-2.webp");
/* harmony import */ var _assets_menu_items_starter_3_webp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/menu-items/starter-3.webp */ "./src/assets/menu-items/starter-3.webp");
/* harmony import */ var _assets_menu_items_starter_4_webp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/menu-items/starter-4.webp */ "./src/assets/menu-items/starter-4.webp");
/* harmony import */ var _assets_menu_items_main_1_webp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/menu-items/main-1.webp */ "./src/assets/menu-items/main-1.webp");
/* harmony import */ var _assets_menu_items_main_2_webp__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/menu-items/main-2.webp */ "./src/assets/menu-items/main-2.webp");
/* harmony import */ var _assets_menu_items_main_3_webp__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/menu-items/main-3.webp */ "./src/assets/menu-items/main-3.webp");
/* harmony import */ var _assets_menu_items_main_4_webp__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assets/menu-items/main-4.webp */ "./src/assets/menu-items/main-4.webp");
/* harmony import */ var _assets_menu_items_dessert_1_webp__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./assets/menu-items/dessert-1.webp */ "./src/assets/menu-items/dessert-1.webp");
/* harmony import */ var _assets_menu_items_dessert_2_webp__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./assets/menu-items/dessert-2.webp */ "./src/assets/menu-items/dessert-2.webp");
/* harmony import */ var _assets_menu_items_dessert_3_webp__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./assets/menu-items/dessert-3.webp */ "./src/assets/menu-items/dessert-3.webp");
/* harmony import */ var _assets_menu_items_dessert_4_webp__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./assets/menu-items/dessert-4.webp */ "./src/assets/menu-items/dessert-4.webp");
/* harmony import */ var _assets_menu_items_drink_1_jpg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./assets/menu-items/drink-1.jpg */ "./src/assets/menu-items/drink-1.jpg");
/* harmony import */ var _assets_menu_items_drink_2_jpg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./assets/menu-items/drink-2.jpg */ "./src/assets/menu-items/drink-2.jpg");
/* harmony import */ var _assets_menu_items_drink_3_jpg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./assets/menu-items/drink-3.jpg */ "./src/assets/menu-items/drink-3.jpg");
/* harmony import */ var _assets_menu_items_drink_4_jpg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./assets/menu-items/drink-4.jpg */ "./src/assets/menu-items/drink-4.jpg");
























const setBackground = () => {
  document.body.style.background = '';

  const main = document.getElementById('main');

  const curveDiv = document.createElement('div');
  curveDiv.classList.add('curve-bg');

  const curveImg = document.createElement('img');
  curveImg.src = _assets_curve_bg_svg__WEBPACK_IMPORTED_MODULE_0__["default"];
  curveImg.classList.add('curve-bg-img');

  const itemImgDiv = document.createElement('div');
  itemImgDiv.id = 'item-img-div';
  itemImgDiv.classList.add('background-img-div');

  curveDiv.appendChild(curveImg);
  main.appendChild(curveDiv);
  main.appendChild(itemImgDiv);
};

const setNav = () => {
  const header = document.getElementById('header');
  header.style.justifyContent = 'space-between';

  if (!document.getElementById('corner-logo')) {
    const logo = document.createElement('img');
    logo.src = _assets_logo_black_svg__WEBPACK_IMPORTED_MODULE_1__["default"];
    logo.id = 'corner-logo';

    logo.addEventListener('click', _home__WEBPACK_IMPORTED_MODULE_2__["default"]);

    header.appendChild(logo);
  }

  const menuBtn = document.getElementById('menu-btn');
  const contactBtn = document.getElementById('contact-btn');
  contactBtn.classList.remove('active');
  menuBtn.classList.remove('home');
  contactBtn.classList.remove('home');
};

const createMenu = () => {
  const menuDiv = document.createElement('div');
  menuDiv.id = 'menu-div';

  const itemImgDiv = document.getElementById('item-img-div');

  const createMenuItems = () => {
    const createItems = () => {
      const div = document.createElement('div');
      div.id = 'menu-items';

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

        const itemImg = document.createElement('img');
        itemImg.classList.add('background-img');
        itemImg.id = `item-img-${i}`;
        if (i !== 1) itemImg.classList.add('hidden');

        item.appendChild(itemName);
        item.appendChild(itemDesc);
        itemImgDiv.appendChild(itemImg);

        div.appendChild(item);
      }
      return div;
    };

    const setStarters = (e) => {
      e.target.classList.add('active');
      document.getElementById('mains').classList.remove('active');
      document.getElementById('desserts').classList.remove('active');
      document.getElementById('drinks').classList.remove('active');

      document.getElementById('item-name-1').textContent = 'Confited Foie Gras';
      document.getElementById('item-desc-1').textContent = 'Foie Gras with bramley apple compote and walnut crunch';
      document.getElementById('item-img-1').src = _assets_menu_items_starter_1_webp__WEBPACK_IMPORTED_MODULE_3__["default"];

      document.getElementById('item-name-2').textContent = 'Sea of Orange';
      document.getElementById('item-desc-2').textContent = 'Native lobster, roasted heritage carrots, carrot purée and buttermilk purée';
      document.getElementById('item-img-2').src = _assets_menu_items_starter_2_webp__WEBPACK_IMPORTED_MODULE_4__["default"];

      document.getElementById('item-name-3').textContent = 'Hake Fillet';
      document.getElementById('item-desc-3').textContent = 'Hake fillet perfectly underpinned by an earthy golden beetroot and radish salad';
      document.getElementById('item-img-3').src = _assets_menu_items_starter_3_webp__WEBPACK_IMPORTED_MODULE_5__["default"];

      document.getElementById('item-name-4').textContent = 'Cauliflower Textures';
      document.getElementById('item-desc-4').textContent = 'A cauliflower recipe all about colour and texture, a perfect appetiser before your main meal';
      document.getElementById('item-img-4').src = _assets_menu_items_starter_4_webp__WEBPACK_IMPORTED_MODULE_6__["default"];
    };

    const setMains = (e) => {
      e.target.classList.add('active');
      document.getElementById('starters').classList.remove('active');
      document.getElementById('desserts').classList.remove('active');
      document.getElementById('drinks').classList.remove('active');

      document.getElementById('item-name-1').textContent = 'Guinea Fowl';
      document.getElementById('item-desc-1').textContent = 'Roast guinea fowl paired with a sweet shallot purée, leeks enhanced with liquorice and morels';
      document.getElementById('item-img-1').src = _assets_menu_items_main_1_webp__WEBPACK_IMPORTED_MODULE_7__["default"];

      document.getElementById('item-name-2').textContent = 'Cinderford Lamb';
      document.getElementById('item-desc-2').textContent = 'A genius masterpiece of exquisite lamb chump bursting with spring flavours';
      document.getElementById('item-img-2').src = _assets_menu_items_main_2_webp__WEBPACK_IMPORTED_MODULE_8__["default"];

      document.getElementById('item-name-3').textContent = 'Longhorn Beef Sirloin';
      document.getElementById('item-desc-3').textContent = 'Aged beef sirloin with charred Tropea onions, pickled walnut salsa verde and fresh watercress';
      document.getElementById('item-img-3').src = _assets_menu_items_main_3_webp__WEBPACK_IMPORTED_MODULE_9__["default"];

      document.getElementById('item-name-4').textContent = 'Roasted Cod';
      document.getElementById('item-desc-4').textContent = 'Roast cod combining sweet honey, champagne, garnished with chives and goji berries';
      document.getElementById('item-img-4').src = _assets_menu_items_main_4_webp__WEBPACK_IMPORTED_MODULE_10__["default"];
    };

    const setDesserts = (e) => {
      e.target.classList.add('active');
      document.getElementById('starters').classList.remove('active');
      document.getElementById('mains').classList.remove('active');
      document.getElementById('drinks').classList.remove('active');

      document.getElementById('item-name-1').textContent = 'Sheep\'s Milk Mousse';
      document.getElementById('item-desc-1').textContent = 'Stunning sheep\'s milk dessert with a dreamy pandan curd and caramelised puffed rice';
      document.getElementById('item-img-1').src = _assets_menu_items_dessert_1_webp__WEBPACK_IMPORTED_MODULE_11__["default"];

      document.getElementById('item-name-2').textContent = 'Strawberry Delight';
      document.getElementById('item-desc-2').textContent = 'Strawberry ice cream, basil purée, fromage frais mousse with green almonds';
      document.getElementById('item-img-2').src = _assets_menu_items_dessert_2_webp__WEBPACK_IMPORTED_MODULE_12__["default"];

      document.getElementById('item-name-3').textContent = 'Sheep’s Yoghurt Mousse';
      document.getElementById('item-desc-3').textContent = 'Sheep’s yoghurt mousse, lemon pandan sponge with caramelised puffed rice';
      document.getElementById('item-img-3').src = _assets_menu_items_dessert_3_webp__WEBPACK_IMPORTED_MODULE_13__["default"];

      document.getElementById('item-name-4').textContent = 'Winter Garden';
      document.getElementById('item-desc-4').textContent = 'Mulled winter fruits beautifully spiced with cinnamon ice cream';
      document.getElementById('item-img-4').src = _assets_menu_items_dessert_4_webp__WEBPACK_IMPORTED_MODULE_14__["default"];
    };

    const setDrinks = (e) => {
      e.target.classList.add('active');
      document.getElementById('starters').classList.remove('active');
      document.getElementById('mains').classList.remove('active');
      document.getElementById('desserts').classList.remove('active');

      document.getElementById('item-name-1').textContent = 'Water';
      document.getElementById('item-desc-1').textContent = 'Just regular water that we won\'t charge a ridiculous price for';
      document.getElementById('item-img-1').src = _assets_menu_items_drink_1_jpg__WEBPACK_IMPORTED_MODULE_15__["default"];

      document.getElementById('item-name-2').textContent = 'Fresh Juices';
      document.getElementById('item-desc-2').textContent = 'Any fresh fruit juice of your choice with any combination';
      document.getElementById('item-img-2').src = _assets_menu_items_drink_2_jpg__WEBPACK_IMPORTED_MODULE_16__["default"];

      document.getElementById('item-name-3').textContent = 'Wines';
      document.getElementById('item-desc-3').textContent = 'The finest wines available, whether you\'re a wine-enthusiast, or casual drinker';
      document.getElementById('item-img-3').src = _assets_menu_items_drink_3_jpg__WEBPACK_IMPORTED_MODULE_17__["default"];

      document.getElementById('item-name-4').textContent = 'Cocktails';
      document.getElementById('item-desc-4').textContent = 'Order your favourite cocktail made by some of the world\'s greatest bartenders';
      document.getElementById('item-img-4').src = _assets_menu_items_drink_4_jpg__WEBPACK_IMPORTED_MODULE_18__["default"];
    };

    return {
      setStarters,
      setMains,
      setDesserts,
      setDrinks,
      createItems,
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
  menuDiv.appendChild(createMenuItems().createItems());

  return menuDiv;
};

const enableItemHover = () => {
  const items = Array.from(document.getElementsByClassName('item'));
  items.forEach((item) => {
    item.addEventListener('mouseover', (e) => {
      const current = e.target.parentElement.classList.contains('item') ? e.target.parentElement : e.target;
      const number = current.id.charAt(current.id.length - 1);
      document.getElementById('item-img-1').classList.add('hidden');
      document.getElementById(`item-img-${number}`).classList.remove('hidden');
    });
    item.addEventListener('mouseout', (e) => {
      const current = e.target.parentElement.classList.contains('item') ? e.target.parentElement : e.target;
      const number = current.id.charAt(current.id.length - 1);
      document.getElementById(`item-img-${number}`).classList.add('hidden');
      document.getElementById('item-img-1').classList.remove('hidden');
    });
  });
};

const loadMenu = () => {
  const main = document.getElementById('main');
  main.innerHTML = '';

  setBackground();
  setNav();

  main.appendChild(createMenu());
  const starters = document.getElementById('starters');
  starters.click();

  enableItemHover();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);


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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./init */ "./src/init.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ "./src/home.js");





(0,_init__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_home__WEBPACK_IMPORTED_MODULE_2__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLGFBQWEsTUFBTSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxXQUFXLFVBQVUsWUFBWSxjQUFjLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxZQUFZLE1BQU0sS0FBSyxVQUFVLGFBQWEsV0FBVyxVQUFVLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGNBQWMsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsY0FBYyxhQUFhLE9BQU8sS0FBSyxLQUFLLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxXQUFXLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLFlBQVksVUFBVSxVQUFVLFlBQVksY0FBYyxXQUFXLE1BQU0sS0FBSyxZQUFZLFlBQVksVUFBVSxZQUFZLGFBQWEsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE9BQU8sV0FBVyxLQUFLLFVBQVUsV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLE9BQU8sV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssTUFBTSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLE1BQU0sYUFBYSxNQUFNLEtBQUssVUFBVSxLQUFLLE1BQU0sS0FBSyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE1BQU0sTUFBTSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxLQUFLLE1BQU0sS0FBSyxLQUFLLE1BQU0sTUFBTSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLE1BQU0sTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxNQUFNLEtBQUssS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sTUFBTSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sV0FBVyxhQUFhLHVHQUF1RyxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLHFCQUFxQixPQUFPLDJCQUEyQixHQUFHLFVBQVUsaUJBQWlCLGdCQUFnQixHQUFHLFVBQVUsdUNBQXVDLGdCQUFnQixpQkFBaUIsaUJBQWlCLHVCQUF1QixHQUFHLDJCQUEyQixjQUFjLEdBQUcsWUFBWSx1Q0FBdUMsR0FBRyxjQUFjLGlCQUFpQixnQkFBZ0IsR0FBRyxZQUFZLGtCQUFrQiw0QkFBNEIsd0JBQXdCLG9CQUFvQixXQUFXLGFBQWEsWUFBWSxpQkFBaUIsOEJBQThCLGVBQWUsR0FBRyxVQUFVLGtCQUFrQiw0QkFBNEIsd0JBQXdCLGdCQUFnQixpQkFBaUIsaUJBQWlCLEdBQUcsY0FBYyx1QkFBdUIsa0JBQWtCLDRCQUE0Qix3QkFBd0IsdUJBQXVCLGdCQUFnQixxQkFBcUIscUJBQXFCLEdBQUcsa0JBQWtCLHVCQUF1QixlQUFlLGtCQUFrQix1QkFBdUIsZUFBZSxjQUFjLHNCQUFzQixHQUFHLGVBQWUsa0JBQWtCLDJCQUEyQiw0QkFBNEIsd0JBQXdCLGNBQWMsR0FBRyxnQkFBZ0Isa0JBQWtCLEdBQUcsYUFBYSxjQUFjLGlCQUFpQixvQkFBb0IscUJBQXFCLEdBQUcsbUJBQW1CLGtDQUFrQyxtQ0FBbUMsR0FBRyxnQkFBZ0IsK0JBQStCLG1DQUFtQywrQkFBK0IsR0FBRyxXQUFXLHFCQUFxQixHQUFHLGtCQUFrQixrQkFBa0IsMkJBQTJCLDRCQUE0Qix3QkFBd0IsZUFBZSxjQUFjLEdBQUcsWUFBWSxlQUFlLEdBQUcsaUJBQWlCLGlCQUFpQixvQkFBb0IsdUJBQXVCLHVCQUF1QixjQUFjLGVBQWUsR0FBRyxnQkFBZ0Isa0JBQWtCLDJCQUEyQiw0QkFBNEIsd0JBQXdCLGdCQUFnQixjQUFjLEdBQUcsWUFBWSxpQkFBaUIsY0FBYyx1QkFBdUIsb0JBQW9CLHFCQUFxQixHQUFHLGlCQUFpQixpQkFBaUIsY0FBYyx1QkFBdUIsb0JBQW9CLHFCQUFxQixHQUFHLFNBQVMsa0JBQWtCLHdCQUF3Qiw0QkFBNEIsY0FBYyxhQUFhLEdBQUcsY0FBYyxpQkFBaUIsb0JBQW9CLHFCQUFxQiw0QkFBNEIscUJBQXFCLHNCQUFzQixzQkFBc0IsR0FBRyxvQkFBb0Isb0JBQW9CLDRCQUE0QixpQkFBaUIsR0FBRyxxQkFBcUIsNEJBQTRCLGlCQUFpQixHQUFHLDZCQUE2QixpQkFBaUIsZ0JBQWdCLGVBQWUsR0FBRyxtQkFBbUIsdUJBQXVCLGlCQUFpQixHQUFHLHlCQUF5Qix1QkFBdUIsYUFBYSxXQUFXLGVBQWUsaUJBQWlCLGVBQWUscUJBQXFCLEdBQUcscUJBQXFCLGtCQUFrQixzQkFBc0IseUNBQXlDLHFCQUFxQixHQUFHLGtCQUFrQixrQkFBa0IsZ0JBQWdCLGFBQWEsb0JBQW9CLEdBQUcsZUFBZSx1QkFBdUIsZUFBZSxhQUFhLG9CQUFvQix3QkFBd0IsNEJBQTRCLHdCQUF3QixlQUFlLGNBQWMsR0FBRyxrQkFBa0Isa0JBQWtCLDJCQUEyQix3QkFBd0IsNEJBQTRCLGNBQWMsR0FBRyxpQkFBaUIsa0JBQWtCLDJCQUEyQixHQUFHLGdCQUFnQixxQkFBcUIsb0JBQW9CLHFCQUFxQiw0QkFBNEIscUJBQXFCLHlCQUF5QixzQkFBc0IsaUJBQWlCLEdBQUcsc0JBQXNCLDRCQUE0QixpQkFBaUIsb0JBQW9CLEdBQUcsdUJBQXVCLDRCQUE0QixpQkFBaUIsR0FBRyxXQUFXLGtCQUFrQiwyQkFBMkIsaUJBQWlCLHlCQUF5QixHQUFHLGdCQUFnQixvQkFBb0IscUJBQXFCLGlCQUFpQixHQUFHLGdCQUFnQixvQkFBb0IscUJBQXFCLHVCQUF1QixpQkFBaUIsR0FBRyxhQUFhLGtCQUFrQixHQUFHLHdDQUF3Qyx1QkFBdUIsYUFBYSxHQUFHLHNCQUFzQix1QkFBdUIsZUFBZSxhQUFhLG9CQUFvQix3QkFBd0IsZ0NBQWdDLG1CQUFtQixrQkFBa0IsR0FBRyxlQUFlLHNCQUFzQiwyQkFBMkIsOEJBQThCLDBCQUEwQixlQUFlLEtBQUssbUJBQW1CLGtCQUFrQiwyQkFBMkIsbUJBQW1CLGlCQUFpQix1QkFBdUIsMkNBQTJDLHlCQUF5QixHQUFHLHlCQUF5QixrQkFBa0IsR0FBRywwQkFBMEIsa0JBQWtCLEdBQUcsc0JBQXNCLDRCQUE0Qix1QkFBdUIsd0JBQXdCLHFCQUFxQixHQUFHLDJDQUEyQyw2QkFBNkIsaUJBQWlCLEdBQUcsMkNBQTJDLDZCQUE2QixpQkFBaUIsR0FBRyxtQkFBbUIsb0JBQW9CLHFCQUFxQix1QkFBdUIsMEJBQTBCLGlDQUFpQyxHQUFHLHdCQUF3QixvQkFBb0IsT0FBTyxpQkFBaUIsR0FBRyxhQUFhLGdCQUFnQixHQUFHLDBCQUEwQixvQkFBb0IsR0FBRyx1QkFBdUIsa0JBQWtCLEdBQUcsa0JBQWtCLGtCQUFrQix3QkFBd0Isb0JBQW9CLDRCQUE0QixnQ0FBZ0Msa0JBQWtCLG1CQUFtQix3QkFBd0Isa0JBQWtCLGtCQUFrQixHQUFHLGFBQWEsdUNBQXVDLG9CQUFvQixpQkFBaUIsaUJBQWlCLDRCQUE0Qix1QkFBdUIsb0JBQW9CLEdBQUcsY0FBYyx1Q0FBdUMsb0JBQW9CLGlCQUFpQiw0QkFBNEIscUJBQXFCLGtCQUFrQixvQkFBb0IsS0FBSywyQkFBMkIsZ0JBQWdCLGlCQUFpQiw0QkFBNEIsaUJBQWlCLHFCQUFxQixHQUFHLGlDQUFpQyw0QkFBNEIsaUJBQWlCLG9CQUFvQixHQUFHLGdDQUFnQyxhQUFhLGlCQUFpQix5QkFBeUIsZ0JBQWdCLGlCQUFpQixlQUFlLEdBQUcsc0JBQXNCLHFCQUFxQixlQUFlLG1CQUFtQixvQkFBb0IsR0FBRywyQ0FBMkMsUUFBUSxxQkFBcUIsa0JBQWtCLEtBQUssVUFBVSxvQkFBb0IsS0FBSyxHQUFHLHFCQUFxQixRQUFRLGVBQWUsS0FBSyxVQUFVLGlCQUFpQixLQUFLLEdBQUcsdURBQXVELG1CQUFtQixpQkFBaUIsS0FBSyxHQUFHLGdDQUFnQyxjQUFjLG1CQUFtQiw4QkFBOEIsS0FBSyx3QkFBd0IsOEJBQThCLG1CQUFtQixLQUFLLHlCQUF5QixxQ0FBcUMsbUJBQW1CLEtBQUsscUJBQXFCLG1CQUFtQiw4QkFBOEIsS0FBSywyQkFBMkIsbUJBQW1CLDhCQUE4QixLQUFLLEdBQUcsK0JBQStCLGNBQWMseUJBQXlCLG1CQUFtQiw4QkFBOEIsMEJBQTBCLDBCQUEwQixzQkFBc0IsdUJBQXVCLG9CQUFvQixLQUFLLDZCQUE2QixvQkFBb0IsS0FBSyxpQkFBaUIsb0JBQW9CLEtBQUssaUJBQWlCLHlCQUF5QixnQkFBZ0IsaUJBQWlCLG1CQUFtQiw2QkFBNkIsOEJBQThCLGtDQUFrQyxnQkFBZ0IseUJBQXlCLGlCQUFpQixLQUFLLG9CQUFvQiwwQkFBMEIsOEJBQThCLGtDQUFrQyxrQkFBa0IsdUJBQXVCLGVBQWUsS0FBSyxtQkFBbUIsMEJBQTBCLHNCQUFzQiw4QkFBOEIsMEJBQTBCLGVBQWUsZ0JBQWdCLEtBQUssYUFBYSxpQkFBaUIsS0FBSyxrQkFBa0IsdUJBQXVCLEtBQUssb0JBQW9CLHFCQUFxQixLQUFLLHdCQUF3Qix5QkFBeUIsZ0JBQWdCLGlCQUFpQixtQkFBbUIsaUJBQWlCLHlCQUF5QixLQUFLLGlCQUFpQixrQkFBa0IsS0FBSyxxQkFBcUIsa0JBQWtCLEtBQUssMEJBQTBCLHdCQUF3Qiw0QkFBNEIsd0JBQXdCLEtBQUssK0JBQStCLGlCQUFpQixnQkFBZ0IsS0FBSyxtQkFBbUIsNkJBQTZCLHdCQUF3QixnQkFBZ0IsS0FBSyxhQUFhLGlCQUFpQixpQkFBaUIsS0FBSyxrQkFBa0Isc0JBQXNCLEtBQUssb0JBQW9CLHNCQUFzQixLQUFLLEtBQUssK0JBQStCLGtCQUFrQixtQkFBbUIsS0FBSyxlQUFlLHNCQUFzQixLQUFLLEtBQUssK0JBQStCLGdCQUFnQixzQkFBc0IsS0FBSyxvQkFBb0Isc0JBQXNCLEtBQUssR0FBRywrQkFBK0IsbUJBQW1CLGlCQUFpQixLQUFLLGNBQWMsc0JBQXNCLGlCQUFpQixLQUFLLG1CQUFtQixzQkFBc0IsS0FBSyw4Q0FBOEMsbUJBQW1CO0FBQzF4dkI7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNSMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNmQSxpRUFBZSxxQkFBdUIsaUNBQWlDOzs7Ozs7Ozs7Ozs7OztBQ0F2RSxpRUFBZSxxQkFBdUIsK0JBQStCOzs7Ozs7Ozs7Ozs7OztBQ0FyRSxpRUFBZSxxQkFBdUIsOEJBQThCOzs7Ozs7Ozs7Ozs7OztBQ0FwRSxpRUFBZSxxQkFBdUIsaUNBQWlDOzs7Ozs7Ozs7Ozs7OztBQ0F2RSxpRUFBZSxxQkFBdUIsMkJBQTJCOzs7Ozs7Ozs7Ozs7OztBQ0FqRSxpRUFBZSxxQkFBdUIsaUNBQWlDOzs7Ozs7Ozs7Ozs7OztBQ0F2RSxpRUFBZSxxQkFBdUIsaUNBQWlDOzs7Ozs7Ozs7Ozs7OztBQ0F2RSxpRUFBZSxxQkFBdUIsaUNBQWlDOzs7Ozs7Ozs7Ozs7OztBQ0F2RSxpRUFBZSxxQkFBdUIsaUNBQWlDOzs7Ozs7Ozs7Ozs7OztBQ0F2RSxpRUFBZSxxQkFBdUIsOEJBQThCOzs7Ozs7Ozs7Ozs7OztBQ0FwRSxpRUFBZSxxQkFBdUIsOEJBQThCOzs7Ozs7Ozs7Ozs7OztBQ0FwRSxpRUFBZSxxQkFBdUIsOEJBQThCOzs7Ozs7Ozs7Ozs7OztBQ0FwRSxpRUFBZSxxQkFBdUIsOEJBQThCOzs7Ozs7Ozs7Ozs7OztBQ0FwRSxpRUFBZSxxQkFBdUIsOEJBQThCOzs7Ozs7Ozs7Ozs7OztBQ0FwRSxpRUFBZSxxQkFBdUIsOEJBQThCOzs7Ozs7Ozs7Ozs7OztBQ0FwRSxpRUFBZSxxQkFBdUIsOEJBQThCOzs7Ozs7Ozs7Ozs7OztBQ0FwRSxpRUFBZSxxQkFBdUIsOEJBQThCOzs7Ozs7Ozs7Ozs7OztBQ0FwRSxpRUFBZSxxQkFBdUIsaUNBQWlDOzs7Ozs7Ozs7Ozs7OztBQ0F2RSxpRUFBZSxxQkFBdUIsaUNBQWlDOzs7Ozs7Ozs7Ozs7OztBQ0F2RSxpRUFBZSxxQkFBdUIsaUNBQWlDOzs7Ozs7Ozs7Ozs7OztBQ0F2RSxpRUFBZSxxQkFBdUIsaUNBQWlDOzs7Ozs7Ozs7Ozs7OztBQ0F2RSxpRUFBZSxxQkFBdUIscUNBQXFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQzNFLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW9HO0FBQ3BHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsdUZBQU87Ozs7QUFJOEM7QUFDdEUsT0FBTyxpRUFBZSx1RkFBTyxJQUFJLDhGQUFjLEdBQUcsOEZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNuRmE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDakNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiNEM7QUFDTztBQUNyQjs7QUFFa0I7O0FBRWhEO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQiw0REFBTztBQUN4Qjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0IsOERBQVM7QUFDL0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSw4REFBWTtBQUMzQjs7QUFFQSxtQ0FBbUMsNkNBQVE7O0FBRTNDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxXQUFXLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hOZTtBQUNGO0FBQ1c7O0FBRW5EO0FBQ0EsMENBQTBDLDJEQUFNLENBQUM7QUFDakQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLHdEQUFPO0FBQ3RCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0Isa0VBQVE7QUFDeEI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxJQUFJLCtCQUErQjtBQUM1QyxRQUFRO0FBQ1I7QUFDQTtBQUNBLFNBQVMsSUFBSSx5REFBeUQ7QUFDdEUsUUFBUTtBQUNSO0FBQ0E7QUFDQSxTQUFTLElBQUkseURBQXlEO0FBQ3RFO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsUUFBUSxFQUFDOztBQUV4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsSUFBSSwrQkFBK0I7QUFDNUM7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLElBQUksaUNBQWlDO0FBQzlDLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsSUFBSSxpQ0FBaUM7QUFDOUM7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNILENBQUMsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3SjBCO0FBQ007O0FBRXBDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpREFBUTtBQUNoQjtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLG9EQUFXO0FBQ25CO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLElBQUksRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdFd0I7QUFDTztBQUNyQjs7QUFFOEI7QUFDQTtBQUNFO0FBQ0Q7O0FBRVA7QUFDQTtBQUNFO0FBQ0Q7O0FBRUs7QUFDQTtBQUNFO0FBQ0Q7O0FBRU47QUFDQTtBQUNFO0FBQ0Q7O0FBRXhEO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQiw0REFBTztBQUN4Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLDhEQUFZO0FBQzNCOztBQUVBLG1DQUFtQyw2Q0FBUTs7QUFFM0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNCQUFzQixRQUFRO0FBQzlCO0FBQ0E7QUFDQSwwQkFBMEIsRUFBRTs7QUFFNUI7QUFDQTtBQUNBLG1DQUFtQyxFQUFFOztBQUVyQztBQUNBO0FBQ0EsbUNBQW1DLEVBQUU7O0FBRXJDO0FBQ0E7QUFDQSxpQ0FBaUMsRUFBRTtBQUNuQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0RBQWtELHlFQUFVOztBQUU1RDtBQUNBO0FBQ0Esa0RBQWtELHlFQUFVOztBQUU1RDtBQUNBO0FBQ0Esa0RBQWtELHlFQUFZOztBQUU5RDtBQUNBO0FBQ0Esa0RBQWtELHlFQUFXO0FBQzdEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtEQUFrRCxzRUFBTzs7QUFFekQ7QUFDQTtBQUNBLGtEQUFrRCxzRUFBTzs7QUFFekQ7QUFDQTtBQUNBLGtEQUFrRCxzRUFBUzs7QUFFM0Q7QUFDQTtBQUNBLGtEQUFrRCx1RUFBUTtBQUMxRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrREFBa0QsMEVBQVU7O0FBRTVEO0FBQ0E7QUFDQSxrREFBa0QsMEVBQVU7O0FBRTVEO0FBQ0E7QUFDQSxrREFBa0QsMEVBQVk7O0FBRTlEO0FBQ0E7QUFDQSxrREFBa0QsMEVBQVc7QUFDN0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0RBQWtELHVFQUFROztBQUUxRDtBQUNBO0FBQ0Esa0RBQWtELHVFQUFROztBQUUxRDtBQUNBO0FBQ0Esa0RBQWtELHVFQUFVOztBQUU1RDtBQUNBO0FBQ0Esa0RBQWtELHVFQUFTO0FBQzNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsT0FBTztBQUNqRCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLE9BQU87QUFDakQ7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlFQUFlLFFBQVEsRUFBQzs7Ozs7OztVQ3ZSeEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7Ozs7Ozs7Ozs7Ozs7O0FDQXNCOztBQUVJO0FBQ0k7O0FBRTlCLGlEQUFJO0FBQ0osaURBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9hc3NldHMvY29udGFjdC1iZy5qcGciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fzc2V0cy9jdXJ2ZS1iZy5zdmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fzc2V0cy9ob21lLWJnLmpwZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYXNzZXRzL2xvZ28tYmxhY2suc3ZnIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9hc3NldHMvbG9nby5zdmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fzc2V0cy9tZW51LWl0ZW1zL2Rlc3NlcnQtMS53ZWJwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9hc3NldHMvbWVudS1pdGVtcy9kZXNzZXJ0LTIud2VicCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYXNzZXRzL21lbnUtaXRlbXMvZGVzc2VydC0zLndlYnAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fzc2V0cy9tZW51LWl0ZW1zL2Rlc3NlcnQtNC53ZWJwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9hc3NldHMvbWVudS1pdGVtcy9kcmluay0xLmpwZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYXNzZXRzL21lbnUtaXRlbXMvZHJpbmstMi5qcGciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fzc2V0cy9tZW51LWl0ZW1zL2RyaW5rLTMuanBnIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9hc3NldHMvbWVudS1pdGVtcy9kcmluay00LmpwZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYXNzZXRzL21lbnUtaXRlbXMvbWFpbi0xLndlYnAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fzc2V0cy9tZW51LWl0ZW1zL21haW4tMi53ZWJwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9hc3NldHMvbWVudS1pdGVtcy9tYWluLTMud2VicCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYXNzZXRzL21lbnUtaXRlbXMvbWFpbi00LndlYnAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fzc2V0cy9tZW51LWl0ZW1zL3N0YXJ0ZXItMS53ZWJwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9hc3NldHMvbWVudS1pdGVtcy9zdGFydGVyLTIud2VicCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYXNzZXRzL21lbnUtaXRlbXMvc3RhcnRlci0zLndlYnAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fzc2V0cy9tZW51LWl0ZW1zL3N0YXJ0ZXItNC53ZWJwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9hc3NldHMvbWljaGVsaW4tc3RhcnMucG5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5pdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczppdGFsLHdnaHRAMCwxMDA7MCwyMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw2MDA7MCw3MDA7MCw4MDA7MCw5MDA7MSwxMDA7MSwyMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw2MDA7MSw3MDA7MSw4MDA7MSw5MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5odG1sIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcXG59XFxuXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBwIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxufVxcblxcbiNjb250ZW50IHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgbGVmdDogMDtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHBhZGRpbmc6IDUwcHggNTBweCAwIDUwcHg7XFxuICB6LWluZGV4OiAzO1xcbn1cXG5cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1hcmdpbjogYXV0bztcXG59XFxuXFxuLmdhbGxlcnkge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWluLWhlaWdodDogMTAwJTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5nYWxsZXJ5LWRpdiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogNTAlO1xcbiAgaGVpZ2h0OiA2MDBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRvcDogMTAwcHg7XFxuICBsZWZ0OiA1MCU7XFxuICBtYXJnaW4tbGVmdDogLTI1JTtcXG59XFxuXFxuI2xvZ28tZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4jaG9tZS1sb2dvIHtcXG4gIGhlaWdodDogMTc1cHg7XFxufVxcblxcbiNzbG9nYW4ge1xcbiAgbWFyZ2luOiAwO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAzMnB4O1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG59XFxuXFxuLmxpbmUtdGhyb3VnaCB7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG4gIHRleHQtZGVjb3JhdGlvbi10aGlja25lc3M6IDJweDtcXG59XFxuXFxuLnVuZGVybGluZSB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIHRleHQtZGVjb3JhdGlvbi10aGlja25lc3M6IDJweDtcXG4gIHRleHQtdW5kZXJsaW5lLW9mZnNldDogMnB4O1xcbn1cXG5cXG4uYm9sZCB7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4jbWljaGVsaW4tZGl2e1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBsZWZ0OiAxNTAlO1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4jc3RhcnMge1xcbiAgd2lkdGg6IDY1JTtcXG59XFxuXFxuI3N0YXJzLXRleHQge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgZm9udC13ZWlnaHQ6IDMwMHB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgd2lkdGg6IDc1JTtcXG59XFxuXFxuI3F1b3RlLWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGxlZnQ6IC0xNTAlO1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4jcXVvdGUge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgZm9udC1zaXplOiA0MnB4O1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG59XFxuXFxuI3F1b3RlLW5hbWUge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgZm9udC1zaXplOiAzMnB4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxubmF2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDIwcHg7XFxuICBvcmRlcjogMjtcXG59XFxuXFxuLm5hdi1idG4ge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAyOHB4O1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIHBhZGRpbmc6IDVweCAyMHB4O1xcbiAgdHJhbnNpdGlvbjogNTAwbXM7XFxufVxcblxcbi5uYXYtYnRuOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4ubmF2LWJ0bi5hY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi8qIE1FTlUgKi9cXG5cXG4uY3VydmUtYmcge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4uY3VydmUtYmctaW1nIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IC04NTBweDtcXG59XFxuXFxuLmJhY2tncm91bmQtaW1nLWRpdiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiA3NSU7XFxuICBoZWlnaHQ6IDEyNSU7XFxuICB6LWluZGV4OiAwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLmJhY2tncm91bmQtaW1nIHtcXG4gIG9wYWNpdHk6IDEwMCU7XFxuICB0cmFuc2l0aW9uOiA1MDBtcztcXG4gIGFuaW1hdGlvbjogZmFkZS1pbiA1MDBtcyBlYXNlLWluLW91dDtcXG4gIG1heC1oZWlnaHQ6IDEwMCU7XFxufVxcblxcbiNjb3JuZXItbG9nbyB7XFxuICBoZWlnaHQ6IDExNXB4O1xcbiAgZmlsbDogYmxhY2s7XFxuICBvcmRlcjogMTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI21lbnUtZGl2IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDc1cHg7XFxuICB0b3A6IDMwJTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgei1pbmRleDogMjtcXG4gIGdhcDogODBweDtcXG59XFxuXFxuI21lbnUtc2VsZWN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAzMHB4O1xcbn1cXG5cXG4jbWVudS1pdGVtcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnNlbGVjdGlvbiB7XFxuICBtaW4td2lkdGg6IDI2MHB4O1xcbiAgZm9udC1zaXplOiAyOHB4O1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIHBhZGRpbmc6IDVweCAwIDVweCAwO1xcbiAgdHJhbnNpdGlvbjogNTAwbXM7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi5zZWxlY3Rpb246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBjb2xvcjogd2hpdGU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zZWxlY3Rpb24uYWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uaXRlbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiA0NTBweDtcXG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xcbn1cXG5cXG4uaXRlbS1uYW1lIHtcXG4gIGZvbnQtc2l6ZTogMjhweDtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi5pdGVtLWRlc2Mge1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgZm9udC13ZWlnaHQ6IDIwMDtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKiBDT05UQUNUIFBBR0UgKi9cXG5cXG4jY29udGFjdC1pbWcge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDA7XFxufVxcblxcbiNpbmZvLXBhcmVudC1kaXYge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogNzVweDtcXG4gIHRvcDogMzAlO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuXFxuICB3aWR0aDogNzUwcHg7XFxuICBoZWlnaHQ6IDQ1MHB4O1xcbn1cXG5cXG4jaW5mby1kaXYge1xcbiAgXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICB6LWluZGV4OiAyO1xcblxcbn1cXG5cXG4uaW5mby1zdWItZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbiAgaGVpZ2h0OiA2MHB4O1xcbiAgd2lkdGg6IDY1MHB4O1xcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xcblxcbiAgdHJhbnNpdGlvbjogaGVpZ2h0IDUwMG1zIGVhc2UtaW4tb3V0O1xcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XFxufVxcblxcbi5pbmZvLXN1Yi1kaXY6aG92ZXIge1xcbiAgaGVpZ2h0OiAyNTBweDtcXG59XFxuXFxuLmluZm8tc3ViLWRpdi5hY3RpdmUge1xcbiAgaGVpZ2h0OiAyNTBweDtcXG59XFxuXFxuLmNvbnRhY3QtaGVhZGluZyB7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gIHBhZGRpbmctbGVmdDogMjBweDtcXG4gIFxcbiAgZm9udC1zaXplOiAyOHB4O1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG59XFxuXFxuLmluZm8tc3ViLWRpdi5hY3RpdmUgLmNvbnRhY3QtaGVhZGluZyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjazsgXFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5pbmZvLXN1Yi1kaXY6aG92ZXIgLmNvbnRhY3QtaGVhZGluZyB7IFxcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7IFxcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uY29udGFjdC10ZXh0IHtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIGZvbnQtd2VpZ2h0OiAyMDA7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XFxuXFxuICBwYWRkaW5nOiAyMHB4IDBweCAwcHggMjBweDtcXG59XFxuXFxuI2Jvb2tpbmctZGl2OmhvdmVyIHtcXG4gIGhlaWdodDogMjAwcHhcXG59XFxuXFxuYSB7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcblxcbmE6Zm9jdXMge1xcbiAgY29sb3I6IGdyZXk7XFxufVxcblxcbiNzdXBwb3J0LWVtYWlsOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI3Jldmlldy1kaXY6aG92ZXIge1xcbiAgaGVpZ2h0OiAzNTBweDtcXG59XFxuXFxuI3Jldmlldy1mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICByb3ctZ2FwOiAyMHB4O1xcbiAgY29sdW1uLWdhcDogNSU7XFxuXFxuICBwYWRkaW5nLXRvcDogMjBweDtcXG5cXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAyMDBweDtcXG59XFxuXFxuXFxuaW5wdXQge1xcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG5cXG4gIHdpZHRoOiA0NSU7XFxuICBoZWlnaHQ6IDNyZW07XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG5cXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDE2cHg7XFxuXFxuICB3aWR0aDogOTUlO1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG5cXG4gIHBhZGRpbmc6IDEwcHg7XFxuXFxufVxcblxcbmJ1dHRvblt0eXBlPSdzdWJtaXQnXSB7XFxuICB3aWR0aDogNXJlbTtcXG4gIGhlaWdodDogM3JlbTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG59XFxuXFxuYnV0dG9uW3R5cGU9J3N1Ym1pdCddOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKiBGT09URVIgKi9cXG5cXG4uZmEtZ2l0aHViIHtcXG4gIHNjYWxlOiAyO1xcbiAgY29sb3I6IHdoaXRlO1xcblxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDMwcHg7XFxuICBib3R0b206IDMwcHg7XFxuICB6LWluZGV4OiAzO1xcbn1cXG5cXG4uZmEtZ2l0aHViOmhvdmVyIHtcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxuICBzY2FsZTogMi4yO1xcbiAgcm90YXRlOiAzNjBkZWc7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qIEtFWUZSQU1FUyAqL1xcblxcbkBrZXlmcmFtZXMgZmFkZS1pbiB7XFxuICAwJSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBvcGFjaXR5OiAwJTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAxMDAlO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGdyb3cge1xcbiAgMCUge1xcbiAgICBzY2FsZTogMTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBzY2FsZTogMS4yO1xcbiAgfVxcbn1cXG5cXG4vKiBNRURJQSBRVUVSSUVTICovXFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDEwODBweCkge1xcbiAgLmN1cnZlLWJnLWltZyB7XFxuICAgIGxlZnQ6IC01NSU7XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcXG4gIC5uYXYtYnRuIHtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gIH1cXG4gIFxcbiAgLm5hdi1idG46aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgfVxcbiAgXFxuICAubmF2LWJ0bi5hY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gIH1cXG5cXG4gIC5uYXYtYnRuLmhvbWUge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcbiAgfVxcblxcbiAgLm5hdi1idG4uaG9tZTpob3ZlciB7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA4NTBweCkge1xcblxcbiAgaGVhZGVyIHtcXG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGNvbHVtbi1nYXA6IDUwcHg7XFxuICAgIHJvdy1nYXA6IDIwcHg7XFxuICB9XFxuXFxuXFxuICAuYmFja2dyb3VuZC1pbWctZGl2IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4gIC5jdXJ2ZS1iZyB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICAjbWVudS1kaXYge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogYXV0bztcXG4gICAgbGVmdDogYXV0bztcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIHBhZGRpbmctdG9wOiAxODBweDtcXG4gICAgd2lkdGg6IDkwJTtcXG4gIH1cXG5cXG4gICNtZW51LXNlbGVjdCB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xcbiAgICBvcmRlcjogMjtcXG4gIH1cXG5cXG4gICNtZW51LWl0ZW1zIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgb3JkZXI6IDE7XFxuICAgIGdhcDogMzBweDtcXG4gIH1cXG5cXG4gIC5pdGVtIHtcXG4gICAgd2lkdGg6IDQ1JTtcXG4gIH1cXG5cXG4gIC5pdGVtLW5hbWUge1xcbiAgICBmb250LXNpemU6IDMuNXZ3O1xcbiAgfVxcbiAgXFxuICAuaXRlbS1kZXNjIHtcXG4gICAgZm9udC1zaXplOiAydnc7XFxuICB9XFxuXFxuICAjaW5mby1wYXJlbnQtZGl2IHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IGF1dG87XFxuICAgIGxlZnQ6IGF1dG87XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgcGFkZGluZy10b3A6IDIzMHB4O1xcbiAgfVxcblxcbiAgI2luZm8tZGl2IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuXFxuICAuaW5mby1zdWItZGl2IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuXFxuICAjYm9va2luZy1kaXY6aG92ZXIge1xcbiAgICBoZWlnaHQ6IDI3MHB4XFxuICB9XFxuXFxuICAjaW5xdWlyaWVzLWRpdjpob3ZlciB7XFxuICAgIGhlaWdodDogMzAwcHhcXG4gIH1cXG5cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XFxuXFxuICAjbWVudS1kaXYge1xcbiAgICBnYXA6IDQwcHg7XFxuICB9XFxuXFxuICAjbWVudS1pdGVtcyB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xcbiAgICBnYXA6IDIwcHg7XFxuICB9XFxuXFxuICAuaXRlbSB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIHdpZHRoOiA4MCU7XFxuICB9XFxuXFxuICAuaXRlbS1uYW1lIHtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgfVxcbiAgXFxuICAuaXRlbS1kZXNjIHtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgfVxcblxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNTcwcHgpIHtcXG5cXG4gICNob21lLWxvZ28ge1xcbiAgICBoZWlnaHQ6IDI1dnc7XFxuICB9XFxuXFxuICAjc2xvZ2FuIHtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgfVxcblxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNDUwcHgpIHtcXG4gIC5pdGVtLW5hbWUge1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICB9XFxuICBcXG4gIC5pdGVtLWRlc2Mge1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA0MDBweCkge1xcblxcbiAgI3N0YXJzLXRleHQge1xcbiAgICB3aWR0aDogOTUlO1xcbiAgfVxcblxcbiAgI3F1b3RlIHtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICB3aWR0aDogOTUlO1xcbiAgfVxcblxcbiAgI3F1b3RlLW5hbWUge1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICB9XFxuXFxuICAvKiBNRU5VICovXFxuXFxuICAvKiBDT05UQUNUICovXFxuXFxuICBcXG5cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLFdBQVc7RUFDWCxZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsTUFBTTtFQUNO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QUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0FBRUY7O0FBRUE7RUFDRTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCO0FBQ0Y7O0FBRUE7O0VBRUU7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsVUFBVTtFQUNaOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQSxTQUFTOztFQUVULFlBQVk7Ozs7QUFJZFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOml0YWwsd2dodEAwLDEwMDswLDIwMDswLDMwMDswLDQwMDswLDUwMDswLDYwMDswLDcwMDswLDgwMDswLDkwMDsxLDEwMDsxLDIwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMDsxLDgwMDsxLDkwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmh0bWwge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xcbn1cXG5cXG5oMSwgaDIsIGgzLCBoNCwgaDUsIHAge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBsZWZ0OiAwO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgcGFkZGluZzogNTBweCA1MHB4IDAgNTBweDtcXG4gIHotaW5kZXg6IDM7XFxufVxcblxcbm1haW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG4uZ2FsbGVyeSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLmdhbGxlcnktZGl2IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiA1MCU7XFxuICBoZWlnaHQ6IDYwMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdG9wOiAxMDBweDtcXG4gIGxlZnQ6IDUwJTtcXG4gIG1hcmdpbi1sZWZ0OiAtMjUlO1xcbn1cXG5cXG4jbG9nby1kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDIwcHg7XFxufVxcblxcbiNob21lLWxvZ28ge1xcbiAgaGVpZ2h0OiAxNzVweDtcXG59XFxuXFxuI3Nsb2dhbiB7XFxuICBtYXJnaW46IDA7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDMycHg7XFxuICBmb250LXdlaWdodDogMzAwO1xcbn1cXG5cXG4ubGluZS10aHJvdWdoIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbiAgdGV4dC1kZWNvcmF0aW9uLXRoaWNrbmVzczogMnB4O1xcbn1cXG5cXG4udW5kZXJsaW5lIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgdGV4dC1kZWNvcmF0aW9uLXRoaWNrbmVzczogMnB4O1xcbiAgdGV4dC11bmRlcmxpbmUtb2Zmc2V0OiAycHg7XFxufVxcblxcbi5ib2xkIHtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbiNtaWNoZWxpbi1kaXZ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGxlZnQ6IDE1MCU7XFxuICBnYXA6IDIwcHg7XFxufVxcblxcbiNzdGFycyB7XFxuICB3aWR0aDogNjUlO1xcbn1cXG5cXG4jc3RhcnMtdGV4dCB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBmb250LXdlaWdodDogMzAwcHg7XFxuICBtYXJnaW46IDA7XFxuICB3aWR0aDogNzUlO1xcbn1cXG5cXG4jcXVvdGUtZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbGVmdDogLTE1MCU7XFxuICBnYXA6IDIwcHg7XFxufVxcblxcbiNxdW90ZSB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBtYXJnaW46IDA7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBmb250LXNpemU6IDQycHg7XFxuICBmb250LXdlaWdodDogMzAwO1xcbn1cXG5cXG4jcXVvdGUtbmFtZSB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBtYXJnaW46IDA7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBmb250LXNpemU6IDMycHg7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG5uYXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMjBweDtcXG4gIG9yZGVyOiAyO1xcbn1cXG5cXG4ubmF2LWJ0biB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDI4cHg7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgcGFkZGluZzogNXB4IDIwcHg7XFxuICB0cmFuc2l0aW9uOiA1MDBtcztcXG59XFxuXFxuLm5hdi1idG46aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi5uYXYtYnRuLmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLyogTUVOVSAqL1xcblxcbi5jdXJ2ZS1iZyB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbi5jdXJ2ZS1iZy1pbWcge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogLTg1MHB4O1xcbn1cXG5cXG4uYmFja2dyb3VuZC1pbWctZGl2IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDc1JTtcXG4gIGhlaWdodDogMTI1JTtcXG4gIHotaW5kZXg6IDA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4uYmFja2dyb3VuZC1pbWcge1xcbiAgb3BhY2l0eTogMTAwJTtcXG4gIHRyYW5zaXRpb246IDUwMG1zO1xcbiAgYW5pbWF0aW9uOiBmYWRlLWluIDUwMG1zIGVhc2UtaW4tb3V0O1xcbiAgbWF4LWhlaWdodDogMTAwJTtcXG59XFxuXFxuI2Nvcm5lci1sb2dvIHtcXG4gIGhlaWdodDogMTE1cHg7XFxuICBmaWxsOiBibGFjaztcXG4gIG9yZGVyOiAxO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jbWVudS1kaXYge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogNzVweDtcXG4gIHRvcDogMzAlO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB6LWluZGV4OiAyO1xcbiAgZ2FwOiA4MHB4O1xcbn1cXG5cXG4jbWVudS1zZWxlY3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDMwcHg7XFxufVxcblxcbiNtZW51LWl0ZW1zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uc2VsZWN0aW9uIHtcXG4gIG1pbi13aWR0aDogMjYwcHg7XFxuICBmb250LXNpemU6IDI4cHg7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgcGFkZGluZzogNXB4IDAgNXB4IDA7XFxuICB0cmFuc2l0aW9uOiA1MDBtcztcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLnNlbGVjdGlvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnNlbGVjdGlvbi5hY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5pdGVtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDQ1MHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XFxufVxcblxcbi5pdGVtLW5hbWUge1xcbiAgZm9udC1zaXplOiAyOHB4O1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLml0ZW0tZGVzYyB7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBmb250LXdlaWdodDogMjAwO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qIENPTlRBQ1QgUEFHRSAqL1xcblxcbiNjb250YWN0LWltZyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMDtcXG59XFxuXFxuI2luZm8tcGFyZW50LWRpdiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiA3NXB4O1xcbiAgdG9wOiAzMCU7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG5cXG4gIHdpZHRoOiA3NTBweDtcXG4gIGhlaWdodDogNDUwcHg7XFxufVxcblxcbiNpbmZvLWRpdiB7XFxuICBcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gIHotaW5kZXg6IDI7XFxuXFxufVxcblxcbi5pbmZvLXN1Yi1kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxuICBoZWlnaHQ6IDYwcHg7XFxuICB3aWR0aDogNjUwcHg7XFxuICBvdmVyZmxvdy15OiBoaWRkZW47XFxuXFxuICB0cmFuc2l0aW9uOiBoZWlnaHQgNTAwbXMgZWFzZS1pbi1vdXQ7XFxuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLmluZm8tc3ViLWRpdjpob3ZlciB7XFxuICBoZWlnaHQ6IDI1MHB4O1xcbn1cXG5cXG4uaW5mby1zdWItZGl2LmFjdGl2ZSB7XFxuICBoZWlnaHQ6IDI1MHB4O1xcbn1cXG5cXG4uY29udGFjdC1oZWFkaW5nIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgXFxuICBmb250LXNpemU6IDI4cHg7XFxuICBmb250LXdlaWdodDogMzAwO1xcbn1cXG5cXG4uaW5mby1zdWItZGl2LmFjdGl2ZSAuY29udGFjdC1oZWFkaW5nIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrOyBcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmluZm8tc3ViLWRpdjpob3ZlciAuY29udGFjdC1oZWFkaW5nIHsgXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjazsgXFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5jb250YWN0LXRleHQge1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgZm9udC13ZWlnaHQ6IDIwMDtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcXG5cXG4gIHBhZGRpbmc6IDIwcHggMHB4IDBweCAyMHB4O1xcbn1cXG5cXG4jYm9va2luZy1kaXY6aG92ZXIge1xcbiAgaGVpZ2h0OiAyMDBweFxcbn1cXG5cXG5hIHtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuXFxuYTpmb2N1cyB7XFxuICBjb2xvcjogZ3JleTtcXG59XFxuXFxuI3N1cHBvcnQtZW1haWw6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jcmV2aWV3LWRpdjpob3ZlciB7XFxuICBoZWlnaHQ6IDM1MHB4O1xcbn1cXG5cXG4jcmV2aWV3LWZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIHJvdy1nYXA6IDIwcHg7XFxuICBjb2x1bW4tZ2FwOiA1JTtcXG5cXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xcblxcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDIwMHB4O1xcbn1cXG5cXG5cXG5pbnB1dCB7XFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcblxcbiAgd2lkdGg6IDQ1JTtcXG4gIGhlaWdodDogM3JlbTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcblxcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG5cXG4gIHdpZHRoOiA5NSU7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcblxcbiAgcGFkZGluZzogMTBweDtcXG5cXG59XFxuXFxuYnV0dG9uW3R5cGU9J3N1Ym1pdCddIHtcXG4gIHdpZHRoOiA1cmVtO1xcbiAgaGVpZ2h0OiAzcmVtO1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICBjb2xvcjogYmxhY2s7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbn1cXG5cXG5idXR0b25bdHlwZT0nc3VibWl0J106aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBjb2xvcjogd2hpdGU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qIEZPT1RFUiAqL1xcblxcbi5mYS1naXRodWIge1xcbiAgc2NhbGU6IDI7XFxuICBjb2xvcjogd2hpdGU7XFxuXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMzBweDtcXG4gIGJvdHRvbTogMzBweDtcXG4gIHotaW5kZXg6IDM7XFxufVxcblxcbi5mYS1naXRodWI6aG92ZXIge1xcbiAgdHJhbnNpdGlvbjogMC4zcztcXG4gIHNjYWxlOiAyLjI7XFxuICByb3RhdGU6IDM2MGRlZztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyogS0VZRlJBTUVTICovXFxuXFxuQGtleWZyYW1lcyBmYWRlLWluIHtcXG4gIDAlIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG9wYWNpdHk6IDAlO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDEwMCU7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgZ3JvdyB7XFxuICAwJSB7XFxuICAgIHNjYWxlOiAxO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHNjYWxlOiAxLjI7XFxuICB9XFxufVxcblxcbi8qIE1FRElBIFFVRVJJRVMgKi9cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogMTA4MHB4KSB7XFxuICAuY3VydmUtYmctaW1nIHtcXG4gICAgbGVmdDogLTU1JTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xcbiAgLm5hdi1idG4ge1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgfVxcbiAgXFxuICAubmF2LWJ0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICB9XFxuICBcXG4gIC5uYXYtYnRuLmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgfVxcblxcbiAgLm5hdi1idG4uaG9tZSB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxuICB9XFxuXFxuICAubmF2LWJ0bi5ob21lOmhvdmVyIHtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDg1MHB4KSB7XFxuXFxuICBoZWFkZXIge1xcbiAgICB3aWR0aDogbWluLWNvbnRlbnQ7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgY29sdW1uLWdhcDogNTBweDtcXG4gICAgcm93LWdhcDogMjBweDtcXG4gIH1cXG5cXG5cXG4gIC5iYWNrZ3JvdW5kLWltZy1kaXYge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgLmN1cnZlLWJnIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4gICNtZW51LWRpdiB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiBhdXRvO1xcbiAgICBsZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGdhcDogMjBweDtcXG4gICAgcGFkZGluZy10b3A6IDE4MHB4O1xcbiAgICB3aWR0aDogOTAlO1xcbiAgfVxcblxcbiAgI21lbnUtc2VsZWN0IHtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG92ZXJmbG93OiBzY3JvbGw7XFxuICAgIG9yZGVyOiAyO1xcbiAgfVxcblxcbiAgI21lbnUtaXRlbXMge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBvcmRlcjogMTtcXG4gICAgZ2FwOiAzMHB4O1xcbiAgfVxcblxcbiAgLml0ZW0ge1xcbiAgICB3aWR0aDogNDUlO1xcbiAgfVxcblxcbiAgLml0ZW0tbmFtZSB7XFxuICAgIGZvbnQtc2l6ZTogMy41dnc7XFxuICB9XFxuICBcXG4gIC5pdGVtLWRlc2Mge1xcbiAgICBmb250LXNpemU6IDJ2dztcXG4gIH1cXG5cXG4gICNpbmZvLXBhcmVudC1kaXYge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogYXV0bztcXG4gICAgbGVmdDogYXV0bztcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBwYWRkaW5nLXRvcDogMjMwcHg7XFxuICB9XFxuXFxuICAjaW5mby1kaXYge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG5cXG4gIC5pbmZvLXN1Yi1kaXYge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG5cXG4gICNib29raW5nLWRpdjpob3ZlciB7XFxuICAgIGhlaWdodDogMjcwcHhcXG4gIH1cXG5cXG4gICNpbnF1aXJpZXMtZGl2OmhvdmVyIHtcXG4gICAgaGVpZ2h0OiAzMDBweFxcbiAgfVxcblxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNzAwcHgpIHtcXG5cXG4gICNtZW51LWRpdiB7XFxuICAgIGdhcDogNDBweDtcXG4gIH1cXG5cXG4gICNtZW51LWl0ZW1zIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZmxleC13cmFwOiBub3dyYXA7XFxuICAgIGdhcDogMjBweDtcXG4gIH1cXG5cXG4gIC5pdGVtIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgd2lkdGg6IDgwJTtcXG4gIH1cXG5cXG4gIC5pdGVtLW5hbWUge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICB9XFxuICBcXG4gIC5pdGVtLWRlc2Mge1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICB9XFxuXFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzBweCkge1xcblxcbiAgI2hvbWUtbG9nbyB7XFxuICAgIGhlaWdodDogMjV2dztcXG4gIH1cXG5cXG4gICNzbG9nYW4ge1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICB9XFxuXFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA0NTBweCkge1xcbiAgLml0ZW0tbmFtZSB7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gIH1cXG4gIFxcbiAgLml0ZW0tZGVzYyB7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDQwMHB4KSB7XFxuXFxuICAjc3RhcnMtdGV4dCB7XFxuICAgIHdpZHRoOiA5NSU7XFxuICB9XFxuXFxuICAjcXVvdGUge1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIHdpZHRoOiA5NSU7XFxuICB9XFxuXFxuICAjcXVvdGUtbmFtZSB7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gIH1cXG5cXG4gIC8qIE1FTlUgKi9cXG5cXG4gIC8qIENPTlRBQ1QgKi9cXG5cXG4gIFxcblxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhc3NldHMvaW1hZ2VzL2NvbnRhY3QtYmcuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFzc2V0cy9pbWFnZXMvY3VydmUtYmcuc3ZnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFzc2V0cy9pbWFnZXMvaG9tZS1iZy5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL2ltYWdlcy9sb2dvLWJsYWNrLnN2Z1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhc3NldHMvaW1hZ2VzL2xvZ28uc3ZnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFzc2V0cy9pbWFnZXMvZGVzc2VydC0xLndlYnBcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL2ltYWdlcy9kZXNzZXJ0LTIud2VicFwiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhc3NldHMvaW1hZ2VzL2Rlc3NlcnQtMy53ZWJwXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFzc2V0cy9pbWFnZXMvZGVzc2VydC00LndlYnBcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL2ltYWdlcy9kcmluay0xLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhc3NldHMvaW1hZ2VzL2RyaW5rLTIuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFzc2V0cy9pbWFnZXMvZHJpbmstMy5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL2ltYWdlcy9kcmluay00LmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhc3NldHMvaW1hZ2VzL21haW4tMS53ZWJwXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFzc2V0cy9pbWFnZXMvbWFpbi0yLndlYnBcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL2ltYWdlcy9tYWluLTMud2VicFwiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhc3NldHMvaW1hZ2VzL21haW4tNC53ZWJwXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFzc2V0cy9pbWFnZXMvc3RhcnRlci0xLndlYnBcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL2ltYWdlcy9zdGFydGVyLTIud2VicFwiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhc3NldHMvaW1hZ2VzL3N0YXJ0ZXItMy53ZWJwXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFzc2V0cy9pbWFnZXMvc3RhcnRlci00LndlYnBcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL2ltYWdlcy9taWNoZWxpbi1zdGFycy5wbmdcIjsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGN1cnZlQmcgZnJvbSAnLi9hc3NldHMvY3VydmUtYmcuc3ZnJztcbmltcG9ydCBsb2dvQmxhY2tTdmcgZnJvbSAnLi9hc3NldHMvbG9nby1ibGFjay5zdmcnO1xuaW1wb3J0IGxvYWRIb21lIGZyb20gJy4vaG9tZSc7XG5cbmltcG9ydCBjb250YWN0QmcgZnJvbSAnLi9hc3NldHMvY29udGFjdC1iZy5qcGcnO1xuXG5jb25zdCBzZXRCYWNrZ3JvdW5kID0gKCkgPT4ge1xuICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmQgPSAnJztcblxuICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKTtcblxuICBjb25zdCBjdXJ2ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjdXJ2ZURpdi5jbGFzc0xpc3QuYWRkKCdjdXJ2ZS1iZycpO1xuXG4gIGNvbnN0IGN1cnZlSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGN1cnZlSW1nLnNyYyA9IGN1cnZlQmc7XG4gIGN1cnZlSW1nLmNsYXNzTGlzdC5hZGQoJ2N1cnZlLWJnLWltZycpO1xuXG4gIGNvbnN0IGJhY2tncm91bmRJbWdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYmFja2dyb3VuZEltZ0Rpdi5jbGFzc0xpc3QuYWRkKCdiYWNrZ3JvdW5kLWltZy1kaXYnKTtcblxuICBjb25zdCBiYWNrZ3JvdW5kSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGJhY2tncm91bmRJbWcuaWQgPSAnY29udGFjdC1pbWcnO1xuICBiYWNrZ3JvdW5kSW1nLnNyYyA9IGNvbnRhY3RCZztcbiAgYmFja2dyb3VuZEltZy5jbGFzc0xpc3QuYWRkKCdiYWNrZ3JvdW5kLWltZycpO1xuXG4gIGJhY2tncm91bmRJbWdEaXYuYXBwZW5kQ2hpbGQoYmFja2dyb3VuZEltZyk7XG4gIGN1cnZlRGl2LmFwcGVuZENoaWxkKGN1cnZlSW1nKTtcbiAgbWFpbi5hcHBlbmRDaGlsZChjdXJ2ZURpdik7XG4gIG1haW4uYXBwZW5kQ2hpbGQoYmFja2dyb3VuZEltZ0Rpdik7XG59O1xuXG5jb25zdCBzZXROYXYgPSAoKSA9PiB7XG4gIGlmICghZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nvcm5lci1sb2dvJykpIHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhZGVyJyk7XG4gICAgaGVhZGVyLnN0eWxlLmp1c3RpZnlDb250ZW50ID0gJ3NwYWNlLWJldHdlZW4nO1xuICAgIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBsb2dvLnNyYyA9IGxvZ29CbGFja1N2ZztcbiAgICBsb2dvLmlkID0gJ2Nvcm5lci1sb2dvJztcblxuICAgIGxvZ28uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsb2FkSG9tZSk7XG5cbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobG9nbyk7XG4gIH1cblxuICBjb25zdCBjb250YWN0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhY3QtYnRuJyk7XG4gIGNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudS1idG4nKTtcbiAgbWVudUJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgbWVudUJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdob21lJyk7XG4gIGNvbnRhY3RCdG4uY2xhc3NMaXN0LnJlbW92ZSgnaG9tZScpO1xufTtcblxuY29uc3QgY3JlYXRlSW5mbyA9ICgpID0+IHtcbiAgY29uc3QgaW5mb1BhcmVudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBpbmZvUGFyZW50RGl2LmlkID0gJ2luZm8tcGFyZW50LWRpdic7XG5cbiAgY29uc3QgaW5mb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBpbmZvRGl2LmlkID0gJ2luZm8tZGl2JztcblxuICBjb25zdCBjcmVhdGVBZGRyZXNzRGl2ID0gKCkgPT4ge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdpbmZvLXN1Yi1kaXYnKTtcbiAgICBkaXYuaWQgPSAnYWRkcmVzcy1kaXYnO1xuXG4gICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlYWRpbmcuY2xhc3NMaXN0LmFkZCgnY29udGFjdC1oZWFkaW5nJyk7XG4gICAgaGVhZGluZy50ZXh0Q29udGVudCA9ICdBZGRyZXNzJztcblxuICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdGV4dC5jbGFzc0xpc3QuYWRkKCdjb250YWN0LXRleHQnKTtcbiAgICB0ZXh0LmlkID0gJ2FkZHJlc3MtZGl2JztcbiAgICB0ZXh0LnRleHRDb250ZW50ID0gJ+KAnHJlZmluZWTigJ1cXHJcXG4zMjEyIDR0aCBhdi5cXHJcXG5OZXcgWW9yayBDaXR5LCBOWVxcclxcbjIxMiAzMzIgMjMzMyc7XG5cbiAgICBkaXYuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG4gICAgZGl2LmFwcGVuZENoaWxkKHRleHQpO1xuXG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuXG4gICAgcmV0dXJuIGRpdjtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVCb29raW5nRGl2ID0gKCkgPT4ge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdpbmZvLXN1Yi1kaXYnKTtcbiAgICBkaXYuaWQgPSAnYm9va2luZy1kaXYnO1xuXG4gICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlYWRpbmcuY2xhc3NMaXN0LmFkZCgnY29udGFjdC1oZWFkaW5nJyk7XG4gICAgaGVhZGluZy50ZXh0Q29udGVudCA9ICdCb29raW5nJztcblxuICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdGV4dC5jbGFzc0xpc3QuYWRkKCdjb250YWN0LXRleHQnKTtcbiAgICB0ZXh0LmlkID0gJ2Jvb2tpbmctZGl2JztcbiAgICB0ZXh0LmlubmVySFRNTCA9ICdUbyBib29rIGEgcmVzZXJ2YXRpb24sIHBsZWFzZSBlaXRoZXIgY2FsbCB1c1xcclxcbjxzcGFuIGNsYXNzPVwiYm9sZFwiPjIxMiAzMzIgMjMzMzwvc3Bhbj5cXHJcXG4gb3IgY2xpY2sgPGEgaHJlZj1cImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9ZFF3NHc5V2dYY1EmYWJfY2hhbm5lbD1SaWNrQXN0bGV5XCIgdGFyZ2V0PeKAnV9ibGFua+KAnT48c3BhbiBjbGFzcz1cImJvbGRcIj5oZXJlPC9zcGFuPjwvYT4gdG8gYm9vayBvbmxpbmUuJztcblxuICAgIGRpdi5hcHBlbmRDaGlsZChoZWFkaW5nKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQodGV4dCk7XG5cbiAgICByZXR1cm4gZGl2O1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZUlucXVpcmllc0RpdiA9ICgpID0+IHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuY2xhc3NMaXN0LmFkZCgnaW5mby1zdWItZGl2Jyk7XG4gICAgZGl2LmlkID0gJ2lucXVpcmllcy1kaXYnO1xuXG4gICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlYWRpbmcuY2xhc3NMaXN0LmFkZCgnY29udGFjdC1oZWFkaW5nJyk7XG4gICAgaGVhZGluZy50ZXh0Q29udGVudCA9ICdJbnF1aXJpZXMnO1xuXG4gICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB0ZXh0LmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtdGV4dCcpO1xuICAgIHRleHQuaWQgPSAnaW5xdWlyaWVzLWRpdic7XG4gICAgdGV4dC5pbm5lckhUTUwgPSAnRm9yIGZ1cnRoZXIgaW5xdWlyaWVzLCBzZW5kIHVzIGFuIGVtYWlsIGF0XFxyXFxuPHNwYW4gaWQ9XCJzdXBwb3J0LWVtYWlsXCIgY2xhc3M9XCJib2xkXCI+c3VwcG9ydEByZWZpbmVkLmNvbTwvc3Bhbj5cXHJcXG5SZXNwb25zZXMgY2FuIHRha2UgdXAgdG8gYSBmZXcgaG91cnMuXFxyXFxuVGhhbmsgeW91ISc7XG5cbiAgICBkaXYuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG4gICAgZGl2LmFwcGVuZENoaWxkKHRleHQpO1xuXG4gICAgcmV0dXJuIGRpdjtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVSZXZpZXdEaXYgPSAoKSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoJ2luZm8tc3ViLWRpdicpO1xuICAgIGRpdi5pZCA9ICdyZXZpZXctZGl2JztcblxuICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkaW5nLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtaGVhZGluZycpO1xuICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSAnUmV2aWV3JztcblxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgZm9ybS5pZCA9ICdyZXZpZXctZm9ybSc7XG5cbiAgICBjb25zdCBmaXJzdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGZpcnN0TmFtZS50eXBlID0gJ3RleHQnO1xuICAgIGZpcnN0TmFtZS5yZXF1aXJlZCA9IHRydWU7XG4gICAgZmlyc3ROYW1lLnBsYWNlaG9sZGVyID0gJ0ZpcnN0IE5hbWUnO1xuXG4gICAgY29uc3QgbGFzdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGxhc3ROYW1lLnR5cGUgPSAndGV4dCc7XG4gICAgbGFzdE5hbWUucmVxdWlyZWQgPSB0cnVlO1xuICAgIGxhc3ROYW1lLnBsYWNlaG9sZGVyID0gJ0xhc3QgTmFtZSc7XG5cbiAgICBjb25zdCBkYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGRhdGVMYWJlbC50ZXh0Q29udGVudCA9ICdWaXNpdCBEYXRlJztcblxuICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGRhdGUudHlwZSA9ICdkYXRlJztcbiAgICBkYXRlLnJlcXVpcmVkID0gdHJ1ZTtcbiAgICBkYXRlLnBsYWNlaG9sZGVyID0gJ0RhdGUgb2YgVmlzaXQnO1xuXG4gICAgY29uc3QgcmVjZWlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgcmVjZWlwdC50eXBlID0gJ3RleHQnO1xuICAgIHJlY2VpcHQucmVxdWlyZWQgPSB0cnVlO1xuICAgIHJlY2VpcHQucGxhY2Vob2xkZXIgPSAnUmVjZWlwdCBOdW1iZXIgZS5nLiAjMzRENzNjJztcblxuICAgIGNvbnN0IHRleHRBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICB0ZXh0QXJlYS5yZXF1aXJlZCA9IHRydWU7XG4gICAgdGV4dEFyZWEucGxhY2Vob2xkZXIgPSAnV3JpdGUgeW91ciByZXZpZXcgaGVyZS4uLic7XG5cbiAgICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBzdWJtaXRCdG4udHlwZSA9ICdzdWJtaXQnO1xuICAgIHN1Ym1pdEJ0bi50ZXh0Q29udGVudCA9ICdTdWJtaXQnO1xuXG4gICAgZm9ybS5hcHBlbmRDaGlsZChmaXJzdE5hbWUpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQobGFzdE5hbWUpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZGF0ZSk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChyZWNlaXB0KTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHRleHRBcmVhKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdEJ0bik7XG5cbiAgICBkaXYuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGZvcm0pO1xuXG4gICAgcmV0dXJuIGRpdjtcbiAgfTtcblxuICBpbmZvRGl2LmFwcGVuZENoaWxkKGNyZWF0ZUFkZHJlc3NEaXYoKSk7XG4gIGluZm9EaXYuYXBwZW5kQ2hpbGQoY3JlYXRlQm9va2luZ0RpdigpKTtcbiAgaW5mb0Rpdi5hcHBlbmRDaGlsZChjcmVhdGVJbnF1aXJpZXNEaXYoKSk7XG4gIGluZm9EaXYuYXBwZW5kQ2hpbGQoY3JlYXRlUmV2aWV3RGl2KCkpO1xuXG4gIGluZm9QYXJlbnREaXYuYXBwZW5kQ2hpbGQoaW5mb0Rpdik7XG5cbiAgcmV0dXJuIGluZm9QYXJlbnREaXY7XG59O1xuXG5jb25zdCBlbmFibGVEZWZhdWx0SG92ZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGluZm9TdWJEaXZzID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdpbmZvLXN1Yi1kaXYnKSk7XG4gIGluZm9TdWJEaXZzLmZvckVhY2goKGUpID0+IHtcbiAgICBlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsICgpID0+IHtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRyZXNzLWRpdicpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIH0pO1xuICAgIGUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoKSA9PiB7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkcmVzcy1kaXYnKS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgY29uc3QgdXJsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1cHBvcnQtZW1haWwnKTtcbiAgdXJsLm9uY2xpY2sgPSBmdW5jdGlvbiBjb3B5KCkge1xuICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KHVybC50ZXh0Q29udGVudCk7XG4gICAgYWxlcnQoJ0VtYWlsIGNvcGllZCEnKTtcbiAgfTtcbn07XG5cbmNvbnN0IGxvYWRDb250YWN0ID0gKCkgPT4ge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKTtcbiAgbWFpbi5pbm5lckhUTUwgPSAnJztcblxuICBzZXRCYWNrZ3JvdW5kKCk7XG4gIHNldE5hdigpO1xuXG4gIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlSW5mbygpKTtcbiAgZW5hYmxlRGVmYXVsdEhvdmVyKCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBsb2FkQ29udGFjdDtcbiIsImltcG9ydCBob21lQmcgZnJvbSAnLi9hc3NldHMvaG9tZS1iZy5qcGcnO1xuaW1wb3J0IGxvZ29TdmcgZnJvbSAnLi9hc3NldHMvbG9nby5zdmcnO1xuaW1wb3J0IHN0YXJzUG5nIGZyb20gJy4vYXNzZXRzL21pY2hlbGluLXN0YXJzLnBuZyc7XG5cbmZ1bmN0aW9uIHNldEJhY2tncm91bmQoKSB7XG4gIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZCA9IGB1cmwoJHtob21lQmd9KWA7XG4gIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZFNpemUgPSAnY292ZXInO1xufVxuXG5mdW5jdGlvbiBzZXROYXYoKSB7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkZXInKTtcbiAgaGVhZGVyLnN0eWxlLmp1c3RpZnlDb250ZW50ID0gJ2NlbnRlcic7XG5cbiAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb3JuZXItbG9nbycpKSB7XG4gICAgY29uc3QgY29ybmVyTG9nbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb3JuZXItbG9nbycpO1xuICAgIGNvcm5lckxvZ28ucmVtb3ZlKCk7XG4gIH1cblxuICBjb25zdCBtZW51QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUtYnRuJyk7XG4gIGNvbnN0IGNvbnRhY3RCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFjdC1idG4nKTtcbiAgbWVudUJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgY29udGFjdEJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgbWVudUJ0bi5jbGFzc0xpc3QuYWRkKCdob21lJyk7XG4gIGNvbnRhY3RCdG4uY2xhc3NMaXN0LmFkZCgnaG9tZScpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVHYWxsZXJ5KCkge1xuICBjb25zdCBnYWxsZXJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGdhbGxlcnkuY2xhc3NMaXN0LmFkZCgnZ2FsbGVyeScpO1xuICBnYWxsZXJ5LmlkID0gJ2dhbGxlcnknO1xuXG4gIGNvbnN0IGxvZ29EaXYgPSAoKSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LmlkID0gJ2xvZ28tZGl2JztcbiAgICBkaXYuY2xhc3NMaXN0LmFkZCgnZ2FsbGVyeS1kaXYnKTtcblxuICAgIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBsb2dvLnNyYyA9IGxvZ29Tdmc7XG4gICAgbG9nby5pZCA9ICdob21lLWxvZ28nO1xuXG4gICAgY29uc3Qgc2xvZ2FuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHNsb2dhbi5pZCA9ICdzbG9nYW4nO1xuICAgIHNsb2dhbi5pbm5lckhUTUwgPSAnPHNwYW4gY2xhc3M9XCJ1bmRlcmxpbmVcIj5JdFxcJ3Mgbm90PC9zcGFuPiA8c3BhbiBjbGFzcz1cImxpbmUtdGhyb3VnaFwiPmp1c3QgZm9vZDwvc3Bhbj4uIEl0XFwncyA8c3BhbiBjbGFzcz1cImJvbGRcIj5hcnQ8L3NwYW4+Lic7XG5cbiAgICBkaXYuYXBwZW5kQ2hpbGQobG9nbyk7XG4gICAgZGl2LmFwcGVuZENoaWxkKHNsb2dhbik7XG5cbiAgICByZXR1cm4gZGl2O1xuICB9O1xuXG4gIGNvbnN0IG1pY2hlbGluRGl2ID0gKCkgPT4ge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5pZCA9ICdtaWNoZWxpbi1kaXYnO1xuICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdnYWxsZXJ5LWRpdicpO1xuXG4gICAgY29uc3Qgc3RhcnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBzdGFycy5zcmMgPSBzdGFyc1BuZztcbiAgICBzdGFycy5pZCA9ICdzdGFycyc7XG5cbiAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHRleHQuaW5uZXJIVE1MID0gJ0Jvb2sgYW4gb3Bwb3J0dW5pdHkgdG8gZGluZSBpbiB0aGUgd29ybGRcXCdzIDxzcGFuIGNsYXNzPVwiYm9sZFwiPmZpcnN0PC9zcGFuPiAzIE1pY2hlbGluIFN0YXIgcmVzdGF1cmFudC4nO1xuICAgIHRleHQuaWQgPSAnc3RhcnMtdGV4dCc7XG5cbiAgICBkaXYuYXBwZW5kQ2hpbGQoc3RhcnMpO1xuICAgIGRpdi5hcHBlbmRDaGlsZCh0ZXh0KTtcblxuICAgIHJldHVybiBkaXY7XG4gIH07XG5cbiAgY29uc3QgcXVvdGVEaXYgPSAoKSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LmlkID0gJ3F1b3RlLWRpdic7XG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoJ2dhbGxlcnktZGl2Jyk7XG5cbiAgICBjb25zdCBxdW90ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgcXVvdGUudGV4dENvbnRlbnQgPSAnXCJJIGNvdWxkblxcJ3QgYmVsaWV2ZSBpdC4gSXQgd2FzIG1hZ2ljLiBPdXQgb2YgdGhpcyB3b3JsZC4gVGhpcyBleHBlcmllbmNlIGlzIG1hbmRhdG9yeS5cIic7XG4gICAgcXVvdGUuaWQgPSAncXVvdGUnO1xuXG4gICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBuYW1lLnRleHRDb250ZW50ID0gJy0gR29yZG9uIFJhbXNleSAtJztcbiAgICBuYW1lLmlkID0gJ3F1b3RlLW5hbWUnO1xuXG4gICAgZGl2LmFwcGVuZENoaWxkKHF1b3RlKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQobmFtZSk7XG5cbiAgICByZXR1cm4gZGl2O1xuICB9O1xuXG4gIGdhbGxlcnkuYXBwZW5kQ2hpbGQobG9nb0RpdigpKTtcbiAgZ2FsbGVyeS5hcHBlbmRDaGlsZChtaWNoZWxpbkRpdigpKTtcbiAgZ2FsbGVyeS5hcHBlbmRDaGlsZChxdW90ZURpdigpKTtcblxuICByZXR1cm4gZ2FsbGVyeTtcbn1cblxuY29uc3QgZW5hYmxlU2xpZGVzID0gKCkgPT4ge1xuICBjb25zdCBnYWxsZXJ5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbGxlcnknKTtcbiAgY29uc3QgZ2FsbGVyeURpdnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2dhbGxlcnktZGl2JykpO1xuICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgZ2FsbGVyeURpdnMuZm9yRWFjaCgoeCkgPT4ge1xuICAgICAgaWYgKHgub2Zmc2V0TGVmdCA8IDApIHtcbiAgICAgICAgeC5hbmltYXRlKHtcbiAgICAgICAgICBsZWZ0OiAnMTUwJScsXG4gICAgICAgIH0sIHsgZHVyYXRpb246IDAsIGZpbGw6ICdmb3J3YXJkcycgfSk7XG4gICAgICB9IGVsc2UgaWYgKHgub2Zmc2V0TGVmdCA+IGdhbGxlcnkub2Zmc2V0V2lkdGgpIHtcbiAgICAgICAgeC5hbmltYXRlKHtcbiAgICAgICAgICBsZWZ0OiAnNTAlJyxcbiAgICAgICAgfSwgeyBkdXJhdGlvbjogMTAwMCwgZmlsbDogJ2ZvcndhcmRzJywgZWFzaW5nOiAnZWFzZS1pbi1vdXQnIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgeC5hbmltYXRlKHtcbiAgICAgICAgICBsZWZ0OiAnLTE1MCUnLFxuICAgICAgICB9LCB7IGR1cmF0aW9uOiAxMDAwLCBmaWxsOiAnZm9yd2FyZHMnLCBlYXNpbmc6ICdlYXNlLWluLW91dCcgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sIDQwMDApO1xufTtcblxuZnVuY3Rpb24gbG9hZEhvbWUoKSB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpO1xuICBtYWluLmlubmVySFRNTCA9ICcnO1xuXG4gIHNldEJhY2tncm91bmQoKTtcbiAgc2V0TmF2KCk7XG5cbiAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVHYWxsZXJ5KCkpO1xuICBlbmFibGVTbGlkZXMoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZEhvbWU7XG5cbi8qIGdhbGxlcnlEaXZzLmZvckVhY2goKGUpID0+IHtcbiAgY29uc29sZS5sb2coJ2FkZGluZycpO1xuICBlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGdhbGxlcnlEaXZzLmZvckVhY2goKHgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKHgub2Zmc2V0TGVmdCk7XG4gICAgICBpZiAoeC5vZmZzZXRMZWZ0IDwgMCkge1xuICAgICAgICBjb25zb2xlLmxvZygnc2V0dGluZyB0byAxNTAlJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKHgpO1xuICAgICAgICB4LmFuaW1hdGUoe1xuICAgICAgICAgIGxlZnQ6ICcxNTAlJyxcbiAgICAgICAgfSwgeyBkdXJhdGlvbjogMCwgZmlsbDogJ2ZvcndhcmRzJyB9KTtcbiAgICAgICAgY29uc29sZS5sb2coeC5zdHlsZS5sZWZ0KTtcbiAgICAgIH0gZWxzZSBpZiAoeC5vZmZzZXRMZWZ0ID4gZ2FsbGVyeS5vZmZzZXRXaWR0aCkge1xuICAgICAgICBjb25zb2xlLmxvZygnYWRkaW5nJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKHgpO1xuICAgICAgICB4LmFuaW1hdGUoe1xuICAgICAgICAgIGxlZnQ6ICc1MCUnLFxuICAgICAgICB9LCB7IGR1cmF0aW9uOiA1MDAsIGZpbGw6ICdmb3J3YXJkcycgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZygncmVtb3ZpbmcnKTtcbiAgICAgICAgY29uc29sZS5sb2coeCk7XG4gICAgICAgIHguYW5pbWF0ZSh7XG4gICAgICAgICAgbGVmdDogJy0xNTAlJyxcbiAgICAgICAgfSwgeyBkdXJhdGlvbjogNTAwLCBmaWxsOiAnZm9yd2FyZHMnIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn0pOyAqL1xuIiwiaW1wb3J0IGxvYWRNZW51IGZyb20gJy4vbWVudSc7XG5pbXBvcnQgbG9hZENvbnRhY3QgZnJvbSAnLi9jb250YWN0JztcblxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCkge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgaGVhZGVyLmlkID0gJ2hlYWRlcic7XG5cbiAgZnVuY3Rpb24gY3JlYXRlTmF2KCkge1xuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuICAgIG5hdi5pZCA9ICduYXYnO1xuXG4gICAgY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIG1lbnVCdG4udGV4dENvbnRlbnQgPSAnbWVudSc7XG4gICAgbWVudUJ0bi5jbGFzc0xpc3QuYWRkKCduYXYtYnRuJyk7XG4gICAgbWVudUJ0bi5pZCA9ICdtZW51LWJ0bic7XG4gICAgbWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGlmICghbWVudUJ0bi5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgICAgIGxvYWRNZW51KCk7XG4gICAgICAgIG1lbnVCdG4uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBjb250YWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29udGFjdEJ0bi50ZXh0Q29udGVudCA9ICdjb250YWN0JztcbiAgICBjb250YWN0QnRuLmNsYXNzTGlzdC5hZGQoJ25hdi1idG4nKTtcbiAgICBjb250YWN0QnRuLmlkID0gJ2NvbnRhY3QtYnRuJztcbiAgICBjb250YWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgaWYgKCFjb250YWN0QnRuLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcbiAgICAgICAgbG9hZENvbnRhY3QoKTtcbiAgICAgICAgY29udGFjdEJ0bi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIG5hdi5hcHBlbmRDaGlsZChtZW51QnRuKTtcbiAgICBuYXYuYXBwZW5kQ2hpbGQoY29udGFjdEJ0bik7XG5cbiAgICByZXR1cm4gbmF2O1xuICB9XG5cbiAgaGVhZGVyLmFwcGVuZENoaWxkKGNyZWF0ZU5hdigpKTtcblxuICByZXR1cm4gaGVhZGVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNYWluKCkge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICBtYWluLmlkID0gJ21haW4nO1xuXG4gIHJldHVybiBtYWluO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVGb290ZXIoKSB7XG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuICBmb290ZXIuaWQgPSAnZm9vdGVyJztcblxuICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBsaW5rLmhyZWYgPSAnaHR0cHM6Ly9naXRodWIuY29tL2JhaGVlcnBheWFiJztcbiAgbGluay50YXJnZXQgPSAnX2JsYW5rJztcblxuICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICBpY29uLmNsYXNzTGlzdC5hZGQoJ2ZhYicpO1xuICBpY29uLmNsYXNzTGlzdC5hZGQoJ2ZhLWdpdGh1YicpO1xuXG4gIGxpbmsuYXBwZW5kQ2hpbGQoaWNvbik7XG4gIGZvb3Rlci5hcHBlbmRDaGlsZChsaW5rKTtcblxuICByZXR1cm4gZm9vdGVyO1xufVxuXG5mdW5jdGlvbiBpbml0KCkge1xuICBjb25zdCBkaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG4gIGRpdi5hcHBlbmRDaGlsZChjcmVhdGVIZWFkZXIoKSk7XG4gIGRpdi5hcHBlbmRDaGlsZChjcmVhdGVNYWluKCkpO1xuICBkaXYuYXBwZW5kQ2hpbGQoY3JlYXRlRm9vdGVyKCkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBpbml0O1xuIiwiaW1wb3J0IGN1cnZlQmcgZnJvbSAnLi9hc3NldHMvY3VydmUtYmcuc3ZnJztcbmltcG9ydCBsb2dvQmxhY2tTdmcgZnJvbSAnLi9hc3NldHMvbG9nby1ibGFjay5zdmcnO1xuaW1wb3J0IGxvYWRIb21lIGZyb20gJy4vaG9tZSc7XG5cbmltcG9ydCBzdGFydGVyT25lIGZyb20gJy4vYXNzZXRzL21lbnUtaXRlbXMvc3RhcnRlci0xLndlYnAnO1xuaW1wb3J0IHN0YXJ0ZXJUd28gZnJvbSAnLi9hc3NldHMvbWVudS1pdGVtcy9zdGFydGVyLTIud2VicCc7XG5pbXBvcnQgc3RhcnRlclRocmVlIGZyb20gJy4vYXNzZXRzL21lbnUtaXRlbXMvc3RhcnRlci0zLndlYnAnO1xuaW1wb3J0IHN0YXJ0ZXJGb3VyIGZyb20gJy4vYXNzZXRzL21lbnUtaXRlbXMvc3RhcnRlci00LndlYnAnO1xuXG5pbXBvcnQgbWFpbk9uZSBmcm9tICcuL2Fzc2V0cy9tZW51LWl0ZW1zL21haW4tMS53ZWJwJztcbmltcG9ydCBtYWluVHdvIGZyb20gJy4vYXNzZXRzL21lbnUtaXRlbXMvbWFpbi0yLndlYnAnO1xuaW1wb3J0IG1haW5UaHJlZSBmcm9tICcuL2Fzc2V0cy9tZW51LWl0ZW1zL21haW4tMy53ZWJwJztcbmltcG9ydCBtYWluRm91ciBmcm9tICcuL2Fzc2V0cy9tZW51LWl0ZW1zL21haW4tNC53ZWJwJztcblxuaW1wb3J0IGRlc3NlcnRPbmUgZnJvbSAnLi9hc3NldHMvbWVudS1pdGVtcy9kZXNzZXJ0LTEud2VicCc7XG5pbXBvcnQgZGVzc2VydFR3byBmcm9tICcuL2Fzc2V0cy9tZW51LWl0ZW1zL2Rlc3NlcnQtMi53ZWJwJztcbmltcG9ydCBkZXNzZXJ0VGhyZWUgZnJvbSAnLi9hc3NldHMvbWVudS1pdGVtcy9kZXNzZXJ0LTMud2VicCc7XG5pbXBvcnQgZGVzc2VydEZvdXIgZnJvbSAnLi9hc3NldHMvbWVudS1pdGVtcy9kZXNzZXJ0LTQud2VicCc7XG5cbmltcG9ydCBkcmlua09uZSBmcm9tICcuL2Fzc2V0cy9tZW51LWl0ZW1zL2RyaW5rLTEuanBnJztcbmltcG9ydCBkcmlua1R3byBmcm9tICcuL2Fzc2V0cy9tZW51LWl0ZW1zL2RyaW5rLTIuanBnJztcbmltcG9ydCBkcmlua1RocmVlIGZyb20gJy4vYXNzZXRzL21lbnUtaXRlbXMvZHJpbmstMy5qcGcnO1xuaW1wb3J0IGRyaW5rRm91ciBmcm9tICcuL2Fzc2V0cy9tZW51LWl0ZW1zL2RyaW5rLTQuanBnJztcblxuY29uc3Qgc2V0QmFja2dyb3VuZCA9ICgpID0+IHtcbiAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kID0gJyc7XG5cbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJyk7XG5cbiAgY29uc3QgY3VydmVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY3VydmVEaXYuY2xhc3NMaXN0LmFkZCgnY3VydmUtYmcnKTtcblxuICBjb25zdCBjdXJ2ZUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBjdXJ2ZUltZy5zcmMgPSBjdXJ2ZUJnO1xuICBjdXJ2ZUltZy5jbGFzc0xpc3QuYWRkKCdjdXJ2ZS1iZy1pbWcnKTtcblxuICBjb25zdCBpdGVtSW1nRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGl0ZW1JbWdEaXYuaWQgPSAnaXRlbS1pbWctZGl2JztcbiAgaXRlbUltZ0Rpdi5jbGFzc0xpc3QuYWRkKCdiYWNrZ3JvdW5kLWltZy1kaXYnKTtcblxuICBjdXJ2ZURpdi5hcHBlbmRDaGlsZChjdXJ2ZUltZyk7XG4gIG1haW4uYXBwZW5kQ2hpbGQoY3VydmVEaXYpO1xuICBtYWluLmFwcGVuZENoaWxkKGl0ZW1JbWdEaXYpO1xufTtcblxuY29uc3Qgc2V0TmF2ID0gKCkgPT4ge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhZGVyJyk7XG4gIGhlYWRlci5zdHlsZS5qdXN0aWZ5Q29udGVudCA9ICdzcGFjZS1iZXR3ZWVuJztcblxuICBpZiAoIWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb3JuZXItbG9nbycpKSB7XG4gICAgY29uc3QgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGxvZ28uc3JjID0gbG9nb0JsYWNrU3ZnO1xuICAgIGxvZ28uaWQgPSAnY29ybmVyLWxvZ28nO1xuXG4gICAgbG9nby5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxvYWRIb21lKTtcblxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChsb2dvKTtcbiAgfVxuXG4gIGNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudS1idG4nKTtcbiAgY29uc3QgY29udGFjdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWN0LWJ0bicpO1xuICBjb250YWN0QnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICBtZW51QnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2hvbWUnKTtcbiAgY29udGFjdEJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdob21lJyk7XG59O1xuXG5jb25zdCBjcmVhdGVNZW51ID0gKCkgPT4ge1xuICBjb25zdCBtZW51RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1lbnVEaXYuaWQgPSAnbWVudS1kaXYnO1xuXG4gIGNvbnN0IGl0ZW1JbWdEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXRlbS1pbWctZGl2Jyk7XG5cbiAgY29uc3QgY3JlYXRlTWVudUl0ZW1zID0gKCkgPT4ge1xuICAgIGNvbnN0IGNyZWF0ZUl0ZW1zID0gKCkgPT4ge1xuICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBkaXYuaWQgPSAnbWVudS1pdGVtcyc7XG5cbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDQ7IGkgKz0gMSkge1xuICAgICAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnaXRlbScpO1xuICAgICAgICBpdGVtLmlkID0gYGl0ZW0tJHtpfWA7XG5cbiAgICAgICAgY29uc3QgaXRlbU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGl0ZW1OYW1lLmNsYXNzTGlzdC5hZGQoJ2l0ZW0tbmFtZScpO1xuICAgICAgICBpdGVtTmFtZS5pZCA9IGBpdGVtLW5hbWUtJHtpfWA7XG5cbiAgICAgICAgY29uc3QgaXRlbURlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGl0ZW1EZXNjLmNsYXNzTGlzdC5hZGQoJ2l0ZW0tZGVzYycpO1xuICAgICAgICBpdGVtRGVzYy5pZCA9IGBpdGVtLWRlc2MtJHtpfWA7XG5cbiAgICAgICAgY29uc3QgaXRlbUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBpdGVtSW1nLmNsYXNzTGlzdC5hZGQoJ2JhY2tncm91bmQtaW1nJyk7XG4gICAgICAgIGl0ZW1JbWcuaWQgPSBgaXRlbS1pbWctJHtpfWA7XG4gICAgICAgIGlmIChpICE9PSAxKSBpdGVtSW1nLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuXG4gICAgICAgIGl0ZW0uYXBwZW5kQ2hpbGQoaXRlbU5hbWUpO1xuICAgICAgICBpdGVtLmFwcGVuZENoaWxkKGl0ZW1EZXNjKTtcbiAgICAgICAgaXRlbUltZ0Rpdi5hcHBlbmRDaGlsZChpdGVtSW1nKTtcblxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoaXRlbSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZGl2O1xuICAgIH07XG5cbiAgICBjb25zdCBzZXRTdGFydGVycyA9IChlKSA9PiB7XG4gICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWlucycpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc3NlcnRzJykuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHJpbmtzJykuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG5cbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpdGVtLW5hbWUtMScpLnRleHRDb250ZW50ID0gJ0NvbmZpdGVkIEZvaWUgR3Jhcyc7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXRlbS1kZXNjLTEnKS50ZXh0Q29udGVudCA9ICdGb2llIEdyYXMgd2l0aCBicmFtbGV5IGFwcGxlIGNvbXBvdGUgYW5kIHdhbG51dCBjcnVuY2gnO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2l0ZW0taW1nLTEnKS5zcmMgPSBzdGFydGVyT25lO1xuXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXRlbS1uYW1lLTInKS50ZXh0Q29udGVudCA9ICdTZWEgb2YgT3JhbmdlJztcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpdGVtLWRlc2MtMicpLnRleHRDb250ZW50ID0gJ05hdGl2ZSBsb2JzdGVyLCByb2FzdGVkIGhlcml0YWdlIGNhcnJvdHMsIGNhcnJvdCBwdXLDqWUgYW5kIGJ1dHRlcm1pbGsgcHVyw6llJztcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpdGVtLWltZy0yJykuc3JjID0gc3RhcnRlclR3bztcblxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2l0ZW0tbmFtZS0zJykudGV4dENvbnRlbnQgPSAnSGFrZSBGaWxsZXQnO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2l0ZW0tZGVzYy0zJykudGV4dENvbnRlbnQgPSAnSGFrZSBmaWxsZXQgcGVyZmVjdGx5IHVuZGVycGlubmVkIGJ5IGFuIGVhcnRoeSBnb2xkZW4gYmVldHJvb3QgYW5kIHJhZGlzaCBzYWxhZCc7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXRlbS1pbWctMycpLnNyYyA9IHN0YXJ0ZXJUaHJlZTtcblxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2l0ZW0tbmFtZS00JykudGV4dENvbnRlbnQgPSAnQ2F1bGlmbG93ZXIgVGV4dHVyZXMnO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2l0ZW0tZGVzYy00JykudGV4dENvbnRlbnQgPSAnQSBjYXVsaWZsb3dlciByZWNpcGUgYWxsIGFib3V0IGNvbG91ciBhbmQgdGV4dHVyZSwgYSBwZXJmZWN0IGFwcGV0aXNlciBiZWZvcmUgeW91ciBtYWluIG1lYWwnO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2l0ZW0taW1nLTQnKS5zcmMgPSBzdGFydGVyRm91cjtcbiAgICB9O1xuXG4gICAgY29uc3Qgc2V0TWFpbnMgPSAoZSkgPT4ge1xuICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnRlcnMnKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNzZXJ0cycpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RyaW5rcycpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXRlbS1uYW1lLTEnKS50ZXh0Q29udGVudCA9ICdHdWluZWEgRm93bCc7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXRlbS1kZXNjLTEnKS50ZXh0Q29udGVudCA9ICdSb2FzdCBndWluZWEgZm93bCBwYWlyZWQgd2l0aCBhIHN3ZWV0IHNoYWxsb3QgcHVyw6llLCBsZWVrcyBlbmhhbmNlZCB3aXRoIGxpcXVvcmljZSBhbmQgbW9yZWxzJztcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpdGVtLWltZy0xJykuc3JjID0gbWFpbk9uZTtcblxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2l0ZW0tbmFtZS0yJykudGV4dENvbnRlbnQgPSAnQ2luZGVyZm9yZCBMYW1iJztcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpdGVtLWRlc2MtMicpLnRleHRDb250ZW50ID0gJ0EgZ2VuaXVzIG1hc3RlcnBpZWNlIG9mIGV4cXVpc2l0ZSBsYW1iIGNodW1wIGJ1cnN0aW5nIHdpdGggc3ByaW5nIGZsYXZvdXJzJztcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpdGVtLWltZy0yJykuc3JjID0gbWFpblR3bztcblxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2l0ZW0tbmFtZS0zJykudGV4dENvbnRlbnQgPSAnTG9uZ2hvcm4gQmVlZiBTaXJsb2luJztcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpdGVtLWRlc2MtMycpLnRleHRDb250ZW50ID0gJ0FnZWQgYmVlZiBzaXJsb2luIHdpdGggY2hhcnJlZCBUcm9wZWEgb25pb25zLCBwaWNrbGVkIHdhbG51dCBzYWxzYSB2ZXJkZSBhbmQgZnJlc2ggd2F0ZXJjcmVzcyc7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXRlbS1pbWctMycpLnNyYyA9IG1haW5UaHJlZTtcblxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2l0ZW0tbmFtZS00JykudGV4dENvbnRlbnQgPSAnUm9hc3RlZCBDb2QnO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2l0ZW0tZGVzYy00JykudGV4dENvbnRlbnQgPSAnUm9hc3QgY29kIGNvbWJpbmluZyBzd2VldCBob25leSwgY2hhbXBhZ25lLCBnYXJuaXNoZWQgd2l0aCBjaGl2ZXMgYW5kIGdvamkgYmVycmllcyc7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXRlbS1pbWctNCcpLnNyYyA9IG1haW5Gb3VyO1xuICAgIH07XG5cbiAgICBjb25zdCBzZXREZXNzZXJ0cyA9IChlKSA9PiB7XG4gICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydGVycycpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5zJykuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHJpbmtzJykuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG5cbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpdGVtLW5hbWUtMScpLnRleHRDb250ZW50ID0gJ1NoZWVwXFwncyBNaWxrIE1vdXNzZSc7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXRlbS1kZXNjLTEnKS50ZXh0Q29udGVudCA9ICdTdHVubmluZyBzaGVlcFxcJ3MgbWlsayBkZXNzZXJ0IHdpdGggYSBkcmVhbXkgcGFuZGFuIGN1cmQgYW5kIGNhcmFtZWxpc2VkIHB1ZmZlZCByaWNlJztcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpdGVtLWltZy0xJykuc3JjID0gZGVzc2VydE9uZTtcblxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2l0ZW0tbmFtZS0yJykudGV4dENvbnRlbnQgPSAnU3RyYXdiZXJyeSBEZWxpZ2h0JztcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpdGVtLWRlc2MtMicpLnRleHRDb250ZW50ID0gJ1N0cmF3YmVycnkgaWNlIGNyZWFtLCBiYXNpbCBwdXLDqWUsIGZyb21hZ2UgZnJhaXMgbW91c3NlIHdpdGggZ3JlZW4gYWxtb25kcyc7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXRlbS1pbWctMicpLnNyYyA9IGRlc3NlcnRUd287XG5cbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpdGVtLW5hbWUtMycpLnRleHRDb250ZW50ID0gJ1NoZWVw4oCZcyBZb2dodXJ0IE1vdXNzZSc7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXRlbS1kZXNjLTMnKS50ZXh0Q29udGVudCA9ICdTaGVlcOKAmXMgeW9naHVydCBtb3Vzc2UsIGxlbW9uIHBhbmRhbiBzcG9uZ2Ugd2l0aCBjYXJhbWVsaXNlZCBwdWZmZWQgcmljZSc7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXRlbS1pbWctMycpLnNyYyA9IGRlc3NlcnRUaHJlZTtcblxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2l0ZW0tbmFtZS00JykudGV4dENvbnRlbnQgPSAnV2ludGVyIEdhcmRlbic7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXRlbS1kZXNjLTQnKS50ZXh0Q29udGVudCA9ICdNdWxsZWQgd2ludGVyIGZydWl0cyBiZWF1dGlmdWxseSBzcGljZWQgd2l0aCBjaW5uYW1vbiBpY2UgY3JlYW0nO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2l0ZW0taW1nLTQnKS5zcmMgPSBkZXNzZXJ0Rm91cjtcbiAgICB9O1xuXG4gICAgY29uc3Qgc2V0RHJpbmtzID0gKGUpID0+IHtcbiAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXJ0ZXJzJykuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbnMnKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNzZXJ0cycpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXRlbS1uYW1lLTEnKS50ZXh0Q29udGVudCA9ICdXYXRlcic7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXRlbS1kZXNjLTEnKS50ZXh0Q29udGVudCA9ICdKdXN0IHJlZ3VsYXIgd2F0ZXIgdGhhdCB3ZSB3b25cXCd0IGNoYXJnZSBhIHJpZGljdWxvdXMgcHJpY2UgZm9yJztcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpdGVtLWltZy0xJykuc3JjID0gZHJpbmtPbmU7XG5cbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpdGVtLW5hbWUtMicpLnRleHRDb250ZW50ID0gJ0ZyZXNoIEp1aWNlcyc7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXRlbS1kZXNjLTInKS50ZXh0Q29udGVudCA9ICdBbnkgZnJlc2ggZnJ1aXQganVpY2Ugb2YgeW91ciBjaG9pY2Ugd2l0aCBhbnkgY29tYmluYXRpb24nO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2l0ZW0taW1nLTInKS5zcmMgPSBkcmlua1R3bztcblxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2l0ZW0tbmFtZS0zJykudGV4dENvbnRlbnQgPSAnV2luZXMnO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2l0ZW0tZGVzYy0zJykudGV4dENvbnRlbnQgPSAnVGhlIGZpbmVzdCB3aW5lcyBhdmFpbGFibGUsIHdoZXRoZXIgeW91XFwncmUgYSB3aW5lLWVudGh1c2lhc3QsIG9yIGNhc3VhbCBkcmlua2VyJztcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpdGVtLWltZy0zJykuc3JjID0gZHJpbmtUaHJlZTtcblxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2l0ZW0tbmFtZS00JykudGV4dENvbnRlbnQgPSAnQ29ja3RhaWxzJztcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpdGVtLWRlc2MtNCcpLnRleHRDb250ZW50ID0gJ09yZGVyIHlvdXIgZmF2b3VyaXRlIGNvY2t0YWlsIG1hZGUgYnkgc29tZSBvZiB0aGUgd29ybGRcXCdzIGdyZWF0ZXN0IGJhcnRlbmRlcnMnO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2l0ZW0taW1nLTQnKS5zcmMgPSBkcmlua0ZvdXI7XG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICBzZXRTdGFydGVycyxcbiAgICAgIHNldE1haW5zLFxuICAgICAgc2V0RGVzc2VydHMsXG4gICAgICBzZXREcmlua3MsXG4gICAgICBjcmVhdGVJdGVtcyxcbiAgICB9O1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZU1lbnVTZWxlY3QgPSAoKSA9PiB7XG4gICAgY29uc3QgbWVudVNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVTZWxlY3QuaWQgPSAnbWVudS1zZWxlY3QnO1xuXG4gICAgY29uc3Qgc3RhcnRlcnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBzdGFydGVycy50ZXh0Q29udGVudCA9ICdzdGFydGVycyc7XG4gICAgc3RhcnRlcnMuaWQgPSAnc3RhcnRlcnMnO1xuICAgIHN0YXJ0ZXJzLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGlvbicpO1xuICAgIHN0YXJ0ZXJzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY3JlYXRlTWVudUl0ZW1zKCkuc2V0U3RhcnRlcnMpO1xuXG4gICAgY29uc3QgbWFpbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBtYWlucy50ZXh0Q29udGVudCA9ICdtYWlucyc7XG4gICAgbWFpbnMuaWQgPSAnbWFpbnMnO1xuICAgIG1haW5zLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGlvbicpO1xuICAgIG1haW5zLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY3JlYXRlTWVudUl0ZW1zKCkuc2V0TWFpbnMpO1xuXG4gICAgY29uc3QgZGVzc2VydHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBkZXNzZXJ0cy50ZXh0Q29udGVudCA9ICdkZXNzZXJ0cyc7XG4gICAgZGVzc2VydHMuaWQgPSAnZGVzc2VydHMnO1xuICAgIGRlc3NlcnRzLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGlvbicpO1xuICAgIGRlc3NlcnRzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY3JlYXRlTWVudUl0ZW1zKCkuc2V0RGVzc2VydHMpO1xuXG4gICAgY29uc3QgZHJpbmtzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZHJpbmtzLnRleHRDb250ZW50ID0gJ2RyaW5rcyc7XG4gICAgZHJpbmtzLmlkID0gJ2RyaW5rcyc7XG4gICAgZHJpbmtzLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGlvbicpO1xuICAgIGRyaW5rcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNyZWF0ZU1lbnVJdGVtcygpLnNldERyaW5rcyk7XG5cbiAgICBtZW51U2VsZWN0LmFwcGVuZENoaWxkKHN0YXJ0ZXJzKTtcbiAgICBtZW51U2VsZWN0LmFwcGVuZENoaWxkKG1haW5zKTtcbiAgICBtZW51U2VsZWN0LmFwcGVuZENoaWxkKGRlc3NlcnRzKTtcbiAgICBtZW51U2VsZWN0LmFwcGVuZENoaWxkKGRyaW5rcyk7XG5cbiAgICByZXR1cm4gbWVudVNlbGVjdDtcbiAgfTtcblxuICBtZW51RGl2LmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVTZWxlY3QoKSk7XG4gIG1lbnVEaXYuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUl0ZW1zKCkuY3JlYXRlSXRlbXMoKSk7XG5cbiAgcmV0dXJuIG1lbnVEaXY7XG59O1xuXG5jb25zdCBlbmFibGVJdGVtSG92ZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGl0ZW1zID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdpdGVtJykpO1xuICBpdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoZSkgPT4ge1xuICAgICAgY29uc3QgY3VycmVudCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdpdGVtJykgPyBlLnRhcmdldC5wYXJlbnRFbGVtZW50IDogZS50YXJnZXQ7XG4gICAgICBjb25zdCBudW1iZXIgPSBjdXJyZW50LmlkLmNoYXJBdChjdXJyZW50LmlkLmxlbmd0aCAtIDEpO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2l0ZW0taW1nLTEnKS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBpdGVtLWltZy0ke251bWJlcn1gKS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICB9KTtcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgKGUpID0+IHtcbiAgICAgIGNvbnN0IGN1cnJlbnQgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnaXRlbScpID8gZS50YXJnZXQucGFyZW50RWxlbWVudCA6IGUudGFyZ2V0O1xuICAgICAgY29uc3QgbnVtYmVyID0gY3VycmVudC5pZC5jaGFyQXQoY3VycmVudC5pZC5sZW5ndGggLSAxKTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBpdGVtLWltZy0ke251bWJlcn1gKS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpdGVtLWltZy0xJykuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuY29uc3QgbG9hZE1lbnUgPSAoKSA9PiB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpO1xuICBtYWluLmlubmVySFRNTCA9ICcnO1xuXG4gIHNldEJhY2tncm91bmQoKTtcbiAgc2V0TmF2KCk7XG5cbiAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVNZW51KCkpO1xuICBjb25zdCBzdGFydGVycyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydGVycycpO1xuICBzdGFydGVycy5jbGljaygpO1xuXG4gIGVuYWJsZUl0ZW1Ib3ZlcigpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbG9hZE1lbnU7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZXMuY3NzJztcblxuaW1wb3J0IGluaXQgZnJvbSAnLi9pbml0JztcbmltcG9ydCBsb2FkSG9tZSBmcm9tICcuL2hvbWUnO1xuXG5pbml0KCk7XG5sb2FkSG9tZSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9