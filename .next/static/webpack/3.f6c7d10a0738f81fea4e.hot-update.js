webpackHotUpdate_N_E(3,{

/***/ "./client/components/FlybyBanner/FlybyBanner.jsx":
/*!*******************************************************!*\
  !*** ./client/components/FlybyBanner/FlybyBanner.jsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _flyby_rocket_base64__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./flyby-rocket-base64 */ \"./client/components/FlybyBanner/flyby-rocket-base64.js\");\n\n\nvar _jsxFileName = \"/Users/spacedevnguyen/Desktop/Documents/forbitspace/forbitspace/client/components/FlybyBanner/FlybyBanner.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction _templateObject6() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    position: absolute;\\n    top: 0;\\n    left: 0;\\n    right: 0;\\n    bottom: 0;\\n    z-index: -1;\\n    background-color: #000000cc;\\n    width: 100%;\\n    height: 100%;\\n\"]);\n\n  _templateObject6 = function _templateObject6() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject5() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    position: absolute;\\n    top: 0;\\n    left: 0;\\n    right: 0;\\n    bottom: 0;\\n    animation-name: spin;\\n    animation-duration: 15000ms;\\n    animation-iteration-count: infinite;\\n    animation-timing-function: linear;\\n    @keyframes spin {\\n        from {\\n            transform: rotate(0deg);\\n        }\\n        to {\\n            transform: rotate(-360deg);\\n        }\\n    }\\n    @keyframes reverse-spin {\\n        from {\\n            transform: rotate(0deg);\\n        }\\n        to {\\n            transform: rotate(360deg);\\n        }\\n    }\\n\\n    .point {\\n        background-color: white;\\n        position: absolute;\\n        width: 15px;\\n        height: 15px;\\n        border-radius: 50%;\\n        transform: translate(-50%, -50%);\\n    }\\n    .a {\\n        top: 2px;\\n        left: 50%;\\n    }\\n    .b {\\n        font-style: italic;\\n        font-size: 24px;\\n        position: absolute;\\n        top: 50%;\\n        left: calc(100% + 2px);\\n        animation-name: reverse-spin;\\n        animation-duration: 15000ms;\\n        animation-iteration-count: infinite;\\n        animation-timing-function: linear;\\n    }\\n    .c {\\n        top: calc(92% + 2px);\\n        left: 50%;\\n    }\\n\"]);\n\n  _templateObject5 = function _templateObject5() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject4() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    position: relative;\\n\"]);\n\n  _templateObject4 = function _templateObject4() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject3() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    width: 50vw;\\n    height: fit-content;\\n    max-width: 480px;\\n    /* padding: 1rem; */\\n    display: flex;\\n    align-items: flex-start;\\n    position: relative;\\n    .box {\\n        display: flex;\\n        align-items: center;\\n        justify-content: space-around;\\n    }\\n    .title {\\n        font-style: italic;\\n        font-size: 24px;\\n        margin-left: 3rem;\\n        /* position: absolute;\\n        left: 118%;\\n        top: 40%; */\\n        white-space: nowrap;\\n        display: flex;\\n        align-items: center;\\n        justify-content: center;\\n        flex-direction: column;\\n    }\\n    .button {\\n        font-size: 20px;\\n        padding: 6px 22px;\\n        border: 2px solid white;\\n        border-radius: 14px;\\n        margin-top: 1rem;\\n        background-image: linear-gradient(\\n            38deg,\\n            rgb(0, 255, 54) -10%,\\n            rgb(0, 238, 87) 3%,\\n            rgb(0, 197, 173) 32%,\\n            rgb(0, 164, 241) 53%,\\n            rgb(11, 24, 252) 102%,\\n            rgb(13, 0, 255) 111%\\n        );\\n        overflow: hidden;\\n        background-size: 200%;\\n        background-position: 99% center;\\n    }\\n    .text-decor {\\n        font-weight: 500;\\n        background-image: linear-gradient(\\n            -225deg,\\n            rgb(124, 249, 91) 0%,\\n            rgb(124, 249, 91) 29%,\\n            rgb(225, 162, 236) 67%,\\n            rgb(248, 116, 255) 100%\\n        );\\n        background-size: 200% auto;\\n        background-clip: text;\\n        text-fill-color: transparent;\\n        -webkit-background-clip: text;\\n        -webkit-text-fill-color: transparent;\\n        animation: text-run 5s infinite linear;\\n    }\\n    .close-icon {\\n        width: 18px;\\n        position: absolute;\\n        top: -18px;\\n        right: 0px;\\n        cursor: pointer;\\n    }\\n    @keyframes text-run {\\n        from {\\n            /* right: -120%; */\\n            background-position: 0 center;\\n        }\\n        to {\\n            /* right: 120%; */\\n            background-position: -200% center;\\n        }\\n    }\\n    @media (max-width: 800px) {\\n        .box {\\n            flex-direction: column-reverse;\\n        }\\n        .title {\\n            font-size: 18px;\\n        }\\n    }\\n    @media (max-width: 676px) {\\n        .title {\\n            font-size: 22px;\\n            top: 120%;\\n            left: 50%;\\n            transform: translate(-50%, -50%);\\n        }\\n    }\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    text-align: center;\\n    width: 100vw;\\n    height: 100vh;\\n    z-index: 9999999999;\\n    position: fixed;\\n    top: 0;\\n    left: 0;\\n    right: 0;\\n    bottom: 0;\\n    /* background-color: #00000080; */\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    body{\\n        overflow: hidden;\\n    }\\n    .header--nav{\\n        z-index: 0;\\n    }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\nvar FlybyBanner = function FlybyBanner() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(true),\n      active = _useState[0],\n      setActive = _useState[1];\n\n  return active ? __jsx(Wrapper, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 9\n    }\n  }, __jsx(GlobalStyle, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 13\n    }\n  }), __jsx(Content, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 13\n    }\n  }, __jsx(\"img\", {\n    src: \"../images/icons/close-icon.svg\",\n    alt: \"close icon\",\n    className: \"close-icon\",\n    onClick: function onClick() {\n      return setActive(false);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 17\n    }\n  }), __jsx(\"a\", {\n    href: \"https://flyby.forbitswap.com/#/live\",\n    target: \"_blank\",\n    rel: \"noreferrer\",\n    className: \"box\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 17\n    }\n  }, __jsx(WrapImage, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 21\n    }\n  }, __jsx(\"img\", {\n    src: _flyby_rocket_base64__WEBPACK_IMPORTED_MODULE_3__[\"flyby_rocket\"],\n    alt: \"join background\",\n    className: \"join-bg\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 25\n    }\n  }), __jsx(PointWrap, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 25\n    }\n  }, __jsx(\"div\", {\n    className: \"point a\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 29\n    }\n  }), __jsx(\"div\", {\n    className: \"b\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 29\n    }\n  }, __jsx(\"span\", {\n    className: \"\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 33\n    }\n  }, \"IDO\")), __jsx(\"div\", {\n    className: \"point c\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 29\n    }\n  }))), __jsx(\"div\", {\n    className: \"title \",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 21\n    }\n  }, \"flyby Launchpad \", __jsx(\"span\", {\n    className: \"button\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 41\n    }\n  }, \"Join\")))), __jsx(BlurDiv, {\n    onClick: function onClick() {\n      return setActive(false);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 13\n    }\n  })) : __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null);\n};\n\n_s(FlybyBanner, \"8U9J+wJN8vvBTuOPDEeGZkZ5XMY=\");\n\n_c = FlybyBanner;\nvar GlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__[\"createGlobalStyle\"])(_templateObject());\n_c2 = GlobalStyle;\nvar Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject2());\n_c3 = Wrapper;\nvar Content = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject3());\n_c4 = Content;\nvar WrapImage = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject4());\n_c5 = WrapImage;\nvar PointWrap = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject5());\n_c6 = PointWrap;\nvar BlurDiv = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject6());\n_c7 = BlurDiv;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FlybyBanner);\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7;\n\n$RefreshReg$(_c, \"FlybyBanner\");\n$RefreshReg$(_c2, \"GlobalStyle\");\n$RefreshReg$(_c3, \"Wrapper\");\n$RefreshReg$(_c4, \"Content\");\n$RefreshReg$(_c5, \"WrapImage\");\n$RefreshReg$(_c6, \"PointWrap\");\n$RefreshReg$(_c7, \"BlurDiv\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY2xpZW50L2NvbXBvbmVudHMvRmx5YnlCYW5uZXIvRmx5YnlCYW5uZXIuanN4Pzk1NzkiXSwibmFtZXMiOlsiRmx5YnlCYW5uZXIiLCJ1c2VTdGF0ZSIsImFjdGl2ZSIsInNldEFjdGl2ZSIsImZseWJ5X3JvY2tldCIsIkdsb2JhbFN0eWxlIiwiY3JlYXRlR2xvYmFsU3R5bGUiLCJXcmFwcGVyIiwic3R5bGVkIiwiZGl2IiwiQ29udGVudCIsIldyYXBJbWFnZSIsIlBvaW50V3JhcCIsIkJsdXJEaXYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFBQTs7QUFBQSxrQkFDTUMsc0RBQVEsQ0FBQyxJQUFELENBRGQ7QUFBQSxNQUNmQyxNQURlO0FBQUEsTUFDUEMsU0FETzs7QUFHdEIsU0FBT0QsTUFBTSxHQUNULE1BQUMsT0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxXQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJLE1BQUMsT0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFDSSxPQUFHLEVBQUMsZ0NBRFI7QUFFSSxPQUFHLEVBQUMsWUFGUjtBQUdJLGFBQVMsRUFBQyxZQUhkO0FBSUksV0FBTyxFQUFFO0FBQUEsYUFBTUMsU0FBUyxDQUFDLEtBQUQsQ0FBZjtBQUFBLEtBSmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBT0k7QUFDSSxRQUFJLEVBQUMscUNBRFQ7QUFFSSxVQUFNLEVBQUMsUUFGWDtBQUdJLE9BQUcsRUFBQyxZQUhSO0FBSUksYUFBUyxFQUFDLEtBSmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1JLE1BQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFDSSxPQUFHLEVBQUVDLGlFQURUO0FBRUksT0FBRyxFQUFDLGlCQUZSO0FBR0ksYUFBUyxFQUFDLFNBSGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBTUksTUFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBQyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJO0FBQUssYUFBUyxFQUFDLEdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQU0sYUFBUyxFQUFDLEVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESixDQUZKLEVBS0k7QUFBSyxhQUFTLEVBQUMsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEosQ0FOSixDQU5KLEVBb0JJO0FBQUssYUFBUyxFQUFDLFFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFDb0I7QUFBTSxhQUFTLEVBQUMsUUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURwQixDQXBCSixDQVBKLENBRkosRUFrQ0ksTUFBQyxPQUFEO0FBQVMsV0FBTyxFQUFFO0FBQUEsYUFBTUQsU0FBUyxDQUFDLEtBQUQsQ0FBZjtBQUFBLEtBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFsQ0osQ0FEUyxHQXNDVCxrRUF0Q0o7QUF3Q0gsQ0EzQ0Q7O0dBQU1ILFc7O0tBQUFBLFc7QUE0Q04sSUFBTUssV0FBVyxHQUFHQywyRUFBSCxtQkFBakI7TUFBTUQsVztBQVNOLElBQU1FLE9BQU8sR0FBR0MseURBQU0sQ0FBQ0MsR0FBVixvQkFBYjtNQUFNRixPO0FBZU4sSUFBTUcsT0FBTyxHQUFHRix5REFBTSxDQUFDQyxHQUFWLG9CQUFiO01BQU1DLE87QUFnR04sSUFBTUMsU0FBUyxHQUFHSCx5REFBTSxDQUFDQyxHQUFWLG9CQUFmO01BQU1FLFM7QUFHTixJQUFNQyxTQUFTLEdBQUdKLHlEQUFNLENBQUNDLEdBQVYsb0JBQWY7TUFBTUcsUztBQXVETixJQUFNQyxPQUFPLEdBQUdMLHlEQUFNLENBQUNDLEdBQVYsb0JBQWI7TUFBTUksTztBQVdTYiwwRUFBZiIsImZpbGUiOiIuL2NsaWVudC9jb21wb25lbnRzL0ZseWJ5QmFubmVyL0ZseWJ5QmFubmVyLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCwgeyBjcmVhdGVHbG9iYWxTdHlsZSB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgZmx5Ynlfcm9ja2V0IH0gZnJvbSBcIi4vZmx5Ynktcm9ja2V0LWJhc2U2NFwiO1xuXG5jb25zdCBGbHlieUJhbm5lciA9ICgpID0+IHtcbiAgICBjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgICByZXR1cm4gYWN0aXZlID8gKFxuICAgICAgICA8V3JhcHBlcj5cbiAgICAgICAgICAgIDxHbG9iYWxTdHlsZSAvPlxuICAgICAgICAgICAgPENvbnRlbnQ+XG4gICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICBzcmM9XCIuLi9pbWFnZXMvaWNvbnMvY2xvc2UtaWNvbi5zdmdcIlxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJjbG9zZSBpY29uXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2xvc2UtaWNvblwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZShmYWxzZSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mbHlieS5mb3JiaXRzd2FwLmNvbS8jL2xpdmVcIlxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICByZWw9XCJub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm94XCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxXcmFwSW1hZ2U+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtmbHlieV9yb2NrZXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiam9pbiBiYWNrZ3JvdW5kXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJqb2luLWJnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UG9pbnRXcmFwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9pbnQgYVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIlwiPklETzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvaW50IGNcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Qb2ludFdyYXA+XG4gICAgICAgICAgICAgICAgICAgIDwvV3JhcEltYWdlPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlIFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgZmx5YnkgTGF1bmNocGFkIDxzcGFuIGNsYXNzTmFtZT1cImJ1dHRvblwiPkpvaW48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvQ29udGVudD5cbiAgICAgICAgICAgIDxCbHVyRGl2IG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZShmYWxzZSl9IC8+XG4gICAgICAgIDwvV3JhcHBlcj5cbiAgICApIDogKFxuICAgICAgICA8PjwvPlxuICAgICk7XG59O1xuY29uc3QgR2xvYmFsU3R5bGUgPSBjcmVhdGVHbG9iYWxTdHlsZWBcbiAgICBib2R5e1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIH1cbiAgICAuaGVhZGVyLS1uYXZ7XG4gICAgICAgIHotaW5kZXg6IDA7XG4gICAgfVxuYDtcblxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHotaW5kZXg6IDk5OTk5OTk5OTk7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwODA7ICovXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuYDtcbmNvbnN0IENvbnRlbnQgPSBzdHlsZWQuZGl2YFxuICAgIHdpZHRoOiA1MHZ3O1xuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgbWF4LXdpZHRoOiA0ODBweDtcbiAgICAvKiBwYWRkaW5nOiAxcmVtOyAqL1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC5ib3gge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICB9XG4gICAgLnRpdGxlIHtcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzcmVtO1xuICAgICAgICAvKiBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDExOCU7XG4gICAgICAgIHRvcDogNDAlOyAqL1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG4gICAgLmJ1dHRvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgcGFkZGluZzogNnB4IDIycHg7XG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxNHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAgICAgICAzOGRlZyxcbiAgICAgICAgICAgIHJnYigwLCAyNTUsIDU0KSAtMTAlLFxuICAgICAgICAgICAgcmdiKDAsIDIzOCwgODcpIDMlLFxuICAgICAgICAgICAgcmdiKDAsIDE5NywgMTczKSAzMiUsXG4gICAgICAgICAgICByZ2IoMCwgMTY0LCAyNDEpIDUzJSxcbiAgICAgICAgICAgIHJnYigxMSwgMjQsIDI1MikgMTAyJSxcbiAgICAgICAgICAgIHJnYigxMywgMCwgMjU1KSAxMTElXG4gICAgICAgICk7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMjAwJTtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogOTklIGNlbnRlcjtcbiAgICB9XG4gICAgLnRleHQtZGVjb3Ige1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAgICAgICAtMjI1ZGVnLFxuICAgICAgICAgICAgcmdiKDEyNCwgMjQ5LCA5MSkgMCUsXG4gICAgICAgICAgICByZ2IoMTI0LCAyNDksIDkxKSAyOSUsXG4gICAgICAgICAgICByZ2IoMjI1LCAxNjIsIDIzNikgNjclLFxuICAgICAgICAgICAgcmdiKDI0OCwgMTE2LCAyNTUpIDEwMCVcbiAgICAgICAgKTtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAyMDAlIGF1dG87XG4gICAgICAgIGJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgICAgICAgdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gICAgICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgYW5pbWF0aW9uOiB0ZXh0LXJ1biA1cyBpbmZpbml0ZSBsaW5lYXI7XG4gICAgfVxuICAgIC5jbG9zZS1pY29uIHtcbiAgICAgICAgd2lkdGg6IDE4cHg7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAtMThweDtcbiAgICAgICAgcmlnaHQ6IDBweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgICBAa2V5ZnJhbWVzIHRleHQtcnVuIHtcbiAgICAgICAgZnJvbSB7XG4gICAgICAgICAgICAvKiByaWdodDogLTEyMCU7ICovXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICB0byB7XG4gICAgICAgICAgICAvKiByaWdodDogMTIwJTsgKi9cbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0yMDAlIGNlbnRlcjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBAbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcbiAgICAgICAgLmJveCB7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG4gICAgICAgIH1cbiAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBAbWVkaWEgKG1heC13aWR0aDogNjc2cHgpIHtcbiAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgICAgIHRvcDogMTIwJTtcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICB9XG4gICAgfVxuYDtcblxuY29uc3QgV3JhcEltYWdlID0gc3R5bGVkLmRpdmBcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5gO1xuY29uc3QgUG9pbnRXcmFwID0gc3R5bGVkLmRpdmBcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGFuaW1hdGlvbi1uYW1lOiBzcGluO1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMTUwMDBtcztcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gICAgQGtleWZyYW1lcyBzcGluIHtcbiAgICAgICAgZnJvbSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICAgICAgfVxuICAgICAgICB0byB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMzYwZGVnKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBAa2V5ZnJhbWVzIHJldmVyc2Utc3BpbiB7XG4gICAgICAgIGZyb20ge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgICAgIH1cbiAgICAgICAgdG8ge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5wb2ludCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHdpZHRoOiAxNXB4O1xuICAgICAgICBoZWlnaHQ6IDE1cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgfVxuICAgIC5hIHtcbiAgICAgICAgdG9wOiAycHg7XG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICB9XG4gICAgLmIge1xuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgbGVmdDogY2FsYygxMDAlICsgMnB4KTtcbiAgICAgICAgYW5pbWF0aW9uLW5hbWU6IHJldmVyc2Utc3BpbjtcbiAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxNTAwMG1zO1xuICAgICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xuICAgIH1cbiAgICAuYyB7XG4gICAgICAgIHRvcDogY2FsYyg5MiUgKyAycHgpO1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgfVxuYDtcbmNvbnN0IEJsdXJEaXYgPSBzdHlsZWQuZGl2YFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgei1pbmRleDogLTE7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMGNjO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbmA7XG5leHBvcnQgZGVmYXVsdCBGbHlieUJhbm5lcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./client/components/FlybyBanner/FlybyBanner.jsx\n");

/***/ })

})