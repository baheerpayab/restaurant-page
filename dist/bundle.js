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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box;\n}\n\nhtml {\n  height: 100%;\n  width: 100%;\n}\n\nbody {\n  font-family: 'Poppins', sans-serif;\n  width: 100%;\n  height: 100%;\n  margin: auto;\n  overflow-y: hidden;\n}\n\nh1, h2, h3, h4, h5, p {\n  margin: 0;\n}\n\nbutton {\n  font-family: 'Poppins', sans-serif;\n}\n\n#content {\n  height: 100%;\n  width: 100%;\n}\n\nheader {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  margin: auto;\n  padding: 50px 50px 0 50px;\n  z-index: 2;\n}\n\nmain {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  margin: auto;\n}\n\n.gallery {\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  align-self: center;\n  width: 100%;\n  min-height: 100%;\n  overflow: hidden;\n}\n\n.gallery-div {\n  position: absolute;\n  width: 50%;\n  height: 600px;\n  text-align: center;\n  top: 100px;\n  left: 50%;\n  margin-left: -25%;\n}\n\n#logo-div {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n}\n\n#home-logo {\n  height: 175px;\n}\n\n#slogan {\n  margin: 0;\n  color: white;\n  font-size: 32px;\n  font-weight: 300;\n}\n\n.line-through {\n  text-decoration: line-through;\n  text-decoration-thickness: 2px;\n}\n\n.underline {\n  text-decoration: underline;\n  text-decoration-thickness: 2px;\n  text-underline-offset: 2px;\n}\n\n.bold {\n  font-weight: 600;\n}\n\n#michelin-div{\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  left: 150%;\n  gap: 20px;\n}\n\n#stars {\n  width: 65%;\n}\n\n#stars-text {\n  color: white;\n  font-size: 24px;\n  font-style: italic;\n  font-weight: 300px;\n  margin: 0;\n  width: 75%;\n}\n\n#quote-div {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  left: -150%;\n  gap: 20px;\n}\n\n#quote {\n  color: white;\n  margin: 0;\n  font-style: italic;\n  font-size: 42px;\n  font-weight: 300;\n}\n\n#quote-name {\n  color: white;\n  margin: 0;\n  font-style: italic;\n  font-size: 32px;\n  font-weight: 400;\n}\n\nnav {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 20px;\n  order: 2;\n}\n\n.nav-btn {\n  color: white;\n  font-size: 28px;\n  font-weight: 300;\n  border: 2px solid white;\n  background: none;\n  padding: 5px 20px;\n  transition: 500ms;\n}\n\n.nav-btn:hover {\n  cursor: pointer;\n  background-color: white;\n  color: black;\n}\n\n.nav-btn.active {\n  background-color: white;\n  color: black;\n}\n\n/* MENU */\n\n.curve-bg {\n  height: 100%;\n  width: 100%;\n  z-index: 1;\n}\n\n.curve-bg-img {\n  position: absolute;\n  left: -55%;\n}\n\n.background-img-div {\n  position: absolute;\n  right: 0;\n  width: 75%;\n  height: 125%;\n  z-index: 0;\n  overflow: hidden;\n}\n\n.background-img {\n  opacity: 100%;\n  transition: 500ms;\n  animation: fade-in 500ms ease-in-out;\n  max-height: 100%;\n}\n\n#corner-logo {\n  height: 115px;\n  fill: black;\n  order: 1;\n  cursor: pointer;\n}\n\n#menu-div {\n  position: absolute;\n  left: 75px;\n  top: 250px;\n\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  z-index: 2;\n  gap: 80px;\n}\n\n#menu-select {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 30px;\n}\n\n#menu-items {\n  display: flex;\n  flex-direction: column;\n\n}\n\n.selection {\n  width: 260px;\n  font-size: 28px;\n  font-weight: 300;\n  border: 3px solid black;\n  background: none;\n  padding: 5px 0 5px 0;\n  transition: 500ms;\n  color: black;\n}\n\n.selection:hover {\n  background-color: black;\n  color: white;\n  cursor: pointer;\n}\n\n.selection.active {\n  background-color: black;\n  color: white;\n}\n\n.item {\n  display: flex;\n  flex-direction: column;\n  width: 450px;\n  padding-bottom: 30px;\n}\n\n.item-name {\n  font-size: 28px;\n  font-weight: 300;\n  color: black;\n}\n\n.item-desc {\n  font-size: 18px;\n  font-weight: 200;\n  font-style: italic;\n  color: black;\n}\n\n.hidden {\n  display: none;\n}\n\n/* CONTACT PAGE */\n\n#contact-img {\n  position: absolute;\n  right: 0;\n}\n\n#info-parent-div {\n  position: absolute;\n  left: 75px;\n  top: 250px;\n\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  width: fit-content;\n\n  width: 750px;\n  height: 450px;\n}\n\n#info-div {\n  \n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  align-items: flex-end;\n  z-index: 2;\n\n}\n\n.info-sub-div {\n  display: flex;\n  flex-direction: column;\n\n  height: 60px;\n  width: 650px;\n  overflow: hidden;\n\n  transition: height 500ms ease-in-out;\n  padding-bottom: 20px;\n}\n\n.info-sub-div:hover {\n  height: 250px;\n}\n\n.info-sub-div.active {\n  height: 250px;\n}\n\n.contact-heading {\n  border: 2px solid black;\n  padding-left: 20px;\n  \n  font-size: 28px;\n  font-weight: 300;\n}\n\n.info-sub-div.active .contact-heading {\n  background-color: black; \n  color: white;\n}\n\n.info-sub-div:hover .contact-heading { \n  background-color: black; \n  color: white;\n}\n\n.contact-text {\n  font-size: 24px;\n  font-weight: 200;\n  font-style: italic;\n  white-space: pre-line;\n\n  padding: 20px 0px 0px 20px;\n}\n\n#booking-div:hover {\n  height: 200px\n}\n\na {\n  color: black;\n}\n\na:focus {\n  color: grey;\n}\n\n#support-email:hover {\n  cursor: pointer;\n}\n\n#review-div:hover {\n  height: 350px;\n}\n\n#review-form {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  align-items: flex-start;\n  justify-content: flex-start;\n  row-gap: 20px;\n  column-gap: 5%;\n\n  padding-top: 20px;\n\n  width: 100%;\n  height: 200px;\n}\n\n\ninput {\n  font-family: 'Poppins', sans-serif;\n  font-size: 14px;\n\n  width: 45%;\n  height: 3rem;\n  border: 2px solid black;\n  padding-left: 10px;\n\n  outline: none;\n}\n\ntextarea {\n  font-family: 'Poppins', sans-serif;\n  font-size: 16px;\n\n  width: 95%;\n  border: 2px solid black;\n  background: none;\n\n  padding: 10px;\n}\n\nbutton[type='submit'] {\n  width: 5rem;\n  height: 3rem;\n  border: 2px solid black;\n  color: black;\n  background: none;\n}\n\nbutton[type='submit']:hover {\n  background-color: black;\n  color: white;\n  cursor: pointer;\n}\n\n/* FOOTER */\n\n.fa-github {\n  scale: 2;\n  color: white;\n\n  position: absolute;\n  right: 30px;\n  bottom: 30px;\n}\n\n.fa-github:hover {\n  transition: 0.3s;\n  scale: 2.2;\n  rotate: 360deg;\n  cursor: pointer;\n}\n\n/* KEYFRAMES */\n\n@keyframes fade-in {\n  0% {\n    display: block;\n    opacity: 0%;\n  }\n  100% {\n    opacity: 100%;\n  }\n}\n\n@keyframes grow {\n  0% {\n    scale: 1;\n  }\n  100% {\n    scale: 1.2;\n  }\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');\n\n* {\n  box-sizing: border-box;\n}\n\nhtml {\n  height: 100%;\n  width: 100%;\n}\n\nbody {\n  font-family: 'Poppins', sans-serif;\n  width: 100%;\n  height: 100%;\n  margin: auto;\n  overflow-y: hidden;\n}\n\nh1, h2, h3, h4, h5, p {\n  margin: 0;\n}\n\nbutton {\n  font-family: 'Poppins', sans-serif;\n}\n\n#content {\n  height: 100%;\n  width: 100%;\n}\n\nheader {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  margin: auto;\n  padding: 50px 50px 0 50px;\n  z-index: 2;\n}\n\nmain {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  margin: auto;\n}\n\n.gallery {\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  align-self: center;\n  width: 100%;\n  min-height: 100%;\n  overflow: hidden;\n}\n\n.gallery-div {\n  position: absolute;\n  width: 50%;\n  height: 600px;\n  text-align: center;\n  top: 100px;\n  left: 50%;\n  margin-left: -25%;\n}\n\n#logo-div {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n}\n\n#home-logo {\n  height: 175px;\n}\n\n#slogan {\n  margin: 0;\n  color: white;\n  font-size: 32px;\n  font-weight: 300;\n}\n\n.line-through {\n  text-decoration: line-through;\n  text-decoration-thickness: 2px;\n}\n\n.underline {\n  text-decoration: underline;\n  text-decoration-thickness: 2px;\n  text-underline-offset: 2px;\n}\n\n.bold {\n  font-weight: 600;\n}\n\n#michelin-div{\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  left: 150%;\n  gap: 20px;\n}\n\n#stars {\n  width: 65%;\n}\n\n#stars-text {\n  color: white;\n  font-size: 24px;\n  font-style: italic;\n  font-weight: 300px;\n  margin: 0;\n  width: 75%;\n}\n\n#quote-div {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  left: -150%;\n  gap: 20px;\n}\n\n#quote {\n  color: white;\n  margin: 0;\n  font-style: italic;\n  font-size: 42px;\n  font-weight: 300;\n}\n\n#quote-name {\n  color: white;\n  margin: 0;\n  font-style: italic;\n  font-size: 32px;\n  font-weight: 400;\n}\n\nnav {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 20px;\n  order: 2;\n}\n\n.nav-btn {\n  color: white;\n  font-size: 28px;\n  font-weight: 300;\n  border: 2px solid white;\n  background: none;\n  padding: 5px 20px;\n  transition: 500ms;\n}\n\n.nav-btn:hover {\n  cursor: pointer;\n  background-color: white;\n  color: black;\n}\n\n.nav-btn.active {\n  background-color: white;\n  color: black;\n}\n\n/* MENU */\n\n.curve-bg {\n  height: 100%;\n  width: 100%;\n  z-index: 1;\n}\n\n.curve-bg-img {\n  position: absolute;\n  left: -55%;\n}\n\n.background-img-div {\n  position: absolute;\n  right: 0;\n  width: 75%;\n  height: 125%;\n  z-index: 0;\n  overflow: hidden;\n}\n\n.background-img {\n  opacity: 100%;\n  transition: 500ms;\n  animation: fade-in 500ms ease-in-out;\n  max-height: 100%;\n}\n\n#corner-logo {\n  height: 115px;\n  fill: black;\n  order: 1;\n  cursor: pointer;\n}\n\n#menu-div {\n  position: absolute;\n  left: 75px;\n  top: 250px;\n\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  z-index: 2;\n  gap: 80px;\n}\n\n#menu-select {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 30px;\n}\n\n#menu-items {\n  display: flex;\n  flex-direction: column;\n\n}\n\n.selection {\n  width: 260px;\n  font-size: 28px;\n  font-weight: 300;\n  border: 3px solid black;\n  background: none;\n  padding: 5px 0 5px 0;\n  transition: 500ms;\n  color: black;\n}\n\n.selection:hover {\n  background-color: black;\n  color: white;\n  cursor: pointer;\n}\n\n.selection.active {\n  background-color: black;\n  color: white;\n}\n\n.item {\n  display: flex;\n  flex-direction: column;\n  width: 450px;\n  padding-bottom: 30px;\n}\n\n.item-name {\n  font-size: 28px;\n  font-weight: 300;\n  color: black;\n}\n\n.item-desc {\n  font-size: 18px;\n  font-weight: 200;\n  font-style: italic;\n  color: black;\n}\n\n.hidden {\n  display: none;\n}\n\n/* CONTACT PAGE */\n\n#contact-img {\n  position: absolute;\n  right: 0;\n}\n\n#info-parent-div {\n  position: absolute;\n  left: 75px;\n  top: 250px;\n\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  width: fit-content;\n\n  width: 750px;\n  height: 450px;\n}\n\n#info-div {\n  \n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  align-items: flex-end;\n  z-index: 2;\n\n}\n\n.info-sub-div {\n  display: flex;\n  flex-direction: column;\n\n  height: 60px;\n  width: 650px;\n  overflow: hidden;\n\n  transition: height 500ms ease-in-out;\n  padding-bottom: 20px;\n}\n\n.info-sub-div:hover {\n  height: 250px;\n}\n\n.info-sub-div.active {\n  height: 250px;\n}\n\n.contact-heading {\n  border: 2px solid black;\n  padding-left: 20px;\n  \n  font-size: 28px;\n  font-weight: 300;\n}\n\n.info-sub-div.active .contact-heading {\n  background-color: black; \n  color: white;\n}\n\n.info-sub-div:hover .contact-heading { \n  background-color: black; \n  color: white;\n}\n\n.contact-text {\n  font-size: 24px;\n  font-weight: 200;\n  font-style: italic;\n  white-space: pre-line;\n\n  padding: 20px 0px 0px 20px;\n}\n\n#booking-div:hover {\n  height: 200px\n}\n\na {\n  color: black;\n}\n\na:focus {\n  color: grey;\n}\n\n#support-email:hover {\n  cursor: pointer;\n}\n\n#review-div:hover {\n  height: 350px;\n}\n\n#review-form {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  align-items: flex-start;\n  justify-content: flex-start;\n  row-gap: 20px;\n  column-gap: 5%;\n\n  padding-top: 20px;\n\n  width: 100%;\n  height: 200px;\n}\n\n\ninput {\n  font-family: 'Poppins', sans-serif;\n  font-size: 14px;\n\n  width: 45%;\n  height: 3rem;\n  border: 2px solid black;\n  padding-left: 10px;\n\n  outline: none;\n}\n\ntextarea {\n  font-family: 'Poppins', sans-serif;\n  font-size: 16px;\n\n  width: 95%;\n  border: 2px solid black;\n  background: none;\n\n  padding: 10px;\n}\n\nbutton[type='submit'] {\n  width: 5rem;\n  height: 3rem;\n  border: 2px solid black;\n  color: black;\n  background: none;\n}\n\nbutton[type='submit']:hover {\n  background-color: black;\n  color: white;\n  cursor: pointer;\n}\n\n/* FOOTER */\n\n.fa-github {\n  scale: 2;\n  color: white;\n\n  position: absolute;\n  right: 30px;\n  bottom: 30px;\n}\n\n.fa-github:hover {\n  transition: 0.3s;\n  scale: 2.2;\n  rotate: 360deg;\n  cursor: pointer;\n}\n\n/* KEYFRAMES */\n\n@keyframes fade-in {\n  0% {\n    display: block;\n    opacity: 0%;\n  }\n  100% {\n    opacity: 100%;\n  }\n}\n\n@keyframes grow {\n  0% {\n    scale: 1;\n  }\n  100% {\n    scale: 1.2;\n  }\n}"],"sourceRoot":""}]);
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

/***/ "./src/assets/contact-bg.png":
/*!***********************************!*\
  !*** ./src/assets/contact-bg.png ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/contact-bg.png");

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

/***/ "./src/assets/home-bg.png":
/*!********************************!*\
  !*** ./src/assets/home-bg.png ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/home-bg.png");

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
/* harmony import */ var _assets_contact_bg_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/contact-bg.png */ "./src/assets/contact-bg.png");






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
  backgroundImg.src = _assets_contact_bg_png__WEBPACK_IMPORTED_MODULE_3__["default"];
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
  const menuBtn = document.getElementById('menu-btn');
  menuBtn.classList.remove('active');
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
/* harmony import */ var _assets_home_bg_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/home-bg.png */ "./src/assets/home-bg.png");
/* harmony import */ var _assets_logo_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/logo.svg */ "./src/assets/logo.svg");
/* harmony import */ var _assets_michelin_stars_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/michelin-stars.png */ "./src/assets/michelin-stars.png");




function setBackground() {
  document.body.style.background = `url(${_assets_home_bg_png__WEBPACK_IMPORTED_MODULE_0__["default"]})`;
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

  const contactBtn = document.getElementById('contact-btn');
  contactBtn.classList.remove('active');
};

const createMenu = () => {
  const menuDiv = document.createElement('div');
  menuDiv.id = 'menu-div';

  const itemImgDiv = document.getElementById('item-img-div');

  const createMenuItems = () => {
    const createItems = () => {
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
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ "./src/menu.js");






(0,_init__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_home__WEBPACK_IMPORTED_MODULE_2__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sV0FBVyxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxhQUFhLE1BQU0sWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsV0FBVyxVQUFVLFlBQVksYUFBYSxjQUFjLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxZQUFZLE1BQU0sS0FBSyxVQUFVLGFBQWEsV0FBVyxVQUFVLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGNBQWMsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsY0FBYyxhQUFhLE9BQU8sS0FBSyxLQUFLLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxXQUFXLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLFlBQVksVUFBVSxVQUFVLFlBQVksY0FBYyxXQUFXLE1BQU0sS0FBSyxZQUFZLFlBQVksVUFBVSxZQUFZLGNBQWMsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcs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Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7Ozs7Ozs7Ozs7Ozs7O0FDQXNCOztBQUVJO0FBQ0k7QUFDQTs7QUFFOUIsaURBQUk7QUFDSixpREFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fzc2V0cy9jb250YWN0LWJnLnBuZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYXNzZXRzL2N1cnZlLWJnLnN2ZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYXNzZXRzL2hvbWUtYmcucG5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9hc3NldHMvbG9nby1ibGFjay5zdmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fzc2V0cy9sb2dvLnN2ZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYXNzZXRzL21lbnUtaXRlbXMvZGVzc2VydC0xLndlYnAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fzc2V0cy9tZW51LWl0ZW1zL2Rlc3NlcnQtMi53ZWJwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9hc3NldHMvbWVudS1pdGVtcy9kZXNzZXJ0LTMud2VicCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYXNzZXRzL21lbnUtaXRlbXMvZGVzc2VydC00LndlYnAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fzc2V0cy9tZW51LWl0ZW1zL2RyaW5rLTEuanBnIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9hc3NldHMvbWVudS1pdGVtcy9kcmluay0yLmpwZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYXNzZXRzL21lbnUtaXRlbXMvZHJpbmstMy5qcGciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fzc2V0cy9tZW51LWl0ZW1zL2RyaW5rLTQuanBnIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9hc3NldHMvbWVudS1pdGVtcy9tYWluLTEud2VicCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYXNzZXRzL21lbnUtaXRlbXMvbWFpbi0yLndlYnAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fzc2V0cy9tZW51LWl0ZW1zL21haW4tMy53ZWJwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9hc3NldHMvbWVudS1pdGVtcy9tYWluLTQud2VicCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYXNzZXRzL21lbnUtaXRlbXMvc3RhcnRlci0xLndlYnAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fzc2V0cy9tZW51LWl0ZW1zL3N0YXJ0ZXItMi53ZWJwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9hc3NldHMvbWVudS1pdGVtcy9zdGFydGVyLTMud2VicCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYXNzZXRzL21lbnUtaXRlbXMvc3RhcnRlci00LndlYnAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fzc2V0cy9taWNoZWxpbi1zdGFycy5wbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbml0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOml0YWwsd2dodEAwLDEwMDswLDIwMDswLDMwMDswLDQwMDswLDUwMDswLDYwMDswLDcwMDswLDgwMDswLDkwMDsxLDEwMDsxLDIwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMDsxLDgwMDsxLDkwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmh0bWwge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xcbn1cXG5cXG5oMSwgaDIsIGgzLCBoNCwgaDUsIHAge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBsZWZ0OiAwO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgcGFkZGluZzogNTBweCA1MHB4IDAgNTBweDtcXG4gIHotaW5kZXg6IDI7XFxufVxcblxcbm1haW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG4uZ2FsbGVyeSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLmdhbGxlcnktZGl2IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiA1MCU7XFxuICBoZWlnaHQ6IDYwMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdG9wOiAxMDBweDtcXG4gIGxlZnQ6IDUwJTtcXG4gIG1hcmdpbi1sZWZ0OiAtMjUlO1xcbn1cXG5cXG4jbG9nby1kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDIwcHg7XFxufVxcblxcbiNob21lLWxvZ28ge1xcbiAgaGVpZ2h0OiAxNzVweDtcXG59XFxuXFxuI3Nsb2dhbiB7XFxuICBtYXJnaW46IDA7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDMycHg7XFxuICBmb250LXdlaWdodDogMzAwO1xcbn1cXG5cXG4ubGluZS10aHJvdWdoIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbiAgdGV4dC1kZWNvcmF0aW9uLXRoaWNrbmVzczogMnB4O1xcbn1cXG5cXG4udW5kZXJsaW5lIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgdGV4dC1kZWNvcmF0aW9uLXRoaWNrbmVzczogMnB4O1xcbiAgdGV4dC11bmRlcmxpbmUtb2Zmc2V0OiAycHg7XFxufVxcblxcbi5ib2xkIHtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbiNtaWNoZWxpbi1kaXZ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGxlZnQ6IDE1MCU7XFxuICBnYXA6IDIwcHg7XFxufVxcblxcbiNzdGFycyB7XFxuICB3aWR0aDogNjUlO1xcbn1cXG5cXG4jc3RhcnMtdGV4dCB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBmb250LXdlaWdodDogMzAwcHg7XFxuICBtYXJnaW46IDA7XFxuICB3aWR0aDogNzUlO1xcbn1cXG5cXG4jcXVvdGUtZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbGVmdDogLTE1MCU7XFxuICBnYXA6IDIwcHg7XFxufVxcblxcbiNxdW90ZSB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBtYXJnaW46IDA7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBmb250LXNpemU6IDQycHg7XFxuICBmb250LXdlaWdodDogMzAwO1xcbn1cXG5cXG4jcXVvdGUtbmFtZSB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBtYXJnaW46IDA7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBmb250LXNpemU6IDMycHg7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG5uYXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMjBweDtcXG4gIG9yZGVyOiAyO1xcbn1cXG5cXG4ubmF2LWJ0biB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDI4cHg7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgcGFkZGluZzogNXB4IDIwcHg7XFxuICB0cmFuc2l0aW9uOiA1MDBtcztcXG59XFxuXFxuLm5hdi1idG46aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi5uYXYtYnRuLmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLyogTUVOVSAqL1xcblxcbi5jdXJ2ZS1iZyB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbi5jdXJ2ZS1iZy1pbWcge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogLTU1JTtcXG59XFxuXFxuLmJhY2tncm91bmQtaW1nLWRpdiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMDtcXG4gIHdpZHRoOiA3NSU7XFxuICBoZWlnaHQ6IDEyNSU7XFxuICB6LWluZGV4OiAwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLmJhY2tncm91bmQtaW1nIHtcXG4gIG9wYWNpdHk6IDEwMCU7XFxuICB0cmFuc2l0aW9uOiA1MDBtcztcXG4gIGFuaW1hdGlvbjogZmFkZS1pbiA1MDBtcyBlYXNlLWluLW91dDtcXG4gIG1heC1oZWlnaHQ6IDEwMCU7XFxufVxcblxcbiNjb3JuZXItbG9nbyB7XFxuICBoZWlnaHQ6IDExNXB4O1xcbiAgZmlsbDogYmxhY2s7XFxuICBvcmRlcjogMTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI21lbnUtZGl2IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDc1cHg7XFxuICB0b3A6IDI1MHB4O1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB6LWluZGV4OiAyO1xcbiAgZ2FwOiA4MHB4O1xcbn1cXG5cXG4jbWVudS1zZWxlY3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDMwcHg7XFxufVxcblxcbiNtZW51LWl0ZW1zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbn1cXG5cXG4uc2VsZWN0aW9uIHtcXG4gIHdpZHRoOiAyNjBweDtcXG4gIGZvbnQtc2l6ZTogMjhweDtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBwYWRkaW5nOiA1cHggMCA1cHggMDtcXG4gIHRyYW5zaXRpb246IDUwMG1zO1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uc2VsZWN0aW9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc2VsZWN0aW9uLmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLml0ZW0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogNDUwcHg7XFxuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcXG59XFxuXFxuLml0ZW0tbmFtZSB7XFxuICBmb250LXNpemU6IDI4cHg7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uaXRlbS1kZXNjIHtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGZvbnQtd2VpZ2h0OiAyMDA7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyogQ09OVEFDVCBQQUdFICovXFxuXFxuI2NvbnRhY3QtaW1nIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAwO1xcbn1cXG5cXG4jaW5mby1wYXJlbnQtZGl2IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDc1cHg7XFxuICB0b3A6IDI1MHB4O1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuXFxuICB3aWR0aDogNzUwcHg7XFxuICBoZWlnaHQ6IDQ1MHB4O1xcbn1cXG5cXG4jaW5mby1kaXYge1xcbiAgXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICB6LWluZGV4OiAyO1xcblxcbn1cXG5cXG4uaW5mby1zdWItZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbiAgaGVpZ2h0OiA2MHB4O1xcbiAgd2lkdGg6IDY1MHB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG5cXG4gIHRyYW5zaXRpb246IGhlaWdodCA1MDBtcyBlYXNlLWluLW91dDtcXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4uaW5mby1zdWItZGl2OmhvdmVyIHtcXG4gIGhlaWdodDogMjUwcHg7XFxufVxcblxcbi5pbmZvLXN1Yi1kaXYuYWN0aXZlIHtcXG4gIGhlaWdodDogMjUwcHg7XFxufVxcblxcbi5jb250YWN0LWhlYWRpbmcge1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuICBcXG4gIGZvbnQtc2l6ZTogMjhweDtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxufVxcblxcbi5pbmZvLXN1Yi1kaXYuYWN0aXZlIC5jb250YWN0LWhlYWRpbmcge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7IFxcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uaW5mby1zdWItZGl2OmhvdmVyIC5jb250YWN0LWhlYWRpbmcgeyBcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrOyBcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmNvbnRhY3QtdGV4dCB7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBmb250LXdlaWdodDogMjAwO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xcblxcbiAgcGFkZGluZzogMjBweCAwcHggMHB4IDIwcHg7XFxufVxcblxcbiNib29raW5nLWRpdjpob3ZlciB7XFxuICBoZWlnaHQ6IDIwMHB4XFxufVxcblxcbmEge1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG5hOmZvY3VzIHtcXG4gIGNvbG9yOiBncmV5O1xcbn1cXG5cXG4jc3VwcG9ydC1lbWFpbDpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNyZXZpZXctZGl2OmhvdmVyIHtcXG4gIGhlaWdodDogMzUwcHg7XFxufVxcblxcbiNyZXZpZXctZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgcm93LWdhcDogMjBweDtcXG4gIGNvbHVtbi1nYXA6IDUlO1xcblxcbiAgcGFkZGluZy10b3A6IDIwcHg7XFxuXFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMjAwcHg7XFxufVxcblxcblxcbmlucHV0IHtcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDE0cHg7XFxuXFxuICB3aWR0aDogNDUlO1xcbiAgaGVpZ2h0OiAzcmVtO1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuXFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcblxcbiAgd2lkdGg6IDk1JTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG5cXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbmJ1dHRvblt0eXBlPSdzdWJtaXQnXSB7XFxuICB3aWR0aDogNXJlbTtcXG4gIGhlaWdodDogM3JlbTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG59XFxuXFxuYnV0dG9uW3R5cGU9J3N1Ym1pdCddOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKiBGT09URVIgKi9cXG5cXG4uZmEtZ2l0aHViIHtcXG4gIHNjYWxlOiAyO1xcbiAgY29sb3I6IHdoaXRlO1xcblxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDMwcHg7XFxuICBib3R0b206IDMwcHg7XFxufVxcblxcbi5mYS1naXRodWI6aG92ZXIge1xcbiAgdHJhbnNpdGlvbjogMC4zcztcXG4gIHNjYWxlOiAyLjI7XFxuICByb3RhdGU6IDM2MGRlZztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyogS0VZRlJBTUVTICovXFxuXFxuQGtleWZyYW1lcyBmYWRlLWluIHtcXG4gIDAlIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG9wYWNpdHk6IDAlO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDEwMCU7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgZ3JvdyB7XFxuICAwJSB7XFxuICAgIHNjYWxlOiAxO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHNjYWxlOiAxLjI7XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxXQUFXO0VBQ1gsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLE1BQU07RUFDTixRQUFRO0VBQ1IsT0FBTztFQUNQLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztB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QUN2QixrQkFBa0I7O0VBRWxCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxlQUFlOztFQUVmLFVBQVU7RUFDVix1QkFBdUI7RUFDdkIsZ0JBQWdCOztFQUVoQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBLFdBQVc7O0FBRVg7RUFDRSxRQUFRO0VBQ1IsWUFBWTs7RUFFWixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUEsY0FBYzs7QUFFZDtFQUNFO0lBQ0UsY0FBYztJQUNkLFdBQVc7RUFDYjtFQUNBO0lBQ0UsYUFBYTtFQUNmO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFFBQVE7RUFDVjtFQUNBO0lBQ0UsVUFBVTtFQUNaO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczppdGFsLHdnaHRAMCwxMDA7MCwyMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw2MDA7MCw3MDA7MCw4MDA7MCw5MDA7MSwxMDA7MSwyMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw2MDA7MSw3MDA7MSw4MDA7MSw5MDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5odG1sIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcXG59XFxuXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBwIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxufVxcblxcbiNjb250ZW50IHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgbGVmdDogMDtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHBhZGRpbmc6IDUwcHggNTBweCAwIDUwcHg7XFxuICB6LWluZGV4OiAyO1xcbn1cXG5cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1hcmdpbjogYXV0bztcXG59XFxuXFxuLmdhbGxlcnkge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWluLWhlaWdodDogMTAwJTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5nYWxsZXJ5LWRpdiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogNTAlO1xcbiAgaGVpZ2h0OiA2MDBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRvcDogMTAwcHg7XFxuICBsZWZ0OiA1MCU7XFxuICBtYXJnaW4tbGVmdDogLTI1JTtcXG59XFxuXFxuI2xvZ28tZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4jaG9tZS1sb2dvIHtcXG4gIGhlaWdodDogMTc1cHg7XFxufVxcblxcbiNzbG9nYW4ge1xcbiAgbWFyZ2luOiAwO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAzMnB4O1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG59XFxuXFxuLmxpbmUtdGhyb3VnaCB7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG4gIHRleHQtZGVjb3JhdGlvbi10aGlja25lc3M6IDJweDtcXG59XFxuXFxuLnVuZGVybGluZSB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIHRleHQtZGVjb3JhdGlvbi10aGlja25lc3M6IDJweDtcXG4gIHRleHQtdW5kZXJsaW5lLW9mZnNldDogMnB4O1xcbn1cXG5cXG4uYm9sZCB7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4jbWljaGVsaW4tZGl2e1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBsZWZ0OiAxNTAlO1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4jc3RhcnMge1xcbiAgd2lkdGg6IDY1JTtcXG59XFxuXFxuI3N0YXJzLXRleHQge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgZm9udC13ZWlnaHQ6IDMwMHB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgd2lkdGg6IDc1JTtcXG59XFxuXFxuI3F1b3RlLWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGxlZnQ6IC0xNTAlO1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4jcXVvdGUge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgZm9udC1zaXplOiA0MnB4O1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG59XFxuXFxuI3F1b3RlLW5hbWUge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgZm9udC1zaXplOiAzMnB4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxubmF2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDIwcHg7XFxuICBvcmRlcjogMjtcXG59XFxuXFxuLm5hdi1idG4ge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAyOHB4O1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIHBhZGRpbmc6IDVweCAyMHB4O1xcbiAgdHJhbnNpdGlvbjogNTAwbXM7XFxufVxcblxcbi5uYXYtYnRuOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4ubmF2LWJ0bi5hY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi8qIE1FTlUgKi9cXG5cXG4uY3VydmUtYmcge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4uY3VydmUtYmctaW1nIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IC01NSU7XFxufVxcblxcbi5iYWNrZ3JvdW5kLWltZy1kaXYge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDA7XFxuICB3aWR0aDogNzUlO1xcbiAgaGVpZ2h0OiAxMjUlO1xcbiAgei1pbmRleDogMDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5iYWNrZ3JvdW5kLWltZyB7XFxuICBvcGFjaXR5OiAxMDAlO1xcbiAgdHJhbnNpdGlvbjogNTAwbXM7XFxuICBhbmltYXRpb246IGZhZGUtaW4gNTAwbXMgZWFzZS1pbi1vdXQ7XFxuICBtYXgtaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4jY29ybmVyLWxvZ28ge1xcbiAgaGVpZ2h0OiAxMTVweDtcXG4gIGZpbGw6IGJsYWNrO1xcbiAgb3JkZXI6IDE7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNtZW51LWRpdiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiA3NXB4O1xcbiAgdG9wOiAyNTBweDtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgei1pbmRleDogMjtcXG4gIGdhcDogODBweDtcXG59XFxuXFxuI21lbnUtc2VsZWN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAzMHB4O1xcbn1cXG5cXG4jbWVudS1pdGVtcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG59XFxuXFxuLnNlbGVjdGlvbiB7XFxuICB3aWR0aDogMjYwcHg7XFxuICBmb250LXNpemU6IDI4cHg7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgcGFkZGluZzogNXB4IDAgNXB4IDA7XFxuICB0cmFuc2l0aW9uOiA1MDBtcztcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLnNlbGVjdGlvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnNlbGVjdGlvbi5hY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5pdGVtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDQ1MHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XFxufVxcblxcbi5pdGVtLW5hbWUge1xcbiAgZm9udC1zaXplOiAyOHB4O1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLml0ZW0tZGVzYyB7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBmb250LXdlaWdodDogMjAwO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qIENPTlRBQ1QgUEFHRSAqL1xcblxcbiNjb250YWN0LWltZyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMDtcXG59XFxuXFxuI2luZm8tcGFyZW50LWRpdiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiA3NXB4O1xcbiAgdG9wOiAyNTBweDtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcblxcbiAgd2lkdGg6IDc1MHB4O1xcbiAgaGVpZ2h0OiA0NTBweDtcXG59XFxuXFxuI2luZm8tZGl2IHtcXG4gIFxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgei1pbmRleDogMjtcXG5cXG59XFxuXFxuLmluZm8tc3ViLWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG4gIGhlaWdodDogNjBweDtcXG4gIHdpZHRoOiA2NTBweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuXFxuICB0cmFuc2l0aW9uOiBoZWlnaHQgNTAwbXMgZWFzZS1pbi1vdXQ7XFxuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLmluZm8tc3ViLWRpdjpob3ZlciB7XFxuICBoZWlnaHQ6IDI1MHB4O1xcbn1cXG5cXG4uaW5mby1zdWItZGl2LmFjdGl2ZSB7XFxuICBoZWlnaHQ6IDI1MHB4O1xcbn1cXG5cXG4uY29udGFjdC1oZWFkaW5nIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgXFxuICBmb250LXNpemU6IDI4cHg7XFxuICBmb250LXdlaWdodDogMzAwO1xcbn1cXG5cXG4uaW5mby1zdWItZGl2LmFjdGl2ZSAuY29udGFjdC1oZWFkaW5nIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrOyBcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmluZm8tc3ViLWRpdjpob3ZlciAuY29udGFjdC1oZWFkaW5nIHsgXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjazsgXFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5jb250YWN0LXRleHQge1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgZm9udC13ZWlnaHQ6IDIwMDtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcXG5cXG4gIHBhZGRpbmc6IDIwcHggMHB4IDBweCAyMHB4O1xcbn1cXG5cXG4jYm9va2luZy1kaXY6aG92ZXIge1xcbiAgaGVpZ2h0OiAyMDBweFxcbn1cXG5cXG5hIHtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuXFxuYTpmb2N1cyB7XFxuICBjb2xvcjogZ3JleTtcXG59XFxuXFxuI3N1cHBvcnQtZW1haWw6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jcmV2aWV3LWRpdjpob3ZlciB7XFxuICBoZWlnaHQ6IDM1MHB4O1xcbn1cXG5cXG4jcmV2aWV3LWZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIHJvdy1nYXA6IDIwcHg7XFxuICBjb2x1bW4tZ2FwOiA1JTtcXG5cXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xcblxcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDIwMHB4O1xcbn1cXG5cXG5cXG5pbnB1dCB7XFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcblxcbiAgd2lkdGg6IDQ1JTtcXG4gIGhlaWdodDogM3JlbTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcblxcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG5cXG4gIHdpZHRoOiA5NSU7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuXFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG5idXR0b25bdHlwZT0nc3VibWl0J10ge1xcbiAgd2lkdGg6IDVyZW07XFxuICBoZWlnaHQ6IDNyZW07XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gIGNvbG9yOiBibGFjaztcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxufVxcblxcbmJ1dHRvblt0eXBlPSdzdWJtaXQnXTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyogRk9PVEVSICovXFxuXFxuLmZhLWdpdGh1YiB7XFxuICBzY2FsZTogMjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG5cXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAzMHB4O1xcbiAgYm90dG9tOiAzMHB4O1xcbn1cXG5cXG4uZmEtZ2l0aHViOmhvdmVyIHtcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxuICBzY2FsZTogMi4yO1xcbiAgcm90YXRlOiAzNjBkZWc7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qIEtFWUZSQU1FUyAqL1xcblxcbkBrZXlmcmFtZXMgZmFkZS1pbiB7XFxuICAwJSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBvcGFjaXR5OiAwJTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAxMDAlO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGdyb3cge1xcbiAgMCUge1xcbiAgICBzY2FsZTogMTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBzY2FsZTogMS4yO1xcbiAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhc3NldHMvaW1hZ2VzL2NvbnRhY3QtYmcucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFzc2V0cy9pbWFnZXMvY3VydmUtYmcuc3ZnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFzc2V0cy9pbWFnZXMvaG9tZS1iZy5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL2ltYWdlcy9sb2dvLWJsYWNrLnN2Z1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhc3NldHMvaW1hZ2VzL2xvZ28uc3ZnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFzc2V0cy9pbWFnZXMvZGVzc2VydC0xLndlYnBcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL2ltYWdlcy9kZXNzZXJ0LTIud2VicFwiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhc3NldHMvaW1hZ2VzL2Rlc3NlcnQtMy53ZWJwXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFzc2V0cy9pbWFnZXMvZGVzc2VydC00LndlYnBcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL2ltYWdlcy9kcmluay0xLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhc3NldHMvaW1hZ2VzL2RyaW5rLTIuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFzc2V0cy9pbWFnZXMvZHJpbmstMy5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL2ltYWdlcy9kcmluay00LmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhc3NldHMvaW1hZ2VzL21haW4tMS53ZWJwXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFzc2V0cy9pbWFnZXMvbWFpbi0yLndlYnBcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL2ltYWdlcy9tYWluLTMud2VicFwiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhc3NldHMvaW1hZ2VzL21haW4tNC53ZWJwXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFzc2V0cy9pbWFnZXMvc3RhcnRlci0xLndlYnBcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL2ltYWdlcy9zdGFydGVyLTIud2VicFwiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhc3NldHMvaW1hZ2VzL3N0YXJ0ZXItMy53ZWJwXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFzc2V0cy9pbWFnZXMvc3RhcnRlci00LndlYnBcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL2ltYWdlcy9taWNoZWxpbi1zdGFycy5wbmdcIjsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGN1cnZlQmcgZnJvbSAnLi9hc3NldHMvY3VydmUtYmcuc3ZnJztcbmltcG9ydCBsb2dvQmxhY2tTdmcgZnJvbSAnLi9hc3NldHMvbG9nby1ibGFjay5zdmcnO1xuaW1wb3J0IGxvYWRIb21lIGZyb20gJy4vaG9tZSc7XG5cbmltcG9ydCBjb250YWN0QmcgZnJvbSAnLi9hc3NldHMvY29udGFjdC1iZy5wbmcnO1xuXG5jb25zdCBzZXRCYWNrZ3JvdW5kID0gKCkgPT4ge1xuICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmQgPSAnJztcblxuICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKTtcblxuICBjb25zdCBjdXJ2ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjdXJ2ZURpdi5jbGFzc0xpc3QuYWRkKCdjdXJ2ZS1iZycpO1xuXG4gIGNvbnN0IGN1cnZlSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGN1cnZlSW1nLnNyYyA9IGN1cnZlQmc7XG4gIGN1cnZlSW1nLmNsYXNzTGlzdC5hZGQoJ2N1cnZlLWJnLWltZycpO1xuXG4gIGNvbnN0IGJhY2tncm91bmRJbWdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYmFja2dyb3VuZEltZ0Rpdi5jbGFzc0xpc3QuYWRkKCdiYWNrZ3JvdW5kLWltZy1kaXYnKTtcblxuICBjb25zdCBiYWNrZ3JvdW5kSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGJhY2tncm91bmRJbWcuaWQgPSAnY29udGFjdC1pbWcnO1xuICBiYWNrZ3JvdW5kSW1nLnNyYyA9IGNvbnRhY3RCZztcbiAgYmFja2dyb3VuZEltZy5jbGFzc0xpc3QuYWRkKCdiYWNrZ3JvdW5kLWltZycpO1xuXG4gIGJhY2tncm91bmRJbWdEaXYuYXBwZW5kQ2hpbGQoYmFja2dyb3VuZEltZyk7XG4gIGN1cnZlRGl2LmFwcGVuZENoaWxkKGN1cnZlSW1nKTtcbiAgbWFpbi5hcHBlbmRDaGlsZChjdXJ2ZURpdik7XG4gIG1haW4uYXBwZW5kQ2hpbGQoYmFja2dyb3VuZEltZ0Rpdik7XG59O1xuXG5jb25zdCBzZXROYXYgPSAoKSA9PiB7XG4gIGlmICghZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nvcm5lci1sb2dvJykpIHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhZGVyJyk7XG4gICAgaGVhZGVyLnN0eWxlLmp1c3RpZnlDb250ZW50ID0gJ3NwYWNlLWJldHdlZW4nO1xuXG4gICAgY29uc3QgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGxvZ28uc3JjID0gbG9nb0JsYWNrU3ZnO1xuICAgIGxvZ28uaWQgPSAnY29ybmVyLWxvZ28nO1xuXG4gICAgbG9nby5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxvYWRIb21lKTtcblxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChsb2dvKTtcbiAgfVxuICBjb25zdCBtZW51QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUtYnRuJyk7XG4gIG1lbnVCdG4uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG59O1xuXG5jb25zdCBjcmVhdGVJbmZvID0gKCkgPT4ge1xuICBjb25zdCBpbmZvUGFyZW50RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGluZm9QYXJlbnREaXYuaWQgPSAnaW5mby1wYXJlbnQtZGl2JztcblxuICBjb25zdCBpbmZvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGluZm9EaXYuaWQgPSAnaW5mby1kaXYnO1xuXG4gIGNvbnN0IGNyZWF0ZUFkZHJlc3NEaXYgPSAoKSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoJ2luZm8tc3ViLWRpdicpO1xuICAgIGRpdi5pZCA9ICdhZGRyZXNzLWRpdic7XG5cbiAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZGluZy5jbGFzc0xpc3QuYWRkKCdjb250YWN0LWhlYWRpbmcnKTtcbiAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gJ0FkZHJlc3MnO1xuXG4gICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB0ZXh0LmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtdGV4dCcpO1xuICAgIHRleHQuaWQgPSAnYWRkcmVzcy1kaXYnO1xuICAgIHRleHQudGV4dENvbnRlbnQgPSAn4oCccmVmaW5lZOKAnVxcclxcbjMyMTIgNHRoIGF2Llxcclxcbk5ldyBZb3JrIENpdHksIE5ZXFxyXFxuMjEyIDMzMiAyMzMzJztcblxuICAgIGRpdi5hcHBlbmRDaGlsZChoZWFkaW5nKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQodGV4dCk7XG5cbiAgICBkaXYuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG5cbiAgICByZXR1cm4gZGl2O1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZUJvb2tpbmdEaXYgPSAoKSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoJ2luZm8tc3ViLWRpdicpO1xuICAgIGRpdi5pZCA9ICdib29raW5nLWRpdic7XG5cbiAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZGluZy5jbGFzc0xpc3QuYWRkKCdjb250YWN0LWhlYWRpbmcnKTtcbiAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gJ0Jvb2tpbmcnO1xuXG4gICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB0ZXh0LmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtdGV4dCcpO1xuICAgIHRleHQuaWQgPSAnYm9va2luZy1kaXYnO1xuICAgIHRleHQuaW5uZXJIVE1MID0gJ1RvIGJvb2sgYSByZXNlcnZhdGlvbiwgcGxlYXNlIGVpdGhlciBjYWxsIHVzXFxyXFxuPHNwYW4gY2xhc3M9XCJib2xkXCI+MjEyIDMzMiAyMzMzPC9zcGFuPlxcclxcbiBvciBjbGljayA8YSBocmVmPVwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1kUXc0dzlXZ1hjUSZhYl9jaGFubmVsPVJpY2tBc3RsZXlcIiB0YXJnZXQ94oCdX2JsYW5r4oCdPjxzcGFuIGNsYXNzPVwiYm9sZFwiPmhlcmU8L3NwYW4+PC9hPiB0byBib29rIG9ubGluZS4nO1xuXG4gICAgZGl2LmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuICAgIGRpdi5hcHBlbmRDaGlsZCh0ZXh0KTtcblxuICAgIHJldHVybiBkaXY7XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlSW5xdWlyaWVzRGl2ID0gKCkgPT4ge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdpbmZvLXN1Yi1kaXYnKTtcblxuICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkaW5nLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtaGVhZGluZycpO1xuICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSAnSW5xdWlyaWVzJztcblxuICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdGV4dC5jbGFzc0xpc3QuYWRkKCdjb250YWN0LXRleHQnKTtcbiAgICB0ZXh0LmlkID0gJ2lucXVpcmllcy1kaXYnO1xuICAgIHRleHQuaW5uZXJIVE1MID0gJ0ZvciBmdXJ0aGVyIGlucXVpcmllcywgc2VuZCB1cyBhbiBlbWFpbCBhdFxcclxcbjxzcGFuIGlkPVwic3VwcG9ydC1lbWFpbFwiIGNsYXNzPVwiYm9sZFwiPnN1cHBvcnRAcmVmaW5lZC5jb208L3NwYW4+XFxyXFxuUmVzcG9uc2VzIGNhbiB0YWtlIHVwIHRvIGEgZmV3IGhvdXJzLlxcclxcblRoYW5rIHlvdSEnO1xuXG4gICAgZGl2LmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuICAgIGRpdi5hcHBlbmRDaGlsZCh0ZXh0KTtcblxuICAgIHJldHVybiBkaXY7XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlUmV2aWV3RGl2ID0gKCkgPT4ge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdpbmZvLXN1Yi1kaXYnKTtcbiAgICBkaXYuaWQgPSAncmV2aWV3LWRpdic7XG5cbiAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZGluZy5jbGFzc0xpc3QuYWRkKCdjb250YWN0LWhlYWRpbmcnKTtcbiAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gJ1Jldmlldyc7XG5cbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIGZvcm0uaWQgPSAncmV2aWV3LWZvcm0nO1xuXG4gICAgY29uc3QgZmlyc3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBmaXJzdE5hbWUudHlwZSA9ICd0ZXh0JztcbiAgICBmaXJzdE5hbWUucmVxdWlyZWQgPSB0cnVlO1xuICAgIGZpcnN0TmFtZS5wbGFjZWhvbGRlciA9ICdGaXJzdCBOYW1lJztcblxuICAgIGNvbnN0IGxhc3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBsYXN0TmFtZS50eXBlID0gJ3RleHQnO1xuICAgIGxhc3ROYW1lLnJlcXVpcmVkID0gdHJ1ZTtcbiAgICBsYXN0TmFtZS5wbGFjZWhvbGRlciA9ICdMYXN0IE5hbWUnO1xuXG4gICAgY29uc3QgZGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBkYXRlTGFiZWwudGV4dENvbnRlbnQgPSAnVmlzaXQgRGF0ZSc7XG5cbiAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBkYXRlLnR5cGUgPSAnZGF0ZSc7XG4gICAgZGF0ZS5yZXF1aXJlZCA9IHRydWU7XG4gICAgZGF0ZS5wbGFjZWhvbGRlciA9ICdEYXRlIG9mIFZpc2l0JztcblxuICAgIGNvbnN0IHJlY2VpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHJlY2VpcHQudHlwZSA9ICd0ZXh0JztcbiAgICByZWNlaXB0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgICByZWNlaXB0LnBsYWNlaG9sZGVyID0gJ1JlY2VpcHQgTnVtYmVyIGUuZy4gIzM0RDczYyc7XG5cbiAgICBjb25zdCB0ZXh0QXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgdGV4dEFyZWEucmVxdWlyZWQgPSB0cnVlO1xuICAgIHRleHRBcmVhLnBsYWNlaG9sZGVyID0gJ1dyaXRlIHlvdXIgcmV2aWV3IGhlcmUuLi4nO1xuXG4gICAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgc3VibWl0QnRuLnR5cGUgPSAnc3VibWl0JztcbiAgICBzdWJtaXRCdG4udGV4dENvbnRlbnQgPSAnU3VibWl0JztcblxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZmlyc3ROYW1lKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGxhc3ROYW1lKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGRhdGUpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQocmVjZWlwdCk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZCh0ZXh0QXJlYSk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChzdWJtaXRCdG4pO1xuXG4gICAgZGl2LmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChmb3JtKTtcblxuICAgIHJldHVybiBkaXY7XG4gIH07XG5cbiAgaW5mb0Rpdi5hcHBlbmRDaGlsZChjcmVhdGVBZGRyZXNzRGl2KCkpO1xuICBpbmZvRGl2LmFwcGVuZENoaWxkKGNyZWF0ZUJvb2tpbmdEaXYoKSk7XG4gIGluZm9EaXYuYXBwZW5kQ2hpbGQoY3JlYXRlSW5xdWlyaWVzRGl2KCkpO1xuICBpbmZvRGl2LmFwcGVuZENoaWxkKGNyZWF0ZVJldmlld0RpdigpKTtcblxuICBpbmZvUGFyZW50RGl2LmFwcGVuZENoaWxkKGluZm9EaXYpO1xuXG4gIHJldHVybiBpbmZvUGFyZW50RGl2O1xufTtcblxuY29uc3QgZW5hYmxlRGVmYXVsdEhvdmVyID0gKCkgPT4ge1xuICBjb25zdCBpbmZvU3ViRGl2cyA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaW5mby1zdWItZGl2JykpO1xuICBpbmZvU3ViRGl2cy5mb3JFYWNoKChlKSA9PiB7XG4gICAgZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoKSA9PiB7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkcmVzcy1kaXYnKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICB9KTtcbiAgICBlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgKCkgPT4ge1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZHJlc3MtZGl2JykuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIGNvbnN0IHVybCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdXBwb3J0LWVtYWlsJyk7XG4gIHVybC5vbmNsaWNrID0gZnVuY3Rpb24gY29weSgpIHtcbiAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dCh1cmwudGV4dENvbnRlbnQpO1xuICAgIGFsZXJ0KCdFbWFpbCBjb3BpZWQhJyk7XG4gIH07XG59O1xuXG5jb25zdCBsb2FkQ29udGFjdCA9ICgpID0+IHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJyk7XG4gIG1haW4uaW5uZXJIVE1MID0gJyc7XG5cbiAgc2V0QmFja2dyb3VuZCgpO1xuICBzZXROYXYoKTtcblxuICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZUluZm8oKSk7XG4gIGVuYWJsZURlZmF1bHRIb3ZlcigpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbG9hZENvbnRhY3Q7XG4iLCJpbXBvcnQgaG9tZUJnIGZyb20gJy4vYXNzZXRzL2hvbWUtYmcucG5nJztcbmltcG9ydCBsb2dvU3ZnIGZyb20gJy4vYXNzZXRzL2xvZ28uc3ZnJztcbmltcG9ydCBzdGFyc1BuZyBmcm9tICcuL2Fzc2V0cy9taWNoZWxpbi1zdGFycy5wbmcnO1xuXG5mdW5jdGlvbiBzZXRCYWNrZ3JvdW5kKCkge1xuICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmQgPSBgdXJsKCR7aG9tZUJnfSlgO1xufVxuXG5mdW5jdGlvbiBzZXROYXYoKSB7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkZXInKTtcbiAgaGVhZGVyLnN0eWxlLmp1c3RpZnlDb250ZW50ID0gJ2NlbnRlcic7XG5cbiAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb3JuZXItbG9nbycpKSB7XG4gICAgY29uc3QgY29ybmVyTG9nbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb3JuZXItbG9nbycpO1xuICAgIGNvcm5lckxvZ28ucmVtb3ZlKCk7XG4gIH1cblxuICBjb25zdCBtZW51QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUtYnRuJyk7XG4gIGNvbnN0IGNvbnRhY3RCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFjdC1idG4nKTtcbiAgbWVudUJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgY29udGFjdEJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlR2FsbGVyeSgpIHtcbiAgY29uc3QgZ2FsbGVyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBnYWxsZXJ5LmNsYXNzTGlzdC5hZGQoJ2dhbGxlcnknKTtcbiAgZ2FsbGVyeS5pZCA9ICdnYWxsZXJ5JztcblxuICBjb25zdCBsb2dvRGl2ID0gKCkgPT4ge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5pZCA9ICdsb2dvLWRpdic7XG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoJ2dhbGxlcnktZGl2Jyk7XG5cbiAgICBjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgbG9nby5zcmMgPSBsb2dvU3ZnO1xuICAgIGxvZ28uaWQgPSAnaG9tZS1sb2dvJztcblxuICAgIGNvbnN0IHNsb2dhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBzbG9nYW4uaWQgPSAnc2xvZ2FuJztcbiAgICBzbG9nYW4uaW5uZXJIVE1MID0gJzxzcGFuIGNsYXNzPVwidW5kZXJsaW5lXCI+SXRcXCdzIG5vdDwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJsaW5lLXRocm91Z2hcIj5qdXN0IGZvb2Q8L3NwYW4+LiBJdFxcJ3MgPHNwYW4gY2xhc3M9XCJib2xkXCI+YXJ0PC9zcGFuPi4nO1xuXG4gICAgZGl2LmFwcGVuZENoaWxkKGxvZ28pO1xuICAgIGRpdi5hcHBlbmRDaGlsZChzbG9nYW4pO1xuXG4gICAgcmV0dXJuIGRpdjtcbiAgfTtcblxuICBjb25zdCBtaWNoZWxpbkRpdiA9ICgpID0+IHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuaWQgPSAnbWljaGVsaW4tZGl2JztcbiAgICBkaXYuY2xhc3NMaXN0LmFkZCgnZ2FsbGVyeS1kaXYnKTtcblxuICAgIGNvbnN0IHN0YXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgc3RhcnMuc3JjID0gc3RhcnNQbmc7XG4gICAgc3RhcnMuaWQgPSAnc3RhcnMnO1xuXG4gICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB0ZXh0LmlubmVySFRNTCA9ICdCb29rIGFuIG9wcG9ydHVuaXR5IHRvIGRpbmUgaW4gdGhlIHdvcmxkXFwncyA8c3BhbiBjbGFzcz1cImJvbGRcIj5maXJzdDwvc3Bhbj4gMyBNaWNoZWxpbiBTdGFyIHJlc3RhdXJhbnQuJztcbiAgICB0ZXh0LmlkID0gJ3N0YXJzLXRleHQnO1xuXG4gICAgZGl2LmFwcGVuZENoaWxkKHN0YXJzKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQodGV4dCk7XG5cbiAgICByZXR1cm4gZGl2O1xuICB9O1xuXG4gIGNvbnN0IHF1b3RlRGl2ID0gKCkgPT4ge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5pZCA9ICdxdW90ZS1kaXYnO1xuICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdnYWxsZXJ5LWRpdicpO1xuXG4gICAgY29uc3QgcXVvdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIHF1b3RlLnRleHRDb250ZW50ID0gJ1wiSSBjb3VsZG5cXCd0IGJlbGlldmUgaXQuIEl0IHdhcyBtYWdpYy4gT3V0IG9mIHRoaXMgd29ybGQuIFRoaXMgZXhwZXJpZW5jZSBpcyBtYW5kYXRvcnkuXCInO1xuICAgIHF1b3RlLmlkID0gJ3F1b3RlJztcblxuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgbmFtZS50ZXh0Q29udGVudCA9ICctIEdvcmRvbiBSYW1zZXkgLSc7XG4gICAgbmFtZS5pZCA9ICdxdW90ZS1uYW1lJztcblxuICAgIGRpdi5hcHBlbmRDaGlsZChxdW90ZSk7XG4gICAgZGl2LmFwcGVuZENoaWxkKG5hbWUpO1xuXG4gICAgcmV0dXJuIGRpdjtcbiAgfTtcblxuICBnYWxsZXJ5LmFwcGVuZENoaWxkKGxvZ29EaXYoKSk7XG4gIGdhbGxlcnkuYXBwZW5kQ2hpbGQobWljaGVsaW5EaXYoKSk7XG4gIGdhbGxlcnkuYXBwZW5kQ2hpbGQocXVvdGVEaXYoKSk7XG5cbiAgcmV0dXJuIGdhbGxlcnk7XG59XG5cbmNvbnN0IGVuYWJsZVNsaWRlcyA9ICgpID0+IHtcbiAgY29uc3QgZ2FsbGVyeSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYWxsZXJ5Jyk7XG4gIGNvbnN0IGdhbGxlcnlEaXZzID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdnYWxsZXJ5LWRpdicpKTtcbiAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgIGdhbGxlcnlEaXZzLmZvckVhY2goKHgpID0+IHtcbiAgICAgIGlmICh4Lm9mZnNldExlZnQgPCAwKSB7XG4gICAgICAgIHguYW5pbWF0ZSh7XG4gICAgICAgICAgbGVmdDogJzE1MCUnLFxuICAgICAgICB9LCB7IGR1cmF0aW9uOiAwLCBmaWxsOiAnZm9yd2FyZHMnIH0pO1xuICAgICAgfSBlbHNlIGlmICh4Lm9mZnNldExlZnQgPiBnYWxsZXJ5Lm9mZnNldFdpZHRoKSB7XG4gICAgICAgIHguYW5pbWF0ZSh7XG4gICAgICAgICAgbGVmdDogJzUwJScsXG4gICAgICAgIH0sIHsgZHVyYXRpb246IDEwMDAsIGZpbGw6ICdmb3J3YXJkcycsIGVhc2luZzogJ2Vhc2UtaW4tb3V0JyB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHguYW5pbWF0ZSh7XG4gICAgICAgICAgbGVmdDogJy0xNTAlJyxcbiAgICAgICAgfSwgeyBkdXJhdGlvbjogMTAwMCwgZmlsbDogJ2ZvcndhcmRzJywgZWFzaW5nOiAnZWFzZS1pbi1vdXQnIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9LCA0MDAwKTtcbn07XG5cbmZ1bmN0aW9uIGxvYWRIb21lKCkge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKTtcbiAgbWFpbi5pbm5lckhUTUwgPSAnJztcblxuICBzZXRCYWNrZ3JvdW5kKCk7XG4gIHNldE5hdigpO1xuXG4gIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlR2FsbGVyeSgpKTtcbiAgZW5hYmxlU2xpZGVzKCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRIb21lO1xuXG4vKiBnYWxsZXJ5RGl2cy5mb3JFYWNoKChlKSA9PiB7XG4gIGNvbnNvbGUubG9nKCdhZGRpbmcnKTtcbiAgZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBnYWxsZXJ5RGl2cy5mb3JFYWNoKCh4KSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyh4Lm9mZnNldExlZnQpO1xuICAgICAgaWYgKHgub2Zmc2V0TGVmdCA8IDApIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3NldHRpbmcgdG8gMTUwJScpO1xuICAgICAgICBjb25zb2xlLmxvZyh4KTtcbiAgICAgICAgeC5hbmltYXRlKHtcbiAgICAgICAgICBsZWZ0OiAnMTUwJScsXG4gICAgICAgIH0sIHsgZHVyYXRpb246IDAsIGZpbGw6ICdmb3J3YXJkcycgfSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHguc3R5bGUubGVmdCk7XG4gICAgICB9IGVsc2UgaWYgKHgub2Zmc2V0TGVmdCA+IGdhbGxlcnkub2Zmc2V0V2lkdGgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2FkZGluZycpO1xuICAgICAgICBjb25zb2xlLmxvZyh4KTtcbiAgICAgICAgeC5hbmltYXRlKHtcbiAgICAgICAgICBsZWZ0OiAnNTAlJyxcbiAgICAgICAgfSwgeyBkdXJhdGlvbjogNTAwLCBmaWxsOiAnZm9yd2FyZHMnIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3JlbW92aW5nJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKHgpO1xuICAgICAgICB4LmFuaW1hdGUoe1xuICAgICAgICAgIGxlZnQ6ICctMTUwJScsXG4gICAgICAgIH0sIHsgZHVyYXRpb246IDUwMCwgZmlsbDogJ2ZvcndhcmRzJyB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59KTsgKi9cbiIsImltcG9ydCBsb2FkTWVudSBmcm9tICcuL21lbnUnO1xuaW1wb3J0IGxvYWRDb250YWN0IGZyb20gJy4vY29udGFjdCc7XG5cbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpIHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gIGhlYWRlci5pZCA9ICdoZWFkZXInO1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZU5hdigpIHtcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcbiAgICBuYXYuaWQgPSAnbmF2JztcblxuICAgIGNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBtZW51QnRuLnRleHRDb250ZW50ID0gJ21lbnUnO1xuICAgIG1lbnVCdG4uY2xhc3NMaXN0LmFkZCgnbmF2LWJ0bicpO1xuICAgIG1lbnVCdG4uaWQgPSAnbWVudS1idG4nO1xuICAgIG1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBpZiAoIW1lbnVCdG4uY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgICAgICBsb2FkTWVudSgpO1xuICAgICAgICBtZW51QnRuLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgY29udGFjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnRhY3RCdG4udGV4dENvbnRlbnQgPSAnY29udGFjdCc7XG4gICAgY29udGFjdEJ0bi5jbGFzc0xpc3QuYWRkKCduYXYtYnRuJyk7XG4gICAgY29udGFjdEJ0bi5pZCA9ICdjb250YWN0LWJ0bic7XG4gICAgY29udGFjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGlmICghY29udGFjdEJ0bi5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgICAgIGxvYWRDb250YWN0KCk7XG4gICAgICAgIGNvbnRhY3RCdG4uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBuYXYuYXBwZW5kQ2hpbGQobWVudUJ0bik7XG4gICAgbmF2LmFwcGVuZENoaWxkKGNvbnRhY3RCdG4pO1xuXG4gICAgcmV0dXJuIG5hdjtcbiAgfVxuXG4gIGhlYWRlci5hcHBlbmRDaGlsZChjcmVhdGVOYXYoKSk7XG5cbiAgcmV0dXJuIGhlYWRlcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTWFpbigpIHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbiAgbWFpbi5pZCA9ICdtYWluJztcblxuICByZXR1cm4gbWFpbjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRm9vdGVyKCkge1xuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcbiAgZm9vdGVyLmlkID0gJ2Zvb3Rlcic7XG5cbiAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgbGluay5ocmVmID0gJ2h0dHBzOi8vZ2l0aHViLmNvbS9iYWhlZXJwYXlhYic7XG4gIGxpbmsudGFyZ2V0ID0gJ19ibGFuayc7XG5cbiAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgaWNvbi5jbGFzc0xpc3QuYWRkKCdmYWInKTtcbiAgaWNvbi5jbGFzc0xpc3QuYWRkKCdmYS1naXRodWInKTtcblxuICBsaW5rLmFwcGVuZENoaWxkKGljb24pO1xuICBmb290ZXIuYXBwZW5kQ2hpbGQobGluayk7XG5cbiAgcmV0dXJuIGZvb3Rlcjtcbn1cblxuZnVuY3Rpb24gaW5pdCgpIHtcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuICBkaXYuYXBwZW5kQ2hpbGQoY3JlYXRlSGVhZGVyKCkpO1xuICBkaXYuYXBwZW5kQ2hpbGQoY3JlYXRlTWFpbigpKTtcbiAgZGl2LmFwcGVuZENoaWxkKGNyZWF0ZUZvb3RlcigpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5pdDtcbiIsImltcG9ydCBjdXJ2ZUJnIGZyb20gJy4vYXNzZXRzL2N1cnZlLWJnLnN2Zyc7XG5pbXBvcnQgbG9nb0JsYWNrU3ZnIGZyb20gJy4vYXNzZXRzL2xvZ28tYmxhY2suc3ZnJztcbmltcG9ydCBsb2FkSG9tZSBmcm9tICcuL2hvbWUnO1xuXG5pbXBvcnQgc3RhcnRlck9uZSBmcm9tICcuL2Fzc2V0cy9tZW51LWl0ZW1zL3N0YXJ0ZXItMS53ZWJwJztcbmltcG9ydCBzdGFydGVyVHdvIGZyb20gJy4vYXNzZXRzL21lbnUtaXRlbXMvc3RhcnRlci0yLndlYnAnO1xuaW1wb3J0IHN0YXJ0ZXJUaHJlZSBmcm9tICcuL2Fzc2V0cy9tZW51LWl0ZW1zL3N0YXJ0ZXItMy53ZWJwJztcbmltcG9ydCBzdGFydGVyRm91ciBmcm9tICcuL2Fzc2V0cy9tZW51LWl0ZW1zL3N0YXJ0ZXItNC53ZWJwJztcblxuaW1wb3J0IG1haW5PbmUgZnJvbSAnLi9hc3NldHMvbWVudS1pdGVtcy9tYWluLTEud2VicCc7XG5pbXBvcnQgbWFpblR3byBmcm9tICcuL2Fzc2V0cy9tZW51LWl0ZW1zL21haW4tMi53ZWJwJztcbmltcG9ydCBtYWluVGhyZWUgZnJvbSAnLi9hc3NldHMvbWVudS1pdGVtcy9tYWluLTMud2VicCc7XG5pbXBvcnQgbWFpbkZvdXIgZnJvbSAnLi9hc3NldHMvbWVudS1pdGVtcy9tYWluLTQud2VicCc7XG5cbmltcG9ydCBkZXNzZXJ0T25lIGZyb20gJy4vYXNzZXRzL21lbnUtaXRlbXMvZGVzc2VydC0xLndlYnAnO1xuaW1wb3J0IGRlc3NlcnRUd28gZnJvbSAnLi9hc3NldHMvbWVudS1pdGVtcy9kZXNzZXJ0LTIud2VicCc7XG5pbXBvcnQgZGVzc2VydFRocmVlIGZyb20gJy4vYXNzZXRzL21lbnUtaXRlbXMvZGVzc2VydC0zLndlYnAnO1xuaW1wb3J0IGRlc3NlcnRGb3VyIGZyb20gJy4vYXNzZXRzL21lbnUtaXRlbXMvZGVzc2VydC00LndlYnAnO1xuXG5pbXBvcnQgZHJpbmtPbmUgZnJvbSAnLi9hc3NldHMvbWVudS1pdGVtcy9kcmluay0xLmpwZyc7XG5pbXBvcnQgZHJpbmtUd28gZnJvbSAnLi9hc3NldHMvbWVudS1pdGVtcy9kcmluay0yLmpwZyc7XG5pbXBvcnQgZHJpbmtUaHJlZSBmcm9tICcuL2Fzc2V0cy9tZW51LWl0ZW1zL2RyaW5rLTMuanBnJztcbmltcG9ydCBkcmlua0ZvdXIgZnJvbSAnLi9hc3NldHMvbWVudS1pdGVtcy9kcmluay00LmpwZyc7XG5cbmNvbnN0IHNldEJhY2tncm91bmQgPSAoKSA9PiB7XG4gIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZCA9ICcnO1xuXG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpO1xuXG4gIGNvbnN0IGN1cnZlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGN1cnZlRGl2LmNsYXNzTGlzdC5hZGQoJ2N1cnZlLWJnJyk7XG5cbiAgY29uc3QgY3VydmVJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgY3VydmVJbWcuc3JjID0gY3VydmVCZztcbiAgY3VydmVJbWcuY2xhc3NMaXN0LmFkZCgnY3VydmUtYmctaW1nJyk7XG5cbiAgY29uc3QgaXRlbUltZ0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBpdGVtSW1nRGl2LmlkID0gJ2l0ZW0taW1nLWRpdic7XG4gIGl0ZW1JbWdEaXYuY2xhc3NMaXN0LmFkZCgnYmFja2dyb3VuZC1pbWctZGl2Jyk7XG5cbiAgY3VydmVEaXYuYXBwZW5kQ2hpbGQoY3VydmVJbWcpO1xuICBtYWluLmFwcGVuZENoaWxkKGN1cnZlRGl2KTtcbiAgbWFpbi5hcHBlbmRDaGlsZChpdGVtSW1nRGl2KTtcbn07XG5cbmNvbnN0IHNldE5hdiA9ICgpID0+IHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlcicpO1xuICBoZWFkZXIuc3R5bGUuanVzdGlmeUNvbnRlbnQgPSAnc3BhY2UtYmV0d2Vlbic7XG5cbiAgaWYgKCFkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29ybmVyLWxvZ28nKSkge1xuICAgIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBsb2dvLnNyYyA9IGxvZ29CbGFja1N2ZztcbiAgICBsb2dvLmlkID0gJ2Nvcm5lci1sb2dvJztcblxuICAgIGxvZ28uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsb2FkSG9tZSk7XG5cbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobG9nbyk7XG4gIH1cblxuICBjb25zdCBjb250YWN0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhY3QtYnRuJyk7XG4gIGNvbnRhY3RCdG4uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG59O1xuXG5jb25zdCBjcmVhdGVNZW51ID0gKCkgPT4ge1xuICBjb25zdCBtZW51RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1lbnVEaXYuaWQgPSAnbWVudS1kaXYnO1xuXG4gIGNvbnN0IGl0ZW1JbWdEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXRlbS1pbWctZGl2Jyk7XG5cbiAgY29uc3QgY3JlYXRlTWVudUl0ZW1zID0gKCkgPT4ge1xuICAgIGNvbnN0IGNyZWF0ZUl0ZW1zID0gKCkgPT4ge1xuICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBkaXYuaWQgPSAnbWVudS1pdGVtcyc7XG4gICAgICBjb25zb2xlLmxvZyhkaXYpO1xuXG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSA0OyBpICs9IDEpIHtcbiAgICAgICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2l0ZW0nKTtcbiAgICAgICAgaXRlbS5pZCA9IGBpdGVtLSR7aX1gO1xuXG4gICAgICAgIGNvbnN0IGl0ZW1OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBpdGVtTmFtZS5jbGFzc0xpc3QuYWRkKCdpdGVtLW5hbWUnKTtcbiAgICAgICAgaXRlbU5hbWUuaWQgPSBgaXRlbS1uYW1lLSR7aX1gO1xuXG4gICAgICAgIGNvbnN0IGl0ZW1EZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBpdGVtRGVzYy5jbGFzc0xpc3QuYWRkKCdpdGVtLWRlc2MnKTtcbiAgICAgICAgaXRlbURlc2MuaWQgPSBgaXRlbS1kZXNjLSR7aX1gO1xuXG4gICAgICAgIGNvbnN0IGl0ZW1JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgaXRlbUltZy5jbGFzc0xpc3QuYWRkKCdiYWNrZ3JvdW5kLWltZycpO1xuICAgICAgICBpdGVtSW1nLmlkID0gYGl0ZW0taW1nLSR7aX1gO1xuICAgICAgICBpZiAoaSAhPT0gMSkgaXRlbUltZy5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcblxuICAgICAgICBpdGVtLmFwcGVuZENoaWxkKGl0ZW1OYW1lKTtcbiAgICAgICAgaXRlbS5hcHBlbmRDaGlsZChpdGVtRGVzYyk7XG4gICAgICAgIGl0ZW1JbWdEaXYuYXBwZW5kQ2hpbGQoaXRlbUltZyk7XG5cbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGl0ZW0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGRpdjtcbiAgICB9O1xuXG4gICAgY29uc3Qgc2V0U3RhcnRlcnMgPSAoZSkgPT4ge1xuICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbnMnKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNzZXJ0cycpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RyaW5rcycpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXRlbS1uYW1lLTEnKS50ZXh0Q29udGVudCA9ICdDb25maXRlZCBGb2llIEdyYXMnO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2l0ZW0tZGVzYy0xJykudGV4dENvbnRlbnQgPSAnRm9pZSBHcmFzIHdpdGggYnJhbWxleSBhcHBsZSBjb21wb3RlIGFuZCB3YWxudXQgY3J1bmNoJztcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpdGVtLWltZy0xJykuc3JjID0gc3RhcnRlck9uZTtcblxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2l0ZW0tbmFtZS0yJykudGV4dENvbnRlbnQgPSAnU2VhIG9mIE9yYW5nZSc7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXRlbS1kZXNjLTInKS50ZXh0Q29udGVudCA9ICdOYXRpdmUgbG9ic3Rlciwgcm9hc3RlZCBoZXJpdGFnZSBjYXJyb3RzLCBjYXJyb3QgcHVyw6llIGFuZCBidXR0ZXJtaWxrIHB1csOpZSc7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXRlbS1pbWctMicpLnNyYyA9IHN0YXJ0ZXJUd287XG5cbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpdGVtLW5hbWUtMycpLnRleHRDb250ZW50ID0gJ0hha2UgRmlsbGV0JztcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpdGVtLWRlc2MtMycpLnRleHRDb250ZW50ID0gJ0hha2UgZmlsbGV0IHBlcmZlY3RseSB1bmRlcnBpbm5lZCBieSBhbiBlYXJ0aHkgZ29sZGVuIGJlZXRyb290IGFuZCByYWRpc2ggc2FsYWQnO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2l0ZW0taW1nLTMnKS5zcmMgPSBzdGFydGVyVGhyZWU7XG5cbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpdGVtLW5hbWUtNCcpLnRleHRDb250ZW50ID0gJ0NhdWxpZmxvd2VyIFRleHR1cmVzJztcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpdGVtLWRlc2MtNCcpLnRleHRDb250ZW50ID0gJ0EgY2F1bGlmbG93ZXIgcmVjaXBlIGFsbCBhYm91dCBjb2xvdXIgYW5kIHRleHR1cmUsIGEgcGVyZmVjdCBhcHBldGlzZXIgYmVmb3JlIHlvdXIgbWFpbiBtZWFsJztcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpdGVtLWltZy00Jykuc3JjID0gc3RhcnRlckZvdXI7XG4gICAgfTtcblxuICAgIGNvbnN0IHNldE1haW5zID0gKGUpID0+IHtcbiAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXJ0ZXJzJykuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzc2VydHMnKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkcmlua3MnKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcblxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2l0ZW0tbmFtZS0xJykudGV4dENvbnRlbnQgPSAnR3VpbmVhIEZvd2wnO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2l0ZW0tZGVzYy0xJykudGV4dENvbnRlbnQgPSAnUm9hc3QgZ3VpbmVhIGZvd2wgcGFpcmVkIHdpdGggYSBzd2VldCBzaGFsbG90IHB1csOpZSwgbGVla3MgZW5oYW5jZWQgd2l0aCBsaXF1b3JpY2UgYW5kIG1vcmVscyc7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXRlbS1pbWctMScpLnNyYyA9IG1haW5PbmU7XG5cbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpdGVtLW5hbWUtMicpLnRleHRDb250ZW50ID0gJ0NpbmRlcmZvcmQgTGFtYic7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXRlbS1kZXNjLTInKS50ZXh0Q29udGVudCA9ICdBIGdlbml1cyBtYXN0ZXJwaWVjZSBvZiBleHF1aXNpdGUgbGFtYiBjaHVtcCBidXJzdGluZyB3aXRoIHNwcmluZyBmbGF2b3Vycyc7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXRlbS1pbWctMicpLnNyYyA9IG1haW5Ud287XG5cbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpdGVtLW5hbWUtMycpLnRleHRDb250ZW50ID0gJ0xvbmdob3JuIEJlZWYgU2lybG9pbic7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXRlbS1kZXNjLTMnKS50ZXh0Q29udGVudCA9ICdBZ2VkIGJlZWYgc2lybG9pbiB3aXRoIGNoYXJyZWQgVHJvcGVhIG9uaW9ucywgcGlja2xlZCB3YWxudXQgc2Fsc2EgdmVyZGUgYW5kIGZyZXNoIHdhdGVyY3Jlc3MnO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2l0ZW0taW1nLTMnKS5zcmMgPSBtYWluVGhyZWU7XG5cbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpdGVtLW5hbWUtNCcpLnRleHRDb250ZW50ID0gJ1JvYXN0ZWQgQ29kJztcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpdGVtLWRlc2MtNCcpLnRleHRDb250ZW50ID0gJ1JvYXN0IGNvZCBjb21iaW5pbmcgc3dlZXQgaG9uZXksIGNoYW1wYWduZSwgZ2FybmlzaGVkIHdpdGggY2hpdmVzIGFuZCBnb2ppIGJlcnJpZXMnO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2l0ZW0taW1nLTQnKS5zcmMgPSBtYWluRm91cjtcbiAgICB9O1xuXG4gICAgY29uc3Qgc2V0RGVzc2VydHMgPSAoZSkgPT4ge1xuICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnRlcnMnKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWlucycpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RyaW5rcycpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXRlbS1uYW1lLTEnKS50ZXh0Q29udGVudCA9ICdTaGVlcFxcJ3MgTWlsayBNb3Vzc2UnO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2l0ZW0tZGVzYy0xJykudGV4dENvbnRlbnQgPSAnU3R1bm5pbmcgc2hlZXBcXCdzIG1pbGsgZGVzc2VydCB3aXRoIGEgZHJlYW15IHBhbmRhbiBjdXJkIGFuZCBjYXJhbWVsaXNlZCBwdWZmZWQgcmljZSc7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXRlbS1pbWctMScpLnNyYyA9IGRlc3NlcnRPbmU7XG5cbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpdGVtLW5hbWUtMicpLnRleHRDb250ZW50ID0gJ1N0cmF3YmVycnkgRGVsaWdodCc7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXRlbS1kZXNjLTInKS50ZXh0Q29udGVudCA9ICdTdHJhd2JlcnJ5IGljZSBjcmVhbSwgYmFzaWwgcHVyw6llLCBmcm9tYWdlIGZyYWlzIG1vdXNzZSB3aXRoIGdyZWVuIGFsbW9uZHMnO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2l0ZW0taW1nLTInKS5zcmMgPSBkZXNzZXJ0VHdvO1xuXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXRlbS1uYW1lLTMnKS50ZXh0Q29udGVudCA9ICdTaGVlcOKAmXMgWW9naHVydCBNb3Vzc2UnO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2l0ZW0tZGVzYy0zJykudGV4dENvbnRlbnQgPSAnU2hlZXDigJlzIHlvZ2h1cnQgbW91c3NlLCBsZW1vbiBwYW5kYW4gc3BvbmdlIHdpdGggY2FyYW1lbGlzZWQgcHVmZmVkIHJpY2UnO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2l0ZW0taW1nLTMnKS5zcmMgPSBkZXNzZXJ0VGhyZWU7XG5cbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpdGVtLW5hbWUtNCcpLnRleHRDb250ZW50ID0gJ1dpbnRlciBHYXJkZW4nO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2l0ZW0tZGVzYy00JykudGV4dENvbnRlbnQgPSAnTXVsbGVkIHdpbnRlciBmcnVpdHMgYmVhdXRpZnVsbHkgc3BpY2VkIHdpdGggY2lubmFtb24gaWNlIGNyZWFtJztcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpdGVtLWltZy00Jykuc3JjID0gZGVzc2VydEZvdXI7XG4gICAgfTtcblxuICAgIGNvbnN0IHNldERyaW5rcyA9IChlKSA9PiB7XG4gICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydGVycycpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5zJykuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzc2VydHMnKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcblxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2l0ZW0tbmFtZS0xJykudGV4dENvbnRlbnQgPSAnV2F0ZXInO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2l0ZW0tZGVzYy0xJykudGV4dENvbnRlbnQgPSAnSnVzdCByZWd1bGFyIHdhdGVyIHRoYXQgd2Ugd29uXFwndCBjaGFyZ2UgYSByaWRpY3Vsb3VzIHByaWNlIGZvcic7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXRlbS1pbWctMScpLnNyYyA9IGRyaW5rT25lO1xuXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXRlbS1uYW1lLTInKS50ZXh0Q29udGVudCA9ICdGcmVzaCBKdWljZXMnO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2l0ZW0tZGVzYy0yJykudGV4dENvbnRlbnQgPSAnQW55IGZyZXNoIGZydWl0IGp1aWNlIG9mIHlvdXIgY2hvaWNlIHdpdGggYW55IGNvbWJpbmF0aW9uJztcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpdGVtLWltZy0yJykuc3JjID0gZHJpbmtUd287XG5cbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpdGVtLW5hbWUtMycpLnRleHRDb250ZW50ID0gJ1dpbmVzJztcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpdGVtLWRlc2MtMycpLnRleHRDb250ZW50ID0gJ1RoZSBmaW5lc3Qgd2luZXMgYXZhaWxhYmxlLCB3aGV0aGVyIHlvdVxcJ3JlIGEgd2luZS1lbnRodXNpYXN0LCBvciBjYXN1YWwgZHJpbmtlcic7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXRlbS1pbWctMycpLnNyYyA9IGRyaW5rVGhyZWU7XG5cbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpdGVtLW5hbWUtNCcpLnRleHRDb250ZW50ID0gJ0NvY2t0YWlscyc7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXRlbS1kZXNjLTQnKS50ZXh0Q29udGVudCA9ICdPcmRlciB5b3VyIGZhdm91cml0ZSBjb2NrdGFpbCBtYWRlIGJ5IHNvbWUgb2YgdGhlIHdvcmxkXFwncyBncmVhdGVzdCBiYXJ0ZW5kZXJzJztcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpdGVtLWltZy00Jykuc3JjID0gZHJpbmtGb3VyO1xuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgc2V0U3RhcnRlcnMsXG4gICAgICBzZXRNYWlucyxcbiAgICAgIHNldERlc3NlcnRzLFxuICAgICAgc2V0RHJpbmtzLFxuICAgICAgY3JlYXRlSXRlbXMsXG4gICAgfTtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVNZW51U2VsZWN0ID0gKCkgPT4ge1xuICAgIGNvbnN0IG1lbnVTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51U2VsZWN0LmlkID0gJ21lbnUtc2VsZWN0JztcblxuICAgIGNvbnN0IHN0YXJ0ZXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgc3RhcnRlcnMudGV4dENvbnRlbnQgPSAnc3RhcnRlcnMnO1xuICAgIHN0YXJ0ZXJzLmlkID0gJ3N0YXJ0ZXJzJztcbiAgICBzdGFydGVycy5jbGFzc0xpc3QuYWRkKCdzZWxlY3Rpb24nKTtcbiAgICBzdGFydGVycy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNyZWF0ZU1lbnVJdGVtcygpLnNldFN0YXJ0ZXJzKTtcblxuICAgIGNvbnN0IG1haW5zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgbWFpbnMudGV4dENvbnRlbnQgPSAnbWFpbnMnO1xuICAgIG1haW5zLmlkID0gJ21haW5zJztcbiAgICBtYWlucy5jbGFzc0xpc3QuYWRkKCdzZWxlY3Rpb24nKTtcbiAgICBtYWlucy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNyZWF0ZU1lbnVJdGVtcygpLnNldE1haW5zKTtcblxuICAgIGNvbnN0IGRlc3NlcnRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZGVzc2VydHMudGV4dENvbnRlbnQgPSAnZGVzc2VydHMnO1xuICAgIGRlc3NlcnRzLmlkID0gJ2Rlc3NlcnRzJztcbiAgICBkZXNzZXJ0cy5jbGFzc0xpc3QuYWRkKCdzZWxlY3Rpb24nKTtcbiAgICBkZXNzZXJ0cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNyZWF0ZU1lbnVJdGVtcygpLnNldERlc3NlcnRzKTtcblxuICAgIGNvbnN0IGRyaW5rcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGRyaW5rcy50ZXh0Q29udGVudCA9ICdkcmlua3MnO1xuICAgIGRyaW5rcy5pZCA9ICdkcmlua3MnO1xuICAgIGRyaW5rcy5jbGFzc0xpc3QuYWRkKCdzZWxlY3Rpb24nKTtcbiAgICBkcmlua3MuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjcmVhdGVNZW51SXRlbXMoKS5zZXREcmlua3MpO1xuXG4gICAgbWVudVNlbGVjdC5hcHBlbmRDaGlsZChzdGFydGVycyk7XG4gICAgbWVudVNlbGVjdC5hcHBlbmRDaGlsZChtYWlucyk7XG4gICAgbWVudVNlbGVjdC5hcHBlbmRDaGlsZChkZXNzZXJ0cyk7XG4gICAgbWVudVNlbGVjdC5hcHBlbmRDaGlsZChkcmlua3MpO1xuXG4gICAgcmV0dXJuIG1lbnVTZWxlY3Q7XG4gIH07XG5cbiAgbWVudURpdi5hcHBlbmRDaGlsZChjcmVhdGVNZW51U2VsZWN0KCkpO1xuICBtZW51RGl2LmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVJdGVtcygpLmNyZWF0ZUl0ZW1zKCkpO1xuXG4gIHJldHVybiBtZW51RGl2O1xufTtcblxuY29uc3QgZW5hYmxlSXRlbUhvdmVyID0gKCkgPT4ge1xuICBjb25zdCBpdGVtcyA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaXRlbScpKTtcbiAgaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKGUpID0+IHtcbiAgICAgIGNvbnN0IGN1cnJlbnQgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnaXRlbScpID8gZS50YXJnZXQucGFyZW50RWxlbWVudCA6IGUudGFyZ2V0O1xuICAgICAgY29uc3QgbnVtYmVyID0gY3VycmVudC5pZC5jaGFyQXQoY3VycmVudC5pZC5sZW5ndGggLSAxKTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpdGVtLWltZy0xJykuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgaXRlbS1pbWctJHtudW1iZXJ9YCkuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgfSk7XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIChlKSA9PiB7XG4gICAgICBjb25zdCBjdXJyZW50ID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2l0ZW0nKSA/IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQgOiBlLnRhcmdldDtcbiAgICAgIGNvbnN0IG51bWJlciA9IGN1cnJlbnQuaWQuY2hhckF0KGN1cnJlbnQuaWQubGVuZ3RoIC0gMSk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgaXRlbS1pbWctJHtudW1iZXJ9YCkuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXRlbS1pbWctMScpLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmNvbnN0IGxvYWRNZW51ID0gKCkgPT4ge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKTtcbiAgbWFpbi5pbm5lckhUTUwgPSAnJztcblxuICBzZXRCYWNrZ3JvdW5kKCk7XG4gIHNldE5hdigpO1xuXG4gIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlTWVudSgpKTtcbiAgY29uc3Qgc3RhcnRlcnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnRlcnMnKTtcbiAgc3RhcnRlcnMuY2xpY2soKTtcblxuICBlbmFibGVJdGVtSG92ZXIoKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRNZW51O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5cbmltcG9ydCBpbml0IGZyb20gJy4vaW5pdCc7XG5pbXBvcnQgbG9hZEhvbWUgZnJvbSAnLi9ob21lJztcbmltcG9ydCBsb2FkTWVudSBmcm9tICcuL21lbnUnO1xuXG5pbml0KCk7XG5sb2FkSG9tZSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9