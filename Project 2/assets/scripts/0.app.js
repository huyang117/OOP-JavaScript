(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./src/App/Component.js":
/*!******************************!*\
  !*** ./src/App/Component.js ***!
  \******************************/
/*! exports provided: Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Component\", function() { return Component; });\nclass Component {\r\n  constructor(hostElementId, insertBefore = false) {\r\n    this.hostElement = hostElementId\r\n      ? document.getElementById(hostElementId)\r\n      : document.body;\r\n\r\n    this.insertBefore = insertBefore;\r\n  }\r\n\r\n  detach() {\r\n    this.tooltipElement.remove();\r\n  }\r\n\r\n  attach() {\r\n    this.hostElement.insertAdjacentElement(\r\n      this.insertBefore ? \"afterbegin\" : \"beforeend\",\r\n      this.tooltipElement\r\n    );\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/App/Component.js?");

/***/ }),

/***/ "./src/App/Tooltip.js":
/*!****************************!*\
  !*** ./src/App/Tooltip.js ***!
  \****************************/
/*! exports provided: Tooltip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Tooltip\", function() { return Tooltip; });\n/* harmony import */ var _Component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Component.js */ \"./src/App/Component.js\");\n\r\n\r\nclass Tooltip extends _Component_js__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\r\n  constructor(tooltipClosedHandler, content, hostElementId) {\r\n    super(hostElementId);\r\n    // super('active-projects', true);\r\n    this.tooltipClosed = tooltipClosedHandler;\r\n    this.content = content;\r\n    this.createTooltip();\r\n  }\r\n\r\n  closeTooltip() {\r\n    this.detach();\r\n    this.tooltipClosed();\r\n  }\r\n\r\n  createTooltip() {\r\n    const tooltipEl = document.createElement(\"div\");\r\n    tooltipEl.className = \"card\";\r\n    // tooltipEl.textContent = this.content;\r\n    const tooltipTemplate = document.getElementById(\"tooltip\");\r\n    const tooltipBody = document.importNode(tooltipTemplate.content, true);\r\n    tooltipBody.querySelector(\"p\").textContent = this.content;\r\n    tooltipEl.append(tooltipBody);\r\n\r\n    const hostElPosLeft = this.hostElement.offsetLeft;\r\n    const hostElPosTop = this.hostElement.offsetTop;\r\n    const hostElHeight = this.hostElement.clientHeight;\r\n    const parentElementScrolling = this.hostElement.parentElement.scrollTop;\r\n\r\n    const x = hostElPosLeft + 20;\r\n    const y = hostElPosTop + hostElHeight - parentElementScrolling - 10;\r\n\r\n    tooltipEl.style.position = \"absolute\";\r\n    tooltipEl.style.left = x + \"px\";\r\n    tooltipEl.style.top = y + \"px\";\r\n\r\n    tooltipEl.addEventListener(\"click\", this.closeTooltip.bind(this));\r\n    this.tooltipElement = tooltipEl;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/App/Tooltip.js?");

/***/ })

}]);