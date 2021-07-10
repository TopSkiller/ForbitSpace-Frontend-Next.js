webpackHotUpdate_N_E(2,{

/***/ "./client/components/Foundation/components/Grant.jsx":
/*!***********************************************************!*\
  !*** ./client/components/Foundation/components/Grant.jsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\nvar _jsxFileName = \"/Users/quocnguyen/Documents/Projects/Forbitspace/forbitspace/client/components/Foundation/components/Grant.jsx\",\n    _this = undefined;\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction _templateObject7() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    font-size: 1.3rem;\\n    font-weight: 600;\\n\"]);\n\n  _templateObject7 = function _templateObject7() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject6() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    width: calc((100% - 80px) / 2);\\n    text-align: left;\\n\\n    padding: 50px 12px 20px;\\n    border-radius: 12px;\\n    border: solid 1px #0168ff;\\n    background-color: #02284d;\\n    transition: 0.2s;\\n\\n    :nth-child(even){\\n        margin-top: 40px;\\n        margin-bottom: -40px;\\n    }\\n\\n    :hover{\\n        transform: scale(1.12);\\n    }\\n\"]);\n\n  _templateObject6 = function _templateObject6() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject5() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    display: flex;\\n    flex-wrap: wrap;\\n    gap: 80px;\\n    justify-content: space-around;\\n    max-width: 900px;\\n    margin: 150px auto 50px;\\n\"]);\n\n  _templateObject5 = function _templateObject5() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject4() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    font-size: 1.2rem;\\n    font-weight: 300;\\n    @media (max-width: 576px) {\\n        font-size: 14px;\\n    }\\n\"]);\n\n  _templateObject4 = function _templateObject4() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject3() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    font-size: 4rem;\\n    line-height: 1.2;\\n    font-weight: 600;\\n    @media (max-width: 576px) {\\n      font-size: 45px;\\n      letter-spacing: 2px;\\n    }\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n\\n    @media (max-width: 576px) {\\n        margin-left: 0;\\n        margin-top: 40px;\\n    }\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    text-align: center;\\n    position: relative;\\n    margin-top: 50px;\\n    padding: 50px 0;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\nvar Grant = function Grant() {\n  var DataGrant = [{\n    title: 'Submit',\n    content: 'Applications are initially vetted for compliance with the 1inch Foundation’s formal and substantial requirements.'\n  }, {\n    title: 'Review',\n    content: 'Applications that pass the initial review  phase undergo tech due diligence and  evaluation.'\n  }, {\n    title: 'Compliance',\n    content: 'Applications that receive positive  recommendations complete a due diligence process before final decisions to approve, decline or revise grant applications.'\n  }, {\n    title: 'Finalization',\n    content: 'Final decisions on grant issuance are announced, approved applicants complete legal paperwork before grants are issued.'\n  }];\n\n  var RenderBoxGrant = function RenderBoxGrant(_ref) {\n    var data = _ref.data;\n    return __jsx(BoxGrant, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 13\n      }\n    }, data.map(function (item) {\n      return __jsx(ContentGrant, {\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 21\n        }\n      }, __jsx(SubTitle, {\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 25\n        }\n      }, item.title), __jsx(Text, {\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 25\n        }\n      }, item.content));\n    }));\n  };\n\n  return __jsx(WrapperGrant, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 9\n    }\n  }, __jsx(HeaderContent, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 13\n    }\n  }, __jsx(Title, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 17\n    }\n  }, \"Grant program\"), __jsx(Text, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 17\n    }\n  }, \"The 1inch Foundation\\u2019s key activity is to provide funding to entities and initiatives that contribute to long-term and sustainable growth\", __jsx(\"br\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 72\n    }\n  }), \"of the 1inch Network.\")), __jsx(RenderBoxGrant, {\n    data: DataGrant,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 13\n    }\n  }));\n};\n\n_c = Grant;\nvar WrapperGrant = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].section(_templateObject());\n_c2 = WrapperGrant;\nvar HeaderContent = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject2());\n_c3 = HeaderContent;\nvar Title = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].h2(_templateObject3());\n_c4 = Title;\nvar Text = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].p(_templateObject4());\n_c5 = Text;\nvar BoxGrant = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject5());\n_c6 = BoxGrant;\nvar ContentGrant = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject6());\n_c7 = ContentGrant;\nvar SubTitle = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject7());\n_c8 = SubTitle;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Grant);\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8;\n\n$RefreshReg$(_c, \"Grant\");\n$RefreshReg$(_c2, \"WrapperGrant\");\n$RefreshReg$(_c3, \"HeaderContent\");\n$RefreshReg$(_c4, \"Title\");\n$RefreshReg$(_c5, \"Text\");\n$RefreshReg$(_c6, \"BoxGrant\");\n$RefreshReg$(_c7, \"ContentGrant\");\n$RefreshReg$(_c8, \"SubTitle\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY2xpZW50L2NvbXBvbmVudHMvRm91bmRhdGlvbi9jb21wb25lbnRzL0dyYW50LmpzeD9hMGM0Il0sIm5hbWVzIjpbIkdyYW50IiwiRGF0YUdyYW50IiwidGl0bGUiLCJjb250ZW50IiwiUmVuZGVyQm94R3JhbnQiLCJkYXRhIiwibWFwIiwiaXRlbSIsIldyYXBwZXJHcmFudCIsInN0eWxlZCIsInNlY3Rpb24iLCJIZWFkZXJDb250ZW50IiwiZGl2IiwiVGl0bGUiLCJoMiIsIlRleHQiLCJwIiwiQm94R3JhbnQiLCJDb250ZW50R3JhbnQiLCJTdWJUaXRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUNoQixNQUFNQyxTQUFTLEdBQUcsQ0FDZDtBQUNJQyxTQUFLLEVBQUUsUUFEWDtBQUVJQyxXQUFPLEVBQUU7QUFGYixHQURjLEVBS2Q7QUFDSUQsU0FBSyxFQUFFLFFBRFg7QUFFSUMsV0FBTyxFQUFFO0FBRmIsR0FMYyxFQVNkO0FBQ0lELFNBQUssRUFBRSxZQURYO0FBRUlDLFdBQU8sRUFBRTtBQUZiLEdBVGMsRUFhZDtBQUNJRCxTQUFLLEVBQUUsY0FEWDtBQUVJQyxXQUFPLEVBQUU7QUFGYixHQWJjLENBQWxCOztBQW1CQSxNQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLE9BQWM7QUFBQSxRQUFYQyxJQUFXLFFBQVhBLElBQVc7QUFDakMsV0FDSSxNQUFDLFFBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNLQSxJQUFJLENBQUNDLEdBQUwsQ0FBUyxVQUFBQyxJQUFJO0FBQUEsYUFDVixNQUFDLFlBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJLE1BQUMsUUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQVdBLElBQUksQ0FBQ0wsS0FBaEIsQ0FESixFQUVJLE1BQUMsSUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0tLLElBQUksQ0FBQ0osT0FEVixDQUZKLENBRFU7QUFBQSxLQUFiLENBREwsQ0FESjtBQVlILEdBYkQ7O0FBY0EsU0FDSSxNQUFDLFlBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsYUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxLQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREosRUFFSSxNQUFDLElBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1SkFFdUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZ2RCwwQkFGSixDQURKLEVBU0ksTUFBQyxjQUFEO0FBQWdCLFFBQUksRUFBRUYsU0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVRKLENBREo7QUFhSCxDQS9DRDs7S0FBTUQsSztBQWlETixJQUFNUSxZQUFZLEdBQUdDLHlEQUFNLENBQUNDLE9BQVYsbUJBQWxCO01BQU1GLFk7QUFNTixJQUFNRyxhQUFhLEdBQUdGLHlEQUFNLENBQUNHLEdBQVYsb0JBQW5CO01BQU1ELGE7QUFRTixJQUFNRSxLQUFLLEdBQUdKLHlEQUFNLENBQUNLLEVBQVYsb0JBQVg7TUFBTUQsSztBQVVOLElBQU1FLElBQUksR0FBR04seURBQU0sQ0FBQ08sQ0FBVixvQkFBVjtNQUFNRCxJO0FBUU4sSUFBTUUsUUFBUSxHQUFHUix5REFBTSxDQUFDRyxHQUFWLG9CQUFkO01BQU1LLFE7QUFTTixJQUFNQyxZQUFZLEdBQUdULHlEQUFNLENBQUNHLEdBQVYsb0JBQWxCO01BQU1NLFk7QUFvQk4sSUFBTUMsUUFBUSxHQUFHVix5REFBTSxDQUFDRyxHQUFWLG9CQUFkO01BQU1PLFE7QUFLU25CLG9FQUFmIiwiZmlsZSI6Ii4vY2xpZW50L2NvbXBvbmVudHMvRm91bmRhdGlvbi9jb21wb25lbnRzL0dyYW50LmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgR3JhbnQgPSAoKSA9PiB7XG4gICAgY29uc3QgRGF0YUdyYW50ID0gW1xuICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ1N1Ym1pdCcsXG4gICAgICAgICAgICBjb250ZW50OiAnQXBwbGljYXRpb25zIGFyZSBpbml0aWFsbHkgdmV0dGVkIGZvciBjb21wbGlhbmNlIHdpdGggdGhlIDFpbmNoIEZvdW5kYXRpb27igJlzIGZvcm1hbCBhbmQgc3Vic3RhbnRpYWwgcmVxdWlyZW1lbnRzLidcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdSZXZpZXcnLFxuICAgICAgICAgICAgY29udGVudDogJ0FwcGxpY2F0aW9ucyB0aGF0IHBhc3MgdGhlIGluaXRpYWwgcmV2aWV3ICBwaGFzZSB1bmRlcmdvIHRlY2ggZHVlIGRpbGlnZW5jZSBhbmQgIGV2YWx1YXRpb24uJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ0NvbXBsaWFuY2UnLFxuICAgICAgICAgICAgY29udGVudDogJ0FwcGxpY2F0aW9ucyB0aGF0IHJlY2VpdmUgcG9zaXRpdmUgIHJlY29tbWVuZGF0aW9ucyBjb21wbGV0ZSBhIGR1ZSBkaWxpZ2VuY2UgcHJvY2VzcyBiZWZvcmUgZmluYWwgZGVjaXNpb25zIHRvIGFwcHJvdmUsIGRlY2xpbmUgb3IgcmV2aXNlIGdyYW50IGFwcGxpY2F0aW9ucy4nXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnRmluYWxpemF0aW9uJyxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdGaW5hbCBkZWNpc2lvbnMgb24gZ3JhbnQgaXNzdWFuY2UgYXJlIGFubm91bmNlZCwgYXBwcm92ZWQgYXBwbGljYW50cyBjb21wbGV0ZSBsZWdhbCBwYXBlcndvcmsgYmVmb3JlIGdyYW50cyBhcmUgaXNzdWVkLidcbiAgICAgICAgfVxuICAgIF1cblxuICAgIGNvbnN0IFJlbmRlckJveEdyYW50ID0gKHsgZGF0YSB9KSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8Qm94R3JhbnQ+XG4gICAgICAgICAgICAgICAge2RhdGEubWFwKGl0ZW0gPT4gKFxuICAgICAgICAgICAgICAgICAgICA8Q29udGVudEdyYW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFN1YlRpdGxlPntpdGVtLnRpdGxlfTwvU3ViVGl0bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5jb250ZW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICA8L0NvbnRlbnRHcmFudD5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvQm94R3JhbnQ+XG4gICAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDxXcmFwcGVyR3JhbnQ+XG4gICAgICAgICAgICA8SGVhZGVyQ29udGVudD5cbiAgICAgICAgICAgICAgICA8VGl0bGU+R3JhbnQgcHJvZ3JhbTwvVGl0bGU+XG4gICAgICAgICAgICAgICAgPFRleHQ+XG4gICAgICAgICAgICAgICAgICAgIFRoZSAxaW5jaCBGb3VuZGF0aW9u4oCZcyBrZXkgYWN0aXZpdHkgaXMgdG8gcHJvdmlkZSBmdW5kaW5nIHRvIGVudGl0aWVzIGFuZCBpbml0aWF0aXZlc1xuICAgICAgICAgICAgICAgICAgICB0aGF0IGNvbnRyaWJ1dGUgdG8gbG9uZy10ZXJtIGFuZCBzdXN0YWluYWJsZSBncm93dGg8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgb2YgdGhlIDFpbmNoIE5ldHdvcmsuXG4gICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgPC9IZWFkZXJDb250ZW50PlxuICAgICAgICAgICAgPFJlbmRlckJveEdyYW50IGRhdGE9e0RhdGFHcmFudH0gLz5cbiAgICAgICAgPC9XcmFwcGVyR3JhbnQ+XG4gICAgKTtcbn1cblxuY29uc3QgV3JhcHBlckdyYW50ID0gc3R5bGVkLnNlY3Rpb25gXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgIHBhZGRpbmc6IDUwcHggMDtcbmBcbmNvbnN0IEhlYWRlckNvbnRlbnQgPSBzdHlsZWQuZGl2YFxuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgIH1cbmBcblxuY29uc3QgVGl0bGUgPSBzdHlsZWQuaDJgXG4gICAgZm9udC1zaXplOiA0cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjI7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgICAgIGZvbnQtc2l6ZTogNDVweDtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG4gICAgfVxuYFxuXG5jb25zdCBUZXh0ID0gc3R5bGVkLnBgXG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cbmBcblxuY29uc3QgQm94R3JhbnQgPSBzdHlsZWQuZGl2YFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGdhcDogODBweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBtYXgtd2lkdGg6IDkwMHB4O1xuICAgIG1hcmdpbjogMTUwcHggYXV0byA1MHB4O1xuYFxuXG5jb25zdCBDb250ZW50R3JhbnQgPSBzdHlsZWQuZGl2YFxuICAgIHdpZHRoOiBjYWxjKCgxMDAlIC0gODBweCkgLyAyKTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuXG4gICAgcGFkZGluZzogNTBweCAxMnB4IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjMDE2OGZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMjI4NGQ7XG4gICAgdHJhbnNpdGlvbjogMC4ycztcblxuICAgIDpudGgtY2hpbGQoZXZlbil7XG4gICAgICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IC00MHB4O1xuICAgIH1cblxuICAgIDpob3ZlcntcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEyKTtcbiAgICB9XG5gXG5cbmNvbnN0IFN1YlRpdGxlID0gc3R5bGVkLmRpdmBcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuYFxuXG5leHBvcnQgZGVmYXVsdCBHcmFudDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./client/components/Foundation/components/Grant.jsx\n");

/***/ })

})