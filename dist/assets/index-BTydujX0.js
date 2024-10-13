(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();/**
* @vue/shared v3.4.19
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ys(t,e){const n=new Set(t.split(","));return e?r=>n.has(r.toLowerCase()):r=>n.has(r)}const he={},Cn=[],Ge=()=>{},Cd=()=>!1,To=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Zs=t=>t.startsWith("onUpdate:"),we=Object.assign,Xs=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Td=Object.prototype.hasOwnProperty,ne=(t,e)=>Td.call(t,e),V=Array.isArray,Tn=t=>Eo(t)==="[object Map]",zc=t=>Eo(t)==="[object Set]",q=t=>typeof t=="function",ye=t=>typeof t=="string",Bn=t=>typeof t=="symbol",pe=t=>t!==null&&typeof t=="object",Wc=t=>(pe(t)||q(t))&&q(t.then)&&q(t.catch),Kc=Object.prototype.toString,Eo=t=>Kc.call(t),Ed=t=>Eo(t).slice(8,-1),Gc=t=>Eo(t)==="[object Object]",Qs=t=>ye(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Qn=Ys(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Io=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Id=/-(\w)/g,ht=Io(t=>t.replace(Id,(e,n)=>n?n.toUpperCase():"")),Pd=/\B([A-Z])/g,Fn=Io(t=>t.replace(Pd,"-$1").toLowerCase()),Po=Io(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ho=Io(t=>t?`on${Po(t)}`:""),qt=(t,e)=>!Object.is(t,e),zo=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},io=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},kd=t=>{const e=parseFloat(t);return isNaN(e)?t:e},Od=t=>{const e=ye(t)?Number(t):NaN;return isNaN(e)?t:e};let Fi;const qc=()=>Fi||(Fi=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ko(t){if(V(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],o=ye(r)?xd(r):ko(r);if(o)for(const s in o)e[s]=o[s]}return e}else if(ye(t)||pe(t))return t}const Ad=/;(?![^(]*\))/g,Rd=/:([^]+)/,$d=/\/\*[^]*?\*\//g;function xd(t){const e={};return t.replace($d,"").split(Ad).forEach(n=>{if(n){const r=n.split(Rd);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function on(t){let e="";if(ye(t))e=t;else if(V(t))for(let n=0;n<t.length;n++){const r=on(t[n]);r&&(e+=r+" ")}else if(pe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function Nd(t){if(!t)return null;let{class:e,style:n}=t;return e&&!ye(e)&&(t.class=on(e)),n&&(t.style=ko(n)),t}const Ld="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Md=Ys(Ld);function Jc(t){return!!t||t===""}const ur=t=>ye(t)?t:t==null?"":V(t)||pe(t)&&(t.toString===Kc||!q(t.toString))?JSON.stringify(t,Yc,2):String(t),Yc=(t,e)=>e&&e.__v_isRef?Yc(t,e.value):Tn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,o],s)=>(n[Wo(r,s)+" =>"]=o,n),{})}:zc(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Wo(n))}:Bn(e)?Wo(e):pe(e)&&!V(e)&&!Gc(e)?String(e):e,Wo=(t,e="")=>{var n;return Bn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.19
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ze;class Dd{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ze,!e&&Ze&&(this.index=(Ze.scopes||(Ze.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Ze;try{return Ze=this,e()}finally{Ze=n}}}on(){Ze=this}off(){Ze=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0,this._active=!1}}}function jd(t,e=Ze){e&&e.active&&e.effects.push(t)}function Ud(){return Ze}let sn;class ei{constructor(e,n,r,o){this.fn=e,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,jd(this,o)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,fn();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed&&(Bd(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),hn()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=zt,n=sn;try{return zt=!0,sn=this,this._runnings++,Vi(this),this.fn()}finally{Hi(this),this._runnings--,sn=n,zt=e}}stop(){var e;this.active&&(Vi(this),Hi(this),(e=this.onStop)==null||e.call(this),this.active=!1)}}function Bd(t){return t.value}function Vi(t){t._trackId++,t._depsLength=0}function Hi(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)Zc(t.deps[e],t);t.deps.length=t._depsLength}}function Zc(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let zt=!0,ms=0;const Xc=[];function fn(){Xc.push(zt),zt=!1}function hn(){const t=Xc.pop();zt=t===void 0?!0:t}function ti(){ms++}function ni(){for(ms--;!ms&&bs.length;)bs.shift()()}function Qc(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const r=t.deps[t._depsLength];r!==e?(r&&Zc(r,t),t.deps[t._depsLength++]=e):t._depsLength++}}const bs=[];function el(t,e,n){ti();for(const r of t.keys()){let o;r._dirtyLevel<e&&(o??(o=t.get(r)===r._trackId))&&(r._shouldSchedule||(r._shouldSchedule=r._dirtyLevel===0),r._dirtyLevel=e),r._shouldSchedule&&(o??(o=t.get(r)===r._trackId))&&(r.trigger(),(!r._runnings||r.allowRecurse)&&r._dirtyLevel!==2&&(r._shouldSchedule=!1,r.scheduler&&bs.push(r.scheduler)))}ni()}const tl=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},vs=new WeakMap,an=Symbol(""),ys=Symbol("");function Fe(t,e,n){if(zt&&sn){let r=vs.get(t);r||vs.set(t,r=new Map);let o=r.get(n);o||r.set(n,o=tl(()=>r.delete(n))),Qc(sn,o)}}function Tt(t,e,n,r,o,s){const i=vs.get(t);if(!i)return;let a=[];if(e==="clear")a=[...i.values()];else if(n==="length"&&V(t)){const c=Number(r);i.forEach((l,u)=>{(u==="length"||!Bn(u)&&u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(i.get(n)),e){case"add":V(t)?Qs(n)&&a.push(i.get("length")):(a.push(i.get(an)),Tn(t)&&a.push(i.get(ys)));break;case"delete":V(t)||(a.push(i.get(an)),Tn(t)&&a.push(i.get(ys)));break;case"set":Tn(t)&&a.push(i.get(an));break}ti();for(const c of a)c&&el(c,4);ni()}const Fd=Ys("__proto__,__v_isRef,__isVue"),nl=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Bn)),zi=Vd();function Vd(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=ie(this);for(let s=0,i=this.length;s<i;s++)Fe(r,"get",s+"");const o=r[e](...n);return o===-1||o===!1?r[e](...n.map(ie)):o}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){fn(),ti();const r=ie(this)[e].apply(this,n);return ni(),hn(),r}}),t}function Hd(t){const e=ie(this);return Fe(e,"has",t),e.hasOwnProperty(t)}class rl{constructor(e=!1,n=!1){this._isReadonly=e,this._shallow=n}get(e,n,r){const o=this._isReadonly,s=this._shallow;if(n==="__v_isReactive")return!o;if(n==="__v_isReadonly")return o;if(n==="__v_isShallow")return s;if(n==="__v_raw")return r===(o?s?nf:al:s?il:sl).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const i=V(e);if(!o){if(i&&ne(zi,n))return Reflect.get(zi,n,r);if(n==="hasOwnProperty")return Hd}const a=Reflect.get(e,n,r);return(Bn(n)?nl.has(n):Fd(n))||(o||Fe(e,"get",n),s)?a:Ve(a)?i&&Qs(n)?a:a.value:pe(a)?o?si(a):Rr(a):a}}class ol extends rl{constructor(e=!1){super(!1,e)}set(e,n,r,o){let s=e[n];if(!this._shallow){const c=$n(s);if(!ao(r)&&!$n(r)&&(s=ie(s),r=ie(r)),!V(e)&&Ve(s)&&!Ve(r))return c?!1:(s.value=r,!0)}const i=V(e)&&Qs(n)?Number(n)<e.length:ne(e,n),a=Reflect.set(e,n,r,o);return e===ie(o)&&(i?qt(r,s)&&Tt(e,"set",n,r):Tt(e,"add",n,r)),a}deleteProperty(e,n){const r=ne(e,n);e[n];const o=Reflect.deleteProperty(e,n);return o&&r&&Tt(e,"delete",n,void 0),o}has(e,n){const r=Reflect.has(e,n);return(!Bn(n)||!nl.has(n))&&Fe(e,"has",n),r}ownKeys(e){return Fe(e,"iterate",V(e)?"length":an),Reflect.ownKeys(e)}}class zd extends rl{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Wd=new ol,Kd=new zd,Gd=new ol(!0),ri=t=>t,Oo=t=>Reflect.getPrototypeOf(t);function Br(t,e,n=!1,r=!1){t=t.__v_raw;const o=ie(t),s=ie(e);n||(qt(e,s)&&Fe(o,"get",e),Fe(o,"get",s));const{has:i}=Oo(o),a=r?ri:n?ai:dr;if(i.call(o,e))return a(t.get(e));if(i.call(o,s))return a(t.get(s));t!==o&&t.get(e)}function Fr(t,e=!1){const n=this.__v_raw,r=ie(n),o=ie(t);return e||(qt(t,o)&&Fe(r,"has",t),Fe(r,"has",o)),t===o?n.has(t):n.has(t)||n.has(o)}function Vr(t,e=!1){return t=t.__v_raw,!e&&Fe(ie(t),"iterate",an),Reflect.get(t,"size",t)}function Wi(t){t=ie(t);const e=ie(this);return Oo(e).has.call(e,t)||(e.add(t),Tt(e,"add",t,t)),this}function Ki(t,e){e=ie(e);const n=ie(this),{has:r,get:o}=Oo(n);let s=r.call(n,t);s||(t=ie(t),s=r.call(n,t));const i=o.call(n,t);return n.set(t,e),s?qt(e,i)&&Tt(n,"set",t,e):Tt(n,"add",t,e),this}function Gi(t){const e=ie(this),{has:n,get:r}=Oo(e);let o=n.call(e,t);o||(t=ie(t),o=n.call(e,t)),r&&r.call(e,t);const s=e.delete(t);return o&&Tt(e,"delete",t,void 0),s}function qi(){const t=ie(this),e=t.size!==0,n=t.clear();return e&&Tt(t,"clear",void 0,void 0),n}function Hr(t,e){return function(r,o){const s=this,i=s.__v_raw,a=ie(i),c=e?ri:t?ai:dr;return!t&&Fe(a,"iterate",an),i.forEach((l,u)=>r.call(o,c(l),c(u),s))}}function zr(t,e,n){return function(...r){const o=this.__v_raw,s=ie(o),i=Tn(s),a=t==="entries"||t===Symbol.iterator&&i,c=t==="keys"&&i,l=o[t](...r),u=n?ri:e?ai:dr;return!e&&Fe(s,"iterate",c?ys:an),{next(){const{value:d,done:f}=l.next();return f?{value:d,done:f}:{value:a?[u(d[0]),u(d[1])]:u(d),done:f}},[Symbol.iterator](){return this}}}}function At(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function qd(){const t={get(s){return Br(this,s)},get size(){return Vr(this)},has:Fr,add:Wi,set:Ki,delete:Gi,clear:qi,forEach:Hr(!1,!1)},e={get(s){return Br(this,s,!1,!0)},get size(){return Vr(this)},has:Fr,add:Wi,set:Ki,delete:Gi,clear:qi,forEach:Hr(!1,!0)},n={get(s){return Br(this,s,!0)},get size(){return Vr(this,!0)},has(s){return Fr.call(this,s,!0)},add:At("add"),set:At("set"),delete:At("delete"),clear:At("clear"),forEach:Hr(!0,!1)},r={get(s){return Br(this,s,!0,!0)},get size(){return Vr(this,!0)},has(s){return Fr.call(this,s,!0)},add:At("add"),set:At("set"),delete:At("delete"),clear:At("clear"),forEach:Hr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=zr(s,!1,!1),n[s]=zr(s,!0,!1),e[s]=zr(s,!1,!0),r[s]=zr(s,!0,!0)}),[t,n,e,r]}const[Jd,Yd,Zd,Xd]=qd();function oi(t,e){const n=e?t?Xd:Zd:t?Yd:Jd;return(r,o,s)=>o==="__v_isReactive"?!t:o==="__v_isReadonly"?t:o==="__v_raw"?r:Reflect.get(ne(n,o)&&o in r?n:r,o,s)}const Qd={get:oi(!1,!1)},ef={get:oi(!1,!0)},tf={get:oi(!0,!1)},sl=new WeakMap,il=new WeakMap,al=new WeakMap,nf=new WeakMap;function rf(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function of(t){return t.__v_skip||!Object.isExtensible(t)?0:rf(Ed(t))}function Rr(t){return $n(t)?t:ii(t,!1,Wd,Qd,sl)}function cl(t){return ii(t,!1,Gd,ef,il)}function si(t){return ii(t,!0,Kd,tf,al)}function ii(t,e,n,r,o){if(!pe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=o.get(t);if(s)return s;const i=of(t);if(i===0)return t;const a=new Proxy(t,i===2?r:n);return o.set(t,a),a}function En(t){return $n(t)?En(t.__v_raw):!!(t&&t.__v_isReactive)}function $n(t){return!!(t&&t.__v_isReadonly)}function ao(t){return!!(t&&t.__v_isShallow)}function ll(t){return En(t)||$n(t)}function ie(t){const e=t&&t.__v_raw;return e?ie(e):t}function ul(t){return Object.isExtensible(t)&&io(t,"__v_skip",!0),t}const dr=t=>pe(t)?Rr(t):t,ai=t=>pe(t)?si(t):t;class dl{constructor(e,n,r,o){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new ei(()=>e(this._value),()=>Xr(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!o,this.__v_isReadonly=r}get value(){const e=ie(this);return(!e._cacheable||e.effect.dirty)&&qt(e._value,e._value=e.effect.run())&&Xr(e,4),fl(e),e.effect._dirtyLevel>=2&&Xr(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function sf(t,e,n=!1){let r,o;const s=q(t);return s?(r=t,o=Ge):(r=t.get,o=t.set),new dl(r,o,s||!o,n)}function fl(t){var e;zt&&sn&&(t=ie(t),Qc(sn,(e=t.dep)!=null?e:t.dep=tl(()=>t.dep=void 0,t instanceof dl?t:void 0)))}function Xr(t,e=4,n){t=ie(t);const r=t.dep;r&&el(r,e)}function Ve(t){return!!(t&&t.__v_isRef===!0)}function er(t){return hl(t,!1)}function af(t){return hl(t,!0)}function hl(t,e){return Ve(t)?t:new cf(t,e)}class cf{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ie(e),this._value=n?e:dr(e)}get value(){return fl(this),this._value}set value(e){const n=this.__v_isShallow||ao(e)||$n(e);e=n?e:ie(e),qt(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:dr(e),Xr(this,4))}}function In(t){return Ve(t)?t.value:t}const lf={get:(t,e,n)=>In(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const o=t[e];return Ve(o)&&!Ve(n)?(o.value=n,!0):Reflect.set(t,e,n,r)}};function pl(t){return En(t)?t:new Proxy(t,lf)}/**
* @vue/runtime-core v3.4.19
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Wt(t,e,n,r){try{return r?t(...r):t()}catch(o){Ao(o,e,n)}}function qe(t,e,n,r){if(q(t)){const s=Wt(t,e,n,r);return s&&Wc(s)&&s.catch(i=>{Ao(i,e,n)}),s}const o=[];for(let s=0;s<t.length;s++)o.push(qe(t[s],e,n,r));return o}function Ao(t,e,n,r=!0){const o=e?e.vnode:null;if(e){let s=e.parent;const i=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;for(;s;){const l=s.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,i,a)===!1)return}s=s.parent}const c=e.appContext.config.errorHandler;if(c){Wt(c,null,10,[t,i,a]);return}}uf(t,n,o,r)}function uf(t,e,n,r=!0){console.error(t)}let fr=!1,_s=!1;const $e=[];let ut=0;const Pn=[];let Lt=null,en=0;const gl=Promise.resolve();let ci=null;function li(t){const e=ci||gl;return t?e.then(this?t.bind(this):t):e}function df(t){let e=ut+1,n=$e.length;for(;e<n;){const r=e+n>>>1,o=$e[r],s=hr(o);s<t||s===t&&o.pre?e=r+1:n=r}return e}function ui(t){(!$e.length||!$e.includes(t,fr&&t.allowRecurse?ut+1:ut))&&(t.id==null?$e.push(t):$e.splice(df(t.id),0,t),ml())}function ml(){!fr&&!_s&&(_s=!0,ci=gl.then(vl))}function ff(t){const e=$e.indexOf(t);e>ut&&$e.splice(e,1)}function hf(t){V(t)?Pn.push(...t):(!Lt||!Lt.includes(t,t.allowRecurse?en+1:en))&&Pn.push(t),ml()}function Ji(t,e,n=fr?ut+1:0){for(;n<$e.length;n++){const r=$e[n];if(r&&r.pre){if(t&&r.id!==t.uid)continue;$e.splice(n,1),n--,r()}}}function bl(t){if(Pn.length){const e=[...new Set(Pn)].sort((n,r)=>hr(n)-hr(r));if(Pn.length=0,Lt){Lt.push(...e);return}for(Lt=e,en=0;en<Lt.length;en++)Lt[en]();Lt=null,en=0}}const hr=t=>t.id==null?1/0:t.id,pf=(t,e)=>{const n=hr(t)-hr(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function vl(t){_s=!1,fr=!0,$e.sort(pf);try{for(ut=0;ut<$e.length;ut++){const e=$e[ut];e&&e.active!==!1&&Wt(e,null,14)}}finally{ut=0,$e.length=0,bl(),fr=!1,ci=null,($e.length||Pn.length)&&vl()}}function gf(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||he;let o=n;const s=e.startsWith("update:"),i=s&&e.slice(7);if(i&&i in r){const u=`${i==="modelValue"?"model":i}Modifiers`,{number:d,trim:f}=r[u]||he;f&&(o=n.map(g=>ye(g)?g.trim():g)),d&&(o=n.map(kd))}let a,c=r[a=Ho(e)]||r[a=Ho(ht(e))];!c&&s&&(c=r[a=Ho(Fn(e))]),c&&qe(c,t,6,o);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,qe(l,t,6,o)}}function yl(t,e,n=!1){const r=e.emitsCache,o=r.get(t);if(o!==void 0)return o;const s=t.emits;let i={},a=!1;if(!q(t)){const c=l=>{const u=yl(l,e,!0);u&&(a=!0,we(i,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!s&&!a?(pe(t)&&r.set(t,null),null):(V(s)?s.forEach(c=>i[c]=null):we(i,s),pe(t)&&r.set(t,i),i)}function Ro(t,e){return!t||!To(e)?!1:(e=e.slice(2).replace(/Once$/,""),ne(t,e[0].toLowerCase()+e.slice(1))||ne(t,Fn(e))||ne(t,e))}let Se=null,_l=null;function co(t){const e=Se;return Se=t,_l=t&&t.type.__scopeId||null,e}function pr(t,e=Se,n){if(!e||t._n)return t;const r=(...o)=>{r._d&&ca(-1);const s=co(e);let i;try{i=t(...o)}finally{co(s),r._d&&ca(1)}return i};return r._n=!0,r._c=!0,r._d=!0,r}function Ko(t){const{type:e,vnode:n,proxy:r,withProxy:o,props:s,propsOptions:[i],slots:a,attrs:c,emit:l,render:u,renderCache:d,data:f,setupState:g,ctx:m,inheritAttrs:S}=t;let P,C;const v=co(t);try{if(n.shapeFlag&4){const M=o||r,F=M;P=lt(u.call(F,M,d,s,g,f,m)),C=c}else{const M=e;P=lt(M.length>1?M(s,{attrs:c,slots:a,emit:l}):M(s,null)),C=e.props?c:mf(c)}}catch(M){sr.length=0,Ao(M,t,1),P=Pe(It)}let E=P;if(C&&S!==!1){const M=Object.keys(C),{shapeFlag:F}=E;M.length&&F&7&&(i&&M.some(Zs)&&(C=bf(C,i)),E=ln(E,C))}return n.dirs&&(E=ln(E),E.dirs=E.dirs?E.dirs.concat(n.dirs):n.dirs),n.transition&&(E.transition=n.transition),P=E,co(v),P}const mf=t=>{let e;for(const n in t)(n==="class"||n==="style"||To(n))&&((e||(e={}))[n]=t[n]);return e},bf=(t,e)=>{const n={};for(const r in t)(!Zs(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function vf(t,e,n){const{props:r,children:o,component:s}=t,{props:i,children:a,patchFlag:c}=e,l=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Yi(r,i,l):!!i;if(c&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const f=u[d];if(i[f]!==r[f]&&!Ro(l,f))return!0}}}else return(o||a)&&(!a||!a.$stable)?!0:r===i?!1:r?i?Yi(r,i,l):!0:!!i;return!1}function Yi(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let o=0;o<r.length;o++){const s=r[o];if(e[s]!==t[s]&&!Ro(n,s))return!0}return!1}function yf({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const di="components",_f="directives";function xn(t,e){return fi(di,t,!0,e)||t}const wl=Symbol.for("v-ndc");function _n(t){return ye(t)?fi(di,t,!1)||t:t||wl}function Sl(t){return fi(_f,t)}function fi(t,e,n=!0,r=!1){const o=Se||Ie;if(o){const s=o.type;if(t===di){const a=mh(s,!1);if(a&&(a===e||a===ht(e)||a===Po(ht(e))))return s}const i=Zi(o[t]||s[t],e)||Zi(o.appContext[t],e);return!i&&r?s:i}}function Zi(t,e){return t&&(t[e]||t[ht(e)]||t[Po(ht(e))])}const wf=t=>t.__isSuspense;function Sf(t,e){e&&e.pendingBranch?V(t)?e.effects.push(...t):e.effects.push(t):hf(t)}const Cf=Symbol.for("v-scx"),Tf=()=>Et(Cf),Wr={};function vt(t,e,n){return Cl(t,e,n)}function Cl(t,e,{immediate:n,deep:r,flush:o,once:s,onTrack:i,onTrigger:a}=he){if(e&&s){const $=e;e=(...K)=>{$(...K),F()}}const c=Ie,l=$=>r===!0?$:nn($,r===!1?1:void 0);let u,d=!1,f=!1;if(Ve(t)?(u=()=>t.value,d=ao(t)):En(t)?(u=()=>l(t),d=!0):V(t)?(f=!0,d=t.some($=>En($)||ao($)),u=()=>t.map($=>{if(Ve($))return $.value;if(En($))return l($);if(q($))return Wt($,c,2)})):q(t)?e?u=()=>Wt(t,c,2):u=()=>(g&&g(),qe(t,c,3,[m])):u=Ge,e&&r){const $=u;u=()=>nn($())}let g,m=$=>{g=E.onStop=()=>{Wt($,c,4),g=E.onStop=void 0}},S;if(Lo)if(m=Ge,e?n&&qe(e,c,3,[u(),f?[]:void 0,m]):u(),o==="sync"){const $=Tf();S=$.__watcherHandles||($.__watcherHandles=[])}else return Ge;let P=f?new Array(t.length).fill(Wr):Wr;const C=()=>{if(!(!E.active||!E.dirty))if(e){const $=E.run();(r||d||(f?$.some((K,D)=>qt(K,P[D])):qt($,P)))&&(g&&g(),qe(e,c,3,[$,P===Wr?void 0:f&&P[0]===Wr?[]:P,m]),P=$)}else E.run()};C.allowRecurse=!!e;let v;o==="sync"?v=C:o==="post"?v=()=>je(C,c&&c.suspense):(C.pre=!0,c&&(C.id=c.uid),v=()=>ui(C));const E=new ei(u,Ge,v),M=Ud(),F=()=>{E.stop(),M&&Xs(M.effects,E)};return e?n?C():P=E.run():o==="post"?je(E.run.bind(E),c&&c.suspense):E.run(),S&&S.push(F),F}function Ef(t,e,n){const r=this.proxy,o=ye(t)?t.includes(".")?Tl(r,t):()=>r[t]:t.bind(r,r);let s;q(e)?s=e:(s=e.handler,n=e);const i=$r(this),a=Cl(o,s.bind(r),n);return i(),a}function Tl(t,e){const n=e.split(".");return()=>{let r=t;for(let o=0;o<n.length&&r;o++)r=r[n[o]];return r}}function nn(t,e,n=0,r){if(!pe(t)||t.__v_skip)return t;if(e&&e>0){if(n>=e)return t;n++}if(r=r||new Set,r.has(t))return t;if(r.add(t),Ve(t))nn(t.value,e,n,r);else if(V(t))for(let o=0;o<t.length;o++)nn(t[o],e,n,r);else if(zc(t)||Tn(t))t.forEach(o=>{nn(o,e,n,r)});else if(Gc(t))for(const o in t)nn(t[o],e,n,r);return t}function El(t,e){if(Se===null)return t;const n=Mo(Se)||Se.proxy,r=t.dirs||(t.dirs=[]);for(let o=0;o<e.length;o++){let[s,i,a,c=he]=e[o];s&&(q(s)&&(s={mounted:s,updated:s}),s.deep&&nn(i),r.push({dir:s,instance:n,value:i,oldValue:void 0,arg:a,modifiers:c}))}return t}function Yt(t,e,n,r){const o=t.dirs,s=e&&e.dirs;for(let i=0;i<o.length;i++){const a=o[i];s&&(a.oldValue=s[i].value);let c=a.dir[r];c&&(fn(),qe(c,n,8,[t.el,a,t,e]),hn())}}const bn=Symbol("_leaveCb"),Kr=Symbol("_enterCb");function If(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return hi(()=>{t.isMounted=!0}),Rl(()=>{t.isUnmounting=!0}),t}const We=[Function,Array],Pf={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:We,onEnter:We,onAfterEnter:We,onEnterCancelled:We,onBeforeLeave:We,onLeave:We,onAfterLeave:We,onLeaveCancelled:We,onBeforeAppear:We,onAppear:We,onAfterAppear:We,onAppearCancelled:We};function kf(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function ws(t,e,n,r){const{appear:o,mode:s,persisted:i=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:d,onLeave:f,onAfterLeave:g,onLeaveCancelled:m,onBeforeAppear:S,onAppear:P,onAfterAppear:C,onAppearCancelled:v}=e,E=String(t.key),M=kf(n,t),F=(D,z)=>{D&&qe(D,r,9,z)},$=(D,z)=>{const G=z[1];F(D,z),V(D)?D.every(re=>re.length<=1)&&G():D.length<=1&&G()},K={mode:s,persisted:i,beforeEnter(D){let z=a;if(!n.isMounted)if(o)z=S||a;else return;D[bn]&&D[bn](!0);const G=M[E];G&&vn(t,G)&&G.el[bn]&&G.el[bn](),F(z,[D])},enter(D){let z=c,G=l,re=u;if(!n.isMounted)if(o)z=P||c,G=C||l,re=v||u;else return;let L=!1;const ee=D[Kr]=_e=>{L||(L=!0,_e?F(re,[D]):F(G,[D]),K.delayedLeave&&K.delayedLeave(),D[Kr]=void 0)};z?$(z,[D,ee]):ee()},leave(D,z){const G=String(t.key);if(D[Kr]&&D[Kr](!0),n.isUnmounting)return z();F(d,[D]);let re=!1;const L=D[bn]=ee=>{re||(re=!0,z(),ee?F(m,[D]):F(g,[D]),D[bn]=void 0,M[G]===t&&delete M[G])};M[G]=t,f?$(f,[D,L]):L()},clone(D){return ws(D,e,n,r)}};return K}function Ss(t,e){t.shapeFlag&6&&t.component?Ss(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Il(t,e=!1,n){let r=[],o=0;for(let s=0;s<t.length;s++){let i=t[s];const a=n==null?i.key:String(n)+String(i.key!=null?i.key:s);i.type===Me?(i.patchFlag&128&&o++,r=r.concat(Il(i.children,e,a))):(e||i.type!==It)&&r.push(a!=null?ln(i,{key:a}):i)}if(o>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function Pl(t,e){return q(t)?we({name:t.name},e,{setup:t}):t}const tr=t=>!!t.type.__asyncLoader,kl=t=>t.type.__isKeepAlive;function Of(t,e){Ol(t,"a",e)}function Af(t,e){Ol(t,"da",e)}function Ol(t,e,n=Ie){const r=t.__wdc||(t.__wdc=()=>{let o=n;for(;o;){if(o.isDeactivated)return;o=o.parent}return t()});if($o(e,r,n),n){let o=n.parent;for(;o&&o.parent;)kl(o.parent.vnode)&&Rf(r,e,n,o),o=o.parent}}function Rf(t,e,n,r){const o=$o(e,t,r,!0);$l(()=>{Xs(r[e],o)},n)}function $o(t,e,n=Ie,r=!1){if(n){const o=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...i)=>{if(n.isUnmounted)return;fn();const a=$r(n),c=qe(e,n,t,i);return a(),hn(),c});return r?o.unshift(s):o.push(s),s}}const kt=t=>(e,n=Ie)=>(!Lo||t==="sp")&&$o(t,(...r)=>e(...r),n),$f=kt("bm"),hi=kt("m"),xf=kt("bu"),Al=kt("u"),Rl=kt("bum"),$l=kt("um"),Nf=kt("sp"),Lf=kt("rtg"),Mf=kt("rtc");function Df(t,e=Ie){$o("ec",t,e)}function jf(t,e,n,r){let o;const s=n&&n[r];if(V(t)||ye(t)){o=new Array(t.length);for(let i=0,a=t.length;i<a;i++)o[i]=e(t[i],i,void 0,s&&s[i])}else if(typeof t=="number"){o=new Array(t);for(let i=0;i<t;i++)o[i]=e(i+1,i,void 0,s&&s[i])}else if(pe(t))if(t[Symbol.iterator])o=Array.from(t,(i,a)=>e(i,a,void 0,s&&s[a]));else{const i=Object.keys(t);o=new Array(i.length);for(let a=0,c=i.length;a<c;a++){const l=i[a];o[a]=e(t[l],l,a,s&&s[a])}}else o=[];return n&&(n[r]=o),o}function Ht(t,e,n={},r,o){if(Se.isCE||Se.parent&&tr(Se.parent)&&Se.parent.isCE)return e!=="default"&&(n.name=e),Pe("slot",n,r&&r());let s=t[e];s&&s._c&&(s._d=!1),se();const i=s&&xl(s(n)),a=Ue(Me,{key:n.key||i&&i.key||`_${e}`},i||(r?r():[]),i&&t._===1?64:-2);return!o&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),s&&s._c&&(s._d=!0),a}function xl(t){return t.some(e=>uo(e)?!(e.type===It||e.type===Me&&!xl(e.children)):!0)?t:null}const Cs=t=>t?Gl(t)?Mo(t)||t.proxy:Cs(t.parent):null,nr=we(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Cs(t.parent),$root:t=>Cs(t.root),$emit:t=>t.emit,$options:t=>pi(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,ui(t.update)}),$nextTick:t=>t.n||(t.n=li.bind(t.proxy)),$watch:t=>Ef.bind(t)}),Go=(t,e)=>t!==he&&!t.__isScriptSetup&&ne(t,e),Uf={get({_:t},e){const{ctx:n,setupState:r,data:o,props:s,accessCache:i,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const g=i[e];if(g!==void 0)switch(g){case 1:return r[e];case 2:return o[e];case 4:return n[e];case 3:return s[e]}else{if(Go(r,e))return i[e]=1,r[e];if(o!==he&&ne(o,e))return i[e]=2,o[e];if((l=t.propsOptions[0])&&ne(l,e))return i[e]=3,s[e];if(n!==he&&ne(n,e))return i[e]=4,n[e];Ts&&(i[e]=0)}}const u=nr[e];let d,f;if(u)return e==="$attrs"&&Fe(t,"get",e),u(t);if((d=a.__cssModules)&&(d=d[e]))return d;if(n!==he&&ne(n,e))return i[e]=4,n[e];if(f=c.config.globalProperties,ne(f,e))return f[e]},set({_:t},e,n){const{data:r,setupState:o,ctx:s}=t;return Go(o,e)?(o[e]=n,!0):r!==he&&ne(r,e)?(r[e]=n,!0):ne(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:o,propsOptions:s}},i){let a;return!!n[i]||t!==he&&ne(t,i)||Go(e,i)||(a=s[0])&&ne(a,i)||ne(r,i)||ne(nr,i)||ne(o.config.globalProperties,i)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ne(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Xi(t){return V(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Ts=!0;function Bf(t){const e=pi(t),n=t.proxy,r=t.ctx;Ts=!1,e.beforeCreate&&Qi(e.beforeCreate,t,"bc");const{data:o,computed:s,methods:i,watch:a,provide:c,inject:l,created:u,beforeMount:d,mounted:f,beforeUpdate:g,updated:m,activated:S,deactivated:P,beforeDestroy:C,beforeUnmount:v,destroyed:E,unmounted:M,render:F,renderTracked:$,renderTriggered:K,errorCaptured:D,serverPrefetch:z,expose:G,inheritAttrs:re,components:L,directives:ee,filters:_e}=e;if(l&&Ff(l,r,null),i)for(const te in i){const Z=i[te];q(Z)&&(r[te]=Z.bind(n))}if(o){const te=o.call(n,n);pe(te)&&(t.data=Rr(te))}if(Ts=!0,s)for(const te in s){const Z=s[te],He=q(Z)?Z.bind(n,n):q(Z.get)?Z.get.bind(n,n):Ge,Ne=!q(Z)&&q(Z.set)?Z.set.bind(n):Ge,ke=et({get:He,set:Ne});Object.defineProperty(r,te,{enumerable:!0,configurable:!0,get:()=>ke.value,set:Ee=>ke.value=Ee})}if(a)for(const te in a)Nl(a[te],r,n,te);if(c){const te=q(c)?c.call(n):c;Reflect.ownKeys(te).forEach(Z=>{Qr(Z,te[Z])})}u&&Qi(u,t,"c");function fe(te,Z){V(Z)?Z.forEach(He=>te(He.bind(n))):Z&&te(Z.bind(n))}if(fe($f,d),fe(hi,f),fe(xf,g),fe(Al,m),fe(Of,S),fe(Af,P),fe(Df,D),fe(Mf,$),fe(Lf,K),fe(Rl,v),fe($l,M),fe(Nf,z),V(G))if(G.length){const te=t.exposed||(t.exposed={});G.forEach(Z=>{Object.defineProperty(te,Z,{get:()=>n[Z],set:He=>n[Z]=He})})}else t.exposed||(t.exposed={});F&&t.render===Ge&&(t.render=F),re!=null&&(t.inheritAttrs=re),L&&(t.components=L),ee&&(t.directives=ee)}function Ff(t,e,n=Ge){V(t)&&(t=Es(t));for(const r in t){const o=t[r];let s;pe(o)?"default"in o?s=Et(o.from||r,o.default,!0):s=Et(o.from||r):s=Et(o),Ve(s)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>s.value,set:i=>s.value=i}):e[r]=s}}function Qi(t,e,n){qe(V(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Nl(t,e,n,r){const o=r.includes(".")?Tl(n,r):()=>n[r];if(ye(t)){const s=e[t];q(s)&&vt(o,s)}else if(q(t))vt(o,t.bind(n));else if(pe(t))if(V(t))t.forEach(s=>Nl(s,e,n,r));else{const s=q(t.handler)?t.handler.bind(n):e[t.handler];q(s)&&vt(o,s,t)}}function pi(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:o,optionsCache:s,config:{optionMergeStrategies:i}}=t.appContext,a=s.get(e);let c;return a?c=a:!o.length&&!n&&!r?c=e:(c={},o.length&&o.forEach(l=>lo(c,l,i,!0)),lo(c,e,i)),pe(e)&&s.set(e,c),c}function lo(t,e,n,r=!1){const{mixins:o,extends:s}=e;s&&lo(t,s,n,!0),o&&o.forEach(i=>lo(t,i,n,!0));for(const i in e)if(!(r&&i==="expose")){const a=Vf[i]||n&&n[i];t[i]=a?a(t[i],e[i]):e[i]}return t}const Vf={data:ea,props:ta,emits:ta,methods:Zn,computed:Zn,beforeCreate:Le,created:Le,beforeMount:Le,mounted:Le,beforeUpdate:Le,updated:Le,beforeDestroy:Le,beforeUnmount:Le,destroyed:Le,unmounted:Le,activated:Le,deactivated:Le,errorCaptured:Le,serverPrefetch:Le,components:Zn,directives:Zn,watch:zf,provide:ea,inject:Hf};function ea(t,e){return e?t?function(){return we(q(t)?t.call(this,this):t,q(e)?e.call(this,this):e)}:e:t}function Hf(t,e){return Zn(Es(t),Es(e))}function Es(t){if(V(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Le(t,e){return t?[...new Set([].concat(t,e))]:e}function Zn(t,e){return t?we(Object.create(null),t,e):e}function ta(t,e){return t?V(t)&&V(e)?[...new Set([...t,...e])]:we(Object.create(null),Xi(t),Xi(e??{})):e}function zf(t,e){if(!t)return e;if(!e)return t;const n=we(Object.create(null),t);for(const r in e)n[r]=Le(t[r],e[r]);return n}function Ll(){return{app:null,config:{isNativeTag:Cd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Wf=0;function Kf(t,e){return function(r,o=null){q(r)||(r=we({},r)),o!=null&&!pe(o)&&(o=null);const s=Ll(),i=new WeakSet;let a=!1;const c=s.app={_uid:Wf++,_component:r,_props:o,_container:null,_context:s,_instance:null,version:vh,get config(){return s.config},set config(l){},use(l,...u){return i.has(l)||(l&&q(l.install)?(i.add(l),l.install(c,...u)):q(l)&&(i.add(l),l(c,...u))),c},mixin(l){return s.mixins.includes(l)||s.mixins.push(l),c},component(l,u){return u?(s.components[l]=u,c):s.components[l]},directive(l,u){return u?(s.directives[l]=u,c):s.directives[l]},mount(l,u,d){if(!a){const f=Pe(r,o);return f.appContext=s,d===!0?d="svg":d===!1&&(d=void 0),u&&e?e(f,l):t(f,l,d),a=!0,c._container=l,l.__vue_app__=c,Mo(f.component)||f.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return s.provides[l]=u,c},runWithContext(l){const u=rr;rr=c;try{return l()}finally{rr=u}}};return c}}let rr=null;function Qr(t,e){if(Ie){let n=Ie.provides;const r=Ie.parent&&Ie.parent.provides;r===n&&(n=Ie.provides=Object.create(r)),n[t]=e}}function Et(t,e,n=!1){const r=Ie||Se;if(r||rr){const o=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:rr._context.provides;if(o&&t in o)return o[t];if(arguments.length>1)return n&&q(e)?e.call(r&&r.proxy):e}}function Gf(t,e,n,r=!1){const o={},s={};io(s,No,1),t.propsDefaults=Object.create(null),Ml(t,e,o,s);for(const i in t.propsOptions[0])i in o||(o[i]=void 0);n?t.props=r?o:cl(o):t.type.props?t.props=o:t.props=s,t.attrs=s}function qf(t,e,n,r){const{props:o,attrs:s,vnode:{patchFlag:i}}=t,a=ie(o),[c]=t.propsOptions;let l=!1;if((r||i>0)&&!(i&16)){if(i&8){const u=t.vnode.dynamicProps;for(let d=0;d<u.length;d++){let f=u[d];if(Ro(t.emitsOptions,f))continue;const g=e[f];if(c)if(ne(s,f))g!==s[f]&&(s[f]=g,l=!0);else{const m=ht(f);o[m]=Is(c,a,m,g,t,!1)}else g!==s[f]&&(s[f]=g,l=!0)}}}else{Ml(t,e,o,s)&&(l=!0);let u;for(const d in a)(!e||!ne(e,d)&&((u=Fn(d))===d||!ne(e,u)))&&(c?n&&(n[d]!==void 0||n[u]!==void 0)&&(o[d]=Is(c,a,d,void 0,t,!0)):delete o[d]);if(s!==a)for(const d in s)(!e||!ne(e,d))&&(delete s[d],l=!0)}l&&Tt(t,"set","$attrs")}function Ml(t,e,n,r){const[o,s]=t.propsOptions;let i=!1,a;if(e)for(let c in e){if(Qn(c))continue;const l=e[c];let u;o&&ne(o,u=ht(c))?!s||!s.includes(u)?n[u]=l:(a||(a={}))[u]=l:Ro(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,i=!0)}if(s){const c=ie(n),l=a||he;for(let u=0;u<s.length;u++){const d=s[u];n[d]=Is(o,c,d,l[d],t,!ne(l,d))}}return i}function Is(t,e,n,r,o,s){const i=t[n];if(i!=null){const a=ne(i,"default");if(a&&r===void 0){const c=i.default;if(i.type!==Function&&!i.skipFactory&&q(c)){const{propsDefaults:l}=o;if(n in l)r=l[n];else{const u=$r(o);r=l[n]=c.call(null,e),u()}}else r=c}i[0]&&(s&&!a?r=!1:i[1]&&(r===""||r===Fn(n))&&(r=!0))}return r}function Dl(t,e,n=!1){const r=e.propsCache,o=r.get(t);if(o)return o;const s=t.props,i={},a=[];let c=!1;if(!q(t)){const u=d=>{c=!0;const[f,g]=Dl(d,e,!0);we(i,f),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!c)return pe(t)&&r.set(t,Cn),Cn;if(V(s))for(let u=0;u<s.length;u++){const d=ht(s[u]);na(d)&&(i[d]=he)}else if(s)for(const u in s){const d=ht(u);if(na(d)){const f=s[u],g=i[d]=V(f)||q(f)?{type:f}:we({},f);if(g){const m=sa(Boolean,g.type),S=sa(String,g.type);g[0]=m>-1,g[1]=S<0||m<S,(m>-1||ne(g,"default"))&&a.push(d)}}}const l=[i,a];return pe(t)&&r.set(t,l),l}function na(t){return t[0]!=="$"&&!Qn(t)}function ra(t){return t===null?"null":typeof t=="function"?t.name||"":typeof t=="object"&&t.constructor&&t.constructor.name||""}function oa(t,e){return ra(t)===ra(e)}function sa(t,e){return V(e)?e.findIndex(n=>oa(n,t)):q(e)&&oa(e,t)?0:-1}const jl=t=>t[0]==="_"||t==="$stable",gi=t=>V(t)?t.map(lt):[lt(t)],Jf=(t,e,n)=>{if(e._n)return e;const r=pr((...o)=>gi(e(...o)),n);return r._c=!1,r},Ul=(t,e,n)=>{const r=t._ctx;for(const o in t){if(jl(o))continue;const s=t[o];if(q(s))e[o]=Jf(o,s,r);else if(s!=null){const i=gi(s);e[o]=()=>i}}},Bl=(t,e)=>{const n=gi(e);t.slots.default=()=>n},Yf=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ie(e),io(e,"_",n)):Ul(e,t.slots={})}else t.slots={},e&&Bl(t,e);io(t.slots,No,1)},Zf=(t,e,n)=>{const{vnode:r,slots:o}=t;let s=!0,i=he;if(r.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:(we(o,e),!n&&a===1&&delete o._):(s=!e.$stable,Ul(e,o)),i=e}else e&&(Bl(t,e),i={default:1});if(s)for(const a in o)!jl(a)&&i[a]==null&&delete o[a]};function Ps(t,e,n,r,o=!1){if(V(t)){t.forEach((f,g)=>Ps(f,e&&(V(e)?e[g]:e),n,r,o));return}if(tr(r)&&!o)return;const s=r.shapeFlag&4?Mo(r.component)||r.component.proxy:r.el,i=o?null:s,{i:a,r:c}=t,l=e&&e.r,u=a.refs===he?a.refs={}:a.refs,d=a.setupState;if(l!=null&&l!==c&&(ye(l)?(u[l]=null,ne(d,l)&&(d[l]=null)):Ve(l)&&(l.value=null)),q(c))Wt(c,a,12,[i,u]);else{const f=ye(c),g=Ve(c);if(f||g){const m=()=>{if(t.f){const S=f?ne(d,c)?d[c]:u[c]:c.value;o?V(S)&&Xs(S,s):V(S)?S.includes(s)||S.push(s):f?(u[c]=[s],ne(d,c)&&(d[c]=u[c])):(c.value=[s],t.k&&(u[t.k]=c.value))}else f?(u[c]=i,ne(d,c)&&(d[c]=i)):g&&(c.value=i,t.k&&(u[t.k]=i))};i?(m.id=-1,je(m,n)):m()}}}const je=Sf;function Xf(t){return Qf(t)}function Qf(t,e){const n=qc();n.__VUE__=!0;const{insert:r,remove:o,patchProp:s,createElement:i,createText:a,createComment:c,setText:l,setElementText:u,parentNode:d,nextSibling:f,setScopeId:g=Ge,insertStaticContent:m}=t,S=(h,p,b,w=null,y=null,k=null,R=void 0,I=null,O=!!p.dynamicChildren)=>{if(h===p)return;h&&!vn(h,p)&&(w=_(h),Ee(h,y,k,!0),h=null),p.patchFlag===-2&&(O=!1,p.dynamicChildren=null);const{type:T,ref:N,shapeFlag:B}=p;switch(T){case xo:P(h,p,b,w);break;case It:C(h,p,b,w);break;case Jo:h==null&&v(p,b,w,R);break;case Me:L(h,p,b,w,y,k,R,I,O);break;default:B&1?F(h,p,b,w,y,k,R,I,O):B&6?ee(h,p,b,w,y,k,R,I,O):(B&64||B&128)&&T.process(h,p,b,w,y,k,R,I,O,j)}N!=null&&y&&Ps(N,h&&h.ref,k,p||h,!p)},P=(h,p,b,w)=>{if(h==null)r(p.el=a(p.children),b,w);else{const y=p.el=h.el;p.children!==h.children&&l(y,p.children)}},C=(h,p,b,w)=>{h==null?r(p.el=c(p.children||""),b,w):p.el=h.el},v=(h,p,b,w)=>{[h.el,h.anchor]=m(h.children,p,b,w,h.el,h.anchor)},E=({el:h,anchor:p},b,w)=>{let y;for(;h&&h!==p;)y=f(h),r(h,b,w),h=y;r(p,b,w)},M=({el:h,anchor:p})=>{let b;for(;h&&h!==p;)b=f(h),o(h),h=b;o(p)},F=(h,p,b,w,y,k,R,I,O)=>{p.type==="svg"?R="svg":p.type==="math"&&(R="mathml"),h==null?$(p,b,w,y,k,R,I,O):z(h,p,y,k,R,I,O)},$=(h,p,b,w,y,k,R,I)=>{let O,T;const{props:N,shapeFlag:B,transition:U,dirs:W}=h;if(O=h.el=i(h.type,k,N&&N.is,N),B&8?u(O,h.children):B&16&&D(h.children,O,null,w,y,qo(h,k),R,I),W&&Yt(h,null,w,"created"),K(O,h,h.scopeId,R,w),N){for(const le in N)le!=="value"&&!Qn(le)&&s(O,le,null,N[le],k,h.children,w,y,Oe);"value"in N&&s(O,"value",null,N.value,k),(T=N.onVnodeBeforeMount)&&at(T,w,h)}W&&Yt(h,null,w,"beforeMount");const Y=eh(y,U);Y&&U.beforeEnter(O),r(O,p,b),((T=N&&N.onVnodeMounted)||Y||W)&&je(()=>{T&&at(T,w,h),Y&&U.enter(O),W&&Yt(h,null,w,"mounted")},y)},K=(h,p,b,w,y)=>{if(b&&g(h,b),w)for(let k=0;k<w.length;k++)g(h,w[k]);if(y){let k=y.subTree;if(p===k){const R=y.vnode;K(h,R,R.scopeId,R.slotScopeIds,y.parent)}}},D=(h,p,b,w,y,k,R,I,O=0)=>{for(let T=O;T<h.length;T++){const N=h[T]=I?Mt(h[T]):lt(h[T]);S(null,N,p,b,w,y,k,R,I)}},z=(h,p,b,w,y,k,R)=>{const I=p.el=h.el;let{patchFlag:O,dynamicChildren:T,dirs:N}=p;O|=h.patchFlag&16;const B=h.props||he,U=p.props||he;let W;if(b&&Zt(b,!1),(W=U.onVnodeBeforeUpdate)&&at(W,b,p,h),N&&Yt(p,h,b,"beforeUpdate"),b&&Zt(b,!0),T?G(h.dynamicChildren,T,I,b,w,qo(p,y),k):R||Z(h,p,I,null,b,w,qo(p,y),k,!1),O>0){if(O&16)re(I,p,B,U,b,w,y);else if(O&2&&B.class!==U.class&&s(I,"class",null,U.class,y),O&4&&s(I,"style",B.style,U.style,y),O&8){const Y=p.dynamicProps;for(let le=0;le<Y.length;le++){const me=Y[le],Ce=B[me],Je=U[me];(Je!==Ce||me==="value")&&s(I,me,Ce,Je,y,h.children,b,w,Oe)}}O&1&&h.children!==p.children&&u(I,p.children)}else!R&&T==null&&re(I,p,B,U,b,w,y);((W=U.onVnodeUpdated)||N)&&je(()=>{W&&at(W,b,p,h),N&&Yt(p,h,b,"updated")},w)},G=(h,p,b,w,y,k,R)=>{for(let I=0;I<p.length;I++){const O=h[I],T=p[I],N=O.el&&(O.type===Me||!vn(O,T)||O.shapeFlag&70)?d(O.el):b;S(O,T,N,null,w,y,k,R,!0)}},re=(h,p,b,w,y,k,R)=>{if(b!==w){if(b!==he)for(const I in b)!Qn(I)&&!(I in w)&&s(h,I,b[I],null,R,p.children,y,k,Oe);for(const I in w){if(Qn(I))continue;const O=w[I],T=b[I];O!==T&&I!=="value"&&s(h,I,T,O,R,p.children,y,k,Oe)}"value"in w&&s(h,"value",b.value,w.value,R)}},L=(h,p,b,w,y,k,R,I,O)=>{const T=p.el=h?h.el:a(""),N=p.anchor=h?h.anchor:a("");let{patchFlag:B,dynamicChildren:U,slotScopeIds:W}=p;W&&(I=I?I.concat(W):W),h==null?(r(T,b,w),r(N,b,w),D(p.children||[],b,N,y,k,R,I,O)):B>0&&B&64&&U&&h.dynamicChildren?(G(h.dynamicChildren,U,b,y,k,R,I),(p.key!=null||y&&p===y.subTree)&&mi(h,p,!0)):Z(h,p,b,N,y,k,R,I,O)},ee=(h,p,b,w,y,k,R,I,O)=>{p.slotScopeIds=I,h==null?p.shapeFlag&512?y.ctx.activate(p,b,w,R,O):_e(p,b,w,y,k,R,O):De(h,p,O)},_e=(h,p,b,w,y,k,R)=>{const I=h.component=dh(h,w,y);if(kl(h)&&(I.ctx.renderer=j),fh(I),I.asyncDep){if(y&&y.registerDep(I,fe),!h.el){const O=I.subTree=Pe(It);C(null,O,p,b)}}else fe(I,h,p,b,y,k,R)},De=(h,p,b)=>{const w=p.component=h.component;if(vf(h,p,b))if(w.asyncDep&&!w.asyncResolved){te(w,p,b);return}else w.next=p,ff(w.update),w.effect.dirty=!0,w.update();else p.el=h.el,w.vnode=p},fe=(h,p,b,w,y,k,R)=>{const I=()=>{if(h.isMounted){let{next:N,bu:B,u:U,parent:W,vnode:Y}=h;{const mn=Fl(h);if(mn){N&&(N.el=Y.el,te(h,N,R)),mn.asyncDep.then(()=>{h.isUnmounted||I()});return}}let le=N,me;Zt(h,!1),N?(N.el=Y.el,te(h,N,R)):N=Y,B&&zo(B),(me=N.props&&N.props.onVnodeBeforeUpdate)&&at(me,W,N,Y),Zt(h,!0);const Ce=Ko(h),Je=h.subTree;h.subTree=Ce,S(Je,Ce,d(Je.el),_(Je),h,y,k),N.el=Ce.el,le===null&&yf(h,Ce.el),U&&je(U,y),(me=N.props&&N.props.onVnodeUpdated)&&je(()=>at(me,W,N,Y),y)}else{let N;const{el:B,props:U}=p,{bm:W,m:Y,parent:le}=h,me=tr(p);if(Zt(h,!1),W&&zo(W),!me&&(N=U&&U.onVnodeBeforeMount)&&at(N,le,p),Zt(h,!0),B&&ge){const Ce=()=>{h.subTree=Ko(h),ge(B,h.subTree,h,y,null)};me?p.type.__asyncLoader().then(()=>!h.isUnmounted&&Ce()):Ce()}else{const Ce=h.subTree=Ko(h);S(null,Ce,b,w,h,y,k),p.el=Ce.el}if(Y&&je(Y,y),!me&&(N=U&&U.onVnodeMounted)){const Ce=p;je(()=>at(N,le,Ce),y)}(p.shapeFlag&256||le&&tr(le.vnode)&&le.vnode.shapeFlag&256)&&h.a&&je(h.a,y),h.isMounted=!0,p=b=w=null}},O=h.effect=new ei(I,Ge,()=>ui(T),h.scope),T=h.update=()=>{O.dirty&&O.run()};T.id=h.uid,Zt(h,!0),T()},te=(h,p,b)=>{p.component=h;const w=h.vnode.props;h.vnode=p,h.next=null,qf(h,p.props,w,b),Zf(h,p.children,b),fn(),Ji(h),hn()},Z=(h,p,b,w,y,k,R,I,O=!1)=>{const T=h&&h.children,N=h?h.shapeFlag:0,B=p.children,{patchFlag:U,shapeFlag:W}=p;if(U>0){if(U&128){Ne(T,B,b,w,y,k,R,I,O);return}else if(U&256){He(T,B,b,w,y,k,R,I,O);return}}W&8?(N&16&&Oe(T,y,k),B!==T&&u(b,B)):N&16?W&16?Ne(T,B,b,w,y,k,R,I,O):Oe(T,y,k,!0):(N&8&&u(b,""),W&16&&D(B,b,w,y,k,R,I,O))},He=(h,p,b,w,y,k,R,I,O)=>{h=h||Cn,p=p||Cn;const T=h.length,N=p.length,B=Math.min(T,N);let U;for(U=0;U<B;U++){const W=p[U]=O?Mt(p[U]):lt(p[U]);S(h[U],W,b,null,y,k,R,I,O)}T>N?Oe(h,y,k,!0,!1,B):D(p,b,w,y,k,R,I,O,B)},Ne=(h,p,b,w,y,k,R,I,O)=>{let T=0;const N=p.length;let B=h.length-1,U=N-1;for(;T<=B&&T<=U;){const W=h[T],Y=p[T]=O?Mt(p[T]):lt(p[T]);if(vn(W,Y))S(W,Y,b,null,y,k,R,I,O);else break;T++}for(;T<=B&&T<=U;){const W=h[B],Y=p[U]=O?Mt(p[U]):lt(p[U]);if(vn(W,Y))S(W,Y,b,null,y,k,R,I,O);else break;B--,U--}if(T>B){if(T<=U){const W=U+1,Y=W<N?p[W].el:w;for(;T<=U;)S(null,p[T]=O?Mt(p[T]):lt(p[T]),b,Y,y,k,R,I,O),T++}}else if(T>U)for(;T<=B;)Ee(h[T],y,k,!0),T++;else{const W=T,Y=T,le=new Map;for(T=Y;T<=U;T++){const ze=p[T]=O?Mt(p[T]):lt(p[T]);ze.key!=null&&le.set(ze.key,T)}let me,Ce=0;const Je=U-Y+1;let mn=!1,ji=0;const Kn=new Array(Je);for(T=0;T<Je;T++)Kn[T]=0;for(T=W;T<=B;T++){const ze=h[T];if(Ce>=Je){Ee(ze,y,k,!0);continue}let it;if(ze.key!=null)it=le.get(ze.key);else for(me=Y;me<=U;me++)if(Kn[me-Y]===0&&vn(ze,p[me])){it=me;break}it===void 0?Ee(ze,y,k,!0):(Kn[it-Y]=T+1,it>=ji?ji=it:mn=!0,S(ze,p[it],b,null,y,k,R,I,O),Ce++)}const Ui=mn?th(Kn):Cn;for(me=Ui.length-1,T=Je-1;T>=0;T--){const ze=Y+T,it=p[ze],Bi=ze+1<N?p[ze+1].el:w;Kn[T]===0?S(null,it,b,Bi,y,k,R,I,O):mn&&(me<0||T!==Ui[me]?ke(it,b,Bi,2):me--)}}},ke=(h,p,b,w,y=null)=>{const{el:k,type:R,transition:I,children:O,shapeFlag:T}=h;if(T&6){ke(h.component.subTree,p,b,w);return}if(T&128){h.suspense.move(p,b,w);return}if(T&64){R.move(h,p,b,j);return}if(R===Me){r(k,p,b);for(let B=0;B<O.length;B++)ke(O[B],p,b,w);r(h.anchor,p,b);return}if(R===Jo){E(h,p,b);return}if(w!==2&&T&1&&I)if(w===0)I.beforeEnter(k),r(k,p,b),je(()=>I.enter(k),y);else{const{leave:B,delayLeave:U,afterLeave:W}=I,Y=()=>r(k,p,b),le=()=>{B(k,()=>{Y(),W&&W()})};U?U(k,Y,le):le()}else r(k,p,b)},Ee=(h,p,b,w=!1,y=!1)=>{const{type:k,props:R,ref:I,children:O,dynamicChildren:T,shapeFlag:N,patchFlag:B,dirs:U}=h;if(I!=null&&Ps(I,null,b,h,!0),N&256){p.ctx.deactivate(h);return}const W=N&1&&U,Y=!tr(h);let le;if(Y&&(le=R&&R.onVnodeBeforeUnmount)&&at(le,p,h),N&6)Ur(h.component,b,w);else{if(N&128){h.suspense.unmount(b,w);return}W&&Yt(h,null,p,"beforeUnmount"),N&64?h.type.remove(h,p,b,y,j,w):T&&(k!==Me||B>0&&B&64)?Oe(T,p,b,!1,!0):(k===Me&&B&384||!y&&N&16)&&Oe(O,p,b),w&&Ot(h)}(Y&&(le=R&&R.onVnodeUnmounted)||W)&&je(()=>{le&&at(le,p,h),W&&Yt(h,null,p,"unmounted")},b)},Ot=h=>{const{type:p,el:b,anchor:w,transition:y}=h;if(p===Me){st(b,w);return}if(p===Jo){M(h);return}const k=()=>{o(b),y&&!y.persisted&&y.afterLeave&&y.afterLeave()};if(h.shapeFlag&1&&y&&!y.persisted){const{leave:R,delayLeave:I}=y,O=()=>R(b,k);I?I(h.el,k,O):O()}else k()},st=(h,p)=>{let b;for(;h!==p;)b=f(h),o(h),h=b;o(p)},Ur=(h,p,b)=>{const{bum:w,scope:y,update:k,subTree:R,um:I}=h;w&&zo(w),y.stop(),k&&(k.active=!1,Ee(R,h,p,b)),I&&je(I,p),je(()=>{h.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&h.asyncDep&&!h.asyncResolved&&h.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},Oe=(h,p,b,w=!1,y=!1,k=0)=>{for(let R=k;R<h.length;R++)Ee(h[R],p,b,w,y)},_=h=>h.shapeFlag&6?_(h.component.subTree):h.shapeFlag&128?h.suspense.next():f(h.anchor||h.el);let x=!1;const A=(h,p,b)=>{h==null?p._vnode&&Ee(p._vnode,null,null,!0):S(p._vnode||null,h,p,null,null,null,b),x||(x=!0,Ji(),bl(),x=!1),p._vnode=h},j={p:S,um:Ee,m:ke,r:Ot,mt:_e,mc:D,pc:Z,pbc:G,n:_,o:t};let ae,ge;return e&&([ae,ge]=e(j)),{render:A,hydrate:ae,createApp:Kf(A,ae)}}function qo({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Zt({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function eh(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function mi(t,e,n=!1){const r=t.children,o=e.children;if(V(r)&&V(o))for(let s=0;s<r.length;s++){const i=r[s];let a=o[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=o[s]=Mt(o[s]),a.el=i.el),n||mi(i,a)),a.type===xo&&(a.el=i.el)}}function th(t){const e=t.slice(),n=[0];let r,o,s,i,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(o=n[n.length-1],t[o]<l){e[r]=o,n.push(r);continue}for(s=0,i=n.length-1;s<i;)a=s+i>>1,t[n[a]]<l?s=a+1:i=a;l<t[n[s]]&&(s>0&&(e[r]=n[s-1]),n[s]=r)}}for(s=n.length,i=n[s-1];s-- >0;)n[s]=i,i=e[i];return n}function Fl(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Fl(e)}const nh=t=>t.__isTeleport,or=t=>t&&(t.disabled||t.disabled===""),ia=t=>typeof SVGElement<"u"&&t instanceof SVGElement,aa=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,ks=(t,e)=>{const n=t&&t.to;return ye(n)?e?e(n):null:n},rh={name:"Teleport",__isTeleport:!0,process(t,e,n,r,o,s,i,a,c,l){const{mc:u,pc:d,pbc:f,o:{insert:g,querySelector:m,createText:S,createComment:P}}=l,C=or(e.props);let{shapeFlag:v,children:E,dynamicChildren:M}=e;if(t==null){const F=e.el=S(""),$=e.anchor=S("");g(F,n,r),g($,n,r);const K=e.target=ks(e.props,m),D=e.targetAnchor=S("");K&&(g(D,K),i==="svg"||ia(K)?i="svg":(i==="mathml"||aa(K))&&(i="mathml"));const z=(G,re)=>{v&16&&u(E,G,re,o,s,i,a,c)};C?z(n,$):K&&z(K,D)}else{e.el=t.el;const F=e.anchor=t.anchor,$=e.target=t.target,K=e.targetAnchor=t.targetAnchor,D=or(t.props),z=D?n:$,G=D?F:K;if(i==="svg"||ia($)?i="svg":(i==="mathml"||aa($))&&(i="mathml"),M?(f(t.dynamicChildren,M,z,o,s,i,a),mi(t,e,!0)):c||d(t,e,z,G,o,s,i,a,!1),C)D?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):Gr(e,n,F,l,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const re=e.target=ks(e.props,m);re&&Gr(e,re,null,l,0)}else D&&Gr(e,$,K,l,1)}Vl(e)},remove(t,e,n,r,{um:o,o:{remove:s}},i){const{shapeFlag:a,children:c,anchor:l,targetAnchor:u,target:d,props:f}=t;if(d&&s(u),i&&s(l),a&16){const g=i||!or(f);for(let m=0;m<c.length;m++){const S=c[m];o(S,e,n,g,!!S.dynamicChildren)}}},move:Gr,hydrate:oh};function Gr(t,e,n,{o:{insert:r},m:o},s=2){s===0&&r(t.targetAnchor,e,n);const{el:i,anchor:a,shapeFlag:c,children:l,props:u}=t,d=s===2;if(d&&r(i,e,n),(!d||or(u))&&c&16)for(let f=0;f<l.length;f++)o(l[f],e,n,2);d&&r(a,e,n)}function oh(t,e,n,r,o,s,{o:{nextSibling:i,parentNode:a,querySelector:c}},l){const u=e.target=ks(e.props,c);if(u){const d=u._lpa||u.firstChild;if(e.shapeFlag&16)if(or(e.props))e.anchor=l(i(t),e,a(t),n,r,o,s),e.targetAnchor=d;else{e.anchor=i(t);let f=d;for(;f;)if(f=i(f),f&&f.nodeType===8&&f.data==="teleport anchor"){e.targetAnchor=f,u._lpa=e.targetAnchor&&i(e.targetAnchor);break}l(d,e,u,n,r,o,s)}Vl(e)}return e.anchor&&i(e.anchor)}const sh=rh;function Vl(t){const e=t.ctx;if(e&&e.ut){let n=t.children[0].el;for(;n&&n!==t.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",e.uid),n=n.nextSibling;e.ut()}}const Me=Symbol.for("v-fgt"),xo=Symbol.for("v-txt"),It=Symbol.for("v-cmt"),Jo=Symbol.for("v-stc"),sr=[];let nt=null;function se(t=!1){sr.push(nt=t?null:[])}function ih(){sr.pop(),nt=sr[sr.length-1]||null}let gr=1;function ca(t){gr+=t}function Hl(t){return t.dynamicChildren=gr>0?nt||Cn:null,ih(),gr>0&&nt&&nt.push(t),t}function Te(t,e,n,r,o,s){return Hl(be(t,e,n,r,o,s,!0))}function Ue(t,e,n,r,o){return Hl(Pe(t,e,n,r,o,!0))}function uo(t){return t?t.__v_isVNode===!0:!1}function vn(t,e){return t.type===e.type&&t.key===e.key}const No="__vInternal",zl=({key:t})=>t??null,eo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ye(t)||Ve(t)||q(t)?{i:Se,r:t,k:e,f:!!n}:t:null);function be(t,e=null,n=null,r=0,o=null,s=t===Me?0:1,i=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&zl(e),ref:e&&eo(e),scopeId:_l,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:Se};return a?(bi(c,n),s&128&&t.normalize(c)):n&&(c.shapeFlag|=ye(n)?8:16),gr>0&&!i&&nt&&(c.patchFlag>0||s&6)&&c.patchFlag!==32&&nt.push(c),c}const Pe=ah;function ah(t,e=null,n=null,r=0,o=null,s=!1){if((!t||t===wl)&&(t=It),uo(t)){const a=ln(t,e,!0);return n&&bi(a,n),gr>0&&!s&&nt&&(a.shapeFlag&6?nt[nt.indexOf(t)]=a:nt.push(a)),a.patchFlag|=-2,a}if(bh(t)&&(t=t.__vccOpts),e){e=ch(e);let{class:a,style:c}=e;a&&!ye(a)&&(e.class=on(a)),pe(c)&&(ll(c)&&!V(c)&&(c=we({},c)),e.style=ko(c))}const i=ye(t)?1:wf(t)?128:nh(t)?64:pe(t)?4:q(t)?2:0;return be(t,e,n,r,o,i,s,!0)}function ch(t){return t?ll(t)||No in t?we({},t):t:null}function ln(t,e,n=!1){const{props:r,ref:o,patchFlag:s,children:i}=t,a=e?Q(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&zl(a),ref:e&&e.ref?n&&o?V(o)?o.concat(eo(e)):[o,eo(e)]:eo(e):o,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:i,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Me?s===-1?16:s|16:s,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&ln(t.ssContent),ssFallback:t.ssFallback&&ln(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Wl(t=" ",e=0){return Pe(xo,null,t,e)}function Nn(t="",e=!1){return e?(se(),Ue(It,null,t)):Pe(It,null,t)}function lt(t){return t==null||typeof t=="boolean"?Pe(It):V(t)?Pe(Me,null,t.slice()):typeof t=="object"?Mt(t):Pe(xo,null,String(t))}function Mt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:ln(t)}function bi(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(V(e))n=16;else if(typeof e=="object")if(r&65){const o=e.default;o&&(o._c&&(o._d=!1),bi(t,o()),o._c&&(o._d=!0));return}else{n=32;const o=e._;!o&&!(No in e)?e._ctx=Se:o===3&&Se&&(Se.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else q(e)?(e={default:e,_ctx:Se},n=32):(e=String(e),r&64?(n=16,e=[Wl(e)]):n=8);t.children=e,t.shapeFlag|=n}function Q(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const o in r)if(o==="class")e.class!==r.class&&(e.class=on([e.class,r.class]));else if(o==="style")e.style=ko([e.style,r.style]);else if(To(o)){const s=e[o],i=r[o];i&&s!==i&&!(V(s)&&s.includes(i))&&(e[o]=s?[].concat(s,i):i)}else o!==""&&(e[o]=r[o])}return e}function at(t,e,n,r=null){qe(t,e,7,[n,r])}const lh=Ll();let uh=0;function dh(t,e,n){const r=t.type,o=(e?e.appContext:t.appContext)||lh,s={uid:uh++,vnode:t,type:r,parent:e,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new Dd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Dl(r,o),emitsOptions:yl(r,o),emit:null,emitted:null,propsDefaults:he,inheritAttrs:r.inheritAttrs,ctx:he,data:he,props:he,attrs:he,slots:he,refs:he,setupState:he,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=gf.bind(null,s),t.ce&&t.ce(s),s}let Ie=null;const Kl=()=>Ie||Se;let fo,Os;{const t=qc(),e=(n,r)=>{let o;return(o=t[n])||(o=t[n]=[]),o.push(r),s=>{o.length>1?o.forEach(i=>i(s)):o[0](s)}};fo=e("__VUE_INSTANCE_SETTERS__",n=>Ie=n),Os=e("__VUE_SSR_SETTERS__",n=>Lo=n)}const $r=t=>{const e=Ie;return fo(t),t.scope.on(),()=>{t.scope.off(),fo(e)}},la=()=>{Ie&&Ie.scope.off(),fo(null)};function Gl(t){return t.vnode.shapeFlag&4}let Lo=!1;function fh(t,e=!1){e&&Os(e);const{props:n,children:r}=t.vnode,o=Gl(t);Gf(t,n,o,e),Yf(t,r);const s=o?hh(t,e):void 0;return e&&Os(!1),s}function hh(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=ul(new Proxy(t.ctx,Uf));const{setup:r}=n;if(r){const o=t.setupContext=r.length>1?gh(t):null,s=$r(t);fn();const i=Wt(r,t,0,[t.props,o]);if(hn(),s(),Wc(i)){if(i.then(la,la),e)return i.then(a=>{ua(t,a,e)}).catch(a=>{Ao(a,t,0)});t.asyncDep=i}else ua(t,i,e)}else ql(t,e)}function ua(t,e,n){q(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:pe(e)&&(t.setupState=pl(e)),ql(t,n)}let da;function ql(t,e,n){const r=t.type;if(!t.render){if(!e&&da&&!r.render){const o=r.template||pi(t).template;if(o){const{isCustomElement:s,compilerOptions:i}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=we(we({isCustomElement:s,delimiters:a},i),c);r.render=da(o,l)}}t.render=r.render||Ge}{const o=$r(t);fn();try{Bf(t)}finally{hn(),o()}}}function ph(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return Fe(t,"get","$attrs"),e[n]}}))}function gh(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return ph(t)},slots:t.slots,emit:t.emit,expose:e}}function Mo(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(pl(ul(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in nr)return nr[n](t)},has(e,n){return n in e||n in nr}}))}function mh(t,e=!0){return q(t)?t.displayName||t.name:t.name||e&&t.__name}function bh(t){return q(t)&&"__vccOpts"in t}const et=(t,e)=>sf(t,e,Lo);function Jl(t,e,n){const r=arguments.length;return r===2?pe(e)&&!V(e)?uo(e)?Pe(t,null,[e]):Pe(t,e):Pe(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&uo(n)&&(n=[n]),Pe(t,e,n))}const vh="3.4.19";/**
* @vue/runtime-dom v3.4.19
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const yh="http://www.w3.org/2000/svg",_h="http://www.w3.org/1998/Math/MathML",Dt=typeof document<"u"?document:null,fa=Dt&&Dt.createElement("template"),wh={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const o=e==="svg"?Dt.createElementNS(yh,t):e==="mathml"?Dt.createElementNS(_h,t):Dt.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&o.setAttribute("multiple",r.multiple),o},createText:t=>Dt.createTextNode(t),createComment:t=>Dt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Dt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,o,s){const i=n?n.previousSibling:e.lastChild;if(o&&(o===s||o.nextSibling))for(;e.insertBefore(o.cloneNode(!0),n),!(o===s||!(o=o.nextSibling)););else{fa.innerHTML=r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t;const a=fa.content;if(r==="svg"||r==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[i?i.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Rt="transition",Gn="animation",Ln=Symbol("_vtc"),Yl={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Sh=we({},Pf,Yl),Xt=(t,e=[])=>{V(t)?t.forEach(n=>n(...e)):t&&t(...e)},ha=t=>t?V(t)?t.some(e=>e.length>1):t.length>1:!1;function Ch(t){const e={};for(const L in t)L in Yl||(e[L]=t[L]);if(t.css===!1)return e;const{name:n="v",type:r,duration:o,enterFromClass:s=`${n}-enter-from`,enterActiveClass:i=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=s,appearActiveClass:l=i,appearToClass:u=a,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:g=`${n}-leave-to`}=t,m=Th(o),S=m&&m[0],P=m&&m[1],{onBeforeEnter:C,onEnter:v,onEnterCancelled:E,onLeave:M,onLeaveCancelled:F,onBeforeAppear:$=C,onAppear:K=v,onAppearCancelled:D=E}=e,z=(L,ee,_e)=>{Nt(L,ee?u:a),Nt(L,ee?l:i),_e&&_e()},G=(L,ee)=>{L._isLeaving=!1,Nt(L,d),Nt(L,g),Nt(L,f),ee&&ee()},re=L=>(ee,_e)=>{const De=L?K:v,fe=()=>z(ee,L,_e);Xt(De,[ee,fe]),pa(()=>{Nt(ee,L?c:s),bt(ee,L?u:a),ha(De)||ga(ee,r,S,fe)})};return we(e,{onBeforeEnter(L){Xt(C,[L]),bt(L,s),bt(L,i)},onBeforeAppear(L){Xt($,[L]),bt(L,c),bt(L,l)},onEnter:re(!1),onAppear:re(!0),onLeave(L,ee){L._isLeaving=!0;const _e=()=>G(L,ee);bt(L,d),Xl(),bt(L,f),pa(()=>{L._isLeaving&&(Nt(L,d),bt(L,g),ha(M)||ga(L,r,P,_e))}),Xt(M,[L,_e])},onEnterCancelled(L){z(L,!1),Xt(E,[L])},onAppearCancelled(L){z(L,!0),Xt(D,[L])},onLeaveCancelled(L){G(L),Xt(F,[L])}})}function Th(t){if(t==null)return null;if(pe(t))return[Yo(t.enter),Yo(t.leave)];{const e=Yo(t);return[e,e]}}function Yo(t){return Od(t)}function bt(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Ln]||(t[Ln]=new Set)).add(e)}function Nt(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[Ln];n&&(n.delete(e),n.size||(t[Ln]=void 0))}function pa(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let Eh=0;function ga(t,e,n,r){const o=t._endId=++Eh,s=()=>{o===t._endId&&r()};if(n)return setTimeout(s,n);const{type:i,timeout:a,propCount:c}=Zl(t,e);if(!i)return r();const l=i+"end";let u=0;const d=()=>{t.removeEventListener(l,f),s()},f=g=>{g.target===t&&++u>=c&&d()};setTimeout(()=>{u<c&&d()},a+1),t.addEventListener(l,f)}function Zl(t,e){const n=window.getComputedStyle(t),r=m=>(n[m]||"").split(", "),o=r(`${Rt}Delay`),s=r(`${Rt}Duration`),i=ma(o,s),a=r(`${Gn}Delay`),c=r(`${Gn}Duration`),l=ma(a,c);let u=null,d=0,f=0;e===Rt?i>0&&(u=Rt,d=i,f=s.length):e===Gn?l>0&&(u=Gn,d=l,f=c.length):(d=Math.max(i,l),u=d>0?i>l?Rt:Gn:null,f=u?u===Rt?s.length:c.length:0);const g=u===Rt&&/\b(transform|all)(,|$)/.test(r(`${Rt}Property`).toString());return{type:u,timeout:d,propCount:f,hasTransform:g}}function ma(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>ba(n)+ba(t[r])))}function ba(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function Xl(){return document.body.offsetHeight}function Ih(t,e,n){const r=t[Ln];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const va=Symbol("_vod"),Ph=Symbol(""),kh=/(^|;)\s*display\s*:/;function Oh(t,e,n){const r=t.style,o=ye(n),s=r.display;let i=!1;if(n&&!o){if(e&&!ye(e))for(const a in e)n[a]==null&&As(r,a,"");for(const a in n)a==="display"&&(i=!0),As(r,a,n[a])}else if(o){if(e!==n){const a=r[Ph];a&&(n+=";"+a),r.cssText=n,i=kh.test(n)}}else e&&t.removeAttribute("style");va in t&&(t[va]=i?r.display:"",r.display=s)}const ya=/\s*!important$/;function As(t,e,n){if(V(n))n.forEach(r=>As(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Ah(t,e);ya.test(n)?t.setProperty(Fn(r),n.replace(ya,""),"important"):t[r]=n}}const _a=["Webkit","Moz","ms"],Zo={};function Ah(t,e){const n=Zo[e];if(n)return n;let r=ht(e);if(r!=="filter"&&r in t)return Zo[e]=r;r=Po(r);for(let o=0;o<_a.length;o++){const s=_a[o]+r;if(s in t)return Zo[e]=s}return e}const wa="http://www.w3.org/1999/xlink";function Rh(t,e,n,r,o){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(wa,e.slice(6,e.length)):t.setAttributeNS(wa,e,n);else{const s=Md(e);n==null||s&&!Jc(n)?t.removeAttribute(e):t.setAttribute(e,s?"":n)}}function $h(t,e,n,r,o,s,i){if(e==="innerHTML"||e==="textContent"){r&&i(r,o,s),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const l=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";l!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let c=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Jc(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function xh(t,e,n,r){t.addEventListener(e,n,r)}function Nh(t,e,n,r){t.removeEventListener(e,n,r)}const Sa=Symbol("_vei");function Lh(t,e,n,r,o=null){const s=t[Sa]||(t[Sa]={}),i=s[e];if(r&&i)i.value=r;else{const[a,c]=Mh(e);if(r){const l=s[e]=Uh(r,o);xh(t,a,l,c)}else i&&(Nh(t,a,i,c),s[e]=void 0)}}const Ca=/(?:Once|Passive|Capture)$/;function Mh(t){let e;if(Ca.test(t)){e={};let r;for(;r=t.match(Ca);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Fn(t.slice(2)),e]}let Xo=0;const Dh=Promise.resolve(),jh=()=>Xo||(Dh.then(()=>Xo=0),Xo=Date.now());function Uh(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;qe(Bh(r,n.value),e,5,[r])};return n.value=t,n.attached=jh(),n}function Bh(t,e){if(V(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>o=>!o._stopped&&r&&r(o))}else return e}const Ta=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Fh=(t,e,n,r,o,s,i,a,c)=>{const l=o==="svg";e==="class"?Ih(t,r,l):e==="style"?Oh(t,n,r):To(e)?Zs(e)||Lh(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Vh(t,e,r,l))?$h(t,e,r,s,i,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Rh(t,e,r,l))};function Vh(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Ta(e)&&q(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const o=t.tagName;if(o==="IMG"||o==="VIDEO"||o==="CANVAS"||o==="SOURCE")return!1}return Ta(e)&&ye(n)?!1:e in t}const Ql=new WeakMap,eu=new WeakMap,ho=Symbol("_moveCb"),Ea=Symbol("_enterCb"),tu={name:"TransitionGroup",props:we({},Sh,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=Kl(),r=If();let o,s;return Al(()=>{if(!o.length)return;const i=t.moveClass||`${t.name||"v"}-move`;if(!qh(o[0].el,n.vnode.el,i))return;o.forEach(Wh),o.forEach(Kh);const a=o.filter(Gh);Xl(),a.forEach(c=>{const l=c.el,u=l.style;bt(l,i),u.transform=u.webkitTransform=u.transitionDuration="";const d=l[ho]=f=>{f&&f.target!==l||(!f||/transform$/.test(f.propertyName))&&(l.removeEventListener("transitionend",d),l[ho]=null,Nt(l,i))};l.addEventListener("transitionend",d)})}),()=>{const i=ie(t),a=Ch(i);let c=i.tag||Me;o=s,s=e.default?Il(e.default()):[];for(let l=0;l<s.length;l++){const u=s[l];u.key!=null&&Ss(u,ws(u,a,r,n))}if(o)for(let l=0;l<o.length;l++){const u=o[l];Ss(u,ws(u,a,r,n)),Ql.set(u,u.el.getBoundingClientRect())}return Pe(c,null,s)}}},Hh=t=>delete t.mode;tu.props;const zh=tu;function Wh(t){const e=t.el;e[ho]&&e[ho](),e[Ea]&&e[Ea]()}function Kh(t){eu.set(t,t.el.getBoundingClientRect())}function Gh(t){const e=Ql.get(t),n=eu.get(t),r=e.left-n.left,o=e.top-n.top;if(r||o){const s=t.el.style;return s.transform=s.webkitTransform=`translate(${r}px,${o}px)`,s.transitionDuration="0s",t}}function qh(t,e,n){const r=t.cloneNode(),o=t[Ln];o&&o.forEach(a=>{a.split(/\s+/).forEach(c=>c&&r.classList.remove(c))}),n.split(/\s+/).forEach(a=>a&&r.classList.add(a)),r.style.display="none";const s=e.nodeType===1?e:e.parentNode;s.appendChild(r);const{hasTransform:i}=Zl(r);return s.removeChild(r),i}const Jh=we({patchProp:Fh},wh);let Ia;function Yh(){return Ia||(Ia=Xf(Jh))}const Zh=(...t)=>{const e=Yh().createApp(...t),{mount:n}=e;return e.mount=r=>{const o=Qh(r);if(!o)return;const s=e._component;!q(s)&&!s.render&&!s.template&&(s.template=o.innerHTML),o.innerHTML="";const i=n(o,!1,Xh(o));return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),i},e};function Xh(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Qh(t){return ye(t)?document.querySelector(t):t}const ep=(t,e)=>{const n=t.__vccOpts||t;for(const[r,o]of e)n[r]=o;return n},tp={};function np(t,e){const n=xn("RouterView");return se(),Ue(n)}const rp=ep(tp,[["render",np]]),op="modulepreload",sp=function(t){return"/introToMap/"+t},Pa={},ka=function(e,n,r){let o=Promise.resolve();if(n&&n.length>0){const s=document.getElementsByTagName("link");o=Promise.all(n.map(i=>{if(i=sp(i),i in Pa)return;Pa[i]=!0;const a=i.endsWith(".css"),c=a?'[rel="stylesheet"]':"";if(!!r)for(let d=s.length-1;d>=0;d--){const f=s[d];if(f.href===i&&(!a||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${c}`))return;const u=document.createElement("link");if(u.rel=a?"stylesheet":op,a||(u.as="script",u.crossOrigin=""),u.href=i,document.head.appendChild(u),a)return new Promise((d,f)=>{u.addEventListener("load",d),u.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${i}`)))})}))}return o.then(()=>e()).catch(s=>{const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=s,window.dispatchEvent(i),!i.defaultPrevented)throw s})};/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const yn=typeof window<"u";function ip(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ce=Object.assign;function Qo(t,e){const n={};for(const r in e){const o=e[r];n[r]=ot(o)?o.map(t):t(o)}return n}const ir=()=>{},ot=Array.isArray,ap=/\/$/,cp=t=>t.replace(ap,"");function es(t,e,n="/"){let r,o={},s="",i="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),s=e.slice(c+1,a>-1?a:e.length),o=t(s)),a>-1&&(r=r||e.slice(0,a),i=e.slice(a,e.length)),r=fp(r??e,n),{fullPath:r+(s&&"?")+s+i,path:r,query:o,hash:i}}function lp(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Oa(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function up(t,e,n){const r=e.matched.length-1,o=n.matched.length-1;return r>-1&&r===o&&Mn(e.matched[r],n.matched[o])&&nu(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Mn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function nu(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!dp(t[n],e[n]))return!1;return!0}function dp(t,e){return ot(t)?Aa(t,e):ot(e)?Aa(e,t):t===e}function Aa(t,e){return ot(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function fp(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),o=r[r.length-1];(o===".."||o===".")&&r.push("");let s=n.length-1,i,a;for(i=0;i<r.length;i++)if(a=r[i],a!==".")if(a==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var mr;(function(t){t.pop="pop",t.push="push"})(mr||(mr={}));var ar;(function(t){t.back="back",t.forward="forward",t.unknown=""})(ar||(ar={}));function hp(t){if(!t)if(yn){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),cp(t)}const pp=/^[^#]+#/;function gp(t,e){return t.replace(pp,"#")+e}function mp(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Do=()=>({left:window.pageXOffset,top:window.pageYOffset});function bp(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),o=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o)return;e=mp(o,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Ra(t,e){return(history.state?history.state.position-e:-1)+t}const Rs=new Map;function vp(t,e){Rs.set(t,e)}function yp(t){const e=Rs.get(t);return Rs.delete(t),e}let _p=()=>location.protocol+"//"+location.host;function ru(t,e){const{pathname:n,search:r,hash:o}=e,s=t.indexOf("#");if(s>-1){let a=o.includes(t.slice(s))?t.slice(s).length:1,c=o.slice(a);return c[0]!=="/"&&(c="/"+c),Oa(c,"")}return Oa(n,t)+r+o}function wp(t,e,n,r){let o=[],s=[],i=null;const a=({state:f})=>{const g=ru(t,location),m=n.value,S=e.value;let P=0;if(f){if(n.value=g,e.value=f,i&&i===m){i=null;return}P=S?f.position-S.position:0}else r(g);o.forEach(C=>{C(n.value,m,{delta:P,type:mr.pop,direction:P?P>0?ar.forward:ar.back:ar.unknown})})};function c(){i=n.value}function l(f){o.push(f);const g=()=>{const m=o.indexOf(f);m>-1&&o.splice(m,1)};return s.push(g),g}function u(){const{history:f}=window;f.state&&f.replaceState(ce({},f.state,{scroll:Do()}),"")}function d(){for(const f of s)f();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:d}}function $a(t,e,n,r=!1,o=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:o?Do():null}}function Sp(t){const{history:e,location:n}=window,r={value:ru(t,n)},o={value:e.state};o.value||s(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(c,l,u){const d=t.indexOf("#"),f=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+c:_p()+t+c;try{e[u?"replaceState":"pushState"](l,"",f),o.value=l}catch(g){console.error(g),n[u?"replace":"assign"](f)}}function i(c,l){const u=ce({},e.state,$a(o.value.back,c,o.value.forward,!0),l,{position:o.value.position});s(c,u,!0),r.value=c}function a(c,l){const u=ce({},o.value,e.state,{forward:c,scroll:Do()});s(u.current,u,!0);const d=ce({},$a(r.value,c,null),{position:u.position+1},l);s(c,d,!1),r.value=c}return{location:r,state:o,push:a,replace:i}}function Cp(t){t=hp(t);const e=Sp(t),n=wp(t,e.state,e.location,e.replace);function r(s,i=!0){i||n.pauseListeners(),history.go(s)}const o=ce({location:"",base:t,go:r,createHref:gp.bind(null,t)},e,n);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>e.state.value}),o}function Tp(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),Cp(t)}function Ep(t){return typeof t=="string"||t&&typeof t=="object"}function ou(t){return typeof t=="string"||typeof t=="symbol"}const $t={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},su=Symbol("");var xa;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(xa||(xa={}));function Dn(t,e){return ce(new Error,{type:t,[su]:!0},e)}function mt(t,e){return t instanceof Error&&su in t&&(e==null||!!(t.type&e))}const Na="[^/]+?",Ip={sensitive:!1,strict:!1,start:!0,end:!0},Pp=/[.+*?^${}()[\]/\\]/g;function kp(t,e){const n=ce({},Ip,e),r=[];let o=n.start?"^":"";const s=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(o+="/");for(let d=0;d<l.length;d++){const f=l[d];let g=40+(n.sensitive?.25:0);if(f.type===0)d||(o+="/"),o+=f.value.replace(Pp,"\\$&"),g+=40;else if(f.type===1){const{value:m,repeatable:S,optional:P,regexp:C}=f;s.push({name:m,repeatable:S,optional:P});const v=C||Na;if(v!==Na){g+=10;try{new RegExp(`(${v})`)}catch(M){throw new Error(`Invalid custom RegExp for param "${m}" (${v}): `+M.message)}}let E=S?`((?:${v})(?:/(?:${v}))*)`:`(${v})`;d||(E=P&&l.length<2?`(?:/${E})`:"/"+E),P&&(E+="?"),o+=E,g+=20,P&&(g+=-8),S&&(g+=-20),v===".*"&&(g+=-50)}u.push(g)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(o+="/?"),n.end?o+="$":n.strict&&(o+="(?:/|$)");const i=new RegExp(o,n.sensitive?"":"i");function a(l){const u=l.match(i),d={};if(!u)return null;for(let f=1;f<u.length;f++){const g=u[f]||"",m=s[f-1];d[m.name]=g&&m.repeatable?g.split("/"):g}return d}function c(l){let u="",d=!1;for(const f of t){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const g of f)if(g.type===0)u+=g.value;else if(g.type===1){const{value:m,repeatable:S,optional:P}=g,C=m in l?l[m]:"";if(ot(C)&&!S)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const v=ot(C)?C.join("/"):C;if(!v)if(P)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${m}"`);u+=v}}return u||"/"}return{re:i,score:r,keys:s,parse:a,stringify:c}}function Op(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Ap(t,e){let n=0;const r=t.score,o=e.score;for(;n<r.length&&n<o.length;){const s=Op(r[n],o[n]);if(s)return s;n++}if(Math.abs(o.length-r.length)===1){if(La(r))return 1;if(La(o))return-1}return o.length-r.length}function La(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Rp={type:0,value:""},$p=/[a-zA-Z0-9_]/;function xp(t){if(!t)return[[]];if(t==="/")return[[Rp]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${l}": ${g}`)}let n=0,r=n;const o=[];let s;function i(){s&&o.push(s),s=[]}let a=0,c,l="",u="";function d(){l&&(n===0?s.push({type:0,value:l}):n===1||n===2||n===3?(s.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function f(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&d(),i()):c===":"?(d(),n=1):f();break;case 4:f(),n=r;break;case 1:c==="("?n=2:$p.test(c)?f():(d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),d(),i(),o}function Np(t,e,n){const r=kp(xp(t.path),n),o=ce(r,{record:t,parent:e,children:[],alias:[]});return e&&!o.record.aliasOf==!e.record.aliasOf&&e.children.push(o),o}function Lp(t,e){const n=[],r=new Map;e=ja({strict:!1,end:!0,sensitive:!1},e);function o(u){return r.get(u)}function s(u,d,f){const g=!f,m=Mp(u);m.aliasOf=f&&f.record;const S=ja(e,u),P=[m];if("alias"in u){const E=typeof u.alias=="string"?[u.alias]:u.alias;for(const M of E)P.push(ce({},m,{components:f?f.record.components:m.components,path:M,aliasOf:f?f.record:m}))}let C,v;for(const E of P){const{path:M}=E;if(d&&M[0]!=="/"){const F=d.record.path,$=F[F.length-1]==="/"?"":"/";E.path=d.record.path+(M&&$+M)}if(C=Np(E,d,S),f?f.alias.push(C):(v=v||C,v!==C&&v.alias.push(C),g&&u.name&&!Da(C)&&i(u.name)),m.children){const F=m.children;for(let $=0;$<F.length;$++)s(F[$],C,f&&f.children[$])}f=f||C,(C.record.components&&Object.keys(C.record.components).length||C.record.name||C.record.redirect)&&c(C)}return v?()=>{i(v)}:ir}function i(u){if(ou(u)){const d=r.get(u);d&&(r.delete(u),n.splice(n.indexOf(d),1),d.children.forEach(i),d.alias.forEach(i))}else{const d=n.indexOf(u);d>-1&&(n.splice(d,1),u.record.name&&r.delete(u.record.name),u.children.forEach(i),u.alias.forEach(i))}}function a(){return n}function c(u){let d=0;for(;d<n.length&&Ap(u,n[d])>=0&&(u.record.path!==n[d].record.path||!iu(u,n[d]));)d++;n.splice(d,0,u),u.record.name&&!Da(u)&&r.set(u.record.name,u)}function l(u,d){let f,g={},m,S;if("name"in u&&u.name){if(f=r.get(u.name),!f)throw Dn(1,{location:u});S=f.record.name,g=ce(Ma(d.params,f.keys.filter(v=>!v.optional).map(v=>v.name)),u.params&&Ma(u.params,f.keys.map(v=>v.name))),m=f.stringify(g)}else if("path"in u)m=u.path,f=n.find(v=>v.re.test(m)),f&&(g=f.parse(m),S=f.record.name);else{if(f=d.name?r.get(d.name):n.find(v=>v.re.test(d.path)),!f)throw Dn(1,{location:u,currentLocation:d});S=f.record.name,g=ce({},d.params,u.params),m=f.stringify(g)}const P=[];let C=f;for(;C;)P.unshift(C.record),C=C.parent;return{name:S,path:m,params:g,matched:P,meta:jp(P)}}return t.forEach(u=>s(u)),{addRoute:s,resolve:l,removeRoute:i,getRoutes:a,getRecordMatcher:o}}function Ma(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Mp(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Dp(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function Dp(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Da(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function jp(t){return t.reduce((e,n)=>ce(e,n.meta),{})}function ja(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function iu(t,e){return e.children.some(n=>n===t||iu(t,n))}const au=/#/g,Up=/&/g,Bp=/\//g,Fp=/=/g,Vp=/\?/g,cu=/\+/g,Hp=/%5B/g,zp=/%5D/g,lu=/%5E/g,Wp=/%60/g,uu=/%7B/g,Kp=/%7C/g,du=/%7D/g,Gp=/%20/g;function vi(t){return encodeURI(""+t).replace(Kp,"|").replace(Hp,"[").replace(zp,"]")}function qp(t){return vi(t).replace(uu,"{").replace(du,"}").replace(lu,"^")}function $s(t){return vi(t).replace(cu,"%2B").replace(Gp,"+").replace(au,"%23").replace(Up,"%26").replace(Wp,"`").replace(uu,"{").replace(du,"}").replace(lu,"^")}function Jp(t){return $s(t).replace(Fp,"%3D")}function Yp(t){return vi(t).replace(au,"%23").replace(Vp,"%3F")}function Zp(t){return t==null?"":Yp(t).replace(Bp,"%2F")}function po(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function Xp(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let o=0;o<r.length;++o){const s=r[o].replace(cu," "),i=s.indexOf("="),a=po(i<0?s:s.slice(0,i)),c=i<0?null:po(s.slice(i+1));if(a in e){let l=e[a];ot(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function Ua(t){let e="";for(let n in t){const r=t[n];if(n=Jp(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(ot(r)?r.map(s=>s&&$s(s)):[r&&$s(r)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function Qp(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=ot(r)?r.map(o=>o==null?null:""+o):r==null?r:""+r)}return e}const eg=Symbol(""),Ba=Symbol(""),yi=Symbol(""),fu=Symbol(""),xs=Symbol("");function qn(){let t=[];function e(r){return t.push(r),()=>{const o=t.indexOf(r);o>-1&&t.splice(o,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function jt(t,e,n,r,o){const s=r&&(r.enterCallbacks[o]=r.enterCallbacks[o]||[]);return()=>new Promise((i,a)=>{const c=d=>{d===!1?a(Dn(4,{from:n,to:e})):d instanceof Error?a(d):Ep(d)?a(Dn(2,{from:e,to:d})):(s&&r.enterCallbacks[o]===s&&typeof d=="function"&&s.push(d),i())},l=t.call(r&&r.instances[o],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(d=>a(d))})}function ts(t,e,n,r){const o=[];for(const s of t)for(const i in s.components){let a=s.components[i];if(!(e!=="beforeRouteEnter"&&!s.instances[i]))if(tg(a)){const l=(a.__vccOpts||a)[e];l&&o.push(jt(l,n,r,s,i))}else{let c=a();o.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${i}" at "${s.path}"`));const u=ip(l)?l.default:l;s.components[i]=u;const f=(u.__vccOpts||u)[e];return f&&jt(f,n,r,s,i)()}))}}return o}function tg(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Fa(t){const e=Et(yi),n=Et(fu),r=et(()=>e.resolve(In(t.to))),o=et(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],d=n.matched;if(!u||!d.length)return-1;const f=d.findIndex(Mn.bind(null,u));if(f>-1)return f;const g=Va(c[l-2]);return l>1&&Va(u)===g&&d[d.length-1].path!==g?d.findIndex(Mn.bind(null,c[l-2])):f}),s=et(()=>o.value>-1&&sg(n.params,r.value.params)),i=et(()=>o.value>-1&&o.value===n.matched.length-1&&nu(n.params,r.value.params));function a(c={}){return og(c)?e[In(t.replace)?"replace":"push"](In(t.to)).catch(ir):Promise.resolve()}return{route:r,href:et(()=>r.value.href),isActive:s,isExactActive:i,navigate:a}}const ng=Pl({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Fa,setup(t,{slots:e}){const n=Rr(Fa(t)),{options:r}=Et(yi),o=et(()=>({[Ha(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Ha(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&e.default(n);return t.custom?s:Jl("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},s)}}}),rg=ng;function og(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function sg(t,e){for(const n in e){const r=e[n],o=t[n];if(typeof r=="string"){if(r!==o)return!1}else if(!ot(o)||o.length!==r.length||r.some((s,i)=>s!==o[i]))return!1}return!0}function Va(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Ha=(t,e,n)=>t??e??n,ig=Pl({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Et(xs),o=et(()=>t.route||r.value),s=Et(Ba,0),i=et(()=>{let l=In(s);const{matched:u}=o.value;let d;for(;(d=u[l])&&!d.components;)l++;return l}),a=et(()=>o.value.matched[i.value]);Qr(Ba,et(()=>i.value+1)),Qr(eg,a),Qr(xs,o);const c=er();return vt(()=>[c.value,a.value,t.name],([l,u,d],[f,g,m])=>{u&&(u.instances[d]=l,g&&g!==u&&l&&l===f&&(u.leaveGuards.size||(u.leaveGuards=g.leaveGuards),u.updateGuards.size||(u.updateGuards=g.updateGuards))),l&&u&&(!g||!Mn(u,g)||!f)&&(u.enterCallbacks[d]||[]).forEach(S=>S(l))},{flush:"post"}),()=>{const l=o.value,u=t.name,d=a.value,f=d&&d.components[u];if(!f)return za(n.default,{Component:f,route:l});const g=d.props[u],m=g?g===!0?l.params:typeof g=="function"?g(l):g:null,P=Jl(f,ce({},m,e,{onVnodeUnmounted:C=>{C.component.isUnmounted&&(d.instances[u]=null)},ref:c}));return za(n.default,{Component:P,route:l})||P}}});function za(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const ag=ig;function cg(t){const e=Lp(t.routes,t),n=t.parseQuery||Xp,r=t.stringifyQuery||Ua,o=t.history,s=qn(),i=qn(),a=qn(),c=af($t);let l=$t;yn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Qo.bind(null,_=>""+_),d=Qo.bind(null,Zp),f=Qo.bind(null,po);function g(_,x){let A,j;return ou(_)?(A=e.getRecordMatcher(_),j=x):j=_,e.addRoute(j,A)}function m(_){const x=e.getRecordMatcher(_);x&&e.removeRoute(x)}function S(){return e.getRoutes().map(_=>_.record)}function P(_){return!!e.getRecordMatcher(_)}function C(_,x){if(x=ce({},x||c.value),typeof _=="string"){const p=es(n,_,x.path),b=e.resolve({path:p.path},x),w=o.createHref(p.fullPath);return ce(p,b,{params:f(b.params),hash:po(p.hash),redirectedFrom:void 0,href:w})}let A;if("path"in _)A=ce({},_,{path:es(n,_.path,x.path).path});else{const p=ce({},_.params);for(const b in p)p[b]==null&&delete p[b];A=ce({},_,{params:d(p)}),x.params=d(x.params)}const j=e.resolve(A,x),ae=_.hash||"";j.params=u(f(j.params));const ge=lp(r,ce({},_,{hash:qp(ae),path:j.path})),h=o.createHref(ge);return ce({fullPath:ge,hash:ae,query:r===Ua?Qp(_.query):_.query||{}},j,{redirectedFrom:void 0,href:h})}function v(_){return typeof _=="string"?es(n,_,c.value.path):ce({},_)}function E(_,x){if(l!==_)return Dn(8,{from:x,to:_})}function M(_){return K(_)}function F(_){return M(ce(v(_),{replace:!0}))}function $(_){const x=_.matched[_.matched.length-1];if(x&&x.redirect){const{redirect:A}=x;let j=typeof A=="function"?A(_):A;return typeof j=="string"&&(j=j.includes("?")||j.includes("#")?j=v(j):{path:j},j.params={}),ce({query:_.query,hash:_.hash,params:"path"in j?{}:_.params},j)}}function K(_,x){const A=l=C(_),j=c.value,ae=_.state,ge=_.force,h=_.replace===!0,p=$(A);if(p)return K(ce(v(p),{state:typeof p=="object"?ce({},ae,p.state):ae,force:ge,replace:h}),x||A);const b=A;b.redirectedFrom=x;let w;return!ge&&up(r,j,A)&&(w=Dn(16,{to:b,from:j}),ke(j,j,!0,!1)),(w?Promise.resolve(w):G(b,j)).catch(y=>mt(y)?mt(y,2)?y:Ne(y):Z(y,b,j)).then(y=>{if(y){if(mt(y,2))return K(ce({replace:h},v(y.to),{state:typeof y.to=="object"?ce({},ae,y.to.state):ae,force:ge}),x||b)}else y=L(b,j,!0,h,ae);return re(b,j,y),y})}function D(_,x){const A=E(_,x);return A?Promise.reject(A):Promise.resolve()}function z(_){const x=st.values().next().value;return x&&typeof x.runWithContext=="function"?x.runWithContext(_):_()}function G(_,x){let A;const[j,ae,ge]=lg(_,x);A=ts(j.reverse(),"beforeRouteLeave",_,x);for(const p of j)p.leaveGuards.forEach(b=>{A.push(jt(b,_,x))});const h=D.bind(null,_,x);return A.push(h),Oe(A).then(()=>{A=[];for(const p of s.list())A.push(jt(p,_,x));return A.push(h),Oe(A)}).then(()=>{A=ts(ae,"beforeRouteUpdate",_,x);for(const p of ae)p.updateGuards.forEach(b=>{A.push(jt(b,_,x))});return A.push(h),Oe(A)}).then(()=>{A=[];for(const p of ge)if(p.beforeEnter)if(ot(p.beforeEnter))for(const b of p.beforeEnter)A.push(jt(b,_,x));else A.push(jt(p.beforeEnter,_,x));return A.push(h),Oe(A)}).then(()=>(_.matched.forEach(p=>p.enterCallbacks={}),A=ts(ge,"beforeRouteEnter",_,x),A.push(h),Oe(A))).then(()=>{A=[];for(const p of i.list())A.push(jt(p,_,x));return A.push(h),Oe(A)}).catch(p=>mt(p,8)?p:Promise.reject(p))}function re(_,x,A){a.list().forEach(j=>z(()=>j(_,x,A)))}function L(_,x,A,j,ae){const ge=E(_,x);if(ge)return ge;const h=x===$t,p=yn?history.state:{};A&&(j||h?o.replace(_.fullPath,ce({scroll:h&&p&&p.scroll},ae)):o.push(_.fullPath,ae)),c.value=_,ke(_,x,A,h),Ne()}let ee;function _e(){ee||(ee=o.listen((_,x,A)=>{if(!Ur.listening)return;const j=C(_),ae=$(j);if(ae){K(ce(ae,{replace:!0}),j).catch(ir);return}l=j;const ge=c.value;yn&&vp(Ra(ge.fullPath,A.delta),Do()),G(j,ge).catch(h=>mt(h,12)?h:mt(h,2)?(K(h.to,j).then(p=>{mt(p,20)&&!A.delta&&A.type===mr.pop&&o.go(-1,!1)}).catch(ir),Promise.reject()):(A.delta&&o.go(-A.delta,!1),Z(h,j,ge))).then(h=>{h=h||L(j,ge,!1),h&&(A.delta&&!mt(h,8)?o.go(-A.delta,!1):A.type===mr.pop&&mt(h,20)&&o.go(-1,!1)),re(j,ge,h)}).catch(ir)}))}let De=qn(),fe=qn(),te;function Z(_,x,A){Ne(_);const j=fe.list();return j.length?j.forEach(ae=>ae(_,x,A)):console.error(_),Promise.reject(_)}function He(){return te&&c.value!==$t?Promise.resolve():new Promise((_,x)=>{De.add([_,x])})}function Ne(_){return te||(te=!_,_e(),De.list().forEach(([x,A])=>_?A(_):x()),De.reset()),_}function ke(_,x,A,j){const{scrollBehavior:ae}=t;if(!yn||!ae)return Promise.resolve();const ge=!A&&yp(Ra(_.fullPath,0))||(j||!A)&&history.state&&history.state.scroll||null;return li().then(()=>ae(_,x,ge)).then(h=>h&&bp(h)).catch(h=>Z(h,_,x))}const Ee=_=>o.go(_);let Ot;const st=new Set,Ur={currentRoute:c,listening:!0,addRoute:g,removeRoute:m,hasRoute:P,getRoutes:S,resolve:C,options:t,push:M,replace:F,go:Ee,back:()=>Ee(-1),forward:()=>Ee(1),beforeEach:s.add,beforeResolve:i.add,afterEach:a.add,onError:fe.add,isReady:He,install(_){const x=this;_.component("RouterLink",rg),_.component("RouterView",ag),_.config.globalProperties.$router=x,Object.defineProperty(_.config.globalProperties,"$route",{enumerable:!0,get:()=>In(c)}),yn&&!Ot&&c.value===$t&&(Ot=!0,M(o.location).catch(ae=>{}));const A={};for(const ae in $t)Object.defineProperty(A,ae,{get:()=>c.value[ae],enumerable:!0});_.provide(yi,x),_.provide(fu,cl(A)),_.provide(xs,c);const j=_.unmount;st.add(_),_.unmount=function(){st.delete(_),st.size<1&&(l=$t,ee&&ee(),ee=null,c.value=$t,Ot=!1,te=!1),j()}}};function Oe(_){return _.reduce((x,A)=>x.then(()=>z(A)),Promise.resolve())}return Ur}function lg(t,e){const n=[],r=[],o=[],s=Math.max(e.matched.length,t.matched.length);for(let i=0;i<s;i++){const a=e.matched[i];a&&(t.matched.find(l=>Mn(l,a))?r.push(a):n.push(a));const c=t.matched[i];c&&(e.matched.find(l=>Mn(l,c))||o.push(c))}return[n,r,o]}const ug="/introToMap/gmail.png";var Wa={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hu=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let o=t.charCodeAt(r);o<128?e[n++]=o:o<2048?(e[n++]=o>>6|192,e[n++]=o&63|128):(o&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(o=65536+((o&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=o>>18|240,e[n++]=o>>12&63|128,e[n++]=o>>6&63|128,e[n++]=o&63|128):(e[n++]=o>>12|224,e[n++]=o>>6&63|128,e[n++]=o&63|128)}return e},dg=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const o=t[n++];if(o<128)e[r++]=String.fromCharCode(o);else if(o>191&&o<224){const s=t[n++];e[r++]=String.fromCharCode((o&31)<<6|s&63)}else if(o>239&&o<365){const s=t[n++],i=t[n++],a=t[n++],c=((o&7)<<18|(s&63)<<12|(i&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=t[n++],i=t[n++];e[r++]=String.fromCharCode((o&15)<<12|(s&63)<<6|i&63)}}return e.join("")},pu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let o=0;o<t.length;o+=3){const s=t[o],i=o+1<t.length,a=i?t[o+1]:0,c=o+2<t.length,l=c?t[o+2]:0,u=s>>2,d=(s&3)<<4|a>>4;let f=(a&15)<<2|l>>6,g=l&63;c||(g=64,i||(f=64)),r.push(n[u],n[d],n[f],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(hu(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):dg(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let o=0;o<t.length;){const s=n[t.charAt(o++)],a=o<t.length?n[t.charAt(o)]:0;++o;const l=o<t.length?n[t.charAt(o)]:64;++o;const d=o<t.length?n[t.charAt(o)]:64;if(++o,s==null||a==null||l==null||d==null)throw new fg;const f=s<<2|a>>4;if(r.push(f),l!==64){const g=a<<4&240|l>>2;if(r.push(g),d!==64){const m=l<<6&192|d;r.push(m)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class fg extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const hg=function(t){const e=hu(t);return pu.encodeByteArray(e,!0)},gu=function(t){return hg(t).replace(/\./g,"")},mu=function(t){try{return pu.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pg(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gg=()=>pg().__FIREBASE_DEFAULTS__,mg=()=>{if(typeof process>"u"||typeof Wa>"u")return;const t=Wa.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},bg=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&mu(t[1]);return e&&JSON.parse(e)},_i=()=>{try{return gg()||mg()||bg()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},vg=t=>{var e,n;return(n=(e=_i())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},bu=()=>{var t;return(t=_i())===null||t===void 0?void 0:t.config},vu=t=>{var e;return(e=_i())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yg{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function _g(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(xe())}function wg(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Sg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Cg(){const t=xe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Tg(){try{return typeof indexedDB=="object"}catch{return!1}}function Eg(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(r);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{var s;e(((s=o.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ig="FirebaseError";class Jt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Ig,Object.setPrototypeOf(this,Jt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,xr.prototype.create)}}class xr{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},o=`${this.service}/${e}`,s=this.errors[e],i=s?Pg(s,r):"Error",a=`${this.serviceName}: ${i} (${o}).`;return new Jt(o,a,r)}}function Pg(t,e){return t.replace(kg,(n,r)=>{const o=e[r];return o!=null?String(o):`<${r}?>`})}const kg=/\{\$([^}]+)}/g;function Og(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function go(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const o of n){if(!r.includes(o))return!1;const s=t[o],i=e[o];if(Ka(s)&&Ka(i)){if(!go(s,i))return!1}else if(s!==i)return!1}for(const o of r)if(!n.includes(o))return!1;return!0}function Ka(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nr(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(o=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ag(t,e){const n=new Rg(t,e);return n.subscribe.bind(n)}class Rg{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let o;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");$g(e,["next","error","complete"])?o=e:o={next:e,error:n,complete:r},o.next===void 0&&(o.next=ns),o.error===void 0&&(o.error=ns),o.complete===void 0&&(o.complete=ns);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function $g(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ns(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vn(t){return t&&t._delegate?t._delegate:t}class jn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xg{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new yg;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:n});o&&r.resolve(o)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(o)return null;throw s}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Lg(e))try{this.getOrInitializeService({instanceIdentifier:Qt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:o});r.resolve(s)}catch{}}}}clearInstance(e=Qt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Qt){return this.instances.has(e)}getOptions(e=Qt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,i]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&i.resolve(o)}return o}onInit(e,n){var r;const o=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(o))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(o,s);const i=this.instances.get(o);return i&&e(i,o),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const o of r)try{o(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Ng(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Qt){return this.component?this.component.multipleInstances?e:Qt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ng(t){return t===Qt?void 0:t}function Lg(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mg{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new xg(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var de;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(de||(de={}));const Dg={debug:de.DEBUG,verbose:de.VERBOSE,info:de.INFO,warn:de.WARN,error:de.ERROR,silent:de.SILENT},jg=de.INFO,Ug={[de.DEBUG]:"log",[de.VERBOSE]:"log",[de.INFO]:"info",[de.WARN]:"warn",[de.ERROR]:"error"},Bg=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),o=Ug[e];if(o)console[o](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class yu{constructor(e){this.name=e,this._logLevel=jg,this._logHandler=Bg,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in de))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Dg[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,de.DEBUG,...e),this._logHandler(this,de.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,de.VERBOSE,...e),this._logHandler(this,de.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,de.INFO,...e),this._logHandler(this,de.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,de.WARN,...e),this._logHandler(this,de.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,de.ERROR,...e),this._logHandler(this,de.ERROR,...e)}}const Fg=(t,e)=>e.some(n=>t instanceof n);let Ga,qa;function Vg(){return Ga||(Ga=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Hg(){return qa||(qa=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const _u=new WeakMap,Ns=new WeakMap,wu=new WeakMap,rs=new WeakMap,wi=new WeakMap;function zg(t){const e=new Promise((n,r)=>{const o=()=>{t.removeEventListener("success",s),t.removeEventListener("error",i)},s=()=>{n(Kt(t.result)),o()},i=()=>{r(t.error),o()};t.addEventListener("success",s),t.addEventListener("error",i)});return e.then(n=>{n instanceof IDBCursor&&_u.set(n,t)}).catch(()=>{}),wi.set(e,t),e}function Wg(t){if(Ns.has(t))return;const e=new Promise((n,r)=>{const o=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",i),t.removeEventListener("abort",i)},s=()=>{n(),o()},i=()=>{r(t.error||new DOMException("AbortError","AbortError")),o()};t.addEventListener("complete",s),t.addEventListener("error",i),t.addEventListener("abort",i)});Ns.set(t,e)}let Ls={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ns.get(t);if(e==="objectStoreNames")return t.objectStoreNames||wu.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Kt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Kg(t){Ls=t(Ls)}function Gg(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(os(this),e,...n);return wu.set(r,e.sort?e.sort():[e]),Kt(r)}:Hg().includes(t)?function(...e){return t.apply(os(this),e),Kt(_u.get(this))}:function(...e){return Kt(t.apply(os(this),e))}}function qg(t){return typeof t=="function"?Gg(t):(t instanceof IDBTransaction&&Wg(t),Fg(t,Vg())?new Proxy(t,Ls):t)}function Kt(t){if(t instanceof IDBRequest)return zg(t);if(rs.has(t))return rs.get(t);const e=qg(t);return e!==t&&(rs.set(t,e),wi.set(e,t)),e}const os=t=>wi.get(t);function Jg(t,e,{blocked:n,upgrade:r,blocking:o,terminated:s}={}){const i=indexedDB.open(t,e),a=Kt(i);return r&&i.addEventListener("upgradeneeded",c=>{r(Kt(i.result),c.oldVersion,c.newVersion,Kt(i.transaction),c)}),n&&i.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{s&&c.addEventListener("close",()=>s()),o&&c.addEventListener("versionchange",l=>o(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const Yg=["get","getKey","getAll","getAllKeys","count"],Zg=["put","add","delete","clear"],ss=new Map;function Ja(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ss.get(e))return ss.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,o=Zg.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(o||Yg.includes(n)))return;const s=async function(i,...a){const c=this.transaction(i,o?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),o&&c.done]))[0]};return ss.set(e,s),s}Kg(t=>({...t,get:(e,n,r)=>Ja(e,n)||t.get(e,n,r),has:(e,n)=>!!Ja(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xg{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Qg(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Qg(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ms="@firebase/app",Ya="0.10.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const un=new yu("@firebase/app"),em="@firebase/app-compat",tm="@firebase/analytics-compat",nm="@firebase/analytics",rm="@firebase/app-check-compat",om="@firebase/app-check",sm="@firebase/auth",im="@firebase/auth-compat",am="@firebase/database",cm="@firebase/database-compat",lm="@firebase/functions",um="@firebase/functions-compat",dm="@firebase/installations",fm="@firebase/installations-compat",hm="@firebase/messaging",pm="@firebase/messaging-compat",gm="@firebase/performance",mm="@firebase/performance-compat",bm="@firebase/remote-config",vm="@firebase/remote-config-compat",ym="@firebase/storage",_m="@firebase/storage-compat",wm="@firebase/firestore",Sm="@firebase/vertexai-preview",Cm="@firebase/firestore-compat",Tm="firebase",Em="10.12.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ds="[DEFAULT]",Im={[Ms]:"fire-core",[em]:"fire-core-compat",[nm]:"fire-analytics",[tm]:"fire-analytics-compat",[om]:"fire-app-check",[rm]:"fire-app-check-compat",[sm]:"fire-auth",[im]:"fire-auth-compat",[am]:"fire-rtdb",[cm]:"fire-rtdb-compat",[lm]:"fire-fn",[um]:"fire-fn-compat",[dm]:"fire-iid",[fm]:"fire-iid-compat",[hm]:"fire-fcm",[pm]:"fire-fcm-compat",[gm]:"fire-perf",[mm]:"fire-perf-compat",[bm]:"fire-rc",[vm]:"fire-rc-compat",[ym]:"fire-gcs",[_m]:"fire-gcs-compat",[wm]:"fire-fst",[Cm]:"fire-fst-compat",[Sm]:"fire-vertex","fire-js":"fire-js",[Tm]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mo=new Map,Pm=new Map,js=new Map;function Za(t,e){try{t.container.addComponent(e)}catch(n){un.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function br(t){const e=t.name;if(js.has(e))return un.debug(`There were multiple attempts to register component ${e}.`),!1;js.set(e,t);for(const n of mo.values())Za(n,t);for(const n of Pm.values())Za(n,t);return!0}function Su(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function yt(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const km={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Gt=new xr("app","Firebase",km);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Om{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new jn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Gt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lr=Em;function Cu(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ds,automaticDataCollectionEnabled:!1},e),o=r.name;if(typeof o!="string"||!o)throw Gt.create("bad-app-name",{appName:String(o)});if(n||(n=bu()),!n)throw Gt.create("no-options");const s=mo.get(o);if(s){if(go(n,s.options)&&go(r,s.config))return s;throw Gt.create("duplicate-app",{appName:o})}const i=new Mg(o);for(const c of js.values())i.addComponent(c);const a=new Om(n,r,i);return mo.set(o,a),a}function Am(t=Ds){const e=mo.get(t);if(!e&&t===Ds&&bu())return Cu();if(!e)throw Gt.create("no-app",{appName:t});return e}function kn(t,e,n){var r;let o=(r=Im[t])!==null&&r!==void 0?r:t;n&&(o+=`-${n}`);const s=o.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const a=[`Unable to register library "${o}" with version "${e}":`];s&&a.push(`library name "${o}" contains illegal characters (whitespace or "/")`),s&&i&&a.push("and"),i&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),un.warn(a.join(" "));return}br(new jn(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rm="firebase-heartbeat-database",$m=1,vr="firebase-heartbeat-store";let is=null;function Tu(){return is||(is=Jg(Rm,$m,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(vr)}catch(n){console.warn(n)}}}}).catch(t=>{throw Gt.create("idb-open",{originalErrorMessage:t.message})})),is}async function xm(t){try{const n=(await Tu()).transaction(vr),r=await n.objectStore(vr).get(Eu(t));return await n.done,r}catch(e){if(e instanceof Jt)un.warn(e.message);else{const n=Gt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});un.warn(n.message)}}}async function Xa(t,e){try{const r=(await Tu()).transaction(vr,"readwrite");await r.objectStore(vr).put(e,Eu(t)),await r.done}catch(n){if(n instanceof Jt)un.warn(n.message);else{const r=Gt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});un.warn(r.message)}}}function Eu(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nm=1024,Lm=30*24*60*60*1e3;class Mm{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new jm(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Qa();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:o}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const a=new Date(i.date).valueOf();return Date.now()-a<=Lm}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Qa(),{heartbeatsToSend:r,unsentEntries:o}=Dm(this._heartbeatsCache.heartbeats),s=gu(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Qa(){return new Date().toISOString().substring(0,10)}function Dm(t,e=Nm){const n=[];let r=t.slice();for(const o of t){const s=n.find(i=>i.agent===o.agent);if(s){if(s.dates.push(o.date),ec(n)>e){s.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),ec(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class jm{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Tg()?Eg().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await xm(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return Xa(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return Xa(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function ec(t){return gu(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Um(t){br(new jn("platform-logger",e=>new Xg(e),"PRIVATE")),br(new jn("heartbeat",e=>new Mm(e),"PRIVATE")),kn(Ms,Ya,t),kn(Ms,Ya,"esm2017"),kn("fire-js","")}Um("");function Si(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]]);return n}function Iu(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Bm=Iu,Pu=new xr("auth","Firebase",Iu());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bo=new yu("@firebase/auth");function Fm(t,...e){bo.logLevel<=de.WARN&&bo.warn(`Auth (${Lr}): ${t}`,...e)}function to(t,...e){bo.logLevel<=de.ERROR&&bo.error(`Auth (${Lr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(t,...e){throw Ti(t,...e)}function rt(t,...e){return Ti(t,...e)}function Ci(t,e,n){const r=Object.assign(Object.assign({},Bm()),{[e]:n});return new xr("auth","Firebase",r).create(e,{appName:t.name})}function cn(t){return Ci(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Vm(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&pt(t,"argument-error"),Ci(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ti(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Pu.create(t,...e)}function H(t,e,...n){if(!t)throw Ti(e,...n)}function _t(t){const e="INTERNAL ASSERTION FAILED: "+t;throw to(e),new Error(e)}function Pt(t,e){t||_t(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Us(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Hm(){return tc()==="http:"||tc()==="https:"}function tc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zm(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Hm()||wg()||"connection"in navigator)?navigator.onLine:!0}function Wm(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(e,n){this.shortDelay=e,this.longDelay=n,Pt(n>e,"Short delay should be less than long delay!"),this.isMobile=_g()||Sg()}get(){return zm()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ei(t,e){Pt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;_t("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;_t("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;_t("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Km={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gm=new Mr(3e4,6e4);function Ii(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Hn(t,e,n,r,o={}){return Ou(t,o,async()=>{let s={},i={};r&&(e==="GET"?i=r:s={body:JSON.stringify(r)});const a=Nr(Object.assign({key:t.config.apiKey},i)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),ku.fetch()(Au(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))})}async function Ou(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Km),e);try{const o=new Jm(t),s=await Promise.race([n(),o.promise]);o.clearNetworkTimeout();const i=await s.json();if("needConfirmation"in i)throw qr(t,"account-exists-with-different-credential",i);if(s.ok&&!("errorMessage"in i))return i;{const a=s.ok?i.errorMessage:i.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw qr(t,"credential-already-in-use",i);if(c==="EMAIL_EXISTS")throw qr(t,"email-already-in-use",i);if(c==="USER_DISABLED")throw qr(t,"user-disabled",i);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Ci(t,u,l);pt(t,u)}}catch(o){if(o instanceof Jt)throw o;pt(t,"network-request-failed",{message:String(o)})}}async function qm(t,e,n,r,o={}){const s=await Hn(t,e,n,r,o);return"mfaPendingCredential"in s&&pt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Au(t,e,n,r){const o=`${e}${n}?${r}`;return t.config.emulator?Ei(t.config,o):`${t.config.apiScheme}://${o}`}class Jm{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(rt(this.auth,"network-request-failed")),Gm.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function qr(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const o=rt(t,e,r);return o.customData._tokenResponse=n,o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ym(t,e){return Hn(t,"POST","/v1/accounts:delete",e)}async function Ru(t,e){return Hn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cr(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Zm(t,e=!1){const n=Vn(t),r=await n.getIdToken(e),o=Pi(r);H(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const s=typeof o.firebase=="object"?o.firebase:void 0,i=s==null?void 0:s.sign_in_provider;return{claims:o,token:r,authTime:cr(as(o.auth_time)),issuedAtTime:cr(as(o.iat)),expirationTime:cr(as(o.exp)),signInProvider:i||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function as(t){return Number(t)*1e3}function Pi(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return to("JWT malformed, contained fewer than 3 sections"),null;try{const o=mu(n);return o?JSON.parse(o):(to("Failed to decode base64 JWT payload"),null)}catch(o){return to("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function nc(t){const e=Pi(t);return H(e,"internal-error"),H(typeof e.exp<"u","internal-error"),H(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Jt&&Xm(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Xm({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qm{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const o=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=cr(this.lastLoginAt),this.creationTime=cr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vo(t){var e;const n=t.auth,r=await t.getIdToken(),o=await yr(t,Ru(n,{idToken:r}));H(o==null?void 0:o.users.length,n,"internal-error");const s=o.users[0];t._notifyReloadListener(s);const i=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?$u(s.providerUserInfo):[],a=tb(t.providerData,i),c=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Bs(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function eb(t){const e=Vn(t);await vo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function tb(t,e){return[...t.filter(r=>!e.some(o=>o.providerId===r.providerId)),...e]}function $u(t){return t.map(e=>{var{providerId:n}=e,r=Si(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nb(t,e){const n=await Ou(t,{},async()=>{const r=Nr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:s}=t.config,i=Au(t,o,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",ku.fetch()(i,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function rb(t,e){return Hn(t,"POST","/v2/accounts:revokeToken",Ii(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){H(e.idToken,"internal-error"),H(typeof e.idToken<"u","internal-error"),H(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):nc(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){H(e.length!==0,"internal-error");const n=nc(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(H(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:o,expiresIn:s}=await nb(e,n);this.updateTokensAndExpiration(r,o,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:o,expirationTime:s}=n,i=new On;return r&&(H(typeof r=="string","internal-error",{appName:e}),i.refreshToken=r),o&&(H(typeof o=="string","internal-error",{appName:e}),i.accessToken=o),s&&(H(typeof s=="number","internal-error",{appName:e}),i.expirationTime=s),i}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new On,this.toJSON())}_performRefresh(){return _t("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xt(t,e){H(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class wt{constructor(e){var{uid:n,auth:r,stsTokenManager:o}=e,s=Si(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Qm(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Bs(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await yr(this,this.stsTokenManager.getToken(this.auth,e));return H(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Zm(this,e)}reload(){return eb(this)}_assign(e){this!==e&&(H(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new wt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){H(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await vo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(yt(this.auth.app))return Promise.reject(cn(this.auth));const e=await this.getIdToken();return await yr(this,Ym(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,o,s,i,a,c,l,u;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(o=n.email)!==null&&o!==void 0?o:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,m=(i=n.photoURL)!==null&&i!==void 0?i:void 0,S=(a=n.tenantId)!==null&&a!==void 0?a:void 0,P=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,C=(l=n.createdAt)!==null&&l!==void 0?l:void 0,v=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:E,emailVerified:M,isAnonymous:F,providerData:$,stsTokenManager:K}=n;H(E&&K,e,"internal-error");const D=On.fromJSON(this.name,K);H(typeof E=="string",e,"internal-error"),xt(d,e.name),xt(f,e.name),H(typeof M=="boolean",e,"internal-error"),H(typeof F=="boolean",e,"internal-error"),xt(g,e.name),xt(m,e.name),xt(S,e.name),xt(P,e.name),xt(C,e.name),xt(v,e.name);const z=new wt({uid:E,auth:e,email:f,emailVerified:M,displayName:d,isAnonymous:F,photoURL:m,phoneNumber:g,tenantId:S,stsTokenManager:D,createdAt:C,lastLoginAt:v});return $&&Array.isArray($)&&(z.providerData=$.map(G=>Object.assign({},G))),P&&(z._redirectEventId=P),z}static async _fromIdTokenResponse(e,n,r=!1){const o=new On;o.updateFromServerResponse(n);const s=new wt({uid:n.localId,auth:e,stsTokenManager:o,isAnonymous:r});return await vo(s),s}static async _fromGetAccountInfoResponse(e,n,r){const o=n.users[0];H(o.localId!==void 0,"internal-error");const s=o.providerUserInfo!==void 0?$u(o.providerUserInfo):[],i=!(o.email&&o.passwordHash)&&!(s!=null&&s.length),a=new On;a.updateFromIdToken(r);const c=new wt({uid:o.localId,auth:e,stsTokenManager:a,isAnonymous:i}),l={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:s,metadata:new Bs(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(s!=null&&s.length)};return Object.assign(c,l),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rc=new Map;function St(t){Pt(t instanceof Function,"Expected a class definition");let e=rc.get(t);return e?(Pt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,rc.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xu{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}xu.type="NONE";const oc=xu;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function no(t,e,n){return`firebase:${t}:${e}:${n}`}class An{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:o,name:s}=this.auth;this.fullUserKey=no(this.userKey,o.apiKey,s),this.fullPersistenceKey=no("persistence",o.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?wt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new An(St(oc),e,r);const o=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let s=o[0]||St(oc);const i=no(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(i);if(u){const d=wt._fromJSON(e,u);l!==s&&(a=d),s=l;break}}catch{}const c=o.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new An(s,e,r):(s=c[0],a&&await s._set(i,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==s)try{await l._remove(i)}catch{}})),new An(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sc(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Mu(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Nu(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ju(e))return"Blackberry";if(Uu(e))return"Webos";if(ki(e))return"Safari";if((e.includes("chrome/")||Lu(e))&&!e.includes("edge/"))return"Chrome";if(Du(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Nu(t=xe()){return/firefox\//i.test(t)}function ki(t=xe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Lu(t=xe()){return/crios\//i.test(t)}function Mu(t=xe()){return/iemobile/i.test(t)}function Du(t=xe()){return/android/i.test(t)}function ju(t=xe()){return/blackberry/i.test(t)}function Uu(t=xe()){return/webos/i.test(t)}function jo(t=xe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function ob(t=xe()){var e;return jo(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function sb(){return Cg()&&document.documentMode===10}function Bu(t=xe()){return jo(t)||Du(t)||Uu(t)||ju(t)||/windows phone/i.test(t)||Mu(t)}function ib(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fu(t,e=[]){let n;switch(t){case"Browser":n=sc(xe());break;case"Worker":n=`${sc(xe())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Lr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ab{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((i,a)=>{try{const c=e(s);i(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const o of n)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cb(t,e={}){return Hn(t,"GET","/v2/passwordPolicy",Ii(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lb=6;class ub{constructor(e){var n,r,o,s;const i=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=i.minPasswordLength)!==null&&n!==void 0?n:lb,i.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=i.maxPasswordLength),i.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=i.containsLowercaseCharacter),i.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=i.containsUppercaseCharacter),i.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=i.containsNumericCharacter),i.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=i.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,o,s,i,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(o=c.containsLowercaseLetter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(s=c.containsUppercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsNumericCharacter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),o&&(n.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let o=0;o<e.length;o++)r=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,o,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class db{constructor(e,n,r,o){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ic(this),this.idTokenSubscription=new ic(this),this.beforeStateQueue=new ab(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Pu,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=St(n)),this._initializationPromise=this.queue(async()=>{var r,o;if(!this._deleted&&(this.persistenceManager=await An.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Ru(this,{idToken:e}),r=await wt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(yt(this.app)){const i=this.app.settings.authIdToken;return i?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(i).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let o=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=o==null?void 0:o._redirectEventId,c=await this.tryRedirectSignIn(e);(!i||i===a)&&(c!=null&&c.user)&&(o=c.user,s=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(o)}catch(i){o=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return H(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await vo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Wm()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(yt(this.app))return Promise.reject(cn(this));const n=e?Vn(e):null;return n&&H(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&H(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return yt(this.app)?Promise.reject(cn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return yt(this.app)?Promise.reject(cn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(St(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await cb(this),n=new ub(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new xr("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await rb(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&St(e)||this._popupRedirectResolver;H(n,this,"argument-error"),this.redirectPersistenceManager=await An.create(this,[St(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,o){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let i=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(H(a,this,"internal-error"),a.then(()=>{i||s(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,o);return()=>{i=!0,c()}}else{const c=e.addObserver(n);return()=>{i=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return H(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Fu(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const o=await this._getAppCheckToken();return o&&(n["X-Firebase-AppCheck"]=o),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Fm(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Uo(t){return Vn(t)}class ic{constructor(e){this.auth=e,this.observer=null,this.addObserver=Ag(n=>this.observer=n)}get next(){return H(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Oi={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function fb(t){Oi=t}function hb(t){return Oi.loadJS(t)}function pb(){return Oi.gapiScript}function gb(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mb(t,e){const n=Su(t,"auth");if(n.isInitialized()){const o=n.getImmediate(),s=n.getOptions();if(go(s,e??{}))return o;pt(o,"already-initialized")}return n.initialize({options:e})}function bb(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(St);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function vb(t,e,n){const r=Uo(t);H(r._canInitEmulator,r,"emulator-config-failed"),H(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const o=!!(n!=null&&n.disableWarnings),s=Vu(e),{host:i,port:a}=yb(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${i}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:i,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:o})}),o||_b()}function Vu(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function yb(t){const e=Vu(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(r);if(o){const s=o[1];return{host:s,port:ac(r.substr(s.length+1))}}else{const[s,i]=r.split(":");return{host:s,port:ac(i)}}}function ac(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function _b(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hu{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return _t("not implemented")}_getIdTokenResponse(e){return _t("not implemented")}_linkToIdToken(e,n){return _t("not implemented")}_getReauthenticationResolver(e){return _t("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rn(t,e){return qm(t,"POST","/v1/accounts:signInWithIdp",Ii(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wb="http://localhost";class dn extends Hu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new dn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):pt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:o}=n,s=Si(n,["providerId","signInMethod"]);if(!r||!o)return null;const i=new dn(r,o);return i.idToken=s.idToken||void 0,i.accessToken=s.accessToken||void 0,i.secret=s.secret,i.nonce=s.nonce,i.pendingToken=s.pendingToken||null,i}_getIdTokenResponse(e){const n=this.buildRequest();return Rn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Rn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Rn(e,n)}buildRequest(){const e={requestUri:wb,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Nr(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr extends Ai{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut extends Dr{constructor(){super("facebook.com")}static credential(e){return dn._fromParams({providerId:Ut.PROVIDER_ID,signInMethod:Ut.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ut.credentialFromTaggedObject(e)}static credentialFromError(e){return Ut.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ut.credential(e.oauthAccessToken)}catch{return null}}}Ut.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ut.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt extends Dr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return dn._fromParams({providerId:tt.PROVIDER_ID,signInMethod:tt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return tt.credentialFromTaggedObject(e)}static credentialFromError(e){return tt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return tt.credential(n,r)}catch{return null}}}tt.GOOGLE_SIGN_IN_METHOD="google.com";tt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt extends Dr{constructor(){super("github.com")}static credential(e){return dn._fromParams({providerId:Bt.PROVIDER_ID,signInMethod:Bt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Bt.credentialFromTaggedObject(e)}static credentialFromError(e){return Bt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Bt.credential(e.oauthAccessToken)}catch{return null}}}Bt.GITHUB_SIGN_IN_METHOD="github.com";Bt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft extends Dr{constructor(){super("twitter.com")}static credential(e,n){return dn._fromParams({providerId:Ft.PROVIDER_ID,signInMethod:Ft.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Ft.credentialFromTaggedObject(e)}static credentialFromError(e){return Ft.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Ft.credential(n,r)}catch{return null}}}Ft.TWITTER_SIGN_IN_METHOD="twitter.com";Ft.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,o=!1){const s=await wt._fromIdTokenResponse(e,r,o),i=cc(r);return new Un({user:s,providerId:i,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const o=cc(r);return new Un({user:e,providerId:o,_tokenResponse:r,operationType:n})}}function cc(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo extends Jt{constructor(e,n,r,o){var s;super(n.code,n.message),this.operationType=r,this.user=o,Object.setPrototypeOf(this,yo.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,o){return new yo(e,n,r,o)}}function zu(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?yo._fromErrorAndOperation(t,s,e,r):s})}async function Sb(t,e,n=!1){const r=await yr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Un._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cb(t,e,n=!1){const{auth:r}=t;if(yt(r.app))return Promise.reject(cn(r));const o="reauthenticate";try{const s=await yr(t,zu(r,o,e,t),n);H(s.idToken,r,"internal-error");const i=Pi(s.idToken);H(i,r,"internal-error");const{sub:a}=i;return H(t.uid===a,r,"user-mismatch"),Un._forOperation(t,o,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&pt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tb(t,e,n=!1){if(yt(t.app))return Promise.reject(cn(t));const r="signIn",o=await zu(t,r,e),s=await Un._fromIdTokenResponse(t,r,o);return n||await t._updateCurrentUser(s.user),s}function Eb(t,e,n,r){return Vn(t).onIdTokenChanged(e,n,r)}function Ib(t,e,n){return Vn(t).beforeAuthStateChanged(e,n)}const _o="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(_o,"1"),this.storage.removeItem(_o),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pb(){const t=xe();return ki(t)||jo(t)}const kb=1e3,Ob=10;class Ku extends Wu{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Pb()&&ib(),this.fallbackToPolling=Bu(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),o=this.localCache[n];r!==o&&e(n,o,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((i,a,c)=>{this.notifyListeners(i,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const i=this.storage.getItem(r);if(e.newValue!==i)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const o=()=>{const i=this.storage.getItem(r);!n&&this.localCache[r]===i||this.notifyListeners(r,i)},s=this.storage.getItem(r);sb()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,Ob):o()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const o of Array.from(r))o(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},kb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ku.type="LOCAL";const Ab=Ku;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu extends Wu{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Gu.type="SESSION";const qu=Gu;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rb(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(o=>o.isListeningto(e));if(n)return n;const r=new Bo(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:o,data:s}=n.data,i=this.handlersMap[o];if(!(i!=null&&i.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:o});const a=Array.from(i).map(async l=>l(n.origin,s)),c=await Rb(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:o,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Bo.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ri(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $b{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let s,i;return new Promise((a,c)=>{const l=Ri("",20);o.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);i={messageChannel:o,onMessage(d){const f=d;if(f.data.eventId===l)switch(f.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(u),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(i),o.port1.addEventListener("message",i.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[o.port2])}).finally(()=>{i&&this.removeMessageHandler(i)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(){return window}function xb(t){dt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ju(){return typeof dt().WorkerGlobalScope<"u"&&typeof dt().importScripts=="function"}async function Nb(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Lb(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Mb(){return Ju()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yu="firebaseLocalStorageDb",Db=1,wo="firebaseLocalStorage",Zu="fbase_key";class jr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Fo(t,e){return t.transaction([wo],e?"readwrite":"readonly").objectStore(wo)}function jb(){const t=indexedDB.deleteDatabase(Yu);return new jr(t).toPromise()}function Fs(){const t=indexedDB.open(Yu,Db);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(wo,{keyPath:Zu})}catch(o){n(o)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(wo)?e(r):(r.close(),await jb(),e(await Fs()))})})}async function lc(t,e,n){const r=Fo(t,!0).put({[Zu]:e,value:n});return new jr(r).toPromise()}async function Ub(t,e){const n=Fo(t,!1).get(e),r=await new jr(n).toPromise();return r===void 0?null:r.value}function uc(t,e){const n=Fo(t,!0).delete(e);return new jr(n).toPromise()}const Bb=800,Fb=3;class Xu{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Fs(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Fb)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ju()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Bo._getInstance(Mb()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Nb(),!this.activeServiceWorker)return;this.sender=new $b(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Lb()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Fs();return await lc(e,_o,"1"),await uc(e,_o),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>lc(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Ub(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>uc(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const s=Fo(o,!1).getAll();return new jr(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:o,value:s}of e)r.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(s)&&(this.notifyListeners(o,s),n.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!r.has(o)&&(this.notifyListeners(o,null),n.push(o));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const o of Array.from(r))o(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Bb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Xu.type="LOCAL";const Vb=Xu;new Mr(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qu(t,e){return e?St(e):(H(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i extends Hu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Rn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Rn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Rn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Hb(t){return Tb(t.auth,new $i(t),t.bypassAuthState)}function zb(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),Cb(n,new $i(t),t.bypassAuthState)}async function Wb(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),Sb(n,new $i(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ed{constructor(e,n,r,o,s=!1){this.auth=e,this.resolver=r,this.user=o,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:o,tenantId:s,error:i,type:a}=e;if(i){this.reject(i);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Hb;case"linkViaPopup":case"linkViaRedirect":return Wb;case"reauthViaPopup":case"reauthViaRedirect":return zb;default:pt(this.auth,"internal-error")}}resolve(e){Pt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Pt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kb=new Mr(2e3,1e4);async function Gb(t,e,n){if(yt(t.app))return Promise.reject(rt(t,"operation-not-supported-in-this-environment"));const r=Uo(t);Vm(t,e,Ai);const o=Qu(r,n);return new rn(r,"signInViaPopup",e,o).executeNotNull()}class rn extends ed{constructor(e,n,r,o,s){super(e,n,o,s),this.provider=r,this.authWindow=null,this.pollId=null,rn.currentPopupAction&&rn.currentPopupAction.cancel(),rn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return H(e,this.auth,"internal-error"),e}async onExecution(){Pt(this.filter.length===1,"Popup operations only handle one event");const e=Ri();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(rt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(rt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,rn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(rt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Kb.get())};e()}}rn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qb="pendingRedirect",ro=new Map;class Jb extends ed{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ro.get(this.auth._key());if(!e){try{const r=await Yb(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ro.set(this.auth._key(),e)}return this.bypassAuthState||ro.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Yb(t,e){const n=Qb(e),r=Xb(t);if(!await r._isAvailable())return!1;const o=await r._get(n)==="true";return await r._remove(n),o}function Zb(t,e){ro.set(t._key(),e)}function Xb(t){return St(t._redirectPersistence)}function Qb(t){return no(qb,t.config.apiKey,t.name)}async function ev(t,e,n=!1){if(yt(t.app))return Promise.reject(cn(t));const r=Uo(t),o=Qu(r,e),i=await new Jb(r,o,n).execute();return i&&!n&&(delete i.user._redirectEventId,await r._persistUserIfCurrent(i.user),await r._setRedirectUser(null,e)),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tv=10*60*1e3;class nv{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!rv(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!td(e)){const o=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(rt(this.auth,o))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=tv&&this.cachedEventUids.clear(),this.cachedEventUids.has(dc(e))}saveEventToCache(e){this.cachedEventUids.add(dc(e)),this.lastProcessedEventTime=Date.now()}}function dc(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function td({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function rv(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return td(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ov(t,e={}){return Hn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sv=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,iv=/^https?/;async function av(t){if(t.config.emulator)return;const{authorizedDomains:e}=await ov(t);for(const n of e)try{if(cv(n))return}catch{}pt(t,"unauthorized-domain")}function cv(t){const e=Us(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const i=new URL(t);return i.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&i.hostname===r}if(!iv.test(n))return!1;if(sv.test(t))return r===t;const o=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lv=new Mr(3e4,6e4);function fc(){const t=dt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function uv(t){return new Promise((e,n)=>{var r,o,s;function i(){fc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{fc(),n(rt(t,"network-request-failed"))},timeout:lv.get()})}if(!((o=(r=dt().gapi)===null||r===void 0?void 0:r.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((s=dt().gapi)===null||s===void 0)&&s.load)i();else{const a=gb("iframefcb");return dt()[a]=()=>{gapi.load?i():n(rt(t,"network-request-failed"))},hb(`${pb()}?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw oo=null,e})}let oo=null;function dv(t){return oo=oo||uv(t),oo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fv=new Mr(5e3,15e3),hv="__/auth/iframe",pv="emulator/auth/iframe",gv={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},mv=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function bv(t){const e=t.config;H(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ei(e,pv):`https://${t.config.authDomain}/${hv}`,r={apiKey:e.apiKey,appName:t.name,v:Lr},o=mv.get(t.config.apiHost);o&&(r.eid=o);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Nr(r).slice(1)}`}async function vv(t){const e=await dv(t),n=dt().gapi;return H(n,t,"internal-error"),e.open({where:document.body,url:bv(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:gv,dontclear:!0},r=>new Promise(async(o,s)=>{await r.restyle({setHideOnLeave:!1});const i=rt(t,"network-request-failed"),a=dt().setTimeout(()=>{s(i)},fv.get());function c(){dt().clearTimeout(a),o(r)}r.ping(c).then(c,()=>{s(i)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yv={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},_v=500,wv=600,Sv="_blank",Cv="http://localhost";class hc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Tv(t,e,n,r=_v,o=wv){const s=Math.max((window.screen.availHeight-o)/2,0).toString(),i=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},yv),{width:r.toString(),height:o.toString(),top:s,left:i}),l=xe().toLowerCase();n&&(a=Lu(l)?Sv:n),Nu(l)&&(e=e||Cv,c.scrollbars="yes");const u=Object.entries(c).reduce((f,[g,m])=>`${f}${g}=${m},`,"");if(ob(l)&&a!=="_self")return Ev(e||"",a),new hc(null);const d=window.open(e||"",a,u);H(d,t,"popup-blocked");try{d.focus()}catch{}return new hc(d)}function Ev(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iv="__/auth/handler",Pv="emulator/auth/handler",kv=encodeURIComponent("fac");async function pc(t,e,n,r,o,s){H(t.config.authDomain,t,"auth-domain-config-required"),H(t.config.apiKey,t,"invalid-api-key");const i={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Lr,eventId:o};if(e instanceof Ai){e.setDefaultLanguage(t.languageCode),i.providerId=e.providerId||"",Og(e.getCustomParameters())||(i.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,d]of Object.entries(s||{}))i[u]=d}if(e instanceof Dr){const u=e.getScopes().filter(d=>d!=="");u.length>0&&(i.scopes=u.join(","))}t.tenantId&&(i.tid=t.tenantId);const a=i;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${kv}=${encodeURIComponent(c)}`:"";return`${Ov(t)}?${Nr(a).slice(1)}${l}`}function Ov({config:t}){return t.emulator?Ei(t,Pv):`https://${t.authDomain}/${Iv}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cs="webStorageSupport";class Av{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=qu,this._completeRedirectFn=ev,this._overrideRedirectResult=Zb}async _openPopup(e,n,r,o){var s;Pt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const i=await pc(e,n,r,Us(),o);return Tv(e,i,Ri())}async _openRedirect(e,n,r,o){await this._originValidation(e);const s=await pc(e,n,r,Us(),o);return xb(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:o,promise:s}=this.eventManagers[n];return o?Promise.resolve(o):(Pt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await vv(e),r=new nv(e);return n.register("authEvent",o=>(H(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:r.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(cs,{type:cs},o=>{var s;const i=(s=o==null?void 0:o[0])===null||s===void 0?void 0:s[cs];i!==void 0&&n(!!i),pt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=av(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Bu()||ki()||jo()}}const Rv=Av;var gc="@firebase/auth",mc="1.7.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $v{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){H(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xv(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Nv(t){br(new jn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:i,authDomain:a}=r.options;H(i&&!i.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:i,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Fu(t)},l=new db(r,o,s,c);return bb(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),br(new jn("auth-internal",e=>{const n=Uo(e.getProvider("auth").getImmediate());return(r=>new $v(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),kn(gc,mc,xv(t)),kn(gc,mc,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lv=5*60,Mv=vu("authIdTokenMaxAge")||Lv;let bc=null;const Dv=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Mv)return;const o=n==null?void 0:n.token;bc!==o&&(bc=o,await fetch(t,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function nd(t=Am()){const e=Su(t,"auth");if(e.isInitialized())return e.getImmediate();const n=mb(t,{popupRedirectResolver:Rv,persistence:[Vb,Ab,qu]}),r=vu("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const i=Dv(s.toString());Ib(n,i,()=>i(n.currentUser)),Eb(n,a=>i(a))}}const o=vg("auth");return o&&vb(n,`http://${o}`),n}function jv(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}fb({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=o=>{const s=rt("internal-error");s.customData=o,n(s)},r.type="text/javascript",r.charset="UTF-8",jv().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Nv("Browser");const Uv={class:"w-full h-full absolute flex"},Bv={class:"h-fit m-auto px-2 flex flex-col-reverse rounded-lg md:flex-row w-4/5 md:w-2/3 py-10 bg-slate-50 shadow-2xl"},Fv={class:"flex z-50 md:py-2 w-full h-full"},Vv={class:"w-full h-full py-2 flex flex-col px-2 md:h-full m-auto md:m-0"},Hv={class:"w-full h-full flex flex-col space-y-8 text-center md:space-y-12"},zv=be("h2",{class:"text-slate-800 mx-auto font-bold text-lg"},"Welcome!",-1),Wv=be("h4",{class:"text-slate-800 font-semibold text-xs md:text-base"},"Sign in with your Gmail account to login.",-1),Kv=be("img",{alt:"gmail",src:ug,class:"w-12 -ml-1 m-2 px-2 md:w-16"},null,-1),Gv=be("h3",{class:"mr-4 text-xs text-slate-800 font-bold md:text-base"},"Log in with Gmail",-1),qv={__name:"landingPage",setup(t){function e(){const n=nd(),r=new tt;Gb(n,r).then(o=>{const i=tt.credentialFromResult(o).accessToken,a=o.user;return tn.push("/load"),{token:i,user:a}}).catch(o=>{const s=o.code,i=o.message,a=tt.credentialFromError(o);return{errorCode:s,errorMessage:i,credential:a}})}return(n,r)=>{const o=xn("Tag");return se(),Te("div",Uv,[be("div",Bv,[be("div",Fv,[be("div",Vv,[be("div",Hv,[zv,Wv,Pe(o,{onClick:e,class:"cursor-pointer mx-auto flex flex-row justify-between mt-44 py-4 pr-4 shadow-xl drop-shadow-sm rounded-full"},{default:pr(()=>[Kv,Gv]),_:1})])])])])])}}};var Jv="firebase",Yv="10.12.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */kn(Jv,Yv,"app");const Zv={apiKey:"AIzaSyC6dGq3WRklhoroUTY1UcXMtubcQjknfOU",authDomain:"vstore-bb580.firebaseapp.com",databaseURL:"https://vstore-bb580-default-rtdb.firebaseio.com",projectId:"vstore-bb580",storageBucket:"vstore-bb580.appspot.com",messagingSenderId:"707856283312",appId:"1:707856283312:web:35a64aaa577cdc6daa6d75"},Xv=Cu(Zv),ls=nd(Xv),tn=cg({history:Tp("/introToMap"),routes:[{path:"/",name:"landingPage",component:qv},{path:"/home",name:"home",meta:{requiresAuth:!0},component:()=>ka(()=>import("./Home-C38zqZ1U.js"),__vite__mapDeps([0,1,2]))},{path:"/load",name:"load",component:()=>ka(()=>import("./Loading-BuGhIwap.js"),__vite__mapDeps([3,1,2]))}]});ls.onAuthStateChanged(t=>{if(!t)return tn.push("/");tn.beforeEach(async e=>{if(e.path=="/"&&ls.currentUser)return tn.push(tn.currentRoute);if(e.path=="/Home"&&!ls.currentUser)return tn.push("/")})});var Qv=Object.defineProperty,vc=Object.getOwnPropertySymbols,ey=Object.prototype.hasOwnProperty,ty=Object.prototype.propertyIsEnumerable,yc=(t,e,n)=>e in t?Qv(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,ny=(t,e)=>{for(var n in e||(e={}))ey.call(e,n)&&yc(t,n,e[n]);if(vc)for(var n of vc(e))ty.call(e,n)&&yc(t,n,e[n]);return t};function pn(t){return t==null||t===""||Array.isArray(t)&&t.length===0||!(t instanceof Date)&&typeof t=="object"&&Object.keys(t).length===0}function xi(t){return!!(t&&t.constructor&&t.call&&t.apply)}function Re(t){return!pn(t)}function gt(t,e=!0){return t instanceof Object&&t.constructor===Object&&(e||Object.keys(t).length!==0)}function ft(t,...e){return xi(t)?t(...e):t}function Be(t,e=!0){return typeof t=="string"&&(e||t!=="")}function Qe(t){return Be(t)?t.replace(/(-|_)/g,"").toLowerCase():t}function Ni(t,e="",n={}){const r=Qe(e).split("."),o=r.shift();return o?gt(t)?Ni(ft(t[Object.keys(t).find(s=>Qe(s)===o)||""],n),r.join("."),n):void 0:ft(t,n)}function Li(t,e=!0){return Array.isArray(t)&&(e||t.length!==0)}function rd(t){return Re(t)&&!isNaN(t)}function Ct(t,e){if(e){const n=e.test(t);return e.lastIndex=0,n}return!1}function ry(...t){const e=(n={},r={})=>{const o=ny({},n);return Object.keys(r).forEach(s=>{gt(r[s])&&s in n&&gt(n[s])?o[s]=e(n[s],r[s]):o[s]=r[s]}),o};return t.reduce((n,r,o)=>o===0?r:e(n,r),{})}function lr(t){return t&&t.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":")}function oy(t){return Be(t,!1)?t[0].toUpperCase()+t.slice(1):t}function od(t){return Be(t)?t.replace(/(_)/g,"-").replace(/[A-Z]/g,(e,n)=>n===0?e:"-"+e.toLowerCase()).toLowerCase():t}function _c(t){return Be(t)?t.replace(/[A-Z]/g,(e,n)=>n===0?e:"."+e.toLowerCase()).toLowerCase():t}function Mi(){const t=new Map;return{on(e,n){let r=t.get(e);return r?r.push(n):r=[n],t.set(e,r),this},off(e,n){let r=t.get(e);return r&&r.splice(r.indexOf(n)>>>0,1),this},emit(e,n){let r=t.get(e);r&&r.slice().map(o=>{o(n)})},clear(){t.clear()}}}var sy=Object.defineProperty,iy=Object.defineProperties,ay=Object.getOwnPropertyDescriptors,So=Object.getOwnPropertySymbols,sd=Object.prototype.hasOwnProperty,id=Object.prototype.propertyIsEnumerable,wc=(t,e,n)=>e in t?sy(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Jn=(t,e)=>{for(var n in e||(e={}))sd.call(e,n)&&wc(t,n,e[n]);if(So)for(var n of So(e))id.call(e,n)&&wc(t,n,e[n]);return t},us=(t,e)=>iy(t,ay(e)),Yn=(t,e)=>{var n={};for(var r in t)sd.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&So)for(var r of So(t))e.indexOf(r)<0&&id.call(t,r)&&(n[r]=t[r]);return n},cy=Mi(),Xe=cy;function Sc(t,e){Li(t)?t.push(...e||[]):gt(t)&&Object.assign(t,e)}function ly(t){return gt(t)&&t.hasOwnProperty("value")&&t.hasOwnProperty("type")?t.value:t}function Cc(t,e=""){return["opacity","z-index","line-height","font-weight","flex","flex-grow","flex-shrink","order"].some(r=>e.endsWith(r))?t:`${t}`.trim().split(" ").map(s=>rd(s)?`${s}px`:s).join(" ")}function uy(t){return t.replaceAll(/ /g,"").replace(/[^\w]/g,"-")}function Vs(t="",e=""){return uy(`${Be(t,!1)&&Be(e,!1)?`${t}-`:t}${e}`)}function ad(t="",e=""){return`--${Vs(t,e)}`}function cd(t,e="",n="",r=[],o){if(Be(t)){const s=/{([^}]*)}/g,i=t.trim();if(Ct(i,s)){const a=i.replaceAll(s,u=>{const f=u.replace(/{|}/g,"").split(".").filter(g=>!r.some(m=>Ct(g,m)));return`var(${ad(n,od(f.join("-")))}${Re(o)?`, ${o}`:""})`}),c=/(\d+\s+[\+\-\*\/]\s+\d+)/g,l=/var\([^)]+\)/g;return Ct(a.replace(l,"0"),c)?`calc(${a})`:a}return Cc(i,e)}else if(rd(t))return Cc(t,e)}function dy(t,e,n){Be(e,!1)&&t.push(`${e}:${n};`)}function Xn(t,e){return t?`${t}{${e}}`:""}var ds=(...t)=>fy(ue.getTheme(),...t),fy=(t={},e,n,r="variable")=>{if(e){const{variable:o,options:s}=ue.defaults||{},{prefix:i,transform:a}=(t==null?void 0:t.options)||s||{},l=Ct(e,/{([^}]*)}/g)?e:`{${e}}`;return r==="value"||a==="strict"?ue.getTokenValue(e):cd(l,void 0,i,[o.excludedKeyRegex],n)}return""};function hy(t,e={}){const n=ue.defaults.variable,{prefix:r=n.prefix,selector:o=n.selector,excludedKeyRegex:s=n.excludedKeyRegex}=e,i=(l,u="")=>Object.entries(l).reduce((d,[f,g])=>{const m=Ct(f,s)?Vs(u):Vs(u,od(f)),S=ly(g);if(gt(S)){const{variables:P,tokens:C}=i(S,m);Sc(d.tokens,C),Sc(d.variables,P)}else d.tokens.push((r?m.replace(`${r}-`,""):m).replaceAll("-",".")),dy(d.variables,ad(m),cd(S,m,r,[s]));return d},{variables:[],tokens:[]}),{variables:a,tokens:c}=i(t,r);return{value:a,tokens:c,declarations:a.join(""),css:Xn(o,a.join(""))}}var Ye={regex:{rules:{class:{pattern:/^\.([a-zA-Z][\w-]*)$/,resolve(t){return{type:"class",selector:t,matched:this.pattern.test(t.trim())}}},attr:{pattern:/^\[(.*)\]$/,resolve(t){return{type:"attr",selector:`:root${t}`,matched:this.pattern.test(t.trim())}}},media:{pattern:/^@media (.*)$/,resolve(t){return{type:"media",selector:`${t}{:root{[CSS]}}`,matched:this.pattern.test(t.trim())}}},system:{pattern:/^system$/,resolve(t){return{type:"system",selector:"@media (prefers-color-scheme: dark){:root{[CSS]}}",matched:this.pattern.test(t.trim())}}},custom:{resolve(t){return{type:"custom",selector:t,matched:!0}}}},resolve(t){const e=Object.keys(this.rules).filter(n=>n!=="custom").map(n=>this.rules[n]);return[t].flat().map(n=>{var r;return(r=e.map(o=>o.resolve(n)).find(o=>o.matched))!=null?r:this.rules.custom.resolve(n)})}},_toVariables(t,e){return hy(t,{prefix:e==null?void 0:e.prefix})},getCommon({name:t="",theme:e={},params:n,set:r,defaults:o}){var s,i,a,c;const{preset:l,options:u}=e;let d,f,g,m;if(Re(l)){const{primitive:S,semantic:P}=l,C=P||{},{colorScheme:v}=C,E=Yn(C,["colorScheme"]),M=v||{},{dark:F}=M,$=Yn(M,["dark"]),K=Re(S)?this._toVariables({primitive:S},u):{},D=Re(E)?this._toVariables({semantic:E},u):{},z=Re($)?this._toVariables({light:$},u):{},G=Re(F)?this._toVariables({dark:F},u):{},[re,L]=[(s=K.declarations)!=null?s:"",K.tokens],[ee,_e]=[(i=D.declarations)!=null?i:"",D.tokens||[]],[De,fe]=[(a=z.declarations)!=null?a:"",z.tokens||[]],[te,Z]=[(c=G.declarations)!=null?c:"",G.tokens||[]];d=this.transformCSS(t,re,"light","variable",u,r,o),f=L;const He=this.transformCSS(t,`${ee}${De}color-scheme:light`,"light","variable",u,r,o),Ne=this.transformCSS(t,`${te}color-scheme:dark`,"dark","variable",u,r,o);g=`${He}${Ne}`,m=[...new Set([..._e,...fe,...Z])]}return{primitive:{css:d,tokens:f},semantic:{css:g,tokens:m}}},getPreset({name:t="",preset:e={},options:n,params:r,set:o,defaults:s,selector:i}){var a,c,l;const u=t.replace("-directive",""),d=e,{colorScheme:f}=d,g=Yn(d,["colorScheme"]),m=f||{},{dark:S}=m,P=Yn(m,["dark"]),C=Re(g)?this._toVariables({[u]:g},n):{},v=Re(P)?this._toVariables({[u]:P},n):{},E=Re(S)?this._toVariables({[u]:S},n):{},[M,F]=[(a=C.declarations)!=null?a:"",C.tokens||[]],[$,K]=[(c=v.declarations)!=null?c:"",v.tokens||[]],[D,z]=[(l=E.declarations)!=null?l:"",E.tokens||[]],G=[...new Set([...F,...K,...z])],re=this.transformCSS(u,`${M}${$}`,"light","variable",n,o,s,i),L=this.transformCSS(u,D,"dark","variable",n,o,s,i);return{css:`${re}${L}`,tokens:G}},getPresetC({name:t="",theme:e={},params:n,set:r,defaults:o}){var s;const{preset:i,options:a}=e,c=(s=i==null?void 0:i.components)==null?void 0:s[t];return this.getPreset({name:t,preset:c,options:a,params:n,set:r,defaults:o})},getPresetD({name:t="",theme:e={},params:n,set:r,defaults:o}){var s;const i=t.replace("-directive",""),{preset:a,options:c}=e,l=(s=a==null?void 0:a.directives)==null?void 0:s[i];return this.getPreset({name:i,preset:l,options:c,params:n,set:r,defaults:o})},getColorSchemeOption(t,e){var n;return this.regex.resolve((n=t.darkModeSelector)!=null?n:e.options.darkModeSelector)},getLayerOrder(t,e={},n,r){const{cssLayer:o}=e;return o?`@layer ${ft(o.order||"primeui",n)}`:""},getCommonStyleSheet({name:t="",theme:e={},params:n,props:r={},set:o,defaults:s}){const i=this.getCommon({name:t,theme:e,params:n,set:o,defaults:s}),a=Object.entries(r).reduce((c,[l,u])=>c.push(`${l}="${u}"`)&&c,[]).join(" ");return Object.entries(i||{}).reduce((c,[l,u])=>{if(u!=null&&u.css){const d=lr(u==null?void 0:u.css),f=`${l}-variables`;c.push(`<style type="text/css" data-primevue-style-id="${f}" ${a}>${d}</style>`)}return c},[]).join("")},getStyleSheet({name:t="",theme:e={},params:n,props:r={},set:o,defaults:s}){var i;const a={name:t,theme:e,params:n,set:o,defaults:s},c=(i=t.includes("-directive")?this.getPresetD(a):this.getPresetC(a))==null?void 0:i.css,l=Object.entries(r).reduce((u,[d,f])=>u.push(`${d}="${f}"`)&&u,[]).join(" ");return c?`<style type="text/css" data-primevue-style-id="${t}-variables" ${l}>${lr(c)}</style>`:""},createTokens(t={},e,n="",r="",o={}){return Object.entries(t).forEach(([s,i])=>{const a=Ct(s,e.variable.excludedKeyRegex)?n:n?`${n}.${_c(s)}`:_c(s),c=r?`${r}.${s}`:s;gt(i)?this.createTokens(i,e,a,c,o):(o[a]||(o[a]={paths:[],computed(l,u={}){if(l){const d=this.paths.find(f=>f.scheme===l)||this.paths.find(f=>f.scheme==="none");return d==null?void 0:d.computed(l,u.binding)}return this.paths.map(d=>d.computed(d.scheme,u[d.scheme]))}}),o[a].paths.push({path:c,value:i,scheme:c.includes("colorScheme.light")?"light":c.includes("colorScheme.dark")?"dark":"none",computed(l,u={}){const d=/{([^}]*)}/g;let f=i;if(u.name=this.path,u.binding||(u.binding={}),Ct(i,d)){const m=i.trim().replaceAll(d,C=>{var v,E;const M=C.replace(/{|}/g,"");return(E=(v=o[M])==null?void 0:v.computed(l,u))==null?void 0:E.value}),S=/(\d+\w*\s+[\+\-\*\/]\s+\d+\w*)/g,P=/var\([^)]+\)/g;f=Ct(m.replace(P,"0"),S)?`calc(${m})`:m}return pn(u.binding)&&delete u.binding,{colorScheme:l,path:this.path,paths:u,value:f.includes("undefined")?void 0:f}}}))}),o},getTokenValue(t,e,n){var r;const s=(c=>c.split(".").filter(u=>!Ct(u.toLowerCase(),n.variable.excludedKeyRegex)).join("."))(e),i=e.includes("colorScheme.light")?"light":e.includes("colorScheme.dark")?"dark":void 0,a=[(r=t[s])==null?void 0:r.computed(i)].flat().filter(c=>c);return a.length===1?a[0].value:a.reduce((c={},l)=>{const u=l,{colorScheme:d}=u,f=Yn(u,["colorScheme"]);return c[d]=f,c},void 0)},transformCSS(t,e,n,r,o={},s,i,a){if(Re(e)){const{cssLayer:c}=o;if(r!=="style"){const l=this.getColorSchemeOption(o,i),u=a?Xn(a,e):e;e=n==="dark"?l.reduce((d,{selector:f})=>(Re(f)&&(d+=f.includes("[CSS]")?f.replace("[CSS]",u):Xn(f,u)),d),""):Xn(a??":root",e)}if(c){const l={name:"primeui",order:"primeui"};gt(c)&&(l.name=ft(c.name,{name:t,type:r})),Re(l.name)&&(e=Xn(`@layer ${l.name}`,e),s==null||s.layerNames(l.name))}return e}return""}},ue={defaults:{variable:{prefix:"p",selector:":root",excludedKeyRegex:/^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states)$/gi},options:{prefix:"p",darkModeSelector:"system",cssLayer:!1}},_theme:void 0,_layerNames:new Set,_loadedStyleNames:new Set,_loadingStyles:new Set,_tokens:{},update(t={}){const{theme:e}=t;e&&(this._theme=us(Jn({},e),{options:Jn(Jn({},this.defaults.options),e.options)}),this._tokens=Ye.createTokens(this.preset,this.defaults),this.clearLoadedStyleNames())},get theme(){return this._theme},get preset(){var t;return((t=this.theme)==null?void 0:t.preset)||{}},get options(){var t;return((t=this.theme)==null?void 0:t.options)||{}},get tokens(){return this._tokens},getTheme(){return this.theme},setTheme(t){this.update({theme:t}),Xe.emit("theme:change",t)},getPreset(){return this.preset},setPreset(t){this._theme=us(Jn({},this.theme),{preset:t}),this._tokens=Ye.createTokens(t,this.defaults),this.clearLoadedStyleNames(),Xe.emit("preset:change",t),Xe.emit("theme:change",this.theme)},getOptions(){return this.options},setOptions(t){this._theme=us(Jn({},this.theme),{options:t}),this.clearLoadedStyleNames(),Xe.emit("options:change",t),Xe.emit("theme:change",this.theme)},getLayerNames(){return[...this._layerNames]},setLayerNames(t){this._layerNames.add(t)},getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(t){return this._loadedStyleNames.has(t)},setLoadedStyleName(t){this._loadedStyleNames.add(t)},deleteLoadedStyleName(t){this._loadedStyleNames.delete(t)},clearLoadedStyleNames(){this._loadedStyleNames.clear()},getTokenValue(t){return Ye.getTokenValue(this.tokens,t,this.defaults)},getCommon(t="",e){return Ye.getCommon({name:t,theme:this.theme,params:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getComponent(t="",e){const n={name:t,theme:this.theme,params:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return Ye.getPresetC(n)},getDirective(t="",e){const n={name:t,theme:this.theme,params:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return Ye.getPresetD(n)},getCustomPreset(t="",e,n,r){const o={name:t,preset:e,options:this.options,selector:n,params:r,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return Ye.getPreset(o)},getLayerOrderCSS(t=""){return Ye.getLayerOrder(t,this.options,{names:this.getLayerNames()},this.defaults)},transformCSS(t="",e,n="style",r){return Ye.transformCSS(t,e,r,n,this.options,{layerNames:this.setLayerNames.bind(this)},this.defaults)},getCommonStyleSheet(t="",e,n={}){return Ye.getCommonStyleSheet({name:t,theme:this.theme,params:e,props:n,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getStyleSheet(t,e,n={}){return Ye.getStyleSheet({name:t,theme:this.theme,params:e,props:n,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},onStyleMounted(t){this._loadingStyles.add(t)},onStyleUpdated(t){this._loadingStyles.add(t)},onStyleLoaded(t,{name:e}){this._loadingStyles.size&&(this._loadingStyles.delete(e),Xe.emit(`theme:${e}:load`,t),!this._loadingStyles.size&&Xe.emit("theme:load"))}};function py(t,e){return t?t.classList?t.classList.contains(e):new RegExp("(^| )"+e+"( |$)","gi").test(t.className):!1}function gy(t,e){if(t&&e){const n=r=>{py(t,r)||(t.classList?t.classList.add(r):t.className+=" "+r)};[e].flat().filter(Boolean).forEach(r=>r.split(" ").forEach(n))}}function fs(t,e){if(t&&e){const n=r=>{t.classList?t.classList.remove(r):t.className=t.className.replace(new RegExp("(^|\\b)"+r.split(" ").join("|")+"(\\b|$)","gi")," ")};[e].flat().filter(Boolean).forEach(r=>r.split(" ").forEach(n))}}function my(t,e){if(t instanceof HTMLElement){let n=t.offsetWidth;if(e){let r=getComputedStyle(t);n+=parseFloat(r.marginLeft)+parseFloat(r.marginRight)}return n}return 0}function Vo(t){return typeof HTMLElement=="object"?t instanceof HTMLElement:t&&typeof t=="object"&&t!==null&&t.nodeType===1&&typeof t.nodeName=="string"}function Co(t,e={}){if(Vo(t)){const n=(r,o)=>{var s,i;const a=(s=t==null?void 0:t.$attrs)!=null&&s[r]?[(i=t==null?void 0:t.$attrs)==null?void 0:i[r]]:[];return[o].flat().reduce((c,l)=>{if(l!=null){const u=typeof l;if(u==="string"||u==="number")c.push(l);else if(u==="object"){const d=Array.isArray(l)?n(r,l):Object.entries(l).map(([f,g])=>r==="style"&&(g||g===0)?`${f.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${g}`:g?f:void 0);c=d.length?c.concat(d.filter(f=>!!f)):c}}return c},a)};Object.entries(e).forEach(([r,o])=>{if(o!=null){const s=r.match(/^on(.+)/);s?t.addEventListener(s[1].toLowerCase(),o):r==="p-bind"?Co(t,o):(o=r==="class"?[...new Set(n("class",o))].join(" ").trim():r==="style"?n("style",o).join(";").trim():o,(t.$attrs=t.$attrs||{})&&(t.$attrs[r]=o),t.setAttribute(r,o))}})}}function by(t,e={},...n){if(t){const r=document.createElement(t);return Co(r,e),r.append(...n),r}}function vy(t,e){return Vo(t)?t.matches(e)?t:t.querySelector(e):null}function yy(t,e){if(Vo(t)){const n=t.getAttribute(e);return isNaN(n)?n==="true"||n==="false"?n==="true":n:+n}}function Tc(t){if(t){let e=t.offsetHeight,n=getComputedStyle(t);return e-=parseFloat(n.paddingTop)+parseFloat(n.paddingBottom)+parseFloat(n.borderTopWidth)+parseFloat(n.borderBottomWidth),e}return 0}function _y(t){if(t){let e=t.parentNode;return e&&e instanceof ShadowRoot&&e.host&&(e=e.host),e}return null}function wy(t){if(t){let e=t.getBoundingClientRect();return{top:e.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:e.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}return{top:"auto",left:"auto"}}function Sy(t,e){if(t){let n=t.offsetHeight;if(e){let r=getComputedStyle(t);n+=parseFloat(r.marginTop)+parseFloat(r.marginBottom)}return n}return 0}function Cy(t){return!!(t!==null&&typeof t<"u"&&t.nodeName&&_y(t))}function Ec(t){if(t){let e=t.offsetWidth,n=getComputedStyle(t);return e-=parseFloat(n.paddingLeft)+parseFloat(n.paddingRight)+parseFloat(n.borderLeftWidth)+parseFloat(n.borderRightWidth),e}return 0}function ld(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function ud(t,e="",n){Vo(t)&&n!==null&&n!==void 0&&t.setAttribute(e,n)}var Vt={_loadedStyleNames:new Set,getLoadedStyleNames:function(){return this._loadedStyleNames},isStyleNameLoaded:function(e){return this._loadedStyleNames.has(e)},setLoadedStyleName:function(e){this._loadedStyleNames.add(e)},deleteLoadedStyleName:function(e){this._loadedStyleNames.delete(e)},clearLoadedStyleNames:function(){this._loadedStyleNames.clear()}};function _r(t){"@babel/helpers - typeof";return _r=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_r(t)}function Ic(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),n.push.apply(n,r)}return n}function Pc(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Ic(Object(n),!0).forEach(function(r){Ty(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Ic(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Ty(t,e,n){return(e=Ey(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Ey(t){var e=Iy(t,"string");return _r(e)=="symbol"?e:e+""}function Iy(t,e){if(_r(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(_r(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Py(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;Kl()?hi(t):e?t():li(t)}var ky=0;function Oy(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=er(!1),r=er(t),o=er(null),s=ld()?window.document:void 0,i=e.document,a=i===void 0?s:i,c=e.immediate,l=c===void 0?!0:c,u=e.manual,d=u===void 0?!1:u,f=e.name,g=f===void 0?"style_".concat(++ky):f,m=e.id,S=m===void 0?void 0:m,P=e.media,C=P===void 0?void 0:P,v=e.nonce,E=v===void 0?void 0:v,M=e.first,F=M===void 0?!1:M,$=e.onMounted,K=$===void 0?void 0:$,D=e.onUpdated,z=D===void 0?void 0:D,G=e.onLoad,re=G===void 0?void 0:G,L=e.props,ee=L===void 0?{}:L,_e=function(){},De=function(Z){var He=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(a){var Ne=Pc(Pc({},ee),He),ke=Ne.name||g,Ee=Ne.id||S,Ot=Ne.nonce||E;o.value=a.querySelector('style[data-primevue-style-id="'.concat(ke,'"]'))||a.getElementById(Ee)||a.createElement("style"),o.value.isConnected||(r.value=Z||t,Co(o.value,{type:"text/css",id:Ee,media:C,nonce:Ot}),F?a.head.prepend(o.value):a.head.appendChild(o.value),ud(o.value,"data-primevue-style-id",ke),Co(o.value,Ne),o.value.onload=function(st){return re==null?void 0:re(st,{name:ke})},K==null||K(ke)),!n.value&&(_e=vt(r,function(st){o.value.textContent=st,z==null||z(ke)},{immediate:!0}),n.value=!0)}},fe=function(){!a||!n.value||(_e(),Cy(o.value)&&a.head.removeChild(o.value),n.value=!1)};return l&&!d&&Py(De),{id:S,name:g,el:o,css:r,unload:fe,load:De,isLoaded:si(n)}}function wr(t){"@babel/helpers - typeof";return wr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},wr(t)}function kc(t,e){return xy(t)||$y(t,e)||Ry(t,e)||Ay()}function Ay(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ry(t,e){if(t){if(typeof t=="string")return Oc(t,e);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Oc(t,e):void 0}}function Oc(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}function $y(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r,o,s,i,a=[],c=!0,l=!1;try{if(s=(n=n.call(t)).next,e!==0)for(;!(c=(r=s.call(n)).done)&&(a.push(r.value),a.length!==e);c=!0);}catch(u){l=!0,o=u}finally{try{if(!c&&n.return!=null&&(i=n.return(),Object(i)!==i))return}finally{if(l)throw o}}return a}}function xy(t){if(Array.isArray(t))return t}function Ac(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),n.push.apply(n,r)}return n}function hs(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Ac(Object(n),!0).forEach(function(r){Ny(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Ac(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Ny(t,e,n){return(e=Ly(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Ly(t){var e=My(t,"string");return wr(e)=="symbol"?e:e+""}function My(t,e){if(wr(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(wr(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var Dy=function(e){var n=e.dt;return`
* {
    box-sizing: border-box;
}

/* Non vue overlay animations */
.p-connected-overlay {
    opacity: 0;
    transform: scaleY(0.8);
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-visible {
    opacity: 1;
    transform: scaleY(1);
}

.p-connected-overlay-hidden {
    opacity: 0;
    transform: scaleY(1);
    transition: opacity 0.1s linear;
}

/* Vue based overlay animations */
.p-connected-overlay-enter-from {
    opacity: 0;
    transform: scaleY(0.8);
}

.p-connected-overlay-leave-to {
    opacity: 0;
}

.p-connected-overlay-enter-active {
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-leave-active {
    transition: opacity 0.1s linear;
}

/* Toggleable Content */
.p-toggleable-content-enter-from,
.p-toggleable-content-leave-to {
    max-height: 0;
}

.p-toggleable-content-enter-to,
.p-toggleable-content-leave-from {
    max-height: 1000px;
}

.p-toggleable-content-leave-active {
    overflow: hidden;
    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1);
}

.p-toggleable-content-enter-active {
    overflow: hidden;
    transition: max-height 1s ease-in-out;
}

.p-disabled,
.p-disabled * {
    cursor: default;
    pointer-events: none;
    user-select: none;
}

.p-disabled,
.p-component:disabled {
    opacity: `.concat(n("disabled.opacity"),`;
}

.pi {
    font-size: `).concat(n("icon.size"),`;
}

.p-icon {
    width: `).concat(n("icon.size"),`;
    height: `).concat(n("icon.size"),`;
}

.p-overlay-mask {
    background: `).concat(n("mask.background"),`;
    color: `).concat(n("mask.color"),`;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.p-overlay-mask-enter {
    animation: p-overlay-mask-enter-animation `).concat(n("mask.transition.duration"),` forwards;
}

.p-overlay-mask-leave {
    animation: p-overlay-mask-leave-animation `).concat(n("mask.transition.duration"),` forwards;
}

@keyframes p-overlay-mask-enter-animation {
    from {
        background: transparent;
    }
    to {
        background: `).concat(n("mask.background"),`;
    }
}
@keyframes p-overlay-mask-leave-animation {
    from {
        background: `).concat(n("mask.background"),`;
    }
    to {
        background: transparent;
    }
}
`)},jy=function(e){var n=e.dt;return`
.p-hidden-accessible {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}

.p-hidden-accessible input,
.p-hidden-accessible select {
    transform: scale(0);
}

.p-overflow-hidden {
    overflow: hidden;
    padding-right: `.concat(n("scrollbar.width"),`;
}
`)},Uy={},By={},ve={name:"base",css:jy,theme:Dy,classes:Uy,inlineStyles:By,load:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:function(s){return s},o=r(ft(e,{dt:ds}));return o?Oy(lr(o),hs({name:this.name},n)):{}},loadCSS:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return this.load(this.css,e)},loadTheme:function(){var e=this,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return this.load(this.theme,n,function(r){return ue.transformCSS(n.name||e.name,r)})},getCommonTheme:function(e){return ue.getCommon(this.name,e)},getComponentTheme:function(e){return ue.getComponent(this.name,e)},getDirectiveTheme:function(e){return ue.getDirective(this.name,e)},getPresetTheme:function(e,n,r){return ue.getCustomPreset(this.name,e,n,r)},getLayerOrderThemeCSS:function(){return ue.getLayerOrderCSS(this.name)},getStyleSheet:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.css){var r=ft(this.css,{dt:ds}),o=lr("".concat(r).concat(e)),s=Object.entries(n).reduce(function(i,a){var c=kc(a,2),l=c[0],u=c[1];return i.push("".concat(l,'="').concat(u,'"'))&&i},[]).join(" ");return'<style type="text/css" data-primevue-style-id="'.concat(this.name,'" ').concat(s,">").concat(o,"</style>")}return""},getCommonThemeStyleSheet:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return ue.getCommonStyleSheet(this.name,e,n)},getThemeStyleSheet:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=[ue.getStyleSheet(this.name,e,n)];if(this.theme){var o=this.name==="base"?"global-style":"".concat(this.name,"-style"),s=ft(this.theme,{dt:ds}),i=lr(ue.transformCSS(o,s)),a=Object.entries(n).reduce(function(c,l){var u=kc(l,2),d=u[0],f=u[1];return c.push("".concat(d,'="').concat(f,'"'))&&c},[]).join(" ");r.push('<style type="text/css" data-primevue-style-id="'.concat(o,'" ').concat(a,">").concat(i,"</style>"))}return r.join("")},extend:function(e){return hs(hs({},this),{},{css:void 0,theme:void 0},e)}},Jr={};function Fy(t="pui_id_"){return Jr.hasOwnProperty(t)||(Jr[t]=0),Jr[t]++,`${t}${Jr[t]}`}function Vy(){let t=[];const e=(i,a,c=999)=>{const l=o(i,a,c),u=l.value+(l.key===i?0:c)+1;return t.push({key:i,value:u}),u},n=i=>{t=t.filter(a=>a.value!==i)},r=(i,a)=>o(i,a).value,o=(i,a,c=0)=>[...t].reverse().find(l=>a?!0:l.key===i)||{key:i,value:c},s=i=>i&&parseInt(i.style.zIndex,10)||0;return{get:s,set:(i,a,c)=>{a&&(a.style.zIndex=String(e(i,!0,c)))},clear:i=>{i&&(n(s(i)),i.style.zIndex="")},getCurrent:i=>r(i,!0)}}var ps=Vy();function Di(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"pv_id_";return Fy(t)}var Rc=ve.extend({name:"common"});function Sr(t){"@babel/helpers - typeof";return Sr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Sr(t)}function Hy(t){return hd(t)||zy(t)||fd(t)||dd()}function zy(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Yr(t,e){return hd(t)||Wy(t,e)||fd(t,e)||dd()}function dd(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function fd(t,e){if(t){if(typeof t=="string")return $c(t,e);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?$c(t,e):void 0}}function $c(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}function Wy(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r,o,s,i,a=[],c=!0,l=!1;try{if(s=(n=n.call(t)).next,e===0){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=s.call(n)).done)&&(a.push(r.value),a.length!==e);c=!0);}catch(u){l=!0,o=u}finally{try{if(!c&&n.return!=null&&(i=n.return(),Object(i)!==i))return}finally{if(l)throw o}}return a}}function hd(t){if(Array.isArray(t))return t}function xc(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),n.push.apply(n,r)}return n}function X(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?xc(Object(n),!0).forEach(function(r){so(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):xc(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function so(t,e,n){return(e=Ky(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Ky(t){var e=Gy(t,"string");return Sr(e)=="symbol"?e:e+""}function Gy(t,e){if(Sr(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(Sr(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var zn={name:"BaseComponent",props:{pt:{type:Object,default:void 0},ptOptions:{type:Object,default:void 0},unstyled:{type:Boolean,default:void 0},dt:{type:Object,default:void 0}},inject:{$parentInstance:{default:void 0}},watch:{isUnstyled:{immediate:!0,handler:function(e){e||(this._loadCoreStyles(),this._themeChangeListener(this._loadCoreStyles))}},dt:{immediate:!0,handler:function(e){var n=this;e?(this._loadScopedThemeStyles(e),this._themeChangeListener(function(){return n._loadScopedThemeStyles(e)})):this._unloadScopedThemeStyles()}}},scopedStyleEl:void 0,rootEl:void 0,beforeCreate:function(){var e,n,r,o,s,i,a,c,l,u,d,f=(e=this.pt)===null||e===void 0?void 0:e._usept,g=f?(n=this.pt)===null||n===void 0||(n=n.originalValue)===null||n===void 0?void 0:n[this.$.type.name]:void 0,m=f?(r=this.pt)===null||r===void 0||(r=r.value)===null||r===void 0?void 0:r[this.$.type.name]:this.pt;(o=m||g)===null||o===void 0||(o=o.hooks)===null||o===void 0||(s=o.onBeforeCreate)===null||s===void 0||s.call(o);var S=(i=this.$primevueConfig)===null||i===void 0||(i=i.pt)===null||i===void 0?void 0:i._usept,P=S?(a=this.$primevue)===null||a===void 0||(a=a.config)===null||a===void 0||(a=a.pt)===null||a===void 0?void 0:a.originalValue:void 0,C=S?(c=this.$primevue)===null||c===void 0||(c=c.config)===null||c===void 0||(c=c.pt)===null||c===void 0?void 0:c.value:(l=this.$primevue)===null||l===void 0||(l=l.config)===null||l===void 0?void 0:l.pt;(u=C||P)===null||u===void 0||(u=u[this.$.type.name])===null||u===void 0||(u=u.hooks)===null||u===void 0||(d=u.onBeforeCreate)===null||d===void 0||d.call(u)},created:function(){this._hook("onCreated")},beforeMount:function(){this._loadStyles(),this._hook("onBeforeMount")},mounted:function(){this.rootEl=vy(this.$el,'[data-pc-name="'.concat(Qe(this.$.type.name),'"]')),this.rootEl&&(this.rootEl.setAttribute(this.$attrSelector,""),this.rootEl.$pc=X({name:this.$.type.name},this.$params)),this._hook("onMounted")},beforeUpdate:function(){this._hook("onBeforeUpdate")},updated:function(){this._hook("onUpdated")},beforeUnmount:function(){this._hook("onBeforeUnmount")},unmounted:function(){this._unloadScopedThemeStyles(),this._hook("onUnmounted")},methods:{_hook:function(e){if(!this.$options.hostName){var n=this._usePT(this._getPT(this.pt,this.$.type.name),this._getOptionValue,"hooks.".concat(e)),r=this._useDefaultPT(this._getOptionValue,"hooks.".concat(e));n==null||n(),r==null||r()}},_mergeProps:function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return xi(e)?e.apply(void 0,r):Q.apply(void 0,r)},_loadStyles:function(){var e=this,n=function(){Vt.isStyleNameLoaded("base")||(ve.loadCSS(e.$styleOptions),e._loadGlobalStyles(),Vt.setLoadedStyleName("base")),e._loadThemeStyles()};n(),this._themeChangeListener(n)},_loadCoreStyles:function(){var e,n;!Vt.isStyleNameLoaded((e=this.$style)===null||e===void 0?void 0:e.name)&&(n=this.$style)!==null&&n!==void 0&&n.name&&(Rc.loadCSS(this.$styleOptions),this.$options.style&&this.$style.loadCSS(this.$styleOptions),Vt.setLoadedStyleName(this.$style.name))},_loadGlobalStyles:function(){var e=this._useGlobalPT(this._getOptionValue,"global.css",this.$params);Re(e)&&ve.load(e,X({name:"global"},this.$styleOptions))},_loadThemeStyles:function(){var e,n;if(!this.isUnstyled){if(!ue.isStyleNameLoaded("common")){var r,o,s=((r=this.$style)===null||r===void 0||(o=r.getCommonTheme)===null||o===void 0?void 0:o.call(r))||{},i=s.primitive,a=s.semantic;ve.load(i==null?void 0:i.css,X({name:"primitive-variables"},this.$styleOptions)),ve.load(a==null?void 0:a.css,X({name:"semantic-variables"},this.$styleOptions)),ve.loadTheme(X({name:"global-style"},this.$styleOptions)),ue.setLoadedStyleName("common")}if(!ue.isStyleNameLoaded((e=this.$style)===null||e===void 0?void 0:e.name)&&(n=this.$style)!==null&&n!==void 0&&n.name){var c,l,u,d,f=((c=this.$style)===null||c===void 0||(l=c.getComponentTheme)===null||l===void 0?void 0:l.call(c))||{},g=f.css;(u=this.$style)===null||u===void 0||u.load(g,X({name:"".concat(this.$style.name,"-variables")},this.$styleOptions)),(d=this.$style)===null||d===void 0||d.loadTheme(X({name:"".concat(this.$style.name,"-style")},this.$styleOptions)),ue.setLoadedStyleName(this.$style.name)}if(!ue.isStyleNameLoaded("layer-order")){var m,S,P=(m=this.$style)===null||m===void 0||(S=m.getLayerOrderThemeCSS)===null||S===void 0?void 0:S.call(m);ve.load(P,X({name:"layer-order",first:!0},this.$styleOptions)),ue.setLoadedStyleName("layer-order")}}},_loadScopedThemeStyles:function(e){var n,r,o,s=((n=this.$style)===null||n===void 0||(r=n.getPresetTheme)===null||r===void 0?void 0:r.call(n,e,"[".concat(this.$attrSelector,"]")))||{},i=s.css,a=(o=this.$style)===null||o===void 0?void 0:o.load(i,X({name:"".concat(this.$attrSelector,"-").concat(this.$style.name)},this.$styleOptions));this.scopedStyleEl=a.el},_unloadScopedThemeStyles:function(){var e;(e=this.scopedStyleEl)===null||e===void 0||(e=e.value)===null||e===void 0||e.remove()},_themeChangeListener:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(){};Vt.clearLoadedStyleNames(),Xe.on("theme:change",e)},_getHostInstance:function(e){return e?this.$options.hostName?e.$.type.name===this.$options.hostName?e:this._getHostInstance(e.$parentInstance):e.$parentInstance:void 0},_getPropValue:function(e){var n;return this[e]||((n=this._getHostInstance(this))===null||n===void 0?void 0:n[e])},_getOptionValue:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return Ni(e,n,r)},_getPTValue:function(){var e,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!0,i=/./g.test(r)&&!!o[r.split(".")[0]],a=this._getPropValue("ptOptions")||((e=this.$primevueConfig)===null||e===void 0?void 0:e.ptOptions)||{},c=a.mergeSections,l=c===void 0?!0:c,u=a.mergeProps,d=u===void 0?!1:u,f=s?i?this._useGlobalPT(this._getPTClassValue,r,o):this._useDefaultPT(this._getPTClassValue,r,o):void 0,g=i?void 0:this._getPTSelf(n,this._getPTClassValue,r,X(X({},o),{},{global:f||{}})),m=this._getPTDatasets(r);return l||!l&&g?d?this._mergeProps(d,f,g,m):X(X(X({},f),g),m):X(X({},g),m)},_getPTSelf:function(){for(var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return Q(this._usePT.apply(this,[this._getPT(e,this.$name)].concat(r)),this._usePT.apply(this,[this.$_attrsPT].concat(r)))},_getPTDatasets:function(){var e,n,r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",o="data-pc-",s=r==="root"&&Re((e=this.pt)===null||e===void 0?void 0:e["data-pc-section"]);return r!=="transition"&&X(X({},r==="root"&&X(so({},"".concat(o,"name"),Qe(s?(n=this.pt)===null||n===void 0?void 0:n["data-pc-section"]:this.$.type.name)),s&&so({},"".concat(o,"extend"),Qe(this.$.type.name)))),{},so({},"".concat(o,"section"),Qe(r)))},_getPTClassValue:function(){var e=this._getOptionValue.apply(this,arguments);return Be(e)||Li(e)?{class:e}:e},_getPT:function(e){var n=this,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",o=arguments.length>2?arguments[2]:void 0,s=function(a){var c,l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,u=o?o(a):a,d=Qe(r),f=Qe(n.$name);return(c=l?d!==f?u==null?void 0:u[d]:void 0:u==null?void 0:u[d])!==null&&c!==void 0?c:u};return e!=null&&e.hasOwnProperty("_usept")?{_usept:e._usept,originalValue:s(e.originalValue),value:s(e.value)}:s(e,!0)},_usePT:function(e,n,r,o){var s=function(S){return n(S,r,o)};if(e!=null&&e.hasOwnProperty("_usept")){var i,a=e._usept||((i=this.$primevueConfig)===null||i===void 0?void 0:i.ptOptions)||{},c=a.mergeSections,l=c===void 0?!0:c,u=a.mergeProps,d=u===void 0?!1:u,f=s(e.originalValue),g=s(e.value);return f===void 0&&g===void 0?void 0:Be(g)?g:Be(f)?f:l||!l&&g?d?this._mergeProps(d,f,g):X(X({},f),g):g}return s(e)},_useGlobalPT:function(e,n,r){return this._usePT(this.globalPT,e,n,r)},_useDefaultPT:function(e,n,r){return this._usePT(this.defaultPT,e,n,r)},ptm:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this._getPTValue(this.pt,e,X(X({},this.$params),n))},ptmi:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Q(this.$_attrsWithoutPT,this.ptm(e,n))},ptmo:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this._getPTValue(e,n,X({instance:this},r),!1)},cx:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.isUnstyled?void 0:this._getOptionValue(this.$style.classes,e,X(X({},this.$params),n))},sx:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(n){var o=this._getOptionValue(this.$style.inlineStyles,e,X(X({},this.$params),r)),s=this._getOptionValue(Rc.inlineStyles,e,X(X({},this.$params),r));return[s,o]}}},computed:{globalPT:function(){var e,n=this;return this._getPT((e=this.$primevueConfig)===null||e===void 0?void 0:e.pt,void 0,function(r){return ft(r,{instance:n})})},defaultPT:function(){var e,n=this;return this._getPT((e=this.$primevueConfig)===null||e===void 0?void 0:e.pt,void 0,function(r){return n._getOptionValue(r,n.$name,X({},n.$params))||ft(r,X({},n.$params))})},isUnstyled:function(){var e;return this.unstyled!==void 0?this.unstyled:(e=this.$primevueConfig)===null||e===void 0?void 0:e.unstyled},$theme:function(){var e;return(e=this.$primevueConfig)===null||e===void 0?void 0:e.theme},$style:function(){return X(X({classes:void 0,inlineStyles:void 0,load:function(){},loadCSS:function(){},loadTheme:function(){}},(this._getHostInstance(this)||{}).$style),this.$options.style)},$styleOptions:function(){var e;return{nonce:(e=this.$primevueConfig)===null||e===void 0||(e=e.csp)===null||e===void 0?void 0:e.nonce}},$primevueConfig:function(){var e;return(e=this.$primevue)===null||e===void 0?void 0:e.config},$name:function(){return this.$options.hostName||this.$.type.name},$params:function(){var e=this._getHostInstance(this)||this.$parent;return{instance:this,props:this.$props,state:this.$data,attrs:this.$attrs,parent:{instance:e,props:e==null?void 0:e.$props,state:e==null?void 0:e.$data,attrs:e==null?void 0:e.$attrs}}},$_attrsPT:function(){return Object.entries(this.$attrs||{}).filter(function(e){var n=Yr(e,1),r=n[0];return r==null?void 0:r.startsWith("pt:")}).reduce(function(e,n){var r=Yr(n,2),o=r[0],s=r[1],i=o.split(":"),a=Hy(i),c=a.slice(1);return c==null||c.reduce(function(l,u,d,f){return!l[u]&&(l[u]=d===f.length-1?s:{}),l[u]},e),e},{})},$_attrsWithoutPT:function(){return Object.entries(this.$attrs||{}).filter(function(e){var n=Yr(e,1),r=n[0];return!(r!=null&&r.startsWith("pt:"))}).reduce(function(e,n){var r=Yr(n,2),o=r[0],s=r[1];return e[o]=s,e},{})},$attrSelector:function(){return Di("pc")}}},qy=`
.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,Jy=ve.extend({name:"baseicon",css:qy});function Cr(t){"@babel/helpers - typeof";return Cr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Cr(t)}function Nc(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),n.push.apply(n,r)}return n}function Lc(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Nc(Object(n),!0).forEach(function(r){Yy(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Nc(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Yy(t,e,n){return(e=Zy(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Zy(t){var e=Xy(t,"string");return Cr(e)=="symbol"?e:e+""}function Xy(t,e){if(Cr(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(Cr(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var Wn={name:"BaseIcon",extends:zn,props:{label:{type:String,default:void 0},spin:{type:Boolean,default:!1}},style:Jy,provide:function(){return{$pcIcon:this,$parentInstance:this}},methods:{pti:function(){var e=pn(this.label);return Lc(Lc({},!this.isUnstyled&&{class:["p-icon",{"p-icon-spin":this.spin}]}),{},{role:e?void 0:"img","aria-label":e?void 0:this.label,"aria-hidden":e})}}},pd={name:"SpinnerIcon",extends:Wn},Qy=be("path",{d:"M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z",fill:"currentColor"},null,-1),e0=[Qy];function t0(t,e,n,r,o,s){return se(),Te("svg",Q({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.pti()),e0,16)}pd.render=t0;var n0=function(e){var n=e.dt;return`
.p-badge {
    display: inline-flex;
    border-radius: `.concat(n("badge.border.radius"),`;
    align-items: center;
    justify-content: center;
    padding: `).concat(n("badge.padding"),`;
    background: `).concat(n("badge.primary.background"),`;
    color: `).concat(n("badge.primary.color"),`;
    font-size: `).concat(n("badge.font.size"),`;
    font-weight: `).concat(n("badge.font.weight"),`;
    min-width: `).concat(n("badge.min.width"),`;
    height: `).concat(n("badge.height"),`;
}

.p-badge-dot {
    width: `).concat(n("badge.dot.size"),`;
    min-width: `).concat(n("badge.dot.size"),`;
    height: `).concat(n("badge.dot.size"),`;
    border-radius: 50%;
    padding: 0;
}

.p-badge-circle {
    padding: 0;
    border-radius: 50%;
}

.p-badge-secondary {
    background: `).concat(n("badge.secondary.background"),`;
    color: `).concat(n("badge.secondary.color"),`;
}

.p-badge-success {
    background: `).concat(n("badge.success.background"),`;
    color: `).concat(n("badge.success.color"),`;
}

.p-badge-info {
    background: `).concat(n("badge.info.background"),`;
    color: `).concat(n("badge.info.color"),`;
}

.p-badge-warn {
    background: `).concat(n("badge.warn.background"),`;
    color: `).concat(n("badge.warn.color"),`;
}

.p-badge-danger {
    background: `).concat(n("badge.danger.background"),`;
    color: `).concat(n("badge.danger.color"),`;
}

.p-badge-contrast {
    background: `).concat(n("badge.contrast.background"),`;
    color: `).concat(n("badge.contrast.color"),`;
}

.p-badge-sm {
    font-size: `).concat(n("badge.sm.font.size"),`;
    min-width: `).concat(n("badge.sm.min.width"),`;
    height: `).concat(n("badge.sm.height"),`;
}

.p-badge-lg {
    font-size: `).concat(n("badge.lg.font.size"),`;
    min-width: `).concat(n("badge.lg.min.width"),`;
    height: `).concat(n("badge.lg.height"),`;
}

.p-badge-xl {
    font-size: `).concat(n("badge.xl.font.size"),`;
    min-width: `).concat(n("badge.xl.min.width"),`;
    height: `).concat(n("badge.xl.height"),`;
}
`)},r0={root:function(e){var n=e.props,r=e.instance;return["p-badge p-component",{"p-badge-circle":Re(n.value)&&String(n.value).length===1,"p-badge-dot":pn(n.value)&&!r.$slots.default,"p-badge-sm":n.size==="small","p-badge-lg":n.size==="large","p-badge-xl":n.size==="xlarge","p-badge-info":n.severity==="info","p-badge-success":n.severity==="success","p-badge-warn":n.severity==="warn","p-badge-danger":n.severity==="danger","p-badge-secondary":n.severity==="secondary","p-badge-contrast":n.severity==="contrast"}]}},o0=ve.extend({name:"badge",theme:n0,classes:r0}),s0={name:"BaseBadge",extends:zn,props:{value:{type:[String,Number],default:null},severity:{type:String,default:null},size:{type:String,default:null}},style:o0,provide:function(){return{$pcBadge:this,$parentInstance:this}}},gd={name:"Badge",extends:s0,inheritAttrs:!1};function i0(t,e,n,r,o,s){return se(),Te("span",Q({class:t.cx("root")},t.ptmi("root")),[Ht(t.$slots,"default",{},function(){return[Wl(ur(t.value),1)]})],16)}gd.render=i0;var wn=Mi();function Tr(t){"@babel/helpers - typeof";return Tr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Tr(t)}function Mc(t,e){return u0(t)||l0(t,e)||c0(t,e)||a0()}function a0(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function c0(t,e){if(t){if(typeof t=="string")return Dc(t,e);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Dc(t,e):void 0}}function Dc(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}function l0(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r,o,s,i,a=[],c=!0,l=!1;try{if(s=(n=n.call(t)).next,e!==0)for(;!(c=(r=s.call(n)).done)&&(a.push(r.value),a.length!==e);c=!0);}catch(u){l=!0,o=u}finally{try{if(!c&&n.return!=null&&(i=n.return(),Object(i)!==i))return}finally{if(l)throw o}}return a}}function u0(t){if(Array.isArray(t))return t}function jc(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),n.push.apply(n,r)}return n}function oe(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?jc(Object(n),!0).forEach(function(r){Hs(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):jc(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Hs(t,e,n){return(e=d0(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function d0(t){var e=f0(t,"string");return Tr(e)=="symbol"?e:e+""}function f0(t,e){if(Tr(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(Tr(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var J={_getMeta:function(){return[gt(arguments.length<=0?void 0:arguments[0])||arguments.length<=0?void 0:arguments[0],ft(gt(arguments.length<=0?void 0:arguments[0])?arguments.length<=0?void 0:arguments[0]:arguments.length<=1?void 0:arguments[1])]},_getConfig:function(e,n){var r,o,s;return(r=(e==null||(o=e.instance)===null||o===void 0?void 0:o.$primevue)||(n==null||(s=n.ctx)===null||s===void 0||(s=s.appContext)===null||s===void 0||(s=s.config)===null||s===void 0||(s=s.globalProperties)===null||s===void 0?void 0:s.$primevue))===null||r===void 0?void 0:r.config},_getOptionValue:Ni,_getPTValue:function(){var e,n,r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"",i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},a=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,c=function(){var v=J._getOptionValue.apply(J,arguments);return Be(v)||Li(v)?{class:v}:v},l=((e=r.binding)===null||e===void 0||(e=e.value)===null||e===void 0?void 0:e.ptOptions)||((n=r.$primevueConfig)===null||n===void 0?void 0:n.ptOptions)||{},u=l.mergeSections,d=u===void 0?!0:u,f=l.mergeProps,g=f===void 0?!1:f,m=a?J._useDefaultPT(r,r.defaultPT(),c,s,i):void 0,S=J._usePT(r,J._getPT(o,r.$name),c,s,oe(oe({},i),{},{global:m||{}})),P=J._getPTDatasets(r,s);return d||!d&&S?g?J._mergeProps(r,g,m,S,P):oe(oe(oe({},m),S),P):oe(oe({},S),P)},_getPTDatasets:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r="data-pc-";return oe(oe({},n==="root"&&Hs({},"".concat(r,"name"),Qe(e.$name))),{},Hs({},"".concat(r,"section"),Qe(n)))},_getPT:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=arguments.length>2?arguments[2]:void 0,o=function(i){var a,c=r?r(i):i,l=Qe(n);return(a=c==null?void 0:c[l])!==null&&a!==void 0?a:c};return e!=null&&e.hasOwnProperty("_usept")?{_usept:e._usept,originalValue:o(e.originalValue),value:o(e.value)}:o(e)},_usePT:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0,r=arguments.length>2?arguments[2]:void 0,o=arguments.length>3?arguments[3]:void 0,s=arguments.length>4?arguments[4]:void 0,i=function(P){return r(P,o,s)};if(n!=null&&n.hasOwnProperty("_usept")){var a,c=n._usept||((a=e.$primevueConfig)===null||a===void 0?void 0:a.ptOptions)||{},l=c.mergeSections,u=l===void 0?!0:l,d=c.mergeProps,f=d===void 0?!1:d,g=i(n.originalValue),m=i(n.value);return g===void 0&&m===void 0?void 0:Be(m)?m:Be(g)?g:u||!u&&m?f?J._mergeProps(e,f,g,m):oe(oe({},g),m):m}return i(n)},_useDefaultPT:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0,o=arguments.length>3?arguments[3]:void 0,s=arguments.length>4?arguments[4]:void 0;return J._usePT(e,n,r,o,s)},_loadStyles:function(e,n,r){var o,s=J._getConfig(n,r),i={nonce:s==null||(o=s.csp)===null||o===void 0?void 0:o.nonce};J._loadCoreStyles(e.$instance,i),J._loadThemeStyles(e.$instance,i),J._loadScopedThemeStyles(e.$instance,i),J._themeChangeListener(function(){return J._loadThemeStyles(e.$instance,i)})},_loadCoreStyles:function(){var e,n,r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},o=arguments.length>1?arguments[1]:void 0;if(!Vt.isStyleNameLoaded((e=r.$style)===null||e===void 0?void 0:e.name)&&(n=r.$style)!==null&&n!==void 0&&n.name){var s;ve.loadCSS(o),r.isUnstyled()&&((s=r.$style)===null||s===void 0||s.loadCSS(o)),Vt.setLoadedStyleName(r.$style.name)}},_loadThemeStyles:function(){var e,n,r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},o=arguments.length>1?arguments[1]:void 0;if(!(r!=null&&r.isUnstyled())){if(!ue.isStyleNameLoaded("common")){var s,i,a=((s=r.$style)===null||s===void 0||(i=s.getCommonTheme)===null||i===void 0?void 0:i.call(s))||{},c=a.primitive,l=a.semantic;ve.load(c==null?void 0:c.css,oe({name:"primitive-variables"},o)),ve.load(l==null?void 0:l.css,oe({name:"semantic-variables"},o)),ve.loadTheme(oe({name:"global-style"},o)),ue.setLoadedStyleName("common")}if(!ue.isStyleNameLoaded((e=r.$style)===null||e===void 0?void 0:e.name)&&(n=r.$style)!==null&&n!==void 0&&n.name){var u,d,f,g,m=((u=r.$style)===null||u===void 0||(d=u.getDirectiveTheme)===null||d===void 0?void 0:d.call(u))||{},S=m.css;(f=r.$style)===null||f===void 0||f.load(S,oe({name:"".concat(r.$style.name,"-variables")},o)),(g=r.$style)===null||g===void 0||g.loadTheme(oe({name:"".concat(r.$style.name,"-style")},o)),ue.setLoadedStyleName(r.$style.name)}if(!ue.isStyleNameLoaded("layer-order")){var P,C,v=(P=r.$style)===null||P===void 0||(C=P.getLayerOrderThemeCSS)===null||C===void 0?void 0:C.call(P);ve.load(v,oe({name:"layer-order",first:!0},o)),ue.setLoadedStyleName("layer-order")}}},_loadScopedThemeStyles:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0,r=e.preset();if(r&&e.$attrSelector){var o,s,i,a=((o=e.$style)===null||o===void 0||(s=o.getPresetTheme)===null||s===void 0?void 0:s.call(o,r,"[".concat(e.$attrSelector,"]")))||{},c=a.css,l=(i=e.$style)===null||i===void 0?void 0:i.load(c,oe({name:"".concat(e.$attrSelector,"-").concat(e.$style.name)},n));e.scopedStyleEl=l.el}},_themeChangeListener:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(){};Vt.clearLoadedStyleNames(),Xe.on("theme:change",e)},_hook:function(e,n,r,o,s,i){var a,c,l="on".concat(oy(n)),u=J._getConfig(o,s),d=r==null?void 0:r.$instance,f=J._usePT(d,J._getPT(o==null||(a=o.value)===null||a===void 0?void 0:a.pt,e),J._getOptionValue,"hooks.".concat(l)),g=J._useDefaultPT(d,u==null||(c=u.pt)===null||c===void 0||(c=c.directives)===null||c===void 0?void 0:c[e],J._getOptionValue,"hooks.".concat(l)),m={el:r,binding:o,vnode:s,prevVnode:i};f==null||f(d,m),g==null||g(d,m)},_mergeProps:function(){for(var e=arguments.length>1?arguments[1]:void 0,n=arguments.length,r=new Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];return xi(e)?e.apply(void 0,r):Q.apply(void 0,r)},_extend:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=function(i,a,c,l,u){var d,f,g;a._$instances=a._$instances||{};var m=J._getConfig(c,l),S=a._$instances[e]||{},P=pn(S)?oe(oe({},n),n==null?void 0:n.methods):{};a._$instances[e]=oe(oe({},S),{},{$name:e,$host:a,$binding:c,$modifiers:c==null?void 0:c.modifiers,$value:c==null?void 0:c.value,$el:S.$el||a||void 0,$style:oe({classes:void 0,inlineStyles:void 0,load:function(){},loadCSS:function(){},loadTheme:function(){}},n==null?void 0:n.style),$primevueConfig:m,$attrSelector:a.$attrSelector,defaultPT:function(){return J._getPT(m==null?void 0:m.pt,void 0,function(v){var E;return v==null||(E=v.directives)===null||E===void 0?void 0:E[e]})},isUnstyled:function(){var v,E;return((v=a.$instance)===null||v===void 0||(v=v.$binding)===null||v===void 0||(v=v.value)===null||v===void 0?void 0:v.unstyled)!==void 0?(E=a.$instance)===null||E===void 0||(E=E.$binding)===null||E===void 0||(E=E.value)===null||E===void 0?void 0:E.unstyled:m==null?void 0:m.unstyled},theme:function(){var v;return(v=a.$instance)===null||v===void 0||(v=v.$primevueConfig)===null||v===void 0?void 0:v.theme},preset:function(){var v;return(v=a.$instance)===null||v===void 0||(v=v.$binding)===null||v===void 0||(v=v.value)===null||v===void 0?void 0:v.dt},ptm:function(){var v,E=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",M=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return J._getPTValue(a.$instance,(v=a.$instance)===null||v===void 0||(v=v.$binding)===null||v===void 0||(v=v.value)===null||v===void 0?void 0:v.pt,E,oe({},M))},ptmo:function(){var v=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},E=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",M=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return J._getPTValue(a.$instance,v,E,M,!1)},cx:function(){var v,E,M=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",F=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return(v=a.$instance)!==null&&v!==void 0&&v.isUnstyled()?void 0:J._getOptionValue((E=a.$instance)===null||E===void 0||(E=E.$style)===null||E===void 0?void 0:E.classes,M,oe({},F))},sx:function(){var v,E=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",M=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,F=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return M?J._getOptionValue((v=a.$instance)===null||v===void 0||(v=v.$style)===null||v===void 0?void 0:v.inlineStyles,E,oe({},F)):void 0}},P),a.$instance=a._$instances[e],(d=(f=a.$instance)[i])===null||d===void 0||d.call(f,a,c,l,u),a["$".concat(e)]=a.$instance,J._hook(e,i,a,c,l,u),a.$pd||(a.$pd={}),a.$pd[e]=oe(oe({},(g=a.$pd)===null||g===void 0?void 0:g[e]),{},{name:e,instance:a.$instance})},o=function(i){var a,c,l,u,d,f=(a=i.$instance)===null||a===void 0?void 0:a.watch;f==null||(c=f.config)===null||c===void 0||c.call(i.$instance,(l=i.$instance)===null||l===void 0?void 0:l.$primevueConfig),wn.on("config:change",function(g){var m,S=g.newValue,P=g.oldValue;return f==null||(m=f.config)===null||m===void 0?void 0:m.call(i.$instance,S,P)}),f==null||(u=f["config.ripple"])===null||u===void 0||u.call(i.$instance,(d=i.$instance)===null||d===void 0||(d=d.$primevueConfig)===null||d===void 0?void 0:d.ripple),wn.on("config:ripple:change",function(g){var m,S=g.newValue,P=g.oldValue;return f==null||(m=f["config.ripple"])===null||m===void 0?void 0:m.call(i.$instance,S,P)})};return{created:function(i,a,c,l){r("created",i,a,c,l)},beforeMount:function(i,a,c,l){i.$attrSelector=Di("pd"),J._loadStyles(i,a,c),r("beforeMount",i,a,c,l),o(i)},mounted:function(i,a,c,l){J._loadStyles(i,a,c),r("mounted",i,a,c,l)},beforeUpdate:function(i,a,c,l){r("beforeUpdate",i,a,c,l)},updated:function(i,a,c,l){J._loadStyles(i,a,c),r("updated",i,a,c,l)},beforeUnmount:function(i,a,c,l){r("beforeUnmount",i,a,c,l)},unmounted:function(i,a,c,l){var u;(u=i.$instance)===null||u===void 0||(u=u.scopedStyleEl)===null||u===void 0||(u=u.value)===null||u===void 0||u.remove(),r("unmounted",i,a,c,l)}}},extend:function(){var e=J._getMeta.apply(J,arguments),n=Mc(e,2),r=n[0],o=n[1];return oe({extend:function(){var i=J._getMeta.apply(J,arguments),a=Mc(i,2),c=a[0],l=a[1];return J.extend(c,oe(oe(oe({},o),o==null?void 0:o.methods),l))}},J._extend(r,o))}},h0=function(e){var n=e.dt;return`
.p-ink {
    display: block;
    position: absolute;
    background: `.concat(n("ripple.background"),`;
    border-radius: 100%;
    transform: scale(0);
    pointer-events: none;
}

.p-ink-active {
    animation: ripple 0.4s linear;
}

@keyframes ripple {
    100% {
        opacity: 0;
        transform: scale(2.5);
    }
}
`)},p0={root:"p-ink"},g0=ve.extend({name:"ripple-directive",theme:h0,classes:p0}),m0=J.extend({style:g0});function Er(t){"@babel/helpers - typeof";return Er=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Er(t)}function b0(t){return w0(t)||_0(t)||y0(t)||v0()}function v0(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function y0(t,e){if(t){if(typeof t=="string")return zs(t,e);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?zs(t,e):void 0}}function _0(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function w0(t){if(Array.isArray(t))return zs(t)}function zs(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}function Uc(t,e,n){return(e=S0(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function S0(t){var e=C0(t,"string");return Er(e)=="symbol"?e:e+""}function C0(t,e){if(Er(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(Er(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var md=m0.extend("ripple",{watch:{"config.ripple":function(e){e?(this.createRipple(this.$host),this.bindEvents(this.$host),this.$host.setAttribute("data-pd-ripple",!0),this.$host.style.overflow="hidden",this.$host.style.position="relative"):(this.remove(this.$host),this.$host.removeAttribute("data-pd-ripple"))}},unmounted:function(e){this.remove(e)},timeout:void 0,methods:{bindEvents:function(e){e.addEventListener("mousedown",this.onMouseDown.bind(this))},unbindEvents:function(e){e.removeEventListener("mousedown",this.onMouseDown.bind(this))},createRipple:function(e){var n=by("span",Uc(Uc({role:"presentation","aria-hidden":!0,"data-p-ink":!0,"data-p-ink-active":!1,class:!this.isUnstyled()&&this.cx("root"),onAnimationEnd:this.onAnimationEnd.bind(this)},this.$attrSelector,""),"p-bind",this.ptm("root")));e.appendChild(n),this.$el=n},remove:function(e){var n=this.getInk(e);n&&(this.$host.style.overflow="",this.$host.style.position="",this.unbindEvents(e),n.removeEventListener("animationend",this.onAnimationEnd),n.remove())},onMouseDown:function(e){var n=this,r=e.currentTarget,o=this.getInk(r);if(!(!o||getComputedStyle(o,null).display==="none")){if(!this.isUnstyled()&&fs(o,"p-ink-active"),o.setAttribute("data-p-ink-active","false"),!Tc(o)&&!Ec(o)){var s=Math.max(my(r),Sy(r));o.style.height=s+"px",o.style.width=s+"px"}var i=wy(r),a=e.pageX-i.left+document.body.scrollTop-Ec(o)/2,c=e.pageY-i.top+document.body.scrollLeft-Tc(o)/2;o.style.top=c+"px",o.style.left=a+"px",!this.isUnstyled()&&gy(o,"p-ink-active"),o.setAttribute("data-p-ink-active","true"),this.timeout=setTimeout(function(){o&&(!n.isUnstyled()&&fs(o,"p-ink-active"),o.setAttribute("data-p-ink-active","false"))},401)}},onAnimationEnd:function(e){this.timeout&&clearTimeout(this.timeout),!this.isUnstyled()&&fs(e.currentTarget,"p-ink-active"),e.currentTarget.setAttribute("data-p-ink-active","false")},getInk:function(e){return e&&e.children?b0(e.children).find(function(n){return yy(n,"data-pc-name")==="ripple"}):void 0}}});function Ir(t){"@babel/helpers - typeof";return Ir=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ir(t)}function ct(t,e,n){return(e=T0(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function T0(t){var e=E0(t,"string");return Ir(e)=="symbol"?e:e+""}function E0(t,e){if(Ir(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(Ir(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var I0=function(e){var n=e.dt;return`
.p-button {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    color: `.concat(n("button.primary.color"),`;
    background: `).concat(n("button.primary.background"),`;
    border: 1px solid `).concat(n("button.primary.border.color"),`;
    padding: `).concat(n("button.padding.y")," ").concat(n("button.padding.x"),`;
    font-size: 1rem;
    font-family: inherit;
    font-feature-settings: inherit;
    transition: background `).concat(n("button.transition.duration"),", color ").concat(n("button.transition.duration"),", border-color ").concat(n("button.transition.duration"),`,
            outline-color `).concat(n("button.transition.duration"),", box-shadow ").concat(n("button.transition.duration"),`;
    border-radius: `).concat(n("button.border.radius"),`;
    outline-color: transparent;
    gap: `).concat(n("button.gap"),`;
}

.p-button:disabled {
    cursor: default;
}

.p-button-icon-right {
    order: 1;
}

.p-button-icon-bottom {
    order: 2;
}

.p-button-icon-only {
    width: `).concat(n("button.icon.only.width"),`;
    padding-left: 0;
    padding-right: 0;
    gap: 0;
}

.p-button-icon-only.p-button-rounded {
    border-radius: 50%;
    height: `).concat(n("button.icon.only.width"),`;
}

.p-button-icon-only .p-button-label {
    visibility: hidden;
    width: 0;
}

.p-button-sm {
    font-size: `).concat(n("button.sm.font.size"),`;
    padding: `).concat(n("button.sm.padding.y")," ").concat(n("button.sm.padding.x"),`;
}

.p-button-sm .p-button-icon {
    font-size: `).concat(n("button.sm.font.size"),`;
}

.p-button-lg {
    font-size: `).concat(n("button.lg.font.size"),`;
    padding: `).concat(n("button.lg.padding.y")," ").concat(n("button.lg.padding.x"),`;
}

.p-button-lg .p-button-icon {
    font-size: `).concat(n("button.lg.font.size"),`;
}

.p-button-vertical {
    flex-direction: column;
}

.p-button-label {
    font-weight: `).concat(n("button.label.font.weight"),`;
}

.p-button-fluid {
    width: 100%;
}

.p-button-fluid.p-button-icon-only {
    width: `).concat(n("button.icon.only.width"),`;
}

.p-button:not(:disabled):hover {
    background: `).concat(n("button.primary.hover.background"),`;
    border: 1px solid `).concat(n("button.primary.hover.border.color"),`;
    color: `).concat(n("button.primary.hover.color"),`;
}

.p-button:not(:disabled):active {
    background: `).concat(n("button.primary.active.background"),`;
    border: 1px solid `).concat(n("button.primary.active.border.color"),`;
    color: `).concat(n("button.primary.active.color"),`;
}

.p-button:focus-visible {
    box-shadow: `).concat(n("button.primary.focus.ring.shadow"),`;
    outline: `).concat(n("button.focus.ring.width")," ").concat(n("button.focus.ring.style")," ").concat(n("button.primary.focus.ring.color"),`;
    outline-offset: `).concat(n("button.focus.ring.offset"),`;
}

.p-button .p-badge {
    min-width: `).concat(n("button.badge.size"),`;
    height: `).concat(n("button.badge.size"),`;
    line-height: `).concat(n("button.badge.size"),`;
}

.p-button-raised {
    box-shadow: `).concat(n("button.raised.shadow"),`;
}

.p-button-rounded {
    border-radius: `).concat(n("button.rounded.border.radius"),`;
}

.p-button-secondary {
    background: `).concat(n("button.secondary.background"),`;
    border: 1px solid `).concat(n("button.secondary.border.color"),`;
    color: `).concat(n("button.secondary.color"),`;
}

.p-button-secondary:not(:disabled):hover {
    background: `).concat(n("button.secondary.hover.background"),`;
    border: 1px solid `).concat(n("button.secondary.hover.border.color"),`;
    color: `).concat(n("button.secondary.hover.color"),`;
}

.p-button-secondary:not(:disabled):active {
    background: `).concat(n("button.secondary.active.background"),`;
    border: 1px solid `).concat(n("button.secondary.active.border.color"),`;
    color: `).concat(n("button.secondary.active.color"),`;
}

.p-button-secondary:focus-visible {
    outline-color: `).concat(n("button.secondary.focus.ring.color"),`;
    box-shadow: `).concat(n("button.secondary.focus.ring.shadow"),`;
}

.p-button-success {
    background: `).concat(n("button.success.background"),`;
    border: 1px solid `).concat(n("button.success.border.color"),`;
    color: `).concat(n("button.success.color"),`;
}

.p-button-success:not(:disabled):hover {
    background: `).concat(n("button.success.hover.background"),`;
    border: 1px solid `).concat(n("button.success.hover.border.color"),`;
    color: `).concat(n("button.success.hover.color"),`;
}

.p-button-success:not(:disabled):active {
    background: `).concat(n("button.success.active.background"),`;
    border: 1px solid `).concat(n("button.success.active.border.color"),`;
    color: `).concat(n("button.success.active.color"),`;
}

.p-button-success:focus-visible {
    outline-color: `).concat(n("button.success.focus.ring.color"),`;
    box-shadow: `).concat(n("button.success.focus.ring.shadow"),`;
}

.p-button-info {
    background: `).concat(n("button.info.background"),`;
    border: 1px solid `).concat(n("button.info.border.color"),`;
    color: `).concat(n("button.info.color"),`;
}

.p-button-info:not(:disabled):hover {
    background: `).concat(n("button.info.hover.background"),`;
    border: 1px solid `).concat(n("button.info.hover.border.color"),`;
    color: `).concat(n("button.info.hover.color"),`;
}

.p-button-info:not(:disabled):active {
    background: `).concat(n("button.info.active.background"),`;
    border: 1px solid `).concat(n("button.info.active.border.color"),`;
    color: `).concat(n("button.info.active.color"),`;
}

.p-button-info:focus-visible {
    outline-color: `).concat(n("button.info.focus.ring.color"),`;
    box-shadow: `).concat(n("button.info.focus.ring.shadow"),`;
}

.p-button-warn {
    background: `).concat(n("button.warn.background"),`;
    border: 1px solid `).concat(n("button.warn.border.color"),`;
    color: `).concat(n("button.warn.color"),`;
}

.p-button-warn:not(:disabled):hover {
    background: `).concat(n("button.warn.hover.background"),`;
    border: 1px solid `).concat(n("button.warn.hover.border.color"),`;
    color: `).concat(n("button.warn.hover.color"),`;
}

.p-button-warn:not(:disabled):active {
    background: `).concat(n("button.warn.active.background"),`;
    border: 1px solid `).concat(n("button.warn.active.border.color"),`;
    color: `).concat(n("button.warn.active.color"),`;
}

.p-button-warn:focus-visible {
    outline-color: `).concat(n("button.warn.focus.ring.color"),`;
    box-shadow: `).concat(n("button.warn.focus.ring.shadow"),`;
}

.p-button-help {
    background: `).concat(n("button.help.background"),`;
    border: 1px solid `).concat(n("button.help.border.color"),`;
    color: `).concat(n("button.help.color"),`;
}

.p-button-help:not(:disabled):hover {
    background: `).concat(n("button.help.hover.background"),`;
    border: 1px solid `).concat(n("button.help.hover.border.color"),`;
    color: `).concat(n("button.help.hover.color"),`;
}

.p-button-help:not(:disabled):active {
    background: `).concat(n("button.help.active.background"),`;
    border: 1px solid `).concat(n("button.help.active.border.color"),`;
    color: `).concat(n("button.help.active.color"),`;
}

.p-button-help:focus-visible {
    outline-color: `).concat(n("button.help.focus.ring.color"),`;
    box-shadow: `).concat(n("button.help.focus.ring.shadow"),`;
}

.p-button-danger {
    background: `).concat(n("button.danger.background"),`;
    border: 1px solid `).concat(n("button.danger.border.color"),`;
    color: `).concat(n("button.danger.color"),`;
}

.p-button-danger:not(:disabled):hover {
    background: `).concat(n("button.danger.hover.background"),`;
    border: 1px solid `).concat(n("button.danger.hover.border.color"),`;
    color: `).concat(n("button.danger.hover.color"),`;
}

.p-button-danger:not(:disabled):active {
    background: `).concat(n("button.danger.active.background"),`;
    border: 1px solid `).concat(n("button.danger.active.border.color"),`;
    color: `).concat(n("button.danger.active.color"),`;
}

.p-button-danger:focus-visible {
    outline-color: `).concat(n("button.danger.focus.ring.color"),`;
    box-shadow: `).concat(n("button.danger.focus.ring.shadow"),`;
}

.p-button-contrast {
    background: `).concat(n("button.contrast.background"),`;
    border: 1px solid `).concat(n("button.contrast.border.color"),`;
    color: `).concat(n("button.contrast.color"),`;
}

.p-button-contrast:not(:disabled):hover {
    background: `).concat(n("button.contrast.hover.background"),`;
    border: 1px solid `).concat(n("button.contrast.hover.border.color"),`;
    color: `).concat(n("button.contrast.hover.color"),`;
}

.p-button-contrast:not(:disabled):active {
    background: `).concat(n("button.contrast.active.background"),`;
    border: 1px solid `).concat(n("button.contrast.active.border.color"),`;
    color: `).concat(n("button.contrast.active.color"),`;
}

.p-button-contrast:focus-visible {
    outline-color: `).concat(n("button.contrast.focus.ring.color"),`;
    box-shadow: `).concat(n("button.contrast.focus.ring.shadow"),`;
}

.p-button-outlined {
    background: transparent;
    border-color: `).concat(n("button.outlined.primary.border.color"),`;
    color: `).concat(n("button.outlined.primary.color"),`;
}

.p-button-outlined:not(:disabled):hover {
    background: `).concat(n("button.outlined.primary.hover.background"),`;
    border-color: `).concat(n("button.outlined.primary.border.color"),`;
    color: `).concat(n("button.outlined.primary.color"),`;
}

.p-button-outlined:not(:disabled):active {
    background: `).concat(n("button.outlined.primary.active.background"),`;
    border-color: `).concat(n("button.outlined.primary.border.color"),`;
    color: `).concat(n("button.outlined.primary.color"),`;
}

.p-button-outlined.p-button-secondary {
    border-color: `).concat(n("button.outlined.secondary.border.color"),`;
    color: `).concat(n("button.outlined.secondary.color"),`;
}

.p-button-outlined.p-button-secondary:not(:disabled):hover {
    background: `).concat(n("button.outlined.secondary.hover.background"),`;
    border-color: `).concat(n("button.outlined.secondary.border.color"),`;
    color: `).concat(n("button.outlined.secondary.color"),`;
}

.p-button-outlined.p-button-secondary:not(:disabled):active {
    background: `).concat(n("button.outlined.secondary.active.background"),`;
    border-color: `).concat(n("button.outlined.secondary.border.color"),`;
    color: `).concat(n("button.outlined.secondary.color"),`;
}

.p-button-outlined.p-button-success {
    border-color: `).concat(n("button.outlined.success.border.color"),`;
    color: `).concat(n("button.outlined.success.color"),`;
}

.p-button-outlined.p-button-success:not(:disabled):hover {
    background: `).concat(n("button.outlined.success.hover.background"),`;
    border-color: `).concat(n("button.outlined.success.border.color"),`;
    color: `).concat(n("button.outlined.success.color"),`;
}

.p-button-outlined.p-button-success:not(:disabled):active {
    background: `).concat(n("button.outlined.success.active.background"),`;
    border-color: `).concat(n("button.outlined.success.border.color"),`;
    color: `).concat(n("button.outlined.success.color"),`;
}

.p-button-outlined.p-button-info {
    border-color: `).concat(n("button.outlined.info.border.color"),`;
    color: `).concat(n("button.outlined.info.color"),`;
}

.p-button-outlined.p-button-info:not(:disabled):hover {
    background: `).concat(n("button.outlined.info.hover.background"),`;
    border-color: `).concat(n("button.outlined.info.border.color"),`;
    color: `).concat(n("button.outlined.info.color"),`;
}

.p-button-outlined.p-button-info:not(:disabled):active {
    background: `).concat(n("button.outlined.info.active.background"),`;
    border-color: `).concat(n("button.outlined.info.border.color"),`;
    color: `).concat(n("button.outlined.info.color"),`;
}

.p-button-outlined.p-button-warn {
    border-color: `).concat(n("button.outlined.warn.border.color"),`;
    color: `).concat(n("button.outlined.warn.color"),`;
}

.p-button-outlined.p-button-warn:not(:disabled):hover {
    background: `).concat(n("button.outlined.warn.hover.background"),`;
    border-color: `).concat(n("button.outlined.warn.border.color"),`;
    color: `).concat(n("button.outlined.warn.color"),`;
}

.p-button-outlined.p-button-warn:not(:disabled):active {
    background: `).concat(n("button.outlined.warn.active.background"),`;
    border-color: `).concat(n("button.outlined.warn.border.color"),`;
    color: `).concat(n("button.outlined.warn.color"),`;
}

.p-button-outlined.p-button-help {
    border-color: `).concat(n("button.outlined.help.border.color"),`;
    color: `).concat(n("button.outlined.help.color"),`;
}

.p-button-outlined.p-button-help:not(:disabled):hover {
    background: `).concat(n("button.outlined.help.hover.background"),`;
    border-color: `).concat(n("button.outlined.help.border.color"),`;
    color: `).concat(n("button.outlined.help.color"),`;
}

.p-button-outlined.p-button-help:not(:disabled):active {
    background: `).concat(n("button.outlined.help.active.background"),`;
    border-color: `).concat(n("button.outlined.help.border.color"),`;
    color: `).concat(n("button.outlined.help.color"),`;
}

.p-button-outlined.p-button-danger {
    border-color: `).concat(n("button.outlined.danger.border.color"),`;
    color: `).concat(n("button.outlined.danger.color"),`;
}

.p-button-outlined.p-button-danger:not(:disabled):hover {
    background: `).concat(n("button.outlined.danger.hover.background"),`;
    border-color: `).concat(n("button.outlined.danger.border.color"),`;
    color: `).concat(n("button.outlined.danger.color"),`;
}

.p-button-outlined.p-button-danger:not(:disabled):active {
    background: `).concat(n("button.outlined.danger.active.background"),`;
    border-color: `).concat(n("button.outlined.danger.border.color"),`;
    color: `).concat(n("button.outlined.danger.color"),`;
}

.p-button-outlined.p-button-contrast {
    border-color: `).concat(n("button.outlined.contrast.border.color"),`;
    color: `).concat(n("button.outlined.contrast.color"),`;
}

.p-button-outlined.p-button-contrast:not(:disabled):hover {
    background: `).concat(n("button.outlined.contrast.hover.background"),`;
    border-color: `).concat(n("button.outlined.contrast.border.color"),`;
    color: `).concat(n("button.outlined.contrast.color"),`;
}

.p-button-outlined.p-button-contrast:not(:disabled):active {
    background: `).concat(n("button.outlined.contrast.active.background"),`;
    border-color: `).concat(n("button.outlined.contrast.border.color"),`;
    color: `).concat(n("button.outlined.contrast.color"),`;
}

.p-button-outlined.p-button-plain {
    border-color: `).concat(n("button.outlined.plain.border.color"),`;
    color: `).concat(n("button.outlined.plain.color"),`;
}

.p-button-outlined.p-button-plain:not(:disabled):hover {
    background: `).concat(n("button.outlined.plain.hover.background"),`;
    border-color: `).concat(n("button.outlined.plain.border.color"),`;
    color: `).concat(n("button.outlined.plain.color"),`;
}

.p-button-outlined.p-button-plain:not(:disabled):active {
    background: `).concat(n("button.outlined.plain.active.background"),`;
    border-color: `).concat(n("button.outlined.plain.border.color"),`;
    color: `).concat(n("button.outlined.plain.color"),`;
}

.p-button-text {
    background: transparent;
    border-color: transparent;
    color: `).concat(n("button.text.primary.color"),`;
}

.p-button-text:not(:disabled):hover {
    background: `).concat(n("button.text.primary.hover.background"),`;
    border-color: transparent;
    color: `).concat(n("button.text.primary.color"),`;
}

.p-button-text:not(:disabled):active {
    background: `).concat(n("button.text.primary.active.background"),`;
    border-color: transparent;
    color: `).concat(n("button.text.primary.color"),`;
}

.p-button-text.p-button-secondary {
    background: transparent;
    border-color: transparent;
    color: `).concat(n("button.text.secondary.color"),`;
}

.p-button-text.p-button-secondary:not(:disabled):hover {
    background: `).concat(n("button.text.secondary.hover.background"),`;
    border-color: transparent;
    color: `).concat(n("button.text.secondary.color"),`;
}

.p-button-text.p-button-secondary:not(:disabled):active {
    background: `).concat(n("button.text.secondary.active.background"),`;
    border-color: transparent;
    color: `).concat(n("button.text.secondary.color"),`;
}

.p-button-text.p-button-success {
    background: transparent;
    border-color: transparent;
    color: `).concat(n("button.text.success.color"),`;
}

.p-button-text.p-button-success:not(:disabled):hover {
    background: `).concat(n("button.text.success.hover.background"),`;
    border-color: transparent;
    color: `).concat(n("button.text.success.color"),`;
}

.p-button-text.p-button-success:not(:disabled):active {
    background: `).concat(n("button.text.success.active.background"),`;
    border-color: transparent;
    color: `).concat(n("button.text.success.color"),`;
}

.p-button-text.p-button-info {
    background: transparent;
    border-color: transparent;
    color: `).concat(n("button.text.info.color"),`;
}

.p-button-text.p-button-info:not(:disabled):hover {
    background: `).concat(n("button.text.info.hover.background"),`;
    border-color: transparent;
    color: `).concat(n("button.text.info.color"),`;
}

.p-button-text.p-button-info:not(:disabled):active {
    background: `).concat(n("button.text.info.active.background"),`;
    border-color: transparent;
    color: `).concat(n("button.text.info.color"),`;
}

.p-button-text.p-button-warn {
    background: transparent;
    border-color: transparent;
    color: `).concat(n("button.text.warn.color"),`;
}

.p-button-text.p-button-warn:not(:disabled):hover {
    background: `).concat(n("button.text.warn.hover.background"),`;
    border-color: transparent;
    color: `).concat(n("button.text.warn.color"),`;
}

.p-button-text.p-button-warn:not(:disabled):active {
    background: `).concat(n("button.text.warn.active.background"),`;
    border-color: transparent;
    color: `).concat(n("button.text.warn.color"),`;
}

.p-button-text.p-button-help {
    background: transparent;
    border-color: transparent;
    color: `).concat(n("button.text.help.color"),`;
}

.p-button-text.p-button-help:not(:disabled):hover {
    background: `).concat(n("button.text.help.hover.background"),`;
    border-color: transparent;
    color: `).concat(n("button.text.help.color"),`;
}

.p-button-text.p-button-help:not(:disabled):active {
    background: `).concat(n("button.text.help.active.background"),`;
    border-color: transparent;
    color: `).concat(n("button.text.help.color"),`;
}

.p-button-text.p-button-danger {
    background: transparent;
    border-color: transparent;
    color: `).concat(n("button.text.danger.color"),`;
}

.p-button-text.p-button-danger:not(:disabled):hover {
    background: `).concat(n("button.text.danger.hover.background"),`;
    border-color: transparent;
    color: `).concat(n("button.text.danger.color"),`;
}

.p-button-text.p-button-danger:not(:disabled):active {
    background: `).concat(n("button.text.danger.active.background"),`;
    border-color: transparent;
    color: `).concat(n("button.text.danger.color"),`;
}

.p-button-text.p-button-plain {
    background: transparent;
    border-color: transparent;
    color: `).concat(n("button.text.plain.color"),`;
}

.p-button-text.p-button-plain:not(:disabled):hover {
    background: `).concat(n("button.text.plain.hover.background"),`;
    border-color: transparent;
    color: `).concat(n("button.text.plain.color"),`;
}

.p-button-text.p-button-plain:not(:disabled):active {
    background: `).concat(n("button.text.plain.active.background"),`;
    border-color: transparent;
    color: `).concat(n("button.text.plain.color"),`;
}

.p-button-link {
    background: transparent;
    border-color: transparent;
    color: `).concat(n("button.link.color"),`;
}

.p-button-link:not(:disabled):hover {
    background: transparent;
    border-color: transparent;
    color: `).concat(n("button.link.hover.color"),`;
}

.p-button-link:not(:disabled):hover .p-button-label {
    text-decoration: underline;
}

.p-button-link:not(:disabled):active {
    background: transparent;
    border-color: transparent;
    color: `).concat(n("button.link.active.color"),`;
}
`)},P0={root:function(e){var n=e.instance,r=e.props;return["p-button p-component",ct(ct(ct(ct(ct(ct(ct(ct(ct({"p-button-icon-only":n.hasIcon&&!r.label&&!r.badge,"p-button-vertical":(r.iconPos==="top"||r.iconPos==="bottom")&&r.label,"p-button-loading":r.loading,"p-button-link":r.link},"p-button-".concat(r.severity),r.severity),"p-button-raised",r.raised),"p-button-rounded",r.rounded),"p-button-text",r.text),"p-button-outlined",r.outlined),"p-button-sm",r.size==="small"),"p-button-lg",r.size==="large"),"p-button-plain",r.plain),"p-button-fluid",n.hasFluid)]},loadingIcon:"p-button-loading-icon",icon:function(e){var n=e.props;return["p-button-icon",ct({},"p-button-icon-".concat(n.iconPos),n.label)]},label:"p-button-label"},k0=ve.extend({name:"button",theme:I0,classes:P0}),O0={name:"BaseButton",extends:zn,props:{label:{type:String,default:null},icon:{type:String,default:null},iconPos:{type:String,default:"left"},iconClass:{type:String,default:null},badge:{type:String,default:null},badgeClass:{type:String,default:null},badgeSeverity:{type:String,default:"secondary"},loading:{type:Boolean,default:!1},loadingIcon:{type:String,default:void 0},as:{type:String,default:"BUTTON"},asChild:{type:Boolean,default:!1},link:{type:Boolean,default:!1},severity:{type:String,default:null},raised:{type:Boolean,default:!1},rounded:{type:Boolean,default:!1},text:{type:Boolean,default:!1},outlined:{type:Boolean,default:!1},size:{type:String,default:null},plain:{type:Boolean,default:!1},fluid:{type:Boolean,default:null}},style:k0,provide:function(){return{$pcButton:this,$parentInstance:this}}},bd={name:"Button",extends:O0,inheritAttrs:!1,inject:{$pcFluid:{default:null}},methods:{getPTOptions:function(e){var n=e==="root"?this.ptmi:this.ptm;return n(e,{context:{disabled:this.disabled}})}},computed:{disabled:function(){return this.$attrs.disabled||this.$attrs.disabled===""||this.loading},defaultAriaLabel:function(){return this.label?this.label+(this.badge?" "+this.badge:""):this.$attrs.ariaLabel},hasIcon:function(){return this.icon||this.$slots.icon},attrs:function(){return Q(this.asAttrs,this.a11yAttrs,this.getPTOptions("root"))},asAttrs:function(){return this.as==="BUTTON"?{type:"button",disabled:this.disabled}:void 0},a11yAttrs:function(){return{"aria-label":this.defaultAriaLabel,"data-pc-name":"button","data-p-disabled":this.disabled,"data-p-severity":this.severity}},hasFluid:function(){return pn(this.fluid)?!!this.$pcFluid:this.fluid}},components:{SpinnerIcon:pd,Badge:gd},directives:{ripple:md}};function A0(t,e,n,r,o,s){var i=xn("SpinnerIcon"),a=xn("Badge"),c=Sl("ripple");return t.asChild?Ht(t.$slots,"default",{key:1,class:on(t.cx("root")),a11yAttrs:s.a11yAttrs}):El((se(),Ue(_n(t.as),Q({key:0,class:t.cx("root")},s.attrs),{default:pr(function(){return[Ht(t.$slots,"default",{},function(){return[t.loading?Ht(t.$slots,"loadingicon",{key:0,class:on([t.cx("loadingIcon"),t.cx("icon")])},function(){return[t.loadingIcon?(se(),Te("span",Q({key:0,class:[t.cx("loadingIcon"),t.cx("icon"),t.loadingIcon]},t.ptm("loadingIcon")),null,16)):(se(),Ue(i,Q({key:1,class:[t.cx("loadingIcon"),t.cx("icon")],spin:""},t.ptm("loadingIcon")),null,16,["class"]))]}):Ht(t.$slots,"icon",{key:1,class:on([t.cx("icon")])},function(){return[t.icon?(se(),Te("span",Q({key:0,class:[t.cx("icon"),t.icon,t.iconClass]},t.ptm("icon")),null,16)):Nn("",!0)]}),be("span",Q({class:t.cx("label")},t.ptm("label")),ur(t.label||" "),17),t.badge?(se(),Ue(a,Q({key:2,value:t.badge,class:t.badgeClass,severity:t.badgeSeverity,unstyled:t.unstyled},t.ptm("pcBadge")),null,16,["value","class","severity","unstyled"])):Nn("",!0)]})]}),_:3},16,["class"])),[[c]])}bd.render=A0;var Ae={STARTS_WITH:"startsWith",CONTAINS:"contains",NOT_CONTAINS:"notContains",ENDS_WITH:"endsWith",EQUALS:"equals",NOT_EQUALS:"notEquals",IN:"in",LESS_THAN:"lt",LESS_THAN_OR_EQUAL_TO:"lte",GREATER_THAN:"gt",GREATER_THAN_OR_EQUAL_TO:"gte",BETWEEN:"between",DATE_IS:"dateIs",DATE_IS_NOT:"dateIsNot",DATE_BEFORE:"dateBefore",DATE_AFTER:"dateAfter"};function Pr(t){"@babel/helpers - typeof";return Pr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Pr(t)}function Bc(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),n.push.apply(n,r)}return n}function gs(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Bc(Object(n),!0).forEach(function(r){R0(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Bc(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function R0(t,e,n){return(e=$0(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function $0(t){var e=x0(t,"string");return Pr(e)=="symbol"?e:e+""}function x0(t,e){if(Pr(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(Pr(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var N0={ripple:!1,inputStyle:null,inputVariant:null,locale:{startsWith:"Starts with",contains:"Contains",notContains:"Not contains",endsWith:"Ends with",equals:"Equals",notEquals:"Not equals",noFilter:"No Filter",lt:"Less than",lte:"Less than or equal to",gt:"Greater than",gte:"Greater than or equal to",dateIs:"Date is",dateIsNot:"Date is not",dateBefore:"Date is before",dateAfter:"Date is after",clear:"Clear",apply:"Apply",matchAll:"Match All",matchAny:"Match Any",addRule:"Add Rule",removeRule:"Remove Rule",accept:"Yes",reject:"No",choose:"Choose",upload:"Upload",cancel:"Cancel",completed:"Completed",pending:"Pending",fileSizeTypes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],chooseYear:"Choose Year",chooseMonth:"Choose Month",chooseDate:"Choose Date",prevDecade:"Previous Decade",nextDecade:"Next Decade",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",prevHour:"Previous Hour",nextHour:"Next Hour",prevMinute:"Previous Minute",nextMinute:"Next Minute",prevSecond:"Previous Second",nextSecond:"Next Second",am:"am",pm:"pm",today:"Today",weekHeader:"Wk",firstDayOfWeek:0,showMonthAfterYear:!1,dateFormat:"mm/dd/yy",weak:"Weak",medium:"Medium",strong:"Strong",passwordPrompt:"Enter a password",emptyFilterMessage:"No results found",searchMessage:"{0} results are available",selectionMessage:"{0} items selected",emptySelectionMessage:"No selected item",emptySearchMessage:"No results found",fileChosenMessage:"{0} files",noFileChosenMessage:"No file chosen",emptyMessage:"No available options",aria:{trueLabel:"True",falseLabel:"False",nullLabel:"Not Selected",star:"1 star",stars:"{star} stars",selectAll:"All items selected",unselectAll:"All items unselected",close:"Close",previous:"Previous",next:"Next",navigation:"Navigation",scrollTop:"Scroll Top",moveTop:"Move Top",moveUp:"Move Up",moveDown:"Move Down",moveBottom:"Move Bottom",moveToTarget:"Move to Target",moveToSource:"Move to Source",moveAllToTarget:"Move All to Target",moveAllToSource:"Move All to Source",pageLabel:"Page {page}",firstPageLabel:"First Page",lastPageLabel:"Last Page",nextPageLabel:"Next Page",prevPageLabel:"Previous Page",rowsPerPageLabel:"Rows per page",jumpToPageDropdownLabel:"Jump to Page Dropdown",jumpToPageInputLabel:"Jump to Page Input",selectRow:"Row Selected",unselectRow:"Row Unselected",expandRow:"Row Expanded",collapseRow:"Row Collapsed",showFilterMenu:"Show Filter Menu",hideFilterMenu:"Hide Filter Menu",filterOperator:"Filter Operator",filterConstraint:"Filter Constraint",editRow:"Row Edit",saveEdit:"Save Edit",cancelEdit:"Cancel Edit",listView:"List View",gridView:"Grid View",slide:"Slide",slideNumber:"{slideNumber}",zoomImage:"Zoom Image",zoomIn:"Zoom In",zoomOut:"Zoom Out",rotateRight:"Rotate Right",rotateLeft:"Rotate Left",listLabel:"Option List"}},filterMatchModeOptions:{text:[Ae.STARTS_WITH,Ae.CONTAINS,Ae.NOT_CONTAINS,Ae.ENDS_WITH,Ae.EQUALS,Ae.NOT_EQUALS],numeric:[Ae.EQUALS,Ae.NOT_EQUALS,Ae.LESS_THAN,Ae.LESS_THAN_OR_EQUAL_TO,Ae.GREATER_THAN,Ae.GREATER_THAN_OR_EQUAL_TO],date:[Ae.DATE_IS,Ae.DATE_IS_NOT,Ae.DATE_BEFORE,Ae.DATE_AFTER]},zIndex:{modal:1100,overlay:1e3,menu:1e3,tooltip:1100},theme:void 0,unstyled:!1,pt:void 0,ptOptions:{mergeSections:!0,mergeProps:!1},csp:{nonce:void 0}},L0=Symbol();function M0(t,e){var n={config:Rr(e)};return t.config.globalProperties.$primevue=n,t.provide(L0,n),D0(),j0(t,n),n}var Sn=[];function D0(){Xe.clear(),Sn.forEach(function(t){return t==null?void 0:t()}),Sn=[]}function j0(t,e){var n=er(!1),r=function(){if(!ue.isStyleNameLoaded("common")){var l,u,d=((l=ve.getCommonTheme)===null||l===void 0?void 0:l.call(ve))||{},f=d.primitive,g=d.semantic,m={nonce:(u=e.config)===null||u===void 0||(u=u.csp)===null||u===void 0?void 0:u.nonce};ve.load(f==null?void 0:f.css,gs({name:"primitive-variables"},m)),ve.load(g==null?void 0:g.css,gs({name:"semantic-variables"},m)),ve.loadTheme(gs({name:"global-style"},m)),ue.setLoadedStyleName("common")}};Xe.on("theme:change",function(c){n.value||(t.config.globalProperties.$primevue.config.theme=c,n.value=!0)});var o=vt(e.config,function(c,l){wn.emit("config:change",{newValue:c,oldValue:l})},{immediate:!0,deep:!0}),s=vt(function(){return e.config.ripple},function(c,l){wn.emit("config:ripple:change",{newValue:c,oldValue:l})},{immediate:!0,deep:!0}),i=vt(function(){return e.config.theme},function(c,l){n.value||ue.setTheme(c),e.config.unstyled||r(),n.value=!1,wn.emit("config:theme:change",{newValue:c,oldValue:l})},{immediate:!0,deep:!0}),a=vt(function(){return e.config.unstyled},function(c,l){!c&&e.config.theme&&r(),wn.emit("config:unstyled:change",{newValue:c,oldValue:l})},{immediate:!0,deep:!0});Sn.push(o),Sn.push(s),Sn.push(i),Sn.push(a)}var U0={install:function(e,n){var r=ry(N0,n);M0(e,r)}},B0=function(e){var n=e.dt;return`
.p-tag {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: `.concat(n("tag.primary.background"),`;
    color: `).concat(n("tag.primary.color"),`;
    font-size: `).concat(n("tag.font.size"),`;
    font-weight: `).concat(n("tag.font.weight"),`;
    padding: `).concat(n("tag.padding"),`;
    border-radius: `).concat(n("tag.border.radius"),`;
    gap: `).concat(n("tag.gap"),`;
}

.p-tag-icon {
    font-size: `).concat(n("tag.icon.size"),`;
    width: `).concat(n("tag.icon.size"),`;
    height:`).concat(n("tag.icon.size"),`;
}

.p-tag-rounded {
    border-radius: `).concat(n("tag.rounded.border.radius"),`;
}

.p-tag-success {
    background: `).concat(n("tag.success.background"),`;
    color: `).concat(n("tag.success.color"),`;
}

.p-tag-info {
    background: `).concat(n("tag.info.background"),`;
    color: `).concat(n("tag.info.color"),`;
}

.p-tag-warn {
    background: `).concat(n("tag.warn.background"),`;
    color: `).concat(n("tag.warn.color"),`;
}

.p-tag-danger {
    background: `).concat(n("tag.danger.background"),`;
    color: `).concat(n("tag.danger.color"),`;
}

.p-tag-secondary {
    background: `).concat(n("tag.secondary.background"),`;
    color: `).concat(n("tag.secondary.color"),`;
}

.p-tag-contrast {
    background: `).concat(n("tag.contrast.background"),`;
    color: `).concat(n("tag.contrast.color"),`;
}
`)},F0={root:function(e){var n=e.props;return["p-tag p-component",{"p-tag-info":n.severity==="info","p-tag-success":n.severity==="success","p-tag-warn":n.severity==="warn","p-tag-danger":n.severity==="danger","p-tag-secondary":n.severity==="secondary","p-tag-contrast":n.severity==="contrast","p-tag-rounded":n.rounded}]},icon:"p-tag-icon",label:"p-tag-label"},V0=ve.extend({name:"tag",theme:B0,classes:F0}),H0={name:"BaseTag",extends:zn,props:{value:null,severity:null,rounded:Boolean,icon:String},style:V0,provide:function(){return{$pcTag:this,$parentInstance:this}}},vd={name:"Tag",extends:H0,inheritAttrs:!1};function z0(t,e,n,r,o,s){return se(),Te("span",Q({class:t.cx("root")},t.ptmi("root")),[t.$slots.icon?(se(),Ue(_n(t.$slots.icon),Q({key:0,class:t.cx("icon")},t.ptm("icon")),null,16,["class"])):t.icon?(se(),Te("span",Q({key:1,class:[t.cx("icon"),t.icon]},t.ptm("icon")),null,16)):Nn("",!0),t.value!=null||t.$slots.default?Ht(t.$slots,"default",{key:2},function(){return[be("span",Q({class:t.cx("label")},t.ptm("label")),ur(t.value),17)]}):Nn("",!0)],16)}vd.render=z0;var yd={name:"Portal",props:{appendTo:{type:[String,Object],default:"body"},disabled:{type:Boolean,default:!1}},data:function(){return{mounted:!1}},mounted:function(){this.mounted=ld()},computed:{inline:function(){return this.disabled||this.appendTo==="self"}}};function W0(t,e,n,r,o,s){return s.inline?Ht(t.$slots,"default",{key:0}):o.mounted?(se(),Ue(sh,{key:1,to:n.appendTo},[Ht(t.$slots,"default")],8,["to"])):Nn("",!0)}yd.render=W0;var Ke=Mi();function kr(t){"@babel/helpers - typeof";return kr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},kr(t)}function Zr(t,e,n){return(e=K0(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function K0(t){var e=G0(t,"string");return kr(e)=="symbol"?e:e+""}function G0(t,e){if(kr(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(kr(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var q0=function(e){var n=e.dt;return`
.p-toast {
    width: `.concat(n("toast.width"),`;
    white-space: pre-line;
    word-break: break-word;
}

.p-toast-message {
    margin: 0 0 1rem 0;
}

.p-toast-message-icon {
    flex-shrink: 0;
    font-size: `).concat(n("toast.icon.size"),`;
    width: `).concat(n("toast.icon.size"),`;
    height: `).concat(n("toast.icon.size"),`;
}

.p-toast-message-content {
    display: flex;
    align-items: flex-start;
    padding: `).concat(n("toast.content.padding"),`;
    gap: `).concat(n("toast.content.gap"),`;
}

.p-toast-message-text {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    gap: `).concat(n("toast.text.gap"),`;
}

.p-toast-summary {
    font-weight: `).concat(n("toast.summary.font.weight"),`;
    font-size: `).concat(n("toast.summary.font.size"),`;
}

.p-toast-detail {
    font-weight: `).concat(n("toast.detail.font.weight"),`;
    font-size: `).concat(n("toast.detail.font.size"),`;
}

.p-toast-close-button {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    cursor: pointer;
    background: transparent;
    transition: background `).concat(n("toast.transition.duration"),", color ").concat(n("toast.transition.duration"),", outline-color ").concat(n("toast.transition.duration"),", box-shadow ").concat(n("toast.transition.duration"),`;
    outline-color: transparent;
    color: inherit;
    width: `).concat(n("toast.close.button.width"),`;
    height: `).concat(n("toast.close.button.height"),`;
    border-radius: `).concat(n("toast.close.button.border.radius"),`;
    margin: -25% 0 0 0;
    right: -25%;
    padding: 0;
    border: none;
    user-select: none;
}

.p-toast-message-info,
.p-toast-message-success,
.p-toast-message-warn,
.p-toast-message-error,
.p-toast-message-secondary,
.p-toast-message-contrast {
    border-width: `).concat(n("toast.border.width"),`;
    border-style: solid;
    backdrop-filter: blur(`).concat(n("toast.blur"),`);
    border-radius: `).concat(n("toast.border.radius"),`;
}

.p-toast-close-icon {
    font-size: `).concat(n("toast.close.icon.size"),`;
    width: `).concat(n("toast.close.icon.size"),`;
    height: `).concat(n("toast.close.icon.size"),`;
}

.p-toast-close-button:focus-visible {
    outline-width: `).concat(n("focus.ring.width"),`;
    outline-style: `).concat(n("focus.ring.style"),`;
    outline-offset: `).concat(n("focus.ring.offset"),`;
}

.p-toast-message-info {
    background: `).concat(n("toast.info.background"),`;
    border-color: `).concat(n("toast.info.border.color"),`;
    color: `).concat(n("toast.info.color"),`;
    box-shadow: `).concat(n("toast.info.shadow"),`;
}

.p-toast-message-info .p-toast-detail {
    color: `).concat(n("toast.info.detail.color"),`;
}

.p-toast-message-info .p-toast-close-button:focus-visible {
    outline-color: `).concat(n("toast.info.close.button.focus.ring.color"),`;
    box-shadow: `).concat(n("toast.info.close.button.focus.ring.shadow"),`;
}

.p-toast-message-info .p-toast-close-button:hover {
    background: `).concat(n("toast.info.close.button.hover.background"),`;
}

.p-toast-message-success {
    background: `).concat(n("toast.success.background"),`;
    border-color: `).concat(n("toast.success.border.color"),`;
    color: `).concat(n("toast.success.color"),`;
    box-shadow: `).concat(n("toast.success.shadow"),`;
}

.p-toast-message-success .p-toast-detail {
    color: `).concat(n("toast.success.detail.color"),`;
}

.p-toast-message-success .p-toast-close-button:focus-visible {
    outline-color: `).concat(n("toast.success.close.button.focus.ring.color"),`;
    box-shadow: `).concat(n("toast.success.close.button.focus.ring.shadow"),`;
}

.p-toast-message-success .p-toast-close-button:hover {
    background: `).concat(n("toast.success.close.button.hover.background"),`;
}

.p-toast-message-warn {
    background: `).concat(n("toast.warn.background"),`;
    border-color: `).concat(n("toast.warn.border.color"),`;
    color: `).concat(n("toast.warn.color"),`;
    box-shadow: `).concat(n("toast.warn.shadow"),`;
}

.p-toast-message-warn .p-toast-detail {
    color: `).concat(n("toast.warn.detail.color"),`;
}

.p-toast-message-warn .p-toast-close-button:focus-visible {
    outline-color: `).concat(n("toast.warn.close.button.focus.ring.color"),`;
    box-shadow: `).concat(n("toast.warn.close.button.focus.ring.shadow"),`;
}

.p-toast-message-warn .p-toast-close-button:hover {
    background: `).concat(n("toast.warn.close.button.hover.background"),`;
}

.p-toast-message-error {
    background: `).concat(n("toast.error.background"),`;
    border-color: `).concat(n("toast.error.border.color"),`;
    color: `).concat(n("toast.error.color"),`;
    box-shadow: `).concat(n("toast.error.shadow"),`;
}

.p-toast-message-error .p-toast-detail {
    color: `).concat(n("toast.error.detail.color"),`;
}

.p-toast-message-error .p-toast-close-button:focus-visible {
    outline-color: `).concat(n("toast.error.close.button.focus.ring.color"),`;
    box-shadow: `).concat(n("toast.error.close.button.focus.ring.shadow"),`;
}

.p-toast-message-error .p-toast-close-button:hover {
    background: `).concat(n("toast.error.close.button.hover.background"),`;
}

.p-toast-message-secondary {
    background: `).concat(n("toast.secondary.background"),`;
    border-color: `).concat(n("toast.secondary.border.color"),`;
    color: `).concat(n("toast.secondary.color"),`;
    box-shadow: `).concat(n("toast.secondary.shadow"),`;
}

.p-toast-message-secondary .p-toast-detail {
    color: `).concat(n("toast.secondary.detail.color"),`;
}

.p-toast-message-secondary .p-toast-close-button:focus-visible {
    outline-color: `).concat(n("toast.secondary.close.button.focus.ring.color"),`;
    box-shadow: `).concat(n("toast.secondary.close.button.focus.ring.shadow"),`;
}

.p-toast-message-secondary .p-toast-close-button:hover {
    background: `).concat(n("toast.secondary.close.button.hover.background"),`;
}

.p-toast-message-contrast {
    background: `).concat(n("toast.contrast.background"),`;
    border-color: `).concat(n("toast.contrast.border.color"),`;
    color: `).concat(n("toast.contrast.color"),`;
    box-shadow: `).concat(n("toast.contrast.shadow"),`;
}

.p-toast-message-contrast .p-toast-detail {
    color: `).concat(n("toast.contrast.detail.color"),`;
}

.p-toast-message-contrast .p-toast-close-button:focus-visible {
    outline-color: `).concat(n("toast.contrast.close.button.focus.ring.color"),`;
    box-shadow: `).concat(n("toast.contrast.close.button.focus.ring.shadow"),`;
}

.p-toast-message-contrast .p-toast-close-button:hover {
    background: `).concat(n("toast.contrast.close.button.hover.background"),`;
}

.p-toast-top-center {
    transform: translateX(-50%);
}

.p-toast-bottom-center {
    transform: translateX(-50%);
}

.p-toast-center {
    min-width: 20vw;
    transform: translate(-50%, -50%);
}

.p-toast-message-enter-from {
    opacity: 0;
    transform: translateY(50%);
}

.p-toast-message-leave-from {
    max-height: 1000px;
}

.p-toast .p-toast-message.p-toast-message-leave-to {
    max-height: 0;
    opacity: 0;
    margin-bottom: 0;
    overflow: hidden;
}

.p-toast-message-enter-active {
    transition: transform 0.3s, opacity 0.3s;
}

.p-toast-message-leave-active {
    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1), opacity 0.3s, margin-bottom 0.3s;
}
`)},J0={root:function(e){var n=e.position;return{position:"fixed",top:n==="top-right"||n==="top-left"||n==="top-center"?"20px":n==="center"?"50%":null,right:(n==="top-right"||n==="bottom-right")&&"20px",bottom:(n==="bottom-left"||n==="bottom-right"||n==="bottom-center")&&"20px",left:n==="top-left"||n==="bottom-left"?"20px":n==="center"||n==="top-center"||n==="bottom-center"?"50%":null}}},Y0={root:function(e){var n=e.props;return["p-toast p-component p-toast-"+n.position]},message:function(e){var n=e.props;return["p-toast-message",{"p-toast-message-info":n.message.severity==="info"||n.message.severity===void 0,"p-toast-message-warn":n.message.severity==="warn","p-toast-message-error":n.message.severity==="error","p-toast-message-success":n.message.severity==="success","p-toast-message-secondary":n.message.severity==="secondary","p-toast-message-contrast":n.message.severity==="contrast"}]},messageContent:"p-toast-message-content",messageIcon:function(e){var n=e.props;return["p-toast-message-icon",Zr(Zr(Zr(Zr({},n.infoIcon,n.message.severity==="info"),n.warnIcon,n.message.severity==="warn"),n.errorIcon,n.message.severity==="error"),n.successIcon,n.message.severity==="success")]},messageText:"p-toast-message-text",summary:"p-toast-summary",detail:"p-toast-detail",closeButton:"p-toast-close-button",closeIcon:"p-toast-close-icon"},Z0=ve.extend({name:"toast",theme:q0,classes:Y0,inlineStyles:J0}),Ws={name:"CheckIcon",extends:Wn},X0=be("path",{d:"M4.86199 11.5948C4.78717 11.5923 4.71366 11.5745 4.64596 11.5426C4.57826 11.5107 4.51779 11.4652 4.46827 11.4091L0.753985 7.69483C0.683167 7.64891 0.623706 7.58751 0.580092 7.51525C0.536478 7.44299 0.509851 7.36177 0.502221 7.27771C0.49459 7.19366 0.506156 7.10897 0.536046 7.03004C0.565935 6.95111 0.613367 6.88 0.674759 6.82208C0.736151 6.76416 0.8099 6.72095 0.890436 6.69571C0.970973 6.67046 1.05619 6.66385 1.13966 6.67635C1.22313 6.68886 1.30266 6.72017 1.37226 6.76792C1.44186 6.81567 1.4997 6.8786 1.54141 6.95197L4.86199 10.2503L12.6397 2.49483C12.7444 2.42694 12.8689 2.39617 12.9932 2.40745C13.1174 2.41873 13.2343 2.47141 13.3251 2.55705C13.4159 2.64268 13.4753 2.75632 13.4938 2.87973C13.5123 3.00315 13.4888 3.1292 13.4271 3.23768L5.2557 11.4091C5.20618 11.4652 5.14571 11.5107 5.07801 11.5426C5.01031 11.5745 4.9368 11.5923 4.86199 11.5948Z",fill:"currentColor"},null,-1),Q0=[X0];function e_(t,e,n,r,o,s){return se(),Te("svg",Q({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.pti()),Q0,16)}Ws.render=e_;var Ks={name:"ExclamationTriangleIcon",extends:Wn},t_=be("path",{d:"M13.4018 13.1893H0.598161C0.49329 13.189 0.390283 13.1615 0.299143 13.1097C0.208003 13.0578 0.131826 12.9832 0.0780112 12.8932C0.0268539 12.8015 0 12.6982 0 12.5931C0 12.4881 0.0268539 12.3848 0.0780112 12.293L6.47985 1.08982C6.53679 1.00399 6.61408 0.933574 6.70484 0.884867C6.7956 0.836159 6.897 0.810669 7 0.810669C7.103 0.810669 7.2044 0.836159 7.29516 0.884867C7.38592 0.933574 7.46321 1.00399 7.52015 1.08982L13.922 12.293C13.9731 12.3848 14 12.4881 14 12.5931C14 12.6982 13.9731 12.8015 13.922 12.8932C13.8682 12.9832 13.792 13.0578 13.7009 13.1097C13.6097 13.1615 13.5067 13.189 13.4018 13.1893ZM1.63046 11.989H12.3695L7 2.59425L1.63046 11.989Z",fill:"currentColor"},null,-1),n_=be("path",{d:"M6.99996 8.78801C6.84143 8.78594 6.68997 8.72204 6.57787 8.60993C6.46576 8.49782 6.40186 8.34637 6.39979 8.18784V5.38703C6.39979 5.22786 6.46302 5.0752 6.57557 4.96265C6.68813 4.85009 6.84078 4.78686 6.99996 4.78686C7.15914 4.78686 7.31179 4.85009 7.42435 4.96265C7.5369 5.0752 7.60013 5.22786 7.60013 5.38703V8.18784C7.59806 8.34637 7.53416 8.49782 7.42205 8.60993C7.30995 8.72204 7.15849 8.78594 6.99996 8.78801Z",fill:"currentColor"},null,-1),r_=be("path",{d:"M6.99996 11.1887C6.84143 11.1866 6.68997 11.1227 6.57787 11.0106C6.46576 10.8985 6.40186 10.7471 6.39979 10.5885V10.1884C6.39979 10.0292 6.46302 9.87658 6.57557 9.76403C6.68813 9.65147 6.84078 9.58824 6.99996 9.58824C7.15914 9.58824 7.31179 9.65147 7.42435 9.76403C7.5369 9.87658 7.60013 10.0292 7.60013 10.1884V10.5885C7.59806 10.7471 7.53416 10.8985 7.42205 11.0106C7.30995 11.1227 7.15849 11.1866 6.99996 11.1887Z",fill:"currentColor"},null,-1),o_=[t_,n_,r_];function s_(t,e,n,r,o,s){return se(),Te("svg",Q({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.pti()),o_,16)}Ks.render=s_;var Gs={name:"InfoCircleIcon",extends:Wn},i_=be("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M3.11101 12.8203C4.26215 13.5895 5.61553 14 7 14C8.85652 14 10.637 13.2625 11.9497 11.9497C13.2625 10.637 14 8.85652 14 7C14 5.61553 13.5895 4.26215 12.8203 3.11101C12.0511 1.95987 10.9579 1.06266 9.67879 0.532846C8.3997 0.00303296 6.99224 -0.13559 5.63437 0.134506C4.2765 0.404603 3.02922 1.07129 2.05026 2.05026C1.07129 3.02922 0.404603 4.2765 0.134506 5.63437C-0.13559 6.99224 0.00303296 8.3997 0.532846 9.67879C1.06266 10.9579 1.95987 12.0511 3.11101 12.8203ZM3.75918 2.14976C4.71846 1.50879 5.84628 1.16667 7 1.16667C8.5471 1.16667 10.0308 1.78125 11.1248 2.87521C12.2188 3.96918 12.8333 5.45291 12.8333 7C12.8333 8.15373 12.4912 9.28154 11.8502 10.2408C11.2093 11.2001 10.2982 11.9478 9.23232 12.3893C8.16642 12.8308 6.99353 12.9463 5.86198 12.7212C4.73042 12.4962 3.69102 11.9406 2.87521 11.1248C2.05941 10.309 1.50384 9.26958 1.27876 8.13803C1.05367 7.00647 1.16919 5.83358 1.61071 4.76768C2.05222 3.70178 2.79989 2.79074 3.75918 2.14976ZM7.00002 4.8611C6.84594 4.85908 6.69873 4.79698 6.58977 4.68801C6.48081 4.57905 6.4187 4.43185 6.41669 4.27776V3.88888C6.41669 3.73417 6.47815 3.58579 6.58754 3.4764C6.69694 3.367 6.84531 3.30554 7.00002 3.30554C7.15473 3.30554 7.3031 3.367 7.4125 3.4764C7.52189 3.58579 7.58335 3.73417 7.58335 3.88888V4.27776C7.58134 4.43185 7.51923 4.57905 7.41027 4.68801C7.30131 4.79698 7.1541 4.85908 7.00002 4.8611ZM7.00002 10.6945C6.84594 10.6925 6.69873 10.6304 6.58977 10.5214C6.48081 10.4124 6.4187 10.2652 6.41669 10.1111V6.22225C6.41669 6.06754 6.47815 5.91917 6.58754 5.80977C6.69694 5.70037 6.84531 5.63892 7.00002 5.63892C7.15473 5.63892 7.3031 5.70037 7.4125 5.80977C7.52189 5.91917 7.58335 6.06754 7.58335 6.22225V10.1111C7.58134 10.2652 7.51923 10.4124 7.41027 10.5214C7.30131 10.6304 7.1541 10.6925 7.00002 10.6945Z",fill:"currentColor"},null,-1),a_=[i_];function c_(t,e,n,r,o,s){return se(),Te("svg",Q({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.pti()),a_,16)}Gs.render=c_;var _d={name:"TimesIcon",extends:Wn},l_=be("path",{d:"M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z",fill:"currentColor"},null,-1),u_=[l_];function d_(t,e,n,r,o,s){return se(),Te("svg",Q({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.pti()),u_,16)}_d.render=d_;var qs={name:"TimesCircleIcon",extends:Wn},f_=be("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M7 14C5.61553 14 4.26215 13.5895 3.11101 12.8203C1.95987 12.0511 1.06266 10.9579 0.532846 9.67879C0.00303296 8.3997 -0.13559 6.99224 0.134506 5.63437C0.404603 4.2765 1.07129 3.02922 2.05026 2.05026C3.02922 1.07129 4.2765 0.404603 5.63437 0.134506C6.99224 -0.13559 8.3997 0.00303296 9.67879 0.532846C10.9579 1.06266 12.0511 1.95987 12.8203 3.11101C13.5895 4.26215 14 5.61553 14 7C14 8.85652 13.2625 10.637 11.9497 11.9497C10.637 13.2625 8.85652 14 7 14ZM7 1.16667C5.84628 1.16667 4.71846 1.50879 3.75918 2.14976C2.79989 2.79074 2.05222 3.70178 1.61071 4.76768C1.16919 5.83358 1.05367 7.00647 1.27876 8.13803C1.50384 9.26958 2.05941 10.309 2.87521 11.1248C3.69102 11.9406 4.73042 12.4962 5.86198 12.7212C6.99353 12.9463 8.16642 12.8308 9.23232 12.3893C10.2982 11.9478 11.2093 11.2001 11.8502 10.2408C12.4912 9.28154 12.8333 8.15373 12.8333 7C12.8333 5.45291 12.2188 3.96918 11.1248 2.87521C10.0308 1.78125 8.5471 1.16667 7 1.16667ZM4.66662 9.91668C4.58998 9.91704 4.51404 9.90209 4.44325 9.87271C4.37246 9.84333 4.30826 9.8001 4.2544 9.74557C4.14516 9.6362 4.0838 9.48793 4.0838 9.33335C4.0838 9.17876 4.14516 9.0305 4.2544 8.92113L6.17553 7L4.25443 5.07891C4.15139 4.96832 4.09529 4.82207 4.09796 4.67094C4.10063 4.51982 4.16185 4.37563 4.26872 4.26876C4.3756 4.16188 4.51979 4.10066 4.67091 4.09799C4.82204 4.09532 4.96829 4.15142 5.07887 4.25446L6.99997 6.17556L8.92106 4.25446C9.03164 4.15142 9.1779 4.09532 9.32903 4.09799C9.48015 4.10066 9.62434 4.16188 9.73121 4.26876C9.83809 4.37563 9.89931 4.51982 9.90198 4.67094C9.90464 4.82207 9.84855 4.96832 9.74551 5.07891L7.82441 7L9.74554 8.92113C9.85478 9.0305 9.91614 9.17876 9.91614 9.33335C9.91614 9.48793 9.85478 9.6362 9.74554 9.74557C9.69168 9.8001 9.62748 9.84333 9.55669 9.87271C9.4859 9.90209 9.40996 9.91704 9.33332 9.91668C9.25668 9.91704 9.18073 9.90209 9.10995 9.87271C9.03916 9.84333 8.97495 9.8001 8.9211 9.74557L6.99997 7.82444L5.07884 9.74557C5.02499 9.8001 4.96078 9.84333 4.88999 9.87271C4.81921 9.90209 4.74326 9.91704 4.66662 9.91668Z",fill:"currentColor"},null,-1),h_=[f_];function p_(t,e,n,r,o,s){return se(),Te("svg",Q({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.pti()),h_,16)}qs.render=p_;var g_={name:"BaseToast",extends:zn,props:{group:{type:String,default:null},position:{type:String,default:"top-right"},autoZIndex:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},breakpoints:{type:Object,default:null},closeIcon:{type:String,default:void 0},infoIcon:{type:String,default:void 0},warnIcon:{type:String,default:void 0},errorIcon:{type:String,default:void 0},successIcon:{type:String,default:void 0},closeButtonProps:{type:null,default:null}},style:Z0,provide:function(){return{$pcToast:this,$parentInstance:this}}},wd={name:"ToastMessage",hostName:"Toast",extends:zn,emits:["close"],closeTimeout:null,props:{message:{type:null,default:null},templates:{type:Object,default:null},closeIcon:{type:String,default:null},infoIcon:{type:String,default:null},warnIcon:{type:String,default:null},errorIcon:{type:String,default:null},successIcon:{type:String,default:null},closeButtonProps:{type:null,default:null}},mounted:function(){var e=this;this.message.life&&(this.closeTimeout=setTimeout(function(){e.close({message:e.message,type:"life-end"})},this.message.life))},beforeUnmount:function(){this.clearCloseTimeout()},methods:{close:function(e){this.$emit("close",e)},onCloseClick:function(){this.clearCloseTimeout(),this.close({message:this.message,type:"close"})},clearCloseTimeout:function(){this.closeTimeout&&(clearTimeout(this.closeTimeout),this.closeTimeout=null)}},computed:{iconComponent:function(){return{info:!this.infoIcon&&Gs,success:!this.successIcon&&Ws,warn:!this.warnIcon&&Ks,error:!this.errorIcon&&qs}[this.message.severity]},closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0}},components:{TimesIcon:_d,InfoCircleIcon:Gs,CheckIcon:Ws,ExclamationTriangleIcon:Ks,TimesCircleIcon:qs},directives:{ripple:md}};function Or(t){"@babel/helpers - typeof";return Or=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Or(t)}function Fc(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),n.push.apply(n,r)}return n}function Vc(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Fc(Object(n),!0).forEach(function(r){m_(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Fc(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function m_(t,e,n){return(e=b_(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function b_(t){var e=v_(t,"string");return Or(e)=="symbol"?e:e+""}function v_(t,e){if(Or(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(Or(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var y_=["aria-label"];function __(t,e,n,r,o,s){var i=Sl("ripple");return se(),Te("div",Q({class:[t.cx("message"),n.message.styleClass],role:"alert","aria-live":"assertive","aria-atomic":"true"},t.ptm("message")),[n.templates.container?(se(),Ue(_n(n.templates.container),{key:0,message:n.message,closeCallback:s.onCloseClick},null,8,["message","closeCallback"])):(se(),Te("div",Q({key:1,class:[t.cx("messageContent"),n.message.contentStyleClass]},t.ptm("messageContent")),[n.templates.message?(se(),Ue(_n(n.templates.message),{key:1,message:n.message},null,8,["message"])):(se(),Te(Me,{key:0},[(se(),Ue(_n(n.templates.messageicon?n.templates.messageicon:n.templates.icon?n.templates.icon:s.iconComponent&&s.iconComponent.name?s.iconComponent:"span"),Q({class:t.cx("messageIcon")},t.ptm("messageIcon")),null,16,["class"])),be("div",Q({class:t.cx("messageText")},t.ptm("messageText")),[be("span",Q({class:t.cx("summary")},t.ptm("summary")),ur(n.message.summary),17),be("div",Q({class:t.cx("detail")},t.ptm("detail")),ur(n.message.detail),17)],16)],64)),n.message.closable!==!1?(se(),Te("div",Nd(Q({key:2},t.ptm("buttonContainer"))),[El((se(),Te("button",Q({class:t.cx("closeButton"),type:"button","aria-label":s.closeAriaLabel,onClick:e[0]||(e[0]=function(){return s.onCloseClick&&s.onCloseClick.apply(s,arguments)}),autofocus:""},Vc(Vc({},n.closeButtonProps),t.ptm("closeButton"))),[(se(),Ue(_n(n.templates.closeicon||"TimesIcon"),Q({class:[t.cx("closeIcon"),n.closeIcon]},t.ptm("closeIcon")),null,16,["class"]))],16,y_)),[[i]])],16)):Nn("",!0)],16))],16)}wd.render=__;function w_(t){return E_(t)||T_(t)||C_(t)||S_()}function S_(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function C_(t,e){if(t){if(typeof t=="string")return Js(t,e);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Js(t,e):void 0}}function T_(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function E_(t){if(Array.isArray(t))return Js(t)}function Js(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}var I_=0,Sd={name:"Toast",extends:g_,inheritAttrs:!1,emits:["close","life-end"],data:function(){return{messages:[]}},styleElement:null,mounted:function(){Ke.on("add",this.onAdd),Ke.on("remove",this.onRemove),Ke.on("remove-group",this.onRemoveGroup),Ke.on("remove-all-groups",this.onRemoveAllGroups),this.breakpoints&&this.createStyle()},beforeUnmount:function(){this.destroyStyle(),this.$refs.container&&this.autoZIndex&&ps.clear(this.$refs.container),Ke.off("add",this.onAdd),Ke.off("remove",this.onRemove),Ke.off("remove-group",this.onRemoveGroup),Ke.off("remove-all-groups",this.onRemoveAllGroups)},methods:{add:function(e){e.id==null&&(e.id=I_++),this.messages=[].concat(w_(this.messages),[e])},remove:function(e){var n=this.messages.findIndex(function(r){return r.id===e.message.id});n!==-1&&(this.messages.splice(n,1),this.$emit(e.type,{message:e.message}))},onAdd:function(e){this.group==e.group&&this.add(e)},onRemove:function(e){this.remove({message:e,type:"close"})},onRemoveGroup:function(e){this.group===e&&(this.messages=[])},onRemoveAllGroups:function(){this.messages=[]},onEnter:function(){this.$refs.container.setAttribute(this.attributeSelector,""),this.autoZIndex&&ps.set("modal",this.$refs.container,this.baseZIndex||this.$primevue.config.zIndex.modal)},onLeave:function(){var e=this;this.$refs.container&&this.autoZIndex&&pn(this.messages)&&setTimeout(function(){ps.clear(e.$refs.container)},200)},createStyle:function(){if(!this.styleElement&&!this.isUnstyled){var e;this.styleElement=document.createElement("style"),this.styleElement.type="text/css",ud(this.styleElement,"nonce",(e=this.$primevue)===null||e===void 0||(e=e.config)===null||e===void 0||(e=e.csp)===null||e===void 0?void 0:e.nonce),document.head.appendChild(this.styleElement);var n="";for(var r in this.breakpoints){var o="";for(var s in this.breakpoints[r])o+=s+":"+this.breakpoints[r][s]+"!important;";n+=`
                        @media screen and (max-width: `.concat(r,`) {
                            .p-toast[`).concat(this.attributeSelector,`] {
                                `).concat(o,`
                            }
                        }
                    `)}this.styleElement.innerHTML=n}},destroyStyle:function(){this.styleElement&&(document.head.removeChild(this.styleElement),this.styleElement=null)}},computed:{attributeSelector:function(){return Di()}},components:{ToastMessage:wd,Portal:yd}};function Ar(t){"@babel/helpers - typeof";return Ar=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ar(t)}function Hc(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),n.push.apply(n,r)}return n}function P_(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Hc(Object(n),!0).forEach(function(r){k_(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Hc(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function k_(t,e,n){return(e=O_(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function O_(t){var e=A_(t,"string");return Ar(e)=="symbol"?e:e+""}function A_(t,e){if(Ar(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(Ar(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function R_(t,e,n,r,o,s){var i=xn("ToastMessage"),a=xn("Portal");return se(),Ue(a,null,{default:pr(function(){return[be("div",Q({ref:"container",class:t.cx("root"),style:t.sx("root",!0,{position:t.position})},t.ptmi("root")),[Pe(zh,Q({name:"p-toast-message",tag:"div",onEnter:s.onEnter,onLeave:s.onLeave},P_({},t.ptm("transition"))),{default:pr(function(){return[(se(!0),Te(Me,null,jf(o.messages,function(c){return se(),Ue(i,{key:c.id,message:c,templates:t.$slots,closeIcon:t.closeIcon,infoIcon:t.infoIcon,warnIcon:t.warnIcon,errorIcon:t.errorIcon,successIcon:t.successIcon,closeButtonProps:t.closeButtonProps,unstyled:t.unstyled,onClose:e[0]||(e[0]=function(l){return s.remove(l)}),pt:t.pt},null,8,["message","templates","closeIcon","infoIcon","warnIcon","errorIcon","successIcon","closeButtonProps","unstyled","pt"])}),128))]}),_:1},16,["onEnter","onLeave"])],16)]}),_:1})}Sd.render=R_;var $_=Symbol(),x_={install:function(e){var n={add:function(o){Ke.emit("add",o)},remove:function(o){Ke.emit("remove",o)},removeGroup:function(o){Ke.emit("remove-group",o)},removeAllGroups:function(){Ke.emit("remove-all-groups")}};e.config.globalProperties.$toast=n,e.provide($_,n)}};const gn=Zh(rp);gn.use(tn);gn.use(U0);gn.component("Toast",Sd);gn.component("Tag",vd);gn.use(x_);gn.component("Button",bd);gn.mount("#app");export{Me as F,ls as a,tn as b,se as c,Te as d,be as e,Wl as f,Pe as g,jf as h,ko as n,hi as o,er as r,ur as t,In as u};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Home-C38zqZ1U.js","assets/FingerprintSpinner-BLbN4rBv.js","assets/FingerprintSpinner-B0brDK4G.css","assets/Loading-BuGhIwap.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
