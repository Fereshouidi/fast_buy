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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_languages_english_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/languages/english.json */ \"(app-pages-browser)/./app/languages/english.json\");\n/* harmony import */ var _app_languages_arabic_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/languages/arabic.json */ \"(app-pages-browser)/./app/languages/arabic.json\");\n/* harmony import */ var _app_contexts_LanguageSelectorContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/contexts/LanguageSelectorContext */ \"(app-pages-browser)/./app/contexts/LanguageSelectorContext.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _app_contexts_companyInformation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/app/contexts/companyInformation */ \"(app-pages-browser)/./app/contexts/companyInformation.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Price = (param)=>{\n    let { product, setPrice, discountCodeAmount, purchaseData } = param;\n    var _product_discount;\n    _s();\n    const languageSelectorContext = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_app_contexts_LanguageSelectorContext__WEBPACK_IMPORTED_MODULE_3__.LanguageSelectorContext);\n    const companyInformation = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_app_contexts_companyInformation__WEBPACK_IMPORTED_MODULE_5__.CompanyInformationContext);\n    const [ispriceChange, setIspriceChange] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const isFirstRender = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)({\n        \"Price.useEffect\": ()=>{\n            setPrice(handlePrice());\n        }\n    }[\"Price.useEffect\"], [\n        discountCodeAmount\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)({\n        \"Price.useEffect\": ()=>{\n            if (isFirstRender) {\n                setIsFirstRender(false);\n                return; // يمنع التنفيذ في أول مرة\n            }\n            setIspriceChange(true);\n            console.log(\"Price changed!\");\n        }\n    }[\"Price.useEffect\"], [\n        purchaseData\n    ]);\n    const handlePrice = ()=>{\n        var _product_discount;\n        const discount = (product === null || product === void 0 ? void 0 : (_product_discount = product.discount) === null || _product_discount === void 0 ? void 0 : _product_discount.newPrice) || (product === null || product === void 0 ? void 0 : product.price);\n        const discountValue = discountCodeAmount.discount || 0;\n        const discountPercent = discountCodeAmount.discountPercent || 0;\n        //let finalPrice = 0;\n        if (typeof discount == 'undefined' || typeof discountValue == 'undefined' || typeof discountPercent == undefined || typeof (product === null || product === void 0 ? void 0 : product.price) == 'undefined') {\n            return;\n        }\n        if (discount && discountValue) {\n            return discount - discountValue;\n        }\n        if (!discount && discountValue) {\n            return (product === null || product === void 0 ? void 0 : product.price) - discountValue;\n        }\n        if (discount && discountPercent) {\n            return discount - discount * (discountPercent / 100);\n        }\n        if (!discount && discountPercent) {\n            return (product === null || product === void 0 ? void 0 : product.price) - (product === null || product === void 0 ? void 0 : product.price) * (discountPercent / 100);\n        } else {\n            return 0;\n        }\n    };\n    const style = {\n        display: 'flex',\n        alignItems: 'center',\n        margin: 'var(--large-margin)',\n        fontSize: 'calc(var(--big-size)*1.5)',\n        fontWeight: '700',\n        color: 'var(--black)'\n    };\n    const stylePriceW = {\n        fontWeight: '200'\n    };\n    const stylePrice = {\n        margin: 'var(--large-margin)'\n    };\n    var _product_discount_newPrice;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: style,\n        id: \"price\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                style: stylePriceW,\n                children: (languageSelectorContext === null || languageSelectorContext === void 0 ? void 0 : languageSelectorContext.activeLanguage) === 'english' ? _app_languages_english_json__WEBPACK_IMPORTED_MODULE_1__.priceW + ' : ' : _app_languages_arabic_json__WEBPACK_IMPORTED_MODULE_2__.priceW + ' : '\n            }, void 0, false, {\n                fileName: \"C:\\\\my_projects\\\\fast_buy\\\\webSite_for_the_customer\\\\app\\\\pages\\\\productDetails\\\\[productId]\\\\forComputer\\\\component\\\\informationSection.tsx\\\\component\\\\price.tsx\",\n                lineNumber: 92,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                style: stylePrice,\n                children: (purchaseData === null || purchaseData === void 0 ? void 0 : purchaseData.totalPrice) ? ispriceChange && (purchaseData === null || purchaseData === void 0 ? void 0 : purchaseData.totalPrice) : (_product_discount_newPrice = product === null || product === void 0 ? void 0 : (_product_discount = product.discount) === null || _product_discount === void 0 ? void 0 : _product_discount.newPrice) !== null && _product_discount_newPrice !== void 0 ? _product_discount_newPrice : product === null || product === void 0 ? void 0 : product.price\n            }, void 0, false, {\n                fileName: \"C:\\\\my_projects\\\\fast_buy\\\\webSite_for_the_customer\\\\app\\\\pages\\\\productDetails\\\\[productId]\\\\forComputer\\\\component\\\\informationSection.tsx\\\\component\\\\price.tsx\",\n                lineNumber: 98,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: companyInformation === null || companyInformation === void 0 ? void 0 : companyInformation.currencyType\n            }, void 0, false, {\n                fileName: \"C:\\\\my_projects\\\\fast_buy\\\\webSite_for_the_customer\\\\app\\\\pages\\\\productDetails\\\\[productId]\\\\forComputer\\\\component\\\\informationSection.tsx\\\\component\\\\price.tsx\",\n                lineNumber: 99,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\my_projects\\\\fast_buy\\\\webSite_for_the_customer\\\\app\\\\pages\\\\productDetails\\\\[productId]\\\\forComputer\\\\component\\\\informationSection.tsx\\\\component\\\\price.tsx\",\n        lineNumber: 91,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Price, \"MVt1ZTQEL5ADCxa3aswGUB/fzWA=\");\n_c = Price;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Price);\nvar _c;\n$RefreshReg$(_c, \"Price\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlcy9wcm9kdWN0RGV0YWlscy9bcHJvZHVjdElkXS9mb3JDb21wdXRlci9jb21wb25lbnQvaW5mb3JtYXRpb25TZWN0aW9uLnRzeC9jb21wb25lbnQvcHJpY2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDbUQ7QUFDRjtBQUNnQztBQUVGO0FBRUQ7QUFXOUUsTUFBTVEsUUFBUTtRQUFDLEVBQUNDLE9BQU8sRUFBRUMsUUFBUSxFQUFFQyxrQkFBa0IsRUFBRUMsWUFBWSxFQUFTO1FBK0VpQ0g7O0lBN0V6RyxNQUFNSSwwQkFBMEJWLGlEQUFVQSxDQUFDRCwwRkFBdUJBO0lBQ2xFLE1BQU1ZLHFCQUFxQlgsaURBQVVBLENBQUNJLHVGQUF5QkE7SUFDL0QsTUFBTSxDQUFDUSxlQUFlQyxpQkFBaUIsR0FBR1YsK0NBQVFBLENBQVU7SUFDNUQsTUFBTVcsZ0JBQWdCWiw2Q0FBTUEsQ0FBQztJQUc3QkQsZ0RBQVNBOzJCQUFDO1lBQ05NLFNBQVVRO1FBQ2Q7MEJBQUc7UUFBQ1A7S0FBbUI7SUFJdkJQLGdEQUFTQTsyQkFBQztZQUNOLElBQUlhLGVBQWU7Z0JBQ2ZFLGlCQUFpQjtnQkFDakIsUUFBUSwwQkFBMEI7WUFDdEM7WUFFQUgsaUJBQWlCO1lBQ2pCSSxRQUFRQyxHQUFHLENBQUM7UUFFaEI7MEJBQUc7UUFBQ1Q7S0FBYTtJQUdqQixNQUFNTSxjQUFjO1lBQ0NUO1FBQWpCLE1BQU1hLFdBQVdiLENBQUFBLG9CQUFBQSwrQkFBQUEsb0JBQUFBLFFBQVNhLFFBQVEsY0FBakJiLHdDQUFBQSxrQkFBbUJjLFFBQVEsTUFBSWQsb0JBQUFBLDhCQUFBQSxRQUFTZSxLQUFLO1FBQzlELE1BQU1DLGdCQUFnQmQsbUJBQW1CVyxRQUFRLElBQUk7UUFDckQsTUFBTUksa0JBQWtCZixtQkFBbUJlLGVBQWUsSUFBSTtRQUM5RCxxQkFBcUI7UUFFckIsSUFBRyxPQUFPSixZQUFZLGVBQWUsT0FBT0csaUJBQWlCLGVBQWUsT0FBT0MsbUJBQW1CQyxhQUFhLFFBQU9sQixvQkFBQUEsOEJBQUFBLFFBQVNlLEtBQUssS0FBSSxhQUFZO1lBRXBKO1FBQ0o7UUFFQSxJQUFJRixZQUFZRyxlQUFlO1lBQzNCLE9BQVFILFdBQVdHO1FBQ3ZCO1FBQ0EsSUFBSSxDQUFDSCxZQUFZRyxlQUFlO1lBQzVCLE9BQVFoQixDQUFBQSxvQkFBQUEsOEJBQUFBLFFBQVNlLEtBQUssSUFBR0M7UUFDN0I7UUFDQSxJQUFJSCxZQUFZSSxpQkFBaUI7WUFDN0IsT0FBT0osV0FBV0EsV0FBWUksQ0FBQUEsa0JBQWtCLEdBQUU7UUFDdEQ7UUFDQSxJQUFJLENBQUNKLFlBQVlJLGlCQUFpQjtZQUM5QixPQUFPakIsQ0FBQUEsb0JBQUFBLDhCQUFBQSxRQUFTZSxLQUFLLElBQUdmLENBQUFBLG9CQUFBQSw4QkFBQUEsUUFBU2UsS0FBSyxJQUFJRSxDQUFBQSxrQkFBa0IsR0FBRTtRQUNsRSxPQUFLO1lBQ0QsT0FBTztRQUNYO0lBRUo7SUFHQSxNQUFNRSxRQUF1QjtRQUN6QkMsU0FBUztRQUNUQyxZQUFZO1FBQ1pDLFFBQVE7UUFDUkMsVUFBVTtRQUNWQyxZQUFZO1FBQ1pDLE9BQU87SUFDWDtJQUNBLE1BQU1DLGNBQTZCO1FBQy9CRixZQUFZO0lBQ2hCO0lBQ0EsTUFBTUcsYUFBNEI7UUFDOUJMLFFBQVE7SUFDWjtRQVd5R3RCO0lBUnpHLHFCQUNJLDhEQUFDNEI7UUFBSVQsT0FBT0E7UUFBT1UsSUFBRzs7MEJBQ2xCLDhEQUFDQztnQkFBS1gsT0FBT087MEJBQ1J0QixDQUFBQSxvQ0FBQUEsOENBQUFBLHdCQUF5QjJCLGNBQWMsTUFBSyxZQUN2Q3hDLCtEQUFjLEdBQUcsUUFDakJDLDhEQUFhLEdBQUc7Ozs7OzswQkFHMUIsOERBQUNzQztnQkFBS1gsT0FBT1E7MEJBQWF4QixDQUFBQSx5QkFBQUEsbUNBQUFBLGFBQWM4QixVQUFVLElBQUUzQixrQkFBaUJILHlCQUFBQSxtQ0FBQUEsYUFBYzhCLFVBQVUsSUFBSWpDLENBQUFBLDZCQUFBQSxvQkFBQUEsK0JBQUFBLG9CQUFBQSxRQUFTYSxRQUFRLGNBQWpCYix3Q0FBQUEsa0JBQW1CYyxRQUFRLGNBQTNCZCx3Q0FBQUEsNkJBQThCQSxvQkFBQUEsOEJBQUFBLFFBQVNlLEtBQUs7Ozs7OzswQkFDN0ksOERBQUNlOzBCQUFNekIsK0JBQUFBLHlDQUFBQSxtQkFBb0I2QixZQUFZOzs7Ozs7Ozs7Ozs7QUFHbkQ7R0FuRk1uQztLQUFBQTtBQW9GTixpRUFBZUEsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsiQzpcXG15X3Byb2plY3RzXFxmYXN0X2J1eVxcd2ViU2l0ZV9mb3JfdGhlX2N1c3RvbWVyXFxhcHBcXHBhZ2VzXFxwcm9kdWN0RGV0YWlsc1xcW3Byb2R1Y3RJZF1cXGZvckNvbXB1dGVyXFxjb21wb25lbnRcXGluZm9ybWF0aW9uU2VjdGlvbi50c3hcXGNvbXBvbmVudFxccHJpY2UudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcclxuaW1wb3J0IGVuZ2xpc2ggZnJvbSAnQC9hcHAvbGFuZ3VhZ2VzL2VuZ2xpc2guanNvbic7XHJcbmltcG9ydCBhcmFiaWMgZnJvbSAnQC9hcHAvbGFuZ3VhZ2VzL2FyYWJpYy5qc29uJztcclxuaW1wb3J0IHsgTGFuZ3VhZ2VTZWxlY3RvckNvbnRleHQgfSBmcm9tIFwiQC9hcHAvY29udGV4dHMvTGFuZ3VhZ2VTZWxlY3RvckNvbnRleHRcIjtcclxuaW1wb3J0IHsgcHJvZHVjdFBhcmFtcyB9IGZyb20gXCJAL2FwcC9jb250ZXh0cy9wcm9kdWN0U2VsZWN0Rm9yU2hvd2luZ1wiO1xyXG5pbXBvcnQgeyBDU1NQcm9wZXJ0aWVzLCB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgcHVyY2hhc2VQYXJhbXMgfSBmcm9tICdAL2FwcC9jb250ZXh0cy9wdXJjaGFzZURhdGEnO1xyXG5pbXBvcnQgeyBDb21wYW55SW5mb3JtYXRpb25Db250ZXh0IH0gZnJvbSAnQC9hcHAvY29udGV4dHMvY29tcGFueUluZm9ybWF0aW9uJztcclxuXHJcbnR5cGUgUGFyYW1zID0ge1xyXG4gICAgcHJvZHVjdDogcHJvZHVjdFBhcmFtcyB8IHVuZGVmaW5lZCxcclxuICAgIHNldFByb2R1Y3Q6ICh2YWx1ZTogcHJvZHVjdFBhcmFtcykgPT4gdm9pZFxyXG4gICAgZGlzY291bnRDb2RlQW1vdW50OiB7ZGlzY291bnQ/OiBudW1iZXIgfCBudWxsLCBkaXNjb3VudFBlcmNlbnQ/OiBudW1iZXIgfCBudWxsfSxcclxuICAgIHByaWNlOiBudW1iZXIgfCB1bmRlZmluZWQsIFxyXG4gICAgc2V0UHJpY2U6ICh2YWx1ZTogbnVtYmVyIHwgdW5kZWZpbmVkKSA9PiB2b2lkLFxyXG4gICAgcHVyY2hhc2VEYXRhOiBwdXJjaGFzZVBhcmFtcyB8IHVuZGVmaW5lZCxcclxuICAgIHNldFB1cmNoYXNlRGF0YTogKHZhbHVlOiBwdXJjaGFzZVBhcmFtcykgPT4gdm9pZFxyXG59XHJcbmNvbnN0IFByaWNlID0gKHtwcm9kdWN0LCBzZXRQcmljZSwgZGlzY291bnRDb2RlQW1vdW50LCBwdXJjaGFzZURhdGF9OiBQYXJhbXMpID0+IHtcclxuXHJcbiAgICBjb25zdCBsYW5ndWFnZVNlbGVjdG9yQ29udGV4dCA9IHVzZUNvbnRleHQoTGFuZ3VhZ2VTZWxlY3RvckNvbnRleHQpO1xyXG4gICAgY29uc3QgY29tcGFueUluZm9ybWF0aW9uID0gdXNlQ29udGV4dChDb21wYW55SW5mb3JtYXRpb25Db250ZXh0KTtcclxuICAgIGNvbnN0IFtpc3ByaWNlQ2hhbmdlLCBzZXRJc3ByaWNlQ2hhbmdlXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuICAgIGNvbnN0IGlzRmlyc3RSZW5kZXIgPSB1c2VSZWYodHJ1ZSk7XHJcblxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2V0UHJpY2UoIGhhbmRsZVByaWNlKCkpXHJcbiAgICB9LCBbZGlzY291bnRDb2RlQW1vdW50XSlcclxuXHJcblxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGlzRmlyc3RSZW5kZXIpIHtcclxuICAgICAgICAgICAgc2V0SXNGaXJzdFJlbmRlcihmYWxzZSk7XHJcbiAgICAgICAgICAgIHJldHVybjsgLy8g2YrZhdmG2Lkg2KfZhNiq2YbZgdmK2LAg2YHZiiDYo9mI2YQg2YXYsdipXHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgc2V0SXNwcmljZUNoYW5nZSh0cnVlKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlByaWNlIGNoYW5nZWQhXCIpO1xyXG4gICAgXHJcbiAgICB9LCBbcHVyY2hhc2VEYXRhXSk7XHJcbiAgICBcclxuXHJcbiAgICBjb25zdCBoYW5kbGVQcmljZSA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBkaXNjb3VudCA9IHByb2R1Y3Q/LmRpc2NvdW50Py5uZXdQcmljZSB8fCBwcm9kdWN0Py5wcmljZTtcclxuICAgICAgICBjb25zdCBkaXNjb3VudFZhbHVlID0gZGlzY291bnRDb2RlQW1vdW50LmRpc2NvdW50IHx8IDA7XHJcbiAgICAgICAgY29uc3QgZGlzY291bnRQZXJjZW50ID0gZGlzY291bnRDb2RlQW1vdW50LmRpc2NvdW50UGVyY2VudCB8fCAwO1xyXG4gICAgICAgIC8vbGV0IGZpbmFsUHJpY2UgPSAwO1xyXG5cclxuICAgICAgICBpZih0eXBlb2YgZGlzY291bnQgPT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIGRpc2NvdW50VmFsdWUgPT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIGRpc2NvdW50UGVyY2VudCA9PSB1bmRlZmluZWQgfHwgdHlwZW9mIHByb2R1Y3Q/LnByaWNlID09ICd1bmRlZmluZWQnKXtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJldHVybiA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZGlzY291bnQgJiYgZGlzY291bnRWYWx1ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gIGRpc2NvdW50IC0gZGlzY291bnRWYWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFkaXNjb3VudCAmJiBkaXNjb3VudFZhbHVlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAgcHJvZHVjdD8ucHJpY2UgLSBkaXNjb3VudFZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZGlzY291bnQgJiYgZGlzY291bnRQZXJjZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBkaXNjb3VudCAtIGRpc2NvdW50ICogKGRpc2NvdW50UGVyY2VudCAvIDEwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghZGlzY291bnQgJiYgZGlzY291bnRQZXJjZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwcm9kdWN0Py5wcmljZSAtIHByb2R1Y3Q/LnByaWNlICogKGRpc2NvdW50UGVyY2VudCAvIDEwMCk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICBcclxuXHJcbiAgICBjb25zdCBzdHlsZTogQ1NTUHJvcGVydGllcyA9IHtcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgbWFyZ2luOiAndmFyKC0tbGFyZ2UtbWFyZ2luKScsXHJcbiAgICAgICAgZm9udFNpemU6ICdjYWxjKHZhcigtLWJpZy1zaXplKSoxLjUpJyxcclxuICAgICAgICBmb250V2VpZ2h0OiAnNzAwJyxcclxuICAgICAgICBjb2xvcjogJ3ZhcigtLWJsYWNrKScsXHJcbiAgICB9XHJcbiAgICBjb25zdCBzdHlsZVByaWNlVzogQ1NTUHJvcGVydGllcyA9IHtcclxuICAgICAgICBmb250V2VpZ2h0OiAnMjAwJ1xyXG4gICAgfVxyXG4gICAgY29uc3Qgc3R5bGVQcmljZTogQ1NTUHJvcGVydGllcyA9IHtcclxuICAgICAgICBtYXJnaW46ICd2YXIoLS1sYXJnZS1tYXJnaW4pJyxcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZX0gaWQ9XCJwcmljZVwiPlxyXG4gICAgICAgICAgICA8c3BhbiBzdHlsZT17c3R5bGVQcmljZVd9PlxyXG4gICAgICAgICAgICAgICAge2xhbmd1YWdlU2VsZWN0b3JDb250ZXh0Py5hY3RpdmVMYW5ndWFnZSA9PT0gJ2VuZ2xpc2gnIFxyXG4gICAgICAgICAgICAgICAgICAgID8gZW5nbGlzaC5wcmljZVcgKyAnIDogJyBcclxuICAgICAgICAgICAgICAgICAgICA6IGFyYWJpYy5wcmljZVcgKyAnIDogJ31cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG5cclxuICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3N0eWxlUHJpY2V9PntwdXJjaGFzZURhdGE/LnRvdGFsUHJpY2U/IGlzcHJpY2VDaGFuZ2UgJiYgcHVyY2hhc2VEYXRhPy50b3RhbFByaWNlIDogIHByb2R1Y3Q/LmRpc2NvdW50Py5uZXdQcmljZT8/IHByb2R1Y3Q/LnByaWNlfTwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4+e2NvbXBhbnlJbmZvcm1hdGlvbj8uY3VycmVuY3lUeXBlfTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBQcmljZTsiXSwibmFtZXMiOlsiZW5nbGlzaCIsImFyYWJpYyIsIkxhbmd1YWdlU2VsZWN0b3JDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiQ29tcGFueUluZm9ybWF0aW9uQ29udGV4dCIsIlByaWNlIiwicHJvZHVjdCIsInNldFByaWNlIiwiZGlzY291bnRDb2RlQW1vdW50IiwicHVyY2hhc2VEYXRhIiwibGFuZ3VhZ2VTZWxlY3RvckNvbnRleHQiLCJjb21wYW55SW5mb3JtYXRpb24iLCJpc3ByaWNlQ2hhbmdlIiwic2V0SXNwcmljZUNoYW5nZSIsImlzRmlyc3RSZW5kZXIiLCJoYW5kbGVQcmljZSIsInNldElzRmlyc3RSZW5kZXIiLCJjb25zb2xlIiwibG9nIiwiZGlzY291bnQiLCJuZXdQcmljZSIsInByaWNlIiwiZGlzY291bnRWYWx1ZSIsImRpc2NvdW50UGVyY2VudCIsInVuZGVmaW5lZCIsInN0eWxlIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJtYXJnaW4iLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJjb2xvciIsInN0eWxlUHJpY2VXIiwic3R5bGVQcmljZSIsImRpdiIsImlkIiwic3BhbiIsImFjdGl2ZUxhbmd1YWdlIiwicHJpY2VXIiwidG90YWxQcmljZSIsImN1cnJlbmN5VHlwZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/pages/productDetails/[productId]/forComputer/component/informationSection.tsx/component/price.tsx\n"));

/***/ })

});