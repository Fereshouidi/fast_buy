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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_languages_english_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/languages/english.json */ \"(app-pages-browser)/./app/languages/english.json\");\n/* harmony import */ var _app_languages_arabic_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/languages/arabic.json */ \"(app-pages-browser)/./app/languages/arabic.json\");\n/* harmony import */ var _app_contexts_LanguageSelectorContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/contexts/LanguageSelectorContext */ \"(app-pages-browser)/./app/contexts/LanguageSelectorContext.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _app_contexts_companyInformation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/app/contexts/companyInformation */ \"(app-pages-browser)/./app/contexts/companyInformation.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Price = (param)=>{\n    let { product, setPrice, discountCodeAmount, purchaseData } = param;\n    var _product_discount;\n    _s();\n    const languageSelectorContext = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_app_contexts_LanguageSelectorContext__WEBPACK_IMPORTED_MODULE_3__.LanguageSelectorContext);\n    const companyInformation = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_app_contexts_companyInformation__WEBPACK_IMPORTED_MODULE_5__.CompanyInformationContext);\n    const [ispriceChange, setIspriceChange] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const isFirstRender = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)({\n        \"Price.useEffect\": ()=>{\n            setPrice(handlePrice());\n        }\n    }[\"Price.useEffect\"], [\n        discountCodeAmount\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)({\n        \"Price.useEffect\": ()=>{\n            if (isFirstRender.current) {\n                isFirstRender.current = false;\n                return;\n            } else {}\n            // setIspriceChange(true);\n            console.log(\"Price changed!\");\n        }\n    }[\"Price.useEffect\"], [\n        purchaseData\n    ]);\n    const handlePrice = ()=>{\n        var _product_discount;\n        const discount = (product === null || product === void 0 ? void 0 : (_product_discount = product.discount) === null || _product_discount === void 0 ? void 0 : _product_discount.newPrice) || (product === null || product === void 0 ? void 0 : product.price);\n        const discountValue = discountCodeAmount.discount || 0;\n        const discountPercent = discountCodeAmount.discountPercent || 0;\n        //let finalPrice = 0;\n        if (typeof discount == 'undefined' || typeof discountValue == 'undefined' || typeof discountPercent == undefined || typeof (product === null || product === void 0 ? void 0 : product.price) == 'undefined') {\n            return;\n        }\n        if (discount && discountValue) {\n            return discount - discountValue;\n        }\n        if (!discount && discountValue) {\n            return (product === null || product === void 0 ? void 0 : product.price) - discountValue;\n        }\n        if (discount && discountPercent) {\n            return discount - discount * (discountPercent / 100);\n        }\n        if (!discount && discountPercent) {\n            return (product === null || product === void 0 ? void 0 : product.price) - (product === null || product === void 0 ? void 0 : product.price) * (discountPercent / 100);\n        } else {\n            return 0;\n        }\n    };\n    const style = {\n        display: 'flex',\n        alignItems: 'center',\n        margin: 'var(--large-margin)',\n        fontSize: 'calc(var(--big-size)*1.5)',\n        fontWeight: '700',\n        color: 'var(--black)'\n    };\n    const stylePriceW = {\n        fontWeight: '200'\n    };\n    const stylePrice = {\n        margin: 'var(--large-margin)'\n    };\n    var _product_discount_newPrice;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: style,\n        id: \"price\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                style: stylePriceW,\n                children: (languageSelectorContext === null || languageSelectorContext === void 0 ? void 0 : languageSelectorContext.activeLanguage) === 'english' ? _app_languages_english_json__WEBPACK_IMPORTED_MODULE_1__.priceW + ' : ' : _app_languages_arabic_json__WEBPACK_IMPORTED_MODULE_2__.priceW + ' : '\n            }, void 0, false, {\n                fileName: \"C:\\\\my_projects\\\\fast_buy\\\\webSite_for_the_customer\\\\app\\\\pages\\\\productDetails\\\\[productId]\\\\forComputer\\\\component\\\\informationSection.tsx\\\\component\\\\price.tsx\",\n                lineNumber: 92,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                style: stylePrice,\n                children: (purchaseData === null || purchaseData === void 0 ? void 0 : purchaseData.totalPrice) ? ispriceChange && (purchaseData === null || purchaseData === void 0 ? void 0 : purchaseData.totalPrice) : (_product_discount_newPrice = product === null || product === void 0 ? void 0 : (_product_discount = product.discount) === null || _product_discount === void 0 ? void 0 : _product_discount.newPrice) !== null && _product_discount_newPrice !== void 0 ? _product_discount_newPrice : product === null || product === void 0 ? void 0 : product.price\n            }, void 0, false, {\n                fileName: \"C:\\\\my_projects\\\\fast_buy\\\\webSite_for_the_customer\\\\app\\\\pages\\\\productDetails\\\\[productId]\\\\forComputer\\\\component\\\\informationSection.tsx\\\\component\\\\price.tsx\",\n                lineNumber: 98,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: companyInformation === null || companyInformation === void 0 ? void 0 : companyInformation.currencyType\n            }, void 0, false, {\n                fileName: \"C:\\\\my_projects\\\\fast_buy\\\\webSite_for_the_customer\\\\app\\\\pages\\\\productDetails\\\\[productId]\\\\forComputer\\\\component\\\\informationSection.tsx\\\\component\\\\price.tsx\",\n                lineNumber: 99,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\my_projects\\\\fast_buy\\\\webSite_for_the_customer\\\\app\\\\pages\\\\productDetails\\\\[productId]\\\\forComputer\\\\component\\\\informationSection.tsx\\\\component\\\\price.tsx\",\n        lineNumber: 91,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Price, \"MVt1ZTQEL5ADCxa3aswGUB/fzWA=\");\n_c = Price;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Price);\nvar _c;\n$RefreshReg$(_c, \"Price\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlcy9wcm9kdWN0RGV0YWlscy9bcHJvZHVjdElkXS9mb3JDb21wdXRlci9jb21wb25lbnQvaW5mb3JtYXRpb25TZWN0aW9uLnRzeC9jb21wb25lbnQvcHJpY2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDbUQ7QUFDRjtBQUNnQztBQUVGO0FBRUQ7QUFXOUUsTUFBTVEsUUFBUTtRQUFDLEVBQUNDLE9BQU8sRUFBRUMsUUFBUSxFQUFFQyxrQkFBa0IsRUFBRUMsWUFBWSxFQUFTO1FBK0VpQ0g7O0lBN0V6RyxNQUFNSSwwQkFBMEJWLGlEQUFVQSxDQUFDRCwwRkFBdUJBO0lBQ2xFLE1BQU1ZLHFCQUFxQlgsaURBQVVBLENBQUNJLHVGQUF5QkE7SUFDL0QsTUFBTSxDQUFDUSxlQUFlQyxpQkFBaUIsR0FBR1YsK0NBQVFBLENBQVU7SUFDNUQsTUFBTVcsZ0JBQWdCWiw2Q0FBTUEsQ0FBQztJQUc3QkQsZ0RBQVNBOzJCQUFDO1lBQ05NLFNBQVVRO1FBQ2Q7MEJBQUc7UUFBQ1A7S0FBbUI7SUFHdkJQLGdEQUFTQTsyQkFBQztZQUNOLElBQUlhLGNBQWNFLE9BQU8sRUFBRTtnQkFDdkJGLGNBQWNFLE9BQU8sR0FBRztnQkFDeEI7WUFDSixPQUFPLENBRVA7WUFFQSwwQkFBMEI7WUFDMUJDLFFBQVFDLEdBQUcsQ0FBQztRQUVoQjswQkFBRztRQUFDVDtLQUFhO0lBRWpCLE1BQU1NLGNBQWM7WUFDQ1Q7UUFBakIsTUFBTWEsV0FBV2IsQ0FBQUEsb0JBQUFBLCtCQUFBQSxvQkFBQUEsUUFBU2EsUUFBUSxjQUFqQmIsd0NBQUFBLGtCQUFtQmMsUUFBUSxNQUFJZCxvQkFBQUEsOEJBQUFBLFFBQVNlLEtBQUs7UUFDOUQsTUFBTUMsZ0JBQWdCZCxtQkFBbUJXLFFBQVEsSUFBSTtRQUNyRCxNQUFNSSxrQkFBa0JmLG1CQUFtQmUsZUFBZSxJQUFJO1FBQzlELHFCQUFxQjtRQUVyQixJQUFHLE9BQU9KLFlBQVksZUFBZSxPQUFPRyxpQkFBaUIsZUFBZSxPQUFPQyxtQkFBbUJDLGFBQWEsUUFBT2xCLG9CQUFBQSw4QkFBQUEsUUFBU2UsS0FBSyxLQUFJLGFBQVk7WUFFcEo7UUFDSjtRQUVBLElBQUlGLFlBQVlHLGVBQWU7WUFDM0IsT0FBUUgsV0FBV0c7UUFDdkI7UUFDQSxJQUFJLENBQUNILFlBQVlHLGVBQWU7WUFDNUIsT0FBUWhCLENBQUFBLG9CQUFBQSw4QkFBQUEsUUFBU2UsS0FBSyxJQUFHQztRQUM3QjtRQUNBLElBQUlILFlBQVlJLGlCQUFpQjtZQUM3QixPQUFPSixXQUFXQSxXQUFZSSxDQUFBQSxrQkFBa0IsR0FBRTtRQUN0RDtRQUNBLElBQUksQ0FBQ0osWUFBWUksaUJBQWlCO1lBQzlCLE9BQU9qQixDQUFBQSxvQkFBQUEsOEJBQUFBLFFBQVNlLEtBQUssSUFBR2YsQ0FBQUEsb0JBQUFBLDhCQUFBQSxRQUFTZSxLQUFLLElBQUlFLENBQUFBLGtCQUFrQixHQUFFO1FBQ2xFLE9BQUs7WUFDRCxPQUFPO1FBQ1g7SUFFSjtJQUdBLE1BQU1FLFFBQXVCO1FBQ3pCQyxTQUFTO1FBQ1RDLFlBQVk7UUFDWkMsUUFBUTtRQUNSQyxVQUFVO1FBQ1ZDLFlBQVk7UUFDWkMsT0FBTztJQUNYO0lBQ0EsTUFBTUMsY0FBNkI7UUFDL0JGLFlBQVk7SUFDaEI7SUFDQSxNQUFNRyxhQUE0QjtRQUM5QkwsUUFBUTtJQUNaO1FBV3lHdEI7SUFSekcscUJBQ0ksOERBQUM0QjtRQUFJVCxPQUFPQTtRQUFPVSxJQUFHOzswQkFDbEIsOERBQUNDO2dCQUFLWCxPQUFPTzswQkFDUnRCLENBQUFBLG9DQUFBQSw4Q0FBQUEsd0JBQXlCMkIsY0FBYyxNQUFLLFlBQ3ZDeEMsK0RBQWMsR0FBRyxRQUNqQkMsOERBQWEsR0FBRzs7Ozs7OzBCQUcxQiw4REFBQ3NDO2dCQUFLWCxPQUFPUTswQkFBYXhCLENBQUFBLHlCQUFBQSxtQ0FBQUEsYUFBYzhCLFVBQVUsSUFBRTNCLGtCQUFpQkgseUJBQUFBLG1DQUFBQSxhQUFjOEIsVUFBVSxJQUFJakMsQ0FBQUEsNkJBQUFBLG9CQUFBQSwrQkFBQUEsb0JBQUFBLFFBQVNhLFFBQVEsY0FBakJiLHdDQUFBQSxrQkFBbUJjLFFBQVEsY0FBM0JkLHdDQUFBQSw2QkFBOEJBLG9CQUFBQSw4QkFBQUEsUUFBU2UsS0FBSzs7Ozs7OzBCQUM3SSw4REFBQ2U7MEJBQU16QiwrQkFBQUEseUNBQUFBLG1CQUFvQjZCLFlBQVk7Ozs7Ozs7Ozs7OztBQUduRDtHQW5GTW5DO0tBQUFBO0FBb0ZOLGlFQUFlQSxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJDOlxcbXlfcHJvamVjdHNcXGZhc3RfYnV5XFx3ZWJTaXRlX2Zvcl90aGVfY3VzdG9tZXJcXGFwcFxccGFnZXNcXHByb2R1Y3REZXRhaWxzXFxbcHJvZHVjdElkXVxcZm9yQ29tcHV0ZXJcXGNvbXBvbmVudFxcaW5mb3JtYXRpb25TZWN0aW9uLnRzeFxcY29tcG9uZW50XFxwcmljZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xyXG5pbXBvcnQgZW5nbGlzaCBmcm9tICdAL2FwcC9sYW5ndWFnZXMvZW5nbGlzaC5qc29uJztcclxuaW1wb3J0IGFyYWJpYyBmcm9tICdAL2FwcC9sYW5ndWFnZXMvYXJhYmljLmpzb24nO1xyXG5pbXBvcnQgeyBMYW5ndWFnZVNlbGVjdG9yQ29udGV4dCB9IGZyb20gXCJAL2FwcC9jb250ZXh0cy9MYW5ndWFnZVNlbGVjdG9yQ29udGV4dFwiO1xyXG5pbXBvcnQgeyBwcm9kdWN0UGFyYW1zIH0gZnJvbSBcIkAvYXBwL2NvbnRleHRzL3Byb2R1Y3RTZWxlY3RGb3JTaG93aW5nXCI7XHJcbmltcG9ydCB7IENTU1Byb3BlcnRpZXMsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBwdXJjaGFzZVBhcmFtcyB9IGZyb20gJ0AvYXBwL2NvbnRleHRzL3B1cmNoYXNlRGF0YSc7XHJcbmltcG9ydCB7IENvbXBhbnlJbmZvcm1hdGlvbkNvbnRleHQgfSBmcm9tICdAL2FwcC9jb250ZXh0cy9jb21wYW55SW5mb3JtYXRpb24nO1xyXG5cclxudHlwZSBQYXJhbXMgPSB7XHJcbiAgICBwcm9kdWN0OiBwcm9kdWN0UGFyYW1zIHwgdW5kZWZpbmVkLFxyXG4gICAgc2V0UHJvZHVjdDogKHZhbHVlOiBwcm9kdWN0UGFyYW1zKSA9PiB2b2lkXHJcbiAgICBkaXNjb3VudENvZGVBbW91bnQ6IHtkaXNjb3VudD86IG51bWJlciB8IG51bGwsIGRpc2NvdW50UGVyY2VudD86IG51bWJlciB8IG51bGx9LFxyXG4gICAgcHJpY2U6IG51bWJlciB8IHVuZGVmaW5lZCwgXHJcbiAgICBzZXRQcmljZTogKHZhbHVlOiBudW1iZXIgfCB1bmRlZmluZWQpID0+IHZvaWQsXHJcbiAgICBwdXJjaGFzZURhdGE6IHB1cmNoYXNlUGFyYW1zIHwgdW5kZWZpbmVkLFxyXG4gICAgc2V0UHVyY2hhc2VEYXRhOiAodmFsdWU6IHB1cmNoYXNlUGFyYW1zKSA9PiB2b2lkXHJcbn1cclxuY29uc3QgUHJpY2UgPSAoe3Byb2R1Y3QsIHNldFByaWNlLCBkaXNjb3VudENvZGVBbW91bnQsIHB1cmNoYXNlRGF0YX06IFBhcmFtcykgPT4ge1xyXG5cclxuICAgIGNvbnN0IGxhbmd1YWdlU2VsZWN0b3JDb250ZXh0ID0gdXNlQ29udGV4dChMYW5ndWFnZVNlbGVjdG9yQ29udGV4dCk7XHJcbiAgICBjb25zdCBjb21wYW55SW5mb3JtYXRpb24gPSB1c2VDb250ZXh0KENvbXBhbnlJbmZvcm1hdGlvbkNvbnRleHQpO1xyXG4gICAgY29uc3QgW2lzcHJpY2VDaGFuZ2UsIHNldElzcHJpY2VDaGFuZ2VdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gICAgY29uc3QgaXNGaXJzdFJlbmRlciA9IHVzZVJlZih0cnVlKTtcclxuXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRQcmljZSggaGFuZGxlUHJpY2UoKSlcclxuICAgIH0sIFtkaXNjb3VudENvZGVBbW91bnRdKVxyXG5cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChpc0ZpcnN0UmVuZGVyLmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgaXNGaXJzdFJlbmRlci5jdXJyZW50ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHJldHVybjsgXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgLy8gc2V0SXNwcmljZUNoYW5nZSh0cnVlKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlByaWNlIGNoYW5nZWQhXCIpO1xyXG4gICAgXHJcbiAgICB9LCBbcHVyY2hhc2VEYXRhXSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlUHJpY2UgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZGlzY291bnQgPSBwcm9kdWN0Py5kaXNjb3VudD8ubmV3UHJpY2UgfHwgcHJvZHVjdD8ucHJpY2U7XHJcbiAgICAgICAgY29uc3QgZGlzY291bnRWYWx1ZSA9IGRpc2NvdW50Q29kZUFtb3VudC5kaXNjb3VudCB8fCAwO1xyXG4gICAgICAgIGNvbnN0IGRpc2NvdW50UGVyY2VudCA9IGRpc2NvdW50Q29kZUFtb3VudC5kaXNjb3VudFBlcmNlbnQgfHwgMDtcclxuICAgICAgICAvL2xldCBmaW5hbFByaWNlID0gMDtcclxuXHJcbiAgICAgICAgaWYodHlwZW9mIGRpc2NvdW50ID09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBkaXNjb3VudFZhbHVlID09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBkaXNjb3VudFBlcmNlbnQgPT0gdW5kZWZpbmVkIHx8IHR5cGVvZiBwcm9kdWN0Py5wcmljZSA9PSAndW5kZWZpbmVkJyl7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICByZXR1cm4gO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGRpc2NvdW50ICYmIGRpc2NvdW50VmFsdWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuICBkaXNjb3VudCAtIGRpc2NvdW50VmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghZGlzY291bnQgJiYgZGlzY291bnRWYWx1ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gIHByb2R1Y3Q/LnByaWNlIC0gZGlzY291bnRWYWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGRpc2NvdW50ICYmIGRpc2NvdW50UGVyY2VudCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZGlzY291bnQgLSBkaXNjb3VudCAqIChkaXNjb3VudFBlcmNlbnQgLyAxMDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWRpc2NvdW50ICYmIGRpc2NvdW50UGVyY2VudCkge1xyXG4gICAgICAgICAgICByZXR1cm4gcHJvZHVjdD8ucHJpY2UgLSBwcm9kdWN0Py5wcmljZSAqIChkaXNjb3VudFBlcmNlbnQgLyAxMDApO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgXHJcblxyXG4gICAgY29uc3Qgc3R5bGU6IENTU1Byb3BlcnRpZXMgPSB7XHJcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgIG1hcmdpbjogJ3ZhcigtLWxhcmdlLW1hcmdpbiknLFxyXG4gICAgICAgIGZvbnRTaXplOiAnY2FsYyh2YXIoLS1iaWctc2l6ZSkqMS41KScsXHJcbiAgICAgICAgZm9udFdlaWdodDogJzcwMCcsXHJcbiAgICAgICAgY29sb3I6ICd2YXIoLS1ibGFjayknLFxyXG4gICAgfVxyXG4gICAgY29uc3Qgc3R5bGVQcmljZVc6IENTU1Byb3BlcnRpZXMgPSB7XHJcbiAgICAgICAgZm9udFdlaWdodDogJzIwMCdcclxuICAgIH1cclxuICAgIGNvbnN0IHN0eWxlUHJpY2U6IENTU1Byb3BlcnRpZXMgPSB7XHJcbiAgICAgICAgbWFyZ2luOiAndmFyKC0tbGFyZ2UtbWFyZ2luKScsXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBzdHlsZT17c3R5bGV9IGlkPVwicHJpY2VcIj5cclxuICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3N0eWxlUHJpY2VXfT5cclxuICAgICAgICAgICAgICAgIHtsYW5ndWFnZVNlbGVjdG9yQ29udGV4dD8uYWN0aXZlTGFuZ3VhZ2UgPT09ICdlbmdsaXNoJyBcclxuICAgICAgICAgICAgICAgICAgICA/IGVuZ2xpc2gucHJpY2VXICsgJyA6ICcgXHJcbiAgICAgICAgICAgICAgICAgICAgOiBhcmFiaWMucHJpY2VXICsgJyA6ICd9XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuXHJcbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPXtzdHlsZVByaWNlfT57cHVyY2hhc2VEYXRhPy50b3RhbFByaWNlPyBpc3ByaWNlQ2hhbmdlICYmIHB1cmNoYXNlRGF0YT8udG90YWxQcmljZSA6ICBwcm9kdWN0Py5kaXNjb3VudD8ubmV3UHJpY2U/PyBwcm9kdWN0Py5wcmljZX08L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuPntjb21wYW55SW5mb3JtYXRpb24/LmN1cnJlbmN5VHlwZX08L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgUHJpY2U7Il0sIm5hbWVzIjpbImVuZ2xpc2giLCJhcmFiaWMiLCJMYW5ndWFnZVNlbGVjdG9yQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIkNvbXBhbnlJbmZvcm1hdGlvbkNvbnRleHQiLCJQcmljZSIsInByb2R1Y3QiLCJzZXRQcmljZSIsImRpc2NvdW50Q29kZUFtb3VudCIsInB1cmNoYXNlRGF0YSIsImxhbmd1YWdlU2VsZWN0b3JDb250ZXh0IiwiY29tcGFueUluZm9ybWF0aW9uIiwiaXNwcmljZUNoYW5nZSIsInNldElzcHJpY2VDaGFuZ2UiLCJpc0ZpcnN0UmVuZGVyIiwiaGFuZGxlUHJpY2UiLCJjdXJyZW50IiwiY29uc29sZSIsImxvZyIsImRpc2NvdW50IiwibmV3UHJpY2UiLCJwcmljZSIsImRpc2NvdW50VmFsdWUiLCJkaXNjb3VudFBlcmNlbnQiLCJ1bmRlZmluZWQiLCJzdHlsZSIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwibWFyZ2luIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwiY29sb3IiLCJzdHlsZVByaWNlVyIsInN0eWxlUHJpY2UiLCJkaXYiLCJpZCIsInNwYW4iLCJhY3RpdmVMYW5ndWFnZSIsInByaWNlVyIsInRvdGFsUHJpY2UiLCJjdXJyZW5jeVR5cGUiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/pages/productDetails/[productId]/forComputer/component/informationSection.tsx/component/price.tsx\n"));

/***/ })

});