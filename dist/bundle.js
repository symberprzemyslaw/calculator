/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("// Class that holds everything together, maybe it be better to split it\n// Pressing equition button double visible number\n// Maybe Jest implementation? In this state I can't imgaine testing it\n// Maybe more functional aproach?\n// Multiple dots/operands bug\n\n// mulitple = strange behavior\n// can start with 0,mean 01235 * 442\n// backspace can erase even 0 SOLVED\n// multiple dots can be added 43.....5 SOLVED\n// multiple operands\n// backspace eraser everything\n// add handling multiple operators\n\nvar numA = '';\nvar numB = '';\nvar operand = '+';\nvar selectedNum = numA;\nvar add = function add(a, b) {\n  return a + b;\n};\nvar sub = function sub(a, b) {\n  return a - b;\n};\nvar multi = function multi(a, b) {\n  return a * b;\n};\nvar div = function div(a, b) {\n  return a / b;\n};\nvar digits = document.querySelector('.digits');\nvar display = document.querySelector('.first-row-dis');\nvar operate = function operate() {\n  if (operand === '+') {\n    return add(Number(numA), Number(numB));\n  }\n  if (operand === '-') {\n    return sub(Number(numA), Number(numB));\n  }\n  if (operand === '*') {\n    return multi(Number(numA), Number(numB));\n  }\n  if (operand === '/') {\n    return div(Number(numA), Number(numB));\n  }\n  return null;\n};\nvar clear = function clear() {\n  numB = '';\n  numA = '';\n  display.textContent = '';\n  selectedNum = '';\n};\nvar getResult = function getResult() {\n  numB = selectedNum;\n  var result = operate(numA, numB, operand);\n  var formattedResult = parseFloat(result.toFixed(10));\n  var resultText = formattedResult.toString();\n  display.textContent = resultText;\n  numA = resultText;\n  selectedNum = numA;\n};\nvar back = function back() {\n  if (selectedNum) {\n    selectedNum = selectedNum.split('').splice(0, selectedNum.length - 1).join('');\n    if (!selectedNum) {\n      selectedNum = 0;\n    }\n  }\n  display.textContent = selectedNum;\n};\nvar enterNum = function enterNum(element) {\n  if (!selectedNum.includes('.')) {\n    selectedNum += element.innerText;\n    display.textContent += element.innerText;\n  }\n};\nfunction init() {\n  digits.addEventListener('click', function (e) {\n    var element = e.target;\n    if (!element.id) {\n      // entering numbers\n      enterNum(element);\n    } else if (element.id === 'clear-btn') {\n      // clearing all\n      clear();\n    } else if (element.id === 'score-btn') {\n      // result\n      getResult();\n    } else if (element.id === 'back-btn') {\n      // erasing\n      back();\n    } else if (element.id) {\n      // operands\n      operand = element.innerText;\n      numA = selectedNum;\n      selectedNum = '';\n      display.textContent += \" \".concat(operand, \" \");\n    }\n  });\n  digits.addEventListener('keyup', function (e) {\n    // entering numbers from keyboard\n    var keyArr = '1234567890.+-*/'.split('');\n    if (keyArr.includes(e.key)) {\n      selectedNum += e.key;\n      display.textContent += e.key;\n    }\n  });\n}\ninit();\n\n//# sourceURL=webpack://calculator/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;