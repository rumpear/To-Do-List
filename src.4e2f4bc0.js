parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"clu1":[function(require,module,exports) {

},{}],"A2T1":[function(require,module,exports) {
const t=document.querySelector("form"),e=document.querySelector(".todo-list");function o(e){e.preventDefault();const o=e.currentTarget.elements.input.value.trim();o?(u(o),a(),t.reset()):alert("Введите данные")}function n(){if(!localStorage.getItem("toDo"))return todoArr=[]}function r(){localStorage.getItem("toDo")}function c(){if(localStorage.getItem("toDo"))return todoArr=JSON.parse(localStorage.getItem("toDo"))}function l(t){localStorage.setItem("toDo",JSON.stringify(t)),console.log(t)}function i(){const t=[],e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";for(let o=0;o<10;o++)t[o]=e.charAt(Math.floor(Math.random()*e.length));return id=t.join("")}function u(t){n(),c(),todoArr.push({id:i(),text:t,isComplete:!1}),l(todoArr)}function a(){if(e.innerHTML="",!localStorage.getItem("toDo"))return;c().reverse().forEach(({text:t,isComplete:e,id:o})=>{d(t,e,o)}),f(),g()}function s(t){c();const e=todoArr.filter(e=>e.id!==t);console.log(e),l(e)}function d(t,o,n){const r=`\n  <li class="todo-item ${o?"checked":""}">\n    <button type="button" value="${n}" \n    class="check-btn ${o?"active":""}">Check</button>\n    ${t}\n    <button type="button" value="${n}" class="delete-btn">Del</button>\n  </li>\n  `;e.innerHTML+=r}function f(){document.querySelectorAll(".delete-btn").forEach(t=>{t.addEventListener("click",t=>{m(t.target.value)})})}function m(t){s(t),a()}function g(){document.querySelectorAll(".check-btn").forEach(t=>{t.addEventListener("click",t=>{h(t.target.value)})})}function h(t){n(),c(),todoArr.forEach(e=>{e.id===t&&(!0===e.isComplete?e.isComplete=!1:e.isComplete=!0)}),l(todoArr),a()}a(),t.addEventListener("submit",o);
},{}],"Focm":[function(require,module,exports) {
"use strict";require("./sass/main.scss"),require("./app");
},{"./sass/main.scss":"clu1","./app":"A2T1"}]},{},["Focm"], null)
//# sourceMappingURL=/To-Do-List/src.4e2f4bc0.js.map