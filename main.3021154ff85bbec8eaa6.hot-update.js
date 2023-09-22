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

/***/ "./src/redusers/reducer.js":
/*!*********************************!*\
  !*** ./src/redusers/reducer.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n\nvar initialState = {\n  product: []\n};\nvar productReducer = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createReducer)({}, function (builder) {\n  builder.addCase('addProduct', function (state, action) {\n    state.product.push(action.payload);\n  }).addCase('removeProduct', function (state, action) {\n    state.product = state.product.filter(function (p) {\n      return p.id !== action.payload.id;\n    });\n  }).addCase('editProduct', function (state, action) {\n    var index = state.product.findIndex(function (item) {\n      return item.id === action.payload.id;\n    });\n    if (index !== -1) {\n      state.product[index].name = action.payload.name;\n      state.product[index].number = action.payload.number;\n    }\n  });\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (productReducer);\n\n/*import { createReducer } from \"@reduxjs/toolkit\"\r\nimport createAddProduct from \"../actions/createAddProduct.js\"\r\nimport createRemoveProduct from \"../actions/createRemoveProduct.js\"\r\nimport createProductEntry from \"../actions/createProductEntry.js\"\r\n\r\nexport default createReducer([], {\r\n    [createAddProduct.type]: (state, action) => [...state.product, action.payload],\r\n    [createRemoveProduct.type]: (state, action) => state.product.filter(p => p.id !== action.payload.id),\r\n    [createProductEntry.type]: (state, action) => state.product?.map(item =>\r\n        item.id === action.payload.id ? { ...item, name: action.payload.name, number: action.payload.number } : item\r\n    )\r\n})*/\n\n//# sourceURL=webpack://test/./src/redusers/reducer.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("eba0d4ae7be517ff581d")
/******/ })();
/******/ 
/******/ }
);