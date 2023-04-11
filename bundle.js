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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box;\n}\n\nhtml {\n  height: 100%;\n  width: 100%;\n}\n\nbody {\n  font-family: 'Poppins', sans-serif;\n  width: 100%;\n  height: 100%;\n  margin: auto;\n  overflow-y: hidden;\n}\n\nh1, h2, h3, h4, h5, p {\n  margin: 0;\n}\n\nbutton {\n  font-family: 'Poppins', sans-serif;\n}\n\n#content {\n  height: 100%;\n  width: 100%;\n}\n\nheader {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  margin: auto;\n  padding: 50px 50px 0 50px;\n  z-index: 2;\n}\n\nmain {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  margin: auto;\n}\n\n.gallery {\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  align-self: center;\n  width: 100%;\n  min-height: 100%;\n  overflow: hidden;\n}\n\n.gallery-div {\n  position: absolute;\n  width: 50%;\n  height: 600px;\n  text-align: center;\n  top: 100px;\n  left: 50%;\n  margin-left: -25%;\n}\n\n#logo-div {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n}\n\n#home-logo {\n  height: 175px;\n}\n\n#slogan {\n  margin: 0;\n  color: white;\n  font-size: 32px;\n  font-weight: 300;\n}\n\n.line-through {\n  text-decoration: line-through;\n  text-decoration-thickness: 2px;\n}\n\n.underline {\n  text-decoration: underline;\n  text-decoration-thickness: 2px;\n  text-underline-offset: 2px;\n}\n\n.bold {\n  font-weight: 600;\n}\n\n#michelin-div{\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  left: 150%;\n  gap: 20px;\n}\n\n#stars {\n  width: 65%;\n}\n\n#stars-text {\n  color: white;\n  font-size: 24px;\n  font-style: italic;\n  font-weight: 300px;\n  margin: 0;\n  width: 75%;\n}\n\n#review-div {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  left: -150%;\n  gap: 20px;\n}\n\n#review {\n  color: white;\n  margin: 0;\n  font-style: italic;\n  font-size: 42px;\n  font-weight: 300;\n}\n\n#review-name {\n  color: white;\n  margin: 0;\n  font-style: italic;\n  font-size: 32px;\n  font-weight: 400;\n}\n\nnav {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 20px;\n  order: 2;\n}\n\n.nav-btn {\n  color: white;\n  font-size: 28px;\n  font-weight: 300;\n  border: 2px solid white;\n  background: none;\n  padding: 5px 20px;\n  transition: 500ms;\n}\n\n.nav-btn:hover {\n  cursor: pointer;\n  background-color: white;\n  color: black;\n}\n\n.nav-btn.active {\n  background-color: white;\n  color: black;\n}\n\n/* MENU */\n\n.curve-bg {\n  height: 100%;\n  width: 100%;\n  z-index: 1;\n}\n\n.curve-bg-img {\n  position: absolute;\n  left: -55%;\n}\n\n.background-img-div {\n  position: absolute;\n  right: 0;\n  width: 75%;\n  height: 125%;\n  z-index: 0;\n  overflow: hidden;\n}\n\n.background-img {\n  opacity: 100%;\n  transition: 500ms;\n  animation: fade-in 500ms ease-in-out;\n  max-height: 100%;\n}\n\n#corner-logo {\n  height: 115px;\n  fill: black;\n  order: 1;\n  cursor: pointer;\n}\n\n#menu-div {\n  position: absolute;\n  left: 75px;\n  top: 250px;\n\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  z-index: 2;\n  gap: 80px;\n}\n\n#menu-select {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 30px;\n}\n\n#menu-items {\n  display: flex;\n  flex-direction: column;\n\n}\n\n.selection {\n  width: 260px;\n  font-size: 28px;\n  font-weight: 300;\n  border: 3px solid black;\n  background: none;\n  padding: 5px 0 5px 0;\n  transition: 500ms;\n  color: black;\n}\n\n.selection:hover {\n  background-color: black;\n  color: white;\n  cursor: pointer;\n}\n\n.selection.active {\n  background-color: black;\n  color: white;\n}\n\n.item {\n  display: flex;\n  flex-direction: column;\n  width: 450px;\n  padding-bottom: 30px;\n}\n\n.item-name {\n  font-size: 28px;\n  font-weight: 300;\n  color: black;\n}\n\n.item-desc {\n  font-size: 18px;\n  font-weight: 200;\n  font-style: italic;\n  color: black;\n}\n\n.hidden {\n  display: none;\n}\n\n/* CONTACT PAGE */\n\n#contact-img {\n  position: absolute;\n  right: 0;\n}\n\n#info-parent-div {\n  position: absolute;\n  left: 75px;\n  top: 250px;\n\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  width: fit-content;\n\n  width: 750px;\n  height: 450px;\n}\n\n#info-div {\n  \n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  align-items: flex-end;\n  z-index: 2;\n\n}\n\n.info-sub-div {\n  display: flex;\n  flex-direction: column;\n\n  height: 50px;\n  width: 650px;\n  overflow: hidden;\n\n  transition: height 500ms ease-in-out;\n  padding-bottom: 20px;\n}\n\n.info-sub-div:hover {\n  height: 250px;\n}\n\n.info-sub-div.active {\n  height: 250px;\n}\n\n.contact-heading {\n  border: 2px solid black;\n  padding-left: 20px;\n  \n  font-size: 28px;\n  font-weight: 300;\n}\n\n.info-sub-div.active .contact-heading {\n  background-color: black; \n  color: white;\n}\n\n.info-sub-div:hover .contact-heading { \n  background-color: black; \n  color: white;\n}\n\n.contact-text {\n  font-size: 24px;\n  font-weight: 200;\n  font-style: italic;\n  white-space: pre-line;\n\n  padding: 20px 0px 0px 20px;\n}\n\n#support-email:hover {\n  cursor: pointer;\n}\n\n/* KEYFRAMES */\n\n@keyframes fade-in {\n  0% {\n    display: block;\n    opacity: 0%;\n  }\n  100% {\n    opacity: 100%;\n  }\n}\n\n@keyframes grow {\n  0% {\n    scale: 1;\n  }\n  100% {\n    scale: 1.2;\n  }\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');\n\n* {\n  box-sizing: border-box;\n}\n\nhtml {\n  height: 100%;\n  width: 100%;\n}\n\nbody {\n  font-family: 'Poppins', sans-serif;\n  width: 100%;\n  height: 100%;\n  margin: auto;\n  overflow-y: hidden;\n}\n\nh1, h2, h3, h4, h5, p {\n  margin: 0;\n}\n\nbutton {\n  font-family: 'Poppins', sans-serif;\n}\n\n#content {\n  height: 100%;\n  width: 100%;\n}\n\nheader {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  margin: auto;\n  padding: 50px 50px 0 50px;\n  z-index: 2;\n}\n\nmain {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  margin: auto;\n}\n\n.gallery {\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  align-self: center;\n  width: 100%;\n  min-height: 100%;\n  overflow: hidden;\n}\n\n.gallery-div {\n  position: absolute;\n  width: 50%;\n  height: 600px;\n  text-align: center;\n  top: 100px;\n  left: 50%;\n  margin-left: -25%;\n}\n\n#logo-div {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n}\n\n#home-logo {\n  height: 175px;\n}\n\n#slogan {\n  margin: 0;\n  color: white;\n  font-size: 32px;\n  font-weight: 300;\n}\n\n.line-through {\n  text-decoration: line-through;\n  text-decoration-thickness: 2px;\n}\n\n.underline {\n  text-decoration: underline;\n  text-decoration-thickness: 2px;\n  text-underline-offset: 2px;\n}\n\n.bold {\n  font-weight: 600;\n}\n\n#michelin-div{\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  left: 150%;\n  gap: 20px;\n}\n\n#stars {\n  width: 65%;\n}\n\n#stars-text {\n  color: white;\n  font-size: 24px;\n  font-style: italic;\n  font-weight: 300px;\n  margin: 0;\n  width: 75%;\n}\n\n#review-div {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  left: -150%;\n  gap: 20px;\n}\n\n#review {\n  color: white;\n  margin: 0;\n  font-style: italic;\n  font-size: 42px;\n  font-weight: 300;\n}\n\n#review-name {\n  color: white;\n  margin: 0;\n  font-style: italic;\n  font-size: 32px;\n  font-weight: 400;\n}\n\nnav {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 20px;\n  order: 2;\n}\n\n.nav-btn {\n  color: white;\n  font-size: 28px;\n  font-weight: 300;\n  border: 2px solid white;\n  background: none;\n  padding: 5px 20px;\n  transition: 500ms;\n}\n\n.nav-btn:hover {\n  cursor: pointer;\n  background-color: white;\n  color: black;\n}\n\n.nav-btn.active {\n  background-color: white;\n  color: black;\n}\n\n/* MENU */\n\n.curve-bg {\n  height: 100%;\n  width: 100%;\n  z-index: 1;\n}\n\n.curve-bg-img {\n  position: absolute;\n  left: -55%;\n}\n\n.background-img-div {\n  position: absolute;\n  right: 0;\n  width: 75%;\n  height: 125%;\n  z-index: 0;\n  overflow: hidden;\n}\n\n.background-img {\n  opacity: 100%;\n  transition: 500ms;\n  animation: fade-in 500ms ease-in-out;\n  max-height: 100%;\n}\n\n#corner-logo {\n  height: 115px;\n  fill: black;\n  order: 1;\n  cursor: pointer;\n}\n\n#menu-div {\n  position: absolute;\n  left: 75px;\n  top: 250px;\n\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  z-index: 2;\n  gap: 80px;\n}\n\n#menu-select {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 30px;\n}\n\n#menu-items {\n  display: flex;\n  flex-direction: column;\n\n}\n\n.selection {\n  width: 260px;\n  font-size: 28px;\n  font-weight: 300;\n  border: 3px solid black;\n  background: none;\n  padding: 5px 0 5px 0;\n  transition: 500ms;\n  color: black;\n}\n\n.selection:hover {\n  background-color: black;\n  color: white;\n  cursor: pointer;\n}\n\n.selection.active {\n  background-color: black;\n  color: white;\n}\n\n.item {\n  display: flex;\n  flex-direction: column;\n  width: 450px;\n  padding-bottom: 30px;\n}\n\n.item-name {\n  font-size: 28px;\n  font-weight: 300;\n  color: black;\n}\n\n.item-desc {\n  font-size: 18px;\n  font-weight: 200;\n  font-style: italic;\n  color: black;\n}\n\n.hidden {\n  display: none;\n}\n\n/* CONTACT PAGE */\n\n#contact-img {\n  position: absolute;\n  right: 0;\n}\n\n#info-parent-div {\n  position: absolute;\n  left: 75px;\n  top: 250px;\n\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  width: fit-content;\n\n  width: 750px;\n  height: 450px;\n}\n\n#info-div {\n  \n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  align-items: flex-end;\n  z-index: 2;\n\n}\n\n.info-sub-div {\n  display: flex;\n  flex-direction: column;\n\n  height: 50px;\n  width: 650px;\n  overflow: hidden;\n\n  transition: height 500ms ease-in-out;\n  padding-bottom: 20px;\n}\n\n.info-sub-div:hover {\n  height: 250px;\n}\n\n.info-sub-div.active {\n  height: 250px;\n}\n\n.contact-heading {\n  border: 2px solid black;\n  padding-left: 20px;\n  \n  font-size: 28px;\n  font-weight: 300;\n}\n\n.info-sub-div.active .contact-heading {\n  background-color: black; \n  color: white;\n}\n\n.info-sub-div:hover .contact-heading { \n  background-color: black; \n  color: white;\n}\n\n.contact-text {\n  font-size: 24px;\n  font-weight: 200;\n  font-style: italic;\n  white-space: pre-line;\n\n  padding: 20px 0px 0px 20px;\n}\n\n#support-email:hover {\n  cursor: pointer;\n}\n\n/* KEYFRAMES */\n\n@keyframes fade-in {\n  0% {\n    display: block;\n    opacity: 0%;\n  }\n  100% {\n    opacity: 100%;\n  }\n}\n\n@keyframes grow {\n  0% {\n    scale: 1;\n  }\n  100% {\n    scale: 1.2;\n  }\n}"],"sourceRoot":""}]);
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

    const heading = document.createElement('div');
    heading.classList.add('contact-heading');
    heading.textContent = 'Booking';

    const text = document.createElement('p');
    text.classList.add('contact-text');
    text.id = 'booking-div';
    text.textContent = '“refined”\r\n3212 4th av.\r\nNew York City, NY\r\n212 332 2333';

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

    const heading = document.createElement('div');
    heading.classList.add('contact-heading');
    heading.textContent = 'Review';

    const text = document.createElement('p');
    text.classList.add('contact-text');
    text.id = 'review-div';
    text.textContent = '“refined”\r\n3212 4th av.\r\nNew York City, NY\r\n212 332 2333';

    div.appendChild(heading);
    div.appendChild(text);

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

  const reviewDiv = () => {
    const div = document.createElement('div');
    div.id = 'review-div';
    div.classList.add('gallery-div');

    const review = document.createElement('h2');
    review.textContent = '"I couldn\'t believe it. It was magic. Out of this world. This experience is mandatory."';
    review.id = 'review';

    const name = document.createElement('p');
    name.textContent = '- Gordon Ramsey -';
    name.id = 'review-name';

    div.appendChild(review);
    div.appendChild(name);

    return div;
  };

  gallery.appendChild(logoDiv());
  gallery.appendChild(michelinDiv());
  gallery.appendChild(reviewDiv());

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sV0FBVyxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxhQUFhLE1BQU0sWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsV0FBVyxVQUFVLFlBQVksYUFBYSxjQUFjLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFB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RUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxPQUFPO0FBQ2pELEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsT0FBTztBQUNqRDtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWUsUUFBUSxFQUFDOzs7Ozs7O1VDclJ4QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7Ozs7Ozs7Ozs7Ozs7O0FDQXNCOztBQUVJO0FBQ0k7QUFDQTs7QUFFOUIsaURBQUk7QUFDSixpREFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fzc2V0cy9jb250YWN0LWJnLnBuZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYXNzZXRzL2N1cnZlLWJnLnN2ZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYXNzZXRzL2hvbWUtYmcucG5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9hc3NldHMvbG9nby1ibGFjay5zdmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fzc2V0cy9sb2dvLnN2ZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYXNzZXRzL21lbnUtaXRlbXMvZGVzc2VydC0xLndlYnAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fzc2V0cy9tZW51LWl0ZW1zL2Rlc3NlcnQtMi53ZWJwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9hc3NldHMvbWVudS1pdGVtcy9kZXNzZXJ0LTMud2VicCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYXNzZXRzL21lbnUtaXRlbXMvZGVzc2VydC00LndlYnAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fzc2V0cy9tZW51LWl0ZW1zL2RyaW5rLTEuanBnIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9hc3NldHMvbWVudS1pdGVtcy9kcmluay0yLmpwZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYXNzZXRzL21lbnUtaXRlbXMvZHJpbmstMy5qcGciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fzc2V0cy9tZW51LWl0ZW1zL2RyaW5rLTQuanBnIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9hc3NldHMvbWVudS1pdGVtcy9tYWluLTEud2VicCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYXNzZXRzL21lbnUtaXRlbXMvbWFpbi0yLndlYnAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fzc2V0cy9tZW51LWl0ZW1zL21haW4tMy53ZWJwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9hc3NldHMvbWVudS1pdGVtcy9tYWluLTQud2VicCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYXNzZXRzL21lbnUtaXRlbXMvc3RhcnRlci0xLndlYnAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fzc2V0cy9tZW51LWl0ZW1zL3N0YXJ0ZXItMi53ZWJwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9hc3NldHMvbWVudS1pdGVtcy9zdGFydGVyLTMud2VicCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYXNzZXRzL21lbnUtaXRlbXMvc3RhcnRlci00LndlYnAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fzc2V0cy9taWNoZWxpbi1zdGFycy5wbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbml0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOml0YWwsd2dodEAwLDEwMDswLDIwMDswLDMwMDswLDQwMDswLDUwMDswLDYwMDswLDcwMDswLDgwMDswLDkwMDsxLDEwMDsxLDIwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMDsxLDgwMDsxLDkwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmh0bWwge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xcbn1cXG5cXG5oMSwgaDIsIGgzLCBoNCwgaDUsIHAge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBsZWZ0OiAwO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgcGFkZGluZzogNTBweCA1MHB4IDAgNTBweDtcXG4gIHotaW5kZXg6IDI7XFxufVxcblxcbm1haW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG4uZ2FsbGVyeSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLmdhbGxlcnktZGl2IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiA1MCU7XFxuICBoZWlnaHQ6IDYwMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdG9wOiAxMDBweDtcXG4gIGxlZnQ6IDUwJTtcXG4gIG1hcmdpbi1sZWZ0OiAtMjUlO1xcbn1cXG5cXG4jbG9nby1kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDIwcHg7XFxufVxcblxcbiNob21lLWxvZ28ge1xcbiAgaGVpZ2h0OiAxNzVweDtcXG59XFxuXFxuI3Nsb2dhbiB7XFxuICBtYXJnaW46IDA7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDMycHg7XFxuICBmb250LXdlaWdodDogMzAwO1xcbn1cXG5cXG4ubGluZS10aHJvdWdoIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbiAgdGV4dC1kZWNvcmF0aW9uLXRoaWNrbmVzczogMnB4O1xcbn1cXG5cXG4udW5kZXJsaW5lIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgdGV4dC1kZWNvcmF0aW9uLXRoaWNrbmVzczogMnB4O1xcbiAgdGV4dC11bmRlcmxpbmUtb2Zmc2V0OiAycHg7XFxufVxcblxcbi5ib2xkIHtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbiNtaWNoZWxpbi1kaXZ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGxlZnQ6IDE1MCU7XFxuICBnYXA6IDIwcHg7XFxufVxcblxcbiNzdGFycyB7XFxuICB3aWR0aDogNjUlO1xcbn1cXG5cXG4jc3RhcnMtdGV4dCB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBmb250LXdlaWdodDogMzAwcHg7XFxuICBtYXJnaW46IDA7XFxuICB3aWR0aDogNzUlO1xcbn1cXG5cXG4jcmV2aWV3LWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGxlZnQ6IC0xNTAlO1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4jcmV2aWV3IHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGZvbnQtc2l6ZTogNDJweDtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxufVxcblxcbiNyZXZpZXctbmFtZSB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBtYXJnaW46IDA7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBmb250LXNpemU6IDMycHg7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG5uYXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMjBweDtcXG4gIG9yZGVyOiAyO1xcbn1cXG5cXG4ubmF2LWJ0biB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDI4cHg7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgcGFkZGluZzogNXB4IDIwcHg7XFxuICB0cmFuc2l0aW9uOiA1MDBtcztcXG59XFxuXFxuLm5hdi1idG46aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi5uYXYtYnRuLmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLyogTUVOVSAqL1xcblxcbi5jdXJ2ZS1iZyB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbi5jdXJ2ZS1iZy1pbWcge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogLTU1JTtcXG59XFxuXFxuLmJhY2tncm91bmQtaW1nLWRpdiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMDtcXG4gIHdpZHRoOiA3NSU7XFxuICBoZWlnaHQ6IDEyNSU7XFxuICB6LWluZGV4OiAwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLmJhY2tncm91bmQtaW1nIHtcXG4gIG9wYWNpdHk6IDEwMCU7XFxuICB0cmFuc2l0aW9uOiA1MDBtcztcXG4gIGFuaW1hdGlvbjogZmFkZS1pbiA1MDBtcyBlYXNlLWluLW91dDtcXG4gIG1heC1oZWlnaHQ6IDEwMCU7XFxufVxcblxcbiNjb3JuZXItbG9nbyB7XFxuICBoZWlnaHQ6IDExNXB4O1xcbiAgZmlsbDogYmxhY2s7XFxuICBvcmRlcjogMTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI21lbnUtZGl2IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDc1cHg7XFxuICB0b3A6IDI1MHB4O1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB6LWluZGV4OiAyO1xcbiAgZ2FwOiA4MHB4O1xcbn1cXG5cXG4jbWVudS1zZWxlY3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDMwcHg7XFxufVxcblxcbiNtZW51LWl0ZW1zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbn1cXG5cXG4uc2VsZWN0aW9uIHtcXG4gIHdpZHRoOiAyNjBweDtcXG4gIGZvbnQtc2l6ZTogMjhweDtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBwYWRkaW5nOiA1cHggMCA1cHggMDtcXG4gIHRyYW5zaXRpb246IDUwMG1zO1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uc2VsZWN0aW9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc2VsZWN0aW9uLmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLml0ZW0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogNDUwcHg7XFxuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcXG59XFxuXFxuLml0ZW0tbmFtZSB7XFxuICBmb250LXNpemU6IDI4cHg7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uaXRlbS1kZXNjIHtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGZvbnQtd2VpZ2h0OiAyMDA7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyogQ09OVEFDVCBQQUdFICovXFxuXFxuI2NvbnRhY3QtaW1nIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAwO1xcbn1cXG5cXG4jaW5mby1wYXJlbnQtZGl2IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDc1cHg7XFxuICB0b3A6IDI1MHB4O1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuXFxuICB3aWR0aDogNzUwcHg7XFxuICBoZWlnaHQ6IDQ1MHB4O1xcbn1cXG5cXG4jaW5mby1kaXYge1xcbiAgXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICB6LWluZGV4OiAyO1xcblxcbn1cXG5cXG4uaW5mby1zdWItZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgd2lkdGg6IDY1MHB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG5cXG4gIHRyYW5zaXRpb246IGhlaWdodCA1MDBtcyBlYXNlLWluLW91dDtcXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4uaW5mby1zdWItZGl2OmhvdmVyIHtcXG4gIGhlaWdodDogMjUwcHg7XFxufVxcblxcbi5pbmZvLXN1Yi1kaXYuYWN0aXZlIHtcXG4gIGhlaWdodDogMjUwcHg7XFxufVxcblxcbi5jb250YWN0LWhlYWRpbmcge1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuICBcXG4gIGZvbnQtc2l6ZTogMjhweDtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxufVxcblxcbi5pbmZvLXN1Yi1kaXYuYWN0aXZlIC5jb250YWN0LWhlYWRpbmcge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7IFxcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uaW5mby1zdWItZGl2OmhvdmVyIC5jb250YWN0LWhlYWRpbmcgeyBcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrOyBcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmNvbnRhY3QtdGV4dCB7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBmb250LXdlaWdodDogMjAwO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xcblxcbiAgcGFkZGluZzogMjBweCAwcHggMHB4IDIwcHg7XFxufVxcblxcbiNzdXBwb3J0LWVtYWlsOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyogS0VZRlJBTUVTICovXFxuXFxuQGtleWZyYW1lcyBmYWRlLWluIHtcXG4gIDAlIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG9wYWNpdHk6IDAlO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDEwMCU7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgZ3JvdyB7XFxuICAwJSB7XFxuICAgIHNjYWxlOiAxO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHNjYWxlOiAxLjI7XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxXQUFXO0VBQ1gsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLE1BQU07RUFDTixRQUFRO0VBQ1IsT0FBTztFQUNQLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIs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QVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQSxpQkFBaUI7O0FBRWpCO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsVUFBVTs7RUFFVixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDJCQUEyQjtFQUMzQixrQkFBa0I7O0VBRWxCLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLFVBQVU7O0FBRVo7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCOztFQUV0QixZQUFZO0VBQ1osWUFBWTtFQUNaLGdCQUFnQjs7RUFFaEIsb0NBQW9DO0VBQ3BDLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixrQkFBa0I7O0VBRWxCLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjs7RUFFckIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQSxjQUFjOztBQUVkO0VBQ0U7SUFDRSxjQUFjO0lBQ2QsV0FBVztFQUNiO0VBQ0E7SUFDRSxhQUFhO0VBQ2Y7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsUUFBUTtFQUNWO0VBQ0E7SUFDRSxVQUFVO0VBQ1o7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOml0YWwsd2dodEAwLDEwMDswLDIwMDswLDMwMDswLDQwMDswLDUwMDswLDYwMDswLDcwMDswLDgwMDswLDkwMDsxLDEwMDsxLDIwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMDsxLDgwMDsxLDkwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmh0bWwge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xcbn1cXG5cXG5oMSwgaDIsIGgzLCBoNCwgaDUsIHAge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBsZWZ0OiAwO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgcGFkZGluZzogNTBweCA1MHB4IDAgNTBweDtcXG4gIHotaW5kZXg6IDI7XFxufVxcblxcbm1haW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG4uZ2FsbGVyeSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLmdhbGxlcnktZGl2IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiA1MCU7XFxuICBoZWlnaHQ6IDYwMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdG9wOiAxMDBweDtcXG4gIGxlZnQ6IDUwJTtcXG4gIG1hcmdpbi1sZWZ0OiAtMjUlO1xcbn1cXG5cXG4jbG9nby1kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDIwcHg7XFxufVxcblxcbiNob21lLWxvZ28ge1xcbiAgaGVpZ2h0OiAxNzVweDtcXG59XFxuXFxuI3Nsb2dhbiB7XFxuICBtYXJnaW46IDA7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDMycHg7XFxuICBmb250LXdlaWdodDogMzAwO1xcbn1cXG5cXG4ubGluZS10aHJvdWdoIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbiAgdGV4dC1kZWNvcmF0aW9uLXRoaWNrbmVzczogMnB4O1xcbn1cXG5cXG4udW5kZXJsaW5lIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgdGV4dC1kZWNvcmF0aW9uLXRoaWNrbmVzczogMnB4O1xcbiAgdGV4dC11bmRlcmxpbmUtb2Zmc2V0OiAycHg7XFxufVxcblxcbi5ib2xkIHtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbiNtaWNoZWxpbi1kaXZ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGxlZnQ6IDE1MCU7XFxuICBnYXA6IDIwcHg7XFxufVxcblxcbiNzdGFycyB7XFxuICB3aWR0aDogNjUlO1xcbn1cXG5cXG4jc3RhcnMtdGV4dCB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBmb250LXdlaWdodDogMzAwcHg7XFxuICBtYXJnaW46IDA7XFxuICB3aWR0aDogNzUlO1xcbn1cXG5cXG4jcmV2aWV3LWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGxlZnQ6IC0xNTAlO1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4jcmV2aWV3IHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGZvbnQtc2l6ZTogNDJweDtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxufVxcblxcbiNyZXZpZXctbmFtZSB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBtYXJnaW46IDA7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBmb250LXNpemU6IDMycHg7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG5uYXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMjBweDtcXG4gIG9yZGVyOiAyO1xcbn1cXG5cXG4ubmF2LWJ0biB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDI4cHg7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgcGFkZGluZzogNXB4IDIwcHg7XFxuICB0cmFuc2l0aW9uOiA1MDBtcztcXG59XFxuXFxuLm5hdi1idG46aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi5uYXYtYnRuLmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLyogTUVOVSAqL1xcblxcbi5jdXJ2ZS1iZyB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbi5jdXJ2ZS1iZy1pbWcge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogLTU1JTtcXG59XFxuXFxuLmJhY2tncm91bmQtaW1nLWRpdiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMDtcXG4gIHdpZHRoOiA3NSU7XFxuICBoZWlnaHQ6IDEyNSU7XFxuICB6LWluZGV4OiAwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLmJhY2tncm91bmQtaW1nIHtcXG4gIG9wYWNpdHk6IDEwMCU7XFxuICB0cmFuc2l0aW9uOiA1MDBtcztcXG4gIGFuaW1hdGlvbjogZmFkZS1pbiA1MDBtcyBlYXNlLWluLW91dDtcXG4gIG1heC1oZWlnaHQ6IDEwMCU7XFxufVxcblxcbiNjb3JuZXItbG9nbyB7XFxuICBoZWlnaHQ6IDExNXB4O1xcbiAgZmlsbDogYmxhY2s7XFxuICBvcmRlcjogMTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI21lbnUtZGl2IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDc1cHg7XFxuICB0b3A6IDI1MHB4O1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB6LWluZGV4OiAyO1xcbiAgZ2FwOiA4MHB4O1xcbn1cXG5cXG4jbWVudS1zZWxlY3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDMwcHg7XFxufVxcblxcbiNtZW51LWl0ZW1zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbn1cXG5cXG4uc2VsZWN0aW9uIHtcXG4gIHdpZHRoOiAyNjBweDtcXG4gIGZvbnQtc2l6ZTogMjhweDtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBwYWRkaW5nOiA1cHggMCA1cHggMDtcXG4gIHRyYW5zaXRpb246IDUwMG1zO1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uc2VsZWN0aW9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc2VsZWN0aW9uLmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLml0ZW0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogNDUwcHg7XFxuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcXG59XFxuXFxuLml0ZW0tbmFtZSB7XFxuICBmb250LXNpemU6IDI4cHg7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uaXRlbS1kZXNjIHtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGZvbnQtd2VpZ2h0OiAyMDA7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyogQ09OVEFDVCBQQUdFICovXFxuXFxuI2NvbnRhY3QtaW1nIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAwO1xcbn1cXG5cXG4jaW5mby1wYXJlbnQtZGl2IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDc1cHg7XFxuICB0b3A6IDI1MHB4O1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuXFxuICB3aWR0aDogNzUwcHg7XFxuICBoZWlnaHQ6IDQ1MHB4O1xcbn1cXG5cXG4jaW5mby1kaXYge1xcbiAgXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICB6LWluZGV4OiAyO1xcblxcbn1cXG5cXG4uaW5mby1zdWItZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgd2lkdGg6IDY1MHB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG5cXG4gIHRyYW5zaXRpb246IGhlaWdodCA1MDBtcyBlYXNlLWluLW91dDtcXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4uaW5mby1zdWItZGl2OmhvdmVyIHtcXG4gIGhlaWdodDogMjUwcHg7XFxufVxcblxcbi5pbmZvLXN1Yi1kaXYuYWN0aXZlIHtcXG4gIGhlaWdodDogMjUwcHg7XFxufVxcblxcbi5jb250YWN0LWhlYWRpbmcge1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuICBcXG4gIGZvbnQtc2l6ZTogMjhweDtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxufVxcblxcbi5pbmZvLXN1Yi1kaXYuYWN0aXZlIC5jb250YWN0LWhlYWRpbmcge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7IFxcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uaW5mby1zdWItZGl2OmhvdmVyIC5jb250YWN0LWhlYWRpbmcgeyBcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrOyBcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmNvbnRhY3QtdGV4dCB7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBmb250LXdlaWdodDogMjAwO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xcblxcbiAgcGFkZGluZzogMjBweCAwcHggMHB4IDIwcHg7XFxufVxcblxcbiNzdXBwb3J0LWVtYWlsOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyogS0VZRlJBTUVTICovXFxuXFxuQGtleWZyYW1lcyBmYWRlLWluIHtcXG4gIDAlIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG9wYWNpdHk6IDAlO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDEwMCU7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgZ3JvdyB7XFxuICAwJSB7XFxuICAgIHNjYWxlOiAxO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHNjYWxlOiAxLjI7XFxuICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFzc2V0cy9pbWFnZXMvY29udGFjdC1iZy5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL2ltYWdlcy9jdXJ2ZS1iZy5zdmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL2ltYWdlcy9ob21lLWJnLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhc3NldHMvaW1hZ2VzL2xvZ28tYmxhY2suc3ZnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFzc2V0cy9pbWFnZXMvbG9nby5zdmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL2ltYWdlcy9kZXNzZXJ0LTEud2VicFwiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhc3NldHMvaW1hZ2VzL2Rlc3NlcnQtMi53ZWJwXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFzc2V0cy9pbWFnZXMvZGVzc2VydC0zLndlYnBcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL2ltYWdlcy9kZXNzZXJ0LTQud2VicFwiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhc3NldHMvaW1hZ2VzL2RyaW5rLTEuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFzc2V0cy9pbWFnZXMvZHJpbmstMi5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL2ltYWdlcy9kcmluay0zLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhc3NldHMvaW1hZ2VzL2RyaW5rLTQuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFzc2V0cy9pbWFnZXMvbWFpbi0xLndlYnBcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL2ltYWdlcy9tYWluLTIud2VicFwiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhc3NldHMvaW1hZ2VzL21haW4tMy53ZWJwXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFzc2V0cy9pbWFnZXMvbWFpbi00LndlYnBcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL2ltYWdlcy9zdGFydGVyLTEud2VicFwiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhc3NldHMvaW1hZ2VzL3N0YXJ0ZXItMi53ZWJwXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFzc2V0cy9pbWFnZXMvc3RhcnRlci0zLndlYnBcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL2ltYWdlcy9zdGFydGVyLTQud2VicFwiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhc3NldHMvaW1hZ2VzL21pY2hlbGluLXN0YXJzLnBuZ1wiOyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgY3VydmVCZyBmcm9tICcuL2Fzc2V0cy9jdXJ2ZS1iZy5zdmcnO1xuaW1wb3J0IGxvZ29CbGFja1N2ZyBmcm9tICcuL2Fzc2V0cy9sb2dvLWJsYWNrLnN2Zyc7XG5pbXBvcnQgbG9hZEhvbWUgZnJvbSAnLi9ob21lJztcblxuaW1wb3J0IGNvbnRhY3RCZyBmcm9tICcuL2Fzc2V0cy9jb250YWN0LWJnLnBuZyc7XG5cbmNvbnN0IHNldEJhY2tncm91bmQgPSAoKSA9PiB7XG4gIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZCA9ICcnO1xuXG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpO1xuXG4gIGNvbnN0IGN1cnZlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGN1cnZlRGl2LmNsYXNzTGlzdC5hZGQoJ2N1cnZlLWJnJyk7XG5cbiAgY29uc3QgY3VydmVJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgY3VydmVJbWcuc3JjID0gY3VydmVCZztcbiAgY3VydmVJbWcuY2xhc3NMaXN0LmFkZCgnY3VydmUtYmctaW1nJyk7XG5cbiAgY29uc3QgYmFja2dyb3VuZEltZ0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBiYWNrZ3JvdW5kSW1nRGl2LmNsYXNzTGlzdC5hZGQoJ2JhY2tncm91bmQtaW1nLWRpdicpO1xuXG4gIGNvbnN0IGJhY2tncm91bmRJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgYmFja2dyb3VuZEltZy5pZCA9ICdjb250YWN0LWltZyc7XG4gIGJhY2tncm91bmRJbWcuc3JjID0gY29udGFjdEJnO1xuICBiYWNrZ3JvdW5kSW1nLmNsYXNzTGlzdC5hZGQoJ2JhY2tncm91bmQtaW1nJyk7XG5cbiAgYmFja2dyb3VuZEltZ0Rpdi5hcHBlbmRDaGlsZChiYWNrZ3JvdW5kSW1nKTtcbiAgY3VydmVEaXYuYXBwZW5kQ2hpbGQoY3VydmVJbWcpO1xuICBtYWluLmFwcGVuZENoaWxkKGN1cnZlRGl2KTtcbiAgbWFpbi5hcHBlbmRDaGlsZChiYWNrZ3JvdW5kSW1nRGl2KTtcbn07XG5cbmNvbnN0IHNldE5hdiA9ICgpID0+IHtcbiAgaWYgKCFkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29ybmVyLWxvZ28nKSkge1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkZXInKTtcbiAgICBoZWFkZXIuc3R5bGUuanVzdGlmeUNvbnRlbnQgPSAnc3BhY2UtYmV0d2Vlbic7XG5cbiAgICBjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgbG9nby5zcmMgPSBsb2dvQmxhY2tTdmc7XG4gICAgbG9nby5pZCA9ICdjb3JuZXItbG9nbyc7XG5cbiAgICBsb2dvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbG9hZEhvbWUpO1xuXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGxvZ28pO1xuICB9XG4gIGNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudS1idG4nKTtcbiAgbWVudUJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbn07XG5cbmNvbnN0IGNyZWF0ZUluZm8gPSAoKSA9PiB7XG4gIGNvbnN0IGluZm9QYXJlbnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaW5mb1BhcmVudERpdi5pZCA9ICdpbmZvLXBhcmVudC1kaXYnO1xuXG4gIGNvbnN0IGluZm9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaW5mb0Rpdi5pZCA9ICdpbmZvLWRpdic7XG5cbiAgY29uc3QgY3JlYXRlQWRkcmVzc0RpdiA9ICgpID0+IHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuY2xhc3NMaXN0LmFkZCgnaW5mby1zdWItZGl2Jyk7XG4gICAgZGl2LmlkID0gJ2FkZHJlc3MtZGl2JztcblxuICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkaW5nLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtaGVhZGluZycpO1xuICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSAnQWRkcmVzcyc7XG5cbiAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHRleHQuY2xhc3NMaXN0LmFkZCgnY29udGFjdC10ZXh0Jyk7XG4gICAgdGV4dC5pZCA9ICdhZGRyZXNzLWRpdic7XG4gICAgdGV4dC50ZXh0Q29udGVudCA9ICfigJxyZWZpbmVk4oCdXFxyXFxuMzIxMiA0dGggYXYuXFxyXFxuTmV3IFlvcmsgQ2l0eSwgTllcXHJcXG4yMTIgMzMyIDIzMzMnO1xuXG4gICAgZGl2LmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuICAgIGRpdi5hcHBlbmRDaGlsZCh0ZXh0KTtcblxuICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcblxuICAgIHJldHVybiBkaXY7XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlQm9va2luZ0RpdiA9ICgpID0+IHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuY2xhc3NMaXN0LmFkZCgnaW5mby1zdWItZGl2Jyk7XG5cbiAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZGluZy5jbGFzc0xpc3QuYWRkKCdjb250YWN0LWhlYWRpbmcnKTtcbiAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gJ0Jvb2tpbmcnO1xuXG4gICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB0ZXh0LmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtdGV4dCcpO1xuICAgIHRleHQuaWQgPSAnYm9va2luZy1kaXYnO1xuICAgIHRleHQudGV4dENvbnRlbnQgPSAn4oCccmVmaW5lZOKAnVxcclxcbjMyMTIgNHRoIGF2Llxcclxcbk5ldyBZb3JrIENpdHksIE5ZXFxyXFxuMjEyIDMzMiAyMzMzJztcblxuICAgIGRpdi5hcHBlbmRDaGlsZChoZWFkaW5nKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQodGV4dCk7XG5cbiAgICByZXR1cm4gZGl2O1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZUlucXVpcmllc0RpdiA9ICgpID0+IHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuY2xhc3NMaXN0LmFkZCgnaW5mby1zdWItZGl2Jyk7XG5cbiAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZGluZy5jbGFzc0xpc3QuYWRkKCdjb250YWN0LWhlYWRpbmcnKTtcbiAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gJ0lucXVpcmllcyc7XG5cbiAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHRleHQuY2xhc3NMaXN0LmFkZCgnY29udGFjdC10ZXh0Jyk7XG4gICAgdGV4dC5pZCA9ICdpbnF1aXJpZXMtZGl2JztcbiAgICB0ZXh0LmlubmVySFRNTCA9ICdGb3IgZnVydGhlciBpbnF1aXJpZXMsIHNlbmQgdXMgYW4gZW1haWwgYXRcXHJcXG48c3BhbiBpZD1cInN1cHBvcnQtZW1haWxcIiBjbGFzcz1cImJvbGRcIj5zdXBwb3J0QHJlZmluZWQuY29tPC9zcGFuPlxcclxcblJlc3BvbnNlcyBjYW4gdGFrZSB1cCB0byBhIGZldyBob3Vycy5cXHJcXG5UaGFuayB5b3UhJztcblxuICAgIGRpdi5hcHBlbmRDaGlsZChoZWFkaW5nKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQodGV4dCk7XG5cbiAgICByZXR1cm4gZGl2O1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZVJldmlld0RpdiA9ICgpID0+IHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuY2xhc3NMaXN0LmFkZCgnaW5mby1zdWItZGl2Jyk7XG5cbiAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZGluZy5jbGFzc0xpc3QuYWRkKCdjb250YWN0LWhlYWRpbmcnKTtcbiAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gJ1Jldmlldyc7XG5cbiAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHRleHQuY2xhc3NMaXN0LmFkZCgnY29udGFjdC10ZXh0Jyk7XG4gICAgdGV4dC5pZCA9ICdyZXZpZXctZGl2JztcbiAgICB0ZXh0LnRleHRDb250ZW50ID0gJ+KAnHJlZmluZWTigJ1cXHJcXG4zMjEyIDR0aCBhdi5cXHJcXG5OZXcgWW9yayBDaXR5LCBOWVxcclxcbjIxMiAzMzIgMjMzMyc7XG5cbiAgICBkaXYuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG4gICAgZGl2LmFwcGVuZENoaWxkKHRleHQpO1xuXG4gICAgcmV0dXJuIGRpdjtcbiAgfTtcblxuICBpbmZvRGl2LmFwcGVuZENoaWxkKGNyZWF0ZUFkZHJlc3NEaXYoKSk7XG4gIGluZm9EaXYuYXBwZW5kQ2hpbGQoY3JlYXRlQm9va2luZ0RpdigpKTtcbiAgaW5mb0Rpdi5hcHBlbmRDaGlsZChjcmVhdGVJbnF1aXJpZXNEaXYoKSk7XG4gIGluZm9EaXYuYXBwZW5kQ2hpbGQoY3JlYXRlUmV2aWV3RGl2KCkpO1xuXG4gIGluZm9QYXJlbnREaXYuYXBwZW5kQ2hpbGQoaW5mb0Rpdik7XG5cbiAgcmV0dXJuIGluZm9QYXJlbnREaXY7XG59O1xuXG5jb25zdCBlbmFibGVEZWZhdWx0SG92ZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGluZm9TdWJEaXZzID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdpbmZvLXN1Yi1kaXYnKSk7XG4gIGluZm9TdWJEaXZzLmZvckVhY2goKGUpID0+IHtcbiAgICBlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsICgpID0+IHtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRyZXNzLWRpdicpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIH0pO1xuICAgIGUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoKSA9PiB7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkcmVzcy1kaXYnKS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgY29uc3QgdXJsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1cHBvcnQtZW1haWwnKTtcbiAgdXJsLm9uY2xpY2sgPSBmdW5jdGlvbiBjb3B5KCkge1xuICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KHVybC50ZXh0Q29udGVudCk7XG4gICAgYWxlcnQoJ0VtYWlsIGNvcGllZCEnKTtcbiAgfTtcbn07XG5cbmNvbnN0IGxvYWRDb250YWN0ID0gKCkgPT4ge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKTtcbiAgbWFpbi5pbm5lckhUTUwgPSAnJztcblxuICBzZXRCYWNrZ3JvdW5kKCk7XG4gIHNldE5hdigpO1xuXG4gIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlSW5mbygpKTtcbiAgZW5hYmxlRGVmYXVsdEhvdmVyKCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBsb2FkQ29udGFjdDtcbiIsImltcG9ydCBob21lQmcgZnJvbSAnLi9hc3NldHMvaG9tZS1iZy5wbmcnO1xuaW1wb3J0IGxvZ29TdmcgZnJvbSAnLi9hc3NldHMvbG9nby5zdmcnO1xuaW1wb3J0IHN0YXJzUG5nIGZyb20gJy4vYXNzZXRzL21pY2hlbGluLXN0YXJzLnBuZyc7XG5cbmZ1bmN0aW9uIHNldEJhY2tncm91bmQoKSB7XG4gIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZCA9IGB1cmwoJHtob21lQmd9KWA7XG59XG5cbmZ1bmN0aW9uIHNldE5hdigpIHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlcicpO1xuICBoZWFkZXIuc3R5bGUuanVzdGlmeUNvbnRlbnQgPSAnY2VudGVyJztcblxuICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nvcm5lci1sb2dvJykpIHtcbiAgICBjb25zdCBjb3JuZXJMb2dvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nvcm5lci1sb2dvJyk7XG4gICAgY29ybmVyTG9nby5yZW1vdmUoKTtcbiAgfVxuXG4gIGNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudS1idG4nKTtcbiAgY29uc3QgY29udGFjdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWN0LWJ0bicpO1xuICBtZW51QnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICBjb250YWN0QnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVHYWxsZXJ5KCkge1xuICBjb25zdCBnYWxsZXJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGdhbGxlcnkuY2xhc3NMaXN0LmFkZCgnZ2FsbGVyeScpO1xuICBnYWxsZXJ5LmlkID0gJ2dhbGxlcnknO1xuXG4gIGNvbnN0IGxvZ29EaXYgPSAoKSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LmlkID0gJ2xvZ28tZGl2JztcbiAgICBkaXYuY2xhc3NMaXN0LmFkZCgnZ2FsbGVyeS1kaXYnKTtcblxuICAgIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBsb2dvLnNyYyA9IGxvZ29Tdmc7XG4gICAgbG9nby5pZCA9ICdob21lLWxvZ28nO1xuXG4gICAgY29uc3Qgc2xvZ2FuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHNsb2dhbi5pZCA9ICdzbG9nYW4nO1xuICAgIHNsb2dhbi5pbm5lckhUTUwgPSAnPHNwYW4gY2xhc3M9XCJ1bmRlcmxpbmVcIj5JdFxcJ3Mgbm90PC9zcGFuPiA8c3BhbiBjbGFzcz1cImxpbmUtdGhyb3VnaFwiPmp1c3QgZm9vZDwvc3Bhbj4uIEl0XFwncyA8c3BhbiBjbGFzcz1cImJvbGRcIj5hcnQ8L3NwYW4+Lic7XG5cbiAgICBkaXYuYXBwZW5kQ2hpbGQobG9nbyk7XG4gICAgZGl2LmFwcGVuZENoaWxkKHNsb2dhbik7XG5cbiAgICByZXR1cm4gZGl2O1xuICB9O1xuXG4gIGNvbnN0IG1pY2hlbGluRGl2ID0gKCkgPT4ge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5pZCA9ICdtaWNoZWxpbi1kaXYnO1xuICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdnYWxsZXJ5LWRpdicpO1xuXG4gICAgY29uc3Qgc3RhcnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBzdGFycy5zcmMgPSBzdGFyc1BuZztcbiAgICBzdGFycy5pZCA9ICdzdGFycyc7XG5cbiAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHRleHQuaW5uZXJIVE1MID0gJ0Jvb2sgYW4gb3Bwb3J0dW5pdHkgdG8gZGluZSBpbiB0aGUgd29ybGRcXCdzIDxzcGFuIGNsYXNzPVwiYm9sZFwiPmZpcnN0PC9zcGFuPiAzIE1pY2hlbGluIFN0YXIgcmVzdGF1cmFudC4nO1xuICAgIHRleHQuaWQgPSAnc3RhcnMtdGV4dCc7XG5cbiAgICBkaXYuYXBwZW5kQ2hpbGQoc3RhcnMpO1xuICAgIGRpdi5hcHBlbmRDaGlsZCh0ZXh0KTtcblxuICAgIHJldHVybiBkaXY7XG4gIH07XG5cbiAgY29uc3QgcmV2aWV3RGl2ID0gKCkgPT4ge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5pZCA9ICdyZXZpZXctZGl2JztcbiAgICBkaXYuY2xhc3NMaXN0LmFkZCgnZ2FsbGVyeS1kaXYnKTtcblxuICAgIGNvbnN0IHJldmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgcmV2aWV3LnRleHRDb250ZW50ID0gJ1wiSSBjb3VsZG5cXCd0IGJlbGlldmUgaXQuIEl0IHdhcyBtYWdpYy4gT3V0IG9mIHRoaXMgd29ybGQuIFRoaXMgZXhwZXJpZW5jZSBpcyBtYW5kYXRvcnkuXCInO1xuICAgIHJldmlldy5pZCA9ICdyZXZpZXcnO1xuXG4gICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBuYW1lLnRleHRDb250ZW50ID0gJy0gR29yZG9uIFJhbXNleSAtJztcbiAgICBuYW1lLmlkID0gJ3Jldmlldy1uYW1lJztcblxuICAgIGRpdi5hcHBlbmRDaGlsZChyZXZpZXcpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChuYW1lKTtcblxuICAgIHJldHVybiBkaXY7XG4gIH07XG5cbiAgZ2FsbGVyeS5hcHBlbmRDaGlsZChsb2dvRGl2KCkpO1xuICBnYWxsZXJ5LmFwcGVuZENoaWxkKG1pY2hlbGluRGl2KCkpO1xuICBnYWxsZXJ5LmFwcGVuZENoaWxkKHJldmlld0RpdigpKTtcblxuICByZXR1cm4gZ2FsbGVyeTtcbn1cblxuY29uc3QgZW5hYmxlU2xpZGVzID0gKCkgPT4ge1xuICBjb25zdCBnYWxsZXJ5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbGxlcnknKTtcbiAgY29uc3QgZ2FsbGVyeURpdnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2dhbGxlcnktZGl2JykpO1xuICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgZ2FsbGVyeURpdnMuZm9yRWFjaCgoeCkgPT4ge1xuICAgICAgaWYgKHgub2Zmc2V0TGVmdCA8IDApIHtcbiAgICAgICAgeC5hbmltYXRlKHtcbiAgICAgICAgICBsZWZ0OiAnMTUwJScsXG4gICAgICAgIH0sIHsgZHVyYXRpb246IDAsIGZpbGw6ICdmb3J3YXJkcycgfSk7XG4gICAgICB9IGVsc2UgaWYgKHgub2Zmc2V0TGVmdCA+IGdhbGxlcnkub2Zmc2V0V2lkdGgpIHtcbiAgICAgICAgeC5hbmltYXRlKHtcbiAgICAgICAgICBsZWZ0OiAnNTAlJyxcbiAgICAgICAgfSwgeyBkdXJhdGlvbjogMTAwMCwgZmlsbDogJ2ZvcndhcmRzJywgZWFzaW5nOiAnZWFzZS1pbi1vdXQnIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgeC5hbmltYXRlKHtcbiAgICAgICAgICBsZWZ0OiAnLTE1MCUnLFxuICAgICAgICB9LCB7IGR1cmF0aW9uOiAxMDAwLCBmaWxsOiAnZm9yd2FyZHMnLCBlYXNpbmc6ICdlYXNlLWluLW91dCcgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sIDQwMDApO1xufTtcblxuZnVuY3Rpb24gbG9hZEhvbWUoKSB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpO1xuICBtYWluLmlubmVySFRNTCA9ICcnO1xuXG4gIHNldEJhY2tncm91bmQoKTtcbiAgc2V0TmF2KCk7XG5cbiAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVHYWxsZXJ5KCkpO1xuICBlbmFibGVTbGlkZXMoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZEhvbWU7XG5cbi8qIGdhbGxlcnlEaXZzLmZvckVhY2goKGUpID0+IHtcbiAgY29uc29sZS5sb2coJ2FkZGluZycpO1xuICBlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGdhbGxlcnlEaXZzLmZvckVhY2goKHgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKHgub2Zmc2V0TGVmdCk7XG4gICAgICBpZiAoeC5vZmZzZXRMZWZ0IDwgMCkge1xuICAgICAgICBjb25zb2xlLmxvZygnc2V0dGluZyB0byAxNTAlJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKHgpO1xuICAgICAgICB4LmFuaW1hdGUoe1xuICAgICAgICAgIGxlZnQ6ICcxNTAlJyxcbiAgICAgICAgfSwgeyBkdXJhdGlvbjogMCwgZmlsbDogJ2ZvcndhcmRzJyB9KTtcbiAgICAgICAgY29uc29sZS5sb2coeC5zdHlsZS5sZWZ0KTtcbiAgICAgIH0gZWxzZSBpZiAoeC5vZmZzZXRMZWZ0ID4gZ2FsbGVyeS5vZmZzZXRXaWR0aCkge1xuICAgICAgICBjb25zb2xlLmxvZygnYWRkaW5nJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKHgpO1xuICAgICAgICB4LmFuaW1hdGUoe1xuICAgICAgICAgIGxlZnQ6ICc1MCUnLFxuICAgICAgICB9LCB7IGR1cmF0aW9uOiA1MDAsIGZpbGw6ICdmb3J3YXJkcycgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZygncmVtb3ZpbmcnKTtcbiAgICAgICAgY29uc29sZS5sb2coeCk7XG4gICAgICAgIHguYW5pbWF0ZSh7XG4gICAgICAgICAgbGVmdDogJy0xNTAlJyxcbiAgICAgICAgfSwgeyBkdXJhdGlvbjogNTAwLCBmaWxsOiAnZm9yd2FyZHMnIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn0pOyAqL1xuIiwiaW1wb3J0IGxvYWRNZW51IGZyb20gJy4vbWVudSc7XG5pbXBvcnQgbG9hZENvbnRhY3QgZnJvbSAnLi9jb250YWN0JztcblxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCkge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgaGVhZGVyLmlkID0gJ2hlYWRlcic7XG5cbiAgZnVuY3Rpb24gY3JlYXRlTmF2KCkge1xuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuICAgIG5hdi5pZCA9ICduYXYnO1xuXG4gICAgY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIG1lbnVCdG4udGV4dENvbnRlbnQgPSAnbWVudSc7XG4gICAgbWVudUJ0bi5jbGFzc0xpc3QuYWRkKCduYXYtYnRuJyk7XG4gICAgbWVudUJ0bi5pZCA9ICdtZW51LWJ0bic7XG4gICAgbWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGlmICghbWVudUJ0bi5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgICAgIGxvYWRNZW51KCk7XG4gICAgICAgIG1lbnVCdG4uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBjb250YWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29udGFjdEJ0bi50ZXh0Q29udGVudCA9ICdjb250YWN0JztcbiAgICBjb250YWN0QnRuLmNsYXNzTGlzdC5hZGQoJ25hdi1idG4nKTtcbiAgICBjb250YWN0QnRuLmlkID0gJ2NvbnRhY3QtYnRuJztcbiAgICBjb250YWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgaWYgKCFjb250YWN0QnRuLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcbiAgICAgICAgbG9hZENvbnRhY3QoKTtcbiAgICAgICAgY29udGFjdEJ0bi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIG5hdi5hcHBlbmRDaGlsZChtZW51QnRuKTtcbiAgICBuYXYuYXBwZW5kQ2hpbGQoY29udGFjdEJ0bik7XG5cbiAgICByZXR1cm4gbmF2O1xuICB9XG5cbiAgaGVhZGVyLmFwcGVuZENoaWxkKGNyZWF0ZU5hdigpKTtcblxuICByZXR1cm4gaGVhZGVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNYWluKCkge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICBtYWluLmlkID0gJ21haW4nO1xuXG4gIHJldHVybiBtYWluO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVGb290ZXIoKSB7XG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuICBmb290ZXIuaWQgPSAnZm9vdGVyJztcblxuICByZXR1cm4gZm9vdGVyO1xufVxuXG5mdW5jdGlvbiBpbml0KCkge1xuICBjb25zdCBkaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG4gIGRpdi5hcHBlbmRDaGlsZChjcmVhdGVIZWFkZXIoKSk7XG4gIGRpdi5hcHBlbmRDaGlsZChjcmVhdGVNYWluKCkpO1xuICBkaXYuYXBwZW5kQ2hpbGQoY3JlYXRlRm9vdGVyKCkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBpbml0O1xuIiwiaW1wb3J0IGN1cnZlQmcgZnJvbSAnLi9hc3NldHMvY3VydmUtYmcuc3ZnJztcbmltcG9ydCBsb2dvQmxhY2tTdmcgZnJvbSAnLi9hc3NldHMvbG9nby1ibGFjay5zdmcnO1xuaW1wb3J0IGxvYWRIb21lIGZyb20gJy4vaG9tZSc7XG5cbmltcG9ydCBzdGFydGVyT25lIGZyb20gJy4vYXNzZXRzL21lbnUtaXRlbXMvc3RhcnRlci0xLndlYnAnO1xuaW1wb3J0IHN0YXJ0ZXJUd28gZnJvbSAnLi9hc3NldHMvbWVudS1pdGVtcy9zdGFydGVyLTIud2VicCc7XG5pbXBvcnQgc3RhcnRlclRocmVlIGZyb20gJy4vYXNzZXRzL21lbnUtaXRlbXMvc3RhcnRlci0zLndlYnAnO1xuaW1wb3J0IHN0YXJ0ZXJGb3VyIGZyb20gJy4vYXNzZXRzL21lbnUtaXRlbXMvc3RhcnRlci00LndlYnAnO1xuXG5pbXBvcnQgbWFpbk9uZSBmcm9tICcuL2Fzc2V0cy9tZW51LWl0ZW1zL21haW4tMS53ZWJwJztcbmltcG9ydCBtYWluVHdvIGZyb20gJy4vYXNzZXRzL21lbnUtaXRlbXMvbWFpbi0yLndlYnAnO1xuaW1wb3J0IG1haW5UaHJlZSBmcm9tICcuL2Fzc2V0cy9tZW51LWl0ZW1zL21haW4tMy53ZWJwJztcbmltcG9ydCBtYWluRm91ciBmcm9tICcuL2Fzc2V0cy9tZW51LWl0ZW1zL21haW4tNC53ZWJwJztcblxuaW1wb3J0IGRlc3NlcnRPbmUgZnJvbSAnLi9hc3NldHMvbWVudS1pdGVtcy9kZXNzZXJ0LTEud2VicCc7XG5pbXBvcnQgZGVzc2VydFR3byBmcm9tICcuL2Fzc2V0cy9tZW51LWl0ZW1zL2Rlc3NlcnQtMi53ZWJwJztcbmltcG9ydCBkZXNzZXJ0VGhyZWUgZnJvbSAnLi9hc3NldHMvbWVudS1pdGVtcy9kZXNzZXJ0LTMud2VicCc7XG5pbXBvcnQgZGVzc2VydEZvdXIgZnJvbSAnLi9hc3NldHMvbWVudS1pdGVtcy9kZXNzZXJ0LTQud2VicCc7XG5cbmltcG9ydCBkcmlua09uZSBmcm9tICcuL2Fzc2V0cy9tZW51LWl0ZW1zL2RyaW5rLTEuanBnJztcbmltcG9ydCBkcmlua1R3byBmcm9tICcuL2Fzc2V0cy9tZW51LWl0ZW1zL2RyaW5rLTIuanBnJztcbmltcG9ydCBkcmlua1RocmVlIGZyb20gJy4vYXNzZXRzL21lbnUtaXRlbXMvZHJpbmstMy5qcGcnO1xuaW1wb3J0IGRyaW5rRm91ciBmcm9tICcuL2Fzc2V0cy9tZW51LWl0ZW1zL2RyaW5rLTQuanBnJztcblxuY29uc3Qgc2V0QmFja2dyb3VuZCA9ICgpID0+IHtcbiAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kID0gJyc7XG5cbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJyk7XG5cbiAgY29uc3QgY3VydmVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY3VydmVEaXYuY2xhc3NMaXN0LmFkZCgnY3VydmUtYmcnKTtcblxuICBjb25zdCBjdXJ2ZUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBjdXJ2ZUltZy5zcmMgPSBjdXJ2ZUJnO1xuICBjdXJ2ZUltZy5jbGFzc0xpc3QuYWRkKCdjdXJ2ZS1iZy1pbWcnKTtcblxuICBjb25zdCBpdGVtSW1nRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGl0ZW1JbWdEaXYuaWQgPSAnaXRlbS1pbWctZGl2JztcbiAgaXRlbUltZ0Rpdi5jbGFzc0xpc3QuYWRkKCdiYWNrZ3JvdW5kLWltZy1kaXYnKTtcblxuICBjdXJ2ZURpdi5hcHBlbmRDaGlsZChjdXJ2ZUltZyk7XG4gIG1haW4uYXBwZW5kQ2hpbGQoY3VydmVEaXYpO1xuICBtYWluLmFwcGVuZENoaWxkKGl0ZW1JbWdEaXYpO1xufTtcblxuY29uc3Qgc2V0TmF2ID0gKCkgPT4ge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhZGVyJyk7XG4gIGhlYWRlci5zdHlsZS5qdXN0aWZ5Q29udGVudCA9ICdzcGFjZS1iZXR3ZWVuJztcblxuICBpZiAoIWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb3JuZXItbG9nbycpKSB7XG4gICAgY29uc3QgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGxvZ28uc3JjID0gbG9nb0JsYWNrU3ZnO1xuICAgIGxvZ28uaWQgPSAnY29ybmVyLWxvZ28nO1xuXG4gICAgbG9nby5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxvYWRIb21lKTtcblxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChsb2dvKTtcbiAgfVxuXG4gIGNvbnN0IGNvbnRhY3RCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFjdC1idG4nKTtcbiAgY29udGFjdEJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbn07XG5cbmNvbnN0IGNyZWF0ZU1lbnUgPSAoKSA9PiB7XG4gIGNvbnN0IG1lbnVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWVudURpdi5pZCA9ICdtZW51LWRpdic7XG5cbiAgY29uc3QgaXRlbUltZ0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpdGVtLWltZy1kaXYnKTtcblxuICBjb25zdCBjcmVhdGVNZW51SXRlbXMgPSAoKSA9PiB7XG4gICAgY29uc3QgY3JlYXRlSXRlbXMgPSAoKSA9PiB7XG4gICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGRpdi5pZCA9ICdtZW51LWl0ZW1zJztcbiAgICAgIGNvbnNvbGUubG9nKGRpdik7XG5cbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDQ7IGkgKz0gMSkge1xuICAgICAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnaXRlbScpO1xuICAgICAgICBpdGVtLmlkID0gYGl0ZW0tJHtpfWA7XG5cbiAgICAgICAgY29uc3QgaXRlbU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGl0ZW1OYW1lLmNsYXNzTGlzdC5hZGQoJ2l0ZW0tbmFtZScpO1xuICAgICAgICBpdGVtTmFtZS5pZCA9IGBpdGVtLW5hbWUtJHtpfWA7XG5cbiAgICAgICAgY29uc3QgaXRlbURlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGl0ZW1EZXNjLmNsYXNzTGlzdC5hZGQoJ2l0ZW0tZGVzYycpO1xuICAgICAgICBpdGVtRGVzYy5pZCA9IGBpdGVtLWRlc2MtJHtpfWA7XG5cbiAgICAgICAgY29uc3QgaXRlbUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBpdGVtSW1nLmNsYXNzTGlzdC5hZGQoJ2JhY2tncm91bmQtaW1nJyk7XG4gICAgICAgIGl0ZW1JbWcuaWQgPSBgaXRlbS1pbWctJHtpfWA7XG4gICAgICAgIGlmIChpICE9PSAxKSBpdGVtSW1nLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuXG4gICAgICAgIGl0ZW0uYXBwZW5kQ2hpbGQoaXRlbU5hbWUpO1xuICAgICAgICBpdGVtLmFwcGVuZENoaWxkKGl0ZW1EZXNjKTtcbiAgICAgICAgaXRlbUltZ0Rpdi5hcHBlbmRDaGlsZChpdGVtSW1nKTtcblxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoaXRlbSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZGl2O1xuICAgIH07XG5cbiAgICBjb25zdCBzZXRTdGFydGVycyA9IChlKSA9PiB7XG4gICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWlucycpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc3NlcnRzJykuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHJpbmtzJykuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG5cbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpdGVtLW5hbWUtMScpLnRleHRDb250ZW50ID0gJ0NvbmZpdGVkIEZvaWUgR3Jhcyc7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXRlbS1kZXNjLTEnKS50ZXh0Q29udGVudCA9ICdGb2llIEdyYXMgd2l0aCBicmFtbGV5IGFwcGxlIGNvbXBvdGUgYW5kIHdhbG51dCBjcnVuY2gnO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2l0ZW0taW1nLTEnKS5zcmMgPSBzdGFydGVyT25lO1xuXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXRlbS1uYW1lLTInKS50ZXh0Q29udGVudCA9ICdTZWEgb2YgT3JhbmdlJztcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpdGVtLWRlc2MtMicpLnRleHRDb250ZW50ID0gJ05hdGl2ZSBsb2JzdGVyLCByb2FzdGVkIGhlcml0YWdlIGNhcnJvdHMsIGNhcnJvdCBwdXLDqWUgYW5kIGJ1dHRlcm1pbGsgcHVyw6llJztcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpdGVtLWltZy0yJykuc3JjID0gc3RhcnRlclR3bztcblxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2l0ZW0tbmFtZS0zJykudGV4dENvbnRlbnQgPSAnSGFrZSBGaWxsZXQnO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2l0ZW0tZGVzYy0zJykudGV4dENvbnRlbnQgPSAnSGFrZSBmaWxsZXQgcGVyZmVjdGx5IHVuZGVycGlubmVkIGJ5IGFuIGVhcnRoeSBnb2xkZW4gYmVldHJvb3QgYW5kIHJhZGlzaCBzYWxhZCc7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXRlbS1pbWctMycpLnNyYyA9IHN0YXJ0ZXJUaHJlZTtcblxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2l0ZW0tbmFtZS00JykudGV4dENvbnRlbnQgPSAnQ2F1bGlmbG93ZXIgVGV4dHVyZXMnO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2l0ZW0tZGVzYy00JykudGV4dENvbnRlbnQgPSAnQSBjYXVsaWZsb3dlciByZWNpcGUgYWxsIGFib3V0IGNvbG91ciBhbmQgdGV4dHVyZSwgYSBwZXJmZWN0IGFwcGV0aXNlciBiZWZvcmUgeW91ciBtYWluIG1lYWwnO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2l0ZW0taW1nLTQnKS5zcmMgPSBzdGFydGVyRm91cjtcbiAgICB9O1xuXG4gICAgY29uc3Qgc2V0TWFpbnMgPSAoZSkgPT4ge1xuICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnRlcnMnKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNzZXJ0cycpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RyaW5rcycpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXRlbS1uYW1lLTEnKS50ZXh0Q29udGVudCA9ICdHdWluZWEgRm93bCc7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXRlbS1kZXNjLTEnKS50ZXh0Q29udGVudCA9ICdSb2FzdCBndWluZWEgZm93bCBwYWlyZWQgd2l0aCBhIHN3ZWV0IHNoYWxsb3QgcHVyw6llLCBsZWVrcyBlbmhhbmNlZCB3aXRoIGxpcXVvcmljZSBhbmQgbW9yZWxzJztcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpdGVtLWltZy0xJykuc3JjID0gbWFpbk9uZTtcblxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2l0ZW0tbmFtZS0yJykudGV4dENvbnRlbnQgPSAnQ2luZGVyZm9yZCBMYW1iJztcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpdGVtLWRlc2MtMicpLnRleHRDb250ZW50ID0gJ0EgZ2VuaXVzIG1hc3RlcnBpZWNlIG9mIGV4cXVpc2l0ZSBsYW1iIGNodW1wIGJ1cnN0aW5nIHdpdGggc3ByaW5nIGZsYXZvdXJzJztcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpdGVtLWltZy0yJykuc3JjID0gbWFpblR3bztcblxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2l0ZW0tbmFtZS0zJykudGV4dENvbnRlbnQgPSAnTG9uZ2hvcm4gQmVlZiBTaXJsb2luJztcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpdGVtLWRlc2MtMycpLnRleHRDb250ZW50ID0gJ0FnZWQgYmVlZiBzaXJsb2luIHdpdGggY2hhcnJlZCBUcm9wZWEgb25pb25zLCBwaWNrbGVkIHdhbG51dCBzYWxzYSB2ZXJkZSBhbmQgZnJlc2ggd2F0ZXJjcmVzcyc7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXRlbS1pbWctMycpLnNyYyA9IG1haW5UaHJlZTtcblxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2l0ZW0tbmFtZS00JykudGV4dENvbnRlbnQgPSAnUm9hc3RlZCBDb2QnO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2l0ZW0tZGVzYy00JykudGV4dENvbnRlbnQgPSAnUm9hc3QgY29kIGNvbWJpbmluZyBzd2VldCBob25leSwgY2hhbXBhZ25lLCBnYXJuaXNoZWQgd2l0aCBjaGl2ZXMgYW5kIGdvamkgYmVycmllcyc7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXRlbS1pbWctNCcpLnNyYyA9IG1haW5Gb3VyO1xuICAgIH07XG5cbiAgICBjb25zdCBzZXREZXNzZXJ0cyA9IChlKSA9PiB7XG4gICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydGVycycpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5zJykuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHJpbmtzJykuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG5cbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpdGVtLW5hbWUtMScpLnRleHRDb250ZW50ID0gJ1NoZWVwXFwncyBNaWxrIE1vdXNzZSc7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXRlbS1kZXNjLTEnKS50ZXh0Q29udGVudCA9ICdTdHVubmluZyBzaGVlcFxcJ3MgbWlsayBkZXNzZXJ0IHdpdGggYSBkcmVhbXkgcGFuZGFuIGN1cmQgYW5kIGNhcmFtZWxpc2VkIHB1ZmZlZCByaWNlJztcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpdGVtLWltZy0xJykuc3JjID0gZGVzc2VydE9uZTtcblxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2l0ZW0tbmFtZS0yJykudGV4dENvbnRlbnQgPSAnU3RyYXdiZXJyeSBEZWxpZ2h0JztcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpdGVtLWRlc2MtMicpLnRleHRDb250ZW50ID0gJ1N0cmF3YmVycnkgaWNlIGNyZWFtLCBiYXNpbCBwdXLDqWUsIGZyb21hZ2UgZnJhaXMgbW91c3NlIHdpdGggZ3JlZW4gYWxtb25kcyc7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXRlbS1pbWctMicpLnNyYyA9IGRlc3NlcnRUd287XG5cbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpdGVtLW5hbWUtMycpLnRleHRDb250ZW50ID0gJ1NoZWVw4oCZcyBZb2dodXJ0IE1vdXNzZSc7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXRlbS1kZXNjLTMnKS50ZXh0Q29udGVudCA9ICdTaGVlcOKAmXMgeW9naHVydCBtb3Vzc2UsIGxlbW9uIHBhbmRhbiBzcG9uZ2Ugd2l0aCBjYXJhbWVsaXNlZCBwdWZmZWQgcmljZSc7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXRlbS1pbWctMycpLnNyYyA9IGRlc3NlcnRUaHJlZTtcblxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2l0ZW0tbmFtZS00JykudGV4dENvbnRlbnQgPSAnV2ludGVyIEdhcmRlbic7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXRlbS1kZXNjLTQnKS50ZXh0Q29udGVudCA9ICdNdWxsZWQgd2ludGVyIGZydWl0cyBiZWF1dGlmdWxseSBzcGljZWQgd2l0aCBjaW5uYW1vbiBpY2UgY3JlYW0nO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2l0ZW0taW1nLTQnKS5zcmMgPSBkZXNzZXJ0Rm91cjtcbiAgICB9O1xuXG4gICAgY29uc3Qgc2V0RHJpbmtzID0gKGUpID0+IHtcbiAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXJ0ZXJzJykuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbnMnKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNzZXJ0cycpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXRlbS1uYW1lLTEnKS50ZXh0Q29udGVudCA9ICdXYXRlcic7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXRlbS1kZXNjLTEnKS50ZXh0Q29udGVudCA9ICdKdXN0IHJlZ3VsYXIgd2F0ZXIgdGhhdCB3ZSB3b25cXCd0IGNoYXJnZSBhIHJpZGljdWxvdXMgcHJpY2UgZm9yJztcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpdGVtLWltZy0xJykuc3JjID0gZHJpbmtPbmU7XG5cbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpdGVtLW5hbWUtMicpLnRleHRDb250ZW50ID0gJ0ZyZXNoIEp1aWNlcyc7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXRlbS1kZXNjLTInKS50ZXh0Q29udGVudCA9ICdBbnkgZnJlc2ggZnJ1aXQganVpY2Ugb2YgeW91ciBjaG9pY2Ugd2l0aCBhbnkgY29tYmluYXRpb24nO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2l0ZW0taW1nLTInKS5zcmMgPSBkcmlua1R3bztcblxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2l0ZW0tbmFtZS0zJykudGV4dENvbnRlbnQgPSAnV2luZXMnO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2l0ZW0tZGVzYy0zJykudGV4dENvbnRlbnQgPSAnVGhlIGZpbmVzdCB3aW5lcyBhdmFpbGFibGUsIHdoZXRoZXIgeW91XFwncmUgYSB3aW5lLWVudGh1c2lhc3QsIG9yIGNhc3VhbCBkcmlua2VyJztcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpdGVtLWltZy0zJykuc3JjID0gZHJpbmtUaHJlZTtcblxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2l0ZW0tbmFtZS00JykudGV4dENvbnRlbnQgPSAnQ29ja3RhaWxzJztcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpdGVtLWRlc2MtNCcpLnRleHRDb250ZW50ID0gJ09yZGVyIHlvdXIgZmF2b3VyaXRlIGNvY2t0YWlsIG1hZGUgYnkgc29tZSBvZiB0aGUgd29ybGRcXCdzIGdyZWF0ZXN0IGJhcnRlbmRlcnMnO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2l0ZW0taW1nLTQnKS5zcmMgPSBkcmlua0ZvdXI7XG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICBzZXRTdGFydGVycyxcbiAgICAgIHNldE1haW5zLFxuICAgICAgc2V0RGVzc2VydHMsXG4gICAgICBzZXREcmlua3MsXG4gICAgICBjcmVhdGVJdGVtcyxcbiAgICB9O1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZU1lbnVTZWxlY3QgPSAoKSA9PiB7XG4gICAgY29uc3QgbWVudVNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVTZWxlY3QuaWQgPSAnbWVudS1zZWxlY3QnO1xuXG4gICAgY29uc3Qgc3RhcnRlcnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBzdGFydGVycy50ZXh0Q29udGVudCA9ICdzdGFydGVycyc7XG4gICAgc3RhcnRlcnMuaWQgPSAnc3RhcnRlcnMnO1xuICAgIHN0YXJ0ZXJzLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGlvbicpO1xuICAgIHN0YXJ0ZXJzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY3JlYXRlTWVudUl0ZW1zKCkuc2V0U3RhcnRlcnMpO1xuXG4gICAgY29uc3QgbWFpbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBtYWlucy50ZXh0Q29udGVudCA9ICdtYWlucyc7XG4gICAgbWFpbnMuaWQgPSAnbWFpbnMnO1xuICAgIG1haW5zLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGlvbicpO1xuICAgIG1haW5zLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY3JlYXRlTWVudUl0ZW1zKCkuc2V0TWFpbnMpO1xuXG4gICAgY29uc3QgZGVzc2VydHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBkZXNzZXJ0cy50ZXh0Q29udGVudCA9ICdkZXNzZXJ0cyc7XG4gICAgZGVzc2VydHMuaWQgPSAnZGVzc2VydHMnO1xuICAgIGRlc3NlcnRzLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGlvbicpO1xuICAgIGRlc3NlcnRzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY3JlYXRlTWVudUl0ZW1zKCkuc2V0RGVzc2VydHMpO1xuXG4gICAgY29uc3QgZHJpbmtzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZHJpbmtzLnRleHRDb250ZW50ID0gJ2RyaW5rcyc7XG4gICAgZHJpbmtzLmlkID0gJ2RyaW5rcyc7XG4gICAgZHJpbmtzLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGlvbicpO1xuICAgIGRyaW5rcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNyZWF0ZU1lbnVJdGVtcygpLnNldERyaW5rcyk7XG5cbiAgICBtZW51U2VsZWN0LmFwcGVuZENoaWxkKHN0YXJ0ZXJzKTtcbiAgICBtZW51U2VsZWN0LmFwcGVuZENoaWxkKG1haW5zKTtcbiAgICBtZW51U2VsZWN0LmFwcGVuZENoaWxkKGRlc3NlcnRzKTtcbiAgICBtZW51U2VsZWN0LmFwcGVuZENoaWxkKGRyaW5rcyk7XG5cbiAgICByZXR1cm4gbWVudVNlbGVjdDtcbiAgfTtcblxuICBtZW51RGl2LmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVTZWxlY3QoKSk7XG4gIG1lbnVEaXYuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUl0ZW1zKCkuY3JlYXRlSXRlbXMoKSk7XG5cbiAgcmV0dXJuIG1lbnVEaXY7XG59O1xuXG5jb25zdCBlbmFibGVJdGVtSG92ZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGl0ZW1zID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdpdGVtJykpO1xuICBpdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoZSkgPT4ge1xuICAgICAgY29uc3QgY3VycmVudCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdpdGVtJykgPyBlLnRhcmdldC5wYXJlbnRFbGVtZW50IDogZS50YXJnZXQ7XG4gICAgICBjb25zdCBudW1iZXIgPSBjdXJyZW50LmlkLmNoYXJBdChjdXJyZW50LmlkLmxlbmd0aCAtIDEpO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2l0ZW0taW1nLTEnKS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBpdGVtLWltZy0ke251bWJlcn1gKS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICB9KTtcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgKGUpID0+IHtcbiAgICAgIGNvbnN0IGN1cnJlbnQgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnaXRlbScpID8gZS50YXJnZXQucGFyZW50RWxlbWVudCA6IGUudGFyZ2V0O1xuICAgICAgY29uc3QgbnVtYmVyID0gY3VycmVudC5pZC5jaGFyQXQoY3VycmVudC5pZC5sZW5ndGggLSAxKTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBpdGVtLWltZy0ke251bWJlcn1gKS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpdGVtLWltZy0xJykuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuY29uc3QgbG9hZE1lbnUgPSAoKSA9PiB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpO1xuICBtYWluLmlubmVySFRNTCA9ICcnO1xuXG4gIHNldEJhY2tncm91bmQoKTtcbiAgc2V0TmF2KCk7XG5cbiAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVNZW51KCkpO1xuICBjb25zdCBzdGFydGVycyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydGVycycpO1xuICBzdGFydGVycy5jbGljaygpO1xuXG4gIGVuYWJsZUl0ZW1Ib3ZlcigpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbG9hZE1lbnU7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZXMuY3NzJztcblxuaW1wb3J0IGluaXQgZnJvbSAnLi9pbml0JztcbmltcG9ydCBsb2FkSG9tZSBmcm9tICcuL2hvbWUnO1xuaW1wb3J0IGxvYWRNZW51IGZyb20gJy4vbWVudSc7XG5cbmluaXQoKTtcbmxvYWRIb21lKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=