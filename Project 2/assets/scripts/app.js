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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ProjectItem\", function() { return ProjectItem; });\n/* harmony import */ var _Utility_DOMUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Utility/DOMUtils.js */ \"./src/Utility/DOMUtils.js\");\n// import { Tooltip } from './Tooltip.js';\r\n\r\n\r\nclass ProjectItem {\r\n  constructor(id, switchProjectFunction, type) {\r\n    this.id = id;\r\n    this.projectItemDomEl = document.getElementById(this.id);\r\n    this.connectMoreInfoBtn();\r\n    this.connectSwitchBtn(type);\r\n    this.connectDrag();\r\n\r\n    // receive from ProjectsList\r\n    this.switchProjectTriggered = switchProjectFunction;\r\n\r\n    this.hasActiveTooltip = false;\r\n  }\r\n\r\n  showTooltip() {\r\n    if (this.hasActiveTooltip) {\r\n      return;\r\n    }\r\n    const tooltipText = this.projectItemDomEl.dataset.extraInfo;\r\n\r\n    __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./Tooltip.js */ \"./src/App/Tooltip.js\")).then((module) => {\r\n      const tooltip = new module.Tooltip(\r\n        () => {\r\n          this.hasActiveTooltip = false;\r\n        },\r\n        tooltipText,\r\n        this.id\r\n      );\r\n\r\n      tooltip.attach();\r\n      this.hasActiveTooltip = true;\r\n    });\r\n  }\r\n\r\n  connectDrag() {\r\n    this.projectItemDomEl.addEventListener(\"dragstart\", (event) => {\r\n      event.dataTransfer.setData(\"text/plain\", this.id);\r\n      event.dataTransfer.effectAllowed = \"move\";\r\n    });\r\n  }\r\n\r\n  connectMoreInfoBtn() {\r\n    const moreInfoBtn = this.projectItemDomEl.querySelector(\r\n      \"button:first-of-type\"\r\n    );\r\n\r\n    moreInfoBtn.addEventListener(\"click\", this.showTooltip.bind(this));\r\n  }\r\n\r\n  connectSwitchBtn(type) {\r\n    let switchBtn = this.projectItemDomEl.querySelector(\"button:last-of-type\");\r\n\r\n    switchBtn = _Utility_DOMUtils_js__WEBPACK_IMPORTED_MODULE_0__[\"DOMUtils\"].clearEventListener(switchBtn);\r\n    switchBtn.addEventListener(\"click\", () =>\r\n      this.switchProjectTriggered(this.id)\r\n    );\r\n    _Utility_DOMUtils_js__WEBPACK_IMPORTED_MODULE_0__[\"DOMUtils\"].updateBtnText(switchBtn, type);\r\n  }\r\n\r\n  updateAfterSwitch(newEventHandler, listType) {\r\n    this.switchProjectTriggered = newEventHandler;\r\n    this.connectSwitchBtn(listType);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/App/ProjectItem.js?");

/***/ }),

/***/ "./src/App/ProjectsList.js":
/*!*********************************!*\
  !*** ./src/App/ProjectsList.js ***!
  \*********************************/
/*! exports provided: ProjectsList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ProjectsList\", function() { return ProjectsList; });\n/* harmony import */ var _ProjectItem_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectItem.js */ \"./src/App/ProjectItem.js\");\n/* harmony import */ var _Utility_DOMUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Utility/DOMUtils.js */ \"./src/Utility/DOMUtils.js\");\n\r\n\r\n\r\nclass ProjectsList {\r\n  \r\n  constructor(type) {\r\n    this.type = type;\r\n    this.projects = [];\r\n    const projectItems = document.querySelectorAll(`#${this.type}-projects li`);\r\n    projectItems.forEach((p) =>\r\n      this.projects.push(\r\n        new _ProjectItem_js__WEBPACK_IMPORTED_MODULE_0__[\"ProjectItem\"](p.id, this.switchProject.bind(this), this.type)\r\n      )\r\n    );\r\n    this.connectDroppable();\r\n  }\r\n\r\n  connectDroppable() {\r\n    const list = document.querySelector(`#${this.type}-projects ul`);\r\n\r\n    list.addEventListener(\"dragenter\", (event) => {\r\n      if (event.dataTransfer.types[0] === \"text/plain\") {\r\n        list.parentElement.classList.add(\"droppable\");\r\n        event.preventDefault();\r\n      }\r\n    });\r\n\r\n    list.addEventListener(\"dragover\", (event) => {\r\n      if (event.dataTransfer.types[0] === \"text/plain\") {\r\n        event.preventDefault();\r\n      }\r\n    });\r\n\r\n    list.addEventListener(\"dragleave\", (event) => {\r\n      if (event.relatedTarget.closest(`#${this.type}-projects ul`) !== list) {\r\n        list.parentElement.classList.remove(\"droppable\");\r\n      }\r\n    });\r\n\r\n    list.addEventListener(\"drop\", (event) => {\r\n      const projectId = event.dataTransfer.getData(\"text/plain\");\r\n      if (this.projects.find((p) => p.id === projectId)) {\r\n        return;\r\n      }\r\n      document\r\n        .getElementById(projectId)\r\n        .querySelector(\"button:last-of-type\")\r\n        .click();\r\n      list.parentElement.classList.remove(\"droppable\");\r\n      event.preventDefault(); // not required\r\n    });\r\n  }\r\n\r\n  setAddPjtToOtherList(addProjectToOtherListFunction) {\r\n    this.addProjectToOtherList = addProjectToOtherListFunction;\r\n  }\r\n\r\n  addProject(project) {\r\n    this.projects = this.projects.concat(project);\r\n    _Utility_DOMUtils_js__WEBPACK_IMPORTED_MODULE_1__[\"DOMUtils\"].addProjectToList(project.id, `#${this.type}-projects ul`);\r\n    project.updateAfterSwitch(this.switchProject.bind(this), this.type);\r\n  }\r\n\r\n  switchProject(projectId) {\r\n    const projectSwitched = this.projects.find((p) => p.id === projectId);\r\n    this.projects = this.projects.filter((p) => p.id !== projectId);\r\n    this.addProjectToOtherList(projectSwitched);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/App/ProjectsList.js?");

/***/ }),

/***/ "./src/Utility/DOMUtils.js":
/*!*********************************!*\
  !*** ./src/Utility/DOMUtils.js ***!
  \*********************************/
/*! exports provided: DOMUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DOMUtils\", function() { return DOMUtils; });\nclass DOMUtils {\r\n  static addProjectToList(projectId, destinationSelector) {\r\n    const projectEl = document.getElementById(projectId);\r\n    document.querySelector(destinationSelector).append(projectEl);\r\n    projectEl.scrollIntoView({ behavior: \"smooth\" });\r\n  }\r\n\r\n  static clearEventListener(element) {\r\n    const clonedEl = element.cloneNode(true);\r\n    element.replaceWith(clonedEl);\r\n    return clonedEl;\r\n  }\r\n\r\n  static updateBtnText(btn, type) {\r\n    btn.textContent = type === \"active\" ? \"Finish\" : \"Activate\";\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/Utility/DOMUtils.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_ProjectsList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App/ProjectsList.js */ \"./src/App/ProjectsList.js\");\n// class DOMUtil {\r\n//   static clearEventListener(element) {\r\n//     const clonedEl = element.cloneNode(true);\r\n//     element.replaceWith(clonedEl);\r\n//     return clonedEl;\r\n//   }\r\n\r\n//   static addProjectToList(project, destinationSelector) {\r\n//     const targetProject = document.getElementById(project.id);\r\n//     const newDestination = document.querySelector(destinationSelector);\r\n//     newDestination.append(targetProject);\r\n//   }\r\n// }\r\n\r\n// class Tooltip {}\r\n\r\n// class ProjectItem {\r\n//   constructor(id, switchProjectFunction, listType) {\r\n//     this.id = id;\r\n//     this.switchProject = switchProjectFunction;\r\n//     this.projectItemElement = document.getElementById(this.id);\r\n//     this.connectMoreInfoButton();\r\n//     this.connectSwitchBtn(listType);\r\n//   }\r\n\r\n//   connectMoreInfoButton() {\r\n//     const moreInfoBtn = this.projectItemElement.querySelector(\r\n//       \"button:first-of-type\"\r\n//     );\r\n//     moreInfoBtn.addEventListener(\"click\", () => {});\r\n//   }\r\n\r\n//   connectSwitchBtn(listType) {\r\n//     let switchBtn = this.projectItemElement.querySelector(\r\n//       \"button:last-of-type\"\r\n//     );\r\n//     switchBtn = DOMUtil.clearEventListener(switchBtn);\r\n//     switchBtn.textContent = listType === 'finished' ? 'Activate' : 'Finish';\r\n//     switchBtn.addEventListener(\"click\", this.switchProject.bind(null, this.id));\r\n//   }\r\n\r\n//   update(newEventListener, listType) {\r\n//     this.switchProject = newEventListener;\r\n//     this.connectSwitchBtn(listType);\r\n//   }\r\n// }\r\n\r\n// class ProjectsList {\r\n//   projects = [];\r\n\r\n//   constructor(listType) {\r\n//     this.listType = listType;\r\n//     this.projectItems = document.querySelectorAll(`#${listType}-projects li`);\r\n//     this.projectItems.forEach((p) =>\r\n//       this.projects.push(new ProjectItem(p.id, this.switchProject.bind(this), this.listType))\r\n//     );\r\n//   }\r\n\r\n//   // after removing the target object from this project list,\r\n//   // need to add the project to the other project list instance\r\n//   // this is the way to receive the function to cause changes in the other list instance\r\n//   setChangeOtherListFunction(changeOtherListFunction) {\r\n//     this.changeOtherList = changeOtherListFunction;\r\n//   }\r\n\r\n//   addProject(targetProject) {\r\n//     this.projects = this.projects.concat(targetProject);\r\n//     DOMUtil.addProjectToList(targetProject, `#${this.listType}-projects ul`);\r\n//     console.log(targetProject);\r\n//     targetProject.update(this.switchProject.bind(this), this.type);\r\n//   }\r\n\r\n//   switchProject(projectId) {\r\n//     // targetProject is the project to be removed from current project list\r\n//     // and to be added to the other project list\r\n//     console.log(projectId);\r\n//     const targetProject = this.projects.find(\r\n//       (p) => p.id === projectId\r\n//     );\r\n\r\n//     // remove the target project from this project list\r\n//     this.projects = this.projects.filter((p) => p.id !== projectId);\r\n\r\n//     this.changeOtherList(targetProject);\r\n//   }\r\n// }\r\n\r\n// class App {\r\n//   static init() {\r\n//     const activePjtList = new ProjectsList(\"active\");\r\n//     const finishedPjtList = new ProjectsList(\"finished\");\r\n\r\n//     activePjtList.setChangeOtherListFunction(\r\n//       finishedPjtList.addProject.bind(finishedPjtList)\r\n//     );\r\n//     finishedPjtList.setChangeOtherListFunction(\r\n//       activePjtList.addProject.bind(activePjtList)\r\n//     );\r\n//   }\r\n// }\r\n\r\n// App.init();\r\n\r\n\r\n// Practice modular programming\r\n\r\n\r\n\r\nclass App {\r\n  static init() {\r\n    const activePjts = new _App_ProjectsList_js__WEBPACK_IMPORTED_MODULE_0__[\"ProjectsList\"](\"active\");\r\n    const finishedPjts = new _App_ProjectsList_js__WEBPACK_IMPORTED_MODULE_0__[\"ProjectsList\"](\"finished\");\r\n\r\n    activePjts.setAddPjtToOtherList(finishedPjts.addProject.bind(finishedPjts));\r\n    finishedPjts.setAddPjtToOtherList(activePjts.addProject.bind(activePjts));\r\n  }\r\n}\r\n\r\nApp.init();\r\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ })

/******/ });