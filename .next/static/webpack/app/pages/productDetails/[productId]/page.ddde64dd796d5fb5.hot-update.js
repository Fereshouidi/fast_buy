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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _component_imagesSection_imagesSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/imagesSection/imagesSection */ \"(app-pages-browser)/./app/pages/productDetails/[productId]/forComputer/component/imagesSection/imagesSection.tsx\");\n/* harmony import */ var _component_informationSection_tsx_informationSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/informationSection.tsx/informationSection */ \"(app-pages-browser)/./app/pages/productDetails/[productId]/forComputer/component/informationSection.tsx/informationSection.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst PageForComputer = (param)=>{\n    let { product, setProduct, shoppingCart, orders } = param;\n    _s();\n    const [purchase, setPurchase] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined);\n    const [isPriceChange, setIsPriceChange] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"PageForComputer.useEffect\": ()=>{\n            if (shoppingCart === null || shoppingCart === void 0 ? void 0 : shoppingCart.purchases) {\n                var _shoppingCart_purchases;\n                for(let i = 0; i < (shoppingCart === null || shoppingCart === void 0 ? void 0 : (_shoppingCart_purchases = shoppingCart.purchases) === null || _shoppingCart_purchases === void 0 ? void 0 : _shoppingCart_purchases.length); i++){\n                    var _shoppingCart_purchases_i_product;\n                    if (((_shoppingCart_purchases_i_product = shoppingCart.purchases[i].product) === null || _shoppingCart_purchases_i_product === void 0 ? void 0 : _shoppingCart_purchases_i_product._id) == (product === null || product === void 0 ? void 0 : product._id)) {\n                        setPurchase(shoppingCart.purchases[i]);\n                    }\n                }\n            }\n        }\n    }[\"PageForComputer.useEffect\"], [\n        shoppingCart\n    ]);\n    const style = {\n        backgroundColor: \"var(--almost-white)\",\n        width: '100%',\n        minHeight: 'calc(100vh - var(--header-height)',\n        display: 'flex',\n        justifyContent: \"center\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"the-product-detail-page-of-computer\",\n        style: style,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_imagesSection_imagesSection__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                product: product,\n                setProduct: setProduct,\n                purchase: purchase,\n                setPurchase: setPurchase,\n                shoppingCart: shoppingCart\n            }, void 0, false, {\n                fileName: \"C:\\\\my_projects\\\\fast_buy\\\\webSite_for_the_customer\\\\app\\\\pages\\\\productDetails\\\\[productId]\\\\forComputer\\\\pageForComputer.tsx\",\n                lineNumber: 46,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_informationSection_tsx_informationSection__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                product: product,\n                setProduct: setProduct,\n                purchaseData: purchase,\n                setPurchaseData: setPurchase,\n                shoppingCart: shoppingCart,\n                orders: orders,\n                isPriceChange: true\n            }, void 0, false, {\n                fileName: \"C:\\\\my_projects\\\\fast_buy\\\\webSite_for_the_customer\\\\app\\\\pages\\\\productDetails\\\\[productId]\\\\forComputer\\\\pageForComputer.tsx\",\n                lineNumber: 47,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\my_projects\\\\fast_buy\\\\webSite_for_the_customer\\\\app\\\\pages\\\\productDetails\\\\[productId]\\\\forComputer\\\\pageForComputer.tsx\",\n        lineNumber: 45,\n        columnNumber: 9\n    }, undefined);\n};\n_s(PageForComputer, \"EEaaWSihEcqM8baH+a51GEe4ncc=\");\n_c = PageForComputer;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageForComputer);\nvar _c;\n$RefreshReg$(_c, \"PageForComputer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlcy9wcm9kdWN0RGV0YWlscy9bcHJvZHVjdElkXS9mb3JDb21wdXRlci9wYWdlRm9yQ29tcHV0ZXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQzJEO0FBQ1M7QUFDbUI7QUFjdkYsTUFBTUksa0JBQWtCO1FBQUMsRUFBQ0MsT0FBTyxFQUFFQyxVQUFVLEVBQUVDLFlBQVksRUFBRUMsTUFBTSxFQUFTOztJQUV4RSxNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR1QsK0NBQVFBLENBQTZCVTtJQUNyRSxNQUFNLENBQUNDLGVBQWVDLGlCQUFpQixHQUFHWiwrQ0FBUUEsQ0FBVTtJQUk1REQsZ0RBQVNBO3FDQUFDO1lBQ04sSUFBSU8seUJBQUFBLG1DQUFBQSxhQUFjTyxTQUFTLEVBQUU7b0JBQ0pQO2dCQUFyQixJQUFLLElBQUlRLElBQUksR0FBSUEsS0FBSVIseUJBQUFBLG9DQUFBQSwwQkFBQUEsYUFBY08sU0FBUyxjQUF2QlAsOENBQUFBLHdCQUF5QlMsTUFBTSxHQUFHRCxJQUFLO3dCQUNwRFI7b0JBQUosSUFBSUEsRUFBQUEsb0NBQUFBLGFBQWFPLFNBQVMsQ0FBQ0MsRUFBRSxDQUFDVixPQUFPLGNBQWpDRSx3REFBQUEsa0NBQW1DVSxHQUFHLE1BQUlaLG9CQUFBQSw4QkFBQUEsUUFBU1ksR0FBRyxHQUFFO3dCQUN4RFAsWUFBWUgsYUFBYU8sU0FBUyxDQUFDQyxFQUFFO29CQUN6QztnQkFDSjtZQUNKO1FBRUo7b0NBQUc7UUFBQ1I7S0FBYTtJQUdqQixNQUFNVyxRQUF1QjtRQUN6QkMsaUJBQWlCO1FBQ2pCQyxPQUFPO1FBQ1BDLFdBQVc7UUFDWEMsU0FBUztRQUNUQyxnQkFBZ0I7SUFDcEI7SUFDQSxxQkFDSSw4REFBQ0M7UUFBSUMsSUFBRztRQUFzQ1AsT0FBT0E7OzBCQUNqRCw4REFBQ2hCLDhFQUFhQTtnQkFBQ0csU0FBU0E7Z0JBQVNDLFlBQVlBO2dCQUFZRyxVQUFVQTtnQkFBVUMsYUFBYUE7Z0JBQWFILGNBQWNBOzs7Ozs7MEJBQ3JILDhEQUFDSiw0RkFBa0JBO2dCQUFDRSxTQUFTQTtnQkFBU0MsWUFBWUE7Z0JBQVlvQixjQUFjakI7Z0JBQVVrQixpQkFBaUJqQjtnQkFBYUgsY0FBY0E7Z0JBQWNDLFFBQVFBO2dCQUFRSSxhQUFhOzs7Ozs7Ozs7Ozs7QUFHekw7R0FoQ01SO0tBQUFBO0FBaUNOLGlFQUFlQSxlQUFlQSxFQUFDIiwic291cmNlcyI6WyJDOlxcbXlfcHJvamVjdHNcXGZhc3RfYnV5XFx3ZWJTaXRlX2Zvcl90aGVfY3VzdG9tZXJcXGFwcFxccGFnZXNcXHByb2R1Y3REZXRhaWxzXFxbcHJvZHVjdElkXVxcZm9yQ29tcHV0ZXJcXHBhZ2VGb3JDb21wdXRlci50c3giXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xyXG5pbXBvcnQgeyBDU1NQcm9wZXJ0aWVzLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBJbWFnZXNTZWN0aW9uIGZyb20gXCIuL2NvbXBvbmVudC9pbWFnZXNTZWN0aW9uL2ltYWdlc1NlY3Rpb25cIjtcclxuaW1wb3J0IEluZm9ybWF0aW9uU2VjdGlvbiBmcm9tIFwiLi9jb21wb25lbnQvaW5mb3JtYXRpb25TZWN0aW9uLnRzeC9pbmZvcm1hdGlvblNlY3Rpb25cIjtcclxuaW1wb3J0IHsgcHJvZHVjdFBhcmFtcyB9IGZyb20gXCJAL2FwcC9jb250ZXh0cy9wcm9kdWN0U2VsZWN0Rm9yU2hvd2luZ1wiO1xyXG5pbXBvcnQgeyBzaG9wcGluZ0NhcnRQYXJhbXMgfSBmcm9tIFwiQC9hcHAvY29udGV4dHMvc2hvcHBpbmdDYXJ0XCI7XHJcbmltcG9ydCB7IHB1cmNoYXNlUGFyYW1zIH0gZnJvbSBcIkAvYXBwL2NvbnRleHRzL3B1cmNoYXNlRGF0YVwiO1xyXG5pbXBvcnQgeyBPcmRlclBhcmFtcyB9IGZyb20gXCJAL2FwcC9jb250ZXh0cy9vcmRlclwiO1xyXG5cclxudHlwZSBQYXJhbXMgPSB7XHJcbiAgICBwcm9kdWN0OiBwcm9kdWN0UGFyYW1zIHwgdW5kZWZpbmVkLFxyXG4gICAgc2V0UHJvZHVjdDogKHZhbHVlOiBwcm9kdWN0UGFyYW1zKSA9PiB2b2lkLFxyXG4gICAgcHVyY2hhc2U/OiBwdXJjaGFzZVBhcmFtcyB8IHVuZGVmaW5lZFxyXG4gICAgc2V0UHVyY2hhc2U/OiAodmFsdWU6IHB1cmNoYXNlUGFyYW1zIHwgdW5kZWZpbmVkKSA9PiB2b2lkICAgIFxyXG4gICAgc2hvcHBpbmdDYXJ0OiBzaG9wcGluZ0NhcnRQYXJhbXMgfCB1bmRlZmluZWQsXHJcbiAgICBvcmRlcnM6IE9yZGVyUGFyYW1zW10gfCB1bmRlZmluZWRcclxufVxyXG5jb25zdCBQYWdlRm9yQ29tcHV0ZXIgPSAoe3Byb2R1Y3QsIHNldFByb2R1Y3QsIHNob3BwaW5nQ2FydCwgb3JkZXJzfTogUGFyYW1zKSA9PiB7XHJcblxyXG4gICAgY29uc3QgW3B1cmNoYXNlLCBzZXRQdXJjaGFzZV0gPSB1c2VTdGF0ZTxwdXJjaGFzZVBhcmFtcyB8IHVuZGVmaW5lZD4odW5kZWZpbmVkKTtcclxuICAgIGNvbnN0IFtpc1ByaWNlQ2hhbmdlLCBzZXRJc1ByaWNlQ2hhbmdlXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuXHJcblxyXG4gICAgXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChzaG9wcGluZ0NhcnQ/LnB1cmNoYXNlcykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMCA7IGkgPCBzaG9wcGluZ0NhcnQ/LnB1cmNoYXNlcz8ubGVuZ3RoIDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2hvcHBpbmdDYXJ0LnB1cmNoYXNlc1tpXS5wcm9kdWN0Py5faWQgPT0gcHJvZHVjdD8uX2lkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0UHVyY2hhc2Uoc2hvcHBpbmdDYXJ0LnB1cmNoYXNlc1tpXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9LCBbc2hvcHBpbmdDYXJ0XSlcclxuICAgIFxyXG5cclxuICAgIGNvbnN0IHN0eWxlOiBDU1NQcm9wZXJ0aWVzID0ge1xyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ2YXIoLS1hbG1vc3Qtd2hpdGUpXCIsXHJcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICBtaW5IZWlnaHQ6ICdjYWxjKDEwMHZoIC0gdmFyKC0taGVhZGVyLWhlaWdodCknLFxyXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIlxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGlkPVwidGhlLXByb2R1Y3QtZGV0YWlsLXBhZ2Utb2YtY29tcHV0ZXJcIiBzdHlsZT17c3R5bGV9PlxyXG4gICAgICAgICAgICA8SW1hZ2VzU2VjdGlvbiBwcm9kdWN0PXtwcm9kdWN0fSBzZXRQcm9kdWN0PXtzZXRQcm9kdWN0fSBwdXJjaGFzZT17cHVyY2hhc2V9IHNldFB1cmNoYXNlPXtzZXRQdXJjaGFzZX0gc2hvcHBpbmdDYXJ0PXtzaG9wcGluZ0NhcnR9Lz5cclxuICAgICAgICAgICAgPEluZm9ybWF0aW9uU2VjdGlvbiBwcm9kdWN0PXtwcm9kdWN0fSBzZXRQcm9kdWN0PXtzZXRQcm9kdWN0fSBwdXJjaGFzZURhdGE9e3B1cmNoYXNlfSBzZXRQdXJjaGFzZURhdGE9e3NldFB1cmNoYXNlfSBzaG9wcGluZ0NhcnQ9e3Nob3BwaW5nQ2FydH0gb3JkZXJzPXtvcmRlcnN9IGlzUHJpY2VDaGFuZ2UgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBQYWdlRm9yQ29tcHV0ZXI7Il0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSW1hZ2VzU2VjdGlvbiIsIkluZm9ybWF0aW9uU2VjdGlvbiIsIlBhZ2VGb3JDb21wdXRlciIsInByb2R1Y3QiLCJzZXRQcm9kdWN0Iiwic2hvcHBpbmdDYXJ0Iiwib3JkZXJzIiwicHVyY2hhc2UiLCJzZXRQdXJjaGFzZSIsInVuZGVmaW5lZCIsImlzUHJpY2VDaGFuZ2UiLCJzZXRJc1ByaWNlQ2hhbmdlIiwicHVyY2hhc2VzIiwiaSIsImxlbmd0aCIsIl9pZCIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwid2lkdGgiLCJtaW5IZWlnaHQiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJkaXYiLCJpZCIsInB1cmNoYXNlRGF0YSIsInNldFB1cmNoYXNlRGF0YSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/pages/productDetails/[productId]/forComputer/pageForComputer.tsx\n"));

/***/ })

});