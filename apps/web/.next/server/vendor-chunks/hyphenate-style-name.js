"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/hyphenate-style-name";
exports.ids = ["vendor-chunks/hyphenate-style-name"];
exports.modules = {

/***/ "(ssr)/../../node_modules/hyphenate-style-name/index.js":
/*!********************************************************!*\
  !*** ../../node_modules/hyphenate-style-name/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* eslint-disable no-var, prefer-template */ var uppercasePattern = /[A-Z]/g;\nvar msPattern = /^ms-/;\nvar cache = {};\nfunction toHyphenLower(match) {\n    return \"-\" + match.toLowerCase();\n}\nfunction hyphenateStyleName(name) {\n    if (cache.hasOwnProperty(name)) {\n        return cache[name];\n    }\n    var hName = name.replace(uppercasePattern, toHyphenLower);\n    return cache[name] = msPattern.test(hName) ? \"-\" + hName : hName;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hyphenateStyleName);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi4vLi4vbm9kZV9tb2R1bGVzL2h5cGhlbmF0ZS1zdHlsZS1uYW1lL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSwwQ0FBMEMsR0FDMUMsSUFBSUEsbUJBQW1CO0FBQ3ZCLElBQUlDLFlBQVk7QUFDaEIsSUFBSUMsUUFBUSxDQUFDO0FBRWIsU0FBU0MsY0FBY0MsS0FBSztJQUMxQixPQUFPLE1BQU1BLE1BQU1DLFdBQVc7QUFDaEM7QUFFQSxTQUFTQyxtQkFBbUJDLElBQUk7SUFDOUIsSUFBSUwsTUFBTU0sY0FBYyxDQUFDRCxPQUFPO1FBQzlCLE9BQU9MLEtBQUssQ0FBQ0ssS0FBSztJQUNwQjtJQUVBLElBQUlFLFFBQVFGLEtBQUtHLE9BQU8sQ0FBQ1Ysa0JBQWtCRztJQUMzQyxPQUFRRCxLQUFLLENBQUNLLEtBQUssR0FBR04sVUFBVVUsSUFBSSxDQUFDRixTQUFTLE1BQU1BLFFBQVFBO0FBQzlEO0FBRUEsaUVBQWVILGtCQUFrQkEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYi8uLi8uLi9ub2RlX21vZHVsZXMvaHlwaGVuYXRlLXN0eWxlLW5hbWUvaW5kZXguanM/OWVlMyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBuby12YXIsIHByZWZlci10ZW1wbGF0ZSAqL1xudmFyIHVwcGVyY2FzZVBhdHRlcm4gPSAvW0EtWl0vZ1xudmFyIG1zUGF0dGVybiA9IC9ebXMtL1xudmFyIGNhY2hlID0ge31cblxuZnVuY3Rpb24gdG9IeXBoZW5Mb3dlcihtYXRjaCkge1xuICByZXR1cm4gJy0nICsgbWF0Y2gudG9Mb3dlckNhc2UoKVxufVxuXG5mdW5jdGlvbiBoeXBoZW5hdGVTdHlsZU5hbWUobmFtZSkge1xuICBpZiAoY2FjaGUuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICByZXR1cm4gY2FjaGVbbmFtZV1cbiAgfVxuXG4gIHZhciBoTmFtZSA9IG5hbWUucmVwbGFjZSh1cHBlcmNhc2VQYXR0ZXJuLCB0b0h5cGhlbkxvd2VyKVxuICByZXR1cm4gKGNhY2hlW25hbWVdID0gbXNQYXR0ZXJuLnRlc3QoaE5hbWUpID8gJy0nICsgaE5hbWUgOiBoTmFtZSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgaHlwaGVuYXRlU3R5bGVOYW1lXG4iXSwibmFtZXMiOlsidXBwZXJjYXNlUGF0dGVybiIsIm1zUGF0dGVybiIsImNhY2hlIiwidG9IeXBoZW5Mb3dlciIsIm1hdGNoIiwidG9Mb3dlckNhc2UiLCJoeXBoZW5hdGVTdHlsZU5hbWUiLCJuYW1lIiwiaGFzT3duUHJvcGVydHkiLCJoTmFtZSIsInJlcGxhY2UiLCJ0ZXN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/../../node_modules/hyphenate-style-name/index.js\n");

/***/ })

};
;