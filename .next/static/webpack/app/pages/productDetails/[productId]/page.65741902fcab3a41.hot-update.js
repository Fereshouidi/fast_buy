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

/***/ "(app-pages-browser)/./app/pages/productDetails/[productId]/forComputer/component/informationSection.tsx/component/quantity.tsx":
/*!******************************************************************************************************************!*\
  !*** ./app/pages/productDetails/[productId]/forComputer/component/informationSection.tsx/component/quantity.tsx ***!
  \******************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_languages_english_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/languages/english.json */ \"(app-pages-browser)/./app/languages/english.json\");\n/* harmony import */ var _app_languages_arabic_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/languages/arabic.json */ \"(app-pages-browser)/./app/languages/arabic.json\");\n/* harmony import */ var _app_contexts_LanguageSelectorContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/contexts/LanguageSelectorContext */ \"(app-pages-browser)/./app/contexts/LanguageSelectorContext.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst Quantity = (param)=>{\n    let { product, purchaseData, setPurchaseData, price, setPrice } = param;\n    _s();\n    const languageSelectorContext = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_app_contexts_LanguageSelectorContext__WEBPACK_IMPORTED_MODULE_3__.LanguageSelectorContext);\n    const handleChange = (event)=>{\n        if (purchaseData && (product === null || product === void 0 ? void 0 : product.price)) {\n            setPurchaseData({\n                ...purchaseData,\n                quantity: parseInt(event.target.value),\n                totalPrice: (product === null || product === void 0 ? void 0 : product.discount) ? product.discount.newPrice * parseInt(event.target.value) : (product === null || product === void 0 ? void 0 : product.price) * parseInt(event.target.value)\n            });\n            if (product.discount) {\n                setPrice(product.discount.newPrice * parseInt(event.target.value));\n            } else {\n                setPrice((product === null || product === void 0 ? void 0 : product.price) * parseInt(event.target.value));\n            }\n        }\n    };\n    const style = {\n        //width: '100%',\n        display: 'flex',\n        alignItems: 'center',\n        margin: 'var(--large-margin)',\n        fontSize: 'calc(var(--big-size)/1.2)',\n        fontWeight: '200',\n        color: 'var(--black)'\n    };\n    const styleColorDiv = {\n        width: 'var(--long-width)',\n        height: '30px',\n        border: '1px solid var(--ashen)',\n        backgroundColor: 'var(--almost-white)',\n        color: 'var(--almost-black)',\n        margin: '0 var(--large-margin)'\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: style,\n        id: \"selectQuantitue-div\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: (languageSelectorContext === null || languageSelectorContext === void 0 ? void 0 : languageSelectorContext.activeLanguage) == 'english' ? _app_languages_english_json__WEBPACK_IMPORTED_MODULE_1__.quantity + ' : ' : (languageSelectorContext === null || languageSelectorContext === void 0 ? void 0 : languageSelectorContext.activeLanguage) == 'arabic' ? _app_languages_arabic_json__WEBPACK_IMPORTED_MODULE_2__.quantity + ' : ' : _app_languages_english_json__WEBPACK_IMPORTED_MODULE_1__.quantity + ' : '\n            }, void 0, false, {\n                fileName: \"C:\\\\my_projects\\\\fast_buy\\\\webSite_for_the_customer\\\\app\\\\pages\\\\productDetails\\\\[productId]\\\\forComputer\\\\component\\\\informationSection.tsx\\\\component\\\\quantity.tsx\",\n                lineNumber: 60,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                style: styleColorDiv,\n                id: \"selectQuantitue\",\n                onChange: (event)=>handleChange(event),\n                value: purchaseData === null || purchaseData === void 0 ? void 0 : purchaseData.quantity,\n                children: Array.from({\n                    length: (product === null || product === void 0 ? void 0 : product.quantity) ? product === null || product === void 0 ? void 0 : product.quantity : 0\n                }, (_, count)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                        value: count + 1,\n                        children: count + 1\n                    }, count, false, {\n                        fileName: \"C:\\\\my_projects\\\\fast_buy\\\\webSite_for_the_customer\\\\app\\\\pages\\\\productDetails\\\\[productId]\\\\forComputer\\\\component\\\\informationSection.tsx\\\\component\\\\quantity.tsx\",\n                        lineNumber: 70,\n                        columnNumber: 21\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"C:\\\\my_projects\\\\fast_buy\\\\webSite_for_the_customer\\\\app\\\\pages\\\\productDetails\\\\[productId]\\\\forComputer\\\\component\\\\informationSection.tsx\\\\component\\\\quantity.tsx\",\n                lineNumber: 68,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\my_projects\\\\fast_buy\\\\webSite_for_the_customer\\\\app\\\\pages\\\\productDetails\\\\[productId]\\\\forComputer\\\\component\\\\informationSection.tsx\\\\component\\\\quantity.tsx\",\n        lineNumber: 58,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Quantity, \"azFn8XH3jFD+ygfgYWV60KVlPVI=\");\n_c = Quantity;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Quantity);\nvar _c;\n$RefreshReg$(_c, \"Quantity\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlcy9wcm9kdWN0RGV0YWlscy9bcHJvZHVjdElkXS9mb3JDb21wdXRlci9jb21wb25lbnQvaW5mb3JtYXRpb25TZWN0aW9uLnRzeC9jb21wb25lbnQvcXVhbnRpdHkudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUNtRDtBQUNGO0FBQ2dDO0FBQ2xCO0FBVy9ELE1BQU1JLFdBQVc7UUFBQyxFQUFDQyxPQUFPLEVBQUVDLFlBQVksRUFBRUMsZUFBZSxFQUFFQyxLQUFLLEVBQUVDLFFBQVEsRUFBUzs7SUFFL0UsTUFBTUMsMEJBQTBCUCxpREFBVUEsQ0FBQ0QsMEZBQXVCQTtJQUVsRSxNQUFNUyxlQUFlLENBQUNDO1FBQ2xCLElBQUdOLGlCQUFnQkQsb0JBQUFBLDhCQUFBQSxRQUFTRyxLQUFLLEdBQUM7WUFDOUJELGdCQUFnQjtnQkFDWixHQUFHRCxZQUFZO2dCQUNmTyxVQUFVQyxTQUFTRixNQUFNRyxNQUFNLENBQUNDLEtBQUs7Z0JBQ3JDQyxZQUFZWixDQUFBQSxvQkFBQUEsOEJBQUFBLFFBQVNhLFFBQVEsSUFDekJiLFFBQVFhLFFBQVEsQ0FBQ0MsUUFBUSxHQUFHTCxTQUFTRixNQUFNRyxNQUFNLENBQUNDLEtBQUssSUFDdkRYLENBQUFBLG9CQUFBQSw4QkFBQUEsUUFBU0csS0FBSyxJQUFHTSxTQUFTRixNQUFNRyxNQUFNLENBQUNDLEtBQUs7WUFDcEQ7WUFFQSxJQUFJWCxRQUFRYSxRQUFRLEVBQUU7Z0JBQ2xCVCxTQUFTSixRQUFRYSxRQUFRLENBQUNDLFFBQVEsR0FBR0wsU0FBU0YsTUFBTUcsTUFBTSxDQUFDQyxLQUFLO1lBQ3BFLE9BQU87Z0JBQ0hQLFNBQVNKLENBQUFBLG9CQUFBQSw4QkFBQUEsUUFBU0csS0FBSyxJQUFHTSxTQUFTRixNQUFNRyxNQUFNLENBQUNDLEtBQUs7WUFDekQ7UUFDSjtJQUNKO0lBRUEsTUFBTUksUUFBdUI7UUFDekIsZ0JBQWdCO1FBQ2hCQyxTQUFTO1FBQ1RDLFlBQVk7UUFDWkMsUUFBUTtRQUNSQyxVQUFVO1FBQ1ZDLFlBQVk7UUFDWkMsT0FBTztJQUVYO0lBQ0EsTUFBTUMsZ0JBQStCO1FBQ2pDQyxPQUFPO1FBQ1BDLFFBQVE7UUFDUkMsUUFBUTtRQUNSQyxpQkFBaUI7UUFDakJMLE9BQU87UUFDUEgsUUFBUTtJQUNaO0lBRUEscUJBQ0ksOERBQUNTO1FBQUlaLE9BQU9BO1FBQU9hLElBQUc7OzBCQUVsQiw4REFBQ0M7MEJBQ0d4QixDQUFBQSxvQ0FBQUEsOENBQUFBLHdCQUF5QnlCLGNBQWMsS0FBSSxZQUN2Q25DLGlFQUFnQixHQUFHLFFBQ3JCVSxDQUFBQSxvQ0FBQUEsOENBQUFBLHdCQUF5QnlCLGNBQWMsS0FBSSxXQUM3Q2xDLGdFQUFlLEdBQUcsUUFDaEJELGlFQUFnQixHQUFHOzs7Ozs7MEJBR3pCLDhEQUFDb0M7Z0JBQU9oQixPQUFPTztnQkFBZU0sSUFBRztnQkFBa0JJLFVBQVUsQ0FBQ3pCLFFBQVVELGFBQWFDO2dCQUFRSSxLQUFLLEVBQUVWLHlCQUFBQSxtQ0FBQUEsYUFBY08sUUFBUTswQkFDckh5QixNQUFNQyxJQUFJLENBQUM7b0JBQUVDLFFBQVFuQyxDQUFBQSxvQkFBQUEsOEJBQUFBLFFBQVNRLFFBQVEsSUFBRVIsb0JBQUFBLDhCQUFBQSxRQUFTUSxRQUFRLEdBQUc7Z0JBQUUsR0FBRyxDQUFDNEIsR0FBR0Msc0JBQ2xFLDhEQUFDQzt3QkFBbUIzQixPQUFPMEIsUUFBUTtrQ0FBSUEsUUFBUTt1QkFBbENBOzs7Ozs7Ozs7Ozs7Ozs7O0FBTWpDO0dBNURNdEM7S0FBQUE7QUE2RE4saUVBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIkM6XFxteV9wcm9qZWN0c1xcZmFzdF9idXlcXHdlYlNpdGVfZm9yX3RoZV9jdXN0b21lclxcYXBwXFxwYWdlc1xccHJvZHVjdERldGFpbHNcXFtwcm9kdWN0SWRdXFxmb3JDb21wdXRlclxcY29tcG9uZW50XFxpbmZvcm1hdGlvblNlY3Rpb24udHN4XFxjb21wb25lbnRcXHF1YW50aXR5LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XHJcbmltcG9ydCBlbmdsaXN0IGZyb20gJ0AvYXBwL2xhbmd1YWdlcy9lbmdsaXNoLmpzb24nO1xyXG5pbXBvcnQgYXJhYmljIGZyb20gJ0AvYXBwL2xhbmd1YWdlcy9hcmFiaWMuanNvbic7XHJcbmltcG9ydCB7IExhbmd1YWdlU2VsZWN0b3JDb250ZXh0IH0gZnJvbSBcIkAvYXBwL2NvbnRleHRzL0xhbmd1YWdlU2VsZWN0b3JDb250ZXh0XCI7XHJcbmltcG9ydCB7IENoYW5nZUV2ZW50LCBDU1NQcm9wZXJ0aWVzLCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBwcm9kdWN0UGFyYW1zIH0gZnJvbSBcIkAvYXBwL2NvbnRleHRzL3Byb2R1Y3RTZWxlY3RGb3JTaG93aW5nXCI7XHJcbmltcG9ydCB7IHB1cmNoYXNlUGFyYW1zIH0gZnJvbSAnQC9hcHAvY29udGV4dHMvcHVyY2hhc2VEYXRhJztcclxuXHJcbnR5cGUgUGFyYW1zID0ge1xyXG4gICAgcHJvZHVjdDogcHJvZHVjdFBhcmFtcyB8IHVuZGVmaW5lZCxcclxuICAgIHB1cmNoYXNlRGF0YTogcHVyY2hhc2VQYXJhbXMgfCB1bmRlZmluZWQsXHJcbiAgICBzZXRQdXJjaGFzZURhdGE6ICh2YWx1ZTogcHVyY2hhc2VQYXJhbXMpID0+IHZvaWRcclxuICAgIHByaWNlOiBudW1iZXIgfCB1bmRlZmluZWQsIFxyXG4gICAgc2V0UHJpY2U6ICh2YWx1ZTogbnVtYmVyIHwgdW5kZWZpbmVkKSA9PiB2b2lkLFxyXG59XHJcbmNvbnN0IFF1YW50aXR5ID0gKHtwcm9kdWN0LCBwdXJjaGFzZURhdGEsIHNldFB1cmNoYXNlRGF0YSwgcHJpY2UsIHNldFByaWNlfTogUGFyYW1zKSA9PiB7XHJcblxyXG4gICAgY29uc3QgbGFuZ3VhZ2VTZWxlY3RvckNvbnRleHQgPSB1c2VDb250ZXh0KExhbmd1YWdlU2VsZWN0b3JDb250ZXh0KTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQ6IENoYW5nZUV2ZW50PEhUTUxTZWxlY3RFbGVtZW50PikgPT4ge1xyXG4gICAgICAgIGlmKHB1cmNoYXNlRGF0YSAmJiBwcm9kdWN0Py5wcmljZSl7XHJcbiAgICAgICAgICAgIHNldFB1cmNoYXNlRGF0YSh7XHJcbiAgICAgICAgICAgICAgICAuLi5wdXJjaGFzZURhdGEsIFxyXG4gICAgICAgICAgICAgICAgcXVhbnRpdHk6IHBhcnNlSW50KGV2ZW50LnRhcmdldC52YWx1ZSksXHJcbiAgICAgICAgICAgICAgICB0b3RhbFByaWNlOiBwcm9kdWN0Py5kaXNjb3VudCA/IFxyXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3QuZGlzY291bnQubmV3UHJpY2UgKiBwYXJzZUludChldmVudC50YXJnZXQudmFsdWUpIDogXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdD8ucHJpY2UgKiBwYXJzZUludChldmVudC50YXJnZXQudmFsdWUpIFxyXG4gICAgICAgICAgICB9KSAgIFxyXG5cclxuICAgICAgICAgICAgaWYgKHByb2R1Y3QuZGlzY291bnQpIHtcclxuICAgICAgICAgICAgICAgIHNldFByaWNlKHByb2R1Y3QuZGlzY291bnQubmV3UHJpY2UgKiBwYXJzZUludChldmVudC50YXJnZXQudmFsdWUpKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2V0UHJpY2UocHJvZHVjdD8ucHJpY2UgKiBwYXJzZUludChldmVudC50YXJnZXQudmFsdWUpIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdHlsZTogQ1NTUHJvcGVydGllcyA9IHtcclxuICAgICAgICAvL3dpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgIG1hcmdpbjogJ3ZhcigtLWxhcmdlLW1hcmdpbiknLFxyXG4gICAgICAgIGZvbnRTaXplOiAnY2FsYyh2YXIoLS1iaWctc2l6ZSkvMS4yKScsXHJcbiAgICAgICAgZm9udFdlaWdodDogJzIwMCcsXHJcbiAgICAgICAgY29sb3I6ICd2YXIoLS1ibGFjayknXHJcblxyXG4gICAgfVxyXG4gICAgY29uc3Qgc3R5bGVDb2xvckRpdjogQ1NTUHJvcGVydGllcyA9IHtcclxuICAgICAgICB3aWR0aDogJ3ZhcigtLWxvbmctd2lkdGgpJyxcclxuICAgICAgICBoZWlnaHQ6ICczMHB4JyxcclxuICAgICAgICBib3JkZXI6ICcxcHggc29saWQgdmFyKC0tYXNoZW4pJyxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd2YXIoLS1hbG1vc3Qtd2hpdGUpJyxcclxuICAgICAgICBjb2xvcjogJ3ZhcigtLWFsbW9zdC1ibGFjayknLFxyXG4gICAgICAgIG1hcmdpbjogJzAgdmFyKC0tbGFyZ2UtbWFyZ2luKScsXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBzdHlsZT17c3R5bGV9IGlkPVwic2VsZWN0UXVhbnRpdHVlLWRpdlwiPlxyXG5cclxuICAgICAgICAgICAgPHNwYW4+e1xyXG4gICAgICAgICAgICAgICAgbGFuZ3VhZ2VTZWxlY3RvckNvbnRleHQ/LmFjdGl2ZUxhbmd1YWdlID09ICdlbmdsaXNoJyA/IFxyXG4gICAgICAgICAgICAgICAgICAgIGVuZ2xpc3QucXVhbnRpdHkgKyAnIDogJ1xyXG4gICAgICAgICAgICAgICAgOiBsYW5ndWFnZVNlbGVjdG9yQ29udGV4dD8uYWN0aXZlTGFuZ3VhZ2UgPT0gJ2FyYWJpYycgPyBcclxuICAgICAgICAgICAgICAgIGFyYWJpYy5xdWFudGl0eSArICcgOiAnXHJcbiAgICAgICAgICAgICAgICA6IGVuZ2xpc3QucXVhbnRpdHkgKyAnIDogJ1xyXG4gICAgICAgICAgICB9PC9zcGFuPlxyXG5cclxuICAgICAgICAgICAgPHNlbGVjdCBzdHlsZT17c3R5bGVDb2xvckRpdn0gaWQ9XCJzZWxlY3RRdWFudGl0dWVcIiBvbkNoYW5nZT17KGV2ZW50KSA9PiBoYW5kbGVDaGFuZ2UoZXZlbnQpfSB2YWx1ZT17cHVyY2hhc2VEYXRhPy5xdWFudGl0eX0+XHJcbiAgICAgICAgICAgICAgICB7QXJyYXkuZnJvbSh7IGxlbmd0aDogcHJvZHVjdD8ucXVhbnRpdHk/IHByb2R1Y3Q/LnF1YW50aXR5IDogMCB9LCAoXywgY291bnQpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17Y291bnR9IHZhbHVlPXtjb3VudCArIDF9Pntjb3VudCArIDF9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9zZWxlY3Q+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFF1YW50aXR5OyJdLCJuYW1lcyI6WyJlbmdsaXN0IiwiYXJhYmljIiwiTGFuZ3VhZ2VTZWxlY3RvckNvbnRleHQiLCJ1c2VDb250ZXh0IiwiUXVhbnRpdHkiLCJwcm9kdWN0IiwicHVyY2hhc2VEYXRhIiwic2V0UHVyY2hhc2VEYXRhIiwicHJpY2UiLCJzZXRQcmljZSIsImxhbmd1YWdlU2VsZWN0b3JDb250ZXh0IiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJxdWFudGl0eSIsInBhcnNlSW50IiwidGFyZ2V0IiwidmFsdWUiLCJ0b3RhbFByaWNlIiwiZGlzY291bnQiLCJuZXdQcmljZSIsInN0eWxlIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJtYXJnaW4iLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJjb2xvciIsInN0eWxlQ29sb3JEaXYiLCJ3aWR0aCIsImhlaWdodCIsImJvcmRlciIsImJhY2tncm91bmRDb2xvciIsImRpdiIsImlkIiwic3BhbiIsImFjdGl2ZUxhbmd1YWdlIiwic2VsZWN0Iiwib25DaGFuZ2UiLCJBcnJheSIsImZyb20iLCJsZW5ndGgiLCJfIiwiY291bnQiLCJvcHRpb24iXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/pages/productDetails/[productId]/forComputer/component/informationSection.tsx/component/quantity.tsx\n"));

/***/ })

});