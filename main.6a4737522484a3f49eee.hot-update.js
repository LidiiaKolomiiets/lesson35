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

/***/ "./src/components/ProductEntry.jsx":
/*!*****************************************!*\
  !*** ./src/components/ProductEntry.jsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _reducers_reducer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/reducer.js */ \"./src/reducers/reducer.js\");\n/* harmony import */ var _images_delete_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/delete.png */ \"./src/components/images/delete.png\");\n/* harmony import */ var _images_edit_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/edit.png */ \"./src/components/images/edit.png\");\n/* harmony import */ var _isValid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./isValid */ \"./src/components/isValid.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(r, l) { var t = null == r ? null : \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t[\"return\"] && (u = t[\"return\"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n// ProductEntry.jsx\n\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (_ref) {\n  var id = _ref.id,\n    name = _ref.name,\n    number = _ref.number;\n  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n    _useState2 = _slicedToArray(_useState, 2),\n    isEditing = _useState2[0],\n    setIsEditing = _useState2[1];\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(name),\n    _useState4 = _slicedToArray(_useState3, 2),\n    editedName = _useState4[0],\n    setEditedName = _useState4[1];\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(number),\n    _useState6 = _slicedToArray(_useState5, 2),\n    editedNumber = _useState6[0],\n    setEditedNumber = _useState6[1];\n  var removeCurrentProduct = function removeCurrentProduct() {\n    dispatch((0,_reducers_reducer_js__WEBPACK_IMPORTED_MODULE_2__.removeProduct)({\n      id: id\n    }));\n  };\n  var saveEditedProduct = function saveEditedProduct() {\n    var editedProd = {\n      id: id,\n      name: editedName,\n      number: editedNumber\n    };\n    if ((0,_isValid__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(editedProd, (0,_reducers_reducer_js__WEBPACK_IMPORTED_MODULE_2__.editProduct)(editedProd))) {\n      setIsEditing(false);\n      dispatch((0,_reducers_reducer_js__WEBPACK_IMPORTED_MODULE_2__.editProduct)(editedProd));\n    }\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"tbody\", null, isEditing ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"tr\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"td\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    type: \"text\",\n    value: editedName,\n    onChange: function onChange(e) {\n      return setEditedName(e.target.value);\n    }\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"td\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    type: \"text\",\n    value: editedNumber,\n    onChange: function onChange(e) {\n      return setEditedNumber(e.target.value);\n    }\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"td\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    onClick: saveEditedProduct\n  }, \"Save\")))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"tr\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"td\", {\n    className: \"table-item\"\n  }, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"td\", {\n    className: \"table-item\"\n  }, number), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"td\", {\n    className: \"table-item\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    onClick: function onClick() {\n      return setIsEditing(true);\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    className: \"edit-icon\",\n    src: _images_edit_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    alt: \"Edit\"\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"td\", {\n    className: \"table-item\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    onClick: removeCurrentProduct\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    className: \"delete-icon\",\n    src: _images_delete_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    alt: \"Delete\"\n  })))));\n});\n\n//# sourceURL=webpack://test/./src/components/ProductEntry.jsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("a665f085b990aef92435")
/******/ })();
/******/ 
/******/ }
);