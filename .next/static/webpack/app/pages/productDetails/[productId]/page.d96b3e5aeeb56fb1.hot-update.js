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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_languages_english_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/languages/english.json */ \"(app-pages-browser)/./app/languages/english.json\");\n/* harmony import */ var _app_languages_arabic_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/languages/arabic.json */ \"(app-pages-browser)/./app/languages/arabic.json\");\n/* harmony import */ var _app_contexts_LanguageSelectorContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/contexts/LanguageSelectorContext */ \"(app-pages-browser)/./app/contexts/LanguageSelectorContext.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _app_contexts_companyInformation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/app/contexts/companyInformation */ \"(app-pages-browser)/./app/contexts/companyInformation.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Price = (param)=>{\n    let { product, setPrice, discountCodeAmount, purchaseData } = param;\n    var _product_discount;\n    _s();\n    const languageSelectorContext = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_app_contexts_LanguageSelectorContext__WEBPACK_IMPORTED_MODULE_3__.LanguageSelectorContext);\n    const companyInformation = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_app_contexts_companyInformation__WEBPACK_IMPORTED_MODULE_5__.CompanyInformationContext);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)({\n        \"Price.useEffect\": ()=>{\n            setPrice(handlePrice());\n        }\n    }[\"Price.useEffect\"], [\n        discountCodeAmount\n    ]);\n    const handlePrice = ()=>{\n        var _product_discount;\n        const discount = (product === null || product === void 0 ? void 0 : (_product_discount = product.discount) === null || _product_discount === void 0 ? void 0 : _product_discount.newPrice) || (product === null || product === void 0 ? void 0 : product.price);\n        const discountValue = discountCodeAmount.discount || 0;\n        const discountPercent = discountCodeAmount.discountPercent || 0;\n        //let finalPrice = 0;\n        if (typeof discount == 'undefined' || typeof discountValue == 'undefined' || typeof discountPercent == undefined || typeof (product === null || product === void 0 ? void 0 : product.price) == 'undefined') {\n            return;\n        }\n        if (discount && discountValue) {\n            // finalPrice = discount - discountValue;\n            return discount - discountValue;\n        }\n        if (!discount && discountValue) {\n            // finalPrice = product?.price - discountValue;\n            return (product === null || product === void 0 ? void 0 : product.price) - discountValue;\n        }\n        if (discount && discountPercent) {\n            // finalPrice = discount - discount * (discountPercent / 100);\n            return discount - discount * (discountPercent / 100);\n        }\n        if (!discount && discountPercent) {\n            //  finalPrice = product?.price - product?.price * (discountPercent / 100);\n            return (product === null || product === void 0 ? void 0 : product.price) - (product === null || product === void 0 ? void 0 : product.price) * (discountPercent / 100);\n        } else {\n            return 0;\n        }\n    };\n    const style = {\n        display: 'flex',\n        alignItems: 'center',\n        margin: 'var(--large-margin)',\n        fontSize: 'calc(var(--big-size)*1.5)',\n        fontWeight: '700',\n        color: 'var(--black)'\n    };\n    const stylePriceW = {\n        fontWeight: '200'\n    };\n    const stylePrice = {\n        margin: 'var(--large-margin)'\n    };\n    var _purchaseData_totalPrice, _ref;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: style,\n        id: \"price\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                style: stylePriceW,\n                children: (languageSelectorContext === null || languageSelectorContext === void 0 ? void 0 : languageSelectorContext.activeLanguage) === 'english' ? _app_languages_english_json__WEBPACK_IMPORTED_MODULE_1__.priceW + ' : ' : _app_languages_arabic_json__WEBPACK_IMPORTED_MODULE_2__.priceW + ' : '\n            }, void 0, false, {\n                fileName: \"C:\\\\my_projects\\\\fast_buy\\\\webSite_for_the_customer\\\\app\\\\pages\\\\productDetails\\\\[productId]\\\\forComputer\\\\component\\\\informationSection.tsx\\\\component\\\\price.tsx\",\n                lineNumber: 79,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                style: stylePrice,\n                children: (_ref = (_purchaseData_totalPrice = purchaseData === null || purchaseData === void 0 ? void 0 : purchaseData.totalPrice) !== null && _purchaseData_totalPrice !== void 0 ? _purchaseData_totalPrice : product === null || product === void 0 ? void 0 : (_product_discount = product.discount) === null || _product_discount === void 0 ? void 0 : _product_discount.newPrice) !== null && _ref !== void 0 ? _ref : product === null || product === void 0 ? void 0 : product.price\n            }, void 0, false, {\n                fileName: \"C:\\\\my_projects\\\\fast_buy\\\\webSite_for_the_customer\\\\app\\\\pages\\\\productDetails\\\\[productId]\\\\forComputer\\\\component\\\\informationSection.tsx\\\\component\\\\price.tsx\",\n                lineNumber: 85,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: companyInformation === null || companyInformation === void 0 ? void 0 : companyInformation.currencyType\n            }, void 0, false, {\n                fileName: \"C:\\\\my_projects\\\\fast_buy\\\\webSite_for_the_customer\\\\app\\\\pages\\\\productDetails\\\\[productId]\\\\forComputer\\\\component\\\\informationSection.tsx\\\\component\\\\price.tsx\",\n                lineNumber: 86,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\my_projects\\\\fast_buy\\\\webSite_for_the_customer\\\\app\\\\pages\\\\productDetails\\\\[productId]\\\\forComputer\\\\component\\\\informationSection.tsx\\\\component\\\\price.tsx\",\n        lineNumber: 78,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Price, \"D7DNYgS8fUDHMVlFsH53hTa7n/Q=\");\n_c = Price;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Price);\nvar _c;\n$RefreshReg$(_c, \"Price\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlcy9wcm9kdWN0RGV0YWlscy9bcHJvZHVjdElkXS9mb3JDb21wdXRlci9jb21wb25lbnQvaW5mb3JtYXRpb25TZWN0aW9uLnRzeC9jb21wb25lbnQvcHJpY2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDbUQ7QUFDRjtBQUNnQztBQUVwQjtBQUVpQjtBQVc5RSxNQUFNTSxRQUFRO1FBQUMsRUFBQ0MsT0FBTyxFQUFFQyxRQUFRLEVBQUVDLGtCQUFrQixFQUFFQyxZQUFZLEVBQVM7UUFrRVhIOztJQWhFN0QsTUFBTUksMEJBQTBCUixpREFBVUEsQ0FBQ0QsMEZBQXVCQTtJQUNsRSxNQUFNVSxxQkFBcUJULGlEQUFVQSxDQUFDRSx1RkFBeUJBO0lBRS9ERCxnREFBU0E7MkJBQUM7WUFDTkksU0FBVUs7UUFDZDswQkFBRztRQUFDSjtLQUFtQjtJQUV2QixNQUFNSSxjQUFjO1lBQ0NOO1FBQWpCLE1BQU1PLFdBQVdQLENBQUFBLG9CQUFBQSwrQkFBQUEsb0JBQUFBLFFBQVNPLFFBQVEsY0FBakJQLHdDQUFBQSxrQkFBbUJRLFFBQVEsTUFBSVIsb0JBQUFBLDhCQUFBQSxRQUFTUyxLQUFLO1FBQzlELE1BQU1DLGdCQUFnQlIsbUJBQW1CSyxRQUFRLElBQUk7UUFDckQsTUFBTUksa0JBQWtCVCxtQkFBbUJTLGVBQWUsSUFBSTtRQUM5RCxxQkFBcUI7UUFFckIsSUFBRyxPQUFPSixZQUFZLGVBQWUsT0FBT0csaUJBQWlCLGVBQWUsT0FBT0MsbUJBQW1CQyxhQUFhLFFBQU9aLG9CQUFBQSw4QkFBQUEsUUFBU1MsS0FBSyxLQUFJLGFBQVk7WUFFcEo7UUFDSjtRQUVBLElBQUlGLFlBQVlHLGVBQWU7WUFDNUIseUNBQXlDO1lBQ3hDLE9BQVFILFdBQVdHO1FBQ3ZCO1FBQ0EsSUFBSSxDQUFDSCxZQUFZRyxlQUFlO1lBQzdCLCtDQUErQztZQUM5QyxPQUFRVixDQUFBQSxvQkFBQUEsOEJBQUFBLFFBQVNTLEtBQUssSUFBR0M7UUFDN0I7UUFDQSxJQUFJSCxZQUFZSSxpQkFBaUI7WUFDOUIsOERBQThEO1lBQzdELE9BQU9KLFdBQVdBLFdBQVlJLENBQUFBLGtCQUFrQixHQUFFO1FBQ3REO1FBQ0EsSUFBSSxDQUFDSixZQUFZSSxpQkFBaUI7WUFDaEMsMkVBQTJFO1lBQ3pFLE9BQU9YLENBQUFBLG9CQUFBQSw4QkFBQUEsUUFBU1MsS0FBSyxJQUFHVCxDQUFBQSxvQkFBQUEsOEJBQUFBLFFBQVNTLEtBQUssSUFBSUUsQ0FBQUEsa0JBQWtCLEdBQUU7UUFDbEUsT0FBSztZQUNELE9BQU87UUFDWDtJQUVKO0lBR0EsTUFBTUUsUUFBdUI7UUFDekJDLFNBQVM7UUFDVEMsWUFBWTtRQUNaQyxRQUFRO1FBQ1JDLFVBQVU7UUFDVkMsWUFBWTtRQUNaQyxPQUFPO0lBQ1g7SUFDQSxNQUFNQyxjQUE2QjtRQUMvQkYsWUFBWTtJQUNoQjtJQUNBLE1BQU1HLGFBQTRCO1FBQzlCTCxRQUFRO0lBQ1o7UUFXa0NiLDBCQUFBQTtJQVJsQyxxQkFDSSw4REFBQ21CO1FBQUlULE9BQU9BO1FBQU9VLElBQUc7OzBCQUNsQiw4REFBQ0M7Z0JBQUtYLE9BQU9POzBCQUNSaEIsQ0FBQUEsb0NBQUFBLDhDQUFBQSx3QkFBeUJxQixjQUFjLE1BQUssWUFDdkNoQywrREFBYyxHQUFHLFFBQ2pCQyw4REFBYSxHQUFHOzs7Ozs7MEJBRzFCLDhEQUFDOEI7Z0JBQUtYLE9BQU9ROzBCQUFhbEIsQ0FBQUEsT0FBQUEsQ0FBQUEsMkJBQUFBLHlCQUFBQSxtQ0FBQUEsYUFBY3dCLFVBQVUsY0FBeEJ4QixzQ0FBQUEsMkJBQTJCSCxvQkFBQUEsK0JBQUFBLG9CQUFBQSxRQUFTTyxRQUFRLGNBQWpCUCx3Q0FBQUEsa0JBQW1CUSxRQUFRLGNBQXRETCxrQkFBQUEsT0FBeURILG9CQUFBQSw4QkFBQUEsUUFBU1MsS0FBSzs7Ozs7OzBCQUNqRyw4REFBQ2U7MEJBQU1uQiwrQkFBQUEseUNBQUFBLG1CQUFvQnVCLFlBQVk7Ozs7Ozs7Ozs7OztBQUduRDtHQXRFTTdCO0tBQUFBO0FBdUVOLGlFQUFlQSxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJDOlxcbXlfcHJvamVjdHNcXGZhc3RfYnV5XFx3ZWJTaXRlX2Zvcl90aGVfY3VzdG9tZXJcXGFwcFxccGFnZXNcXHByb2R1Y3REZXRhaWxzXFxbcHJvZHVjdElkXVxcZm9yQ29tcHV0ZXJcXGNvbXBvbmVudFxcaW5mb3JtYXRpb25TZWN0aW9uLnRzeFxcY29tcG9uZW50XFxwcmljZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xyXG5pbXBvcnQgZW5nbGlzaCBmcm9tICdAL2FwcC9sYW5ndWFnZXMvZW5nbGlzaC5qc29uJztcclxuaW1wb3J0IGFyYWJpYyBmcm9tICdAL2FwcC9sYW5ndWFnZXMvYXJhYmljLmpzb24nO1xyXG5pbXBvcnQgeyBMYW5ndWFnZVNlbGVjdG9yQ29udGV4dCB9IGZyb20gXCJAL2FwcC9jb250ZXh0cy9MYW5ndWFnZVNlbGVjdG9yQ29udGV4dFwiO1xyXG5pbXBvcnQgeyBwcm9kdWN0UGFyYW1zIH0gZnJvbSBcIkAvYXBwL2NvbnRleHRzL3Byb2R1Y3RTZWxlY3RGb3JTaG93aW5nXCI7XHJcbmltcG9ydCB7IENTU1Byb3BlcnRpZXMsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBwdXJjaGFzZVBhcmFtcyB9IGZyb20gJ0AvYXBwL2NvbnRleHRzL3B1cmNoYXNlRGF0YSc7XHJcbmltcG9ydCB7IENvbXBhbnlJbmZvcm1hdGlvbkNvbnRleHQgfSBmcm9tICdAL2FwcC9jb250ZXh0cy9jb21wYW55SW5mb3JtYXRpb24nO1xyXG5cclxudHlwZSBQYXJhbXMgPSB7XHJcbiAgICBwcm9kdWN0OiBwcm9kdWN0UGFyYW1zIHwgdW5kZWZpbmVkLFxyXG4gICAgc2V0UHJvZHVjdDogKHZhbHVlOiBwcm9kdWN0UGFyYW1zKSA9PiB2b2lkXHJcbiAgICBkaXNjb3VudENvZGVBbW91bnQ6IHtkaXNjb3VudD86IG51bWJlciB8IG51bGwsIGRpc2NvdW50UGVyY2VudD86IG51bWJlciB8IG51bGx9LFxyXG4gICAgcHJpY2U6IG51bWJlciB8IHVuZGVmaW5lZCwgXHJcbiAgICBzZXRQcmljZTogKHZhbHVlOiBudW1iZXIgfCB1bmRlZmluZWQpID0+IHZvaWQsXHJcbiAgICBwdXJjaGFzZURhdGE6IHB1cmNoYXNlUGFyYW1zIHwgdW5kZWZpbmVkLFxyXG4gICAgc2V0UHVyY2hhc2VEYXRhOiAodmFsdWU6IHB1cmNoYXNlUGFyYW1zKSA9PiB2b2lkXHJcbn1cclxuY29uc3QgUHJpY2UgPSAoe3Byb2R1Y3QsIHNldFByaWNlLCBkaXNjb3VudENvZGVBbW91bnQsIHB1cmNoYXNlRGF0YX06IFBhcmFtcykgPT4ge1xyXG5cclxuICAgIGNvbnN0IGxhbmd1YWdlU2VsZWN0b3JDb250ZXh0ID0gdXNlQ29udGV4dChMYW5ndWFnZVNlbGVjdG9yQ29udGV4dCk7XHJcbiAgICBjb25zdCBjb21wYW55SW5mb3JtYXRpb24gPSB1c2VDb250ZXh0KENvbXBhbnlJbmZvcm1hdGlvbkNvbnRleHQpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2V0UHJpY2UoIGhhbmRsZVByaWNlKCkpXHJcbiAgICB9LCBbZGlzY291bnRDb2RlQW1vdW50XSlcclxuXHJcbiAgICBjb25zdCBoYW5kbGVQcmljZSA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBkaXNjb3VudCA9IHByb2R1Y3Q/LmRpc2NvdW50Py5uZXdQcmljZSB8fCBwcm9kdWN0Py5wcmljZTtcclxuICAgICAgICBjb25zdCBkaXNjb3VudFZhbHVlID0gZGlzY291bnRDb2RlQW1vdW50LmRpc2NvdW50IHx8IDA7XHJcbiAgICAgICAgY29uc3QgZGlzY291bnRQZXJjZW50ID0gZGlzY291bnRDb2RlQW1vdW50LmRpc2NvdW50UGVyY2VudCB8fCAwO1xyXG4gICAgICAgIC8vbGV0IGZpbmFsUHJpY2UgPSAwO1xyXG5cclxuICAgICAgICBpZih0eXBlb2YgZGlzY291bnQgPT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIGRpc2NvdW50VmFsdWUgPT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIGRpc2NvdW50UGVyY2VudCA9PSB1bmRlZmluZWQgfHwgdHlwZW9mIHByb2R1Y3Q/LnByaWNlID09ICd1bmRlZmluZWQnKXtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJldHVybiA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZGlzY291bnQgJiYgZGlzY291bnRWYWx1ZSkge1xyXG4gICAgICAgICAgIC8vIGZpbmFsUHJpY2UgPSBkaXNjb3VudCAtIGRpc2NvdW50VmFsdWU7XHJcbiAgICAgICAgICAgIHJldHVybiAgZGlzY291bnQgLSBkaXNjb3VudFZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWRpc2NvdW50ICYmIGRpc2NvdW50VmFsdWUpIHtcclxuICAgICAgICAgICAvLyBmaW5hbFByaWNlID0gcHJvZHVjdD8ucHJpY2UgLSBkaXNjb3VudFZhbHVlO1xyXG4gICAgICAgICAgICByZXR1cm4gIHByb2R1Y3Q/LnByaWNlIC0gZGlzY291bnRWYWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGRpc2NvdW50ICYmIGRpc2NvdW50UGVyY2VudCkge1xyXG4gICAgICAgICAgIC8vIGZpbmFsUHJpY2UgPSBkaXNjb3VudCAtIGRpc2NvdW50ICogKGRpc2NvdW50UGVyY2VudCAvIDEwMCk7XHJcbiAgICAgICAgICAgIHJldHVybiBkaXNjb3VudCAtIGRpc2NvdW50ICogKGRpc2NvdW50UGVyY2VudCAvIDEwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghZGlzY291bnQgJiYgZGlzY291bnRQZXJjZW50KSB7XHJcbiAgICAgICAgICAvLyAgZmluYWxQcmljZSA9IHByb2R1Y3Q/LnByaWNlIC0gcHJvZHVjdD8ucHJpY2UgKiAoZGlzY291bnRQZXJjZW50IC8gMTAwKTtcclxuICAgICAgICAgICAgcmV0dXJuIHByb2R1Y3Q/LnByaWNlIC0gcHJvZHVjdD8ucHJpY2UgKiAoZGlzY291bnRQZXJjZW50IC8gMTAwKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIFxyXG5cclxuICAgIGNvbnN0IHN0eWxlOiBDU1NQcm9wZXJ0aWVzID0ge1xyXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICBtYXJnaW46ICd2YXIoLS1sYXJnZS1tYXJnaW4pJyxcclxuICAgICAgICBmb250U2l6ZTogJ2NhbGModmFyKC0tYmlnLXNpemUpKjEuNSknLFxyXG4gICAgICAgIGZvbnRXZWlnaHQ6ICc3MDAnLFxyXG4gICAgICAgIGNvbG9yOiAndmFyKC0tYmxhY2spJyxcclxuICAgIH1cclxuICAgIGNvbnN0IHN0eWxlUHJpY2VXOiBDU1NQcm9wZXJ0aWVzID0ge1xyXG4gICAgICAgIGZvbnRXZWlnaHQ6ICcyMDAnXHJcbiAgICB9XHJcbiAgICBjb25zdCBzdHlsZVByaWNlOiBDU1NQcm9wZXJ0aWVzID0ge1xyXG4gICAgICAgIG1hcmdpbjogJ3ZhcigtLWxhcmdlLW1hcmdpbiknLFxyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlfSBpZD1cInByaWNlXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPXtzdHlsZVByaWNlV30+XHJcbiAgICAgICAgICAgICAgICB7bGFuZ3VhZ2VTZWxlY3RvckNvbnRleHQ/LmFjdGl2ZUxhbmd1YWdlID09PSAnZW5nbGlzaCcgXHJcbiAgICAgICAgICAgICAgICAgICAgPyBlbmdsaXNoLnByaWNlVyArICcgOiAnIFxyXG4gICAgICAgICAgICAgICAgICAgIDogYXJhYmljLnByaWNlVyArICcgOiAnfVxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcblxyXG4gICAgICAgICAgICA8c3BhbiBzdHlsZT17c3R5bGVQcmljZX0+e3B1cmNoYXNlRGF0YT8udG90YWxQcmljZT8/IHByb2R1Y3Q/LmRpc2NvdW50Py5uZXdQcmljZT8/IHByb2R1Y3Q/LnByaWNlfTwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4+e2NvbXBhbnlJbmZvcm1hdGlvbj8uY3VycmVuY3lUeXBlfTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBQcmljZTsiXSwibmFtZXMiOlsiZW5nbGlzaCIsImFyYWJpYyIsIkxhbmd1YWdlU2VsZWN0b3JDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsIkNvbXBhbnlJbmZvcm1hdGlvbkNvbnRleHQiLCJQcmljZSIsInByb2R1Y3QiLCJzZXRQcmljZSIsImRpc2NvdW50Q29kZUFtb3VudCIsInB1cmNoYXNlRGF0YSIsImxhbmd1YWdlU2VsZWN0b3JDb250ZXh0IiwiY29tcGFueUluZm9ybWF0aW9uIiwiaGFuZGxlUHJpY2UiLCJkaXNjb3VudCIsIm5ld1ByaWNlIiwicHJpY2UiLCJkaXNjb3VudFZhbHVlIiwiZGlzY291bnRQZXJjZW50IiwidW5kZWZpbmVkIiwic3R5bGUiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsIm1hcmdpbiIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImNvbG9yIiwic3R5bGVQcmljZVciLCJzdHlsZVByaWNlIiwiZGl2IiwiaWQiLCJzcGFuIiwiYWN0aXZlTGFuZ3VhZ2UiLCJwcmljZVciLCJ0b3RhbFByaWNlIiwiY3VycmVuY3lUeXBlIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/pages/productDetails/[productId]/forComputer/component/informationSection.tsx/component/price.tsx\n"));

/***/ })

});