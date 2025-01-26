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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_languages_english_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/languages/english.json */ \"(app-pages-browser)/./app/languages/english.json\");\n/* harmony import */ var _app_languages_arabic_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/languages/arabic.json */ \"(app-pages-browser)/./app/languages/arabic.json\");\n/* harmony import */ var _app_contexts_LanguageSelectorContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/contexts/LanguageSelectorContext */ \"(app-pages-browser)/./app/contexts/LanguageSelectorContext.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _app_contexts_companyInformation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/app/contexts/companyInformation */ \"(app-pages-browser)/./app/contexts/companyInformation.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Price = (param)=>{\n    let { product, setPrice, discountCodeAmount, purchaseData } = param;\n    var _product_discount;\n    _s();\n    const languageSelectorContext = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_app_contexts_LanguageSelectorContext__WEBPACK_IMPORTED_MODULE_3__.LanguageSelectorContext);\n    const companyInformation = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_app_contexts_companyInformation__WEBPACK_IMPORTED_MODULE_5__.CompanyInformationContext);\n    // const [ispriceChange, setIspriceChange] = useState<boolean>(false);\n    // const isFirstRender = useRef(true);\n    const [isFirstRender, setIsFirstRender] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)({\n        \"Price.useEffect\": ()=>{\n            setPrice(handlePrice());\n        }\n    }[\"Price.useEffect\"], [\n        discountCodeAmount\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)({\n        \"Price.useEffect\": ()=>{\n            if (isFirstRender) {\n                setIsFirstRender(false);\n                console.log(\"First render\");\n                return; // يمنع التنفيذ في أول مرة\n            }\n            setIspriceChange(true);\n            console.log(\"Price changed!\");\n        }\n    }[\"Price.useEffect\"], [\n        purchaseData\n    ]);\n    const handlePrice = ()=>{\n        var _product_discount;\n        const discount = (product === null || product === void 0 ? void 0 : (_product_discount = product.discount) === null || _product_discount === void 0 ? void 0 : _product_discount.newPrice) || (product === null || product === void 0 ? void 0 : product.price);\n        const discountValue = discountCodeAmount.discount || 0;\n        const discountPercent = discountCodeAmount.discountPercent || 0;\n        //let finalPrice = 0;\n        if (typeof discount == 'undefined' || typeof discountValue == 'undefined' || typeof discountPercent == undefined || typeof (product === null || product === void 0 ? void 0 : product.price) == 'undefined') {\n            return;\n        }\n        if (discount && discountValue) {\n            return discount - discountValue;\n        }\n        if (!discount && discountValue) {\n            return (product === null || product === void 0 ? void 0 : product.price) - discountValue;\n        }\n        if (discount && discountPercent) {\n            return discount - discount * (discountPercent / 100);\n        }\n        if (!discount && discountPercent) {\n            return (product === null || product === void 0 ? void 0 : product.price) - (product === null || product === void 0 ? void 0 : product.price) * (discountPercent / 100);\n        } else {\n            return 0;\n        }\n    };\n    const style = {\n        display: 'flex',\n        alignItems: 'center',\n        margin: 'var(--large-margin)',\n        fontSize: 'calc(var(--big-size)*1.5)',\n        fontWeight: '700',\n        color: 'var(--black)'\n    };\n    const stylePriceW = {\n        fontWeight: '200'\n    };\n    const stylePrice = {\n        margin: 'var(--large-margin)'\n    };\n    var _product_discount_newPrice;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: style,\n        id: \"price\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                style: stylePriceW,\n                children: (languageSelectorContext === null || languageSelectorContext === void 0 ? void 0 : languageSelectorContext.activeLanguage) === 'english' ? _app_languages_english_json__WEBPACK_IMPORTED_MODULE_1__.priceW + ' : ' : _app_languages_arabic_json__WEBPACK_IMPORTED_MODULE_2__.priceW + ' : '\n            }, void 0, false, {\n                fileName: \"C:\\\\my_projects\\\\fast_buy\\\\webSite_for_the_customer\\\\app\\\\pages\\\\productDetails\\\\[productId]\\\\forComputer\\\\component\\\\informationSection.tsx\\\\component\\\\price.tsx\",\n                lineNumber: 96,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                style: stylePrice,\n                children: (_product_discount_newPrice = product === null || product === void 0 ? void 0 : (_product_discount = product.discount) === null || _product_discount === void 0 ? void 0 : _product_discount.newPrice) !== null && _product_discount_newPrice !== void 0 ? _product_discount_newPrice : product === null || product === void 0 ? void 0 : product.price\n            }, void 0, false, {\n                fileName: \"C:\\\\my_projects\\\\fast_buy\\\\webSite_for_the_customer\\\\app\\\\pages\\\\productDetails\\\\[productId]\\\\forComputer\\\\component\\\\informationSection.tsx\\\\component\\\\price.tsx\",\n                lineNumber: 102,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: companyInformation === null || companyInformation === void 0 ? void 0 : companyInformation.currencyType\n            }, void 0, false, {\n                fileName: \"C:\\\\my_projects\\\\fast_buy\\\\webSite_for_the_customer\\\\app\\\\pages\\\\productDetails\\\\[productId]\\\\forComputer\\\\component\\\\informationSection.tsx\\\\component\\\\price.tsx\",\n                lineNumber: 103,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\my_projects\\\\fast_buy\\\\webSite_for_the_customer\\\\app\\\\pages\\\\productDetails\\\\[productId]\\\\forComputer\\\\component\\\\informationSection.tsx\\\\component\\\\price.tsx\",\n        lineNumber: 95,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Price, \"8iKYMszRxTMc6+R7YtVxo1Ps+RY=\");\n_c = Price;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Price); //purchaseData?.totalPrice? ispriceChange && purchaseData?.totalPrice :  \nvar _c;\n$RefreshReg$(_c, \"Price\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlcy9wcm9kdWN0RGV0YWlscy9bcHJvZHVjdElkXS9mb3JDb21wdXRlci9jb21wb25lbnQvaW5mb3JtYXRpb25TZWN0aW9uLnRzeC9jb21wb25lbnQvcHJpY2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDbUQ7QUFDRjtBQUNnQztBQUVGO0FBRUQ7QUFZOUUsTUFBTU8sUUFBUTtRQUFDLEVBQUNDLE9BQU8sRUFBRUMsUUFBUSxFQUFFQyxrQkFBa0IsRUFBRUMsWUFBWSxFQUFTO1FBa0Z0Q0g7O0lBaEZsQyxNQUFNSSwwQkFBMEJULGlEQUFVQSxDQUFDRCwwRkFBdUJBO0lBQ2xFLE1BQU1XLHFCQUFxQlYsaURBQVVBLENBQUNHLHVGQUF5QkE7SUFDL0Qsc0VBQXNFO0lBQ3RFLHNDQUFzQztJQUN0QyxNQUFNLENBQUNRLGVBQWVDLGlCQUFpQixHQUFHViwrQ0FBUUEsQ0FBQztJQUluREQsZ0RBQVNBOzJCQUFDO1lBQ05LLFNBQVVPO1FBQ2Q7MEJBQUc7UUFBQ047S0FBbUI7SUFJdkJOLGdEQUFTQTsyQkFBQztZQUNOLElBQUlVLGVBQWU7Z0JBQ2ZDLGlCQUFpQjtnQkFDakJFLFFBQVFDLEdBQUcsQ0FBQztnQkFDWixRQUFRLDBCQUEwQjtZQUN0QztZQUVBQyxpQkFBaUI7WUFDakJGLFFBQVFDLEdBQUcsQ0FBQztRQUVoQjswQkFBRztRQUFDUDtLQUFhO0lBR2pCLE1BQU1LLGNBQWM7WUFDQ1I7UUFBakIsTUFBTVksV0FBV1osQ0FBQUEsb0JBQUFBLCtCQUFBQSxvQkFBQUEsUUFBU1ksUUFBUSxjQUFqQlosd0NBQUFBLGtCQUFtQmEsUUFBUSxNQUFJYixvQkFBQUEsOEJBQUFBLFFBQVNjLEtBQUs7UUFDOUQsTUFBTUMsZ0JBQWdCYixtQkFBbUJVLFFBQVEsSUFBSTtRQUNyRCxNQUFNSSxrQkFBa0JkLG1CQUFtQmMsZUFBZSxJQUFJO1FBQzlELHFCQUFxQjtRQUVyQixJQUFHLE9BQU9KLFlBQVksZUFBZSxPQUFPRyxpQkFBaUIsZUFBZSxPQUFPQyxtQkFBbUJDLGFBQWEsUUFBT2pCLG9CQUFBQSw4QkFBQUEsUUFBU2MsS0FBSyxLQUFJLGFBQVk7WUFFcEo7UUFDSjtRQUVBLElBQUlGLFlBQVlHLGVBQWU7WUFDM0IsT0FBUUgsV0FBV0c7UUFDdkI7UUFDQSxJQUFJLENBQUNILFlBQVlHLGVBQWU7WUFDNUIsT0FBUWYsQ0FBQUEsb0JBQUFBLDhCQUFBQSxRQUFTYyxLQUFLLElBQUdDO1FBQzdCO1FBQ0EsSUFBSUgsWUFBWUksaUJBQWlCO1lBQzdCLE9BQU9KLFdBQVdBLFdBQVlJLENBQUFBLGtCQUFrQixHQUFFO1FBQ3REO1FBQ0EsSUFBSSxDQUFDSixZQUFZSSxpQkFBaUI7WUFDOUIsT0FBT2hCLENBQUFBLG9CQUFBQSw4QkFBQUEsUUFBU2MsS0FBSyxJQUFHZCxDQUFBQSxvQkFBQUEsOEJBQUFBLFFBQVNjLEtBQUssSUFBSUUsQ0FBQUEsa0JBQWtCLEdBQUU7UUFDbEUsT0FBSztZQUNELE9BQU87UUFDWDtJQUVKO0lBR0EsTUFBTUUsUUFBdUI7UUFDekJDLFNBQVM7UUFDVEMsWUFBWTtRQUNaQyxRQUFRO1FBQ1JDLFVBQVU7UUFDVkMsWUFBWTtRQUNaQyxPQUFPO0lBQ1g7SUFDQSxNQUFNQyxjQUE2QjtRQUMvQkYsWUFBWTtJQUNoQjtJQUNBLE1BQU1HLGFBQTRCO1FBQzlCTCxRQUFRO0lBQ1o7UUFXa0NyQjtJQVJsQyxxQkFDSSw4REFBQzJCO1FBQUlULE9BQU9BO1FBQU9VLElBQUc7OzBCQUNsQiw4REFBQ0M7Z0JBQUtYLE9BQU9POzBCQUNSckIsQ0FBQUEsb0NBQUFBLDhDQUFBQSx3QkFBeUIwQixjQUFjLE1BQUssWUFDdkN0QywrREFBYyxHQUFHLFFBQ2pCQyw4REFBYSxHQUFHOzs7Ozs7MEJBRzFCLDhEQUFDb0M7Z0JBQUtYLE9BQU9ROzBCQUFhMUIsQ0FBQUEsNkJBQUFBLG9CQUFBQSwrQkFBQUEsb0JBQUFBLFFBQVNZLFFBQVEsY0FBakJaLHdDQUFBQSxrQkFBbUJhLFFBQVEsY0FBM0JiLHdDQUFBQSw2QkFBOEJBLG9CQUFBQSw4QkFBQUEsUUFBU2MsS0FBSzs7Ozs7OzBCQUN0RSw4REFBQ2U7MEJBQU14QiwrQkFBQUEseUNBQUFBLG1CQUFvQjJCLFlBQVk7Ozs7Ozs7Ozs7OztBQUduRDtHQXRGTWpDO0tBQUFBO0FBdUZOLGlFQUFlQSxLQUFLQSxFQUFDLENBRXJCLHlFQUF5RSIsInNvdXJjZXMiOlsiQzpcXG15X3Byb2plY3RzXFxmYXN0X2J1eVxcd2ViU2l0ZV9mb3JfdGhlX2N1c3RvbWVyXFxhcHBcXHBhZ2VzXFxwcm9kdWN0RGV0YWlsc1xcW3Byb2R1Y3RJZF1cXGZvckNvbXB1dGVyXFxjb21wb25lbnRcXGluZm9ybWF0aW9uU2VjdGlvbi50c3hcXGNvbXBvbmVudFxccHJpY2UudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcclxuaW1wb3J0IGVuZ2xpc2ggZnJvbSAnQC9hcHAvbGFuZ3VhZ2VzL2VuZ2xpc2guanNvbic7XHJcbmltcG9ydCBhcmFiaWMgZnJvbSAnQC9hcHAvbGFuZ3VhZ2VzL2FyYWJpYy5qc29uJztcclxuaW1wb3J0IHsgTGFuZ3VhZ2VTZWxlY3RvckNvbnRleHQgfSBmcm9tIFwiQC9hcHAvY29udGV4dHMvTGFuZ3VhZ2VTZWxlY3RvckNvbnRleHRcIjtcclxuaW1wb3J0IHsgcHJvZHVjdFBhcmFtcyB9IGZyb20gXCJAL2FwcC9jb250ZXh0cy9wcm9kdWN0U2VsZWN0Rm9yU2hvd2luZ1wiO1xyXG5pbXBvcnQgeyBDU1NQcm9wZXJ0aWVzLCB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgcHVyY2hhc2VQYXJhbXMgfSBmcm9tICdAL2FwcC9jb250ZXh0cy9wdXJjaGFzZURhdGEnO1xyXG5pbXBvcnQgeyBDb21wYW55SW5mb3JtYXRpb25Db250ZXh0IH0gZnJvbSAnQC9hcHAvY29udGV4dHMvY29tcGFueUluZm9ybWF0aW9uJztcclxuXHJcbnR5cGUgUGFyYW1zID0ge1xyXG4gICAgcHJvZHVjdDogcHJvZHVjdFBhcmFtcyB8IHVuZGVmaW5lZCxcclxuICAgIHNldFByb2R1Y3Q6ICh2YWx1ZTogcHJvZHVjdFBhcmFtcykgPT4gdm9pZFxyXG4gICAgZGlzY291bnRDb2RlQW1vdW50OiB7ZGlzY291bnQ/OiBudW1iZXIgfCBudWxsLCBkaXNjb3VudFBlcmNlbnQ/OiBudW1iZXIgfCBudWxsfSxcclxuICAgIHByaWNlOiBudW1iZXIgfCB1bmRlZmluZWQsIFxyXG4gICAgc2V0UHJpY2U6ICh2YWx1ZTogbnVtYmVyIHwgdW5kZWZpbmVkKSA9PiB2b2lkLFxyXG4gICAgcHVyY2hhc2VEYXRhOiBwdXJjaGFzZVBhcmFtcyB8IHVuZGVmaW5lZCxcclxuICAgIHNldFB1cmNoYXNlRGF0YTogKHZhbHVlOiBwdXJjaGFzZVBhcmFtcykgPT4gdm9pZFxyXG4gICAgaXNQcmljZUNoYW5nZTogYm9vbGVhbixcclxuc2V0fVxyXG5jb25zdCBQcmljZSA9ICh7cHJvZHVjdCwgc2V0UHJpY2UsIGRpc2NvdW50Q29kZUFtb3VudCwgcHVyY2hhc2VEYXRhfTogUGFyYW1zKSA9PiB7XHJcblxyXG4gICAgY29uc3QgbGFuZ3VhZ2VTZWxlY3RvckNvbnRleHQgPSB1c2VDb250ZXh0KExhbmd1YWdlU2VsZWN0b3JDb250ZXh0KTtcclxuICAgIGNvbnN0IGNvbXBhbnlJbmZvcm1hdGlvbiA9IHVzZUNvbnRleHQoQ29tcGFueUluZm9ybWF0aW9uQ29udGV4dCk7XHJcbiAgICAvLyBjb25zdCBbaXNwcmljZUNoYW5nZSwgc2V0SXNwcmljZUNoYW5nZV0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgICAvLyBjb25zdCBpc0ZpcnN0UmVuZGVyID0gdXNlUmVmKHRydWUpO1xyXG4gICAgY29uc3QgW2lzRmlyc3RSZW5kZXIsIHNldElzRmlyc3RSZW5kZXJdID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG5cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldFByaWNlKCBoYW5kbGVQcmljZSgpKVxyXG4gICAgfSwgW2Rpc2NvdW50Q29kZUFtb3VudF0pXHJcblxyXG5cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChpc0ZpcnN0UmVuZGVyKSB7XHJcbiAgICAgICAgICAgIHNldElzRmlyc3RSZW5kZXIoZmFsc2UpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkZpcnN0IHJlbmRlclwiKTtcclxuICAgICAgICAgICAgcmV0dXJuOyAvLyDZitmF2YbYuSDYp9mE2KrZhtmB2YrYsCDZgdmKINij2YjZhCDZhdix2KlcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICBzZXRJc3ByaWNlQ2hhbmdlKHRydWUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUHJpY2UgY2hhbmdlZCFcIik7XHJcbiAgICBcclxuICAgIH0sIFtwdXJjaGFzZURhdGFdKTtcclxuICAgIFxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVByaWNlID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRpc2NvdW50ID0gcHJvZHVjdD8uZGlzY291bnQ/Lm5ld1ByaWNlIHx8IHByb2R1Y3Q/LnByaWNlO1xyXG4gICAgICAgIGNvbnN0IGRpc2NvdW50VmFsdWUgPSBkaXNjb3VudENvZGVBbW91bnQuZGlzY291bnQgfHwgMDtcclxuICAgICAgICBjb25zdCBkaXNjb3VudFBlcmNlbnQgPSBkaXNjb3VudENvZGVBbW91bnQuZGlzY291bnRQZXJjZW50IHx8IDA7XHJcbiAgICAgICAgLy9sZXQgZmluYWxQcmljZSA9IDA7XHJcblxyXG4gICAgICAgIGlmKHR5cGVvZiBkaXNjb3VudCA9PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgZGlzY291bnRWYWx1ZSA9PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgZGlzY291bnRQZXJjZW50ID09IHVuZGVmaW5lZCB8fCB0eXBlb2YgcHJvZHVjdD8ucHJpY2UgPT0gJ3VuZGVmaW5lZCcpe1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcmV0dXJuIDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChkaXNjb3VudCAmJiBkaXNjb3VudFZhbHVlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAgZGlzY291bnQgLSBkaXNjb3VudFZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWRpc2NvdW50ICYmIGRpc2NvdW50VmFsdWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuICBwcm9kdWN0Py5wcmljZSAtIGRpc2NvdW50VmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChkaXNjb3VudCAmJiBkaXNjb3VudFBlcmNlbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGRpc2NvdW50IC0gZGlzY291bnQgKiAoZGlzY291bnRQZXJjZW50IC8gMTAwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFkaXNjb3VudCAmJiBkaXNjb3VudFBlcmNlbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHByb2R1Y3Q/LnByaWNlIC0gcHJvZHVjdD8ucHJpY2UgKiAoZGlzY291bnRQZXJjZW50IC8gMTAwKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIFxyXG5cclxuICAgIGNvbnN0IHN0eWxlOiBDU1NQcm9wZXJ0aWVzID0ge1xyXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICBtYXJnaW46ICd2YXIoLS1sYXJnZS1tYXJnaW4pJyxcclxuICAgICAgICBmb250U2l6ZTogJ2NhbGModmFyKC0tYmlnLXNpemUpKjEuNSknLFxyXG4gICAgICAgIGZvbnRXZWlnaHQ6ICc3MDAnLFxyXG4gICAgICAgIGNvbG9yOiAndmFyKC0tYmxhY2spJyxcclxuICAgIH1cclxuICAgIGNvbnN0IHN0eWxlUHJpY2VXOiBDU1NQcm9wZXJ0aWVzID0ge1xyXG4gICAgICAgIGZvbnRXZWlnaHQ6ICcyMDAnXHJcbiAgICB9XHJcbiAgICBjb25zdCBzdHlsZVByaWNlOiBDU1NQcm9wZXJ0aWVzID0ge1xyXG4gICAgICAgIG1hcmdpbjogJ3ZhcigtLWxhcmdlLW1hcmdpbiknLFxyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlfSBpZD1cInByaWNlXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPXtzdHlsZVByaWNlV30+XHJcbiAgICAgICAgICAgICAgICB7bGFuZ3VhZ2VTZWxlY3RvckNvbnRleHQ/LmFjdGl2ZUxhbmd1YWdlID09PSAnZW5nbGlzaCcgXHJcbiAgICAgICAgICAgICAgICAgICAgPyBlbmdsaXNoLnByaWNlVyArICcgOiAnIFxyXG4gICAgICAgICAgICAgICAgICAgIDogYXJhYmljLnByaWNlVyArICcgOiAnfVxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcblxyXG4gICAgICAgICAgICA8c3BhbiBzdHlsZT17c3R5bGVQcmljZX0+e3Byb2R1Y3Q/LmRpc2NvdW50Py5uZXdQcmljZT8/IHByb2R1Y3Q/LnByaWNlfTwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4+e2NvbXBhbnlJbmZvcm1hdGlvbj8uY3VycmVuY3lUeXBlfTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBQcmljZTtcclxuXHJcbi8vcHVyY2hhc2VEYXRhPy50b3RhbFByaWNlPyBpc3ByaWNlQ2hhbmdlICYmIHB1cmNoYXNlRGF0YT8udG90YWxQcmljZSA6ICAiXSwibmFtZXMiOlsiZW5nbGlzaCIsImFyYWJpYyIsIkxhbmd1YWdlU2VsZWN0b3JDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQ29tcGFueUluZm9ybWF0aW9uQ29udGV4dCIsIlByaWNlIiwicHJvZHVjdCIsInNldFByaWNlIiwiZGlzY291bnRDb2RlQW1vdW50IiwicHVyY2hhc2VEYXRhIiwibGFuZ3VhZ2VTZWxlY3RvckNvbnRleHQiLCJjb21wYW55SW5mb3JtYXRpb24iLCJpc0ZpcnN0UmVuZGVyIiwic2V0SXNGaXJzdFJlbmRlciIsImhhbmRsZVByaWNlIiwiY29uc29sZSIsImxvZyIsInNldElzcHJpY2VDaGFuZ2UiLCJkaXNjb3VudCIsIm5ld1ByaWNlIiwicHJpY2UiLCJkaXNjb3VudFZhbHVlIiwiZGlzY291bnRQZXJjZW50IiwidW5kZWZpbmVkIiwic3R5bGUiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsIm1hcmdpbiIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImNvbG9yIiwic3R5bGVQcmljZVciLCJzdHlsZVByaWNlIiwiZGl2IiwiaWQiLCJzcGFuIiwiYWN0aXZlTGFuZ3VhZ2UiLCJwcmljZVciLCJjdXJyZW5jeVR5cGUiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/pages/productDetails/[productId]/forComputer/component/informationSection.tsx/component/price.tsx\n"));

/***/ })

});