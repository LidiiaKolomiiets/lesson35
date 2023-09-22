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

/***/ "./src/components/Product.jsx":
/*!************************************!*\
  !*** ./src/components/Product.jsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux_es_hooks_useSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux/es/hooks/useSelector */ \"./node_modules/react-redux/es/hooks/useSelector.js\");\n/* harmony import */ var _ProductEntry_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProductEntry.jsx */ \"./src/components/ProductEntry.jsx\");\n/* harmony import */ var _productStyle_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./productStyle.css */ \"./src/components/productStyle.css\");\nfunction _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {\n  var products = (0,react_redux_es_hooks_useSelector__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {\n    return state;\n  });\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"table\", {\n    className: \"table\"\n  }, products.map(function (p) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ProductEntry_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _extends({\n      key: p.id\n    }, p));\n  }));\n});\n\n//# sourceURL=webpack://test/./src/components/Product.jsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("eadd46ab8fc5985a010f")
/******/ })();
/******/ 
/******/ }
);