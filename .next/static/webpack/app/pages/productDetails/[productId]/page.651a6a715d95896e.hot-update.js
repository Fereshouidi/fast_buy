"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/pages/productDetails/[productId]/page",{

/***/ "(app-pages-browser)/./app/pages/productDetails/[productId]/forComputer/pageForComputer.tsx":
/*!******************************************************************************!*\
  !*** ./app/pages/productDetails/[productId]/forComputer/pageForComputer.tsx ***!
  \******************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _component_imagesSection_imagesSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/imagesSection/imagesSection */ \"(app-pages-browser)/./app/pages/productDetails/[productId]/forComputer/component/imagesSection/imagesSection.tsx\");\n/* harmony import */ var _component_informationSection_tsx_informationSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/informationSection.tsx/informationSection */ \"(app-pages-browser)/./app/pages/productDetails/[productId]/forComputer/component/informationSection.tsx/informationSection.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst PageForComputer = (param)=>{\n    let { product, setProduct, shoppingCart, orders } = param;\n    _s();\n    const [purchase, setPurchase] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined);\n    const [isPriceChange, setIsPriceChange] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"PageForComputer.useEffect\": ()=>{\n            if (shoppingCart === null || shoppingCart === void 0 ? void 0 : shoppingCart.purchases) {\n                var _shoppingCart_purchases;\n                for(let i = 0; i < (shoppingCart === null || shoppingCart === void 0 ? void 0 : (_shoppingCart_purchases = shoppingCart.purchases) === null || _shoppingCart_purchases === void 0 ? void 0 : _shoppingCart_purchases.length); i++){\n                    var _shoppingCart_purchases_i_product;\n                    if (((_shoppingCart_purchases_i_product = shoppingCart.purchases[i].product) === null || _shoppingCart_purchases_i_product === void 0 ? void 0 : _shoppingCart_purchases_i_product._id) == (product === null || product === void 0 ? void 0 : product._id)) {\n                        setPurchase(shoppingCart.purchases[i]);\n                    }\n                }\n            }\n        }\n    }[\"PageForComputer.useEffect\"], [\n        shoppingCart\n    ]);\n    const style = {\n        backgroundColor: \"var(--almost-white)\",\n        width: '100%',\n        minHeight: 'calc(100vh - var(--header-height)',\n        display: 'flex',\n        justifyContent: \"center\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"the-product-detail-page-of-computer\",\n        style: style,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_imagesSection_imagesSection__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                product: product,\n                setProduct: setProduct,\n                purchase: purchase,\n                setPurchase: setPurchase,\n                shoppingCart: shoppingCart\n            }, void 0, false, {\n                fileName: \"C:\\\\my_projects\\\\fast_buy\\\\webSite_for_the_customer\\\\app\\\\pages\\\\productDetails\\\\[productId]\\\\forComputer\\\\pageForComputer.tsx\",\n                lineNumber: 46,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_informationSection_tsx_informationSection__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                product: product,\n                setProduct: setProduct,\n                purchaseData: purchase,\n                setPurchaseData: setPurchase,\n                shoppingCart: shoppingCart,\n                orders: orders,\n                isPriceChange: isPriceChange,\n                setIspriceChange: setIsPriceChange\n            }, void 0, false, {\n                fileName: \"C:\\\\my_projects\\\\fast_buy\\\\webSite_for_the_customer\\\\app\\\\pages\\\\productDetails\\\\[productId]\\\\forComputer\\\\pageForComputer.tsx\",\n                lineNumber: 47,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\my_projects\\\\fast_buy\\\\webSite_for_the_customer\\\\app\\\\pages\\\\productDetails\\\\[productId]\\\\forComputer\\\\pageForComputer.tsx\",\n        lineNumber: 45,\n        columnNumber: 9\n    }, undefined);\n};\n_s(PageForComputer, \"EEaaWSihEcqM8baH+a51GEe4ncc=\");\n_c = PageForComputer;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageForComputer);\nvar _c;\n$RefreshReg$(_c, \"PageForComputer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlcy9wcm9kdWN0RGV0YWlscy9bcHJvZHVjdElkXS9mb3JDb21wdXRlci9wYWdlRm9yQ29tcHV0ZXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQzJEO0FBQ1M7QUFDbUI7QUFjdkYsTUFBTUksa0JBQWtCO1FBQUMsRUFBQ0MsT0FBTyxFQUFFQyxVQUFVLEVBQUVDLFlBQVksRUFBRUMsTUFBTSxFQUFTOztJQUV4RSxNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR1QsK0NBQVFBLENBQTZCVTtJQUNyRSxNQUFNLENBQUNDLGVBQWVDLGlCQUFpQixHQUFHWiwrQ0FBUUEsQ0FBVTtJQUk1REQsZ0RBQVNBO3FDQUFDO1lBQ04sSUFBSU8seUJBQUFBLG1DQUFBQSxhQUFjTyxTQUFTLEVBQUU7b0JBQ0pQO2dCQUFyQixJQUFLLElBQUlRLElBQUksR0FBSUEsS0FBSVIseUJBQUFBLG9DQUFBQSwwQkFBQUEsYUFBY08sU0FBUyxjQUF2QlAsOENBQUFBLHdCQUF5QlMsTUFBTSxHQUFHRCxJQUFLO3dCQUNwRFI7b0JBQUosSUFBSUEsRUFBQUEsb0NBQUFBLGFBQWFPLFNBQVMsQ0FBQ0MsRUFBRSxDQUFDVixPQUFPLGNBQWpDRSx3REFBQUEsa0NBQW1DVSxHQUFHLE1BQUlaLG9CQUFBQSw4QkFBQUEsUUFBU1ksR0FBRyxHQUFFO3dCQUN4RFAsWUFBWUgsYUFBYU8sU0FBUyxDQUFDQyxFQUFFO29CQUN6QztnQkFDSjtZQUNKO1FBRUo7b0NBQUc7UUFBQ1I7S0FBYTtJQUdqQixNQUFNVyxRQUF1QjtRQUN6QkMsaUJBQWlCO1FBQ2pCQyxPQUFPO1FBQ1BDLFdBQVc7UUFDWEMsU0FBUztRQUNUQyxnQkFBZ0I7SUFDcEI7SUFDQSxxQkFDSSw4REFBQ0M7UUFBSUMsSUFBRztRQUFzQ1AsT0FBT0E7OzBCQUNqRCw4REFBQ2hCLDhFQUFhQTtnQkFBQ0csU0FBU0E7Z0JBQVNDLFlBQVlBO2dCQUFZRyxVQUFVQTtnQkFBVUMsYUFBYUE7Z0JBQWFILGNBQWNBOzs7Ozs7MEJBQ3JILDhEQUFDSiw0RkFBa0JBO2dCQUFDRSxTQUFTQTtnQkFBU0MsWUFBWUE7Z0JBQVlvQixjQUFjakI7Z0JBQVVrQixpQkFBaUJqQjtnQkFBYUgsY0FBY0E7Z0JBQWNDLFFBQVFBO2dCQUFRSSxlQUFlQTtnQkFBZWdCLGtCQUFrQmY7Ozs7Ozs7Ozs7OztBQUc1TjtHQWhDTVQ7S0FBQUE7QUFpQ04saUVBQWVBLGVBQWVBLEVBQUMiLCJzb3VyY2VzIjpbIkM6XFxteV9wcm9qZWN0c1xcZmFzdF9idXlcXHdlYlNpdGVfZm9yX3RoZV9jdXN0b21lclxcYXBwXFxwYWdlc1xccHJvZHVjdERldGFpbHNcXFtwcm9kdWN0SWRdXFxmb3JDb21wdXRlclxccGFnZUZvckNvbXB1dGVyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XHJcbmltcG9ydCB7IENTU1Byb3BlcnRpZXMsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEltYWdlc1NlY3Rpb24gZnJvbSBcIi4vY29tcG9uZW50L2ltYWdlc1NlY3Rpb24vaW1hZ2VzU2VjdGlvblwiO1xyXG5pbXBvcnQgSW5mb3JtYXRpb25TZWN0aW9uIGZyb20gXCIuL2NvbXBvbmVudC9pbmZvcm1hdGlvblNlY3Rpb24udHN4L2luZm9ybWF0aW9uU2VjdGlvblwiO1xyXG5pbXBvcnQgeyBwcm9kdWN0UGFyYW1zIH0gZnJvbSBcIkAvYXBwL2NvbnRleHRzL3Byb2R1Y3RTZWxlY3RGb3JTaG93aW5nXCI7XHJcbmltcG9ydCB7IHNob3BwaW5nQ2FydFBhcmFtcyB9IGZyb20gXCJAL2FwcC9jb250ZXh0cy9zaG9wcGluZ0NhcnRcIjtcclxuaW1wb3J0IHsgcHVyY2hhc2VQYXJhbXMgfSBmcm9tIFwiQC9hcHAvY29udGV4dHMvcHVyY2hhc2VEYXRhXCI7XHJcbmltcG9ydCB7IE9yZGVyUGFyYW1zIH0gZnJvbSBcIkAvYXBwL2NvbnRleHRzL29yZGVyXCI7XHJcblxyXG50eXBlIFBhcmFtcyA9IHtcclxuICAgIHByb2R1Y3Q6IHByb2R1Y3RQYXJhbXMgfCB1bmRlZmluZWQsXHJcbiAgICBzZXRQcm9kdWN0OiAodmFsdWU6IHByb2R1Y3RQYXJhbXMpID0+IHZvaWQsXHJcbiAgICBwdXJjaGFzZT86IHB1cmNoYXNlUGFyYW1zIHwgdW5kZWZpbmVkXHJcbiAgICBzZXRQdXJjaGFzZT86ICh2YWx1ZTogcHVyY2hhc2VQYXJhbXMgfCB1bmRlZmluZWQpID0+IHZvaWQgICAgXHJcbiAgICBzaG9wcGluZ0NhcnQ6IHNob3BwaW5nQ2FydFBhcmFtcyB8IHVuZGVmaW5lZCxcclxuICAgIG9yZGVyczogT3JkZXJQYXJhbXNbXSB8IHVuZGVmaW5lZFxyXG59XHJcbmNvbnN0IFBhZ2VGb3JDb21wdXRlciA9ICh7cHJvZHVjdCwgc2V0UHJvZHVjdCwgc2hvcHBpbmdDYXJ0LCBvcmRlcnN9OiBQYXJhbXMpID0+IHtcclxuXHJcbiAgICBjb25zdCBbcHVyY2hhc2UsIHNldFB1cmNoYXNlXSA9IHVzZVN0YXRlPHB1cmNoYXNlUGFyYW1zIHwgdW5kZWZpbmVkPih1bmRlZmluZWQpO1xyXG4gICAgY29uc3QgW2lzUHJpY2VDaGFuZ2UsIHNldElzUHJpY2VDaGFuZ2VdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG5cclxuXHJcbiAgICBcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHNob3BwaW5nQ2FydD8ucHVyY2hhc2VzKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwIDsgaSA8IHNob3BwaW5nQ2FydD8ucHVyY2hhc2VzPy5sZW5ndGggOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChzaG9wcGluZ0NhcnQucHVyY2hhc2VzW2ldLnByb2R1Y3Q/Ll9pZCA9PSBwcm9kdWN0Py5faWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRQdXJjaGFzZShzaG9wcGluZ0NhcnQucHVyY2hhc2VzW2ldKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH0sIFtzaG9wcGluZ0NhcnRdKVxyXG4gICAgXHJcblxyXG4gICAgY29uc3Qgc3R5bGU6IENTU1Byb3BlcnRpZXMgPSB7XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInZhcigtLWFsbW9zdC13aGl0ZSlcIixcclxuICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgIG1pbkhlaWdodDogJ2NhbGMoMTAwdmggLSB2YXIoLS1oZWFkZXItaGVpZ2h0KScsXHJcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiXHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgaWQ9XCJ0aGUtcHJvZHVjdC1kZXRhaWwtcGFnZS1vZi1jb21wdXRlclwiIHN0eWxlPXtzdHlsZX0+XHJcbiAgICAgICAgICAgIDxJbWFnZXNTZWN0aW9uIHByb2R1Y3Q9e3Byb2R1Y3R9IHNldFByb2R1Y3Q9e3NldFByb2R1Y3R9IHB1cmNoYXNlPXtwdXJjaGFzZX0gc2V0UHVyY2hhc2U9e3NldFB1cmNoYXNlfSBzaG9wcGluZ0NhcnQ9e3Nob3BwaW5nQ2FydH0vPlxyXG4gICAgICAgICAgICA8SW5mb3JtYXRpb25TZWN0aW9uIHByb2R1Y3Q9e3Byb2R1Y3R9IHNldFByb2R1Y3Q9e3NldFByb2R1Y3R9IHB1cmNoYXNlRGF0YT17cHVyY2hhc2V9IHNldFB1cmNoYXNlRGF0YT17c2V0UHVyY2hhc2V9IHNob3BwaW5nQ2FydD17c2hvcHBpbmdDYXJ0fSBvcmRlcnM9e29yZGVyc30gaXNQcmljZUNoYW5nZT17aXNQcmljZUNoYW5nZX0gc2V0SXNwcmljZUNoYW5nZT17c2V0SXNQcmljZUNoYW5nZX0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBQYWdlRm9yQ29tcHV0ZXI7Il0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSW1hZ2VzU2VjdGlvbiIsIkluZm9ybWF0aW9uU2VjdGlvbiIsIlBhZ2VGb3JDb21wdXRlciIsInByb2R1Y3QiLCJzZXRQcm9kdWN0Iiwic2hvcHBpbmdDYXJ0Iiwib3JkZXJzIiwicHVyY2hhc2UiLCJzZXRQdXJjaGFzZSIsInVuZGVmaW5lZCIsImlzUHJpY2VDaGFuZ2UiLCJzZXRJc1ByaWNlQ2hhbmdlIiwicHVyY2hhc2VzIiwiaSIsImxlbmd0aCIsIl9pZCIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwid2lkdGgiLCJtaW5IZWlnaHQiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJkaXYiLCJpZCIsInB1cmNoYXNlRGF0YSIsInNldFB1cmNoYXNlRGF0YSIsInNldElzcHJpY2VDaGFuZ2UiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/pages/productDetails/[productId]/forComputer/pageForComputer.tsx\n"));

/***/ })

});