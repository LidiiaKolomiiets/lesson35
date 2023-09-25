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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addProduct: () => (/* binding */ addProduct),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   editProduct: () => (/* binding */ editProduct),\n/* harmony export */   removeProduct: () => (/* binding */ removeProduct)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n// productSlice.js\n\nvar productSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n  name: 'products',\n  initialState: [],\n  // Початковий стан - порожній масив\n  reducers: {\n    addProduct: function addProduct(state, action) {\n      // Додавання нового продукту до стану\n      state.push(action.payload);\n    },\n    removeProduct: function removeProduct(state, action) {\n      // Видалення продукту за його ідентифікатором\n      return state.filter(function (product) {\n        return product.id !== action.payload.id;\n      });\n    },\n    editProduct: function editProduct(state, action) {\n      // Редагування продукту за його ідентифікатором\n      var _action$payload = action.payload,\n        id = _action$payload.id,\n        name = _action$payload.name,\n        number = _action$payload.number;\n      var productToEdit = state.find(function (product) {\n        return product.id === id;\n      });\n      if (productToEdit) {\n        productToEdit.name = name;\n        productToEdit.number = number;\n      }\n    }\n  }\n});\nvar _productSlice$actions = productSlice.actions,\n  addProduct = _productSlice$actions.addProduct,\n  removeProduct = _productSlice$actions.removeProduct,\n  editProduct = _productSlice$actions.editProduct;\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (productSlice.reducer);\n\n//# sourceURL=webpack://test/./src/reducers/reducer.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("2da999ea31d72d285431")
/******/ })();
/******/ 
/******/ }
);