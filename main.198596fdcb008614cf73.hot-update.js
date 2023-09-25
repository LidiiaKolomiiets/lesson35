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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }\nfunction _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\n/*import { createReducer } from \"@reduxjs/toolkit\"\r\nimport createAddProduct from \"../actions/createAddProduct.js\"\r\nimport createRemoveProduct from \"../actions/createRemoveProduct.js\"\r\nimport createProductEntry from \"../actions/createProductEntry.js\"\r\n\r\nexport default createReducer([], {\r\n    [createAddProduct.type]: (state, action) => {state.product.push(action.payload)},\r\n    [createRemoveProduct.type]: (state, action) => {state.product = state.product.filter((p) => p.id !== action.payload.id)},\r\n    [createProductEntry.type]: (state, action) => {state.product = state.product.map((item) =>\r\n        item.id === action.payload.id\r\n          ? { ...item, name: action.payload.name, number: action.payload.number }\r\n          : item\r\n      )}\r\n})\r\n*/\n\n\nvar initialState = [];\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {\n  var productSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"product\",\n    initialState: initialState,\n    reducers: {\n      addProduct: function addProduct(state, action) {\n        state.push(action.payload);\n      },\n      removeProduct: function removeProduct(state, action) {\n        return state.filter(function (p) {\n          return p.id !== action.payload.id;\n        });\n      },\n      updateProductEntry: function updateProductEntry(state, action) {\n        return state.map(function (item) {\n          return item.id === action.payload.id ? _objectSpread(_objectSpread({}, item), {}, {\n            name: action.payload.name,\n            number: action.payload.number\n          }) : item;\n        });\n      }\n    }\n  });\n});\n\n//export const { addProduct, removeProduct, updateProductEntry } = productSlice.actions;\n//export default productSlice.reducer;\n\n//# sourceURL=webpack://test/./src/reducers/reducer.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("5212b1f8221c431259e7")
/******/ })();
/******/ 
/******/ }
);