/*! For license information please see 723.js.LICENSE.txt */
"use strict";(self.webpackChunkTravelCharges=self.webpackChunkTravelCharges||[]).push([[723],{723:(e,n,r)=>{r.r(n),r(914);var t=r(672),a=r.n(t),o=r(72),i=r.n(o),s=r(825),c=r.n(s),u=r(659),l=r.n(u),p=r(56),f=r.n(p),d=r(540),v=r.n(d),m=r(113),h=r.n(m),y=r(972),g={};g.styleTagTransform=h(),g.setAttributes=f(),g.insert=l().bind(null,"head"),g.domAPI=c(),g.insertStyleElement=v(),i()(y.A,g),y.A&&y.A.locals&&y.A.locals;var x=r(848),b=function(){return(0,x.jsxs)("div",{className:"container",children:[(0,x.jsx)("div",{children:"Name: TravelCharges"}),(0,x.jsx)("div",{children:"Framework: react"}),(0,x.jsx)("div",{children:"Language: JavaScript"}),(0,x.jsx)("div",{children:"CSS: Empty CSS"})]})};a().render((0,x.jsx)(b,{}),document.getElementById("app"))},972:(e,n,r)=>{r.d(n,{A:()=>s});var t=r(601),a=r.n(t),o=r(314),i=r.n(o)()(a());i.push([e.id,"body {\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n.container {\n  font-size: 3rem;\n  margin: auto;\n  max-width: 800px;\n  margin-top: 20px;\n}",""]);const s=i},314:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var r="",t=void 0!==n[5];return n[4]&&(r+="@supports (".concat(n[4],") {")),n[2]&&(r+="@media ".concat(n[2]," {")),t&&(r+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),r+=e(n),t&&(r+="}"),n[2]&&(r+="}"),n[4]&&(r+="}"),r})).join("")},n.i=function(e,r,t,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(t)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var u=0;u<e.length;u++){var l=[].concat(e[u]);t&&i[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),r&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=r):l[2]=r),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),n.push(l))}},n}},601:e=>{e.exports=function(e){return e[1]}},20:(e,n,r)=>{var t=r(914),a=Symbol.for("react.element"),o=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,r){var t,c={},u=null,l=null;for(t in void 0!==r&&(u=""+r),void 0!==n.key&&(u=""+n.key),void 0!==n.ref&&(l=n.ref),n)o.call(n,t)&&!s.hasOwnProperty(t)&&(c[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===c[t]&&(c[t]=n[t]);return{$$typeof:a,type:e,key:u,ref:l,props:c,_owner:i.current}}n.jsx=c,n.jsxs=c},848:(e,n,r)=>{e.exports=r(20)},72:e=>{var n=[];function r(e){for(var r=-1,t=0;t<n.length;t++)if(n[t].identifier===e){r=t;break}return r}function t(e,t){for(var o={},i=[],s=0;s<e.length;s++){var c=e[s],u=t.base?c[0]+t.base:c[0],l=o[u]||0,p="".concat(u," ").concat(l);o[u]=l+1;var f=r(p),d={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==f)n[f].references++,n[f].updater(d);else{var v=a(d,t);t.byIndex=s,n.splice(s,0,{identifier:p,updater:v,references:1})}i.push(p)}return i}function a(e,n){var r=n.domAPI(n);return r.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;r.update(e=n)}else r.remove()}}e.exports=function(e,a){var o=t(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var s=r(o[i]);n[s].references--}for(var c=t(e,a),u=0;u<o.length;u++){var l=r(o[u]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}o=c}}},659:e=>{var n={};e.exports=function(e,r){var t=function(e){if(void 0===n[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}n[e]=r}return n[e]}(e);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},540:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},56:(e,n,r)=>{e.exports=function(e){var n=r.nc;n&&e.setAttribute("nonce",n)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(r){!function(e,n,r){var t="";r.supports&&(t+="@supports (".concat(r.supports,") {")),r.media&&(t+="@media ".concat(r.media," {"));var a=void 0!==r.layer;a&&(t+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),t+=r.css,a&&(t+="}"),r.media&&(t+="}"),r.supports&&(t+="}");var o=r.sourceMap;o&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(t,e,n.options)}(n,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},113:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}}]);