/**
 * name: @vvap/admin
 * version: v0.0.1
 * description: 
 * author: lalifeier
 * email: lalifeier@gmail.com
 * homepage: https://lalifeier.github.io
 */
import{s as X,w as x,h as F}from"./index.70794613.js";import{k as v,ar as A,r as H,a as h,y as Z,ad as ee,ae as te,x as c,ac as re,aj as ne,u as k,n as P,a2 as b,l as oe,m as ae,w as D,p as se,i as ie,g as ue,as as le,T as ce,q as _,a1 as de,v as fe}from"./vendor.5ada8107.js";import{u as g}from"./useDesign.48c0b7cb.js";const pe={target:{type:String,default:""},visibilityHeight:{type:Number,default:400},right:{type:Number,default:40},bottom:{type:Number,default:40}};var ye=v({name:"BackToTop",props:pe,emits:["click"],setup(e,{slots:n,emit:r}){const{prefixCls:t}=g("backtop"),o=A(document.documentElement),a=A(document),s=H(!1),i=h(()=>{const f=`${e.bottom}px`,L=`${e.right}px`;return{bottom:f,right:L}}),l=Z(u,300);function u(){var L;if(!o.value)return;const f=((L=o.value)==null?void 0:L.scrollTop)||0;s.value=f>=e.visibilityHeight}function d(f){X(o.value),r("click",f)}return ee(()=>{var f;if(e.target){if(o.value=(f=document.querySelector(e.target))!=null?f:void 0,!o.value)throw new Error(`target is not existed: ${e.target}`);a.value=o.value}te(a,"scroll",l)}),()=>c(P("v-fab-transition"),null,{default:()=>[re(c("div",{class:t,style:k(i),onClick:d},[n.default?n.default():c(P("v-btn"),{"aria-label":"\u6EDA\u52A8\u9875\u9762\u81F3\u9876\u90E8",title:"\u6EDA\u52A8\u9875\u9762\u81F3\u9876\u90E8",class:"transition-swing",color:"primary",icon:!0},{default:()=>[c(P("v-icon"),null,{default:()=>[b("mdi-chevron-up")]})]})]),[[ne,s.value]])]})}});const ve=x(ye),he={prefixCls:{type:String,default:"layout"},tagName:{type:String,default:"section"}};var ge=v({name:"Layout",props:he,setup(e,{slots:n}){const{prefixCls:r}=g("layout");return()=>{var t;return c("section",{class:r},[(t=n.default)==null?void 0:t.call(n)])}}});const me={prefixCls:{type:String,default:"layout-content"}};var be=v({name:"LayoutContent",props:me,setup(e,{slots:n}){const{prefixCls:r}=g("layout-content");return()=>{var t;return c("main",{class:r},[(t=n.default)==null?void 0:t.call(n)])}}});const _e={prefixCls:{type:String,default:"layout-footer"}};var Oe=v({name:"LayoutFooter",props:_e,setup(e,{slots:n}){const{prefixCls:r}=g("layout-footer");return()=>{var t;return c("footer",{class:r},[(t=n.default)==null?void 0:t.call(n)])}}});const xe={prefixCls:{type:String,default:"layout-header"}};var je=v({name:"LayoutHeader",props:xe,setup(e,{slots:n}){const{prefixCls:r}=g("layout-header");return()=>{var t;return c("header",{class:r},[(t=n.default)==null?void 0:t.call(n)])}}});const $e={prefixCls:{type:String,default:"layout-sider"},collapsed:{type:Boolean},breakpoint:{type:String,default:"sm"},onCollapse:{type:Function}};var Ce=v({name:"LayoutSider",props:$e,setup(e,{slots:n}){const{prefixCls:r}=g("layout-sider"),t=H(e.collapsed);function o(u,d){var f;a(u),(f=e.onCollapse)==null||f.call(e,u)}const a=u=>{t.value=u},i=oe(ae).smaller(e.breakpoint);D(i,u=>{o(u)},{immediate:!0});const l=h(()=>[r,{[`${r}-collapsed`]:t.value}]);return()=>{var u;return c("aside",{class:l.value},[(u=n.default)==null?void 0:u.call(n)])}}});const Te=x(ge),Se=x(be),we=x(Oe),Le=x(je),ke=x(Ce);/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */function M(e){return Object.prototype.toString.call(e)==="[object Object]"}function Pe(e){var n,r;return M(e)===!1?!1:(n=e.constructor,n===void 0?!0:(r=n.prototype,!(M(r)===!1||r.hasOwnProperty("isPrototypeOf")===!1)))}function w(){return w=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},w.apply(this,arguments)}function R(e,n){if(e==null)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n.indexOf(r=a[t])>=0||(o[r]=e[r]);return o}const Ee={silent:!1,logLevel:"warn"},Ne=["validator"],I=Object.prototype,Y=I.toString,Fe=I.hasOwnProperty,K=/^\s*function (\w+)/;function J(e){var n;const r=(n=e==null?void 0:e.type)!==null&&n!==void 0?n:e;if(r){const t=r.toString().match(K);return t?t[1]:""}return""}const j=Pe,He=e=>e;let p=He;const C=(e,n)=>Fe.call(e,n),Be=Number.isInteger||function(e){return typeof e=="number"&&isFinite(e)&&Math.floor(e)===e},T=Array.isArray||function(e){return Y.call(e)==="[object Array]"},S=e=>Y.call(e)==="[object Function]",E=e=>j(e)&&C(e,"_vueTypes_name"),z=e=>j(e)&&(C(e,"type")||["_vueTypes_name","validator","default","required"].some(n=>C(e,n)));function B(e,n){return Object.defineProperty(e.bind(n),"__original",{value:e})}function $(e,n,r=!1){let t,o=!0,a="";t=j(e)?e:{type:e};const s=E(t)?t._vueTypes_name+" - ":"";if(z(t)&&t.type!==null){if(t.type===void 0||t.type===!0||!t.required&&n===void 0)return o;T(t.type)?(o=t.type.some(i=>$(i,n,!0)===!0),a=t.type.map(i=>J(i)).join(" or ")):(a=J(t),o=a==="Array"?T(n):a==="Object"?j(n):a==="String"||a==="Number"||a==="Boolean"||a==="Function"?function(i){if(i==null)return"";const l=i.constructor.toString().match(K);return l?l[1]:""}(n)===a:n instanceof t.type)}if(!o){const i=`${s}value "${n}" should be of type "${a}"`;return r===!1?(p(i),!1):i}if(C(t,"validator")&&S(t.validator)){const i=p,l=[];if(p=u=>{l.push(u)},o=t.validator(n),p=i,!o){const u=(l.length>1?"* ":"")+l.join(`
* `);return l.length=0,r===!1?(p(u),o):u}}return o}function y(e,n){const r=Object.defineProperties(n,{_vueTypes_name:{value:e,writable:!0},isRequired:{get(){return this.required=!0,this}},def:{value(o){return o===void 0?(C(this,"default")&&delete this.default,this):S(o)||$(this,o,!0)===!0?(this.default=T(o)?()=>[...o]:j(o)?()=>Object.assign({},o):o,this):(p(`${this._vueTypes_name} - invalid default value: "${o}"`),this)}}}),{validator:t}=r;return S(t)&&(r.validator=B(t,r)),r}function m(e,n){const r=y(e,n);return Object.defineProperty(r,"validate",{value(t){return S(this.validator)&&p(`${this._vueTypes_name} - calling .validate() will overwrite the current custom validator function. Validator info:
${JSON.stringify(this)}`),this.validator=B(t,this),this}})}function W(e,n,r){const t=function(l){const u={};return Object.getOwnPropertyNames(l).forEach(d=>{u[d]=Object.getOwnPropertyDescriptor(l,d)}),Object.defineProperties({},u)}(n);if(t._vueTypes_name=e,!j(r))return t;const{validator:o}=r,a=R(r,Ne);if(S(o)){let{validator:l}=t;l&&(l=(i=(s=l).__original)!==null&&i!==void 0?i:s),t.validator=B(l?function(u){return l.call(this,u)&&o.call(this,u)}:o,t)}var s,i;return Object.assign(t,a)}function N(e){return e.replace(/^(?!\s*$)/gm,"  ")}const qe=()=>m("any",{}),q=()=>m("function",{type:Function}),Ve=()=>m("boolean",{type:Boolean}),Ae=()=>m("string",{type:String}),De=()=>m("number",{type:Number}),Me=()=>m("array",{type:Array}),V=()=>m("object",{type:Object}),Re=()=>y("integer",{type:Number,validator:e=>Be(e)}),Ie=()=>y("symbol",{validator:e=>typeof e=="symbol"});function Ye(e,n="custom validation failed"){if(typeof e!="function")throw new TypeError("[VueTypes error]: You must provide a function as argument");return y(e.name||"<<anonymous function>>",{type:null,validator(r){const t=e(r);return t||p(`${this._vueTypes_name} - ${n}`),t}})}function Ke(e){if(!T(e))throw new TypeError("[VueTypes error]: You must provide an array as argument.");const n=`oneOf - value should be one of "${e.join('", "')}".`,r=e.reduce((t,o)=>{if(o!=null){const a=o.constructor;t.indexOf(a)===-1&&t.push(a)}return t},[]);return y("oneOf",{type:r.length>0?r:void 0,validator(t){const o=e.indexOf(t)!==-1;return o||p(n),o}})}function Je(e){if(!T(e))throw new TypeError("[VueTypes error]: You must provide an array as argument");let n=!1,r=[];for(let o=0;o<e.length;o+=1){const a=e[o];if(z(a)){if(E(a)&&a._vueTypes_name==="oneOf"&&a.type){r=r.concat(a.type);continue}if(S(a.validator)&&(n=!0),a.type===!0||!a.type){p('oneOfType - invalid usage of "true" or "null" as types.');continue}r=r.concat(a.type)}else r.push(a)}r=r.filter((o,a)=>r.indexOf(o)===a);const t=r.length>0?r:null;return y("oneOfType",n?{type:t,validator(o){const a=[],s=e.some(i=>{const l=$(E(i)&&i._vueTypes_name==="oneOf"?i.type||null:i,o,!0);return typeof l=="string"&&a.push(l),l===!0});return s||p(`oneOfType - provided value does not match any of the ${a.length} passed-in validators:
${N(a.join(`
`))}`),s}}:{type:t})}function ze(e){return y("arrayOf",{type:Array,validator(n){let r="";const t=n.every(o=>(r=$(e,o,!0),r===!0));return t||p(`arrayOf - value validation error:
${N(r)}`),t}})}function We(e){return y("instanceOf",{type:e})}function Ge(e){return y("objectOf",{type:Object,validator(n){let r="";const t=Object.keys(n).every(o=>(r=$(e,n[o],!0),r===!0));return t||p(`objectOf - value validation error:
${N(r)}`),t}})}function Qe(e){const n=Object.keys(e),r=n.filter(o=>{var a;return!((a=e[o])===null||a===void 0||!a.required)}),t=y("shape",{type:Object,validator(o){if(!j(o))return!1;const a=Object.keys(o);if(r.length>0&&r.some(s=>a.indexOf(s)===-1)){const s=r.filter(i=>a.indexOf(i)===-1);return p(s.length===1?`shape - required property "${s[0]}" is not defined.`:`shape - required properties "${s.join('", "')}" are not defined.`),!1}return a.every(s=>{if(n.indexOf(s)===-1)return this._vueTypes_isLoose===!0||(p(`shape - shape definition does not include a "${s}" property. Allowed keys: "${n.join('", "')}".`),!1);const i=$(e[s],o[s],!0);return typeof i=="string"&&p(`shape - "${s}" property validation error:
 ${N(i)}`),i===!0})}});return Object.defineProperty(t,"_vueTypes_isLoose",{writable:!0,value:!1}),Object.defineProperty(t,"loose",{get(){return this._vueTypes_isLoose=!0,this}}),t}const Ue=["name","validate","getter"],Xe=(()=>{var e,n;return n=e=class{static get any(){return qe()}static get func(){return q().def(this.defaults.func)}static get bool(){return Ve().def(this.defaults.bool)}static get string(){return Ae().def(this.defaults.string)}static get number(){return De().def(this.defaults.number)}static get array(){return Me().def(this.defaults.array)}static get object(){return V().def(this.defaults.object)}static get integer(){return Re().def(this.defaults.integer)}static get symbol(){return Ie()}static extend(r){if(T(r))return r.forEach(u=>this.extend(u)),this;const{name:t,validate:o=!1,getter:a=!1}=r,s=R(r,Ue);if(C(this,t))throw new TypeError(`[VueTypes error]: Type "${t}" already defined`);const{type:i}=s;if(E(i))return delete s.type,Object.defineProperty(this,t,a?{get:()=>W(t,i,s)}:{value(...u){const d=W(t,i,s);return d.validator&&(d.validator=d.validator.bind(d,...u)),d}});let l;return l=a?{get(){const u=Object.assign({},s);return o?m(t,u):y(t,u)},enumerable:!0}:{value(...u){const d=Object.assign({},s);let f;return f=o?m(t,d):y(t,d),d.validator&&(f.validator=d.validator.bind(f,...u)),f},enumerable:!0},Object.defineProperty(this,t,l)}},e.defaults={},e.sensibleDefaults=void 0,e.config=Ee,e.custom=Ye,e.oneOf=Ke,e.instanceOf=We,e.oneOfType=Je,e.arrayOf=ze,e.objectOf=Ge,e.shape=Qe,e.utils={validate:(r,t)=>$(t,r,!0)===!0,toType:(r,t,o=!1)=>o?m(r,t):y(r,t)},n})();function G(e={func:()=>{},bool:!0,string:"",number:0,array:()=>[],object:()=>({}),integer:0}){var n,r;return r=n=class extends Xe{static get sensibleDefaults(){return w({},this.defaults)}static set sensibleDefaults(t){this.defaults=t!==!1?w({},t!==!0?t:e):{}}},n.defaults=w({},e),r}class bt extends G(){}class O extends G(){static get style(){return y("style",{type:[String,Object],default:void 0})}}function Ze(e){const n=H(e.collapsed);return D(()=>e.collapsed,o=>{n.value=o}),{collapsed:h(()=>n.value),setCollapsed:o=>{o!=k(n)&&(n.value=o)}}}const Q=Symbol("proLayoutContextKey"),et=()=>{const e=ue(),{props:n,slots:r}=e,{collapsed:t,setCollapsed:o}=Ze(n);se(Q,{props:n,slots:r,collapsed:t,setCollapsed:o})},U=()=>{const e=ie(Q);if(!e)throw new Error("useProLayoutContext must be used after useProLayoutProvide");return e},tt={prefixCls:{type:String,default:"pro-layout-header"}};var rt=v({name:"Header",props:tt,setup(){const{prefixCls:e}=g("pro-layout-header"),{props:n,slots:r}=U(),t=h(()=>{const{theme:s}=n;return F(s)?s.header:s}),o=h(()=>{const{fixed:s}=n;return F(s)?s.header:s}),a=h(()=>[e,{[`${e}-${t.value}`]:!0,[`${e}-fixed`]:o.value}]);return()=>c(Le,{class:a.value},{default:()=>[r.logo&&c("div",{class:`${e}-logo`},[r.logo()]),c("div",{class:`${e}-content`},[r.headerContent&&r.headerContent()]),r.headerExtra&&c("div",{class:`${e}-extra`},[r.headerExtra()])]})}});const nt={prefixCls:{type:String,default:"pro-layout-sider"}};var ot=v({name:"Sider",props:nt,setup(){const{prefixCls:e}=g("pro-layout-sider"),{props:n,slots:r,collapsed:t,setCollapsed:o}=U(),a=h(()=>{const{fixed:i}=n;return F(i)?i.sider:i}),s=h(()=>[e,{[`${e}-fixed`]:a.value,[`${e}-collapsed`]:t.value}]);return()=>c(ke,{class:s.value,onCollapse:o},{default:()=>[r.siderHeader&&c("div",{class:`${e}-header`},[r.siderHeader()]),c("div",{class:`${e}-content`},[r.siderContent&&r.siderContent()]),r.siderFooter&&c("div",{class:`${e}-footer`},[r.siderFooter()])]})}});function at(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!le(e)}const st={collapsed:O.bool,activeKey:O.oneOfType([String,Number,Symbol]),mode:O.oneOfType([String]).def("sider"),contentMode:O.oneOfType([String]).def("fluid"),fixed:O.oneOfType([Boolean,V()]).def(!1),theme:O.oneOfType([O.oneOfType([String]),V()]).def("light"),breakpoint:O.oneOfType([String]),onCollapse:q(),onMenuClick:q()};var it=v({name:"Layout",props:st,setup(e,{slots:n}){const{prefixCls:r}=g("pro-layout");et();const t=h(()=>{const{mode:a,fixed:s}=e;return[r,{[`${r}-fixed`]:s,[`${r}-is-${a}`]:!0}]}),o=h(()=>["sider","mixin"].includes(e.mode));return()=>{let a;return c(Te,{class:t.value},{default:()=>[c(rt,null,null),o.value&&c(ot,null,null),c(Se,{class:`${r}-content`},{default:()=>{var s;return[(s=n.default)==null?void 0:s.call(n)]}}),n.footer&&c(we,{class:`${r}-footer`},at(a=n.footer())?a:{default:()=>[a]})]})}}});const ut=x(it);const lt=b("logo"),ct=b("headerContent"),dt=b("headerExtra"),ft=b("siderHeader"),pt=b("siderContent"),yt=b("siderFooter"),vt=b("footer"),_t=v({setup(e){return g("layout"),(n,r)=>{const t=P("router-view");return fe(),ce(de,null,[c(k(ut),null,{logo:_(()=>[lt]),headerContent:_(()=>[ct]),headerExtra:_(()=>[dt]),siderHeader:_(()=>[ft]),siderContent:_(()=>[pt]),siderFooter:_(()=>[yt]),footer:_(()=>[vt]),default:_(()=>[c(t)]),_:1}),c(k(ve))],64)}}});export{_t as default};
//# sourceMappingURL=index.387f83b3.js.map
