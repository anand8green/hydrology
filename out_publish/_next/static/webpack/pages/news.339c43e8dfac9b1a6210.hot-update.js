webpackHotUpdate_N_E("pages/news",{

/***/ "./pages/Component/Home/News.js":
false,

/***/ "./pages/Component/Home/NewsComp.js":
/*!******************************************!*\
  !*** ./pages/Component/Home/NewsComp.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return NewsComp; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _News_NewsItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./News/NewsItem */ \"./pages/Component/Home/News/NewsItem.js\");\n/* harmony import */ var buttercms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! buttercms */ \"./node_modules/buttercms/lib/butter.js\");\n/* harmony import */ var buttercms__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(buttercms__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/Users/anandkumar/Desktop/hydro/hydrology/pages/Component/Home/NewsComp.js\";\n\n\nfunction NewsComp(props) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"News\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"News__Content\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"Title\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n          children: \"Our Hello news\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 11,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          children: \"Check out what we are up to as well as industry updates.\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 12,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"NewsBox\",\n        children: props.newsItem ? props.newsItem.map(function (item, index) {\n          var sentence = item.title.length > 45 ? item.title.substring(0, 45) + \"...\" : item.title;\n          var category = item.categories[0] !== undefined ? item.categories[0].name : \"Industry\";\n          var date = item.published.substring(0, 10);\n          date = new Date(date);\n          var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Augest', 'September', 'October', 'November', 'December'];\n          date = \"\".concat(months[date.getMonth()], \" \").concat(date.getDate(), \" \").concat(date.getFullYear());\n          return Object(_News_NewsItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n            image: item.featured_image,\n            category: category,\n            date: date,\n            title: sentence,\n            index: index,\n            slug: item.slug\n          });\n        }) : null\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 13\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 9\n  }, this);\n}\n_c = NewsComp;\n\nvar _c;\n\n$RefreshReg$(_c, \"NewsComp\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvQ29tcG9uZW50L0hvbWUvTmV3c0NvbXAuanM/YTViZSJdLCJuYW1lcyI6WyJOZXdzQ29tcCIsInByb3BzIiwibmV3c0l0ZW0iLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJzZW50ZW5jZSIsInRpdGxlIiwibGVuZ3RoIiwic3Vic3RyaW5nIiwiY2F0ZWdvcnkiLCJjYXRlZ29yaWVzIiwidW5kZWZpbmVkIiwibmFtZSIsImRhdGUiLCJwdWJsaXNoZWQiLCJEYXRlIiwibW9udGhzIiwiZ2V0TW9udGgiLCJnZXREYXRlIiwiZ2V0RnVsbFllYXIiLCJOZXdzSXRlbSIsImltYWdlIiwiZmVhdHVyZWRfaW1hZ2UiLCJzbHVnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUVBO0FBRWUsU0FBU0EsUUFBVCxDQUFrQkMsS0FBbEIsRUFBeUI7QUFFcEMsc0JBQ0k7QUFBSyxhQUFTLEVBQUMsTUFBZjtBQUFBLDJCQUNJO0FBQUssZUFBUyxFQUFDLGVBQWY7QUFBQSw4QkFDSTtBQUFLLGlCQUFTLEVBQUMsT0FBZjtBQUFBLGdDQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFLSTtBQUFLLGlCQUFTLEVBQUMsU0FBZjtBQUFBLGtCQUVRQSxLQUFLLENBQUNDLFFBQU4sR0FDSUQsS0FBSyxDQUFDQyxRQUFOLENBQWVDLEdBQWYsQ0FBbUIsVUFBQ0MsSUFBRCxFQUFPQyxLQUFQLEVBQWlCO0FBRWhDLGNBQU1DLFFBQVEsR0FBR0YsSUFBSSxDQUFDRyxLQUFMLENBQVdDLE1BQVgsR0FBb0IsRUFBcEIsR0FFYkosSUFBSSxDQUFDRyxLQUFMLENBQVdFLFNBQVgsQ0FBcUIsQ0FBckIsRUFBd0IsRUFBeEIsSUFBOEIsS0FGakIsR0FHYkwsSUFBSSxDQUFDRyxLQUhUO0FBS0EsY0FBSUcsUUFBUSxHQUFHTixJQUFJLENBQUNPLFVBQUwsQ0FBZ0IsQ0FBaEIsTUFBdUJDLFNBQXZCLEdBQW1DUixJQUFJLENBQUNPLFVBQUwsQ0FBZ0IsQ0FBaEIsRUFBbUJFLElBQXRELEdBQTZELFVBQTVFO0FBQ0EsY0FBSUMsSUFBSSxHQUFHVixJQUFJLENBQUNXLFNBQUwsQ0FBZU4sU0FBZixDQUF5QixDQUF6QixFQUE0QixFQUE1QixDQUFYO0FBQ0FLLGNBQUksR0FBRyxJQUFJRSxJQUFKLENBQVNGLElBQVQsQ0FBUDtBQUNBLGNBQU1HLE1BQU0sR0FBRyxDQUFDLFNBQUQsRUFBWSxVQUFaLEVBQXdCLE9BQXhCLEVBQWlDLE9BQWpDLEVBQTBDLEtBQTFDLEVBQWlELE1BQWpELEVBQXlELE1BQXpELEVBQWlFLFFBQWpFLEVBQTJFLFdBQTNFLEVBQXdGLFNBQXhGLEVBQW1HLFVBQW5HLEVBQStHLFVBQS9HLENBQWY7QUFDQUgsY0FBSSxhQUFNRyxNQUFNLENBQUNILElBQUksQ0FBQ0ksUUFBTCxFQUFELENBQVosY0FBaUNKLElBQUksQ0FBQ0ssT0FBTCxFQUFqQyxjQUFtREwsSUFBSSxDQUFDTSxXQUFMLEVBQW5ELENBQUo7QUFFQSxpQkFBUUMsOERBQVEsQ0FBQztBQUNiQyxpQkFBSyxFQUFFbEIsSUFBSSxDQUFDbUIsY0FEQztBQUViYixvQkFBUSxFQUFFQSxRQUZHO0FBR2JJLGdCQUFJLEVBQUVBLElBSE87QUFJYlAsaUJBQUssRUFBRUQsUUFKTTtBQUtiRCxpQkFBSyxFQUFFQSxLQUxNO0FBTWJtQixnQkFBSSxFQUFFcEIsSUFBSSxDQUFDb0I7QUFORSxXQUFELENBQWhCO0FBVUgsU0F2QkQsQ0FESixHQXdCUztBQTFCakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQTBDSDtLQTVDdUJ4QixRIiwiZmlsZSI6Ii4vcGFnZXMvQ29tcG9uZW50L0hvbWUvTmV3c0NvbXAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV3c0l0ZW0gZnJvbSBcIi4vTmV3cy9OZXdzSXRlbVwiO1xuXG5pbXBvcnQgQnV0dGVyIGZyb20gJ2J1dHRlcmNtcydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmV3c0NvbXAocHJvcHMpIHtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiTmV3c1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJOZXdzX19Db250ZW50XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJUaXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8aDE+T3VyIEhlbGxvIG5ld3M8L2gxPlxuICAgICAgICAgICAgICAgICAgICA8cD5DaGVjayBvdXQgd2hhdCB3ZSBhcmUgdXAgdG8gYXMgd2VsbCBhcyBpbmR1c3RyeSB1cGRhdGVzLjwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIk5ld3NCb3hcIj5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMubmV3c0l0ZW0gP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLm5ld3NJdGVtLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzZW50ZW5jZSA9IGl0ZW0udGl0bGUubGVuZ3RoID4gNDUgP1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnRpdGxlLnN1YnN0cmluZygwLCA0NSkgKyBcIi4uLlwiIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udGl0bGVcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2F0ZWdvcnkgPSBpdGVtLmNhdGVnb3JpZXNbMF0gIT09IHVuZGVmaW5lZCA/IGl0ZW0uY2F0ZWdvcmllc1swXS5uYW1lIDogXCJJbmR1c3RyeVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0ZSA9IGl0ZW0ucHVibGlzaGVkLnN1YnN0cmluZygwLCAxMClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZSA9IG5ldyBEYXRlKGRhdGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1vbnRocyA9IFsnSmFudWFyeScsICdGZWJydWFyeScsICdNYXJjaCcsICdBcHJpbCcsICdNYXknLCAnSnVuZScsICdKdWx5JywgJ0F1Z2VzdCcsICdTZXB0ZW1iZXInLCAnT2N0b2JlcicsICdOb3ZlbWJlcicsICdEZWNlbWJlciddXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGUgPSBgJHttb250aHNbZGF0ZS5nZXRNb250aCgpXX0gJHtkYXRlLmdldERhdGUoKX0gJHtkYXRlLmdldEZ1bGxZZWFyKCl9YDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKE5ld3NJdGVtKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlOiBpdGVtLmZlYXR1cmVkX2ltYWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6IGNhdGVnb3J5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZTogZGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBzZW50ZW5jZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsdWc6IGl0ZW0uc2x1ZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkgOiBudWxsXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/Component/Home/NewsComp.js\n");

/***/ }),

/***/ "./pages/news.js":
/*!***********************!*\
  !*** ./pages/news.js ***!
  \***********************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return NewsPage; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Component_NavBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Component/NavBar */ \"./pages/Component/NavBar.js\");\n/* harmony import */ var _Component_Home_BubbleNew__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Component/Home/BubbleNew */ \"./pages/Component/Home/BubbleNew.js\");\n/* harmony import */ var _Component_Home_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Component/Home/Footer */ \"./pages/Component/Home/Footer.js\");\n/* harmony import */ var use_dark_mode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! use-dark-mode */ \"./node_modules/use-dark-mode/dist/use-dark-mode.m.js\");\n/* harmony import */ var _Component_Home_NewsComp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Component/Home/NewsComp */ \"./pages/Component/Home/NewsComp.js\");\n\n\nvar _jsxFileName = \"/Users/anandkumar/Desktop/hydro/hydrology/pages/news.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar __N_SSG = true;\nfunction NewsPage(_ref) {\n  _s();\n\n  var heading = _ref.heading,\n      subheading = _ref.subheading,\n      newsItems = _ref.newsItems;\n\n  function createMarkup() {\n    return {\n      __html: body\n    };\n  }\n\n  console.log(subheading);\n  var mode = Object(use_dark_mode__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(false);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"InsidePage\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"TopBar\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"TopBar__Content\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Component_NavBar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 20,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"Title\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n            children: heading\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 22,\n            columnNumber: 25\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            children: subheading\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 23,\n            columnNumber: 25\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 21,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Component_Home_BubbleNew__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"content\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"text\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Component_Home_NewsComp__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n          newsItem: newsItems\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 33,\n          columnNumber: 21\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Component_Home_Footer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 16,\n    columnNumber: 9\n  }, this);\n}\n\n_s(NewsPage, \"2efxJR3huh3+ofuedf5V/1bcOn4=\", false, function () {\n  return [use_dark_mode__WEBPACK_IMPORTED_MODULE_4__[\"default\"]];\n});\n\n_c = NewsPage;\n\nvar _c;\n\n$RefreshReg$(_c, \"NewsPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbmV3cy5qcz8yYWJmIl0sIm5hbWVzIjpbIk5ld3NQYWdlIiwiaGVhZGluZyIsInN1YmhlYWRpbmciLCJuZXdzSXRlbXMiLCJjcmVhdGVNYXJrdXAiLCJfX2h0bWwiLCJib2R5IiwiY29uc29sZSIsImxvZyIsIm1vZGUiLCJ1c2VEYXJrTW9kZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSxTQUFTQSxRQUFULE9BQXNEO0FBQUE7O0FBQUEsTUFBbENDLE9BQWtDLFFBQWxDQSxPQUFrQztBQUFBLE1BQXpCQyxVQUF5QixRQUF6QkEsVUFBeUI7QUFBQSxNQUFiQyxTQUFhLFFBQWJBLFNBQWE7O0FBQ2pFLFdBQVNDLFlBQVQsR0FBd0I7QUFDcEIsV0FBTztBQUFFQyxZQUFNLEVBQUVDO0FBQVYsS0FBUDtBQUNIOztBQUNEQyxTQUFPLENBQUNDLEdBQVIsQ0FBWU4sVUFBWjtBQUNBLE1BQU1PLElBQUksR0FBR0MsNkRBQVcsQ0FBQyxLQUFELENBQXhCO0FBRUEsc0JBQ0k7QUFBSyxhQUFTLEVBQUMsWUFBZjtBQUFBLDRCQUVJO0FBQUssZUFBUyxFQUFDLFFBQWY7QUFBQSw4QkFDSTtBQUFLLGlCQUFTLEVBQUMsaUJBQWY7QUFBQSxnQ0FDSSxxRUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBRUk7QUFBSyxtQkFBUyxFQUFDLE9BQWY7QUFBQSxrQ0FDSTtBQUFBLHNCQUFLVDtBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosZUFFSTtBQUFBLHNCQUFJQztBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBUUkscUVBQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKLGVBYUk7QUFBSyxlQUFTLEVBQUMsU0FBZjtBQUFBLDZCQUVJO0FBQUssaUJBQVMsRUFBQyxNQUFmO0FBQUEsK0JBRUkscUVBQUMsZ0VBQUQ7QUFBVSxrQkFBUSxFQUFFQztBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFiSixlQTRCSTtBQUFBLDZCQUNJLHFFQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBNUJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBbUNIOztHQTFDdUJILFE7VUFLUFUscUQ7OztLQUxPVixRIiwiZmlsZSI6Ii4vcGFnZXMvbmV3cy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCdXR0ZXIgZnJvbSAnYnV0dGVyY21zJ1xuaW1wb3J0IE5hdkJhciBmcm9tICcuL0NvbXBvbmVudC9OYXZCYXInO1xuaW1wb3J0IEJ1YmJsZU5ldyBmcm9tICcuL0NvbXBvbmVudC9Ib21lL0J1YmJsZU5ldyc7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vQ29tcG9uZW50L0hvbWUvRm9vdGVyJ1xuaW1wb3J0IHVzZURhcmtNb2RlIGZyb20gJ3VzZS1kYXJrLW1vZGUnO1xuaW1wb3J0IE5ld3NDb21wIGZyb20gJy4vQ29tcG9uZW50L0hvbWUvTmV3c0NvbXAnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOZXdzUGFnZSh7IGhlYWRpbmcsIHN1YmhlYWRpbmcsIG5ld3NJdGVtcyB9KSB7XG4gICAgZnVuY3Rpb24gY3JlYXRlTWFya3VwKCkge1xuICAgICAgICByZXR1cm4geyBfX2h0bWw6IGJvZHkgfVxuICAgIH1cbiAgICBjb25zb2xlLmxvZyhzdWJoZWFkaW5nKTtcbiAgICBjb25zdCBtb2RlID0gdXNlRGFya01vZGUoZmFsc2UpXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkluc2lkZVBhZ2VcIj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJUb3BCYXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlRvcEJhcl9fQ29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICA8TmF2QmFyIC8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiVGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMT57aGVhZGluZ308L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3N1YmhlYWRpbmd9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8QnViYmxlTmV3IC8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj5cblxuICAgICAgICAgICAgICAgICAgICA8TmV3c0NvbXAgbmV3c0l0ZW09e25ld3NJdGVtc30gLz5cblxuICAgICAgICAgICAgICAgICAgICB7LypcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwaWNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aW1hZ2V9IGFsdD1cIlwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXtjcmVhdGVNYXJrdXAoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImluZm9cIiAvPiAqL31cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxGb290ZXIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgIClcbn1cblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xuXG4gICAgY29uc3QgYnV0dGVyID0gQnV0dGVyKHByb2Nlc3MuZW52LkJVVFRFUl9DTVMpXG5cbiAgICBjb25zdCBuZXdzID0gYXdhaXQgYnV0dGVyLnBvc3QubGlzdCh7fSlcbiAgICBsZXQgcmVzTmV3cyA9IGF3YWl0IGJ1dHRlci5wYWdlLnJldHJpZXZlKFwiKlwiLCBcIm5ld3NcIilcblxuICAgIHJldHVybiB7XG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBoZWFkaW5nOiByZXNOZXdzLmRhdGEuZGF0YS5maWVsZHMuaGVhZGluZyxcbiAgICAgICAgICAgIHN1YmhlYWRpbmc6IHJlc05ld3MuZGF0YS5kYXRhLmZpZWxkcy5zdWJoZWFkaW5nLFxuICAgICAgICAgICAgbmV3c0l0ZW1zOiBuZXdzLmRhdGEuZGF0YSxcbiAgICAgICAgfVxuXG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/news.js\n");

/***/ })

})