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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_languages_english_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/languages/english.json */ \"(app-pages-browser)/./app/languages/english.json\");\n/* harmony import */ var _app_languages_arabic_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/languages/arabic.json */ \"(app-pages-browser)/./app/languages/arabic.json\");\n/* harmony import */ var _app_contexts_LanguageSelectorContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/contexts/LanguageSelectorContext */ \"(app-pages-browser)/./app/contexts/LanguageSelectorContext.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _app_contexts_companyInformation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/app/contexts/companyInformation */ \"(app-pages-browser)/./app/contexts/companyInformation.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Price = (param)=>{\n    let { product, price, setPrice, discountCodeAmount, purchaseData, isPriceChange, setIspriceChange } = param;\n    var _product_discount, _purchaseData_totalPrice;\n    _s();\n    const languageSelectorContext = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_app_contexts_LanguageSelectorContext__WEBPACK_IMPORTED_MODULE_3__.LanguageSelectorContext);\n    const companyInformation = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_app_contexts_companyInformation__WEBPACK_IMPORTED_MODULE_5__.CompanyInformationContext);\n    const [isFirstRender, setIsFirstRender] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(true);\n    const [price_, setPrice_] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)((product === null || product === void 0 ? void 0 : (_product_discount = product.discount) === null || _product_discount === void 0 ? void 0 : _product_discount.newPrice) || (product === null || product === void 0 ? void 0 : product.price));\n    console.log(price);\n    // useEffect(() => {\n    //     setPrice( handlePrice())\n    // }, [discountCodeAmount])\n    const handlePrice = ()=>{\n        var _product_discount;\n        const discount = (product === null || product === void 0 ? void 0 : (_product_discount = product.discount) === null || _product_discount === void 0 ? void 0 : _product_discount.newPrice) || (product === null || product === void 0 ? void 0 : product.price);\n        const discountValue = discountCodeAmount.discount || 0;\n        const discountPercent = discountCodeAmount.discountPercent || 0;\n        //let finalPrice = 0;\n        if (typeof discount == 'undefined' || typeof discountValue == 'undefined' || typeof discountPercent == undefined || typeof (product === null || product === void 0 ? void 0 : product.price) == 'undefined') {\n            return;\n        }\n        if (discount && discountValue) {\n            return discount - discountValue;\n        }\n        if (!discount && discountValue) {\n            return (product === null || product === void 0 ? void 0 : product.price) - discountValue;\n        }\n        if (discount && discountPercent) {\n            return discount - discount * (discountPercent / 100);\n        }\n        if (!discount && discountPercent) {\n            return (product === null || product === void 0 ? void 0 : product.price) - (product === null || product === void 0 ? void 0 : product.price) * (discountPercent / 100);\n        } else {\n            return 0;\n        }\n    };\n    const style = {\n        display: 'flex',\n        alignItems: 'center',\n        margin: 'var(--large-margin)',\n        fontSize: 'calc(var(--big-size)*1.5)',\n        fontWeight: '700',\n        color: 'var(--black)'\n    };\n    const stylePriceW = {\n        fontWeight: '200'\n    };\n    const stylePrice = {\n        margin: 'var(--large-margin)'\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: style,\n        id: \"price\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                style: stylePriceW,\n                children: (languageSelectorContext === null || languageSelectorContext === void 0 ? void 0 : languageSelectorContext.activeLanguage) === 'english' ? _app_languages_english_json__WEBPACK_IMPORTED_MODULE_1__.priceW + ' : ' : _app_languages_arabic_json__WEBPACK_IMPORTED_MODULE_2__.priceW + ' : '\n            }, void 0, false, {\n                fileName: \"C:\\\\my_projects\\\\fast_buy\\\\webSite_for_the_customer\\\\app\\\\pages\\\\productDetails\\\\[productId]\\\\forComputer\\\\component\\\\informationSection.tsx\\\\component\\\\price.tsx\",\n                lineNumber: 85,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                style: stylePrice,\n                children: isPriceChange ? purchaseData === null || purchaseData === void 0 ? void 0 : (_purchaseData_totalPrice = purchaseData.totalPrice) === null || _purchaseData_totalPrice === void 0 ? void 0 : _purchaseData_totalPrice.toFixed(3) : price\n            }, void 0, false, {\n                fileName: \"C:\\\\my_projects\\\\fast_buy\\\\webSite_for_the_customer\\\\app\\\\pages\\\\productDetails\\\\[productId]\\\\forComputer\\\\component\\\\informationSection.tsx\\\\component\\\\price.tsx\",\n                lineNumber: 91,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: companyInformation === null || companyInformation === void 0 ? void 0 : companyInformation.currencyType\n            }, void 0, false, {\n                fileName: \"C:\\\\my_projects\\\\fast_buy\\\\webSite_for_the_customer\\\\app\\\\pages\\\\productDetails\\\\[productId]\\\\forComputer\\\\component\\\\informationSection.tsx\\\\component\\\\price.tsx\",\n                lineNumber: 92,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\my_projects\\\\fast_buy\\\\webSite_for_the_customer\\\\app\\\\pages\\\\productDetails\\\\[productId]\\\\forComputer\\\\component\\\\informationSection.tsx\\\\component\\\\price.tsx\",\n        lineNumber: 84,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Price, \"QBrT2lds/Anw03eFtvTOV7Y6320=\");\n_c = Price;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Price); //purchaseData?.totalPrice? ispriceChange && purchaseData?.totalPrice :  \n //product?.discount?.newPrice?? product?.price\nvar _c;\n$RefreshReg$(_c, \"Price\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlcy9wcm9kdWN0RGV0YWlscy9bcHJvZHVjdElkXS9mb3JDb21wdXRlci9jb21wb25lbnQvaW5mb3JtYXRpb25TZWN0aW9uLnRzeC9jb21wb25lbnQvcHJpY2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDbUQ7QUFDRjtBQUNnQztBQUVyQjtBQUVrQjtBQWE5RSxNQUFNTSxRQUFRO1FBQUMsRUFBQ0MsT0FBTyxFQUFFQyxLQUFLLEVBQUVDLFFBQVEsRUFBRUMsa0JBQWtCLEVBQUVDLFlBQVksRUFBRUMsYUFBYSxFQUFFQyxnQkFBZ0IsRUFBUztRQUtuRU4sbUJBaUVJSTs7SUFwRWpELE1BQU1HLDBCQUEwQlgsaURBQVVBLENBQUNELDBGQUF1QkE7SUFDbEUsTUFBTWEscUJBQXFCWixpREFBVUEsQ0FBQ0UsdUZBQXlCQTtJQUMvRCxNQUFNLENBQUNXLGVBQWVDLGlCQUFpQixHQUFHYiwrQ0FBUUEsQ0FBQztJQUNuRCxNQUFNLENBQUNjLFFBQVFDLFVBQVUsR0FBR2YsK0NBQVFBLENBQVNHLENBQUFBLG9CQUFBQSwrQkFBQUEsb0JBQUFBLFFBQVNhLFFBQVEsY0FBakJiLHdDQUFBQSxrQkFBbUJjLFFBQVEsTUFBSWQsb0JBQUFBLDhCQUFBQSxRQUFTQyxLQUFLO0lBRzFGYyxRQUFRQyxHQUFHLENBQUNmO0lBR1osb0JBQW9CO0lBQ3BCLCtCQUErQjtJQUMvQiwyQkFBMkI7SUFJM0IsTUFBTWdCLGNBQWM7WUFDQ2pCO1FBQWpCLE1BQU1hLFdBQVdiLENBQUFBLG9CQUFBQSwrQkFBQUEsb0JBQUFBLFFBQVNhLFFBQVEsY0FBakJiLHdDQUFBQSxrQkFBbUJjLFFBQVEsTUFBSWQsb0JBQUFBLDhCQUFBQSxRQUFTQyxLQUFLO1FBQzlELE1BQU1pQixnQkFBZ0JmLG1CQUFtQlUsUUFBUSxJQUFJO1FBQ3JELE1BQU1NLGtCQUFrQmhCLG1CQUFtQmdCLGVBQWUsSUFBSTtRQUM5RCxxQkFBcUI7UUFFckIsSUFBRyxPQUFPTixZQUFZLGVBQWUsT0FBT0ssaUJBQWlCLGVBQWUsT0FBT0MsbUJBQW1CQyxhQUFhLFFBQU9wQixvQkFBQUEsOEJBQUFBLFFBQVNDLEtBQUssS0FBSSxhQUFZO1lBRXBKO1FBQ0o7UUFFQSxJQUFJWSxZQUFZSyxlQUFlO1lBQzNCLE9BQVFMLFdBQVdLO1FBQ3ZCO1FBQ0EsSUFBSSxDQUFDTCxZQUFZSyxlQUFlO1lBQzVCLE9BQVFsQixDQUFBQSxvQkFBQUEsOEJBQUFBLFFBQVNDLEtBQUssSUFBR2lCO1FBQzdCO1FBQ0EsSUFBSUwsWUFBWU0saUJBQWlCO1lBQzdCLE9BQU9OLFdBQVdBLFdBQVlNLENBQUFBLGtCQUFrQixHQUFFO1FBQ3REO1FBQ0EsSUFBSSxDQUFDTixZQUFZTSxpQkFBaUI7WUFDOUIsT0FBT25CLENBQUFBLG9CQUFBQSw4QkFBQUEsUUFBU0MsS0FBSyxJQUFHRCxDQUFBQSxvQkFBQUEsOEJBQUFBLFFBQVNDLEtBQUssSUFBSWtCLENBQUFBLGtCQUFrQixHQUFFO1FBQ2xFLE9BQUs7WUFDRCxPQUFPO1FBQ1g7SUFFSjtJQUdBLE1BQU1FLFFBQXVCO1FBQ3pCQyxTQUFTO1FBQ1RDLFlBQVk7UUFDWkMsUUFBUTtRQUNSQyxVQUFVO1FBQ1ZDLFlBQVk7UUFDWkMsT0FBTztJQUNYO0lBQ0EsTUFBTUMsY0FBNkI7UUFDL0JGLFlBQVk7SUFDaEI7SUFDQSxNQUFNRyxhQUE0QjtRQUM5QkwsUUFBUTtJQUNaO0lBR0EscUJBQ0ksOERBQUNNO1FBQUlULE9BQU9BO1FBQU9VLElBQUc7OzBCQUNsQiw4REFBQ0M7Z0JBQUtYLE9BQU9POzBCQUNSckIsQ0FBQUEsb0NBQUFBLDhDQUFBQSx3QkFBeUIwQixjQUFjLE1BQUssWUFDdkN4QywrREFBYyxHQUFHLFFBQ2pCQyw4REFBYSxHQUFHOzs7Ozs7MEJBRzFCLDhEQUFDc0M7Z0JBQUtYLE9BQU9ROzBCQUFheEIsZ0JBQWVELHlCQUFBQSxvQ0FBQUEsMkJBQUFBLGFBQWMrQixVQUFVLGNBQXhCL0IsK0NBQUFBLHlCQUEwQmdDLE9BQU8sQ0FBQyxLQUFLbkM7Ozs7OzswQkFDaEYsOERBQUMrQjswQkFBTXhCLCtCQUFBQSx5Q0FBQUEsbUJBQW9CNkIsWUFBWTs7Ozs7Ozs7Ozs7O0FBR25EO0dBMUVNdEM7S0FBQUE7QUEyRU4saUVBQWVBLEtBQUtBLEVBQUMsQ0FFckIseUVBQXlFO0NBQ3pFLDhDQUE4QyIsInNvdXJjZXMiOlsiQzpcXG15X3Byb2plY3RzXFxmYXN0X2J1eVxcd2ViU2l0ZV9mb3JfdGhlX2N1c3RvbWVyXFxhcHBcXHBhZ2VzXFxwcm9kdWN0RGV0YWlsc1xcW3Byb2R1Y3RJZF1cXGZvckNvbXB1dGVyXFxjb21wb25lbnRcXGluZm9ybWF0aW9uU2VjdGlvbi50c3hcXGNvbXBvbmVudFxccHJpY2UudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcclxuaW1wb3J0IGVuZ2xpc2ggZnJvbSAnQC9hcHAvbGFuZ3VhZ2VzL2VuZ2xpc2guanNvbic7XHJcbmltcG9ydCBhcmFiaWMgZnJvbSAnQC9hcHAvbGFuZ3VhZ2VzL2FyYWJpYy5qc29uJztcclxuaW1wb3J0IHsgTGFuZ3VhZ2VTZWxlY3RvckNvbnRleHQgfSBmcm9tIFwiQC9hcHAvY29udGV4dHMvTGFuZ3VhZ2VTZWxlY3RvckNvbnRleHRcIjtcclxuaW1wb3J0IHsgcHJvZHVjdFBhcmFtcyB9IGZyb20gXCJAL2FwcC9jb250ZXh0cy9wcm9kdWN0U2VsZWN0Rm9yU2hvd2luZ1wiO1xyXG5pbXBvcnQgeyBDU1NQcm9wZXJ0aWVzLCB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBwdXJjaGFzZVBhcmFtcyB9IGZyb20gJ0AvYXBwL2NvbnRleHRzL3B1cmNoYXNlRGF0YSc7XHJcbmltcG9ydCB7IENvbXBhbnlJbmZvcm1hdGlvbkNvbnRleHQgfSBmcm9tICdAL2FwcC9jb250ZXh0cy9jb21wYW55SW5mb3JtYXRpb24nO1xyXG5cclxudHlwZSBQYXJhbXMgPSB7XHJcbiAgICBwcm9kdWN0OiBwcm9kdWN0UGFyYW1zIHwgdW5kZWZpbmVkLFxyXG4gICAgc2V0UHJvZHVjdDogKHZhbHVlOiBwcm9kdWN0UGFyYW1zKSA9PiB2b2lkXHJcbiAgICBkaXNjb3VudENvZGVBbW91bnQ6IHtkaXNjb3VudD86IG51bWJlciB8IG51bGwsIGRpc2NvdW50UGVyY2VudD86IG51bWJlciB8IG51bGx9LFxyXG4gICAgcHJpY2U6IG51bWJlciAsIFxyXG4gICAgc2V0UHJpY2U6ICh2YWx1ZTogbnVtYmVyICkgPT4gdm9pZCxcclxuICAgIHB1cmNoYXNlRGF0YTogcHVyY2hhc2VQYXJhbXMgfCB1bmRlZmluZWQsXHJcbiAgICBzZXRQdXJjaGFzZURhdGE6ICh2YWx1ZTogcHVyY2hhc2VQYXJhbXMpID0+IHZvaWRcclxuICAgIGlzUHJpY2VDaGFuZ2U6IGJvb2xlYW4sXHJcbiAgICBzZXRJc3ByaWNlQ2hhbmdlOiAodmFsdWU6IGJvb2xlYW4pID0+IHZvaWRcclxufVxyXG5jb25zdCBQcmljZSA9ICh7cHJvZHVjdCwgcHJpY2UsIHNldFByaWNlLCBkaXNjb3VudENvZGVBbW91bnQsIHB1cmNoYXNlRGF0YSwgaXNQcmljZUNoYW5nZSwgc2V0SXNwcmljZUNoYW5nZX06IFBhcmFtcykgPT4ge1xyXG5cclxuICAgIGNvbnN0IGxhbmd1YWdlU2VsZWN0b3JDb250ZXh0ID0gdXNlQ29udGV4dChMYW5ndWFnZVNlbGVjdG9yQ29udGV4dCk7XHJcbiAgICBjb25zdCBjb21wYW55SW5mb3JtYXRpb24gPSB1c2VDb250ZXh0KENvbXBhbnlJbmZvcm1hdGlvbkNvbnRleHQpO1xyXG4gICAgY29uc3QgW2lzRmlyc3RSZW5kZXIsIHNldElzRmlyc3RSZW5kZXJdID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgICBjb25zdCBbcHJpY2VfLCBzZXRQcmljZV9dID0gdXNlU3RhdGU8bnVtYmVyPihwcm9kdWN0Py5kaXNjb3VudD8ubmV3UHJpY2UgfHwgcHJvZHVjdD8ucHJpY2UpO1xyXG5cclxuXHJcbiAgICBjb25zb2xlLmxvZyhwcmljZSk7XHJcblxyXG5cclxuICAgIC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyAgICAgc2V0UHJpY2UoIGhhbmRsZVByaWNlKCkpXHJcbiAgICAvLyB9LCBbZGlzY291bnRDb2RlQW1vdW50XSlcclxuXHJcbiAgICBcclxuXHJcbiAgICBjb25zdCBoYW5kbGVQcmljZSA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBkaXNjb3VudCA9IHByb2R1Y3Q/LmRpc2NvdW50Py5uZXdQcmljZSB8fCBwcm9kdWN0Py5wcmljZTtcclxuICAgICAgICBjb25zdCBkaXNjb3VudFZhbHVlID0gZGlzY291bnRDb2RlQW1vdW50LmRpc2NvdW50IHx8IDA7XHJcbiAgICAgICAgY29uc3QgZGlzY291bnRQZXJjZW50ID0gZGlzY291bnRDb2RlQW1vdW50LmRpc2NvdW50UGVyY2VudCB8fCAwO1xyXG4gICAgICAgIC8vbGV0IGZpbmFsUHJpY2UgPSAwO1xyXG5cclxuICAgICAgICBpZih0eXBlb2YgZGlzY291bnQgPT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIGRpc2NvdW50VmFsdWUgPT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIGRpc2NvdW50UGVyY2VudCA9PSB1bmRlZmluZWQgfHwgdHlwZW9mIHByb2R1Y3Q/LnByaWNlID09ICd1bmRlZmluZWQnKXtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJldHVybiA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZGlzY291bnQgJiYgZGlzY291bnRWYWx1ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gIGRpc2NvdW50IC0gZGlzY291bnRWYWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFkaXNjb3VudCAmJiBkaXNjb3VudFZhbHVlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAgcHJvZHVjdD8ucHJpY2UgLSBkaXNjb3VudFZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZGlzY291bnQgJiYgZGlzY291bnRQZXJjZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBkaXNjb3VudCAtIGRpc2NvdW50ICogKGRpc2NvdW50UGVyY2VudCAvIDEwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghZGlzY291bnQgJiYgZGlzY291bnRQZXJjZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwcm9kdWN0Py5wcmljZSAtIHByb2R1Y3Q/LnByaWNlICogKGRpc2NvdW50UGVyY2VudCAvIDEwMCk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICBcclxuXHJcbiAgICBjb25zdCBzdHlsZTogQ1NTUHJvcGVydGllcyA9IHtcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgbWFyZ2luOiAndmFyKC0tbGFyZ2UtbWFyZ2luKScsXHJcbiAgICAgICAgZm9udFNpemU6ICdjYWxjKHZhcigtLWJpZy1zaXplKSoxLjUpJyxcclxuICAgICAgICBmb250V2VpZ2h0OiAnNzAwJyxcclxuICAgICAgICBjb2xvcjogJ3ZhcigtLWJsYWNrKScsXHJcbiAgICB9XHJcbiAgICBjb25zdCBzdHlsZVByaWNlVzogQ1NTUHJvcGVydGllcyA9IHtcclxuICAgICAgICBmb250V2VpZ2h0OiAnMjAwJ1xyXG4gICAgfVxyXG4gICAgY29uc3Qgc3R5bGVQcmljZTogQ1NTUHJvcGVydGllcyA9IHtcclxuICAgICAgICBtYXJnaW46ICd2YXIoLS1sYXJnZS1tYXJnaW4pJyxcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZX0gaWQ9XCJwcmljZVwiPlxyXG4gICAgICAgICAgICA8c3BhbiBzdHlsZT17c3R5bGVQcmljZVd9PlxyXG4gICAgICAgICAgICAgICAge2xhbmd1YWdlU2VsZWN0b3JDb250ZXh0Py5hY3RpdmVMYW5ndWFnZSA9PT0gJ2VuZ2xpc2gnIFxyXG4gICAgICAgICAgICAgICAgICAgID8gZW5nbGlzaC5wcmljZVcgKyAnIDogJyBcclxuICAgICAgICAgICAgICAgICAgICA6IGFyYWJpYy5wcmljZVcgKyAnIDogJ31cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG5cclxuICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3N0eWxlUHJpY2V9Pntpc1ByaWNlQ2hhbmdlPyBwdXJjaGFzZURhdGE/LnRvdGFsUHJpY2U/LnRvRml4ZWQoMykgOiBwcmljZX08L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuPntjb21wYW55SW5mb3JtYXRpb24/LmN1cnJlbmN5VHlwZX08L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgUHJpY2U7XHJcblxyXG4vL3B1cmNoYXNlRGF0YT8udG90YWxQcmljZT8gaXNwcmljZUNoYW5nZSAmJiBwdXJjaGFzZURhdGE/LnRvdGFsUHJpY2UgOiAgXHJcbi8vcHJvZHVjdD8uZGlzY291bnQ/Lm5ld1ByaWNlPz8gcHJvZHVjdD8ucHJpY2UiXSwibmFtZXMiOlsiZW5nbGlzaCIsImFyYWJpYyIsIkxhbmd1YWdlU2VsZWN0b3JDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZVN0YXRlIiwiQ29tcGFueUluZm9ybWF0aW9uQ29udGV4dCIsIlByaWNlIiwicHJvZHVjdCIsInByaWNlIiwic2V0UHJpY2UiLCJkaXNjb3VudENvZGVBbW91bnQiLCJwdXJjaGFzZURhdGEiLCJpc1ByaWNlQ2hhbmdlIiwic2V0SXNwcmljZUNoYW5nZSIsImxhbmd1YWdlU2VsZWN0b3JDb250ZXh0IiwiY29tcGFueUluZm9ybWF0aW9uIiwiaXNGaXJzdFJlbmRlciIsInNldElzRmlyc3RSZW5kZXIiLCJwcmljZV8iLCJzZXRQcmljZV8iLCJkaXNjb3VudCIsIm5ld1ByaWNlIiwiY29uc29sZSIsImxvZyIsImhhbmRsZVByaWNlIiwiZGlzY291bnRWYWx1ZSIsImRpc2NvdW50UGVyY2VudCIsInVuZGVmaW5lZCIsInN0eWxlIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJtYXJnaW4iLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJjb2xvciIsInN0eWxlUHJpY2VXIiwic3R5bGVQcmljZSIsImRpdiIsImlkIiwic3BhbiIsImFjdGl2ZUxhbmd1YWdlIiwicHJpY2VXIiwidG90YWxQcmljZSIsInRvRml4ZWQiLCJjdXJyZW5jeVR5cGUiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/pages/productDetails/[productId]/forComputer/component/informationSection.tsx/component/price.tsx\n"));

/***/ })

});