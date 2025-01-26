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

/***/ "(app-pages-browser)/./app/pages/productDetails/[productId]/forComputer/component/informationSection.tsx/component/price.tsx":
/*!***************************************************************************************************************!*\
  !*** ./app/pages/productDetails/[productId]/forComputer/component/informationSection.tsx/component/price.tsx ***!
  \***************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_languages_english_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/languages/english.json */ \"(app-pages-browser)/./app/languages/english.json\");\n/* harmony import */ var _app_languages_arabic_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/languages/arabic.json */ \"(app-pages-browser)/./app/languages/arabic.json\");\n/* harmony import */ var _app_contexts_LanguageSelectorContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/contexts/LanguageSelectorContext */ \"(app-pages-browser)/./app/contexts/LanguageSelectorContext.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _app_contexts_companyInformation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/app/contexts/companyInformation */ \"(app-pages-browser)/./app/contexts/companyInformation.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Price = (param)=>{\n    let { product, setPrice, discountCodeAmount, purchaseData } = param;\n    var _product_discount;\n    _s();\n    const languageSelectorContext = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_app_contexts_LanguageSelectorContext__WEBPACK_IMPORTED_MODULE_3__.LanguageSelectorContext);\n    const companyInformation = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_app_contexts_companyInformation__WEBPACK_IMPORTED_MODULE_5__.CompanyInformationContext);\n    const [ispriceChange, setIspriceChange] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)({\n        \"Price.useEffect\": ()=>{\n            setPrice(handlePrice());\n        }\n    }[\"Price.useEffect\"], [\n        discountCodeAmount\n    ]);\n    let x = 0;\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)({\n        \"Price.useEffect\": ()=>{\n            if (x == 0) {\n                setIspriceChange(true);\n            }\n        }\n    }[\"Price.useEffect\"], [\n        purchaseData.totalPrice\n    ]);\n    const handlePrice = ()=>{\n        var _product_discount;\n        const discount = (product === null || product === void 0 ? void 0 : (_product_discount = product.discount) === null || _product_discount === void 0 ? void 0 : _product_discount.newPrice) || (product === null || product === void 0 ? void 0 : product.price);\n        const discountValue = discountCodeAmount.discount || 0;\n        const discountPercent = discountCodeAmount.discountPercent || 0;\n        //let finalPrice = 0;\n        if (typeof discount == 'undefined' || typeof discountValue == 'undefined' || typeof discountPercent == undefined || typeof (product === null || product === void 0 ? void 0 : product.price) == 'undefined') {\n            return;\n        }\n        if (discount && discountValue) {\n            return discount - discountValue;\n        }\n        if (!discount && discountValue) {\n            return (product === null || product === void 0 ? void 0 : product.price) - discountValue;\n        }\n        if (discount && discountPercent) {\n            return discount - discount * (discountPercent / 100);\n        }\n        if (!discount && discountPercent) {\n            return (product === null || product === void 0 ? void 0 : product.price) - (product === null || product === void 0 ? void 0 : product.price) * (discountPercent / 100);\n        } else {\n            return 0;\n        }\n    };\n    const style = {\n        display: 'flex',\n        alignItems: 'center',\n        margin: 'var(--large-margin)',\n        fontSize: 'calc(var(--big-size)*1.5)',\n        fontWeight: '700',\n        color: 'var(--black)'\n    };\n    const stylePriceW = {\n        fontWeight: '200'\n    };\n    const stylePrice = {\n        margin: 'var(--large-margin)'\n    };\n    var _purchaseData_totalPrice, _ref;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: style,\n        id: \"price\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                style: stylePriceW,\n                children: (languageSelectorContext === null || languageSelectorContext === void 0 ? void 0 : languageSelectorContext.activeLanguage) === 'english' ? _app_languages_english_json__WEBPACK_IMPORTED_MODULE_1__.priceW + ' : ' : _app_languages_arabic_json__WEBPACK_IMPORTED_MODULE_2__.priceW + ' : '\n            }, void 0, false, {\n                fileName: \"C:\\\\my_projects\\\\fast_buy\\\\webSite_for_the_customer\\\\app\\\\pages\\\\productDetails\\\\[productId]\\\\forComputer\\\\component\\\\informationSection.tsx\\\\component\\\\price.tsx\",\n                lineNumber: 83,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                style: stylePrice,\n                children: (_ref = (_purchaseData_totalPrice = purchaseData === null || purchaseData === void 0 ? void 0 : purchaseData.totalPrice) !== null && _purchaseData_totalPrice !== void 0 ? _purchaseData_totalPrice : product === null || product === void 0 ? void 0 : (_product_discount = product.discount) === null || _product_discount === void 0 ? void 0 : _product_discount.newPrice) !== null && _ref !== void 0 ? _ref : product === null || product === void 0 ? void 0 : product.price\n            }, void 0, false, {\n                fileName: \"C:\\\\my_projects\\\\fast_buy\\\\webSite_for_the_customer\\\\app\\\\pages\\\\productDetails\\\\[productId]\\\\forComputer\\\\component\\\\informationSection.tsx\\\\component\\\\price.tsx\",\n                lineNumber: 89,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: companyInformation === null || companyInformation === void 0 ? void 0 : companyInformation.currencyType\n            }, void 0, false, {\n                fileName: \"C:\\\\my_projects\\\\fast_buy\\\\webSite_for_the_customer\\\\app\\\\pages\\\\productDetails\\\\[productId]\\\\forComputer\\\\component\\\\informationSection.tsx\\\\component\\\\price.tsx\",\n                lineNumber: 90,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\my_projects\\\\fast_buy\\\\webSite_for_the_customer\\\\app\\\\pages\\\\productDetails\\\\[productId]\\\\forComputer\\\\component\\\\informationSection.tsx\\\\component\\\\price.tsx\",\n        lineNumber: 82,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Price, \"/wcuNKsMr8xR0na5NZeafGkNY9E=\");\n_c = Price;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Price);\nvar _c;\n$RefreshReg$(_c, \"Price\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlcy9wcm9kdWN0RGV0YWlscy9bcHJvZHVjdElkXS9mb3JDb21wdXRlci9jb21wb25lbnQvaW5mb3JtYXRpb25TZWN0aW9uLnRzeC9jb21wb25lbnQvcHJpY2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDbUQ7QUFDRjtBQUNnQztBQUVWO0FBRU87QUFXOUUsTUFBTU8sUUFBUTtRQUFDLEVBQUNDLE9BQU8sRUFBRUMsUUFBUSxFQUFFQyxrQkFBa0IsRUFBRUMsWUFBWSxFQUFTO1FBc0VYSDs7SUFwRTdELE1BQU1JLDBCQUEwQlQsaURBQVVBLENBQUNELDBGQUF1QkE7SUFDbEUsTUFBTVcscUJBQXFCVixpREFBVUEsQ0FBQ0csdUZBQXlCQTtJQUMvRCxNQUFNLENBQUNRLGVBQWVDLGlCQUFpQixHQUFHViwrQ0FBUUEsQ0FBVTtJQUU1REQsZ0RBQVNBOzJCQUFDO1lBQ05LLFNBQVVPO1FBQ2Q7MEJBQUc7UUFBQ047S0FBbUI7SUFFdkIsSUFBSU8sSUFBSTtJQUNSYixnREFBU0E7MkJBQUM7WUFDTixJQUFJYSxLQUFLLEdBQUc7Z0JBQ1JGLGlCQUFpQjtZQUNyQjtRQUNKOzBCQUFHO1FBQUNKLGFBQWFPLFVBQVU7S0FBQztJQUU1QixNQUFNRixjQUFjO1lBQ0NSO1FBQWpCLE1BQU1XLFdBQVdYLENBQUFBLG9CQUFBQSwrQkFBQUEsb0JBQUFBLFFBQVNXLFFBQVEsY0FBakJYLHdDQUFBQSxrQkFBbUJZLFFBQVEsTUFBSVosb0JBQUFBLDhCQUFBQSxRQUFTYSxLQUFLO1FBQzlELE1BQU1DLGdCQUFnQlosbUJBQW1CUyxRQUFRLElBQUk7UUFDckQsTUFBTUksa0JBQWtCYixtQkFBbUJhLGVBQWUsSUFBSTtRQUM5RCxxQkFBcUI7UUFFckIsSUFBRyxPQUFPSixZQUFZLGVBQWUsT0FBT0csaUJBQWlCLGVBQWUsT0FBT0MsbUJBQW1CQyxhQUFhLFFBQU9oQixvQkFBQUEsOEJBQUFBLFFBQVNhLEtBQUssS0FBSSxhQUFZO1lBRXBKO1FBQ0o7UUFFQSxJQUFJRixZQUFZRyxlQUFlO1lBQzNCLE9BQVFILFdBQVdHO1FBQ3ZCO1FBQ0EsSUFBSSxDQUFDSCxZQUFZRyxlQUFlO1lBQzVCLE9BQVFkLENBQUFBLG9CQUFBQSw4QkFBQUEsUUFBU2EsS0FBSyxJQUFHQztRQUM3QjtRQUNBLElBQUlILFlBQVlJLGlCQUFpQjtZQUM3QixPQUFPSixXQUFXQSxXQUFZSSxDQUFBQSxrQkFBa0IsR0FBRTtRQUN0RDtRQUNBLElBQUksQ0FBQ0osWUFBWUksaUJBQWlCO1lBQzlCLE9BQU9mLENBQUFBLG9CQUFBQSw4QkFBQUEsUUFBU2EsS0FBSyxJQUFHYixDQUFBQSxvQkFBQUEsOEJBQUFBLFFBQVNhLEtBQUssSUFBSUUsQ0FBQUEsa0JBQWtCLEdBQUU7UUFDbEUsT0FBSztZQUNELE9BQU87UUFDWDtJQUVKO0lBR0EsTUFBTUUsUUFBdUI7UUFDekJDLFNBQVM7UUFDVEMsWUFBWTtRQUNaQyxRQUFRO1FBQ1JDLFVBQVU7UUFDVkMsWUFBWTtRQUNaQyxPQUFPO0lBQ1g7SUFDQSxNQUFNQyxjQUE2QjtRQUMvQkYsWUFBWTtJQUNoQjtJQUNBLE1BQU1HLGFBQTRCO1FBQzlCTCxRQUFRO0lBQ1o7UUFXa0NqQiwwQkFBQUE7SUFSbEMscUJBQ0ksOERBQUN1QjtRQUFJVCxPQUFPQTtRQUFPVSxJQUFHOzswQkFDbEIsOERBQUNDO2dCQUFLWCxPQUFPTzswQkFDUnBCLENBQUFBLG9DQUFBQSw4Q0FBQUEsd0JBQXlCeUIsY0FBYyxNQUFLLFlBQ3ZDckMsK0RBQWMsR0FBRyxRQUNqQkMsOERBQWEsR0FBRzs7Ozs7OzBCQUcxQiw4REFBQ21DO2dCQUFLWCxPQUFPUTswQkFBYXRCLENBQUFBLE9BQUFBLENBQUFBLDJCQUFBQSx5QkFBQUEsbUNBQUFBLGFBQWNPLFVBQVUsY0FBeEJQLHNDQUFBQSwyQkFBMkJILG9CQUFBQSwrQkFBQUEsb0JBQUFBLFFBQVNXLFFBQVEsY0FBakJYLHdDQUFBQSxrQkFBbUJZLFFBQVEsY0FBdERULGtCQUFBQSxPQUF5REgsb0JBQUFBLDhCQUFBQSxRQUFTYSxLQUFLOzs7Ozs7MEJBQ2pHLDhEQUFDZTswQkFBTXZCLCtCQUFBQSx5Q0FBQUEsbUJBQW9CMEIsWUFBWTs7Ozs7Ozs7Ozs7O0FBR25EO0dBMUVNaEM7S0FBQUE7QUEyRU4saUVBQWVBLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIkM6XFxteV9wcm9qZWN0c1xcZmFzdF9idXlcXHdlYlNpdGVfZm9yX3RoZV9jdXN0b21lclxcYXBwXFxwYWdlc1xccHJvZHVjdERldGFpbHNcXFtwcm9kdWN0SWRdXFxmb3JDb21wdXRlclxcY29tcG9uZW50XFxpbmZvcm1hdGlvblNlY3Rpb24udHN4XFxjb21wb25lbnRcXHByaWNlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XHJcbmltcG9ydCBlbmdsaXNoIGZyb20gJ0AvYXBwL2xhbmd1YWdlcy9lbmdsaXNoLmpzb24nO1xyXG5pbXBvcnQgYXJhYmljIGZyb20gJ0AvYXBwL2xhbmd1YWdlcy9hcmFiaWMuanNvbic7XHJcbmltcG9ydCB7IExhbmd1YWdlU2VsZWN0b3JDb250ZXh0IH0gZnJvbSBcIkAvYXBwL2NvbnRleHRzL0xhbmd1YWdlU2VsZWN0b3JDb250ZXh0XCI7XHJcbmltcG9ydCB7IHByb2R1Y3RQYXJhbXMgfSBmcm9tIFwiQC9hcHAvY29udGV4dHMvcHJvZHVjdFNlbGVjdEZvclNob3dpbmdcIjtcclxuaW1wb3J0IHsgQ1NTUHJvcGVydGllcywgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBwdXJjaGFzZVBhcmFtcyB9IGZyb20gJ0AvYXBwL2NvbnRleHRzL3B1cmNoYXNlRGF0YSc7XHJcbmltcG9ydCB7IENvbXBhbnlJbmZvcm1hdGlvbkNvbnRleHQgfSBmcm9tICdAL2FwcC9jb250ZXh0cy9jb21wYW55SW5mb3JtYXRpb24nO1xyXG5cclxudHlwZSBQYXJhbXMgPSB7XHJcbiAgICBwcm9kdWN0OiBwcm9kdWN0UGFyYW1zIHwgdW5kZWZpbmVkLFxyXG4gICAgc2V0UHJvZHVjdDogKHZhbHVlOiBwcm9kdWN0UGFyYW1zKSA9PiB2b2lkXHJcbiAgICBkaXNjb3VudENvZGVBbW91bnQ6IHtkaXNjb3VudD86IG51bWJlciB8IG51bGwsIGRpc2NvdW50UGVyY2VudD86IG51bWJlciB8IG51bGx9LFxyXG4gICAgcHJpY2U6IG51bWJlciB8IHVuZGVmaW5lZCwgXHJcbiAgICBzZXRQcmljZTogKHZhbHVlOiBudW1iZXIgfCB1bmRlZmluZWQpID0+IHZvaWQsXHJcbiAgICBwdXJjaGFzZURhdGE6IHB1cmNoYXNlUGFyYW1zIHwgdW5kZWZpbmVkLFxyXG4gICAgc2V0UHVyY2hhc2VEYXRhOiAodmFsdWU6IHB1cmNoYXNlUGFyYW1zKSA9PiB2b2lkXHJcbn1cclxuY29uc3QgUHJpY2UgPSAoe3Byb2R1Y3QsIHNldFByaWNlLCBkaXNjb3VudENvZGVBbW91bnQsIHB1cmNoYXNlRGF0YX06IFBhcmFtcykgPT4ge1xyXG5cclxuICAgIGNvbnN0IGxhbmd1YWdlU2VsZWN0b3JDb250ZXh0ID0gdXNlQ29udGV4dChMYW5ndWFnZVNlbGVjdG9yQ29udGV4dCk7XHJcbiAgICBjb25zdCBjb21wYW55SW5mb3JtYXRpb24gPSB1c2VDb250ZXh0KENvbXBhbnlJbmZvcm1hdGlvbkNvbnRleHQpO1xyXG4gICAgY29uc3QgW2lzcHJpY2VDaGFuZ2UsIHNldElzcHJpY2VDaGFuZ2VdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2V0UHJpY2UoIGhhbmRsZVByaWNlKCkpXHJcbiAgICB9LCBbZGlzY291bnRDb2RlQW1vdW50XSlcclxuXHJcbiAgICBsZXQgeCA9IDA7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmICh4ID09IDApIHtcclxuICAgICAgICAgICAgc2V0SXNwcmljZUNoYW5nZSh0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbcHVyY2hhc2VEYXRhLnRvdGFsUHJpY2VdKVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVByaWNlID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRpc2NvdW50ID0gcHJvZHVjdD8uZGlzY291bnQ/Lm5ld1ByaWNlIHx8IHByb2R1Y3Q/LnByaWNlO1xyXG4gICAgICAgIGNvbnN0IGRpc2NvdW50VmFsdWUgPSBkaXNjb3VudENvZGVBbW91bnQuZGlzY291bnQgfHwgMDtcclxuICAgICAgICBjb25zdCBkaXNjb3VudFBlcmNlbnQgPSBkaXNjb3VudENvZGVBbW91bnQuZGlzY291bnRQZXJjZW50IHx8IDA7XHJcbiAgICAgICAgLy9sZXQgZmluYWxQcmljZSA9IDA7XHJcblxyXG4gICAgICAgIGlmKHR5cGVvZiBkaXNjb3VudCA9PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgZGlzY291bnRWYWx1ZSA9PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgZGlzY291bnRQZXJjZW50ID09IHVuZGVmaW5lZCB8fCB0eXBlb2YgcHJvZHVjdD8ucHJpY2UgPT0gJ3VuZGVmaW5lZCcpe1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcmV0dXJuIDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChkaXNjb3VudCAmJiBkaXNjb3VudFZhbHVlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAgZGlzY291bnQgLSBkaXNjb3VudFZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWRpc2NvdW50ICYmIGRpc2NvdW50VmFsdWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuICBwcm9kdWN0Py5wcmljZSAtIGRpc2NvdW50VmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChkaXNjb3VudCAmJiBkaXNjb3VudFBlcmNlbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGRpc2NvdW50IC0gZGlzY291bnQgKiAoZGlzY291bnRQZXJjZW50IC8gMTAwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFkaXNjb3VudCAmJiBkaXNjb3VudFBlcmNlbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHByb2R1Y3Q/LnByaWNlIC0gcHJvZHVjdD8ucHJpY2UgKiAoZGlzY291bnRQZXJjZW50IC8gMTAwKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIFxyXG5cclxuICAgIGNvbnN0IHN0eWxlOiBDU1NQcm9wZXJ0aWVzID0ge1xyXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICBtYXJnaW46ICd2YXIoLS1sYXJnZS1tYXJnaW4pJyxcclxuICAgICAgICBmb250U2l6ZTogJ2NhbGModmFyKC0tYmlnLXNpemUpKjEuNSknLFxyXG4gICAgICAgIGZvbnRXZWlnaHQ6ICc3MDAnLFxyXG4gICAgICAgIGNvbG9yOiAndmFyKC0tYmxhY2spJyxcclxuICAgIH1cclxuICAgIGNvbnN0IHN0eWxlUHJpY2VXOiBDU1NQcm9wZXJ0aWVzID0ge1xyXG4gICAgICAgIGZvbnRXZWlnaHQ6ICcyMDAnXHJcbiAgICB9XHJcbiAgICBjb25zdCBzdHlsZVByaWNlOiBDU1NQcm9wZXJ0aWVzID0ge1xyXG4gICAgICAgIG1hcmdpbjogJ3ZhcigtLWxhcmdlLW1hcmdpbiknLFxyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlfSBpZD1cInByaWNlXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPXtzdHlsZVByaWNlV30+XHJcbiAgICAgICAgICAgICAgICB7bGFuZ3VhZ2VTZWxlY3RvckNvbnRleHQ/LmFjdGl2ZUxhbmd1YWdlID09PSAnZW5nbGlzaCcgXHJcbiAgICAgICAgICAgICAgICAgICAgPyBlbmdsaXNoLnByaWNlVyArICcgOiAnIFxyXG4gICAgICAgICAgICAgICAgICAgIDogYXJhYmljLnByaWNlVyArICcgOiAnfVxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcblxyXG4gICAgICAgICAgICA8c3BhbiBzdHlsZT17c3R5bGVQcmljZX0+e3B1cmNoYXNlRGF0YT8udG90YWxQcmljZT8/IHByb2R1Y3Q/LmRpc2NvdW50Py5uZXdQcmljZT8/IHByb2R1Y3Q/LnByaWNlfTwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4+e2NvbXBhbnlJbmZvcm1hdGlvbj8uY3VycmVuY3lUeXBlfTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBQcmljZTsiXSwibmFtZXMiOlsiZW5nbGlzaCIsImFyYWJpYyIsIkxhbmd1YWdlU2VsZWN0b3JDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQ29tcGFueUluZm9ybWF0aW9uQ29udGV4dCIsIlByaWNlIiwicHJvZHVjdCIsInNldFByaWNlIiwiZGlzY291bnRDb2RlQW1vdW50IiwicHVyY2hhc2VEYXRhIiwibGFuZ3VhZ2VTZWxlY3RvckNvbnRleHQiLCJjb21wYW55SW5mb3JtYXRpb24iLCJpc3ByaWNlQ2hhbmdlIiwic2V0SXNwcmljZUNoYW5nZSIsImhhbmRsZVByaWNlIiwieCIsInRvdGFsUHJpY2UiLCJkaXNjb3VudCIsIm5ld1ByaWNlIiwicHJpY2UiLCJkaXNjb3VudFZhbHVlIiwiZGlzY291bnRQZXJjZW50IiwidW5kZWZpbmVkIiwic3R5bGUiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsIm1hcmdpbiIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImNvbG9yIiwic3R5bGVQcmljZVciLCJzdHlsZVByaWNlIiwiZGl2IiwiaWQiLCJzcGFuIiwiYWN0aXZlTGFuZ3VhZ2UiLCJwcmljZVciLCJjdXJyZW5jeVR5cGUiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/pages/productDetails/[productId]/forComputer/component/informationSection.tsx/component/price.tsx\n"));

/***/ })

});