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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_languages_english_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/languages/english.json */ \"(app-pages-browser)/./app/languages/english.json\");\n/* harmony import */ var _app_languages_arabic_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/languages/arabic.json */ \"(app-pages-browser)/./app/languages/arabic.json\");\n/* harmony import */ var _app_contexts_LanguageSelectorContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/contexts/LanguageSelectorContext */ \"(app-pages-browser)/./app/contexts/LanguageSelectorContext.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _app_contexts_companyInformation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/app/contexts/companyInformation */ \"(app-pages-browser)/./app/contexts/companyInformation.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Price = (param)=>{\n    let { product, setPrice, discountCodeAmount, purchaseData } = param;\n    var _product_discount;\n    _s();\n    const languageSelectorContext = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_app_contexts_LanguageSelectorContext__WEBPACK_IMPORTED_MODULE_3__.LanguageSelectorContext);\n    const companyInformation = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_app_contexts_companyInformation__WEBPACK_IMPORTED_MODULE_5__.CompanyInformationContext);\n    const [ispriceChange, setIspriceChange] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)({\n        \"Price.useEffect\": ()=>{\n            setPrice(handlePrice());\n        }\n    }[\"Price.useEffect\"], [\n        discountCodeAmount\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)({\n        \"Price.useEffect\": ()=>{\n            setPrice(0);\n        }\n    }[\"Price.useEffect\"], [\n        purchaseData.t\n    ]);\n    const handlePrice = ()=>{\n        var _product_discount;\n        const discount = (product === null || product === void 0 ? void 0 : (_product_discount = product.discount) === null || _product_discount === void 0 ? void 0 : _product_discount.newPrice) || (product === null || product === void 0 ? void 0 : product.price);\n        const discountValue = discountCodeAmount.discount || 0;\n        const discountPercent = discountCodeAmount.discountPercent || 0;\n        //let finalPrice = 0;\n        if (typeof discount == 'undefined' || typeof discountValue == 'undefined' || typeof discountPercent == undefined || typeof (product === null || product === void 0 ? void 0 : product.price) == 'undefined') {\n            return;\n        }\n        if (discount && discountValue) {\n            return discount - discountValue;\n        }\n        if (!discount && discountValue) {\n            return (product === null || product === void 0 ? void 0 : product.price) - discountValue;\n        }\n        if (discount && discountPercent) {\n            return discount - discount * (discountPercent / 100);\n        }\n        if (!discount && discountPercent) {\n            return (product === null || product === void 0 ? void 0 : product.price) - (product === null || product === void 0 ? void 0 : product.price) * (discountPercent / 100);\n        } else {\n            return 0;\n        }\n    };\n    const style = {\n        display: 'flex',\n        alignItems: 'center',\n        margin: 'var(--large-margin)',\n        fontSize: 'calc(var(--big-size)*1.5)',\n        fontWeight: '700',\n        color: 'var(--black)'\n    };\n    const stylePriceW = {\n        fontWeight: '200'\n    };\n    const stylePrice = {\n        margin: 'var(--large-margin)'\n    };\n    var _purchaseData_totalPrice, _ref;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: style,\n        id: \"price\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                style: stylePriceW,\n                children: (languageSelectorContext === null || languageSelectorContext === void 0 ? void 0 : languageSelectorContext.activeLanguage) === 'english' ? _app_languages_english_json__WEBPACK_IMPORTED_MODULE_1__.priceW + ' : ' : _app_languages_arabic_json__WEBPACK_IMPORTED_MODULE_2__.priceW + ' : '\n            }, void 0, false, {\n                fileName: \"C:\\\\my_projects\\\\fast_buy\\\\webSite_for_the_customer\\\\app\\\\pages\\\\productDetails\\\\[productId]\\\\forComputer\\\\component\\\\informationSection.tsx\\\\component\\\\price.tsx\",\n                lineNumber: 80,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                style: stylePrice,\n                children: (_ref = (_purchaseData_totalPrice = purchaseData === null || purchaseData === void 0 ? void 0 : purchaseData.totalPrice) !== null && _purchaseData_totalPrice !== void 0 ? _purchaseData_totalPrice : product === null || product === void 0 ? void 0 : (_product_discount = product.discount) === null || _product_discount === void 0 ? void 0 : _product_discount.newPrice) !== null && _ref !== void 0 ? _ref : product === null || product === void 0 ? void 0 : product.price\n            }, void 0, false, {\n                fileName: \"C:\\\\my_projects\\\\fast_buy\\\\webSite_for_the_customer\\\\app\\\\pages\\\\productDetails\\\\[productId]\\\\forComputer\\\\component\\\\informationSection.tsx\\\\component\\\\price.tsx\",\n                lineNumber: 86,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: companyInformation === null || companyInformation === void 0 ? void 0 : companyInformation.currencyType\n            }, void 0, false, {\n                fileName: \"C:\\\\my_projects\\\\fast_buy\\\\webSite_for_the_customer\\\\app\\\\pages\\\\productDetails\\\\[productId]\\\\forComputer\\\\component\\\\informationSection.tsx\\\\component\\\\price.tsx\",\n                lineNumber: 87,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\my_projects\\\\fast_buy\\\\webSite_for_the_customer\\\\app\\\\pages\\\\productDetails\\\\[productId]\\\\forComputer\\\\component\\\\informationSection.tsx\\\\component\\\\price.tsx\",\n        lineNumber: 79,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Price, \"/wcuNKsMr8xR0na5NZeafGkNY9E=\");\n_c = Price;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Price);\nvar _c;\n$RefreshReg$(_c, \"Price\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlcy9wcm9kdWN0RGV0YWlscy9bcHJvZHVjdElkXS9mb3JDb21wdXRlci9jb21wb25lbnQvaW5mb3JtYXRpb25TZWN0aW9uLnRzeC9jb21wb25lbnQvcHJpY2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDbUQ7QUFDRjtBQUNnQztBQUVWO0FBRU87QUFXOUUsTUFBTU8sUUFBUTtRQUFDLEVBQUNDLE9BQU8sRUFBRUMsUUFBUSxFQUFFQyxrQkFBa0IsRUFBRUMsWUFBWSxFQUFTO1FBbUVYSDs7SUFqRTdELE1BQU1JLDBCQUEwQlQsaURBQVVBLENBQUNELDBGQUF1QkE7SUFDbEUsTUFBTVcscUJBQXFCVixpREFBVUEsQ0FBQ0csdUZBQXlCQTtJQUMvRCxNQUFNLENBQUNRLGVBQWVDLGlCQUFpQixHQUFHViwrQ0FBUUEsQ0FBVTtJQUU1REQsZ0RBQVNBOzJCQUFDO1lBQ05LLFNBQVVPO1FBQ2Q7MEJBQUc7UUFBQ047S0FBbUI7SUFFdkJOLGdEQUFTQTsyQkFBQztZQUNOSyxTQUFVO1FBQ2Q7MEJBQUc7UUFBQ0UsYUFBYU0sQ0FBQztLQUFDO0lBRW5CLE1BQU1ELGNBQWM7WUFDQ1I7UUFBakIsTUFBTVUsV0FBV1YsQ0FBQUEsb0JBQUFBLCtCQUFBQSxvQkFBQUEsUUFBU1UsUUFBUSxjQUFqQlYsd0NBQUFBLGtCQUFtQlcsUUFBUSxNQUFJWCxvQkFBQUEsOEJBQUFBLFFBQVNZLEtBQUs7UUFDOUQsTUFBTUMsZ0JBQWdCWCxtQkFBbUJRLFFBQVEsSUFBSTtRQUNyRCxNQUFNSSxrQkFBa0JaLG1CQUFtQlksZUFBZSxJQUFJO1FBQzlELHFCQUFxQjtRQUVyQixJQUFHLE9BQU9KLFlBQVksZUFBZSxPQUFPRyxpQkFBaUIsZUFBZSxPQUFPQyxtQkFBbUJDLGFBQWEsUUFBT2Ysb0JBQUFBLDhCQUFBQSxRQUFTWSxLQUFLLEtBQUksYUFBWTtZQUVwSjtRQUNKO1FBRUEsSUFBSUYsWUFBWUcsZUFBZTtZQUMzQixPQUFRSCxXQUFXRztRQUN2QjtRQUNBLElBQUksQ0FBQ0gsWUFBWUcsZUFBZTtZQUM1QixPQUFRYixDQUFBQSxvQkFBQUEsOEJBQUFBLFFBQVNZLEtBQUssSUFBR0M7UUFDN0I7UUFDQSxJQUFJSCxZQUFZSSxpQkFBaUI7WUFDN0IsT0FBT0osV0FBV0EsV0FBWUksQ0FBQUEsa0JBQWtCLEdBQUU7UUFDdEQ7UUFDQSxJQUFJLENBQUNKLFlBQVlJLGlCQUFpQjtZQUM5QixPQUFPZCxDQUFBQSxvQkFBQUEsOEJBQUFBLFFBQVNZLEtBQUssSUFBR1osQ0FBQUEsb0JBQUFBLDhCQUFBQSxRQUFTWSxLQUFLLElBQUlFLENBQUFBLGtCQUFrQixHQUFFO1FBQ2xFLE9BQUs7WUFDRCxPQUFPO1FBQ1g7SUFFSjtJQUdBLE1BQU1FLFFBQXVCO1FBQ3pCQyxTQUFTO1FBQ1RDLFlBQVk7UUFDWkMsUUFBUTtRQUNSQyxVQUFVO1FBQ1ZDLFlBQVk7UUFDWkMsT0FBTztJQUNYO0lBQ0EsTUFBTUMsY0FBNkI7UUFDL0JGLFlBQVk7SUFDaEI7SUFDQSxNQUFNRyxhQUE0QjtRQUM5QkwsUUFBUTtJQUNaO1FBV2tDaEIsMEJBQUFBO0lBUmxDLHFCQUNJLDhEQUFDc0I7UUFBSVQsT0FBT0E7UUFBT1UsSUFBRzs7MEJBQ2xCLDhEQUFDQztnQkFBS1gsT0FBT087MEJBQ1JuQixDQUFBQSxvQ0FBQUEsOENBQUFBLHdCQUF5QndCLGNBQWMsTUFBSyxZQUN2Q3BDLCtEQUFjLEdBQUcsUUFDakJDLDhEQUFhLEdBQUc7Ozs7OzswQkFHMUIsOERBQUNrQztnQkFBS1gsT0FBT1E7MEJBQWFyQixDQUFBQSxPQUFBQSxDQUFBQSwyQkFBQUEseUJBQUFBLG1DQUFBQSxhQUFjMkIsVUFBVSxjQUF4QjNCLHNDQUFBQSwyQkFBMkJILG9CQUFBQSwrQkFBQUEsb0JBQUFBLFFBQVNVLFFBQVEsY0FBakJWLHdDQUFBQSxrQkFBbUJXLFFBQVEsY0FBdERSLGtCQUFBQSxPQUF5REgsb0JBQUFBLDhCQUFBQSxRQUFTWSxLQUFLOzs7Ozs7MEJBQ2pHLDhEQUFDZTswQkFBTXRCLCtCQUFBQSx5Q0FBQUEsbUJBQW9CMEIsWUFBWTs7Ozs7Ozs7Ozs7O0FBR25EO0dBdkVNaEM7S0FBQUE7QUF3RU4saUVBQWVBLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIkM6XFxteV9wcm9qZWN0c1xcZmFzdF9idXlcXHdlYlNpdGVfZm9yX3RoZV9jdXN0b21lclxcYXBwXFxwYWdlc1xccHJvZHVjdERldGFpbHNcXFtwcm9kdWN0SWRdXFxmb3JDb21wdXRlclxcY29tcG9uZW50XFxpbmZvcm1hdGlvblNlY3Rpb24udHN4XFxjb21wb25lbnRcXHByaWNlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XHJcbmltcG9ydCBlbmdsaXNoIGZyb20gJ0AvYXBwL2xhbmd1YWdlcy9lbmdsaXNoLmpzb24nO1xyXG5pbXBvcnQgYXJhYmljIGZyb20gJ0AvYXBwL2xhbmd1YWdlcy9hcmFiaWMuanNvbic7XHJcbmltcG9ydCB7IExhbmd1YWdlU2VsZWN0b3JDb250ZXh0IH0gZnJvbSBcIkAvYXBwL2NvbnRleHRzL0xhbmd1YWdlU2VsZWN0b3JDb250ZXh0XCI7XHJcbmltcG9ydCB7IHByb2R1Y3RQYXJhbXMgfSBmcm9tIFwiQC9hcHAvY29udGV4dHMvcHJvZHVjdFNlbGVjdEZvclNob3dpbmdcIjtcclxuaW1wb3J0IHsgQ1NTUHJvcGVydGllcywgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBwdXJjaGFzZVBhcmFtcyB9IGZyb20gJ0AvYXBwL2NvbnRleHRzL3B1cmNoYXNlRGF0YSc7XHJcbmltcG9ydCB7IENvbXBhbnlJbmZvcm1hdGlvbkNvbnRleHQgfSBmcm9tICdAL2FwcC9jb250ZXh0cy9jb21wYW55SW5mb3JtYXRpb24nO1xyXG5cclxudHlwZSBQYXJhbXMgPSB7XHJcbiAgICBwcm9kdWN0OiBwcm9kdWN0UGFyYW1zIHwgdW5kZWZpbmVkLFxyXG4gICAgc2V0UHJvZHVjdDogKHZhbHVlOiBwcm9kdWN0UGFyYW1zKSA9PiB2b2lkXHJcbiAgICBkaXNjb3VudENvZGVBbW91bnQ6IHtkaXNjb3VudD86IG51bWJlciB8IG51bGwsIGRpc2NvdW50UGVyY2VudD86IG51bWJlciB8IG51bGx9LFxyXG4gICAgcHJpY2U6IG51bWJlciB8IHVuZGVmaW5lZCwgXHJcbiAgICBzZXRQcmljZTogKHZhbHVlOiBudW1iZXIgfCB1bmRlZmluZWQpID0+IHZvaWQsXHJcbiAgICBwdXJjaGFzZURhdGE6IHB1cmNoYXNlUGFyYW1zIHwgdW5kZWZpbmVkLFxyXG4gICAgc2V0UHVyY2hhc2VEYXRhOiAodmFsdWU6IHB1cmNoYXNlUGFyYW1zKSA9PiB2b2lkXHJcbn1cclxuY29uc3QgUHJpY2UgPSAoe3Byb2R1Y3QsIHNldFByaWNlLCBkaXNjb3VudENvZGVBbW91bnQsIHB1cmNoYXNlRGF0YX06IFBhcmFtcykgPT4ge1xyXG5cclxuICAgIGNvbnN0IGxhbmd1YWdlU2VsZWN0b3JDb250ZXh0ID0gdXNlQ29udGV4dChMYW5ndWFnZVNlbGVjdG9yQ29udGV4dCk7XHJcbiAgICBjb25zdCBjb21wYW55SW5mb3JtYXRpb24gPSB1c2VDb250ZXh0KENvbXBhbnlJbmZvcm1hdGlvbkNvbnRleHQpO1xyXG4gICAgY29uc3QgW2lzcHJpY2VDaGFuZ2UsIHNldElzcHJpY2VDaGFuZ2VdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2V0UHJpY2UoIGhhbmRsZVByaWNlKCkpXHJcbiAgICB9LCBbZGlzY291bnRDb2RlQW1vdW50XSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldFByaWNlKCAwKVxyXG4gICAgfSwgW3B1cmNoYXNlRGF0YS50XSlcclxuXHJcbiAgICBjb25zdCBoYW5kbGVQcmljZSA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBkaXNjb3VudCA9IHByb2R1Y3Q/LmRpc2NvdW50Py5uZXdQcmljZSB8fCBwcm9kdWN0Py5wcmljZTtcclxuICAgICAgICBjb25zdCBkaXNjb3VudFZhbHVlID0gZGlzY291bnRDb2RlQW1vdW50LmRpc2NvdW50IHx8IDA7XHJcbiAgICAgICAgY29uc3QgZGlzY291bnRQZXJjZW50ID0gZGlzY291bnRDb2RlQW1vdW50LmRpc2NvdW50UGVyY2VudCB8fCAwO1xyXG4gICAgICAgIC8vbGV0IGZpbmFsUHJpY2UgPSAwO1xyXG5cclxuICAgICAgICBpZih0eXBlb2YgZGlzY291bnQgPT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIGRpc2NvdW50VmFsdWUgPT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIGRpc2NvdW50UGVyY2VudCA9PSB1bmRlZmluZWQgfHwgdHlwZW9mIHByb2R1Y3Q/LnByaWNlID09ICd1bmRlZmluZWQnKXtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJldHVybiA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZGlzY291bnQgJiYgZGlzY291bnRWYWx1ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gIGRpc2NvdW50IC0gZGlzY291bnRWYWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFkaXNjb3VudCAmJiBkaXNjb3VudFZhbHVlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAgcHJvZHVjdD8ucHJpY2UgLSBkaXNjb3VudFZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZGlzY291bnQgJiYgZGlzY291bnRQZXJjZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBkaXNjb3VudCAtIGRpc2NvdW50ICogKGRpc2NvdW50UGVyY2VudCAvIDEwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghZGlzY291bnQgJiYgZGlzY291bnRQZXJjZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwcm9kdWN0Py5wcmljZSAtIHByb2R1Y3Q/LnByaWNlICogKGRpc2NvdW50UGVyY2VudCAvIDEwMCk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICBcclxuXHJcbiAgICBjb25zdCBzdHlsZTogQ1NTUHJvcGVydGllcyA9IHtcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgbWFyZ2luOiAndmFyKC0tbGFyZ2UtbWFyZ2luKScsXHJcbiAgICAgICAgZm9udFNpemU6ICdjYWxjKHZhcigtLWJpZy1zaXplKSoxLjUpJyxcclxuICAgICAgICBmb250V2VpZ2h0OiAnNzAwJyxcclxuICAgICAgICBjb2xvcjogJ3ZhcigtLWJsYWNrKScsXHJcbiAgICB9XHJcbiAgICBjb25zdCBzdHlsZVByaWNlVzogQ1NTUHJvcGVydGllcyA9IHtcclxuICAgICAgICBmb250V2VpZ2h0OiAnMjAwJ1xyXG4gICAgfVxyXG4gICAgY29uc3Qgc3R5bGVQcmljZTogQ1NTUHJvcGVydGllcyA9IHtcclxuICAgICAgICBtYXJnaW46ICd2YXIoLS1sYXJnZS1tYXJnaW4pJyxcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZX0gaWQ9XCJwcmljZVwiPlxyXG4gICAgICAgICAgICA8c3BhbiBzdHlsZT17c3R5bGVQcmljZVd9PlxyXG4gICAgICAgICAgICAgICAge2xhbmd1YWdlU2VsZWN0b3JDb250ZXh0Py5hY3RpdmVMYW5ndWFnZSA9PT0gJ2VuZ2xpc2gnIFxyXG4gICAgICAgICAgICAgICAgICAgID8gZW5nbGlzaC5wcmljZVcgKyAnIDogJyBcclxuICAgICAgICAgICAgICAgICAgICA6IGFyYWJpYy5wcmljZVcgKyAnIDogJ31cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG5cclxuICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3N0eWxlUHJpY2V9PntwdXJjaGFzZURhdGE/LnRvdGFsUHJpY2U/PyBwcm9kdWN0Py5kaXNjb3VudD8ubmV3UHJpY2U/PyBwcm9kdWN0Py5wcmljZX08L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuPntjb21wYW55SW5mb3JtYXRpb24/LmN1cnJlbmN5VHlwZX08L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgUHJpY2U7Il0sIm5hbWVzIjpbImVuZ2xpc2giLCJhcmFiaWMiLCJMYW5ndWFnZVNlbGVjdG9yQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkNvbXBhbnlJbmZvcm1hdGlvbkNvbnRleHQiLCJQcmljZSIsInByb2R1Y3QiLCJzZXRQcmljZSIsImRpc2NvdW50Q29kZUFtb3VudCIsInB1cmNoYXNlRGF0YSIsImxhbmd1YWdlU2VsZWN0b3JDb250ZXh0IiwiY29tcGFueUluZm9ybWF0aW9uIiwiaXNwcmljZUNoYW5nZSIsInNldElzcHJpY2VDaGFuZ2UiLCJoYW5kbGVQcmljZSIsInQiLCJkaXNjb3VudCIsIm5ld1ByaWNlIiwicHJpY2UiLCJkaXNjb3VudFZhbHVlIiwiZGlzY291bnRQZXJjZW50IiwidW5kZWZpbmVkIiwic3R5bGUiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsIm1hcmdpbiIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImNvbG9yIiwic3R5bGVQcmljZVciLCJzdHlsZVByaWNlIiwiZGl2IiwiaWQiLCJzcGFuIiwiYWN0aXZlTGFuZ3VhZ2UiLCJwcmljZVciLCJ0b3RhbFByaWNlIiwiY3VycmVuY3lUeXBlIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/pages/productDetails/[productId]/forComputer/component/informationSection.tsx/component/price.tsx\n"));

/***/ })

});