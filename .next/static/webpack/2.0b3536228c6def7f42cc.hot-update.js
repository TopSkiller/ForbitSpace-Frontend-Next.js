webpackHotUpdate_N_E(2,{

/***/ "./client/components/Home/components/Routing.jsx":
/*!*******************************************************!*\
  !*** ./client/components/Home/components/Routing.jsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\nvar _jsxFileName = \"/Users/spacedevnguyen/Desktop/Documents/forbitspace/forbitspace/client/components/Home/components/Routing.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction _templateObject3() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    position: absolute;\\n    width: 100%;\\n    height: auto;\\n    left: 10px;\\n    top: 10px;\\n    /* border: 2px solid black; */\\n    /* line-height: 116px; */\\n    font-size: 80px;\\n    font-weight: bold;\\n    color: white;\\n    text-align: center;\\n    &:nth-child(1) { transform: rotateY(   0deg) translateZ(305px); }\\n    &:nth-child(2) { transform: rotateY(  90deg) translateZ(305px); }\\n    &:nth-child(3) { transform: rotateY( 180deg) translateZ(305px); }\\n    &:nth-child(4) { transform: rotateY( 270deg) translateZ(305px); }\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    width: 100%;\\n    height: 100%;\\n    position: absolute;\\n    transform: translateZ(-180px);\\n    transform-style: preserve-3d;\\n    transition: transform 1s;\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    /* border: 1px solid #CCC; */\\n    margin: 40px 0;\\n    position: relative;\\n    width: 100%;\\n    min-height: 340px;\\n    max-width: 650px;\\n    margin: 40px auto;\\n    /* perspective: 1000px; */\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\nvar images = [{\n  icon: 'eth'\n}, {\n  icon: 'bsc'\n}, {\n  icon: 'polygon'\n}, {\n  icon: 'ava'\n}]; // const delay = 2500;\n\nvar Routing = function Routing() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      idx = _useState[0],\n      setIdx = _useState[1];\n\n  var delay = idx === 0 || idx === 4 ? 2500 : 5000;\n  var timeoutRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(null);\n\n  var resetTimeout = function resetTimeout() {\n    if (timeoutRef.current) {\n      clearTimeout(timeoutRef.current);\n    }\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    resetTimeout();\n    timeoutRef.current = setTimeout(function () {\n      return setIdx(function (prevIndex) {\n        return prevIndex === images.length - 1 ? 0 : prevIndex + 1;\n      });\n    }, delay);\n    return function () {\n      resetTimeout();\n    };\n  }, [idx]);\n  return __jsx(SlideShow, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 9\n    }\n  }, __jsx(Slider, {\n    style: {\n      transform: \"translateZ(-180px) rotateY(\".concat(idx / images.length * -360, \"deg)\")\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 13\n    }\n  }, images.map(function (item, index) {\n    return __jsx(Slide, {\n      key: index,\n      style: {\n        opacity: \"\".concat(index === Math.floor((idx + 2) / 4) ? \"0\" : \"1\")\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 25\n      }\n    }, __jsx(\"img\", {\n      src: \"../images/home-page/\".concat(item.icon, \".png\"),\n      alt: \"\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 29\n      }\n    }), \"---\", Math.floor((idx + 2) / 4));\n  })));\n};\n\n_s(Routing, \"/CAK3tvYeNy5AZ4bx+rFxbIGOsg=\");\n\n_c = Routing;\nvar SlideShow = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject());\n_c2 = SlideShow;\nvar Slider = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject2());\n_c3 = Slider;\nvar Slide = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject3());\n_c4 = Slide;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Routing);\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"Routing\");\n$RefreshReg$(_c2, \"SlideShow\");\n$RefreshReg$(_c3, \"Slider\");\n$RefreshReg$(_c4, \"Slide\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY2xpZW50L2NvbXBvbmVudHMvSG9tZS9jb21wb25lbnRzL1JvdXRpbmcuanN4PzI1ZWEiXSwibmFtZXMiOlsiaW1hZ2VzIiwiaWNvbiIsIlJvdXRpbmciLCJ1c2VTdGF0ZSIsImlkeCIsInNldElkeCIsImRlbGF5IiwidGltZW91dFJlZiIsInVzZVJlZiIsInJlc2V0VGltZW91dCIsImN1cnJlbnQiLCJjbGVhclRpbWVvdXQiLCJ1c2VFZmZlY3QiLCJzZXRUaW1lb3V0IiwicHJldkluZGV4IiwibGVuZ3RoIiwidHJhbnNmb3JtIiwibWFwIiwiaXRlbSIsImluZGV4Iiwib3BhY2l0eSIsIk1hdGgiLCJmbG9vciIsIlNsaWRlU2hvdyIsInN0eWxlZCIsImRpdiIsIlNsaWRlciIsIlNsaWRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLElBQU1BLE1BQU0sR0FBRyxDQUNYO0FBQUNDLE1BQUksRUFBQztBQUFOLENBRFcsRUFDRztBQUFDQSxNQUFJLEVBQUU7QUFBUCxDQURILEVBQ2tCO0FBQUNBLE1BQUksRUFBRTtBQUFQLENBRGxCLEVBQ3FDO0FBQUNBLE1BQUksRUFBRTtBQUFQLENBRHJDLENBQWYsQyxDQUdBOztBQUNBLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFBQTs7QUFBQSxrQkFDSUMsc0RBQVEsQ0FBQyxDQUFELENBRFo7QUFBQSxNQUNYQyxHQURXO0FBQUEsTUFDTkMsTUFETTs7QUFFbEIsTUFBTUMsS0FBSyxHQUFHRixHQUFHLEtBQUssQ0FBUixJQUFhQSxHQUFHLEtBQUssQ0FBckIsR0FBeUIsSUFBekIsR0FBZ0MsSUFBOUM7QUFDQSxNQUFNRyxVQUFVLEdBQUdDLG9EQUFNLENBQUMsSUFBRCxDQUF6Qjs7QUFFQSxNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQ3ZCLFFBQUdGLFVBQVUsQ0FBQ0csT0FBZCxFQUFzQjtBQUNsQkMsa0JBQVksQ0FBQ0osVUFBVSxDQUFDRyxPQUFaLENBQVo7QUFDSDtBQUNKLEdBSkQ7O0FBTUFFLHlEQUFTLENBQUMsWUFBTTtBQUNaSCxnQkFBWTtBQUNaRixjQUFVLENBQUNHLE9BQVgsR0FBcUJHLFVBQVUsQ0FDM0I7QUFBQSxhQUFNUixNQUFNLENBQUMsVUFBQ1MsU0FBRDtBQUFBLGVBQ1RBLFNBQVMsS0FBS2QsTUFBTSxDQUFDZSxNQUFQLEdBQWdCLENBQTlCLEdBQWtDLENBQWxDLEdBQXNDRCxTQUFTLEdBQUcsQ0FEekM7QUFBQSxPQUFELENBQVo7QUFBQSxLQUQyQixFQUkvQlIsS0FKK0IsQ0FBL0I7QUFNQSxXQUFPLFlBQU07QUFDVEcsa0JBQVk7QUFDZixLQUZEO0FBR0gsR0FYUSxFQVdOLENBQUNMLEdBQUQsQ0FYTSxDQUFUO0FBY0EsU0FDSSxNQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsTUFBRDtBQUFRLFNBQUssRUFBRTtBQUFDWSxlQUFTLHVDQUFnQ1osR0FBRyxHQUFDSixNQUFNLENBQUNlLE1BQVgsR0FBa0IsQ0FBQyxHQUFuRDtBQUFWLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVRZixNQUFNLENBQUNpQixHQUFQLENBQVcsVUFBQ0MsSUFBRCxFQUFPQyxLQUFQO0FBQUEsV0FDUCxNQUFDLEtBQUQ7QUFBTyxTQUFHLEVBQUVBLEtBQVo7QUFBbUIsV0FBSyxFQUFFO0FBQUNDLGVBQU8sWUFBSUQsS0FBSyxLQUFLRSxJQUFJLENBQUNDLEtBQUwsQ0FBVyxDQUFDbEIsR0FBRyxHQUFDLENBQUwsSUFBUSxDQUFuQixDQUFWLEdBQWtDLEdBQWxDLEdBQXdDLEdBQTVDO0FBQVIsT0FBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJO0FBQUssU0FBRyxnQ0FBeUJjLElBQUksQ0FBQ2pCLElBQTlCLFNBQVI7QUFBa0QsU0FBRyxFQUFDLEVBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFESixTQUVRb0IsSUFBSSxDQUFDQyxLQUFMLENBQVcsQ0FBQ2xCLEdBQUcsR0FBQyxDQUFMLElBQVEsQ0FBbkIsQ0FGUixDQURPO0FBQUEsR0FBWCxDQUZSLENBREosQ0FESjtBQWNILENBdkNEOztHQUFNRixPOztLQUFBQSxPO0FBeUNOLElBQU1xQixTQUFTLEdBQUdDLHlEQUFNLENBQUNDLEdBQVYsbUJBQWY7TUFBTUYsUztBQVVOLElBQU1HLE1BQU0sR0FBR0YseURBQU0sQ0FBQ0MsR0FBVixvQkFBWjtNQUFNQyxNO0FBUU4sSUFBTUMsS0FBSyxHQUFHSCx5REFBTSxDQUFDQyxHQUFWLG9CQUFYO01BQU1FLEs7QUFrQlN6QixzRUFBZiIsImZpbGUiOiIuL2NsaWVudC9jb21wb25lbnRzL0hvbWUvY29tcG9uZW50cy9Sb3V0aW5nLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbmNvbnN0IGltYWdlcyA9IFtcbiAgICB7aWNvbjonZXRoJ30sIHtpY29uOiAnYnNjJ30sIHtpY29uOiAncG9seWdvbid9LCB7aWNvbjogJ2F2YSd9XG5dXG4vLyBjb25zdCBkZWxheSA9IDI1MDA7XG5jb25zdCBSb3V0aW5nID0gKCkgPT4ge1xuICAgIGNvbnN0IFtpZHgsIHNldElkeF0gPSB1c2VTdGF0ZSgwKTtcbiAgICBjb25zdCBkZWxheSA9IGlkeCA9PT0gMCB8fCBpZHggPT09IDQgPyAyNTAwIDogNTAwMDtcbiAgICBjb25zdCB0aW1lb3V0UmVmID0gdXNlUmVmKG51bGwpO1xuXG4gICAgY29uc3QgcmVzZXRUaW1lb3V0ID0gKCkgPT4ge1xuICAgICAgICBpZih0aW1lb3V0UmVmLmN1cnJlbnQpe1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRSZWYuY3VycmVudCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICByZXNldFRpbWVvdXQoKTtcbiAgICAgICAgdGltZW91dFJlZi5jdXJyZW50ID0gc2V0VGltZW91dChcbiAgICAgICAgICAgICgpID0+IHNldElkeCgocHJldkluZGV4KSA9PiBcbiAgICAgICAgICAgICAgICBwcmV2SW5kZXggPT09IGltYWdlcy5sZW5ndGggLSAxID8gMCA6IHByZXZJbmRleCArIDFcbiAgICAgICAgICAgICksXG4gICAgICAgIGRlbGF5KTtcblxuICAgICAgICByZXR1cm4oKCkgPT4ge1xuICAgICAgICAgICAgcmVzZXRUaW1lb3V0KCk7XG4gICAgICAgIH0pXG4gICAgfSwgW2lkeF0pO1xuXG5cbiAgICByZXR1cm4oXG4gICAgICAgIDxTbGlkZVNob3c+XG4gICAgICAgICAgICA8U2xpZGVyIHN0eWxlPXt7dHJhbnNmb3JtOiBgdHJhbnNsYXRlWigtMTgwcHgpIHJvdGF0ZVkoJHtpZHgvaW1hZ2VzLmxlbmd0aCotMzYwfWRlZylgfX0+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpbWFnZXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPFNsaWRlIGtleT17aW5kZXh9IHN0eWxlPXt7b3BhY2l0eTpgJHtpbmRleCA9PT0gTWF0aC5mbG9vcigoaWR4KzIpLzQpID8gXCIwXCIgOiBcIjFcIn1gfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2AuLi9pbWFnZXMvaG9tZS1wYWdlLyR7aXRlbS5pY29ufS5wbmdgfSBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC0tLXtNYXRoLmZsb29yKChpZHgrMikvNCl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1NsaWRlPlxuICAgICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvU2xpZGVyPlxuICAgICAgICA8L1NsaWRlU2hvdz5cbiAgICApXG59XG5cbmNvbnN0IFNsaWRlU2hvdyA9IHN0eWxlZC5kaXZgXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgI0NDQzsgKi9cbiAgICBtYXJnaW46IDQwcHggMDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWluLWhlaWdodDogMzQwcHg7XG4gICAgbWF4LXdpZHRoOiA2NTBweDtcbiAgICBtYXJnaW46IDQwcHggYXV0bztcbiAgICAvKiBwZXJzcGVjdGl2ZTogMTAwMHB4OyAqL1xuYFxuY29uc3QgU2xpZGVyID0gc3R5bGVkLmRpdmBcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigtMTgwcHgpO1xuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzO1xuYFxuY29uc3QgU2xpZGUgPSBzdHlsZWQuZGl2YFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgbGVmdDogMTBweDtcbiAgICB0b3A6IDEwcHg7XG4gICAgLyogYm9yZGVyOiAycHggc29saWQgYmxhY2s7ICovXG4gICAgLyogbGluZS1oZWlnaHQ6IDExNnB4OyAqL1xuICAgIGZvbnQtc2l6ZTogODBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICY6bnRoLWNoaWxkKDEpIHsgdHJhbnNmb3JtOiByb3RhdGVZKCAgIDBkZWcpIHRyYW5zbGF0ZVooMzA1cHgpOyB9XG4gICAgJjpudGgtY2hpbGQoMikgeyB0cmFuc2Zvcm06IHJvdGF0ZVkoICA5MGRlZykgdHJhbnNsYXRlWigzMDVweCk7IH1cbiAgICAmOm50aC1jaGlsZCgzKSB7IHRyYW5zZm9ybTogcm90YXRlWSggMTgwZGVnKSB0cmFuc2xhdGVaKDMwNXB4KTsgfVxuICAgICY6bnRoLWNoaWxkKDQpIHsgdHJhbnNmb3JtOiByb3RhdGVZKCAyNzBkZWcpIHRyYW5zbGF0ZVooMzA1cHgpOyB9XG5gXG5cbmV4cG9ydCBkZWZhdWx0IFJvdXRpbmc7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./client/components/Home/components/Routing.jsx\n");

/***/ })

})