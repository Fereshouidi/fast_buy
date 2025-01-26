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

/***/ "(app-pages-browser)/./app/pages/productDetails/[productId]/forPhone/component/informationSection.tsx/component/discountCode.tsx":
/*!*******************************************************************************************************************!*\
  !*** ./app/pages/productDetails/[productId]/forPhone/component/informationSection.tsx/component/discountCode.tsx ***!
  \*******************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_contexts_activeLanguage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/contexts/activeLanguage */ \"(app-pages-browser)/./app/contexts/activeLanguage.tsx\");\n/* harmony import */ var _app_contexts_companyInformation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/contexts/companyInformation */ \"(app-pages-browser)/./app/contexts/companyInformation.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst DiscountCode = (param)=>{\n    let { product, purchaseData, setDiscountCodeAmount, price, setPrice } = param;\n    var _useContext, _purchaseData_discountCode;\n    _s();\n    const activeLanguage = (_useContext = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_app_contexts_activeLanguage__WEBPACK_IMPORTED_MODULE_1__.ActiveLanguageContext)) === null || _useContext === void 0 ? void 0 : _useContext.activeLanguage;\n    const companyInformation = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_app_contexts_companyInformation__WEBPACK_IMPORTED_MODULE_2__.CompanyInformationContext);\n    const handleChange = (event)=>{\n        var _product_discountCode;\n        if (event.target.value == (product === null || product === void 0 ? void 0 : (_product_discountCode = product.discountCode) === null || _product_discountCode === void 0 ? void 0 : _product_discountCode.code)) {\n            setDiscountCodeAmount({\n                discount: product.discountCode.discount,\n                discountPercent: product.discountCode.discountPercent\n            });\n            if (product.discount) {\n                setPrice(product.discount.newPrice * (purchaseData === null || purchaseData === void 0 ? void 0 : purchaseData.quantity));\n            } else {\n                setPrice((product === null || product === void 0 ? void 0 : product.price) * (purchaseData === null || purchaseData === void 0 ? void 0 : purchaseData.quantity));\n            }\n        }\n    };\n    const style = {\n        width: 'var(--long-width)',\n        height: 'var(--primary-height)',\n        borderRadius: '20px',\n        paddingTop: '5px',\n        position: 'relative',\n        color: 'var(--black)'\n    };\n    const styleH6 = {\n        top: 0,\n        position: 'absolute',\n        margin: '0 var(--medium-margin)',\n        padding: '0 var(--medium-padding)',\n        backgroundColor: 'var(--almost-white)'\n    };\n    const styleInput = {\n        width: '100%',\n        height: '100%',\n        outline: 'none',\n        border: \"1px solid \".concat(companyInformation === null || companyInformation === void 0 ? void 0 : companyInformation.primaryColor),\n        borderRadius: '20px',\n        backgroundColor: 'var(--almost-white)',\n        padding: '0 var(--large-padding)',\n        color: 'var(--black)'\n    };\n    var _purchaseData_discountCode_code;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"item\",\n        style: style,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                style: styleH6,\n                children: activeLanguage === null || activeLanguage === void 0 ? void 0 : activeLanguage.discountCodeW\n            }, void 0, false, {\n                fileName: \"C:\\\\my_projects\\\\fast_buy\\\\webSite_for_the_customer\\\\app\\\\pages\\\\productDetails\\\\[productId]\\\\forPhone\\\\component\\\\informationSection.tsx\\\\component\\\\discountCode.tsx\",\n                lineNumber: 69,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                style: styleInput,\n                placeholder: (_purchaseData_discountCode_code = purchaseData === null || purchaseData === void 0 ? void 0 : (_purchaseData_discountCode = purchaseData.discountCode) === null || _purchaseData_discountCode === void 0 ? void 0 : _purchaseData_discountCode.code) !== null && _purchaseData_discountCode_code !== void 0 ? _purchaseData_discountCode_code : \"...\",\n                onChange: (event)=>handleChange(event)\n            }, void 0, false, {\n                fileName: \"C:\\\\my_projects\\\\fast_buy\\\\webSite_for_the_customer\\\\app\\\\pages\\\\productDetails\\\\[productId]\\\\forPhone\\\\component\\\\informationSection.tsx\\\\component\\\\discountCode.tsx\",\n                lineNumber: 70,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\my_projects\\\\fast_buy\\\\webSite_for_the_customer\\\\app\\\\pages\\\\productDetails\\\\[productId]\\\\forPhone\\\\component\\\\informationSection.tsx\\\\component\\\\discountCode.tsx\",\n        lineNumber: 68,\n        columnNumber: 9\n    }, undefined);\n};\n_s(DiscountCode, \"zln8FVMIaAdFL5vAPidl6Ghpry4=\");\n_c = DiscountCode;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DiscountCode);\nvar _c;\n$RefreshReg$(_c, \"DiscountCode\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlcy9wcm9kdWN0RGV0YWlscy9bcHJvZHVjdElkXS9mb3JQaG9uZS9jb21wb25lbnQvaW5mb3JtYXRpb25TZWN0aW9uLnRzeC9jb21wb25lbnQvZGlzY291bnRDb2RlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUVzRTtBQUNRO0FBRzVCO0FBWWxELE1BQU1HLGVBQWU7UUFBQyxFQUFDQyxPQUFPLEVBQUVDLFlBQVksRUFBRUMscUJBQXFCLEVBQUVDLEtBQUssRUFBRUMsUUFBUSxFQUFTO1FBRWxFTixhQWlEb0NHOztJQWpEM0QsTUFBTUksa0JBQWlCUCxjQUFBQSxpREFBVUEsQ0FBQ0YsK0VBQXFCQSxlQUFoQ0Usa0NBQUFBLFlBQW1DTyxjQUFjO0lBQ3hFLE1BQU1DLHFCQUFxQlIsaURBQVVBLENBQUNELHVGQUF5QkE7SUFFL0QsTUFBTVUsZUFBZSxDQUFDQztZQUNPUjtRQUF6QixJQUFHUSxNQUFNQyxNQUFNLENBQUNDLEtBQUssS0FBSVYsb0JBQUFBLCtCQUFBQSx3QkFBQUEsUUFBU1csWUFBWSxjQUFyQlgsNENBQUFBLHNCQUF1QlksSUFBSSxHQUFDO1lBQ2pEVixzQkFBc0I7Z0JBQ2xCVyxVQUFVYixRQUFRVyxZQUFZLENBQUNFLFFBQVE7Z0JBQ3ZDQyxpQkFBaUJkLFFBQVFXLFlBQVksQ0FBQ0csZUFBZTtZQUN6RDtZQUVBLElBQUlkLFFBQVFhLFFBQVEsRUFBRTtnQkFDbEJULFNBQVNKLFFBQVFhLFFBQVEsQ0FBQ0UsUUFBUSxJQUFHZCx5QkFBQUEsbUNBQUFBLGFBQWNlLFFBQVE7WUFDL0QsT0FBTztnQkFDSFosU0FBU0osQ0FBQUEsb0JBQUFBLDhCQUFBQSxRQUFTRyxLQUFLLEtBQUdGLHlCQUFBQSxtQ0FBQUEsYUFBY2UsUUFBUTtZQUNwRDtRQUNKO0lBQ0o7SUFJQSxNQUFNQyxRQUF1QjtRQUN6QkMsT0FBTztRQUNQQyxRQUFRO1FBQ1JDLGNBQWM7UUFDZEMsWUFBWTtRQUNaQyxVQUFVO1FBQ1ZDLE9BQU87SUFDWDtJQUNBLE1BQU1DLFVBQXlCO1FBQzNCQyxLQUFLO1FBQ0xILFVBQVU7UUFDVkksUUFBUTtRQUNSQyxTQUFTO1FBQ1RDLGlCQUFpQjtJQUVyQjtJQUNBLE1BQU1DLGFBQTRCO1FBQzlCWCxPQUFPO1FBQ1BDLFFBQVE7UUFDUlcsU0FBUztRQUNUQyxRQUFRLGFBQThDLE9BQWpDekIsK0JBQUFBLHlDQUFBQSxtQkFBb0IwQixZQUFZO1FBQ3JEWixjQUFjO1FBQ2RRLGlCQUFpQjtRQUNqQkQsU0FBUztRQUNUSixPQUFPO0lBQ1g7UUFJMkR0QjtJQUgzRCxxQkFDSSw4REFBQ2dDO1FBQUlDLFdBQVU7UUFBT2pCLE9BQU9BOzswQkFDekIsOERBQUNrQjtnQkFBR2xCLE9BQU9POzBCQUFVbkIsMkJBQUFBLHFDQUFBQSxlQUFnQitCLGFBQWE7Ozs7OzswQkFDbEQsOERBQUNDO2dCQUFNQyxNQUFLO2dCQUFPckIsT0FBT1k7Z0JBQVlVLGFBQWF0QyxDQUFBQSxrQ0FBQUEseUJBQUFBLG9DQUFBQSw2QkFBQUEsYUFBY1UsWUFBWSxjQUExQlYsaURBQUFBLDJCQUE0QlcsSUFBSSxjQUFoQ1gsNkNBQUFBLGtDQUFtQztnQkFBT3VDLFVBQVUsQ0FBQ2hDLFFBQVVELGFBQWFDOzs7Ozs7Ozs7Ozs7QUFHM0k7R0F0RE1UO0tBQUFBO0FBdUROLGlFQUFlQSxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJDOlxcbXlfcHJvamVjdHNcXGZhc3RfYnV5XFx3ZWJTaXRlX2Zvcl90aGVfY3VzdG9tZXJcXGFwcFxccGFnZXNcXHByb2R1Y3REZXRhaWxzXFxbcHJvZHVjdElkXVxcZm9yUGhvbmVcXGNvbXBvbmVudFxcaW5mb3JtYXRpb25TZWN0aW9uLnRzeFxcY29tcG9uZW50XFxkaXNjb3VudENvZGUudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcclxuXHJcbmltcG9ydCB7IEFjdGl2ZUxhbmd1YWdlQ29udGV4dCB9IGZyb20gXCJAL2FwcC9jb250ZXh0cy9hY3RpdmVMYW5ndWFnZVwiO1xyXG5pbXBvcnQgeyBDb21wYW55SW5mb3JtYXRpb25Db250ZXh0IH0gZnJvbSBcIkAvYXBwL2NvbnRleHRzL2NvbXBhbnlJbmZvcm1hdGlvblwiO1xyXG5pbXBvcnQgeyBwcm9kdWN0UGFyYW1zIH0gZnJvbSBcIkAvYXBwL2NvbnRleHRzL3Byb2R1Y3RTZWxlY3RGb3JTaG93aW5nXCI7XHJcbmltcG9ydCB7IHB1cmNoYXNlUGFyYW1zIH0gZnJvbSBcIkAvYXBwL2NvbnRleHRzL3B1cmNoYXNlRGF0YVwiO1xyXG5pbXBvcnQgeyBDU1NQcm9wZXJ0aWVzLCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG50eXBlIFBhcmFtcyA9IHtcclxuICAgIHByb2R1Y3Q6IHByb2R1Y3RQYXJhbXMgfCB1bmRlZmluZWQsXHJcbiAgICBzZXRQcm9kdWN0OiAodmFsdWU6IHByb2R1Y3RQYXJhbXMpID0+IHZvaWRcclxuICAgIHB1cmNoYXNlRGF0YTogcHVyY2hhc2VQYXJhbXMgfCB1bmRlZmluZWQsXHJcbiAgICBzZXRQdXJjaGFzZURhdGE6ICh2YWx1ZTogcHVyY2hhc2VQYXJhbXMpID0+IHZvaWQsXHJcbiAgICBkaXNjb3VudENvZGVBbW91bnQ6IHtkaXNjb3VudD86IG51bWJlciB8IG51bGwsIGRpc2NvdW50UGVyY2VudD86IG51bWJlciB8IG51bGx9LFxyXG4gICAgc2V0RGlzY291bnRDb2RlQW1vdW50OiAgKHZhbHVlOiB7ZGlzY291bnQ/OiBudW1iZXIgfCBudWxsLCBkaXNjb3VudFBlcmNlbnQ/OiBudW1iZXIgfCBudWxsfSkgPT4gdm9pZCxcclxuICAgIHByaWNlOiBudW1iZXIgfCB1bmRlZmluZWQsIFxyXG4gICAgc2V0UHJpY2U6ICh2YWx1ZTogbnVtYmVyIHwgdW5kZWZpbmVkKSA9PiB2b2lkLFxyXG59XHJcbmNvbnN0IERpc2NvdW50Q29kZSA9ICh7cHJvZHVjdCwgcHVyY2hhc2VEYXRhLCBzZXREaXNjb3VudENvZGVBbW91bnQsIHByaWNlLCBzZXRQcmljZX06IFBhcmFtcykgPT4ge1xyXG5cclxuICAgIGNvbnN0IGFjdGl2ZUxhbmd1YWdlID0gdXNlQ29udGV4dChBY3RpdmVMYW5ndWFnZUNvbnRleHQpPy5hY3RpdmVMYW5ndWFnZVxyXG4gICAgY29uc3QgY29tcGFueUluZm9ybWF0aW9uID0gdXNlQ29udGV4dChDb21wYW55SW5mb3JtYXRpb25Db250ZXh0KTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XHJcbiAgICAgICAgaWYoZXZlbnQudGFyZ2V0LnZhbHVlID09IHByb2R1Y3Q/LmRpc2NvdW50Q29kZT8uY29kZSl7XHJcbiAgICAgICAgICAgIHNldERpc2NvdW50Q29kZUFtb3VudCh7XHJcbiAgICAgICAgICAgICAgICBkaXNjb3VudDogcHJvZHVjdC5kaXNjb3VudENvZGUuZGlzY291bnQsXHJcbiAgICAgICAgICAgICAgICBkaXNjb3VudFBlcmNlbnQ6IHByb2R1Y3QuZGlzY291bnRDb2RlLmRpc2NvdW50UGVyY2VudFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKHByb2R1Y3QuZGlzY291bnQpIHtcclxuICAgICAgICAgICAgICAgIHNldFByaWNlKHByb2R1Y3QuZGlzY291bnQubmV3UHJpY2UgKiBwdXJjaGFzZURhdGE/LnF1YW50aXR5KVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2V0UHJpY2UocHJvZHVjdD8ucHJpY2UgKiBwdXJjaGFzZURhdGE/LnF1YW50aXR5KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFxyXG5cclxuXHJcbiAgICBjb25zdCBzdHlsZSA6Q1NTUHJvcGVydGllcyA9IHtcclxuICAgICAgICB3aWR0aDogJ3ZhcigtLWxvbmctd2lkdGgpJyxcclxuICAgICAgICBoZWlnaHQ6ICd2YXIoLS1wcmltYXJ5LWhlaWdodCknLFxyXG4gICAgICAgIGJvcmRlclJhZGl1czogJzIwcHgnLFxyXG4gICAgICAgIHBhZGRpbmdUb3A6ICc1cHgnLFxyXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICAgIGNvbG9yOiAndmFyKC0tYmxhY2spJ1xyXG4gICAgfVxyXG4gICAgY29uc3Qgc3R5bGVINiA6Q1NTUHJvcGVydGllcyA9IHtcclxuICAgICAgICB0b3A6IDAsXHJcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgbWFyZ2luOiAnMCB2YXIoLS1tZWRpdW0tbWFyZ2luKScsXHJcbiAgICAgICAgcGFkZGluZzogJzAgdmFyKC0tbWVkaXVtLXBhZGRpbmcpJyxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd2YXIoLS1hbG1vc3Qtd2hpdGUpJyxcclxuXHJcbiAgICB9XHJcbiAgICBjb25zdCBzdHlsZUlucHV0IDpDU1NQcm9wZXJ0aWVzID0ge1xyXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICAgICAgb3V0bGluZTogJ25vbmUnLFxyXG4gICAgICAgIGJvcmRlcjogYDFweCBzb2xpZCAke2NvbXBhbnlJbmZvcm1hdGlvbj8ucHJpbWFyeUNvbG9yfWAsXHJcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAnMjBweCcsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAndmFyKC0tYWxtb3N0LXdoaXRlKScsXHJcbiAgICAgICAgcGFkZGluZzogJzAgdmFyKC0tbGFyZ2UtcGFkZGluZyknLFxyXG4gICAgICAgIGNvbG9yOiAndmFyKC0tYmxhY2spJ1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIiBzdHlsZT17c3R5bGV9PlxyXG4gICAgICAgICAgICA8aDYgc3R5bGU9e3N0eWxlSDZ9PnthY3RpdmVMYW5ndWFnZT8uZGlzY291bnRDb2RlV308L2g2PlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBzdHlsZT17c3R5bGVJbnB1dH0gcGxhY2Vob2xkZXI9e3B1cmNoYXNlRGF0YT8uZGlzY291bnRDb2RlPy5jb2RlPz8gXCIuLi5cIn0gb25DaGFuZ2U9eyhldmVudCkgPT4gaGFuZGxlQ2hhbmdlKGV2ZW50KX0vPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IERpc2NvdW50Q29kZTsiXSwibmFtZXMiOlsiQWN0aXZlTGFuZ3VhZ2VDb250ZXh0IiwiQ29tcGFueUluZm9ybWF0aW9uQ29udGV4dCIsInVzZUNvbnRleHQiLCJEaXNjb3VudENvZGUiLCJwcm9kdWN0IiwicHVyY2hhc2VEYXRhIiwic2V0RGlzY291bnRDb2RlQW1vdW50IiwicHJpY2UiLCJzZXRQcmljZSIsImFjdGl2ZUxhbmd1YWdlIiwiY29tcGFueUluZm9ybWF0aW9uIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImRpc2NvdW50Q29kZSIsImNvZGUiLCJkaXNjb3VudCIsImRpc2NvdW50UGVyY2VudCIsIm5ld1ByaWNlIiwicXVhbnRpdHkiLCJzdHlsZSIsIndpZHRoIiwiaGVpZ2h0IiwiYm9yZGVyUmFkaXVzIiwicGFkZGluZ1RvcCIsInBvc2l0aW9uIiwiY29sb3IiLCJzdHlsZUg2IiwidG9wIiwibWFyZ2luIiwicGFkZGluZyIsImJhY2tncm91bmRDb2xvciIsInN0eWxlSW5wdXQiLCJvdXRsaW5lIiwiYm9yZGVyIiwicHJpbWFyeUNvbG9yIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDYiLCJkaXNjb3VudENvZGVXIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/pages/productDetails/[productId]/forPhone/component/informationSection.tsx/component/discountCode.tsx\n"));

/***/ })

});