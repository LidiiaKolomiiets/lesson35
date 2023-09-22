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

/***/ "./src/actions/createAddProduct.js":
/*!*****************************************!*\
  !*** ./src/actions/createAddProduct.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (newProd) {\n  return {\n    type: 'addProduct',\n    payload: newProd\n  };\n});\n\n//# sourceURL=webpack://test/./src/actions/createAddProduct.js?");

/***/ }),

/***/ "./src/components/AddProduct.jsx":
/*!***************************************!*\
  !*** ./src/components/AddProduct.jsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _productStyle_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./productStyle.css */ \"./src/components/productStyle.css\");\n/* harmony import */ var _isValid_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isValid.js */ \"./src/components/isValid.js\");\n/* harmony import */ var _actions_createAddProduct_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/createAddProduct.js */ \"./src/actions/createAddProduct.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(r, l) { var t = null == r ? null : \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t[\"return\"] && (u = t[\"return\"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {\n  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),\n    _useState2 = _slicedToArray(_useState, 2),\n    newProduct = _useState2[0],\n    setNewProduct = _useState2[1];\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),\n    _useState4 = _slicedToArray(_useState3, 2),\n    newNumber = _useState4[0],\n    setNewNumber = _useState4[1];\n  var addProduct = function addProduct() {\n    var newProd = {\n      name: newProduct,\n      number: newNumber,\n      id: 'id' + Date.now()\n    };\n    setNewProduct('');\n    setNewNumber('');\n    if ((0,_isValid_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(newProd, action)) {\n      dispatch((0,_actions_createAddProduct_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(newProd));\n    }\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"block\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"label\", {\n    htmlFor: \"caption\"\n  }, \"Caption\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    id: \"caption\",\n    value: newProduct,\n    onChange: function onChange(e) {\n      return setNewProduct(e.target.value);\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"label\", {\n    htmlFor: \"amount\"\n  }, \"Amount\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    type: \"number\",\n    id: \"amount\",\n    value: newNumber,\n    onChange: function onChange(e) {\n      return setNewNumber(e.target.value);\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    onClick: addProduct\n  }, \"Add\"));\n});\n\n//# sourceURL=webpack://test/./src/components/AddProduct.jsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("a65be709a88276215907")
/******/ })();
/******/ 
/******/ }
);