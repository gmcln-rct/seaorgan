/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/node-fetch/browser.js":
/*!********************************************!*\
  !*** ./node_modules/node-fetch/browser.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // ref: https://github.com/tc39/proposal-global

var getGlobal = function () {
  // the only reliable means to get the global object is
  // `Function('return this')()`
  // However, this causes CSP violations in Chrome apps.
  if (typeof self !== 'undefined') {
    return self;
  }

  if (typeof window !== 'undefined') {
    return window;
  }

  if (typeof global !== 'undefined') {
    return global;
  }

  throw new Error('unable to locate global object');
};

var global = getGlobal();
module.exports = exports = global.fetch; // Needed for TypeScript and Webpack.

exports.default = global.fetch.bind(global);
exports.Headers = global.Headers;
exports.Request = global.Request;
exports.Response = global.Response;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scripts_fetchCurrentsData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/fetchCurrentsData */ "./src/scripts/fetchCurrentsData.js");
 // import axios from "axios";
// import currents20191016 from '../src/data/currents20191016';

 // const newCurr = ydayCurrents ? Object.values(data).map(data => data.id) : {};

window.addEventListener("DOMContentLoaded", function () {
  document.getElementById("app").innerText = "Hello World!"; // axios.get("./").then(res => console.log(res));
  // window.currents = currents20191016;

  window.ydayCurrents = _scripts_fetchCurrentsData__WEBPACK_IMPORTED_MODULE_1__["ydayCurrents"];
  fetch('http://localhost:8000/gov').then(function (res) {
    return res.json();
  }).then(function (data) {
    console.log(data);
  }); // console.log(currents20191016);
  // console.log(ydayCurrents());
});

/***/ }),

/***/ "./src/scripts/fetchCurrentsData.js":
/*!******************************************!*\
  !*** ./src/scripts/fetchCurrentsData.js ***!
  \******************************************/
/*! exports provided: ydayCurrents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ydayCurrents", function() { return ydayCurrents; });
var ydayCurrents = function ydayCurrents() {
  var stationID = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "8638901";

  var fetch = __webpack_require__(/*! node-fetch */ "./node_modules/node-fetch/browser.js"); // Establish Yesterday's Date


  var yesterday = new Date(Date.now() - 864e5);
  var ydyFullYear = yesterday.getFullYear();
  var ydyMonth = yesterday.getMonth() + 1;
  var ydyDate = yesterday.getDate();
  var ydyDateString = ydyFullYear.toString() + ydyMonth.toString() + ydyDate.toString();
  var list = [];
  var newObj = {};
  fetch("https://tidesandcurrents.noaa.gov/api/datagetter?begin_date=".concat(ydyDateString, "&end_date=").concat(ydyDateString, "&station=").concat(stationID, "&product=water_level&datum=mtl&units=metric&time_zone=gmt&application=web_services&format=json")).then(function (response) {
    return response.json();
  }).then(function (data) {
    data["data"].forEach(function (currStats) {
      return list.push(currStats);
    });
  });
  return list;
};

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25vZGUtZmV0Y2gvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZmV0Y2hDdXJyZW50c0RhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzIl0sIm5hbWVzIjpbIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaW5uZXJUZXh0IiwieWRheUN1cnJlbnRzIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwic3RhdGlvbklEIiwicmVxdWlyZSIsInllc3RlcmRheSIsIkRhdGUiLCJub3ciLCJ5ZHlGdWxsWWVhciIsImdldEZ1bGxZZWFyIiwieWR5TW9udGgiLCJnZXRNb250aCIsInlkeURhdGUiLCJnZXREYXRlIiwieWR5RGF0ZVN0cmluZyIsInRvU3RyaW5nIiwibGlzdCIsIm5ld09iaiIsInJlc3BvbnNlIiwiZm9yRWFjaCIsImN1cnJTdGF0cyIsInB1c2giXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esd0NBQXdDOztBQUV4QztBQUNBO0FBQ0E7QUFDQSxtQzs7Ozs7Ozs7Ozs7O0FDM0JBO0FBQUE7QUFBQTtBQUFBO0NBQ0E7QUFDQTs7Q0FJSTs7QUFJSkEsTUFBTSxDQUFDQyxnQkFBUCxDQUF3QixrQkFBeEIsRUFBNEMsWUFBTTtBQUM5Q0MsVUFBUSxDQUFDQyxjQUFULENBQXdCLEtBQXhCLEVBQStCQyxTQUEvQixHQUEyQyxjQUEzQyxDQUQ4QyxDQUU5QztBQUNBOztBQUNBSixRQUFNLENBQUNLLFlBQVAsR0FBc0JBLHVFQUF0QjtBQUNBQyxPQUFLLENBQUMsMkJBQUQsQ0FBTCxDQUFtQ0MsSUFBbkMsQ0FBd0MsVUFBQUMsR0FBRztBQUFBLFdBQUlBLEdBQUcsQ0FBQ0MsSUFBSixFQUFKO0FBQUEsR0FBM0MsRUFBMkRGLElBQTNELENBQWdFLFVBQUFHLElBQUksRUFBSTtBQUFFQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBWjtBQUFtQixHQUE3RixFQUw4QyxDQU05QztBQUNBO0FBQ0gsQ0FSRCxFOzs7Ozs7Ozs7Ozs7QUNWQTtBQUFBO0FBQU8sSUFBTUwsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBMkI7QUFBQSxNQUExQlEsU0FBMEIsdUVBQWQsU0FBYzs7QUFFbkQsTUFBTVAsS0FBSyxHQUFHUSxtQkFBTyxDQUFDLHdEQUFELENBQXJCLENBRm1ELENBSW5EOzs7QUFDQSxNQUFJQyxTQUFTLEdBQUcsSUFBSUMsSUFBSixDQUFTQSxJQUFJLENBQUNDLEdBQUwsS0FBYSxLQUF0QixDQUFoQjtBQUNBLE1BQUlDLFdBQVcsR0FBR0gsU0FBUyxDQUFDSSxXQUFWLEVBQWxCO0FBQ0EsTUFBSUMsUUFBUSxHQUFHTCxTQUFTLENBQUNNLFFBQVYsS0FBdUIsQ0FBdEM7QUFDQSxNQUFJQyxPQUFPLEdBQUdQLFNBQVMsQ0FBQ1EsT0FBVixFQUFkO0FBQ0EsTUFBSUMsYUFBYSxHQUFHTixXQUFXLENBQUNPLFFBQVosS0FBeUJMLFFBQVEsQ0FBQ0ssUUFBVCxFQUF6QixHQUErQ0gsT0FBTyxDQUFDRyxRQUFSLEVBQW5FO0FBRUEsTUFBTUMsSUFBSSxHQUFHLEVBQWI7QUFDQSxNQUFNQyxNQUFNLEdBQUcsRUFBZjtBQUVBckIsT0FBSyx1RUFBZ0VrQixhQUFoRSx1QkFBMEZBLGFBQTFGLHNCQUFtSFgsU0FBbkgsb0dBQUwsQ0FDS04sSUFETCxDQUNVLFVBQUFxQixRQUFRO0FBQUEsV0FBSUEsUUFBUSxDQUFDbkIsSUFBVCxFQUFKO0FBQUEsR0FEbEIsRUFHS0YsSUFITCxDQUdVLFVBQUFHLElBQUksRUFBSTtBQUNWQSxRQUFJLENBQUMsTUFBRCxDQUFKLENBQWFtQixPQUFiLENBQXFCLFVBQUFDLFNBQVMsRUFBSTtBQUM5QixhQUFPSixJQUFJLENBQUNLLElBQUwsQ0FBVUQsU0FBVixDQUFQO0FBQ0gsS0FGRDtBQUdILEdBUEw7QUFRQSxTQUFRSixJQUFSO0FBQ0gsQ0F2Qk0sQzs7Ozs7Ozs7Ozs7QUNBUCx1QyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJcInVzZSBzdHJpY3RcIjsgLy8gcmVmOiBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1nbG9iYWxcblxudmFyIGdldEdsb2JhbCA9IGZ1bmN0aW9uICgpIHtcbiAgLy8gdGhlIG9ubHkgcmVsaWFibGUgbWVhbnMgdG8gZ2V0IHRoZSBnbG9iYWwgb2JqZWN0IGlzXG4gIC8vIGBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpYFxuICAvLyBIb3dldmVyLCB0aGlzIGNhdXNlcyBDU1AgdmlvbGF0aW9ucyBpbiBDaHJvbWUgYXBwcy5cbiAgaWYgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiBzZWxmO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIHdpbmRvdztcbiAgfVxuXG4gIGlmICh0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiBnbG9iYWw7XG4gIH1cblxuICB0aHJvdyBuZXcgRXJyb3IoJ3VuYWJsZSB0byBsb2NhdGUgZ2xvYmFsIG9iamVjdCcpO1xufTtcblxudmFyIGdsb2JhbCA9IGdldEdsb2JhbCgpO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0gZ2xvYmFsLmZldGNoOyAvLyBOZWVkZWQgZm9yIFR5cGVTY3JpcHQgYW5kIFdlYnBhY2suXG5cbmV4cG9ydHMuZGVmYXVsdCA9IGdsb2JhbC5mZXRjaC5iaW5kKGdsb2JhbCk7XG5leHBvcnRzLkhlYWRlcnMgPSBnbG9iYWwuSGVhZGVycztcbmV4cG9ydHMuUmVxdWVzdCA9IGdsb2JhbC5SZXF1ZXN0O1xuZXhwb3J0cy5SZXNwb25zZSA9IGdsb2JhbC5SZXNwb25zZTsiLCJpbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5zY3NzXCI7XG4vLyBpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG4vLyBpbXBvcnQgY3VycmVudHMyMDE5MTAxNiBmcm9tICcuLi9zcmMvZGF0YS9jdXJyZW50czIwMTkxMDE2JztcblxuaW1wb3J0IHt5ZGF5Q3VycmVudHN9IGZyb20gJy4vc2NyaXB0cy9mZXRjaEN1cnJlbnRzRGF0YSc7XG5cbiAgICAvLyBjb25zdCBuZXdDdXJyID0geWRheUN1cnJlbnRzID8gT2JqZWN0LnZhbHVlcyhkYXRhKS5tYXAoZGF0YSA9PiBkYXRhLmlkKSA6IHt9O1xuXG5cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKS5pbm5lclRleHQgPSBcIkhlbGxvIFdvcmxkIVwiO1xuICAgIC8vIGF4aW9zLmdldChcIi4vXCIpLnRoZW4ocmVzID0+IGNvbnNvbGUubG9nKHJlcykpO1xuICAgIC8vIHdpbmRvdy5jdXJyZW50cyA9IGN1cnJlbnRzMjAxOTEwMTY7XG4gICAgd2luZG93LnlkYXlDdXJyZW50cyA9IHlkYXlDdXJyZW50cztcbiAgICBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo4MDAwL2dvdicpLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpLnRoZW4oZGF0YSA9PiB7IGNvbnNvbGUubG9nKGRhdGEpIH0pO1xuICAgIC8vIGNvbnNvbGUubG9nKGN1cnJlbnRzMjAxOTEwMTYpO1xuICAgIC8vIGNvbnNvbGUubG9nKHlkYXlDdXJyZW50cygpKTtcbn0pOyIsImV4cG9ydCBjb25zdCB5ZGF5Q3VycmVudHMgPSAoc3RhdGlvbklEID0gXCI4NjM4OTAxXCIpID0+IHtcblxuICAgIGNvbnN0IGZldGNoID0gcmVxdWlyZSgnbm9kZS1mZXRjaCcpO1xuXG4gICAgLy/CoEVzdGFibGlzaMKgWWVzdGVyZGF5J3PCoERhdGVcbiAgICBsZXQgeWVzdGVyZGF5ID0gbmV3IERhdGUoRGF0ZS5ub3coKSAtIDg2NGU1KTtcbiAgICBsZXQgeWR5RnVsbFllYXIgPSB5ZXN0ZXJkYXkuZ2V0RnVsbFllYXIoKTtcbiAgICBsZXQgeWR5TW9udGggPSB5ZXN0ZXJkYXkuZ2V0TW9udGgoKSArIDE7XG4gICAgbGV0IHlkeURhdGUgPSB5ZXN0ZXJkYXkuZ2V0RGF0ZSgpO1xuICAgIGxldCB5ZHlEYXRlU3RyaW5nID0geWR5RnVsbFllYXIudG9TdHJpbmcoKSArIHlkeU1vbnRoLnRvU3RyaW5nKCkgKyB5ZHlEYXRlLnRvU3RyaW5nKCk7XG5cbiAgICBjb25zdCBsaXN0ID0gW107XG4gICAgY29uc3QgbmV3T2JqID0ge307XG5cbiAgICBmZXRjaChgaHR0cHM6Ly90aWRlc2FuZGN1cnJlbnRzLm5vYWEuZ292L2FwaS9kYXRhZ2V0dGVyP2JlZ2luX2RhdGU9JHt5ZHlEYXRlU3RyaW5nfSZlbmRfZGF0ZT0ke3lkeURhdGVTdHJpbmd9JnN0YXRpb249JHtzdGF0aW9uSUR9JnByb2R1Y3Q9d2F0ZXJfbGV2ZWwmZGF0dW09bXRsJnVuaXRzPW1ldHJpYyZ0aW1lX3pvbmU9Z210JmFwcGxpY2F0aW9uPXdlYl9zZXJ2aWNlcyZmb3JtYXQ9anNvbmApXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgXG4gICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgZGF0YVtcImRhdGFcIl0uZm9yRWFjaChjdXJyU3RhdHMgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBsaXN0LnB1c2goY3VyclN0YXRzKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIHJldHVybiAobGlzdCk7XG59O1xuXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9