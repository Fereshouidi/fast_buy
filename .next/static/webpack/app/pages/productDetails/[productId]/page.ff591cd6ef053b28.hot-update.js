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

/***/ "(app-pages-browser)/./app/pages/productDetails/[productId]/forComputer/component/informationSection.tsx/component/discountCode.tsx":
/*!**********************************************************************************************************************!*\
  !*** ./app/pages/productDetails/[productId]/forComputer/component/informationSection.tsx/component/discountCode.tsx ***!
  \**********************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_contexts_activeLanguage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/contexts/activeLanguage */ \"(app-pages-browser)/./app/contexts/activeLanguage.tsx\");\n/* harmony import */ var _app_contexts_companyInformation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/contexts/companyInformation */ \"(app-pages-browser)/./app/contexts/companyInformation.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst DiscountCode = (param)=>{\n    let { product, purchaseData, setDiscountCodeAmount, isPriceChange, setIspriceChange, price, setPrice } = param;\n    var _useContext, _purchaseData_discountCode;\n    _s();\n    const activeLanguage = (_useContext = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_app_contexts_activeLanguage__WEBPACK_IMPORTED_MODULE_1__.ActiveLanguageContext)) === null || _useContext === void 0 ? void 0 : _useContext.activeLanguage;\n    const companyInformation = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_app_contexts_companyInformation__WEBPACK_IMPORTED_MODULE_2__.CompanyInformationContext);\n    const handleChange = (event)=>{\n        var _product_discountCode;\n        if (event.target.value == (product === null || product === void 0 ? void 0 : (_product_discountCode = product.discountCode) === null || _product_discountCode === void 0 ? void 0 : _product_discountCode.code) && !(purchaseData === null || purchaseData === void 0 ? void 0 : purchaseData.discountCode)) {\n            var _product_discountCode1, _product_discountCode2;\n            setDiscountCodeAmount({\n                discount: product.discountCode.discount,\n                discountPercent: product.discountCode.discountPercent\n            });\n            var _product_discountCode_discount;\n            setPrice(price - ((_product_discountCode_discount = product === null || product === void 0 ? void 0 : (_product_discountCode1 = product.discountCode) === null || _product_discountCode1 === void 0 ? void 0 : _product_discountCode1.discount) !== null && _product_discountCode_discount !== void 0 ? _product_discountCode_discount : (_product_discountCode2 = product.discountCode) === null || _product_discountCode2 === void 0 ? void 0 : _product_discountCode2.discountPercent));\n            setIspriceChange(true);\n        }\n    };\n    const style = {\n        width: 'var(--extra-long-width)',\n        height: 'var(--primary-height)',\n        borderRadius: '20px',\n        paddingTop: '5px',\n        position: 'relative',\n        color: 'var(--black)'\n    };\n    const styleH6 = {\n        top: 0,\n        position: 'absolute',\n        margin: '0 var(--medium-margin)',\n        padding: '0 var(--medium-padding)',\n        backgroundColor: 'var(--almost-white)'\n    };\n    const styleInput = {\n        width: '100%',\n        height: '100%',\n        outline: 'none',\n        border: \"1px solid \".concat(companyInformation === null || companyInformation === void 0 ? void 0 : companyInformation.primaryColor),\n        borderRadius: '20px',\n        backgroundColor: 'var(--almost-white)',\n        padding: '0 var(--large-padding)',\n        color: 'var(--black)'\n    };\n    var _purchaseData_discountCode_code;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"item\",\n        style: style,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                style: styleH6,\n                children: activeLanguage === null || activeLanguage === void 0 ? void 0 : activeLanguage.discountCodeW\n            }, void 0, false, {\n                fileName: \"C:\\\\my_projects\\\\fast_buy\\\\webSite_for_the_customer\\\\app\\\\pages\\\\productDetails\\\\[productId]\\\\forComputer\\\\component\\\\informationSection.tsx\\\\component\\\\discountCode.tsx\",\n                lineNumber: 70,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                style: styleInput,\n                placeholder: (_purchaseData_discountCode_code = purchaseData === null || purchaseData === void 0 ? void 0 : (_purchaseData_discountCode = purchaseData.discountCode) === null || _purchaseData_discountCode === void 0 ? void 0 : _purchaseData_discountCode.code) !== null && _purchaseData_discountCode_code !== void 0 ? _purchaseData_discountCode_code : \"...\",\n                onChange: (event)=>handleChange(event)\n            }, void 0, false, {\n                fileName: \"C:\\\\my_projects\\\\fast_buy\\\\webSite_for_the_customer\\\\app\\\\pages\\\\productDetails\\\\[productId]\\\\forComputer\\\\component\\\\informationSection.tsx\\\\component\\\\discountCode.tsx\",\n                lineNumber: 71,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\my_projects\\\\fast_buy\\\\webSite_for_the_customer\\\\app\\\\pages\\\\productDetails\\\\[productId]\\\\forComputer\\\\component\\\\informationSection.tsx\\\\component\\\\discountCode.tsx\",\n        lineNumber: 69,\n        columnNumber: 9\n    }, undefined);\n};\n_s(DiscountCode, \"zln8FVMIaAdFL5vAPidl6Ghpry4=\");\n_c = DiscountCode;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DiscountCode);\nvar _c;\n$RefreshReg$(_c, \"DiscountCode\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlcy9wcm9kdWN0RGV0YWlscy9bcHJvZHVjdElkXS9mb3JDb21wdXRlci9jb21wb25lbnQvaW5mb3JtYXRpb25TZWN0aW9uLnRzeC9jb21wb25lbnQvZGlzY291bnRDb2RlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUVzRTtBQUNRO0FBRzVCO0FBY2xELE1BQU1HLGVBQWU7UUFBQyxFQUFDQyxPQUFPLEVBQUVDLFlBQVksRUFBRUMscUJBQXFCLEVBQUVDLGFBQWEsRUFBRUMsZ0JBQWdCLEVBQUVDLEtBQUssRUFBRUMsUUFBUSxFQUFTO1FBRW5HUixhQWdEb0NHOztJQWhEM0QsTUFBTU0sa0JBQWlCVCxjQUFBQSxpREFBVUEsQ0FBQ0YsK0VBQXFCQSxlQUFoQ0Usa0NBQUFBLFlBQW1DUyxjQUFjO0lBQ3hFLE1BQU1DLHFCQUFxQlYsaURBQVVBLENBQUNELHVGQUF5QkE7SUFFL0QsTUFBTVksZUFBZSxDQUFDQztZQUNPVjtRQUF6QixJQUFHVSxNQUFNQyxNQUFNLENBQUNDLEtBQUssS0FBSVosb0JBQUFBLCtCQUFBQSx3QkFBQUEsUUFBU2EsWUFBWSxjQUFyQmIsNENBQUFBLHNCQUF1QmMsSUFBSSxLQUFJLEVBQUNiLHlCQUFBQSxtQ0FBQUEsYUFBY1ksWUFBWSxHQUFDO2dCQU05RGIsd0JBQWtDQTtZQUxwREUsc0JBQXNCO2dCQUNsQmEsVUFBVWYsUUFBUWEsWUFBWSxDQUFDRSxRQUFRO2dCQUN2Q0MsaUJBQWlCaEIsUUFBUWEsWUFBWSxDQUFDRyxlQUFlO1lBQ3pEO2dCQUVrQmhCO1lBQWxCTSxTQUFTRCxRQUFTTCxDQUFBQSxDQUFBQSxpQ0FBQUEsb0JBQUFBLCtCQUFBQSx5QkFBQUEsUUFBU2EsWUFBWSxjQUFyQmIsNkNBQUFBLHVCQUF1QmUsUUFBUSxjQUEvQmYsNENBQUFBLGtDQUFrQ0EseUJBQUFBLFFBQVFhLFlBQVksY0FBcEJiLDZDQUFBQSx1QkFBc0JnQixlQUFlO1lBQ3pGWixpQkFBaUI7UUFFckI7SUFDSjtJQUlBLE1BQU1hLFFBQXVCO1FBQ3pCQyxPQUFPO1FBQ1BDLFFBQVE7UUFDUkMsY0FBYztRQUNkQyxZQUFZO1FBQ1pDLFVBQVU7UUFDVkMsT0FBTztJQUVYO0lBQ0EsTUFBTUMsVUFBeUI7UUFDM0JDLEtBQUs7UUFDTEgsVUFBVTtRQUNWSSxRQUFRO1FBQ1JDLFNBQVM7UUFDVEMsaUJBQWlCO0lBRXJCO0lBQ0EsTUFBTUMsYUFBNEI7UUFDOUJYLE9BQU87UUFDUEMsUUFBUTtRQUNSVyxTQUFTO1FBQ1RDLFFBQVEsYUFBOEMsT0FBakN2QiwrQkFBQUEseUNBQUFBLG1CQUFvQndCLFlBQVk7UUFDckRaLGNBQWM7UUFDZFEsaUJBQWlCO1FBQ2pCRCxTQUFTO1FBQ1RKLE9BQU87SUFDWDtRQUkyRHRCO0lBSDNELHFCQUNJLDhEQUFDZ0M7UUFBSUMsV0FBVTtRQUFPakIsT0FBT0E7OzBCQUN6Qiw4REFBQ2tCO2dCQUFHbEIsT0FBT087MEJBQVVqQiwyQkFBQUEscUNBQUFBLGVBQWdCNkIsYUFBYTs7Ozs7OzBCQUNsRCw4REFBQ0M7Z0JBQU1DLE1BQUs7Z0JBQU9yQixPQUFPWTtnQkFBWVUsYUFBYXRDLENBQUFBLGtDQUFBQSx5QkFBQUEsb0NBQUFBLDZCQUFBQSxhQUFjWSxZQUFZLGNBQTFCWixpREFBQUEsMkJBQTRCYSxJQUFJLGNBQWhDYiw2Q0FBQUEsa0NBQW1DO2dCQUFPdUMsVUFBVSxDQUFDOUIsUUFBVUQsYUFBYUM7Ozs7Ozs7Ozs7OztBQUczSTtHQXJETVg7S0FBQUE7QUFzRE4saUVBQWVBLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIkM6XFxteV9wcm9qZWN0c1xcZmFzdF9idXlcXHdlYlNpdGVfZm9yX3RoZV9jdXN0b21lclxcYXBwXFxwYWdlc1xccHJvZHVjdERldGFpbHNcXFtwcm9kdWN0SWRdXFxmb3JDb21wdXRlclxcY29tcG9uZW50XFxpbmZvcm1hdGlvblNlY3Rpb24udHN4XFxjb21wb25lbnRcXGRpc2NvdW50Q29kZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xyXG5cclxuaW1wb3J0IHsgQWN0aXZlTGFuZ3VhZ2VDb250ZXh0IH0gZnJvbSBcIkAvYXBwL2NvbnRleHRzL2FjdGl2ZUxhbmd1YWdlXCI7XHJcbmltcG9ydCB7IENvbXBhbnlJbmZvcm1hdGlvbkNvbnRleHQgfSBmcm9tIFwiQC9hcHAvY29udGV4dHMvY29tcGFueUluZm9ybWF0aW9uXCI7XHJcbmltcG9ydCB7IHByb2R1Y3RQYXJhbXMgfSBmcm9tIFwiQC9hcHAvY29udGV4dHMvcHJvZHVjdFNlbGVjdEZvclNob3dpbmdcIjtcclxuaW1wb3J0IHsgcHVyY2hhc2VQYXJhbXMgfSBmcm9tIFwiQC9hcHAvY29udGV4dHMvcHVyY2hhc2VEYXRhXCI7XHJcbmltcG9ydCB7IENTU1Byb3BlcnRpZXMsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbnR5cGUgUGFyYW1zID0ge1xyXG4gICAgcHJvZHVjdDogcHJvZHVjdFBhcmFtcyB8IHVuZGVmaW5lZCxcclxuICAgIHNldFByb2R1Y3Q6ICh2YWx1ZTogcHJvZHVjdFBhcmFtcykgPT4gdm9pZFxyXG4gICAgcHVyY2hhc2VEYXRhOiBwdXJjaGFzZVBhcmFtcyB8IHVuZGVmaW5lZCxcclxuICAgIHNldFB1cmNoYXNlRGF0YTogKHZhbHVlOiBwdXJjaGFzZVBhcmFtcykgPT4gdm9pZCxcclxuICAgIGRpc2NvdW50Q29kZUFtb3VudDoge2Rpc2NvdW50PzogbnVtYmVyIHwgbnVsbCwgZGlzY291bnRQZXJjZW50PzogbnVtYmVyIHwgbnVsbH0sXHJcbiAgICBzZXREaXNjb3VudENvZGVBbW91bnQ6ICAodmFsdWU6IHtkaXNjb3VudD86IG51bWJlciB8IG51bGwsIGRpc2NvdW50UGVyY2VudD86IG51bWJlciB8IG51bGx9KSA9PiB2b2lkLFxyXG4gICAgcHJpY2U6IG51bWJlciB8IHVuZGVmaW5lZCwgXHJcbiAgICBzZXRQcmljZTogKHZhbHVlOiBudW1iZXIgfCB1bmRlZmluZWQpID0+IHZvaWQsXHJcbiAgICBpc1ByaWNlQ2hhbmdlOiBib29sZWFuLFxyXG4gICAgc2V0SXNwcmljZUNoYW5nZTogKHZhbHVlOiBib29sZWFuKSA9PiB2b2lkXHJcbn1cclxuY29uc3QgRGlzY291bnRDb2RlID0gKHtwcm9kdWN0LCBwdXJjaGFzZURhdGEsIHNldERpc2NvdW50Q29kZUFtb3VudCwgaXNQcmljZUNoYW5nZSwgc2V0SXNwcmljZUNoYW5nZSwgcHJpY2UsIHNldFByaWNlfTogUGFyYW1zKSA9PiB7XHJcblxyXG4gICAgY29uc3QgYWN0aXZlTGFuZ3VhZ2UgPSB1c2VDb250ZXh0KEFjdGl2ZUxhbmd1YWdlQ29udGV4dCk/LmFjdGl2ZUxhbmd1YWdlXHJcbiAgICBjb25zdCBjb21wYW55SW5mb3JtYXRpb24gPSB1c2VDb250ZXh0KENvbXBhbnlJbmZvcm1hdGlvbkNvbnRleHQpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcclxuICAgICAgICBpZihldmVudC50YXJnZXQudmFsdWUgPT0gcHJvZHVjdD8uZGlzY291bnRDb2RlPy5jb2RlICYmICFwdXJjaGFzZURhdGE/LmRpc2NvdW50Q29kZSl7XHJcbiAgICAgICAgICAgIHNldERpc2NvdW50Q29kZUFtb3VudCh7XHJcbiAgICAgICAgICAgICAgICBkaXNjb3VudDogcHJvZHVjdC5kaXNjb3VudENvZGUuZGlzY291bnQsXHJcbiAgICAgICAgICAgICAgICBkaXNjb3VudFBlcmNlbnQ6IHByb2R1Y3QuZGlzY291bnRDb2RlLmRpc2NvdW50UGVyY2VudFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgc2V0UHJpY2UocHJpY2UgLSAocHJvZHVjdD8uZGlzY291bnRDb2RlPy5kaXNjb3VudD8/IHByb2R1Y3QuZGlzY291bnRDb2RlPy5kaXNjb3VudFBlcmNlbnQpKVxyXG4gICAgICAgICAgICBzZXRJc3ByaWNlQ2hhbmdlKHRydWUpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgXHJcblxyXG5cclxuICAgIGNvbnN0IHN0eWxlIDpDU1NQcm9wZXJ0aWVzID0ge1xyXG4gICAgICAgIHdpZHRoOiAndmFyKC0tZXh0cmEtbG9uZy13aWR0aCknLFxyXG4gICAgICAgIGhlaWdodDogJ3ZhcigtLXByaW1hcnktaGVpZ2h0KScsXHJcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAnMjBweCcsXHJcbiAgICAgICAgcGFkZGluZ1RvcDogJzVweCcsXHJcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgICAgY29sb3I6ICd2YXIoLS1ibGFjayknXHJcblxyXG4gICAgfVxyXG4gICAgY29uc3Qgc3R5bGVINiA6Q1NTUHJvcGVydGllcyA9IHtcclxuICAgICAgICB0b3A6IDAsXHJcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgbWFyZ2luOiAnMCB2YXIoLS1tZWRpdW0tbWFyZ2luKScsXHJcbiAgICAgICAgcGFkZGluZzogJzAgdmFyKC0tbWVkaXVtLXBhZGRpbmcpJyxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd2YXIoLS1hbG1vc3Qtd2hpdGUpJyxcclxuXHJcbiAgICB9XHJcbiAgICBjb25zdCBzdHlsZUlucHV0IDpDU1NQcm9wZXJ0aWVzID0ge1xyXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICAgICAgb3V0bGluZTogJ25vbmUnLFxyXG4gICAgICAgIGJvcmRlcjogYDFweCBzb2xpZCAke2NvbXBhbnlJbmZvcm1hdGlvbj8ucHJpbWFyeUNvbG9yfWAsXHJcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAnMjBweCcsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAndmFyKC0tYWxtb3N0LXdoaXRlKScsXHJcbiAgICAgICAgcGFkZGluZzogJzAgdmFyKC0tbGFyZ2UtcGFkZGluZyknLFxyXG4gICAgICAgIGNvbG9yOiAndmFyKC0tYmxhY2spJ1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIiBzdHlsZT17c3R5bGV9PlxyXG4gICAgICAgICAgICA8aDYgc3R5bGU9e3N0eWxlSDZ9PnthY3RpdmVMYW5ndWFnZT8uZGlzY291bnRDb2RlV308L2g2PlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBzdHlsZT17c3R5bGVJbnB1dH0gcGxhY2Vob2xkZXI9e3B1cmNoYXNlRGF0YT8uZGlzY291bnRDb2RlPy5jb2RlPz8gXCIuLi5cIn0gb25DaGFuZ2U9eyhldmVudCkgPT4gaGFuZGxlQ2hhbmdlKGV2ZW50KX0vPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IERpc2NvdW50Q29kZTsiXSwibmFtZXMiOlsiQWN0aXZlTGFuZ3VhZ2VDb250ZXh0IiwiQ29tcGFueUluZm9ybWF0aW9uQ29udGV4dCIsInVzZUNvbnRleHQiLCJEaXNjb3VudENvZGUiLCJwcm9kdWN0IiwicHVyY2hhc2VEYXRhIiwic2V0RGlzY291bnRDb2RlQW1vdW50IiwiaXNQcmljZUNoYW5nZSIsInNldElzcHJpY2VDaGFuZ2UiLCJwcmljZSIsInNldFByaWNlIiwiYWN0aXZlTGFuZ3VhZ2UiLCJjb21wYW55SW5mb3JtYXRpb24iLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiZGlzY291bnRDb2RlIiwiY29kZSIsImRpc2NvdW50IiwiZGlzY291bnRQZXJjZW50Iiwic3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsImJvcmRlclJhZGl1cyIsInBhZGRpbmdUb3AiLCJwb3NpdGlvbiIsImNvbG9yIiwic3R5bGVINiIsInRvcCIsIm1hcmdpbiIsInBhZGRpbmciLCJiYWNrZ3JvdW5kQ29sb3IiLCJzdHlsZUlucHV0Iiwib3V0bGluZSIsImJvcmRlciIsInByaW1hcnlDb2xvciIsImRpdiIsImNsYXNzTmFtZSIsImg2IiwiZGlzY291bnRDb2RlVyIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/pages/productDetails/[productId]/forComputer/component/informationSection.tsx/component/discountCode.tsx\n"));

/***/ })

});