"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatetest"]("main",{

/***/ "./src/components/isValid.js":
/*!***********************************!*\
  !*** ./src/components/isValid.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n\nvar dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useDispatch)();\nfunction isValid(newProd, action) {\n  var pattern = /^[a-zA-Zа-яА-ЯёЁ]+$/;\n  if (newProd.number <= 1000 && pattern.test(newProd.name)) {\n    return action;\n  } else if (!pattern.test(newProd.name)) {\n    alert(\"Введіть коректні дані в поле Caption\");\n  } else {\n    alert(\"Введіть коректні дані в поле Amount(не більше 1000)\");\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isValid);\n\n//# sourceURL=webpack://test/./src/components/isValid.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("da630c9533dc1293757b")
/******/ })();
/******/ 
/******/ }
);