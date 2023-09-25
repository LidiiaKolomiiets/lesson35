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

/***/ "./src/reducers/reducer.js":
/*!*********************************!*\
  !*** ./src/reducers/reducer.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addProduct: () => (/* binding */ addProduct),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   editProduct: () => (/* binding */ editProduct),\n/* harmony export */   removeProduct: () => (/* binding */ removeProduct)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\n\nvar productSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n  name: 'products',\n  initialState: [],\n  reducers: {\n    addProduct: function addProduct(state, action) {\n      return [].concat(_toConsumableArray(state), [action.payload]);\n    },\n    removeProduct: function removeProduct(state, action) {\n      return state.filter(function (product) {\n        return product.id !== action.payload.id;\n      });\n    },\n    editProduct: function editProduct(state, action) {\n      var _action$payload = action.payload,\n        id = _action$payload.id,\n        name = _action$payload.name,\n        number = _action$payload.number;\n      var productToEdit = state.find(function (product) {\n        return product.id === id;\n      });\n      if (productToEdit) {\n        productToEdit.name = name;\n        productToEdit.number = number;\n      }\n    }\n  }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (productSlice.reducer);\nvar _productSlice$actions = productSlice.actions,\n  addProduct = _productSlice$actions.addProduct,\n  removeProduct = _productSlice$actions.removeProduct,\n  editProduct = _productSlice$actions.editProduct;\n\n\n//# sourceURL=webpack://test/./src/reducers/reducer.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("437a80a7a52a70bb8fdb")
/******/ })();
/******/ 
/******/ }
);