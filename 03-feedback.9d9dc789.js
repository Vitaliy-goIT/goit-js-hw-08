function t(t){return t&&t.__esModule?t.default:t}var e,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,u=/^0o[0-7]+$/i,f=parseInt,a="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=a||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,p=function(){return l.Date.now()};function v(t,e,n){var o,r,i,u,f,a,c=0,l=!1,s=!1,v=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function b(e){var n=o,i=r;return o=r=void 0,c=e,u=t.apply(i,n)}function j(t){return c=t,f=setTimeout(T,e),l?b(t):u}function S(t){var n=t-a;return void 0===a||n>=e||n<0||s&&t-c>=i}function T(){var t=p();if(S(t))return h(t);f=setTimeout(T,function(t){var n=e-(t-a);return s?m(n,i-(t-c)):n}(t))}function h(t){return f=void 0,v&&o?b(t):(o=r=void 0,u)}function w(){var t=p(),n=S(t);if(o=arguments,r=this,a=t,n){if(void 0===f)return j(a);if(s)return f=setTimeout(T,e),b(a)}return void 0===f&&(f=setTimeout(T,e)),u}return e=y(e)||0,g(n)&&(l=!!n.leading,i=(s="maxWait"in n)?d(y(n.maxWait)||0,e):i,v="trailing"in n?!!n.trailing:v),w.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=a=r=f=void 0},w.flush=function(){return void 0===f?u:h(p())},w}function g(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function y(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==s.call(t)}(t))return NaN;if(g(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=g(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var n=i.test(t);return n||u.test(t)?f(t.slice(2),n?2:8):r.test(t)?NaN:+t}e=function(t,e,n){var o=!0,r=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return g(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),v(t,e,{leading:o,maxWait:e,trailing:r})};const b=document.querySelector(".feedback-form"),j=document.querySelector("input"),S=document.querySelector("textarea"),T={};b.addEventListener("submit",(function(t){t.preventDefault(),console.log(T),t.currentTarget.reset(),localStorage.removeItem("feedback-form-state")})),b.addEventListener("input",t(e)((function(t){const e=t.target.name,n=t.target.value;T[e]=n,localStorage.setItem("feedback-form-state",JSON.stringify(T))}),500)),function(){const t=localStorage.getItem("feedback-form-state");if(t){const{email:e,message:n}=JSON.parse(t);j.value=e,S.textContent=n}}();
//# sourceMappingURL=03-feedback.9d9dc789.js.map