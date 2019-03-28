/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./loaders/css-loader.js!./loaders/less-loader.js!./src/index.less":
/*!*************************************************************************!*\
  !*** ./loaders/css-loader.js!./loaders/less-loader.js!./src/index.less ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const list = [];\r\nlist.push(\"body {\\n  background: red;\\n  background: \");\r\nlist.push('url(' + __webpack_require__(/*! ./google.png */ \"./src/google.png\") + ')');\r\nlist.push(\";\\n  background-repeat: no-repeat;\\n}\\n\");\r\nmodule.exports = list.join('');\n\n//# sourceURL=webpack:///./src/index.less?./loaders/css-loader.js!./loaders/less-loader.js");

/***/ }),

/***/ "./src/google.png":
/*!************************!*\
  !*** ./src/google.png ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"80fa4bcab0351fdccb69c66fb55dcd00.png\"\n\n//# sourceURL=webpack:///./src/google.png?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./index.less */ \"./src/index.less\");\n\nconsole.log(\"index\"); // inline-loader -------------------------------\n// 1. 行内loader, 执行顺序如下(第二次, 全部执行)\n// loader1\n// loader2\n// loader3\n// loader1\n// loader2\n// inline-loader\n// loader3\n// const str = require(\"inline-loader!./a.js\");\n// 2. 行内loader, 执行顺序如下(第二次, 没有 normal)\n// loader1\n// loader2\n// loader3\n// loader1\n// inline-loader\n// loader3\n// const str = require(\"!inline-loader!./a.js\");\n// 3. 行内loader, 执行顺序如下(第二次, 没有 pre + normal)\n// loader1\n// loader2\n// loader3\n// inline-loader\n// loader3\n// const str = require(\"-!inline-loader!./a.js\");\n// 4. 行内loader, 执行顺序如下(第二次, 没有 pre + normal + post)\n// loader1\n// loader2\n// loader3\n// inline-loader\n// const str = require(\"!!inline-loader!./a.js\");\n// babel-loader -------------------------------\n// ES6代码, 通过自己实现的babel-loader进行转换\n// class Person {\n//   constructor(name) {\n//     this.name = name;\n//   }\n//   getName() {\n//     return this.name;\n//   }\n// }\n// const person = new Person(\"devin\");\n// console.log(person.getName());\n// file-loader + url-loader -------------------------------\n// import p from \"./google.png\";\n// const img = document.createElement(\"img\");\n// img.src = p;\n// document.body.appendChild(img);\n// less-loader + css-loader + style-loader -------------------------------\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/index.less":
/*!************************!*\
  !*** ./src/index.less ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n    const style = document.createElement('style');\n    style.innerHTML = __webpack_require__(/*! !../loaders/css-loader.js!../loaders/less-loader.js!./index.less */ \"./loaders/css-loader.js!./loaders/less-loader.js!./src/index.less\");\n    document.body.appendChild(style);\n  \n\n//# sourceURL=webpack:///./src/index.less?");

/***/ })

/******/ });