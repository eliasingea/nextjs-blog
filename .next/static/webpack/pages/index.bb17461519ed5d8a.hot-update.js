"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.js\");\n/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/utils.module.css */ \"./styles/utils.module.css\");\n/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nvar __N_SSG = true;\nfunction Home(param1) {\n    var allPostsData = param1.allPostsData;\n    var _this = this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        home: true,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: _components_layout__WEBPACK_IMPORTED_MODULE_2__.siteTitle\n                }, void 0, false, {\n                    fileName: \"/Users/eliasingea/Documents/code/NextJs Tutorial/pages/index.jsx\",\n                    lineNumber: 19,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/eliasingea/Documents/code/NextJs Tutorial/pages/index.jsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: (_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3___default().headingMd),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"[Your Self Introduction]\"\n                    }, void 0, false, {\n                        fileName: \"/Users/eliasingea/Documents/code/NextJs Tutorial/pages/index.jsx\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"(This is a sample website - you\\u2019ll be building a site like this on\",\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"https://nextjs.org/learn\",\n                                children: \"our Next.js tutorial\"\n                            }, void 0, false, {\n                                fileName: \"/Users/eliasingea/Documents/code/NextJs Tutorial/pages/index.jsx\",\n                                lineNumber: 25,\n                                columnNumber: 11\n                            }, this),\n                            \".)\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/eliasingea/Documents/code/NextJs Tutorial/pages/index.jsx\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/eliasingea/Documents/code/NextJs Tutorial/pages/index.jsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"\".concat((_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3___default().headingMd), \" \").concat((_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3___default().padding1px)),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: (_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3___default().headingLg),\n                        children: \"Blog\"\n                    }, void 0, false, {\n                        fileName: \"/Users/eliasingea/Documents/code/NextJs Tutorial/pages/index.jsx\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: (_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3___default().list),\n                        children: allPostsData.map(function(param) {\n                            var id = param.id, date = param.date, title = param.title;\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: (_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3___default().listItem),\n                                children: [\n                                    title,\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"/Users/eliasingea/Documents/code/NextJs Tutorial/pages/index.jsx\",\n                                        lineNumber: 35,\n                                        columnNumber: 15\n                                    }, _this),\n                                    id,\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"/Users/eliasingea/Documents/code/NextJs Tutorial/pages/index.jsx\",\n                                        lineNumber: 37,\n                                        columnNumber: 15\n                                    }, _this),\n                                    date\n                                ]\n                            }, id, true, {\n                                fileName: \"/Users/eliasingea/Documents/code/NextJs Tutorial/pages/index.jsx\",\n                                lineNumber: 33,\n                                columnNumber: 13\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/eliasingea/Documents/code/NextJs Tutorial/pages/index.jsx\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/eliasingea/Documents/code/NextJs Tutorial/pages/index.jsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/eliasingea/Documents/code/NextJs Tutorial/pages/index.jsx\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, this);\n};\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFBNkI7QUFDNEI7QUFDTDs7QUFZckMsU0FBU0ksSUFBSSxDQUFDLE1BQWdCLEVBQUU7UUFBbEIsWUFBYyxHQUFkLE1BQWdCLENBQWRDLFlBQVk7O0lBQ3pDLHFCQUNFLDhEQUFDSiwwREFBTTtRQUFDSyxJQUFJOzswQkFDViw4REFBQ04sa0RBQUk7MEJBQ0gsNEVBQUNPLE9BQUs7OEJBQUVMLHlEQUFTOzs7Ozt3QkFBUzs7Ozs7b0JBQ3JCOzBCQUNQLDhEQUFDTSxTQUFPO2dCQUFDQyxTQUFTLEVBQUVOLDJFQUFvQjs7a0NBQ3RDLDhEQUFDUSxHQUFDO2tDQUFDLDBCQUF3Qjs7Ozs7NEJBQUk7a0NBQy9CLDhEQUFDQSxHQUFDOzs0QkFBQyx5RUFDaUU7NEJBQUMsR0FBRzswQ0FDdEUsOERBQUNDLEdBQUM7Z0NBQUNDLElBQUksRUFBQywwQkFBMEI7MENBQUMsc0JBQW9COzs7OztvQ0FBSTs0QkFBQSxJQUM3RDs7Ozs7OzRCQUFJOzs7Ozs7b0JBQ0k7MEJBRVYsOERBQUNMLFNBQU87Z0JBQUNDLFNBQVMsRUFBRSxFQUFDLENBQTBCTixNQUFxQixDQUE3Q0EsMkVBQW9CLEVBQUMsR0FBQyxDQUF3QixRQUF0QkEsNEVBQXFCLENBQUU7O2tDQUNwRSw4REFBQ1ksSUFBRTt3QkFBQ04sU0FBUyxFQUFFTiwyRUFBb0I7a0NBQUUsTUFBSTs7Ozs7NEJBQUs7a0NBQzlDLDhEQUFDYyxJQUFFO3dCQUFDUixTQUFTLEVBQUVOLHNFQUFlO2tDQUMzQkUsWUFBWSxDQUFDYyxHQUFHLENBQUM7Z0NBQUdDLEVBQUUsU0FBRkEsRUFBRSxFQUFFQyxJQUFJLFNBQUpBLElBQUksRUFBRWQsS0FBSyxTQUFMQSxLQUFLO2lEQUNsQyw4REFBQ2UsSUFBRTtnQ0FBQ2IsU0FBUyxFQUFFTiwwRUFBbUI7O29DQUMvQkksS0FBSztrREFDTiw4REFBQ2lCLElBQUU7Ozs7NkNBQUc7b0NBQ0xKLEVBQUU7a0RBQ0gsOERBQUNJLElBQUU7Ozs7NkNBQUc7b0NBQ0xILElBQUk7OytCQUxrQ0QsRUFBRTs7OztxQ0FNdEM7eUJBQ04sQ0FBQzs7Ozs7NEJBQ0M7Ozs7OztvQkFDRzs7Ozs7O1lBQ0gsQ0FDVDtDQUNIO0FBOUJ1QmhCLEtBQUFBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4PzdmZmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IExheW91dCwgeyBzaXRlVGl0bGUgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXRcIjtcbmltcG9ydCB1dGlsU3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvdXRpbHMubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgZ2V0U29ydGVkUG9zdHNEYXRhIH0gZnJvbSBcIi4uL2xpYi9wb3N0c1wiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIGNvbnN0IGFsbFBvc3RzRGF0YSA9IGdldFNvcnRlZFBvc3RzRGF0YSgpO1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBhbGxQb3N0c0RhdGEsXG4gICAgfSxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7IGFsbFBvc3RzRGF0YSB9KSB7XG4gIHJldHVybiAoXG4gICAgPExheW91dCBob21lPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT57c2l0ZVRpdGxlfTwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3V0aWxTdHlsZXMuaGVhZGluZ01kfT5cbiAgICAgICAgPHA+W1lvdXIgU2VsZiBJbnRyb2R1Y3Rpb25dPC9wPlxuICAgICAgICA8cD5cbiAgICAgICAgICAoVGhpcyBpcyBhIHNhbXBsZSB3ZWJzaXRlIC0geW914oCZbGwgYmUgYnVpbGRpbmcgYSBzaXRlIGxpa2UgdGhpcyBvbntcIiBcIn1cbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9uZXh0anMub3JnL2xlYXJuXCI+b3VyIE5leHQuanMgdHV0b3JpYWw8L2E+LilcbiAgICAgICAgPC9wPlxuICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2Ake3V0aWxTdHlsZXMuaGVhZGluZ01kfSAke3V0aWxTdHlsZXMucGFkZGluZzFweH1gfT5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5oZWFkaW5nTGd9PkJsb2c8L2gyPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmxpc3R9PlxuICAgICAgICAgIHthbGxQb3N0c0RhdGEubWFwKCh7IGlkLCBkYXRlLCB0aXRsZSB9KSA9PiAoXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmxpc3RJdGVtfSBrZXk9e2lkfT5cbiAgICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAge2lkfVxuICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAge2RhdGV9XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9zZWN0aW9uPlxuICAgIDwvTGF5b3V0PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkhlYWQiLCJMYXlvdXQiLCJzaXRlVGl0bGUiLCJ1dGlsU3R5bGVzIiwiSG9tZSIsImFsbFBvc3RzRGF0YSIsImhvbWUiLCJ0aXRsZSIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJoZWFkaW5nTWQiLCJwIiwiYSIsImhyZWYiLCJwYWRkaW5nMXB4IiwiaDIiLCJoZWFkaW5nTGciLCJ1bCIsImxpc3QiLCJtYXAiLCJpZCIsImRhdGUiLCJsaSIsImxpc3RJdGVtIiwiYnIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.jsx\n");

/***/ })

});