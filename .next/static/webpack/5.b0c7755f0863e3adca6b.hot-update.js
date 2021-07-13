webpackHotUpdate_N_E(5,{

/***/ "./client/components/Order/components/Implementation.jsx":
/*!***************************************************************!*\
  !*** ./client/components/Order/components/Implementation.jsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\nvar _jsxFileName = \"/Users/quocnguyen/Documents/Projects/Forbitspace/forbitspace/client/components/Order/components/Implementation.jsx\",\n    _this = undefined;\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction _templateObject6() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    width: calc((100% - 80px) / 2);\\n    text-align: left;\\n\\n    padding: 15px 35px;\\n    border-radius: 12px;\\n\\n    transition: 0.2s;\\n\\n    :nth-child(even){\\n        text-align: right;\\n        margin-top: 440px;\\n        margin-bottom: -440px;\\n    }\\n\\n    :hover{\\n        transform: scale(1.12);\\n    }\\n\\n    @media (max-width: 768px){\\n        width: calc(100% - 80px);\\n        margin: 10px 0!important;\\n        text-align: left!important;\\n\\n        h2{\\n            font-size: 3rem;\\n            font-weight: 400;\\n        }\\n    }\\n\"]);\n\n  _templateObject6 = function _templateObject6() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject5() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    display: flex;\\n    flex-wrap: wrap;\\n    row-gap: 640px;\\n    justify-content: space-between;\\n\\n    margin: 150px auto 50px;\\n\\n    @media (max-width: 768px){\\n        padding: 0 20px;\\n    }\\n\\n    @media (max-width: 768px){\\n        gap: 10px!important;\\n        margin: 50px auto;\\n    }\\n\"]);\n\n  _templateObject5 = function _templateObject5() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject4() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    font-size: 1.2rem;\\n    font-weight: 300;\\n    margin: 0;\\n    @media (max-width: 576px) {\\n        font-size: 14px;\\n    }\\n\"]);\n\n  _templateObject4 = function _templateObject4() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject3() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    font-size: 4rem;\\n    line-height: 1.2;\\n    font-weight: 600;\\n    @media (max-width: 576px) {\\n      font-size: 45px;\\n      letter-spacing: 2px;\\n    }\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    @media (max-width: 576px) {\\n        margin-left: 0;\\n        margin-top: 40px;\\n    }\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    text-align: center;\\n    position: relative;\\n    margin: 50px 0 500px;\\n    padding: 50px 0;\\n\\n    @media (max-width: 768px){\\n        margin: 50px 0;\\n    }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\nvar Implementation = function Implementation() {\n  var ImplementData = [{\n    title: 'Stop-loss-order',\n    text: 'Based on the conditional orders feature, a stop-loss order is executed when it reaches a particular price point set by the user. When the price limit is reached, the open position will close to prevent further losses.'\n  }, {\n    title: 'Trailing Stop Order',\n    text: 'In a sell trailing stop order, also implemented on the conditional order feature, the user sets the stop price  at a fixed amount below market with an attached ‘trailing’ amount. If the market price increases, the stop price rises by the trailing amount. If the price falls, the stop-loss price remains unchanged.'\n  }, {\n    title: 'Auction',\n    text: 'Thanks to the dynamic pricing feature, the protocol can be used to power auctions. For instance, Maker DAO’s Liquidation 2.0 Module is based on the auction model, and users could take part in Maker DAO auctions, using the 1inch Limit Order Protocol.'\n  }, {\n    title: 'forbitspace Grants program',\n    text: 'We have implemented some use cases based on the 1inch Limit Order Protocol, such as, for instance, stop loss and trailing stop orders. However, there are still plentiful opportunities for implementing use cases on the 1inch Limit Order Protocol, such as auctions. If you are a developer interested in building a specific solution on  the protocol, you can apply for a grant from the 1inch Foundation.'\n  }];\n\n  var RenderImplement = function RenderImplement(_ref) {\n    var data = _ref.data;\n    return __jsx(BoxContent, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 13\n      }\n    }, data.map(function (item) {\n      return __jsx(Content, {\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 21\n        }\n      }, __jsx(Title, {\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 25\n        }\n      }, item.title), __jsx(Text, {\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 25\n        }\n      }, item.text));\n    }));\n  };\n\n  return __jsx(WrapperImplement, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 9\n    }\n  }, __jsx(HeaderContent, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 13\n    }\n  }, __jsx(Title, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 17\n    }\n  }, \"Implementations\"), __jsx(Text, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 17\n    }\n  }, \"Below are some use cases for the 1inch Limit Order Protocol. But the protocol is very flexible, and you can build much more on top of it!\")), __jsx(RenderImplement, {\n    data: ImplementData,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 13\n    }\n  }));\n};\n\n_c = Implementation;\nvar WrapperImplement = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].section(_templateObject());\n_c2 = WrapperImplement;\nvar HeaderContent = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject2());\n_c3 = HeaderContent;\nvar Title = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].h2(_templateObject3());\n_c4 = Title;\nvar Text = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].p(_templateObject4());\n_c5 = Text;\nvar BoxContent = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject5());\n_c6 = BoxContent;\nvar Content = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject6());\n_c7 = Content;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Implementation);\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7;\n\n$RefreshReg$(_c, \"Implementation\");\n$RefreshReg$(_c2, \"WrapperImplement\");\n$RefreshReg$(_c3, \"HeaderContent\");\n$RefreshReg$(_c4, \"Title\");\n$RefreshReg$(_c5, \"Text\");\n$RefreshReg$(_c6, \"BoxContent\");\n$RefreshReg$(_c7, \"Content\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY2xpZW50L2NvbXBvbmVudHMvT3JkZXIvY29tcG9uZW50cy9JbXBsZW1lbnRhdGlvbi5qc3g/NDY4YSJdLCJuYW1lcyI6WyJJbXBsZW1lbnRhdGlvbiIsIkltcGxlbWVudERhdGEiLCJ0aXRsZSIsInRleHQiLCJSZW5kZXJJbXBsZW1lbnQiLCJkYXRhIiwibWFwIiwiaXRlbSIsIldyYXBwZXJJbXBsZW1lbnQiLCJzdHlsZWQiLCJzZWN0aW9uIiwiSGVhZGVyQ29udGVudCIsImRpdiIsIlRpdGxlIiwiaDIiLCJUZXh0IiwicCIsIkJveENvbnRlbnQiLCJDb250ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixHQUFNO0FBQ3pCLE1BQU1DLGFBQWEsR0FBRyxDQUNsQjtBQUNJQyxTQUFLLEVBQUUsaUJBRFg7QUFFSUMsUUFBSSxFQUFFO0FBRlYsR0FEa0IsRUFLbEI7QUFDSUQsU0FBSyxFQUFFLHFCQURYO0FBRUlDLFFBQUksRUFBRTtBQUZWLEdBTGtCLEVBU2xCO0FBQ0lELFNBQUssRUFBRSxTQURYO0FBRUlDLFFBQUksRUFBRTtBQUZWLEdBVGtCLEVBYWxCO0FBQ0lELFNBQUssRUFBRSw0QkFEWDtBQUVJQyxRQUFJLEVBQUU7QUFGVixHQWJrQixDQUF0Qjs7QUFrQkEsTUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixPQUFjO0FBQUEsUUFBWEMsSUFBVyxRQUFYQSxJQUFXO0FBQ2xDLFdBQ0ksTUFBQyxVQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDS0EsSUFBSSxDQUFDQyxHQUFMLENBQVMsVUFBQUMsSUFBSTtBQUFBLGFBQ1YsTUFBQyxPQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSSxNQUFDLEtBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFRQSxJQUFJLENBQUNMLEtBQWIsQ0FESixFQUVJLE1BQUMsSUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0tLLElBQUksQ0FBQ0osSUFEVixDQUZKLENBRFU7QUFBQSxLQUFiLENBREwsQ0FESjtBQVlILEdBYkQ7O0FBY0EsU0FDSSxNQUFDLGdCQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLGFBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsS0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURKLEVBRUksTUFBQyxJQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUpBRkosQ0FESixFQVFJLE1BQUMsZUFBRDtBQUFpQixRQUFJLEVBQUVGLGFBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFSSixDQURKO0FBYUgsQ0E5Q0Q7O0tBQU1ELGM7QUFnRE4sSUFBTVEsZ0JBQWdCLEdBQUdDLHlEQUFNLENBQUNDLE9BQVYsbUJBQXRCO01BQU1GLGdCO0FBVU4sSUFBTUcsYUFBYSxHQUFHRix5REFBTSxDQUFDRyxHQUFWLG9CQUFuQjtNQUFNRCxhO0FBT04sSUFBTUUsS0FBSyxHQUFHSix5REFBTSxDQUFDSyxFQUFWLG9CQUFYO01BQU1ELEs7QUFVTixJQUFNRSxJQUFJLEdBQUdOLHlEQUFNLENBQUNPLENBQVYsb0JBQVY7TUFBTUQsSTtBQVNOLElBQU1FLFVBQVUsR0FBR1IseURBQU0sQ0FBQ0csR0FBVixvQkFBaEI7TUFBTUssVTtBQWtCTixJQUFNQyxPQUFPLEdBQUdULHlEQUFNLENBQUNHLEdBQVYsb0JBQWI7TUFBTU0sTztBQWdDU2xCLDZFQUFmIiwiZmlsZSI6Ii4vY2xpZW50L2NvbXBvbmVudHMvT3JkZXIvY29tcG9uZW50cy9JbXBsZW1lbnRhdGlvbi5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5jb25zdCBJbXBsZW1lbnRhdGlvbiA9ICgpID0+IHtcbiAgICBjb25zdCBJbXBsZW1lbnREYXRhID0gW1xuICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ1N0b3AtbG9zcy1vcmRlcicsXG4gICAgICAgICAgICB0ZXh0OiAnQmFzZWQgb24gdGhlIGNvbmRpdGlvbmFsIG9yZGVycyBmZWF0dXJlLCBhIHN0b3AtbG9zcyBvcmRlciBpcyBleGVjdXRlZCB3aGVuIGl0IHJlYWNoZXMgYSBwYXJ0aWN1bGFyIHByaWNlIHBvaW50IHNldCBieSB0aGUgdXNlci4gV2hlbiB0aGUgcHJpY2UgbGltaXQgaXMgcmVhY2hlZCwgdGhlIG9wZW4gcG9zaXRpb24gd2lsbCBjbG9zZSB0byBwcmV2ZW50IGZ1cnRoZXIgbG9zc2VzLidcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdUcmFpbGluZyBTdG9wIE9yZGVyJyxcbiAgICAgICAgICAgIHRleHQ6ICdJbiBhIHNlbGwgdHJhaWxpbmcgc3RvcCBvcmRlciwgYWxzbyBpbXBsZW1lbnRlZCBvbiB0aGUgY29uZGl0aW9uYWwgb3JkZXIgZmVhdHVyZSwgdGhlIHVzZXIgc2V0cyB0aGUgc3RvcCBwcmljZSAgYXQgYSBmaXhlZCBhbW91bnQgYmVsb3cgbWFya2V0IHdpdGggYW4gYXR0YWNoZWQg4oCYdHJhaWxpbmfigJkgYW1vdW50LiBJZiB0aGUgbWFya2V0IHByaWNlIGluY3JlYXNlcywgdGhlIHN0b3AgcHJpY2UgcmlzZXMgYnkgdGhlIHRyYWlsaW5nIGFtb3VudC4gSWYgdGhlIHByaWNlIGZhbGxzLCB0aGUgc3RvcC1sb3NzIHByaWNlIHJlbWFpbnMgdW5jaGFuZ2VkLidcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdBdWN0aW9uJyxcbiAgICAgICAgICAgIHRleHQ6ICdUaGFua3MgdG8gdGhlIGR5bmFtaWMgcHJpY2luZyBmZWF0dXJlLCB0aGUgcHJvdG9jb2wgY2FuIGJlIHVzZWQgdG8gcG93ZXIgYXVjdGlvbnMuIEZvciBpbnN0YW5jZSwgTWFrZXIgREFP4oCZcyBMaXF1aWRhdGlvbiAyLjAgTW9kdWxlIGlzIGJhc2VkIG9uIHRoZSBhdWN0aW9uIG1vZGVsLCBhbmQgdXNlcnMgY291bGQgdGFrZSBwYXJ0IGluIE1ha2VyIERBTyBhdWN0aW9ucywgdXNpbmcgdGhlIDFpbmNoIExpbWl0IE9yZGVyIFByb3RvY29sLidcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdmb3JiaXRzcGFjZSBHcmFudHMgcHJvZ3JhbScsXG4gICAgICAgICAgICB0ZXh0OiAnV2UgaGF2ZSBpbXBsZW1lbnRlZCBzb21lIHVzZSBjYXNlcyBiYXNlZCBvbiB0aGUgMWluY2ggTGltaXQgT3JkZXIgUHJvdG9jb2wsIHN1Y2ggYXMsIGZvciBpbnN0YW5jZSwgc3RvcCBsb3NzIGFuZCB0cmFpbGluZyBzdG9wIG9yZGVycy4gSG93ZXZlciwgdGhlcmUgYXJlIHN0aWxsIHBsZW50aWZ1bCBvcHBvcnR1bml0aWVzIGZvciBpbXBsZW1lbnRpbmcgdXNlIGNhc2VzIG9uIHRoZSAxaW5jaCBMaW1pdCBPcmRlciBQcm90b2NvbCwgc3VjaCBhcyBhdWN0aW9ucy4gSWYgeW91IGFyZSBhIGRldmVsb3BlciBpbnRlcmVzdGVkIGluIGJ1aWxkaW5nIGEgc3BlY2lmaWMgc29sdXRpb24gb24gIHRoZSBwcm90b2NvbCwgeW91IGNhbiBhcHBseSBmb3IgYSBncmFudCBmcm9tIHRoZSAxaW5jaCBGb3VuZGF0aW9uLidcbiAgICAgICAgfSxcbiAgICBdO1xuICAgIGNvbnN0IFJlbmRlckltcGxlbWVudCA9ICh7IGRhdGEgfSkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEJveENvbnRlbnQ+XG4gICAgICAgICAgICAgICAge2RhdGEubWFwKGl0ZW0gPT4gKFxuICAgICAgICAgICAgICAgICAgICA8Q29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUaXRsZT57aXRlbS50aXRsZX08L1RpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0udGV4dH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgPC9Db250ZW50PlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9Cb3hDb250ZW50PlxuICAgICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8V3JhcHBlckltcGxlbWVudD5cbiAgICAgICAgICAgIDxIZWFkZXJDb250ZW50PlxuICAgICAgICAgICAgICAgIDxUaXRsZT5JbXBsZW1lbnRhdGlvbnM8L1RpdGxlPlxuICAgICAgICAgICAgICAgIDxUZXh0PlxuICAgICAgICAgICAgICAgICAgICBCZWxvdyBhcmUgc29tZSB1c2UgY2FzZXMgZm9yIHRoZSAxaW5jaCBMaW1pdCBPcmRlciBQcm90b2NvbC4gQnV0IHRoZVxuICAgICAgICAgICAgICAgICAgICBwcm90b2NvbCBpcyB2ZXJ5IGZsZXhpYmxlLCBhbmQgeW91IGNhbiBidWlsZCBtdWNoIG1vcmUgb24gdG9wIG9mIGl0IVxuICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgIDwvSGVhZGVyQ29udGVudD5cbiAgICAgICAgICAgIDxSZW5kZXJJbXBsZW1lbnQgZGF0YT17SW1wbGVtZW50RGF0YX0gLz5cblxuICAgICAgICA8L1dyYXBwZXJJbXBsZW1lbnQ+XG4gICAgKTtcbn1cblxuY29uc3QgV3JhcHBlckltcGxlbWVudCA9IHN0eWxlZC5zZWN0aW9uYFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luOiA1MHB4IDAgNTAwcHg7XG4gICAgcGFkZGluZzogNTBweCAwO1xuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KXtcbiAgICAgICAgbWFyZ2luOiA1MHB4IDA7XG4gICAgfVxuYFxuY29uc3QgSGVhZGVyQ29udGVudCA9IHN0eWxlZC5kaXZgXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgIH1cbmBcblxuY29uc3QgVGl0bGUgPSBzdHlsZWQuaDJgXG4gICAgZm9udC1zaXplOiA0cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjI7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgICAgIGZvbnQtc2l6ZTogNDVweDtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG4gICAgfVxuYFxuXG5jb25zdCBUZXh0ID0gc3R5bGVkLnBgXG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBtYXJnaW46IDA7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG5gXG5cbmNvbnN0IEJveENvbnRlbnQgPSBzdHlsZWQuZGl2YFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIHJvdy1nYXA6IDY0MHB4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAgIG1hcmdpbjogMTUwcHggYXV0byA1MHB4O1xuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KXtcbiAgICAgICAgcGFkZGluZzogMCAyMHB4O1xuICAgIH1cblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCl7XG4gICAgICAgIGdhcDogMTBweCFpbXBvcnRhbnQ7XG4gICAgICAgIG1hcmdpbjogNTBweCBhdXRvO1xuICAgIH1cbmBcblxuY29uc3QgQ29udGVudCA9IHN0eWxlZC5kaXZgXG4gICAgd2lkdGg6IGNhbGMoKDEwMCUgLSA4MHB4KSAvIDIpO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG5cbiAgICBwYWRkaW5nOiAxNXB4IDM1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcblxuICAgIHRyYW5zaXRpb246IDAuMnM7XG5cbiAgICA6bnRoLWNoaWxkKGV2ZW4pe1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgbWFyZ2luLXRvcDogNDQwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IC00NDBweDtcbiAgICB9XG5cbiAgICA6aG92ZXJ7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xMik7XG4gICAgfVxuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KXtcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDgwcHgpO1xuICAgICAgICBtYXJnaW46IDEwcHggMCFpbXBvcnRhbnQ7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQhaW1wb3J0YW50O1xuXG4gICAgICAgIGgye1xuICAgICAgICAgICAgZm9udC1zaXplOiAzcmVtO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgfVxuICAgIH1cbmBcblxuXG5leHBvcnQgZGVmYXVsdCBJbXBsZW1lbnRhdGlvbjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./client/components/Order/components/Implementation.jsx\n");

/***/ })

})