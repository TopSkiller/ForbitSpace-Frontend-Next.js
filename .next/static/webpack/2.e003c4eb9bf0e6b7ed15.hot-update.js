webpackHotUpdate_N_E(2,{

/***/ "./client/components/Home/components/Routing.jsx":
/*!*******************************************************!*\
  !*** ./client/components/Home/components/Routing.jsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\nvar _jsxFileName = \"/Users/spacedevnguyen/Desktop/Documents/forbitspace/forbitspace/client/components/Home/components/Routing.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction _templateObject3() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    display: inline-block;\\n    height: auto;\\n    width: 100%;\\n    border-radius: 24px;\\n    /* background-color: yellow; */\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    white-space: nowrap;\\n    /* transition: ease 1s; */\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    margin: 0 auto;\\n    overflow: hidden;\\n    max-width: 750px;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\nvar images = [{\n  icon: 'eth'\n}, {\n  icon: 'bsc'\n}, {\n  icon: 'polygon'\n}, {\n  icon: 'ava'\n}, {\n  icon: 'eth'\n}];\nvar delay = 2500;\n\nvar Routing = function Routing() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      index = _useState[0],\n      setIndex = _useState[1];\n\n  var timeoutRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(null);\n\n  var resetTimeout = function resetTimeout() {\n    if (timeoutRef.current) {\n      clearTimeout(timeoutRef.current);\n    }\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    resetTimeout();\n    timeoutRef.current = setTimeout(function () {\n      return setIndex(function (prevIndex) {\n        return prevIndex === images.length - 1 ? 0 : prevIndex + 1;\n      });\n    }, index ? 3000 : 1500);\n    return function () {\n      resetTimeout();\n    };\n  }, [index]);\n  return __jsx(SlideShow, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 9\n    }\n  }, __jsx(Slider, {\n    style: {\n      transform: \"translate3d(\".concat(-index * 100, \"%, 0, 0)\"),\n      transition: index === 0 ? \"0s\" : \"ease 1s\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 13\n    }\n  }, images.map(function (item, index) {\n    return __jsx(Slide, {\n      key: index,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 25\n      }\n    }, __jsx(\"img\", {\n      src: \"../images/home-page/\".concat(item.icon, \".png\"),\n      alt: \"\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 29\n      }\n    }));\n  })));\n};\n\n_s(Routing, \"bhtDMAuiTWjY/oCsgWcgDfz/cnA=\");\n\n_c = Routing;\nvar SlideShow = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject());\n_c2 = SlideShow;\nvar Slider = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject2());\n_c3 = Slider;\nvar Slide = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject3());\n_c4 = Slide;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Routing);\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"Routing\");\n$RefreshReg$(_c2, \"SlideShow\");\n$RefreshReg$(_c3, \"Slider\");\n$RefreshReg$(_c4, \"Slide\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY2xpZW50L2NvbXBvbmVudHMvSG9tZS9jb21wb25lbnRzL1JvdXRpbmcuanN4PzI1ZWEiXSwibmFtZXMiOlsiaW1hZ2VzIiwiaWNvbiIsImRlbGF5IiwiUm91dGluZyIsInVzZVN0YXRlIiwiaW5kZXgiLCJzZXRJbmRleCIsInRpbWVvdXRSZWYiLCJ1c2VSZWYiLCJyZXNldFRpbWVvdXQiLCJjdXJyZW50IiwiY2xlYXJUaW1lb3V0IiwidXNlRWZmZWN0Iiwic2V0VGltZW91dCIsInByZXZJbmRleCIsImxlbmd0aCIsInRyYW5zZm9ybSIsInRyYW5zaXRpb24iLCJtYXAiLCJpdGVtIiwiU2xpZGVTaG93Iiwic3R5bGVkIiwiZGl2IiwiU2xpZGVyIiwiU2xpZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBTUEsTUFBTSxHQUFHLENBQ1g7QUFBQ0MsTUFBSSxFQUFDO0FBQU4sQ0FEVyxFQUNHO0FBQUNBLE1BQUksRUFBRTtBQUFQLENBREgsRUFDa0I7QUFBQ0EsTUFBSSxFQUFFO0FBQVAsQ0FEbEIsRUFDcUM7QUFBQ0EsTUFBSSxFQUFFO0FBQVAsQ0FEckMsRUFDb0Q7QUFBQ0EsTUFBSSxFQUFFO0FBQVAsQ0FEcEQsQ0FBZjtBQUdBLElBQU1DLEtBQUssR0FBRyxJQUFkOztBQUNBLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFBQTs7QUFBQSxrQkFDUUMsc0RBQVEsQ0FBQyxDQUFELENBRGhCO0FBQUEsTUFDWEMsS0FEVztBQUFBLE1BQ0pDLFFBREk7O0FBRWxCLE1BQU1DLFVBQVUsR0FBR0Msb0RBQU0sQ0FBQyxJQUFELENBQXpCOztBQUVBLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFDdkIsUUFBR0YsVUFBVSxDQUFDRyxPQUFkLEVBQXNCO0FBQ2xCQyxrQkFBWSxDQUFDSixVQUFVLENBQUNHLE9BQVosQ0FBWjtBQUNIO0FBQ0osR0FKRDs7QUFNQUUseURBQVMsQ0FBQyxZQUFNO0FBQ1pILGdCQUFZO0FBQ1pGLGNBQVUsQ0FBQ0csT0FBWCxHQUFxQkcsVUFBVSxDQUMzQjtBQUFBLGFBQU1QLFFBQVEsQ0FBQyxVQUFDUSxTQUFEO0FBQUEsZUFDWEEsU0FBUyxLQUFLZCxNQUFNLENBQUNlLE1BQVAsR0FBZ0IsQ0FBOUIsR0FBa0MsQ0FBbEMsR0FBc0NELFNBQVMsR0FBRyxDQUR2QztBQUFBLE9BQUQsQ0FBZDtBQUFBLEtBRDJCLEVBSS9CVCxLQUFLLEdBQUcsSUFBSCxHQUFTLElBSmlCLENBQS9CO0FBTUEsV0FBTyxZQUFNO0FBQ1RJLGtCQUFZO0FBQ2YsS0FGRDtBQUdILEdBWFEsRUFXTixDQUFDSixLQUFELENBWE0sQ0FBVDtBQWNBLFNBQ0ksTUFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLE1BQUQ7QUFBUSxTQUFLLEVBQUU7QUFBQ1csZUFBUyx3QkFBaUIsQ0FBQ1gsS0FBRCxHQUFTLEdBQTFCLGFBQVY7QUFBbURZLGdCQUFVLEVBQUVaLEtBQUssS0FBSyxDQUFWLEdBQWMsSUFBZCxHQUFvQjtBQUFuRixLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFUUwsTUFBTSxDQUFDa0IsR0FBUCxDQUFXLFVBQUNDLElBQUQsRUFBT2QsS0FBUDtBQUFBLFdBQ1AsTUFBQyxLQUFEO0FBQU8sU0FBRyxFQUFFQSxLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSTtBQUFLLFNBQUcsZ0NBQXlCYyxJQUFJLENBQUNsQixJQUE5QixTQUFSO0FBQWtELFNBQUcsRUFBQyxFQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREosQ0FETztBQUFBLEdBQVgsQ0FGUixDQURKLENBREo7QUFhSCxDQXJDRDs7R0FBTUUsTzs7S0FBQUEsTztBQXVDTixJQUFNaUIsU0FBUyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWLG1CQUFmO01BQU1GLFM7QUFLTixJQUFNRyxNQUFNLEdBQUdGLHlEQUFNLENBQUNDLEdBQVYsb0JBQVo7TUFBTUMsTTtBQUlOLElBQU1DLEtBQUssR0FBR0gseURBQU0sQ0FBQ0MsR0FBVixvQkFBWDtNQUFNRSxLO0FBUVNyQixzRUFBZiIsImZpbGUiOiIuL2NsaWVudC9jb21wb25lbnRzL0hvbWUvY29tcG9uZW50cy9Sb3V0aW5nLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbmNvbnN0IGltYWdlcyA9IFtcbiAgICB7aWNvbjonZXRoJ30sIHtpY29uOiAnYnNjJ30sIHtpY29uOiAncG9seWdvbid9LCB7aWNvbjogJ2F2YSd9LCB7aWNvbjogJ2V0aCd9XG5dXG5jb25zdCBkZWxheSA9IDI1MDA7XG5jb25zdCBSb3V0aW5nID0gKCkgPT4ge1xuICAgIGNvbnN0IFtpbmRleCwgc2V0SW5kZXhdID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3QgdGltZW91dFJlZiA9IHVzZVJlZihudWxsKTtcblxuICAgIGNvbnN0IHJlc2V0VGltZW91dCA9ICgpID0+IHtcbiAgICAgICAgaWYodGltZW91dFJlZi5jdXJyZW50KXtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0UmVmLmN1cnJlbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgcmVzZXRUaW1lb3V0KCk7XG4gICAgICAgIHRpbWVvdXRSZWYuY3VycmVudCA9IHNldFRpbWVvdXQoXG4gICAgICAgICAgICAoKSA9PiBzZXRJbmRleCgocHJldkluZGV4KSA9PiBcbiAgICAgICAgICAgICAgICBwcmV2SW5kZXggPT09IGltYWdlcy5sZW5ndGggLSAxID8gMCA6IHByZXZJbmRleCArIDFcbiAgICAgICAgICAgICksXG4gICAgICAgIGluZGV4ID8gMzAwMDogMTUwMCk7XG5cbiAgICAgICAgcmV0dXJuKCgpID0+IHtcbiAgICAgICAgICAgIHJlc2V0VGltZW91dCgpO1xuICAgICAgICB9KVxuICAgIH0sIFtpbmRleF0pO1xuXG5cbiAgICByZXR1cm4oXG4gICAgICAgIDxTbGlkZVNob3c+XG4gICAgICAgICAgICA8U2xpZGVyIHN0eWxlPXt7dHJhbnNmb3JtOiBgdHJhbnNsYXRlM2QoJHstaW5kZXggKiAxMDB9JSwgMCwgMClgLCB0cmFuc2l0aW9uOiBpbmRleCA9PT0gMCA/IFwiMHNcIiA6XCJlYXNlIDFzXCJ9fT5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGltYWdlcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2xpZGUga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2AuLi9pbWFnZXMvaG9tZS1wYWdlLyR7aXRlbS5pY29ufS5wbmdgfSBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TbGlkZT5cbiAgICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L1NsaWRlcj5cbiAgICAgICAgPC9TbGlkZVNob3c+XG4gICAgKVxufVxuXG5jb25zdCBTbGlkZVNob3cgPSBzdHlsZWQuZGl2YFxuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgbWF4LXdpZHRoOiA3NTBweDtcbmBcbmNvbnN0IFNsaWRlciA9IHN0eWxlZC5kaXZgXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAvKiB0cmFuc2l0aW9uOiBlYXNlIDFzOyAqL1xuYFxuY29uc3QgU2xpZGUgPSBzdHlsZWQuZGl2YFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogMjRweDtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7ICovXG5gXG5cbmV4cG9ydCBkZWZhdWx0IFJvdXRpbmc7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./client/components/Home/components/Routing.jsx\n");

/***/ })

})