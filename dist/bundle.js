(()=>{function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(t,n){for(var i=0;i<n.length;i++){var r=n[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,u=function(t,n){if("object"!==e(t)||null===t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var r=i.call(t,"string");if("object"!==e(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===e(u)?u:String(u)),r)}var u}new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.numA="",this.numB="",this.operand="+",this.selectedNum=this.numA,this.add=function(e,t){return e+t},this.sub=function(e,t){return e-t},this.multi=function(e,t){return e*t},this.div=function(e,t){return e/t},this.digits=document.querySelectorAll("button"),this.display=document.querySelector(".first-row-dis"),this.init()}var n,i;return n=e,(i=[{key:"operate",value:function(e,t,n){return"+"===n?this.add(Number(e),Number(t)):"-"===n?this.sub(Number(e),Number(t)):"*"===n?this.multi(Number(e),Number(t)):"/"===n?this.div(Number(e),Number(t)):void 0}},{key:"init",value:function(){var e=this;this.digits.forEach((function(t){t.addEventListener("click",(function(n){if(t.id)if("clear-btn"===t.id)e.numB="",e.numA="",e.display.textContent="",e.selectedNum="";else if("score-btn"===t.id){e.numB=e.selectedNum;var i=e.operate(e.numA,e.numB,e.operand),r=parseFloat(i.toFixed(10)).toString();e.display.textContent=r,e.numA=r,e.selectedNum=e.numA}else"back-btn"===t.id?(e.selectedNum=e.selectedNum.split("").splice(0,e.selectedNum.length-1).join(""),e.selectedNum||(e.selectedNum=0),e.display.textContent=e.selectedNum):"dot-btn"===t.id?(e.selectedNum+=t.innerText,e.display.textContent+=t.innerText):t.id&&(e.operand=t.innerText,e.numA=e.selectedNum,e.selectedNum="",e.display.textContent+=" ".concat(e.operand," "));else e.selectedNum+=t.innerText,e.display.textContent+=t.innerText})),t.addEventListener("keyup",(function(t){"1234567890.+-*/".split("").includes(t.key)&&(e.selectedNum+=t.key,e.display.textContent+=t.key)}))}))}}])&&t(n.prototype,i),Object.defineProperty(n,"prototype",{writable:!1}),e}())})();