webpackHotUpdate_N_E(2,{

/***/ "./client/components/ChristmasAnimation/components/Santa.jsx":
/*!*******************************************************************!*\
  !*** ./client/components/ChristmasAnimation/components/Santa.jsx ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\nvar _jsxFileName = \"/Users/spacefintechbe02/Desktop/01-document/forbitspace-home/forbitspace/client/components/ChristmasAnimation/components/Santa.jsx\",\n    _this = undefined;\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction _templateObject3() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    width: 33%;\\n    animation: \", \" 5s linear infinite;\\n\\n    img {\\n        width: 100%;\\n        max-width: 100px;\\n    }\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    width: 100%;\\n    display: flex;\\n    flex-wrap: nowrap;\\n    align-items: flex-end;\\n    justify-content: center;\\n    gap: 1rem;\\n    position: relative;\\n    @media (max-width: 576px) {\\n        gap: 3px;\\n    }\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    0% {\\n        transform: rotate(-20deg);\\n    }\\n    25% {\\n        transform: rotate(20deg);\\n    }\\n    50% {\\n        transform: rotate(-20deg);\\n    }\\n    75% {\\n        transform: rotate(20deg);\\n    }\\n    100% {\\n        transform: rotate(-20deg);\\n    }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\nvar Santa = function Santa() {\n  return __jsx(WrapContent, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 9\n    }\n  }, __jsx(WrapImage, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 13\n    }\n  }, __jsx(\"img\", {\n    src: \"../images/design-image/santa.png\",\n    alt: \"noel-image\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 17\n    }\n  })));\n};\n\n_c = Santa;\nvar shake = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__[\"keyframes\"])(_templateObject());\nvar WrapContent = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject2());\n_c2 = WrapContent;\nvar WrapImage = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject3(), shake);\n_c3 = WrapImage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Santa);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"Santa\");\n$RefreshReg$(_c2, \"WrapContent\");\n$RefreshReg$(_c3, \"WrapImage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY2xpZW50L2NvbXBvbmVudHMvQ2hyaXN0bWFzQW5pbWF0aW9uL2NvbXBvbmVudHMvU2FudGEuanN4P2E2NzMiXSwibmFtZXMiOlsiU2FudGEiLCJzaGFrZSIsImtleWZyYW1lcyIsIldyYXBDb250ZW50Iiwic3R5bGVkIiwiZGl2IiwiV3JhcEltYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFDaEIsU0FDSSxNQUFDLFdBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxPQUFHLEVBQUMsa0NBQVQ7QUFBNEMsT0FBRyxFQUFDLFlBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQURKLENBREo7QUFPSCxDQVJEOztLQUFNQSxLO0FBVU4sSUFBTUMsS0FBSyxHQUFHQyxtRUFBSCxtQkFBWDtBQWtCQSxJQUFNQyxXQUFXLEdBQUdDLHlEQUFNLENBQUNDLEdBQVYsb0JBQWpCO01BQU1GLFc7QUFZTixJQUFNRyxTQUFTLEdBQUdGLHlEQUFNLENBQUNDLEdBQVYscUJBRUVKLEtBRkYsQ0FBZjtNQUFNSyxTO0FBVVNOLG9FQUFmIiwiZmlsZSI6Ii4vY2xpZW50L2NvbXBvbmVudHMvQ2hyaXN0bWFzQW5pbWF0aW9uL2NvbXBvbmVudHMvU2FudGEuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCwgeyBrZXlmcmFtZXMgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuY29uc3QgU2FudGEgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFdyYXBDb250ZW50PlxuICAgICAgICAgICAgPFdyYXBJbWFnZT5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4uL2ltYWdlcy9kZXNpZ24taW1hZ2Uvc2FudGEucG5nXCIgYWx0PVwibm9lbC1pbWFnZVwiIC8+XG4gICAgICAgICAgICA8L1dyYXBJbWFnZT5cbiAgICAgICAgPC9XcmFwQ29udGVudD5cbiAgICApO1xufTtcblxuY29uc3Qgc2hha2UgPSBrZXlmcmFtZXNgXG4gICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMjBkZWcpO1xuICAgIH1cbiAgICAyNSUge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyMGRlZyk7XG4gICAgfVxuICAgIDUwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC0yMGRlZyk7XG4gICAgfVxuICAgIDc1JSB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDIwZGVnKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC0yMGRlZyk7XG4gICAgfVxuYDtcblxuY29uc3QgV3JhcENvbnRlbnQgPSBzdHlsZWQuZGl2YFxuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogMXJlbTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gICAgICAgIGdhcDogM3B4O1xuICAgIH1cbmA7XG5jb25zdCBXcmFwSW1hZ2UgPSBzdHlsZWQuZGl2YFxuICAgIHdpZHRoOiAzMyU7XG4gICAgYW5pbWF0aW9uOiAke3NoYWtlfSA1cyBsaW5lYXIgaW5maW5pdGU7XG5cbiAgICBpbWcge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWF4LXdpZHRoOiAxMDBweDtcbiAgICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBTYW50YTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./client/components/ChristmasAnimation/components/Santa.jsx\n");

/***/ })

})