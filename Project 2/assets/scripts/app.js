/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + chunkId + ".app.js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "assets/scripts/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/App/ProjectItem.js":
/*!********************************!*\
  !*** ./src/App/ProjectItem.js ***!
  \********************************/
/*! exports provided: ProjectItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ProjectItem\", function() { return ProjectItem; });\n/* harmony import */ var _Utility_DOMUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Utility/DOMUtils.js */ \"./src/Utility/DOMUtils.js\");\n// import { Tooltip } from './Tooltip.js';\r\n\r\n\r\nclass ProjectItem {\r\n  constructor(id, switchProjectFunction, type) {\r\n    this.id = id;\r\n    this.projectItemDomEl = document.getElementById(this.id);\r\n    this.connectMoreInfoBtn();\r\n    this.connectSwitchBtn(type);\r\n    this.connectDrag();\r\n\r\n    // receive from ProjectsList\r\n    this.switchProjectTriggered = switchProjectFunction;\r\n\r\n    this.hasActiveTooltip = false;\r\n  }\r\n\r\n  showTooltip() {\r\n    if (this.hasActiveTooltip) {\r\n      return;\r\n    }\r\n    const tooltipText = this.projectItemDomEl.dataset.extraInfo;\r\n\r\n    __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./Tooltip.js */ \"./src/App/Tooltip.js\")).then((module) => {\r\n      const tooltip = new module.Tooltip(\r\n        () => {\r\n          this.hasActiveTooltip = false;\r\n        },\r\n        tooltipText,\r\n        this.id\r\n      );\r\n\r\n      tooltip.attach();\r\n      this.hasActiveTooltip = true;\r\n    });\r\n  }\r\n\r\n  connectDrag() {\r\n    this.projectItemDomEl.addEventListener(\"dragstart\", (event) => {\r\n      event.dataTransfer.setData(\"text/plain\", this.id);\r\n      event.dataTransfer.effectAllowed = \"move\";\r\n    });\r\n  }\r\n\r\n  connectMoreInfoBtn() {\r\n    const moreInfoBtn = this.projectItemDomEl.querySelector(\r\n      \"button:first-of-type\"\r\n    );\r\n\r\n    moreInfoBtn.addEventListener(\"click\", this.showTooltip.bind(this));\r\n  }\r\n\r\n  connectSwitchBtn(type) {\r\n    let switchBtn = this.projectItemDomEl.querySelector(\"button:last-of-type\");\r\n\r\n    switchBtn = _Utility_DOMUtils_js__WEBPACK_IMPORTED_MODULE_0__[\"DOMUtils\"].clearEventListener(switchBtn);\r\n    switchBtn.addEventListener(\"click\", () =>\r\n      this.switchProjectTriggered(this.id)\r\n    );\r\n    _Utility_DOMUtils_js__WEBPACK_IMPORTED_MODULE_0__[\"DOMUtils\"].updateBtnText(switchBtn, type);\r\n  }\r\n\r\n  updateAfterSwitch(newEventHandler, listType) {\r\n    this.switchProjectTriggered = newEventHandler;\r\n    this.connectSwitchBtn(listType);\r\n  }\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQXBwL1Byb2plY3RJdGVtLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC9Qcm9qZWN0SXRlbS5qcz8yZTYwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCB7IFRvb2x0aXAgfSBmcm9tICcuL1Rvb2x0aXAuanMnO1xyXG5pbXBvcnQgeyBET01VdGlscyB9IGZyb20gXCIuLi9VdGlsaXR5L0RPTVV0aWxzLmpzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUHJvamVjdEl0ZW0ge1xyXG4gIGNvbnN0cnVjdG9yKGlkLCBzd2l0Y2hQcm9qZWN0RnVuY3Rpb24sIHR5cGUpIHtcclxuICAgIHRoaXMuaWQgPSBpZDtcclxuICAgIHRoaXMucHJvamVjdEl0ZW1Eb21FbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQpO1xyXG4gICAgdGhpcy5jb25uZWN0TW9yZUluZm9CdG4oKTtcclxuICAgIHRoaXMuY29ubmVjdFN3aXRjaEJ0bih0eXBlKTtcclxuICAgIHRoaXMuY29ubmVjdERyYWcoKTtcclxuXHJcbiAgICAvLyByZWNlaXZlIGZyb20gUHJvamVjdHNMaXN0XHJcbiAgICB0aGlzLnN3aXRjaFByb2plY3RUcmlnZ2VyZWQgPSBzd2l0Y2hQcm9qZWN0RnVuY3Rpb247XHJcblxyXG4gICAgdGhpcy5oYXNBY3RpdmVUb29sdGlwID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBzaG93VG9vbHRpcCgpIHtcclxuICAgIGlmICh0aGlzLmhhc0FjdGl2ZVRvb2x0aXApIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3QgdG9vbHRpcFRleHQgPSB0aGlzLnByb2plY3RJdGVtRG9tRWwuZGF0YXNldC5leHRyYUluZm87XHJcblxyXG4gICAgaW1wb3J0KFwiLi9Ub29sdGlwLmpzXCIpLnRoZW4oKG1vZHVsZSkgPT4ge1xyXG4gICAgICBjb25zdCB0b29sdGlwID0gbmV3IG1vZHVsZS5Ub29sdGlwKFxyXG4gICAgICAgICgpID0+IHtcclxuICAgICAgICAgIHRoaXMuaGFzQWN0aXZlVG9vbHRpcCA9IGZhbHNlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdG9vbHRpcFRleHQsXHJcbiAgICAgICAgdGhpcy5pZFxyXG4gICAgICApO1xyXG5cclxuICAgICAgdG9vbHRpcC5hdHRhY2goKTtcclxuICAgICAgdGhpcy5oYXNBY3RpdmVUb29sdGlwID0gdHJ1ZTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY29ubmVjdERyYWcoKSB7XHJcbiAgICB0aGlzLnByb2plY3RJdGVtRG9tRWwuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdzdGFydFwiLCAoZXZlbnQpID0+IHtcclxuICAgICAgZXZlbnQuZGF0YVRyYW5zZmVyLnNldERhdGEoXCJ0ZXh0L3BsYWluXCIsIHRoaXMuaWQpO1xyXG4gICAgICBldmVudC5kYXRhVHJhbnNmZXIuZWZmZWN0QWxsb3dlZCA9IFwibW92ZVwiO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjb25uZWN0TW9yZUluZm9CdG4oKSB7XHJcbiAgICBjb25zdCBtb3JlSW5mb0J0biA9IHRoaXMucHJvamVjdEl0ZW1Eb21FbC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICBcImJ1dHRvbjpmaXJzdC1vZi10eXBlXCJcclxuICAgICk7XHJcblxyXG4gICAgbW9yZUluZm9CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuc2hvd1Rvb2x0aXAuYmluZCh0aGlzKSk7XHJcbiAgfVxyXG5cclxuICBjb25uZWN0U3dpdGNoQnRuKHR5cGUpIHtcclxuICAgIGxldCBzd2l0Y2hCdG4gPSB0aGlzLnByb2plY3RJdGVtRG9tRWwucXVlcnlTZWxlY3RvcihcImJ1dHRvbjpsYXN0LW9mLXR5cGVcIik7XHJcblxyXG4gICAgc3dpdGNoQnRuID0gRE9NVXRpbHMuY2xlYXJFdmVudExpc3RlbmVyKHN3aXRjaEJ0bik7XHJcbiAgICBzd2l0Y2hCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+XHJcbiAgICAgIHRoaXMuc3dpdGNoUHJvamVjdFRyaWdnZXJlZCh0aGlzLmlkKVxyXG4gICAgKTtcclxuICAgIERPTVV0aWxzLnVwZGF0ZUJ0blRleHQoc3dpdGNoQnRuLCB0eXBlKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZUFmdGVyU3dpdGNoKG5ld0V2ZW50SGFuZGxlciwgbGlzdFR5cGUpIHtcclxuICAgIHRoaXMuc3dpdGNoUHJvamVjdFRyaWdnZXJlZCA9IG5ld0V2ZW50SGFuZGxlcjtcclxuICAgIHRoaXMuY29ubmVjdFN3aXRjaEJ0bihsaXN0VHlwZSk7XHJcbiAgfVxyXG59XHJcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/App/ProjectItem.js\n");

/***/ }),

/***/ "./src/App/ProjectsList.js":
/*!*********************************!*\
  !*** ./src/App/ProjectsList.js ***!
  \*********************************/
/*! exports provided: ProjectsList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ProjectsList\", function() { return ProjectsList; });\n/* harmony import */ var _ProjectItem_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectItem.js */ \"./src/App/ProjectItem.js\");\n/* harmony import */ var _Utility_DOMUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Utility/DOMUtils.js */ \"./src/Utility/DOMUtils.js\");\n\r\n\r\n\r\nclass ProjectsList {\r\n  \r\n  constructor(type) {\r\n    this.type = type;\r\n    this.projects = [];\r\n    const projectItems = document.querySelectorAll(`#${this.type}-projects li`);\r\n    projectItems.forEach((p) =>\r\n      this.projects.push(\r\n        new _ProjectItem_js__WEBPACK_IMPORTED_MODULE_0__[\"ProjectItem\"](p.id, this.switchProject.bind(this), this.type)\r\n      )\r\n    );\r\n    this.connectDroppable();\r\n  }\r\n\r\n  connectDroppable() {\r\n    const list = document.querySelector(`#${this.type}-projects ul`);\r\n\r\n    list.addEventListener(\"dragenter\", (event) => {\r\n      if (event.dataTransfer.types[0] === \"text/plain\") {\r\n        list.parentElement.classList.add(\"droppable\");\r\n        event.preventDefault();\r\n      }\r\n    });\r\n\r\n    list.addEventListener(\"dragover\", (event) => {\r\n      if (event.dataTransfer.types[0] === \"text/plain\") {\r\n        event.preventDefault();\r\n      }\r\n    });\r\n\r\n    list.addEventListener(\"dragleave\", (event) => {\r\n      if (event.relatedTarget.closest(`#${this.type}-projects ul`) !== list) {\r\n        list.parentElement.classList.remove(\"droppable\");\r\n      }\r\n    });\r\n\r\n    list.addEventListener(\"drop\", (event) => {\r\n      const projectId = event.dataTransfer.getData(\"text/plain\");\r\n      if (this.projects.find((p) => p.id === projectId)) {\r\n        return;\r\n      }\r\n      document\r\n        .getElementById(projectId)\r\n        .querySelector(\"button:last-of-type\")\r\n        .click();\r\n      list.parentElement.classList.remove(\"droppable\");\r\n      event.preventDefault(); // not required\r\n    });\r\n  }\r\n\r\n  setAddPjtToOtherList(addProjectToOtherListFunction) {\r\n    this.addProjectToOtherList = addProjectToOtherListFunction;\r\n  }\r\n\r\n  addProject(project) {\r\n    this.projects = this.projects.concat(project);\r\n    _Utility_DOMUtils_js__WEBPACK_IMPORTED_MODULE_1__[\"DOMUtils\"].addProjectToList(project.id, `#${this.type}-projects ul`);\r\n    project.updateAfterSwitch(this.switchProject.bind(this), this.type);\r\n  }\r\n\r\n  switchProject(projectId) {\r\n    const projectSwitched = this.projects.find((p) => p.id === projectId);\r\n    this.projects = this.projects.filter((p) => p.id !== projectId);\r\n    this.addProjectToOtherList(projectSwitched);\r\n  }\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQXBwL1Byb2plY3RzTGlzdC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9BcHAvUHJvamVjdHNMaXN0LmpzP2FjNDUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvamVjdEl0ZW0gfSBmcm9tIFwiLi9Qcm9qZWN0SXRlbS5qc1wiO1xyXG5pbXBvcnQgeyBET01VdGlscyB9IGZyb20gXCIuLi9VdGlsaXR5L0RPTVV0aWxzLmpzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUHJvamVjdHNMaXN0IHtcclxuICBcclxuICBjb25zdHJ1Y3Rvcih0eXBlKSB7XHJcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xyXG4gICAgdGhpcy5wcm9qZWN0cyA9IFtdO1xyXG4gICAgY29uc3QgcHJvamVjdEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgIyR7dGhpcy50eXBlfS1wcm9qZWN0cyBsaWApO1xyXG4gICAgcHJvamVjdEl0ZW1zLmZvckVhY2goKHApID0+XHJcbiAgICAgIHRoaXMucHJvamVjdHMucHVzaChcclxuICAgICAgICBuZXcgUHJvamVjdEl0ZW0ocC5pZCwgdGhpcy5zd2l0Y2hQcm9qZWN0LmJpbmQodGhpcyksIHRoaXMudHlwZSlcclxuICAgICAgKVxyXG4gICAgKTtcclxuICAgIHRoaXMuY29ubmVjdERyb3BwYWJsZSgpO1xyXG4gIH1cclxuXHJcbiAgY29ubmVjdERyb3BwYWJsZSgpIHtcclxuICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHt0aGlzLnR5cGV9LXByb2plY3RzIHVsYCk7XHJcblxyXG4gICAgbGlzdC5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ2VudGVyXCIsIChldmVudCkgPT4ge1xyXG4gICAgICBpZiAoZXZlbnQuZGF0YVRyYW5zZmVyLnR5cGVzWzBdID09PSBcInRleHQvcGxhaW5cIikge1xyXG4gICAgICAgIGxpc3QucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZHJvcHBhYmxlXCIpO1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGxpc3QuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdvdmVyXCIsIChldmVudCkgPT4ge1xyXG4gICAgICBpZiAoZXZlbnQuZGF0YVRyYW5zZmVyLnR5cGVzWzBdID09PSBcInRleHQvcGxhaW5cIikge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGxpc3QuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdsZWF2ZVwiLCAoZXZlbnQpID0+IHtcclxuICAgICAgaWYgKGV2ZW50LnJlbGF0ZWRUYXJnZXQuY2xvc2VzdChgIyR7dGhpcy50eXBlfS1wcm9qZWN0cyB1bGApICE9PSBsaXN0KSB7XHJcbiAgICAgICAgbGlzdC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJkcm9wcGFibGVcIik7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGxpc3QuYWRkRXZlbnRMaXN0ZW5lcihcImRyb3BcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgIGNvbnN0IHByb2plY3RJZCA9IGV2ZW50LmRhdGFUcmFuc2Zlci5nZXREYXRhKFwidGV4dC9wbGFpblwiKTtcclxuICAgICAgaWYgKHRoaXMucHJvamVjdHMuZmluZCgocCkgPT4gcC5pZCA9PT0gcHJvamVjdElkKSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBkb2N1bWVudFxyXG4gICAgICAgIC5nZXRFbGVtZW50QnlJZChwcm9qZWN0SWQpXHJcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCJidXR0b246bGFzdC1vZi10eXBlXCIpXHJcbiAgICAgICAgLmNsaWNrKCk7XHJcbiAgICAgIGxpc3QucGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiZHJvcHBhYmxlXCIpO1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyAvLyBub3QgcmVxdWlyZWRcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2V0QWRkUGp0VG9PdGhlckxpc3QoYWRkUHJvamVjdFRvT3RoZXJMaXN0RnVuY3Rpb24pIHtcclxuICAgIHRoaXMuYWRkUHJvamVjdFRvT3RoZXJMaXN0ID0gYWRkUHJvamVjdFRvT3RoZXJMaXN0RnVuY3Rpb247XHJcbiAgfVxyXG5cclxuICBhZGRQcm9qZWN0KHByb2plY3QpIHtcclxuICAgIHRoaXMucHJvamVjdHMgPSB0aGlzLnByb2plY3RzLmNvbmNhdChwcm9qZWN0KTtcclxuICAgIERPTVV0aWxzLmFkZFByb2plY3RUb0xpc3QocHJvamVjdC5pZCwgYCMke3RoaXMudHlwZX0tcHJvamVjdHMgdWxgKTtcclxuICAgIHByb2plY3QudXBkYXRlQWZ0ZXJTd2l0Y2godGhpcy5zd2l0Y2hQcm9qZWN0LmJpbmQodGhpcyksIHRoaXMudHlwZSk7XHJcbiAgfVxyXG5cclxuICBzd2l0Y2hQcm9qZWN0KHByb2plY3RJZCkge1xyXG4gICAgY29uc3QgcHJvamVjdFN3aXRjaGVkID0gdGhpcy5wcm9qZWN0cy5maW5kKChwKSA9PiBwLmlkID09PSBwcm9qZWN0SWQpO1xyXG4gICAgdGhpcy5wcm9qZWN0cyA9IHRoaXMucHJvamVjdHMuZmlsdGVyKChwKSA9PiBwLmlkICE9PSBwcm9qZWN0SWQpO1xyXG4gICAgdGhpcy5hZGRQcm9qZWN0VG9PdGhlckxpc3QocHJvamVjdFN3aXRjaGVkKTtcclxuICB9XHJcbn1cclxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/App/ProjectsList.js\n");

/***/ }),

/***/ "./src/Utility/DOMUtils.js":
/*!*********************************!*\
  !*** ./src/Utility/DOMUtils.js ***!
  \*********************************/
/*! exports provided: DOMUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DOMUtils\", function() { return DOMUtils; });\nclass DOMUtils {\r\n  static addProjectToList(projectId, destinationSelector) {\r\n    const projectEl = document.getElementById(projectId);\r\n    document.querySelector(destinationSelector).append(projectEl);\r\n    projectEl.scrollIntoView({ behavior: \"smooth\" });\r\n  }\r\n\r\n  static clearEventListener(element) {\r\n    const clonedEl = element.cloneNode(true);\r\n    element.replaceWith(clonedEl);\r\n    return clonedEl;\r\n  }\r\n\r\n  static updateBtnText(btn, type) {\r\n    btn.textContent = type === \"active\" ? \"Finish\" : \"Activate\";\r\n  }\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvVXRpbGl0eS9ET01VdGlscy5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9VdGlsaXR5L0RPTVV0aWxzLmpzP2YyN2MiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIERPTVV0aWxzIHtcclxuICBzdGF0aWMgYWRkUHJvamVjdFRvTGlzdChwcm9qZWN0SWQsIGRlc3RpbmF0aW9uU2VsZWN0b3IpIHtcclxuICAgIGNvbnN0IHByb2plY3RFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHByb2plY3RJZCk7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGRlc3RpbmF0aW9uU2VsZWN0b3IpLmFwcGVuZChwcm9qZWN0RWwpO1xyXG4gICAgcHJvamVjdEVsLnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6IFwic21vb3RoXCIgfSk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgY2xlYXJFdmVudExpc3RlbmVyKGVsZW1lbnQpIHtcclxuICAgIGNvbnN0IGNsb25lZEVsID0gZWxlbWVudC5jbG9uZU5vZGUodHJ1ZSk7XHJcbiAgICBlbGVtZW50LnJlcGxhY2VXaXRoKGNsb25lZEVsKTtcclxuICAgIHJldHVybiBjbG9uZWRFbDtcclxuICB9XHJcblxyXG4gIHN0YXRpYyB1cGRhdGVCdG5UZXh0KGJ0biwgdHlwZSkge1xyXG4gICAgYnRuLnRleHRDb250ZW50ID0gdHlwZSA9PT0gXCJhY3RpdmVcIiA/IFwiRmluaXNoXCIgOiBcIkFjdGl2YXRlXCI7XHJcbiAgfVxyXG59XHJcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/Utility/DOMUtils.js\n");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_ProjectsList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App/ProjectsList.js */ \"./src/App/ProjectsList.js\");\n// class DOMUtil {\r\n//   static clearEventListener(element) {\r\n//     const clonedEl = element.cloneNode(true);\r\n//     element.replaceWith(clonedEl);\r\n//     return clonedEl;\r\n//   }\r\n\r\n//   static addProjectToList(project, destinationSelector) {\r\n//     const targetProject = document.getElementById(project.id);\r\n//     const newDestination = document.querySelector(destinationSelector);\r\n//     newDestination.append(targetProject);\r\n//   }\r\n// }\r\n\r\n// class Tooltip {}\r\n\r\n// class ProjectItem {\r\n//   constructor(id, switchProjectFunction, listType) {\r\n//     this.id = id;\r\n//     this.switchProject = switchProjectFunction;\r\n//     this.projectItemElement = document.getElementById(this.id);\r\n//     this.connectMoreInfoButton();\r\n//     this.connectSwitchBtn(listType);\r\n//   }\r\n\r\n//   connectMoreInfoButton() {\r\n//     const moreInfoBtn = this.projectItemElement.querySelector(\r\n//       \"button:first-of-type\"\r\n//     );\r\n//     moreInfoBtn.addEventListener(\"click\", () => {});\r\n//   }\r\n\r\n//   connectSwitchBtn(listType) {\r\n//     let switchBtn = this.projectItemElement.querySelector(\r\n//       \"button:last-of-type\"\r\n//     );\r\n//     switchBtn = DOMUtil.clearEventListener(switchBtn);\r\n//     switchBtn.textContent = listType === 'finished' ? 'Activate' : 'Finish';\r\n//     switchBtn.addEventListener(\"click\", this.switchProject.bind(null, this.id));\r\n//   }\r\n\r\n//   update(newEventListener, listType) {\r\n//     this.switchProject = newEventListener;\r\n//     this.connectSwitchBtn(listType);\r\n//   }\r\n// }\r\n\r\n// class ProjectsList {\r\n//   projects = [];\r\n\r\n//   constructor(listType) {\r\n//     this.listType = listType;\r\n//     this.projectItems = document.querySelectorAll(`#${listType}-projects li`);\r\n//     this.projectItems.forEach((p) =>\r\n//       this.projects.push(new ProjectItem(p.id, this.switchProject.bind(this), this.listType))\r\n//     );\r\n//   }\r\n\r\n//   // after removing the target object from this project list,\r\n//   // need to add the project to the other project list instance\r\n//   // this is the way to receive the function to cause changes in the other list instance\r\n//   setChangeOtherListFunction(changeOtherListFunction) {\r\n//     this.changeOtherList = changeOtherListFunction;\r\n//   }\r\n\r\n//   addProject(targetProject) {\r\n//     this.projects = this.projects.concat(targetProject);\r\n//     DOMUtil.addProjectToList(targetProject, `#${this.listType}-projects ul`);\r\n//     console.log(targetProject);\r\n//     targetProject.update(this.switchProject.bind(this), this.type);\r\n//   }\r\n\r\n//   switchProject(projectId) {\r\n//     // targetProject is the project to be removed from current project list\r\n//     // and to be added to the other project list\r\n//     console.log(projectId);\r\n//     const targetProject = this.projects.find(\r\n//       (p) => p.id === projectId\r\n//     );\r\n\r\n//     // remove the target project from this project list\r\n//     this.projects = this.projects.filter((p) => p.id !== projectId);\r\n\r\n//     this.changeOtherList(targetProject);\r\n//   }\r\n// }\r\n\r\n// class App {\r\n//   static init() {\r\n//     const activePjtList = new ProjectsList(\"active\");\r\n//     const finishedPjtList = new ProjectsList(\"finished\");\r\n\r\n//     activePjtList.setChangeOtherListFunction(\r\n//       finishedPjtList.addProject.bind(finishedPjtList)\r\n//     );\r\n//     finishedPjtList.setChangeOtherListFunction(\r\n//       activePjtList.addProject.bind(activePjtList)\r\n//     );\r\n//   }\r\n// }\r\n\r\n// App.init();\r\n\r\n\r\n// Practice modular programming\r\n\r\n\r\n\r\nclass App {\r\n  static init() {\r\n    const activePjts = new _App_ProjectsList_js__WEBPACK_IMPORTED_MODULE_0__[\"ProjectsList\"](\"active\");\r\n    const finishedPjts = new _App_ProjectsList_js__WEBPACK_IMPORTED_MODULE_0__[\"ProjectsList\"](\"finished\");\r\n\r\n    activePjts.setAddPjtToOtherList(finishedPjts.addProject.bind(finishedPjts));\r\n    finishedPjts.setAddPjtToOtherList(activePjts.addProject.bind(activePjts));\r\n  }\r\n}\r\n\r\nApp.init();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcz8xMTEyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGNsYXNzIERPTVV0aWwge1xyXG4vLyAgIHN0YXRpYyBjbGVhckV2ZW50TGlzdGVuZXIoZWxlbWVudCkge1xyXG4vLyAgICAgY29uc3QgY2xvbmVkRWwgPSBlbGVtZW50LmNsb25lTm9kZSh0cnVlKTtcclxuLy8gICAgIGVsZW1lbnQucmVwbGFjZVdpdGgoY2xvbmVkRWwpO1xyXG4vLyAgICAgcmV0dXJuIGNsb25lZEVsO1xyXG4vLyAgIH1cclxuXHJcbi8vICAgc3RhdGljIGFkZFByb2plY3RUb0xpc3QocHJvamVjdCwgZGVzdGluYXRpb25TZWxlY3Rvcikge1xyXG4vLyAgICAgY29uc3QgdGFyZ2V0UHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHByb2plY3QuaWQpO1xyXG4vLyAgICAgY29uc3QgbmV3RGVzdGluYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGRlc3RpbmF0aW9uU2VsZWN0b3IpO1xyXG4vLyAgICAgbmV3RGVzdGluYXRpb24uYXBwZW5kKHRhcmdldFByb2plY3QpO1xyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuLy8gY2xhc3MgVG9vbHRpcCB7fVxyXG5cclxuLy8gY2xhc3MgUHJvamVjdEl0ZW0ge1xyXG4vLyAgIGNvbnN0cnVjdG9yKGlkLCBzd2l0Y2hQcm9qZWN0RnVuY3Rpb24sIGxpc3RUeXBlKSB7XHJcbi8vICAgICB0aGlzLmlkID0gaWQ7XHJcbi8vICAgICB0aGlzLnN3aXRjaFByb2plY3QgPSBzd2l0Y2hQcm9qZWN0RnVuY3Rpb247XHJcbi8vICAgICB0aGlzLnByb2plY3RJdGVtRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQpO1xyXG4vLyAgICAgdGhpcy5jb25uZWN0TW9yZUluZm9CdXR0b24oKTtcclxuLy8gICAgIHRoaXMuY29ubmVjdFN3aXRjaEJ0bihsaXN0VHlwZSk7XHJcbi8vICAgfVxyXG5cclxuLy8gICBjb25uZWN0TW9yZUluZm9CdXR0b24oKSB7XHJcbi8vICAgICBjb25zdCBtb3JlSW5mb0J0biA9IHRoaXMucHJvamVjdEl0ZW1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbi8vICAgICAgIFwiYnV0dG9uOmZpcnN0LW9mLXR5cGVcIlxyXG4vLyAgICAgKTtcclxuLy8gICAgIG1vcmVJbmZvQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7fSk7XHJcbi8vICAgfVxyXG5cclxuLy8gICBjb25uZWN0U3dpdGNoQnRuKGxpc3RUeXBlKSB7XHJcbi8vICAgICBsZXQgc3dpdGNoQnRuID0gdGhpcy5wcm9qZWN0SXRlbUVsZW1lbnQucXVlcnlTZWxlY3RvcihcclxuLy8gICAgICAgXCJidXR0b246bGFzdC1vZi10eXBlXCJcclxuLy8gICAgICk7XHJcbi8vICAgICBzd2l0Y2hCdG4gPSBET01VdGlsLmNsZWFyRXZlbnRMaXN0ZW5lcihzd2l0Y2hCdG4pO1xyXG4vLyAgICAgc3dpdGNoQnRuLnRleHRDb250ZW50ID0gbGlzdFR5cGUgPT09ICdmaW5pc2hlZCcgPyAnQWN0aXZhdGUnIDogJ0ZpbmlzaCc7XHJcbi8vICAgICBzd2l0Y2hCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuc3dpdGNoUHJvamVjdC5iaW5kKG51bGwsIHRoaXMuaWQpKTtcclxuLy8gICB9XHJcblxyXG4vLyAgIHVwZGF0ZShuZXdFdmVudExpc3RlbmVyLCBsaXN0VHlwZSkge1xyXG4vLyAgICAgdGhpcy5zd2l0Y2hQcm9qZWN0ID0gbmV3RXZlbnRMaXN0ZW5lcjtcclxuLy8gICAgIHRoaXMuY29ubmVjdFN3aXRjaEJ0bihsaXN0VHlwZSk7XHJcbi8vICAgfVxyXG4vLyB9XHJcblxyXG4vLyBjbGFzcyBQcm9qZWN0c0xpc3Qge1xyXG4vLyAgIHByb2plY3RzID0gW107XHJcblxyXG4vLyAgIGNvbnN0cnVjdG9yKGxpc3RUeXBlKSB7XHJcbi8vICAgICB0aGlzLmxpc3RUeXBlID0gbGlzdFR5cGU7XHJcbi8vICAgICB0aGlzLnByb2plY3RJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYCMke2xpc3RUeXBlfS1wcm9qZWN0cyBsaWApO1xyXG4vLyAgICAgdGhpcy5wcm9qZWN0SXRlbXMuZm9yRWFjaCgocCkgPT5cclxuLy8gICAgICAgdGhpcy5wcm9qZWN0cy5wdXNoKG5ldyBQcm9qZWN0SXRlbShwLmlkLCB0aGlzLnN3aXRjaFByb2plY3QuYmluZCh0aGlzKSwgdGhpcy5saXN0VHlwZSkpXHJcbi8vICAgICApO1xyXG4vLyAgIH1cclxuXHJcbi8vICAgLy8gYWZ0ZXIgcmVtb3ZpbmcgdGhlIHRhcmdldCBvYmplY3QgZnJvbSB0aGlzIHByb2plY3QgbGlzdCxcclxuLy8gICAvLyBuZWVkIHRvIGFkZCB0aGUgcHJvamVjdCB0byB0aGUgb3RoZXIgcHJvamVjdCBsaXN0IGluc3RhbmNlXHJcbi8vICAgLy8gdGhpcyBpcyB0aGUgd2F5IHRvIHJlY2VpdmUgdGhlIGZ1bmN0aW9uIHRvIGNhdXNlIGNoYW5nZXMgaW4gdGhlIG90aGVyIGxpc3QgaW5zdGFuY2VcclxuLy8gICBzZXRDaGFuZ2VPdGhlckxpc3RGdW5jdGlvbihjaGFuZ2VPdGhlckxpc3RGdW5jdGlvbikge1xyXG4vLyAgICAgdGhpcy5jaGFuZ2VPdGhlckxpc3QgPSBjaGFuZ2VPdGhlckxpc3RGdW5jdGlvbjtcclxuLy8gICB9XHJcblxyXG4vLyAgIGFkZFByb2plY3QodGFyZ2V0UHJvamVjdCkge1xyXG4vLyAgICAgdGhpcy5wcm9qZWN0cyA9IHRoaXMucHJvamVjdHMuY29uY2F0KHRhcmdldFByb2plY3QpO1xyXG4vLyAgICAgRE9NVXRpbC5hZGRQcm9qZWN0VG9MaXN0KHRhcmdldFByb2plY3QsIGAjJHt0aGlzLmxpc3RUeXBlfS1wcm9qZWN0cyB1bGApO1xyXG4vLyAgICAgY29uc29sZS5sb2codGFyZ2V0UHJvamVjdCk7XHJcbi8vICAgICB0YXJnZXRQcm9qZWN0LnVwZGF0ZSh0aGlzLnN3aXRjaFByb2plY3QuYmluZCh0aGlzKSwgdGhpcy50eXBlKTtcclxuLy8gICB9XHJcblxyXG4vLyAgIHN3aXRjaFByb2plY3QocHJvamVjdElkKSB7XHJcbi8vICAgICAvLyB0YXJnZXRQcm9qZWN0IGlzIHRoZSBwcm9qZWN0IHRvIGJlIHJlbW92ZWQgZnJvbSBjdXJyZW50IHByb2plY3QgbGlzdFxyXG4vLyAgICAgLy8gYW5kIHRvIGJlIGFkZGVkIHRvIHRoZSBvdGhlciBwcm9qZWN0IGxpc3RcclxuLy8gICAgIGNvbnNvbGUubG9nKHByb2plY3RJZCk7XHJcbi8vICAgICBjb25zdCB0YXJnZXRQcm9qZWN0ID0gdGhpcy5wcm9qZWN0cy5maW5kKFxyXG4vLyAgICAgICAocCkgPT4gcC5pZCA9PT0gcHJvamVjdElkXHJcbi8vICAgICApO1xyXG5cclxuLy8gICAgIC8vIHJlbW92ZSB0aGUgdGFyZ2V0IHByb2plY3QgZnJvbSB0aGlzIHByb2plY3QgbGlzdFxyXG4vLyAgICAgdGhpcy5wcm9qZWN0cyA9IHRoaXMucHJvamVjdHMuZmlsdGVyKChwKSA9PiBwLmlkICE9PSBwcm9qZWN0SWQpO1xyXG5cclxuLy8gICAgIHRoaXMuY2hhbmdlT3RoZXJMaXN0KHRhcmdldFByb2plY3QpO1xyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuLy8gY2xhc3MgQXBwIHtcclxuLy8gICBzdGF0aWMgaW5pdCgpIHtcclxuLy8gICAgIGNvbnN0IGFjdGl2ZVBqdExpc3QgPSBuZXcgUHJvamVjdHNMaXN0KFwiYWN0aXZlXCIpO1xyXG4vLyAgICAgY29uc3QgZmluaXNoZWRQanRMaXN0ID0gbmV3IFByb2plY3RzTGlzdChcImZpbmlzaGVkXCIpO1xyXG5cclxuLy8gICAgIGFjdGl2ZVBqdExpc3Quc2V0Q2hhbmdlT3RoZXJMaXN0RnVuY3Rpb24oXHJcbi8vICAgICAgIGZpbmlzaGVkUGp0TGlzdC5hZGRQcm9qZWN0LmJpbmQoZmluaXNoZWRQanRMaXN0KVxyXG4vLyAgICAgKTtcclxuLy8gICAgIGZpbmlzaGVkUGp0TGlzdC5zZXRDaGFuZ2VPdGhlckxpc3RGdW5jdGlvbihcclxuLy8gICAgICAgYWN0aXZlUGp0TGlzdC5hZGRQcm9qZWN0LmJpbmQoYWN0aXZlUGp0TGlzdClcclxuLy8gICAgICk7XHJcbi8vICAgfVxyXG4vLyB9XHJcblxyXG4vLyBBcHAuaW5pdCgpO1xyXG5cclxuXHJcbi8vIFByYWN0aWNlIG1vZHVsYXIgcHJvZ3JhbW1pbmdcclxuXHJcbmltcG9ydCB7IFByb2plY3RzTGlzdCB9IGZyb20gJy4vQXBwL1Byb2plY3RzTGlzdC5qcyc7XHJcblxyXG5jbGFzcyBBcHAge1xyXG4gIHN0YXRpYyBpbml0KCkge1xyXG4gICAgY29uc3QgYWN0aXZlUGp0cyA9IG5ldyBQcm9qZWN0c0xpc3QoXCJhY3RpdmVcIik7XHJcbiAgICBjb25zdCBmaW5pc2hlZFBqdHMgPSBuZXcgUHJvamVjdHNMaXN0KFwiZmluaXNoZWRcIik7XHJcblxyXG4gICAgYWN0aXZlUGp0cy5zZXRBZGRQanRUb090aGVyTGlzdChmaW5pc2hlZFBqdHMuYWRkUHJvamVjdC5iaW5kKGZpbmlzaGVkUGp0cykpO1xyXG4gICAgZmluaXNoZWRQanRzLnNldEFkZFBqdFRvT3RoZXJMaXN0KGFjdGl2ZVBqdHMuYWRkUHJvamVjdC5iaW5kKGFjdGl2ZVBqdHMpKTtcclxuICB9XHJcbn1cclxuXHJcbkFwcC5pbml0KCk7XHJcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/app.js\n");

/***/ })

/******/ });