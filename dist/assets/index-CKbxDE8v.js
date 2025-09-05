(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=r(o);fetch(o.href,i)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Fe=globalThis,Dr=Fe.ShadowRoot&&(Fe.ShadyCSS===void 0||Fe.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Mr=Symbol(),ln=new WeakMap;let Wn=class{constructor(t,r,n){if(this._$cssResult$=!0,n!==Mr)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(Dr&&t===void 0){const n=r!==void 0&&r.length===1;n&&(t=ln.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&ln.set(r,t))}return t}toString(){return this.cssText}};const Uo=e=>new Wn(typeof e=="string"?e:e+"",void 0,Mr),ee=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((n,o,i)=>n+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[i+1],e[0]);return new Wn(r,e,Mr)},Bo=(e,t)=>{if(Dr)e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of t){const n=document.createElement("style"),o=Fe.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=r.cssText,e.appendChild(n)}},un=Dr?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const n of t.cssRules)r+=n.cssText;return Uo(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Fo,defineProperty:Ho,getOwnPropertyDescriptor:qo,getOwnPropertyNames:Wo,getOwnPropertySymbols:jo,getPrototypeOf:Go}=Object,Ct=globalThis,cn=Ct.trustedTypes,Yo=cn?cn.emptyScript:"",gr=Ct.reactiveElementPolyfillSupport,he=(e,t)=>e,Ke={toAttribute(e,t){switch(t){case Boolean:e=e?Yo:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},Vr=(e,t)=>!Fo(e,t),dn={attribute:!0,type:String,converter:Ke,reflect:!1,useDefault:!1,hasChanged:Vr};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Ct.litPropertyMetadata??(Ct.litPropertyMetadata=new WeakMap);let Wt=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,r=dn){if(r.state&&(r.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((r=Object.create(r)).wrapped=!0),this.elementProperties.set(t,r),!r.noAccessor){const n=Symbol(),o=this.getPropertyDescriptor(t,n,r);o!==void 0&&Ho(this.prototype,t,o)}}static getPropertyDescriptor(t,r,n){const{get:o,set:i}=qo(this.prototype,t)??{get(){return this[r]},set(s){this[r]=s}};return{get:o,set(s){const l=o==null?void 0:o.call(this);i==null||i.call(this,s),this.requestUpdate(t,l,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??dn}static _$Ei(){if(this.hasOwnProperty(he("elementProperties")))return;const t=Go(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(he("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(he("properties"))){const r=this.properties,n=[...Wo(r),...jo(r)];for(const o of n)this.createProperty(o,r[o])}const t=this[Symbol.metadata];if(t!==null){const r=litPropertyMetadata.get(t);if(r!==void 0)for(const[n,o]of r)this.elementProperties.set(n,o)}this._$Eh=new Map;for(const[r,n]of this.elementProperties){const o=this._$Eu(r,n);o!==void 0&&this._$Eh.set(o,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const o of n)r.unshift(un(o))}else t!==void 0&&r.push(un(t));return r}static _$Eu(t,r){const n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(r=>r(this))}addController(t){var r;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((r=t.hostConnected)==null||r.call(t))}removeController(t){var r;(r=this._$EO)==null||r.delete(t)}_$E_(){const t=new Map,r=this.constructor.elementProperties;for(const n of r.keys())this.hasOwnProperty(n)&&(t.set(n,this[n]),delete this[n]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Bo(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(r=>{var n;return(n=r.hostConnected)==null?void 0:n.call(r)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(r=>{var n;return(n=r.hostDisconnected)==null?void 0:n.call(r)})}attributeChangedCallback(t,r,n){this._$AK(t,n)}_$ET(t,r){var i;const n=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,n);if(o!==void 0&&n.reflect===!0){const s=(((i=n.converter)==null?void 0:i.toAttribute)!==void 0?n.converter:Ke).toAttribute(r,n.type);this._$Em=t,s==null?this.removeAttribute(o):this.setAttribute(o,s),this._$Em=null}}_$AK(t,r){var i,s;const n=this.constructor,o=n._$Eh.get(t);if(o!==void 0&&this._$Em!==o){const l=n.getPropertyOptions(o),a=typeof l.converter=="function"?{fromAttribute:l.converter}:((i=l.converter)==null?void 0:i.fromAttribute)!==void 0?l.converter:Ke;this._$Em=o;const u=a.fromAttribute(r,l.type);this[o]=u??((s=this._$Ej)==null?void 0:s.get(o))??u,this._$Em=null}}requestUpdate(t,r,n){var o;if(t!==void 0){const i=this.constructor,s=this[t];if(n??(n=i.getPropertyOptions(t)),!((n.hasChanged??Vr)(s,r)||n.useDefault&&n.reflect&&s===((o=this._$Ej)==null?void 0:o.get(t))&&!this.hasAttribute(i._$Eu(t,n))))return;this.C(t,r,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,r,{useDefault:n,reflect:o,wrapped:i},s){n&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,s??r??this[t]),i!==!0||s!==void 0)||(this._$AL.has(t)||(this.hasUpdated||n||(r=void 0),this._$AL.set(t,r)),o===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var n;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[i,s]of this._$Ep)this[i]=s;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[i,s]of o){const{wrapped:l}=s,a=this[i];l!==!0||this._$AL.has(i)||a===void 0||this.C(i,void 0,s,a)}}let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),(n=this._$EO)==null||n.forEach(o=>{var i;return(i=o.hostUpdate)==null?void 0:i.call(o)}),this.update(r)):this._$EM()}catch(o){throw t=!1,this._$EM(),o}t&&this._$AE(r)}willUpdate(t){}_$AE(t){var r;(r=this._$EO)==null||r.forEach(n=>{var o;return(o=n.hostUpdated)==null?void 0:o.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(r=>this._$ET(r,this[r]))),this._$EM()}updated(t){}firstUpdated(t){}};Wt.elementStyles=[],Wt.shadowRootOptions={mode:"open"},Wt[he("elementProperties")]=new Map,Wt[he("finalized")]=new Map,gr==null||gr({ReactiveElement:Wt}),(Ct.reactiveElementVersions??(Ct.reactiveElementVersions=[])).push("2.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const fe=globalThis,Xe=fe.trustedTypes,hn=Xe?Xe.createPolicy("lit-html",{createHTML:e=>e}):void 0,jn="$lit$",St=`lit$${Math.random().toFixed(9).slice(2)}$`,Gn="?"+St,Ko=`<${Gn}>`,zt=document,be=()=>zt.createComment(""),me=e=>e===null||typeof e!="object"&&typeof e!="function",zr=Array.isArray,Xo=e=>zr(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",br=`[ 	
\f\r]`,ae=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,fn=/-->/g,vn=/>/g,It=RegExp(`>|${br}(?:([^\\s"'>=/]+)(${br}*=${br}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),pn=/'/g,gn=/"/g,Yn=/^(?:script|style|textarea|title)$/i,Zo=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),rr=Zo(1),Ut=Symbol.for("lit-noChange"),Z=Symbol.for("lit-nothing"),bn=new WeakMap,Dt=zt.createTreeWalker(zt,129);function Kn(e,t){if(!zr(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return hn!==void 0?hn.createHTML(t):t}const Jo=(e,t)=>{const r=e.length-1,n=[];let o,i=t===2?"<svg>":t===3?"<math>":"",s=ae;for(let l=0;l<r;l++){const a=e[l];let u,c,h=-1,v=0;for(;v<a.length&&(s.lastIndex=v,c=s.exec(a),c!==null);)v=s.lastIndex,s===ae?c[1]==="!--"?s=fn:c[1]!==void 0?s=vn:c[2]!==void 0?(Yn.test(c[2])&&(o=RegExp("</"+c[2],"g")),s=It):c[3]!==void 0&&(s=It):s===It?c[0]===">"?(s=o??ae,h=-1):c[1]===void 0?h=-2:(h=s.lastIndex-c[2].length,u=c[1],s=c[3]===void 0?It:c[3]==='"'?gn:pn):s===gn||s===pn?s=It:s===fn||s===vn?s=ae:(s=It,o=void 0);const p=s===It&&e[l+1].startsWith("/>")?" ":"";i+=s===ae?a+Ko:h>=0?(n.push(u),a.slice(0,h)+jn+a.slice(h)+St+p):a+St+(h===-2?l:p)}return[Kn(e,i+(e[r]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),n]};class ye{constructor({strings:t,_$litType$:r},n){let o;this.parts=[];let i=0,s=0;const l=t.length-1,a=this.parts,[u,c]=Jo(t,r);if(this.el=ye.createElement(u,n),Dt.currentNode=this.el.content,r===2||r===3){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(o=Dt.nextNode())!==null&&a.length<l;){if(o.nodeType===1){if(o.hasAttributes())for(const h of o.getAttributeNames())if(h.endsWith(jn)){const v=c[s++],p=o.getAttribute(h).split(St),d=/([.?@])?(.*)/.exec(v);a.push({type:1,index:i,name:d[2],strings:p,ctor:d[1]==="."?ti:d[1]==="?"?ei:d[1]==="@"?ri:nr}),o.removeAttribute(h)}else h.startsWith(St)&&(a.push({type:6,index:i}),o.removeAttribute(h));if(Yn.test(o.tagName)){const h=o.textContent.split(St),v=h.length-1;if(v>0){o.textContent=Xe?Xe.emptyScript:"";for(let p=0;p<v;p++)o.append(h[p],be()),Dt.nextNode(),a.push({type:2,index:++i});o.append(h[v],be())}}}else if(o.nodeType===8)if(o.data===Gn)a.push({type:2,index:i});else{let h=-1;for(;(h=o.data.indexOf(St,h+1))!==-1;)a.push({type:7,index:i}),h+=St.length-1}i++}}static createElement(t,r){const n=zt.createElement("template");return n.innerHTML=t,n}}function Jt(e,t,r=e,n){var s,l;if(t===Ut)return t;let o=n!==void 0?(s=r._$Co)==null?void 0:s[n]:r._$Cl;const i=me(t)?void 0:t._$litDirective$;return(o==null?void 0:o.constructor)!==i&&((l=o==null?void 0:o._$AO)==null||l.call(o,!1),i===void 0?o=void 0:(o=new i(e),o._$AT(e,r,n)),n!==void 0?(r._$Co??(r._$Co=[]))[n]=o:r._$Cl=o),o!==void 0&&(t=Jt(e,o._$AS(e,t.values),o,n)),t}class Qo{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:r},parts:n}=this._$AD,o=((t==null?void 0:t.creationScope)??zt).importNode(r,!0);Dt.currentNode=o;let i=Dt.nextNode(),s=0,l=0,a=n[0];for(;a!==void 0;){if(s===a.index){let u;a.type===2?u=new xe(i,i.nextSibling,this,t):a.type===1?u=new a.ctor(i,a.name,a.strings,this,t):a.type===6&&(u=new ni(i,this,t)),this._$AV.push(u),a=n[++l]}s!==(a==null?void 0:a.index)&&(i=Dt.nextNode(),s++)}return Dt.currentNode=zt,o}p(t){let r=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,r),r+=n.strings.length-2):n._$AI(t[r])),r++}}class xe{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,r,n,o){this.type=2,this._$AH=Z,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=n,this.options=o,this._$Cv=(o==null?void 0:o.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=Jt(this,t,r),me(t)?t===Z||t==null||t===""?(this._$AH!==Z&&this._$AR(),this._$AH=Z):t!==this._$AH&&t!==Ut&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Xo(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==Z&&me(this._$AH)?this._$AA.nextSibling.data=t:this.T(zt.createTextNode(t)),this._$AH=t}$(t){var i;const{values:r,_$litType$:n}=t,o=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=ye.createElement(Kn(n.h,n.h[0]),this.options)),n);if(((i=this._$AH)==null?void 0:i._$AD)===o)this._$AH.p(r);else{const s=new Qo(o,this),l=s.u(this.options);s.p(r),this.T(l),this._$AH=s}}_$AC(t){let r=bn.get(t.strings);return r===void 0&&bn.set(t.strings,r=new ye(t)),r}k(t){zr(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,o=0;for(const i of t)o===r.length?r.push(n=new xe(this.O(be()),this.O(be()),this,this.options)):n=r[o],n._$AI(i),o++;o<r.length&&(this._$AR(n&&n._$AB.nextSibling,o),r.length=o)}_$AR(t=this._$AA.nextSibling,r){var n;for((n=this._$AP)==null?void 0:n.call(this,!1,!0,r);t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var r;this._$AM===void 0&&(this._$Cv=t,(r=this._$AP)==null||r.call(this,t))}}class nr{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,r,n,o,i){this.type=1,this._$AH=Z,this._$AN=void 0,this.element=t,this.name=r,this._$AM=o,this.options=i,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=Z}_$AI(t,r=this,n,o){const i=this.strings;let s=!1;if(i===void 0)t=Jt(this,t,r,0),s=!me(t)||t!==this._$AH&&t!==Ut,s&&(this._$AH=t);else{const l=t;let a,u;for(t=i[0],a=0;a<i.length-1;a++)u=Jt(this,l[n+a],r,a),u===Ut&&(u=this._$AH[a]),s||(s=!me(u)||u!==this._$AH[a]),u===Z?t=Z:t!==Z&&(t+=(u??"")+i[a+1]),this._$AH[a]=u}s&&!o&&this.j(t)}j(t){t===Z?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class ti extends nr{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===Z?void 0:t}}class ei extends nr{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==Z)}}class ri extends nr{constructor(t,r,n,o,i){super(t,r,n,o,i),this.type=5}_$AI(t,r=this){if((t=Jt(this,t,r,0)??Z)===Ut)return;const n=this._$AH,o=t===Z&&n!==Z||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,i=t!==Z&&(n===Z||o);o&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var r;typeof this._$AH=="function"?this._$AH.call(((r=this.options)==null?void 0:r.host)??this.element,t):this._$AH.handleEvent(t)}}class ni{constructor(t,r,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){Jt(this,t)}}const mr=fe.litHtmlPolyfillSupport;mr==null||mr(ye,xe),(fe.litHtmlVersions??(fe.litHtmlVersions=[])).push("3.3.1");const oi=(e,t,r)=>{const n=(r==null?void 0:r.renderBefore)??t;let o=n._$litPart$;if(o===void 0){const i=(r==null?void 0:r.renderBefore)??null;n._$litPart$=o=new xe(t.insertBefore(be(),i),i,void 0,r??{})}return o._$AI(e),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Mt=globalThis;let ve=class extends Wt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var r;const t=super.createRenderRoot();return(r=this.renderOptions).renderBefore??(r.renderBefore=t.firstChild),t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=oi(r,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return Ut}};var qn;ve._$litElement$=!0,ve.finalized=!0,(qn=Mt.litElementHydrateSupport)==null||qn.call(Mt,{LitElement:ve});const yr=Mt.litElementPolyfillSupport;yr==null||yr({LitElement:ve});(Mt.litElementVersions??(Mt.litElementVersions=[])).push("4.2.1");var ii=ee`
  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--sl-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
    flex: none;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .spinner__track,
  .spinner__indicator {
    fill: none;
    stroke-width: var(--track-width);
    r: calc(0.5em - var(--track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;
  }

  .spinner__track {
    stroke: var(--track-color);
    transform-origin: 0% 0%;
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--speed) linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      stroke-dasharray: 0.05em, 3em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.05em, 3em;
    }
  }
`;const Lr=new Set,Yt=new Map;let Nt,Ur="ltr",Br="en";const Xn=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";if(Xn){const e=new MutationObserver(Jn);Ur=document.documentElement.dir||"ltr",Br=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function Zn(...e){e.map(t=>{const r=t.$code.toLowerCase();Yt.has(r)?Yt.set(r,Object.assign(Object.assign({},Yt.get(r)),t)):Yt.set(r,t),Nt||(Nt=t)}),Jn()}function Jn(){Xn&&(Ur=document.documentElement.dir||"ltr",Br=document.documentElement.lang||navigator.language),[...Lr.keys()].map(e=>{typeof e.requestUpdate=="function"&&e.requestUpdate()})}let si=class{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){Lr.add(this.host)}hostDisconnected(){Lr.delete(this.host)}dir(){return`${this.host.dir||Ur}`.toLowerCase()}lang(){return`${this.host.lang||Br}`.toLowerCase()}getTranslationData(t){var r,n;const o=new Intl.Locale(t.replace(/_/g,"-")),i=o==null?void 0:o.language.toLowerCase(),s=(n=(r=o==null?void 0:o.region)===null||r===void 0?void 0:r.toLowerCase())!==null&&n!==void 0?n:"",l=Yt.get(`${i}-${s}`),a=Yt.get(i);return{locale:o,language:i,region:s,primary:l,secondary:a}}exists(t,r){var n;const{primary:o,secondary:i}=this.getTranslationData((n=r.lang)!==null&&n!==void 0?n:this.lang());return r=Object.assign({includeFallback:!1},r),!!(o&&o[t]||i&&i[t]||r.includeFallback&&Nt&&Nt[t])}term(t,...r){const{primary:n,secondary:o}=this.getTranslationData(this.lang());let i;if(n&&n[t])i=n[t];else if(o&&o[t])i=o[t];else if(Nt&&Nt[t])i=Nt[t];else return console.error(`No translation found for: ${String(t)}`),String(t);return typeof i=="function"?i(...r):i}date(t,r){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),r).format(t)}number(t,r){return t=Number(t),isNaN(t)?"":new Intl.NumberFormat(this.lang(),r).format(t)}relativeTime(t,r,n){return new Intl.RelativeTimeFormat(this.lang(),n).format(t,r)}};var Qn={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>e===0?"No options selected":e===1?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"};Zn(Qn);var ai=Qn,Fr=class extends si{};Zn(ai);var Te=ee`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`,to=Object.defineProperty,li=Object.defineProperties,ui=Object.getOwnPropertyDescriptor,ci=Object.getOwnPropertyDescriptors,mn=Object.getOwnPropertySymbols,di=Object.prototype.hasOwnProperty,hi=Object.prototype.propertyIsEnumerable,eo=e=>{throw TypeError(e)},yn=(e,t,r)=>t in e?to(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Ht=(e,t)=>{for(var r in t||(t={}))di.call(t,r)&&yn(e,r,t[r]);if(mn)for(var r of mn(t))hi.call(t,r)&&yn(e,r,t[r]);return e},or=(e,t)=>li(e,ci(t)),x=(e,t,r,n)=>{for(var o=n>1?void 0:n?ui(t,r):t,i=e.length-1,s;i>=0;i--)(s=e[i])&&(o=(n?s(t,r,o):s(o))||o);return n&&o&&to(t,r,o),o},ro=(e,t,r)=>t.has(e)||eo("Cannot "+r),fi=(e,t,r)=>(ro(e,t,"read from private field"),t.get(e)),vi=(e,t,r)=>t.has(e)?eo("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),pi=(e,t,r,n)=>(ro(e,t,"write to private field"),t.set(e,r),r);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const gi={attribute:!0,type:String,converter:Ke,reflect:!1,hasChanged:Vr},bi=(e=gi,t,r)=>{const{kind:n,metadata:o}=r;let i=globalThis.litPropertyMetadata.get(o);if(i===void 0&&globalThis.litPropertyMetadata.set(o,i=new Map),n==="setter"&&((e=Object.create(e)).wrapped=!0),i.set(r.name,e),n==="accessor"){const{name:s}=r;return{set(l){const a=t.get.call(this);t.set.call(this,l),this.requestUpdate(s,a,e)},init(l){return l!==void 0&&this.C(s,void 0,e,l),l}}}if(n==="setter"){const{name:s}=r;return function(l){const a=this[s];t.call(this,l),this.requestUpdate(s,a,e)}}throw Error("Unsupported decorator location: "+n)};function V(e){return(t,r)=>typeof r=="object"?bi(e,t,r):((n,o,i)=>{const s=o.hasOwnProperty(i);return o.constructor.createProperty(i,n),s?Object.getOwnPropertyDescriptor(o,i):void 0})(e,t,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ir(e){return V({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const mi=(e,t,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,r),r);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function re(e,t){return(r,n,o)=>{const i=s=>{var l;return((l=s.renderRoot)==null?void 0:l.querySelector(e))??null};return mi(r,n,{get(){return i(this)}})}}var He,wt=class extends ve{constructor(){super(),vi(this,He,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([e,t])=>{this.constructor.define(e,t)})}emit(e,t){const r=new CustomEvent(e,Ht({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(r),r}static define(e,t=this,r={}){const n=customElements.get(e);if(!n){try{customElements.define(e,t,r)}catch{customElements.define(e,class extends t{},r)}return}let o=" (unknown version)",i=o;"version"in t&&t.version&&(o=" v"+t.version),"version"in n&&n.version&&(i=" v"+n.version),!(o&&i&&o===i)&&console.warn(`Attempted to register <${e}>${o}, but <${e}>${i} has already been registered.`)}attributeChangedCallback(e,t,r){fi(this,He)||(this.constructor.elementProperties.forEach((n,o)=>{n.reflect&&this[o]!=null&&this.initialReflectedProperties.set(o,this[o])}),pi(this,He,!0)),super.attributeChangedCallback(e,t,r)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((t,r)=>{e.has(r)&&this[r]==null&&(this[r]=t)})}};He=new WeakMap;wt.version="2.20.1";wt.dependencies={};x([V()],wt.prototype,"dir",2);x([V()],wt.prototype,"lang",2);var no=class extends wt{constructor(){super(...arguments),this.localize=new Fr(this)}render(){return rr`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};no.styles=[Te,ii];var le=new WeakMap,ue=new WeakMap,ce=new WeakMap,_r=new WeakSet,ze=new WeakMap,yi=class{constructor(e,t){this.handleFormData=r=>{const n=this.options.disabled(this.host),o=this.options.name(this.host),i=this.options.value(this.host),s=this.host.tagName.toLowerCase()==="sl-button";this.host.isConnected&&!n&&!s&&typeof o=="string"&&o.length>0&&typeof i<"u"&&(Array.isArray(i)?i.forEach(l=>{r.formData.append(o,l.toString())}):r.formData.append(o,i.toString()))},this.handleFormSubmit=r=>{var n;const o=this.options.disabled(this.host),i=this.options.reportValidity;this.form&&!this.form.noValidate&&((n=le.get(this.form))==null||n.forEach(s=>{this.setUserInteracted(s,!0)})),this.form&&!this.form.noValidate&&!o&&!i(this.host)&&(r.preventDefault(),r.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),ze.set(this.host,[])},this.handleInteraction=r=>{const n=ze.get(this.host);n.includes(r.type)||n.push(r.type),n.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const r=this.form.querySelectorAll("*");for(const n of r)if(typeof n.checkValidity=="function"&&!n.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const r=this.form.querySelectorAll("*");for(const n of r)if(typeof n.reportValidity=="function"&&!n.reportValidity())return!1}return!0},(this.host=e).addController(this),this.options=Ht({form:r=>{const n=r.form;if(n){const i=r.getRootNode().querySelector(`#${n}`);if(i)return i}return r.closest("form")},name:r=>r.name,value:r=>r.value,defaultValue:r=>r.defaultValue,disabled:r=>{var n;return(n=r.disabled)!=null?n:!1},reportValidity:r=>typeof r.reportValidity=="function"?r.reportValidity():!0,checkValidity:r=>typeof r.checkValidity=="function"?r.checkValidity():!0,setValue:(r,n)=>r.value=n,assumeInteractionOn:["sl-input"]},t)}hostConnected(){const e=this.options.form(this.host);e&&this.attachForm(e),ze.set(this.host,[]),this.options.assumeInteractionOn.forEach(t=>{this.host.addEventListener(t,this.handleInteraction)})}hostDisconnected(){this.detachForm(),ze.delete(this.host),this.options.assumeInteractionOn.forEach(e=>{this.host.removeEventListener(e,this.handleInteraction)})}hostUpdated(){const e=this.options.form(this.host);e||this.detachForm(),e&&this.form!==e&&(this.detachForm(),this.attachForm(e)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(e){e?(this.form=e,le.has(this.form)?le.get(this.form).add(this.host):le.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),ue.has(this.form)||(ue.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),ce.has(this.form)||(ce.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const e=le.get(this.form);e&&(e.delete(this.host),e.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),ue.has(this.form)&&(this.form.reportValidity=ue.get(this.form),ue.delete(this.form)),ce.has(this.form)&&(this.form.checkValidity=ce.get(this.form),ce.delete(this.form)),this.form=void 0))}setUserInteracted(e,t){t?_r.add(e):_r.delete(e),e.requestUpdate()}doAction(e,t){if(this.form){const r=document.createElement("button");r.type=e,r.style.position="absolute",r.style.width="0",r.style.height="0",r.style.clipPath="inset(50%)",r.style.overflow="hidden",r.style.whiteSpace="nowrap",t&&(r.name=t.name,r.value=t.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(n=>{t.hasAttribute(n)&&r.setAttribute(n,t.getAttribute(n))})),this.form.append(r),r.click(),r.remove()}}getForm(){var e;return(e=this.form)!=null?e:null}reset(e){this.doAction("reset",e)}submit(e){this.doAction("submit",e)}setValidity(e){const t=this.host,r=!!_r.has(t),n=!!t.required;t.toggleAttribute("data-required",n),t.toggleAttribute("data-optional",!n),t.toggleAttribute("data-invalid",!e),t.toggleAttribute("data-valid",e),t.toggleAttribute("data-user-invalid",!e&&r),t.toggleAttribute("data-user-valid",e&&r)}updateValidity(){const e=this.host;this.setValidity(e.validity.valid)}emitInvalidEvent(e){const t=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});e||t.preventDefault(),this.host.dispatchEvent(t)||e==null||e.preventDefault()}},Hr=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1});Object.freeze(or(Ht({},Hr),{valid:!1,valueMissing:!0}));Object.freeze(or(Ht({},Hr),{valid:!1,customError:!0}));var _i=ee`
  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--sl-input-border-width);
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition:
      var(--sl-transition-x-fast) background-color,
      var(--sl-transition-x-fast) color,
      var(--sl-transition-x-fast) border,
      var(--sl-transition-x-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up from children */
  .button--disabled * {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .button__label {
    display: inline-block;
  }

  .button__label::slotted(sl-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Default */
  .button--standard.button--default {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-input-border-color);
    color: var(--sl-color-neutral-700);
  }

  .button--standard.button--default:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-300);
    color: var(--sl-color-primary-700);
  }

  .button--standard.button--default:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-100);
    border-color: var(--sl-color-primary-400);
    color: var(--sl-color-primary-700);
  }

  /* Primary */
  .button--standard.button--primary {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--standard.button--success {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:hover:not(.button--disabled) {
    background-color: var(--sl-color-success-500);
    border-color: var(--sl-color-success-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:active:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--standard.button--neutral {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:hover:not(.button--disabled) {
    background-color: var(--sl-color-neutral-500);
    border-color: var(--sl-color-neutral-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:active:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--standard.button--warning {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }
  .button--standard.button--warning:hover:not(.button--disabled) {
    background-color: var(--sl-color-warning-500);
    border-color: var(--sl-color-warning-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--warning:active:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--standard.button--danger {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:hover:not(.button--disabled) {
    background-color: var(--sl-color-danger-500);
    border-color: var(--sl-color-danger-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:active:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Outline buttons
   */

  .button--outline {
    background: none;
    border: solid 1px;
  }

  /* Default */
  .button--outline.button--default {
    border-color: var(--sl-input-border-color);
    color: var(--sl-color-neutral-700);
  }

  .button--outline.button--default:hover:not(.button--disabled),
  .button--outline.button--default.button--checked:not(.button--disabled) {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--default:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-primary-600);
  }

  .button--outline.button--primary:hover:not(.button--disabled),
  .button--outline.button--primary.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--primary:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--outline.button--success {
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-success-600);
  }

  .button--outline.button--success:hover:not(.button--disabled),
  .button--outline.button--success.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--success:active:not(.button--disabled) {
    border-color: var(--sl-color-success-700);
    background-color: var(--sl-color-success-700);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--outline.button--neutral {
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-600);
  }

  .button--outline.button--neutral:hover:not(.button--disabled),
  .button--outline.button--neutral.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--neutral:active:not(.button--disabled) {
    border-color: var(--sl-color-neutral-700);
    background-color: var(--sl-color-neutral-700);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--outline.button--warning {
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-warning-600);
  }

  .button--outline.button--warning:hover:not(.button--disabled),
  .button--outline.button--warning.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--warning:active:not(.button--disabled) {
    border-color: var(--sl-color-warning-700);
    background-color: var(--sl-color-warning-700);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--outline.button--danger {
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-danger-600);
  }

  .button--outline.button--danger:hover:not(.button--disabled),
  .button--outline.button--danger.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--danger:active:not(.button--disabled) {
    border-color: var(--sl-color-danger-700);
    background-color: var(--sl-color-danger-700);
    color: var(--sl-color-neutral-0);
  }

  @media (forced-colors: active) {
    .button.button--outline.button--checked:not(.button--disabled) {
      outline: solid 2px transparent;
    }
  }

  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-600);
  }

  .button--text:hover:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:focus-visible:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:active:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-700);
  }

  /*
   * Size modifiers
   */

  .button--small {
    height: auto;
    min-height: var(--sl-input-height-small);
    font-size: var(--sl-button-font-size-small);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
  }

  .button--medium {
    height: auto;
    min-height: var(--sl-input-height-medium);
    font-size: var(--sl-button-font-size-medium);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
  }

  .button--large {
    height: auto;
    min-height: var(--sl-input-height-large);
    font-size: var(--sl-button-font-size-large);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
  }

  /*
   * Pill modifier
   */

  .button--pill.button--small {
    border-radius: var(--sl-input-height-small);
  }

  .button--pill.button--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .button--pill.button--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Circle modifier
   */

  .button--circle {
    padding-left: 0;
    padding-right: 0;
  }

  .button--circle.button--small {
    width: var(--sl-input-height-small);
    border-radius: 50%;
  }

  .button--circle.button--medium {
    width: var(--sl-input-height-medium);
    border-radius: 50%;
  }

  .button--circle.button--large {
    width: var(--sl-input-height-large);
    border-radius: 50%;
  }

  .button--circle .button__prefix,
  .button--circle .button__suffix,
  .button--circle .button__caret {
    display: none;
  }

  /*
   * Caret modifier
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    height: auto;
  }

  /*
   * Loading modifier
   */

  .button--loading {
    position: relative;
    cursor: wait;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: hidden;
  }

  .button--loading sl-spinner {
    --indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(sl-badge) {
    position: absolute;
    top: 0;
    right: 0;
    translate: 50% -50%;
    pointer-events: none;
  }

  .button--rtl ::slotted(sl-badge) {
    right: auto;
    left: 0;
    translate: -50% -50%;
  }

  /*
   * Button spacing
   */

  .button--has-label.button--small .button__label {
    padding: 0 var(--sl-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding: 0 var(--sl-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding: 0 var(--sl-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host([data-sl-button-group__button--first]:not([data-sl-button-group__button--last])) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host([data-sl-button-group__button--inner]) .button {
    border-radius: 0;
  }

  :host([data-sl-button-group__button--last]:not([data-sl-button-group__button--first])) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* All except the first */
  :host([data-sl-button-group__button]:not([data-sl-button-group__button--first])) {
    margin-inline-start: calc(-1 * var(--sl-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(
      [data-sl-button-group__button]:not(
          [data-sl-button-group__button--first],
          [data-sl-button-group__button--radio],
          [variant='default']
        ):not(:hover)
    )
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    border-left: solid 1px rgb(128 128 128 / 33%);
    mix-blend-mode: multiply;
  }

  /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
  :host([data-sl-button-group__button--hover]) {
    z-index: 1;
  }

  /* Focus and checked are always on top */
  :host([data-sl-button-group__button--focus]),
  :host([data-sl-button-group__button][checked]) {
    z-index: 2;
  }
`,Ei=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=r=>{const n=r.target;(this.slotNames.includes("[default]")&&!n.name||n.name&&this.slotNames.includes(n.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return[...this.host.childNodes].some(e=>{if(e.nodeType===e.TEXT_NODE&&e.textContent.trim()!=="")return!0;if(e.nodeType===e.ELEMENT_NODE){const t=e;if(t.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!t.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(e){return this.host.querySelector(`:scope > [slot="${e}"]`)!==null}test(e){return e==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}},xr="";function _n(e){xr=e}function wi(e=""){if(!xr){const t=[...document.getElementsByTagName("script")],r=t.find(n=>n.hasAttribute("data-shoelace"));if(r)_n(r.getAttribute("data-shoelace"));else{const n=t.find(i=>/shoelace(\.min)?\.js($|\?)/.test(i.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(i.src));let o="";n&&(o=n.getAttribute("src")),_n(o.split("/").slice(0,-1).join("/"))}}return xr.replace(/\/$/,"")+(e?`/${e.replace(/^\//,"")}`:"")}var Ai={name:"default",resolver:e=>wi(`assets/icons/${e}.svg`)},Si=Ai,En={caret:`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `,check:`
    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor">
          <g transform="translate(3.428571, 3.428571)">
            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"chevron-down":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,"chevron-left":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
    </svg>
  `,"chevron-right":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,copy:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z"/>
    </svg>
  `,eye:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
    </svg>
  `,"eye-slash":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
    </svg>
  `,eyedropper:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">
      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>
    </svg>
  `,"grip-vertical":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
    </svg>
  `,indeterminate:`
    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor" stroke-width="2">
          <g transform="translate(2.285714, 6.857143)">
            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"person-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>
  `,"play-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
    </svg>
  `,"pause-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>
    </svg>
  `,radio:`
    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g fill="currentColor">
          <circle cx="8" cy="8" r="3.42857143"></circle>
        </g>
      </g>
    </svg>
  `,"star-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  `,"x-lg":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
    </svg>
  `,"x-circle-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
    </svg>
  `},$i={name:"system",resolver:e=>e in En?`data:image/svg+xml,${encodeURIComponent(En[e])}`:""},Ci=$i,Li=[Si,Ci],Tr=[];function xi(e){Tr.push(e)}function Ti(e){Tr=Tr.filter(t=>t!==e)}function wn(e){return Li.find(t=>t.name===e)}var Oi=ee`
  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`;function sr(e,t){const r=Ht({waitUntilFirstUpdate:!1},t);return(n,o)=>{const{update:i}=n,s=Array.isArray(e)?e:[e];n.update=function(l){s.forEach(a=>{const u=a;if(l.has(u)){const c=l.get(u),h=this[u];c!==h&&(!r.waitUntilFirstUpdate||this.hasUpdated)&&this[o](c,h)}}),i.call(this,l)}}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ki=(e,t)=>(e==null?void 0:e._$litType$)!==void 0;var de=Symbol(),Ue=Symbol(),Er,wr=new Map,ut=class extends wt{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(e,t){var r;let n;if(t!=null&&t.spriteSheet)return this.svg=rr`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`,this.svg;try{if(n=await fetch(e,{mode:"cors"}),!n.ok)return n.status===410?de:Ue}catch{return Ue}try{const o=document.createElement("div");o.innerHTML=await n.text();const i=o.firstElementChild;if(((r=i==null?void 0:i.tagName)==null?void 0:r.toLowerCase())!=="svg")return de;Er||(Er=new DOMParser);const l=Er.parseFromString(i.outerHTML,"text/html").body.querySelector("svg");return l?(l.part.add("svg"),document.adoptNode(l)):de}catch{return de}}connectedCallback(){super.connectedCallback(),xi(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),Ti(this)}getIconSource(){const e=wn(this.library);return this.name&&e?{url:e.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var e;const{url:t,fromLibrary:r}=this.getIconSource(),n=r?wn(this.library):void 0;if(!t){this.svg=null;return}let o=wr.get(t);if(o||(o=this.resolveIcon(t,n),wr.set(t,o)),!this.initialRender)return;const i=await o;if(i===Ue&&wr.delete(t),t===this.getIconSource().url){if(ki(i)){if(this.svg=i,n){await this.updateComplete;const s=this.shadowRoot.querySelector("[part='svg']");typeof n.mutator=="function"&&s&&n.mutator(s)}return}switch(i){case Ue:case de:this.svg=null,this.emit("sl-error");break;default:this.svg=i.cloneNode(!0),(e=n==null?void 0:n.mutator)==null||e.call(n,this.svg),this.emit("sl-load")}}}render(){return this.svg}};ut.styles=[Te,Oi];x([ir()],ut.prototype,"svg",2);x([V({reflect:!0})],ut.prototype,"name",2);x([V()],ut.prototype,"src",2);x([V()],ut.prototype,"label",2);x([V({reflect:!0})],ut.prototype,"library",2);x([sr("label")],ut.prototype,"handleLabelChange",1);x([sr(["name","src","library"])],ut.prototype,"setIcon",1);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Pi={ATTRIBUTE:1},Ii=e=>(...t)=>({_$litDirective$:e,values:t});let Ri=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,n){this._$Ct=t,this._$AM=r,this._$Ci=n}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const qr=Ii(class extends Ri{constructor(e){var t;if(super(e),e.type!==Pi.ATTRIBUTE||e.name!=="class"||((t=e.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var n,o;if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(const i in t)t[i]&&!((n=this.nt)!=null&&n.has(i))&&this.st.add(i);return this.render(t)}const r=e.element.classList;for(const i of this.st)i in t||(r.remove(i),this.st.delete(i));for(const i in t){const s=!!t[i];s===this.st.has(i)||(o=this.nt)!=null&&o.has(i)||(s?(r.add(i),this.st.add(i)):(r.remove(i),this.st.delete(i)))}return Ut}});/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const oo=Symbol.for(""),Ni=e=>{if((e==null?void 0:e.r)===oo)return e==null?void 0:e._$litStatic$},Ze=(e,...t)=>({_$litStatic$:t.reduce((r,n,o)=>r+(i=>{if(i._$litStatic$!==void 0)return i._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${i}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(n)+e[o+1],e[0]),r:oo}),An=new Map,Di=e=>(t,...r)=>{const n=r.length;let o,i;const s=[],l=[];let a,u=0,c=!1;for(;u<n;){for(a=t[u];u<n&&(i=r[u],(o=Ni(i))!==void 0);)a+=o+t[++u],c=!0;u!==n&&l.push(i),s.push(a),u++}if(u===n&&s.push(t[n]),c){const h=s.join("$$lit$$");(t=An.get(h))===void 0&&(s.raw=s,An.set(h,t=s)),r=l}return e(t,...r)},qe=Di(rr);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const X=e=>e??Z;var F=class extends wt{constructor(){super(...arguments),this.formControlController=new yi(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new Ei(this,"[default]","prefix","suffix"),this.localize=new Fr(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:Hr}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(e){this.isButton()&&(this.button.setCustomValidity(e),this.formControlController.updateValidity())}render(){const e=this.isLink(),t=e?Ze`a`:Ze`button`;return qe`
      <${t}
        part="base"
        class=${qr({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${X(e?void 0:this.disabled)}
        type=${X(e?void 0:this.type)}
        title=${this.title}
        name=${X(e?void 0:this.name)}
        value=${X(e?void 0:this.value)}
        href=${X(e&&!this.disabled?this.href:void 0)}
        target=${X(e?this.target:void 0)}
        download=${X(e?this.download:void 0)}
        rel=${X(e?this.rel:void 0)}
        role=${X(e?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        <slot part="label" class="button__label"></slot>
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${this.caret?qe` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?qe`<sl-spinner part="spinner"></sl-spinner>`:""}
      </${t}>
    `}};F.styles=[Te,_i];F.dependencies={"sl-icon":ut,"sl-spinner":no};x([re(".button")],F.prototype,"button",2);x([ir()],F.prototype,"hasFocus",2);x([ir()],F.prototype,"invalid",2);x([V()],F.prototype,"title",2);x([V({reflect:!0})],F.prototype,"variant",2);x([V({reflect:!0})],F.prototype,"size",2);x([V({type:Boolean,reflect:!0})],F.prototype,"caret",2);x([V({type:Boolean,reflect:!0})],F.prototype,"disabled",2);x([V({type:Boolean,reflect:!0})],F.prototype,"loading",2);x([V({type:Boolean,reflect:!0})],F.prototype,"outline",2);x([V({type:Boolean,reflect:!0})],F.prototype,"pill",2);x([V({type:Boolean,reflect:!0})],F.prototype,"circle",2);x([V()],F.prototype,"type",2);x([V()],F.prototype,"name",2);x([V()],F.prototype,"value",2);x([V()],F.prototype,"href",2);x([V()],F.prototype,"target",2);x([V()],F.prototype,"rel",2);x([V()],F.prototype,"download",2);x([V()],F.prototype,"form",2);x([V({attribute:"formaction"})],F.prototype,"formAction",2);x([V({attribute:"formenctype"})],F.prototype,"formEnctype",2);x([V({attribute:"formmethod"})],F.prototype,"formMethod",2);x([V({attribute:"formnovalidate",type:Boolean})],F.prototype,"formNoValidate",2);x([V({attribute:"formtarget"})],F.prototype,"formTarget",2);x([sr("disabled",{waitUntilFirstUpdate:!0})],F.prototype,"handleDisabledChange",1);F.define("sl-button");var Mi=ee`
  :host {
    display: block;
  }

  .details {
    border: solid 1px var(--sl-color-neutral-200);
    border-radius: var(--sl-border-radius-medium);
    background-color: var(--sl-color-neutral-0);
    overflow-anchor: none;
  }

  .details--disabled {
    opacity: 0.5;
  }

  .details__header {
    display: flex;
    align-items: center;
    border-radius: inherit;
    padding: var(--sl-spacing-medium);
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
  }

  .details__header::-webkit-details-marker {
    display: none;
  }

  .details__header:focus {
    outline: none;
  }

  .details__header:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: calc(1px + var(--sl-focus-ring-offset));
  }

  .details--disabled .details__header {
    cursor: not-allowed;
  }

  .details--disabled .details__header:focus-visible {
    outline: none;
    box-shadow: none;
  }

  .details__summary {
    flex: 1 1 auto;
    display: flex;
    align-items: center;
  }

  .details__summary-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--sl-transition-medium) rotate ease;
  }

  .details--open .details__summary-icon {
    rotate: 90deg;
  }

  .details--open.details--rtl .details__summary-icon {
    rotate: -90deg;
  }

  .details--open slot[name='expand-icon'],
  .details:not(.details--open) slot[name='collapse-icon'] {
    display: none;
  }

  .details__body {
    overflow: hidden;
  }

  .details__content {
    display: block;
    padding: var(--sl-spacing-medium);
  }
`,io=new Map,Vi=new WeakMap;function zi(e){return e??{keyframes:[],options:{duration:0}}}function Sn(e,t){return t.toLowerCase()==="rtl"?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function so(e,t){io.set(e,zi(t))}function $n(e,t,r){const n=Vi.get(e);if(n!=null&&n[t])return Sn(n[t],r.dir);const o=io.get(t);return o?Sn(o,r.dir):{keyframes:[],options:{duration:0}}}function Cn(e,t){return new Promise(r=>{function n(o){o.target===e&&(e.removeEventListener(t,n),r())}e.addEventListener(t,n)})}function Ln(e,t,r){return new Promise(n=>{if((r==null?void 0:r.duration)===1/0)throw new Error("Promise-based animations must be finite.");const o=e.animate(t,or(Ht({},r),{duration:Ui()?0:r.duration}));o.addEventListener("cancel",n,{once:!0}),o.addEventListener("finish",n,{once:!0})})}function Ui(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function xn(e){return Promise.all(e.getAnimations().map(t=>new Promise(r=>{t.cancel(),requestAnimationFrame(r)})))}function Tn(e,t){return e.map(r=>or(Ht({},r),{height:r.height==="auto"?`${t}px`:r.height}))}var ht=class extends wt{constructor(){super(...arguments),this.localize=new Fr(this),this.open=!1,this.disabled=!1}firstUpdated(){this.body.style.height=this.open?"auto":"0",this.open&&(this.details.open=!0),this.detailsObserver=new MutationObserver(e=>{for(const t of e)t.type==="attributes"&&t.attributeName==="open"&&(this.details.open?this.show():this.hide())}),this.detailsObserver.observe(this.details,{attributes:!0})}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.detailsObserver)==null||e.disconnect()}handleSummaryClick(e){e.preventDefault(),this.disabled||(this.open?this.hide():this.show(),this.header.focus())}handleSummaryKeyDown(e){(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this.open?this.hide():this.show()),(e.key==="ArrowUp"||e.key==="ArrowLeft")&&(e.preventDefault(),this.hide()),(e.key==="ArrowDown"||e.key==="ArrowRight")&&(e.preventDefault(),this.show())}async handleOpenChange(){if(this.open){if(this.details.open=!0,this.emit("sl-show",{cancelable:!0}).defaultPrevented){this.open=!1,this.details.open=!1;return}await xn(this.body);const{keyframes:t,options:r}=$n(this,"details.show",{dir:this.localize.dir()});await Ln(this.body,Tn(t,this.body.scrollHeight),r),this.body.style.height="auto",this.emit("sl-after-show")}else{if(this.emit("sl-hide",{cancelable:!0}).defaultPrevented){this.details.open=!0,this.open=!0;return}await xn(this.body);const{keyframes:t,options:r}=$n(this,"details.hide",{dir:this.localize.dir()});await Ln(this.body,Tn(t,this.body.scrollHeight),r),this.body.style.height="auto",this.details.open=!1,this.emit("sl-after-hide")}}async show(){if(!(this.open||this.disabled))return this.open=!0,Cn(this,"sl-after-show")}async hide(){if(!(!this.open||this.disabled))return this.open=!1,Cn(this,"sl-after-hide")}render(){const e=this.localize.dir()==="rtl";return rr`
      <details
        part="base"
        class=${qr({details:!0,"details--open":this.open,"details--disabled":this.disabled,"details--rtl":e})}
      >
        <summary
          part="header"
          id="header"
          class="details__header"
          role="button"
          aria-expanded=${this.open?"true":"false"}
          aria-controls="content"
          aria-disabled=${this.disabled?"true":"false"}
          tabindex=${this.disabled?"-1":"0"}
          @click=${this.handleSummaryClick}
          @keydown=${this.handleSummaryKeyDown}
        >
          <slot name="summary" part="summary" class="details__summary">${this.summary}</slot>

          <span part="summary-icon" class="details__summary-icon">
            <slot name="expand-icon">
              <sl-icon library="system" name=${e?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
            <slot name="collapse-icon">
              <sl-icon library="system" name=${e?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
          </span>
        </summary>

        <div class="details__body" role="region" aria-labelledby="header">
          <slot part="content" id="content" class="details__content"></slot>
        </div>
      </details>
    `}};ht.styles=[Te,Mi];ht.dependencies={"sl-icon":ut};x([re(".details")],ht.prototype,"details",2);x([re(".details__header")],ht.prototype,"header",2);x([re(".details__body")],ht.prototype,"body",2);x([re(".details__expand-icon-slot")],ht.prototype,"expandIconSlot",2);x([V({type:Boolean,reflect:!0})],ht.prototype,"open",2);x([V()],ht.prototype,"summary",2);x([V({type:Boolean,reflect:!0})],ht.prototype,"disabled",2);x([sr("open",{waitUntilFirstUpdate:!0})],ht.prototype,"handleOpenChange",1);so("details.show",{keyframes:[{height:"0",opacity:"0"},{height:"auto",opacity:"1"}],options:{duration:250,easing:"linear"}});so("details.hide",{keyframes:[{height:"auto",opacity:"1"},{height:"0",opacity:"0"}],options:{duration:250,easing:"linear"}});ht.define("sl-details");ut.define("sl-icon");var Bi=ee`
  :host {
    display: inline-block;
    color: var(--sl-color-neutral-600);
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus-visible:not(.icon-button--disabled) {
    color: var(--sl-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--sl-color-primary-700);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .icon-button__icon {
    pointer-events: none;
  }
`,it=class extends wt{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){const e=!!this.href,t=e?Ze`a`:Ze`button`;return qe`
      <${t}
        part="base"
        class=${qr({"icon-button":!0,"icon-button--disabled":!e&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${X(e?void 0:this.disabled)}
        type=${X(e?void 0:"button")}
        href=${X(e?this.href:void 0)}
        target=${X(e?this.target:void 0)}
        download=${X(e?this.download:void 0)}
        rel=${X(e&&this.target?"noreferrer noopener":void 0)}
        role=${X(e?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${X(this.name)}
          library=${X(this.library)}
          src=${X(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${t}>
    `}};it.styles=[Te,Bi];it.dependencies={"sl-icon":ut};x([re(".icon-button")],it.prototype,"button",2);x([ir()],it.prototype,"hasFocus",2);x([V()],it.prototype,"name",2);x([V()],it.prototype,"library",2);x([V()],it.prototype,"src",2);x([V()],it.prototype,"href",2);x([V()],it.prototype,"target",2);x([V()],it.prototype,"download",2);x([V()],it.prototype,"label",2);x([V({type:Boolean,reflect:!0})],it.prototype,"disabled",2);it.define("sl-icon-button");function Fi(){const e=document.getElementById("navbar"),t=document.querySelector(".top-nav");if(!e||!t)return;const r=()=>{const o=t.getBoundingClientRect().height,i=e.getBoundingClientRect().height;e.dataset.topNavH=o,e.dataset.navbarH=i,e.classList.contains("is-visible")?e.style.top=`${o}px`:e.style.top=`-${i}px`},n=()=>{const o=window.scrollY||document.documentElement.scrollTop,i=parseFloat(e.dataset.topNavH)||0,s=parseFloat(e.dataset.navbarH)||0;o>140?(e.classList.add("is-visible"),e.style.top=`${i}px`):(e.classList.remove("is-visible"),e.style.top=`-${s}px`)};r(),n(),window.addEventListener("resize",r),"ResizeObserver"in window&&(new ResizeObserver(r).observe(t),new ResizeObserver(r).observe(e)),window.addEventListener("scroll",n,{passive:!0})}function Hi(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function qi(e,t,r){return t&&Hi(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}/*!
 * Splide.js
 * Version  : 4.1.4
 * License  : MIT
 * Copyright: 2022 Naotoshi Fujita
 */var On="(prefers-reduced-motion: reduce)",Kt=1,Wi=2,Qt=3,ne=4,Oe=5,We=6,Je=7,ji={CREATED:Kt,MOUNTED:Wi,IDLE:Qt,MOVING:ne,SCROLLING:Oe,DRAGGING:We,DESTROYED:Je};function Et(e){e.length=0}function Ot(e,t,r){return Array.prototype.slice.call(e,t,r)}function q(e){return e.bind.apply(e,[null].concat(Ot(arguments,1)))}var ao=setTimeout,Or=function(){};function kn(e){return requestAnimationFrame(e)}function ar(e,t){return typeof t===e}function _e(e){return!jr(e)&&ar("object",e)}var Wr=Array.isArray,lo=q(ar,"function"),Lt=q(ar,"string"),ke=q(ar,"undefined");function jr(e){return e===null}function uo(e){try{return e instanceof(e.ownerDocument.defaultView||window).HTMLElement}catch{return!1}}function Pe(e){return Wr(e)?e:[e]}function lt(e,t){Pe(e).forEach(t)}function Gr(e,t){return e.indexOf(t)>-1}function je(e,t){return e.push.apply(e,Pe(t)),e}function mt(e,t,r){e&&lt(t,function(n){n&&e.classList[r?"add":"remove"](n)})}function vt(e,t){mt(e,Lt(t)?t.split(" "):t,!0)}function Ie(e,t){lt(t,e.appendChild.bind(e))}function Yr(e,t){lt(e,function(r){var n=(t||r).parentNode;n&&n.insertBefore(r,t)})}function Ee(e,t){return uo(e)&&(e.msMatchesSelector||e.matches).call(e,t)}function co(e,t){var r=e?Ot(e.children):[];return t?r.filter(function(n){return Ee(n,t)}):r}function Re(e,t){return t?co(e,t)[0]:e.firstElementChild}var we=Object.keys;function Vt(e,t,r){return e&&(r?we(e).reverse():we(e)).forEach(function(n){n!=="__proto__"&&t(e[n],n)}),e}function Ae(e){return Ot(arguments,1).forEach(function(t){Vt(t,function(r,n){e[n]=t[n]})}),e}function $t(e){return Ot(arguments,1).forEach(function(t){Vt(t,function(r,n){Wr(r)?e[n]=r.slice():_e(r)?e[n]=$t({},_e(e[n])?e[n]:{},r):e[n]=r})}),e}function Pn(e,t){lt(t||we(e),function(r){delete e[r]})}function pt(e,t){lt(e,function(r){lt(t,function(n){r&&r.removeAttribute(n)})})}function M(e,t,r){_e(t)?Vt(t,function(n,o){M(e,o,n)}):lt(e,function(n){jr(r)||r===""?pt(n,t):n.setAttribute(t,String(r))})}function Xt(e,t,r){var n=document.createElement(e);return t&&(Lt(t)?vt(n,t):M(n,t)),r&&Ie(r,n),n}function ct(e,t,r){if(ke(r))return getComputedStyle(e)[t];jr(r)||(e.style[t]=""+r)}function Se(e,t){ct(e,"display",t)}function ho(e){e.setActive&&e.setActive()||e.focus({preventScroll:!0})}function dt(e,t){return e.getAttribute(t)}function In(e,t){return e&&e.classList.contains(t)}function st(e){return e.getBoundingClientRect()}function Bt(e){lt(e,function(t){t&&t.parentNode&&t.parentNode.removeChild(t)})}function fo(e){return Re(new DOMParser().parseFromString(e,"text/html").body)}function bt(e,t){e.preventDefault(),t&&(e.stopPropagation(),e.stopImmediatePropagation())}function vo(e,t){return e&&e.querySelector(t)}function Kr(e,t){return t?Ot(e.querySelectorAll(t)):[]}function yt(e,t){mt(e,t,!1)}function kr(e){return e.timeStamp}function Rt(e){return Lt(e)?e:e?e+"px":""}var Ne="splide",Xr="data-"+Ne;function pe(e,t){if(!e)throw new Error("["+Ne+"] "+(t||""))}var xt=Math.min,Qe=Math.max,tr=Math.floor,$e=Math.ceil,nt=Math.abs;function po(e,t,r){return nt(e-t)<r}function Ge(e,t,r,n){var o=xt(t,r),i=Qe(t,r);return n?o<e&&e<i:o<=e&&e<=i}function jt(e,t,r){var n=xt(t,r),o=Qe(t,r);return xt(Qe(n,e),o)}function Pr(e){return+(e>0)-+(e<0)}function Ir(e,t){return lt(t,function(r){e=e.replace("%s",""+r)}),e}function Zr(e){return e<10?"0"+e:""+e}var Rn={};function Gi(e){return""+e+Zr(Rn[e]=(Rn[e]||0)+1)}function go(){var e=[];function t(s,l,a,u){o(s,l,function(c,h,v){var p="addEventListener"in c,d=p?c.removeEventListener.bind(c,h,a,u):c.removeListener.bind(c,a);p?c.addEventListener(h,a,u):c.addListener(a),e.push([c,h,v,a,d])})}function r(s,l,a){o(s,l,function(u,c,h){e=e.filter(function(v){return v[0]===u&&v[1]===c&&v[2]===h&&(!a||v[3]===a)?(v[4](),!1):!0})})}function n(s,l,a){var u,c=!0;return typeof CustomEvent=="function"?u=new CustomEvent(l,{bubbles:c,detail:a}):(u=document.createEvent("CustomEvent"),u.initCustomEvent(l,c,!1,a)),s.dispatchEvent(u),u}function o(s,l,a){lt(s,function(u){u&&lt(l,function(c){c.split(" ").forEach(function(h){var v=h.split(".");a(u,v[0],v[1])})})})}function i(){e.forEach(function(s){s[4]()}),Et(e)}return{bind:t,unbind:r,dispatch:n,destroy:i}}var qt="mounted",Nn="ready",Tt="move",De="moved",bo="click",Yi="active",Ki="inactive",Xi="visible",Zi="hidden",J="refresh",ot="updated",Ce="resize",Jr="resized",Ji="drag",Qi="dragging",ts="dragged",Qr="scroll",oe="scrolled",es="overflow",mo="destroy",rs="arrows:mounted",ns="arrows:updated",os="pagination:mounted",is="pagination:updated",yo="navigation:mounted",_o="autoplay:play",ss="autoplay:playing",Eo="autoplay:pause",wo="lazyload:loaded",Ao="sk",So="sh",er="ei";function G(e){var t=e?e.event.bus:document.createDocumentFragment(),r=go();function n(i,s){r.bind(t,Pe(i).join(" "),function(l){s.apply(s,Wr(l.detail)?l.detail:[])})}function o(i){r.dispatch(t,i,Ot(arguments,1))}return e&&e.event.on(mo,r.destroy),Ae(r,{bus:t,on:n,off:q(r.unbind,t),emit:o})}function lr(e,t,r,n){var o=Date.now,i,s=0,l,a=!0,u=0;function c(){if(!a){if(s=e?xt((o()-i)/e,1):1,r&&r(s),s>=1&&(t(),i=o(),n&&++u>=n))return v();l=kn(c)}}function h(m){m||d(),i=o()-(m?s*e:0),a=!1,l=kn(c)}function v(){a=!0}function p(){i=o(),s=0,r&&r(s)}function d(){l&&cancelAnimationFrame(l),s=0,l=0,a=!0}function f(m){e=m}function y(){return a}return{start:h,rewind:p,pause:v,cancel:d,set:f,isPaused:y}}function as(e){var t=e;function r(o){t=o}function n(o){return Gr(Pe(o),t)}return{set:r,is:n}}function ls(e,t){var r=lr(0,e,null,1);return function(){r.isPaused()&&r.start()}}function us(e,t,r){var n=e.state,o=r.breakpoints||{},i=r.reducedMotion||{},s=go(),l=[];function a(){var d=r.mediaQuery==="min";we(o).sort(function(f,y){return d?+f-+y:+y-+f}).forEach(function(f){c(o[f],"("+(d?"min":"max")+"-width:"+f+"px)")}),c(i,On),h()}function u(d){d&&s.destroy()}function c(d,f){var y=matchMedia(f);s.bind(y,"change",h),l.push([d,y])}function h(){var d=n.is(Je),f=r.direction,y=l.reduce(function(m,b){return $t(m,b[1].matches?b[0]:{})},{});Pn(r),p(y),r.destroy?e.destroy(r.destroy==="completely"):d?(u(!0),e.mount()):f!==r.direction&&e.refresh()}function v(d){matchMedia(On).matches&&(d?$t(r,i):Pn(r,we(i)))}function p(d,f,y){$t(r,d),f&&$t(Object.getPrototypeOf(r),d),(y||!n.is(Kt))&&e.emit(ot,r)}return{setup:a,destroy:u,reduce:v,set:p}}var ur="Arrow",cr=ur+"Left",dr=ur+"Right",$o=ur+"Up",Co=ur+"Down",Dn="rtl",hr="ttb",Ar={width:["height"],left:["top","right"],right:["bottom","left"],x:["y"],X:["Y"],Y:["X"],ArrowLeft:[$o,dr],ArrowRight:[Co,cr]};function cs(e,t,r){function n(i,s,l){l=l||r.direction;var a=l===Dn&&!s?1:l===hr?0:-1;return Ar[i]&&Ar[i][a]||i.replace(/width|left|right/i,function(u,c){var h=Ar[u.toLowerCase()][a]||u;return c>0?h.charAt(0).toUpperCase()+h.slice(1):h})}function o(i){return i*(r.direction===Dn?1:-1)}return{resolve:n,orient:o}}var _t="role",Zt="tabindex",ds="disabled",ft="aria-",Me=ft+"controls",Lo=ft+"current",Mn=ft+"selected",at=ft+"label",tn=ft+"labelledby",xo=ft+"hidden",en=ft+"orientation",Le=ft+"roledescription",Vn=ft+"live",zn=ft+"busy",Un=ft+"atomic",rn=[_t,Zt,ds,Me,Lo,at,tn,xo,en,Le],gt=Ne+"__",kt="is-",Sr=Ne,Bn=gt+"track",hs=gt+"list",fr=gt+"slide",To=fr+"--clone",fs=fr+"__container",nn=gt+"arrows",vr=gt+"arrow",Oo=vr+"--prev",ko=vr+"--next",pr=gt+"pagination",Po=pr+"__page",vs=gt+"progress",ps=vs+"__bar",gs=gt+"toggle",bs=gt+"spinner",ms=gt+"sr",ys=kt+"initialized",Ft=kt+"active",Io=kt+"prev",Ro=kt+"next",Rr=kt+"visible",Nr=kt+"loading",No=kt+"focus-in",Do=kt+"overflow",_s=[Ft,Rr,Io,Ro,Nr,No,Do],Es={slide:fr,clone:To,arrows:nn,arrow:vr,prev:Oo,next:ko,pagination:pr,page:Po,spinner:bs};function ws(e,t){if(lo(e.closest))return e.closest(t);for(var r=e;r&&r.nodeType===1&&!Ee(r,t);)r=r.parentElement;return r}var As=5,Fn=200,Mo="touchstart mousedown",$r="touchmove mousemove",Cr="touchend touchcancel mouseup click";function Ss(e,t,r){var n=G(e),o=n.on,i=n.bind,s=e.root,l=r.i18n,a={},u=[],c=[],h=[],v,p,d;function f(){g(),I(),b()}function y(){o(J,m),o(J,f),o(ot,b),i(document,Mo+" keydown",function(E){d=E.type==="keydown"},{capture:!0}),i(s,"focusin",function(){mt(s,No,!!d)})}function m(E){var T=rn.concat("style");Et(u),yt(s,c),yt(v,h),pt([v,p],T),pt(s,E?T:["style",Le])}function b(){yt(s,c),yt(v,h),c=N(Sr),h=N(Bn),vt(s,c),vt(v,h),M(s,at,r.label),M(s,tn,r.labelledby)}function g(){v=L("."+Bn),p=Re(v,"."+hs),pe(v&&p,"A track/list element is missing."),je(u,co(p,"."+fr+":not(."+To+")")),Vt({arrows:nn,pagination:pr,prev:Oo,next:ko,bar:ps,toggle:gs},function(E,T){a[T]=L("."+E)}),Ae(a,{root:s,track:v,list:p,slides:u})}function I(){var E=s.id||Gi(Ne),T=r.role;s.id=E,v.id=v.id||E+"-track",p.id=p.id||E+"-list",!dt(s,_t)&&s.tagName!=="SECTION"&&T&&M(s,_t,T),M(s,Le,l.carousel),M(p,_t,"presentation")}function L(E){var T=vo(s,E);return T&&ws(T,"."+Sr)===s?T:void 0}function N(E){return[E+"--"+r.type,E+"--"+r.direction,r.drag&&E+"--draggable",r.isNavigation&&E+"--nav",E===Sr&&Ft]}return Ae(a,{setup:f,mount:y,destroy:m})}var te="slide",ie="loop",Ve="fade";function $s(e,t,r,n){var o=G(e),i=o.on,s=o.emit,l=o.bind,a=e.Components,u=e.root,c=e.options,h=c.isNavigation,v=c.updateOnMove,p=c.i18n,d=c.pagination,f=c.slideFocus,y=a.Direction.resolve,m=dt(n,"style"),b=dt(n,at),g=r>-1,I=Re(n,"."+fs),L;function N(){g||(n.id=u.id+"-slide"+Zr(t+1),M(n,_t,d?"tabpanel":"group"),M(n,Le,p.slide),M(n,at,b||Ir(p.slideLabel,[t+1,e.length]))),E()}function E(){l(n,"click",q(s,bo,R)),l(n,"keydown",q(s,Ao,R)),i([De,So,oe],A),i(yo,U),v&&i(Tt,P)}function T(){L=!0,o.destroy(),yt(n,_s),pt(n,rn),M(n,"style",m),M(n,at,b||"")}function U(){var k=e.splides.map(function(w){var O=w.splide.Components.Slides.getAt(t);return O?O.slide.id:""}).join(" ");M(n,at,Ir(p.slideX,(g?r:t)+1)),M(n,Me,k),M(n,_t,f?"button":""),f&&pt(n,Le)}function P(){L||A()}function A(){if(!L){var k=e.index;S(),$(),mt(n,Io,t===k-1),mt(n,Ro,t===k+1)}}function S(){var k=z();k!==In(n,Ft)&&(mt(n,Ft,k),M(n,Lo,h&&k||""),s(k?Yi:Ki,R))}function $(){var k=Y(),w=!k&&(!z()||g);if(e.state.is([ne,Oe])||M(n,xo,w||""),M(Kr(n,c.focusableNodes||""),Zt,w?-1:""),f&&M(n,Zt,w?-1:0),k!==In(n,Rr)&&(mt(n,Rr,k),s(k?Xi:Zi,R)),!k&&document.activeElement===n){var O=a.Slides.getAt(e.index);O&&ho(O.slide)}}function D(k,w,O){ct(O&&I||n,k,w)}function z(){var k=e.index;return k===t||c.cloneStatus&&k===r}function Y(){if(e.is(Ve))return z();var k=st(a.Elements.track),w=st(n),O=y("left",!0),B=y("right",!0);return tr(k[O])<=$e(w[O])&&tr(w[B])<=$e(k[B])}function j(k,w){var O=nt(k-t);return!g&&(c.rewind||e.is(ie))&&(O=xt(O,e.length-O)),O<=w}var R={index:t,slideIndex:r,slide:n,container:I,isClone:g,mount:N,destroy:T,update:A,style:D,isWithin:j};return R}function Cs(e,t,r){var n=G(e),o=n.on,i=n.emit,s=n.bind,l=t.Elements,a=l.slides,u=l.list,c=[];function h(){v(),o(J,p),o(J,v)}function v(){a.forEach(function(A,S){f(A,S,-1)})}function p(){L(function(A){A.destroy()}),Et(c)}function d(){L(function(A){A.update()})}function f(A,S,$){var D=$s(e,S,$,A);D.mount(),c.push(D),c.sort(function(z,Y){return z.index-Y.index})}function y(A){return A?N(function(S){return!S.isClone}):c}function m(A){var S=t.Controller,$=S.toIndex(A),D=S.hasFocus()?1:r.perPage;return N(function(z){return Ge(z.index,$,$+D-1)})}function b(A){return N(A)[0]}function g(A,S){lt(A,function($){if(Lt($)&&($=fo($)),uo($)){var D=a[S];D?Yr($,D):Ie(u,$),vt($,r.classes.slide),T($,q(i,Ce))}}),i(J)}function I(A){Bt(N(A).map(function(S){return S.slide})),i(J)}function L(A,S){y(S).forEach(A)}function N(A){return c.filter(lo(A)?A:function(S){return Lt(A)?Ee(S.slide,A):Gr(Pe(A),S.index)})}function E(A,S,$){L(function(D){D.style(A,S,$)})}function T(A,S){var $=Kr(A,"img"),D=$.length;D?$.forEach(function(z){s(z,"load error",function(){--D||S()})}):S()}function U(A){return A?a.length:c.length}function P(){return c.length>r.perPage}return{mount:h,destroy:p,update:d,register:f,get:y,getIn:m,getAt:b,add:g,remove:I,forEach:L,filter:N,style:E,getLength:U,isEnough:P}}function Ls(e,t,r){var n=G(e),o=n.on,i=n.bind,s=n.emit,l=t.Slides,a=t.Direction.resolve,u=t.Elements,c=u.root,h=u.track,v=u.list,p=l.getAt,d=l.style,f,y,m;function b(){g(),i(window,"resize load",ls(q(s,Ce))),o([ot,J],g),o(Ce,I)}function g(){f=r.direction===hr,ct(c,"maxWidth",Rt(r.width)),ct(h,a("paddingLeft"),L(!1)),ct(h,a("paddingRight"),L(!0)),I(!0)}function I(R){var k=st(c);(R||y.width!==k.width||y.height!==k.height)&&(ct(h,"height",N()),d(a("marginRight"),Rt(r.gap)),d("width",T()),d("height",U(),!0),y=k,s(Jr),m!==(m=j())&&(mt(c,Do,m),s(es,m)))}function L(R){var k=r.padding,w=a(R?"right":"left");return k&&Rt(k[w]||(_e(k)?0:k))||"0px"}function N(){var R="";return f&&(R=E(),pe(R,"height or heightRatio is missing."),R="calc("+R+" - "+L(!1)+" - "+L(!0)+")"),R}function E(){return Rt(r.height||st(v).width*r.heightRatio)}function T(){return r.autoWidth?null:Rt(r.fixedWidth)||(f?"":P())}function U(){return Rt(r.fixedHeight)||(f?r.autoHeight?null:P():E())}function P(){var R=Rt(r.gap);return"calc((100%"+(R&&" + "+R)+")/"+(r.perPage||1)+(R&&" - "+R)+")"}function A(){return st(v)[a("width")]}function S(R,k){var w=p(R||0);return w?st(w.slide)[a("width")]+(k?0:z()):0}function $(R,k){var w=p(R);if(w){var O=st(w.slide)[a("right")],B=st(v)[a("left")];return nt(O-B)+(k?0:z())}return 0}function D(R){return $(e.length-1)-$(0)+S(0,R)}function z(){var R=p(0);return R&&parseFloat(ct(R.slide,a("marginRight")))||0}function Y(R){return parseFloat(ct(h,a("padding"+(R?"Right":"Left"))))||0}function j(){return e.is(Ve)||D(!0)>A()}return{mount:b,resize:I,listSize:A,slideSize:S,sliderSize:D,totalSize:$,getPadding:Y,isOverflow:j}}var xs=2;function Ts(e,t,r){var n=G(e),o=n.on,i=t.Elements,s=t.Slides,l=t.Direction.resolve,a=[],u;function c(){o(J,h),o([ot,Ce],p),(u=y())&&(d(u),t.Layout.resize(!0))}function h(){v(),c()}function v(){Bt(a),Et(a),n.destroy()}function p(){var m=y();u!==m&&(u<m||!m)&&n.emit(J)}function d(m){var b=s.get().slice(),g=b.length;if(g){for(;b.length<m;)je(b,b);je(b.slice(-m),b.slice(0,m)).forEach(function(I,L){var N=L<m,E=f(I.slide,L);N?Yr(E,b[0].slide):Ie(i.list,E),je(a,E),s.register(E,L-m+(N?0:g),I.index)})}}function f(m,b){var g=m.cloneNode(!0);return vt(g,r.classes.clone),g.id=e.root.id+"-clone"+Zr(b+1),g}function y(){var m=r.clones;if(!e.is(ie))m=0;else if(ke(m)){var b=r[l("fixedWidth")]&&t.Layout.slideSize(0),g=b&&$e(st(i.track)[l("width")]/b);m=g||r[l("autoWidth")]&&e.length||r.perPage*xs}return m}return{mount:c,destroy:v}}function Os(e,t,r){var n=G(e),o=n.on,i=n.emit,s=e.state.set,l=t.Layout,a=l.slideSize,u=l.getPadding,c=l.totalSize,h=l.listSize,v=l.sliderSize,p=t.Direction,d=p.resolve,f=p.orient,y=t.Elements,m=y.list,b=y.track,g;function I(){g=t.Transition,o([qt,Jr,ot,J],L)}function L(){t.Controller.isBusy()||(t.Scroll.cancel(),E(e.index),t.Slides.update())}function N(w,O,B,tt){w!==O&&R(w>B)&&(A(),T(P(D(),w>B),!0)),s(ne),i(Tt,O,B,w),g.start(O,function(){s(Qt),i(De,O,B,w),tt&&tt()})}function E(w){T($(w,!0))}function T(w,O){if(!e.is(Ve)){var B=O?w:U(w);ct(m,"transform","translate"+d("X")+"("+B+"px)"),w!==B&&i(So)}}function U(w){if(e.is(ie)){var O=S(w),B=O>t.Controller.getEnd(),tt=O<0;(tt||B)&&(w=P(w,B))}return w}function P(w,O){var B=w-j(O),tt=v();return w-=f(tt*($e(nt(B)/tt)||1))*(O?1:-1),w}function A(){T(D(),!0),g.cancel()}function S(w){for(var O=t.Slides.get(),B=0,tt=1/0,Q=0;Q<O.length;Q++){var At=O[Q].index,_=nt($(At,!0)-w);if(_<=tt)tt=_,B=At;else break}return B}function $(w,O){var B=f(c(w-1)-Y(w));return O?z(B):B}function D(){var w=d("left");return st(m)[w]-st(b)[w]+f(u(!1))}function z(w){return r.trimSpace&&e.is(te)&&(w=jt(w,0,f(v(!0)-h()))),w}function Y(w){var O=r.focus;return O==="center"?(h()-a(w,!0))/2:+O*a(w)||0}function j(w){return $(w?t.Controller.getEnd():0,!!r.trimSpace)}function R(w){var O=f(P(D(),w));return w?O>=0:O<=m[d("scrollWidth")]-st(b)[d("width")]}function k(w,O){O=ke(O)?D():O;var B=w!==!0&&f(O)<f(j(!1)),tt=w!==!1&&f(O)>f(j(!0));return B||tt}return{mount:I,move:N,jump:E,translate:T,shift:P,cancel:A,toIndex:S,toPosition:$,getPosition:D,getLimit:j,exceededLimit:k,reposition:L}}function ks(e,t,r){var n=G(e),o=n.on,i=n.emit,s=t.Move,l=s.getPosition,a=s.getLimit,u=s.toPosition,c=t.Slides,h=c.isEnough,v=c.getLength,p=r.omitEnd,d=e.is(ie),f=e.is(te),y=q(D,!1),m=q(D,!0),b=r.start||0,g,I=b,L,N,E;function T(){U(),o([ot,J,er],U),o(Jr,P)}function U(){L=v(!0),N=r.perMove,E=r.perPage,g=R();var _=jt(b,0,p?g:L-1);_!==b&&(b=_,s.reposition())}function P(){g!==R()&&i(er)}function A(_,H,rt){if(!At()){var K=$(_),et=j(K);et>-1&&(H||et!==b)&&(B(et),s.move(K,et,I,rt))}}function S(_,H,rt,K){t.Scroll.scroll(_,H,rt,function(){var et=j(s.toIndex(l()));B(p?xt(et,g):et),K&&K()})}function $(_){var H=b;if(Lt(_)){var rt=_.match(/([+\-<>])(\d+)?/)||[],K=rt[1],et=rt[2];K==="+"||K==="-"?H=z(b+ +(""+K+(+et||1)),b):K===">"?H=et?k(+et):y(!0):K==="<"&&(H=m(!0))}else H=d?_:jt(_,0,g);return H}function D(_,H){var rt=N||(Q()?1:E),K=z(b+rt*(_?-1:1),b,!(N||Q()));return K===-1&&f&&!po(l(),a(!_),1)?_?0:g:H?K:j(K)}function z(_,H,rt){if(h()||Q()){var K=Y(_);K!==_&&(H=_,_=K,rt=!1),_<0||_>g?!N&&(Ge(0,_,H,!0)||Ge(g,H,_,!0))?_=k(w(_)):d?_=rt?_<0?-(L%E||E):L:_:r.rewind?_=_<0?g:0:_=-1:rt&&_!==H&&(_=k(w(H)+(_<H?-1:1)))}else _=-1;return _}function Y(_){if(f&&r.trimSpace==="move"&&_!==b)for(var H=l();H===u(_,!0)&&Ge(_,0,e.length-1,!r.rewind);)_<b?--_:++_;return _}function j(_){return d?(_+L)%L||0:_}function R(){for(var _=L-(Q()||d&&N?1:E);p&&_-- >0;)if(u(L-1,!0)!==u(_,!0)){_++;break}return jt(_,0,L-1)}function k(_){return jt(Q()?_:E*_,0,g)}function w(_){return Q()?xt(_,g):tr((_>=g?L-1:_)/E)}function O(_){var H=s.toIndex(_);return f?jt(H,0,g):H}function B(_){_!==b&&(I=b,b=_)}function tt(_){return _?I:b}function Q(){return!ke(r.focus)||r.isNavigation}function At(){return e.state.is([ne,Oe])&&!!r.waitForTransition}return{mount:T,go:A,scroll:S,getNext:y,getPrev:m,getAdjacent:D,getEnd:R,setIndex:B,getIndex:tt,toIndex:k,toPage:w,toDest:O,hasFocus:Q,isBusy:At}}var Ps="http://www.w3.org/2000/svg",Is="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z",Be=40;function Rs(e,t,r){var n=G(e),o=n.on,i=n.bind,s=n.emit,l=r.classes,a=r.i18n,u=t.Elements,c=t.Controller,h=u.arrows,v=u.track,p=h,d=u.prev,f=u.next,y,m,b={};function g(){L(),o(ot,I)}function I(){N(),g()}function L(){var S=r.arrows;S&&!(d&&f)&&U(),d&&f&&(Ae(b,{prev:d,next:f}),Se(p,S?"":"none"),vt(p,m=nn+"--"+r.direction),S&&(E(),A(),M([d,f],Me,v.id),s(rs,d,f)))}function N(){n.destroy(),yt(p,m),y?(Bt(h?[d,f]:p),d=f=null):pt([d,f],rn)}function E(){o([qt,De,J,oe,er],A),i(f,"click",q(T,">")),i(d,"click",q(T,"<"))}function T(S){c.go(S,!0)}function U(){p=h||Xt("div",l.arrows),d=P(!0),f=P(!1),y=!0,Ie(p,[d,f]),!h&&Yr(p,v)}function P(S){var $='<button class="'+l.arrow+" "+(S?l.prev:l.next)+'" type="button"><svg xmlns="'+Ps+'" viewBox="0 0 '+Be+" "+Be+'" width="'+Be+'" height="'+Be+'" focusable="false"><path d="'+(r.arrowPath||Is)+'" />';return fo($)}function A(){if(d&&f){var S=e.index,$=c.getPrev(),D=c.getNext(),z=$>-1&&S<$?a.last:a.prev,Y=D>-1&&S>D?a.first:a.next;d.disabled=$<0,f.disabled=D<0,M(d,at,z),M(f,at,Y),s(ns,d,f,$,D)}}return{arrows:b,mount:g,destroy:N,update:A}}var Ns=Xr+"-interval";function Ds(e,t,r){var n=G(e),o=n.on,i=n.bind,s=n.emit,l=lr(r.interval,e.go.bind(e,">"),E),a=l.isPaused,u=t.Elements,c=t.Elements,h=c.root,v=c.toggle,p=r.autoplay,d,f,y=p==="pause";function m(){p&&(b(),v&&M(v,Me,u.track.id),y||g(),N())}function b(){r.pauseOnHover&&i(h,"mouseenter mouseleave",function(U){d=U.type==="mouseenter",L()}),r.pauseOnFocus&&i(h,"focusin focusout",function(U){f=U.type==="focusin",L()}),v&&i(v,"click",function(){y?g():I(!0)}),o([Tt,Qr,J],l.rewind),o(Tt,T)}function g(){a()&&t.Slides.isEnough()&&(l.start(!r.resetProgress),f=d=y=!1,N(),s(_o))}function I(U){U===void 0&&(U=!0),y=!!U,N(),a()||(l.pause(),s(Eo))}function L(){y||(d||f?I(!1):g())}function N(){v&&(mt(v,Ft,!y),M(v,at,r.i18n[y?"play":"pause"]))}function E(U){var P=u.bar;P&&ct(P,"width",U*100+"%"),s(ss,U)}function T(U){var P=t.Slides.getAt(U);l.set(P&&+dt(P.slide,Ns)||r.interval)}return{mount:m,destroy:l.cancel,play:g,pause:I,isPaused:a}}function Ms(e,t,r){var n=G(e),o=n.on;function i(){r.cover&&(o(wo,q(l,!0)),o([qt,ot,J],q(s,!0)))}function s(a){t.Slides.forEach(function(u){var c=Re(u.container||u.slide,"img");c&&c.src&&l(a,c,u)})}function l(a,u,c){c.style("background",a?'center/cover no-repeat url("'+u.src+'")':"",!0),Se(u,a?"none":"")}return{mount:i,destroy:q(s,!1)}}var Vs=10,zs=600,Us=.6,Bs=1.5,Fs=800;function Hs(e,t,r){var n=G(e),o=n.on,i=n.emit,s=e.state.set,l=t.Move,a=l.getPosition,u=l.getLimit,c=l.exceededLimit,h=l.translate,v=e.is(te),p,d,f=1;function y(){o(Tt,I),o([ot,J],L)}function m(E,T,U,P,A){var S=a();if(I(),U&&(!v||!c())){var $=t.Layout.sliderSize(),D=Pr(E)*$*tr(nt(E)/$)||0;E=l.toPosition(t.Controller.toDest(E%$))+D}var z=po(S,E,1);f=1,T=z?0:T||Qe(nt(E-S)/Bs,Fs),d=P,p=lr(T,b,q(g,S,E,A),1),s(Oe),i(Qr),p.start()}function b(){s(Qt),d&&d(),i(oe)}function g(E,T,U,P){var A=a(),S=E+(T-E)*N(P),$=(S-A)*f;h(A+$),v&&!U&&c()&&(f*=Us,nt($)<Vs&&m(u(c(!0)),zs,!1,d,!0))}function I(){p&&p.cancel()}function L(){p&&!p.isPaused()&&(I(),b())}function N(E){var T=r.easingFunc;return T?T(E):1-Math.pow(1-E,4)}return{mount:y,destroy:I,scroll:m,cancel:L}}var Gt={passive:!1,capture:!0};function qs(e,t,r){var n=G(e),o=n.on,i=n.emit,s=n.bind,l=n.unbind,a=e.state,u=t.Move,c=t.Scroll,h=t.Controller,v=t.Elements.track,p=t.Media.reduce,d=t.Direction,f=d.resolve,y=d.orient,m=u.getPosition,b=u.exceededLimit,g,I,L,N,E,T=!1,U,P,A;function S(){s(v,$r,Or,Gt),s(v,Cr,Or,Gt),s(v,Mo,D,Gt),s(v,"click",j,{capture:!0}),s(v,"dragstart",bt),o([qt,ot],$)}function $(){var C=r.drag;an(!C),N=C==="free"}function D(C){if(U=!1,!P){var W=et(C);K(C.target)&&(W||!C.button)&&(h.isBusy()?bt(C,!0):(A=W?v:window,E=a.is([ne,Oe]),L=null,s(A,$r,z,Gt),s(A,Cr,Y,Gt),u.cancel(),c.cancel(),R(C)))}}function z(C){if(a.is(We)||(a.set(We),i(Ji)),C.cancelable)if(E){u.translate(g+rt(Q(C)));var W=At(C)>Fn,Pt=T!==(T=b());(W||Pt)&&R(C),U=!0,i(Qi),bt(C)}else O(C)&&(E=w(C),bt(C))}function Y(C){a.is(We)&&(a.set(Qt),i(ts)),E&&(k(C),bt(C)),l(A,$r,z),l(A,Cr,Y),E=!1}function j(C){!P&&U&&bt(C,!0)}function R(C){L=I,I=C,g=m()}function k(C){var W=B(C),Pt=tt(W),se=r.rewind&&r.rewindByDrag;p(!1),N?h.scroll(Pt,0,r.snap):e.is(Ve)?h.go(y(Pr(W))<0?se?"<":"-":se?">":"+"):e.is(te)&&T&&se?h.go(b(!0)?">":"<"):h.go(h.toDest(Pt),!0),p(!0)}function w(C){var W=r.dragMinThreshold,Pt=_e(W),se=Pt&&W.mouse||0,zo=(Pt?W.touch:+W)||10;return nt(Q(C))>(et(C)?zo:se)}function O(C){return nt(Q(C))>nt(Q(C,!0))}function B(C){if(e.is(ie)||!T){var W=At(C);if(W&&W<Fn)return Q(C)/W}return 0}function tt(C){return m()+Pr(C)*xt(nt(C)*(r.flickPower||600),N?1/0:t.Layout.listSize()*(r.flickMaxPages||1))}function Q(C,W){return H(C,W)-H(_(C),W)}function At(C){return kr(C)-kr(_(C))}function _(C){return I===C&&L||I}function H(C,W){return(et(C)?C.changedTouches[0]:C)["page"+f(W?"Y":"X")]}function rt(C){return C/(T&&e.is(te)?As:1)}function K(C){var W=r.noDrag;return!Ee(C,"."+Po+", ."+vr)&&(!W||!Ee(C,W))}function et(C){return typeof TouchEvent<"u"&&C instanceof TouchEvent}function Vo(){return E}function an(C){P=C}return{mount:S,disable:an,isDragging:Vo}}var Ws={Spacebar:" ",Right:dr,Left:cr,Up:$o,Down:Co};function on(e){return e=Lt(e)?e:e.key,Ws[e]||e}var Hn="keydown";function js(e,t,r){var n=G(e),o=n.on,i=n.bind,s=n.unbind,l=e.root,a=t.Direction.resolve,u,c;function h(){v(),o(ot,p),o(ot,v),o(Tt,f)}function v(){var m=r.keyboard;m&&(u=m==="global"?window:l,i(u,Hn,y))}function p(){s(u,Hn)}function d(m){c=m}function f(){var m=c;c=!0,ao(function(){c=m})}function y(m){if(!c){var b=on(m);b===a(cr)?e.go("<"):b===a(dr)&&e.go(">")}}return{mount:h,destroy:p,disable:d}}var ge=Xr+"-lazy",Ye=ge+"-srcset",Gs="["+ge+"], ["+Ye+"]";function Ys(e,t,r){var n=G(e),o=n.on,i=n.off,s=n.bind,l=n.emit,a=r.lazyLoad==="sequential",u=[De,oe],c=[];function h(){r.lazyLoad&&(v(),o(J,v))}function v(){Et(c),p(),a?m():(i(u),o(u,d),d())}function p(){t.Slides.forEach(function(b){Kr(b.slide,Gs).forEach(function(g){var I=dt(g,ge),L=dt(g,Ye);if(I!==g.src||L!==g.srcset){var N=r.classes.spinner,E=g.parentElement,T=Re(E,"."+N)||Xt("span",N,E);c.push([g,b,T]),g.src||Se(g,"none")}})})}function d(){c=c.filter(function(b){var g=r.perPage*((r.preloadPages||1)+1)-1;return b[1].isWithin(e.index,g)?f(b):!0}),c.length||i(u)}function f(b){var g=b[0];vt(b[1].slide,Nr),s(g,"load error",q(y,b)),M(g,"src",dt(g,ge)),M(g,"srcset",dt(g,Ye)),pt(g,ge),pt(g,Ye)}function y(b,g){var I=b[0],L=b[1];yt(L.slide,Nr),g.type!=="error"&&(Bt(b[2]),Se(I,""),l(wo,I,L),l(Ce)),a&&m()}function m(){c.length&&f(c.shift())}return{mount:h,destroy:q(Et,c),check:d}}function Ks(e,t,r){var n=G(e),o=n.on,i=n.emit,s=n.bind,l=t.Slides,a=t.Elements,u=t.Controller,c=u.hasFocus,h=u.getIndex,v=u.go,p=t.Direction.resolve,d=a.pagination,f=[],y,m;function b(){g(),o([ot,J,er],b);var P=r.pagination;d&&Se(d,P?"":"none"),P&&(o([Tt,Qr,oe],U),I(),U(),i(os,{list:y,items:f},T(e.index)))}function g(){y&&(Bt(d?Ot(y.children):y),yt(y,m),Et(f),y=null),n.destroy()}function I(){var P=e.length,A=r.classes,S=r.i18n,$=r.perPage,D=c()?u.getEnd()+1:$e(P/$);y=d||Xt("ul",A.pagination,a.track.parentElement),vt(y,m=pr+"--"+E()),M(y,_t,"tablist"),M(y,at,S.select),M(y,en,E()===hr?"vertical":"");for(var z=0;z<D;z++){var Y=Xt("li",null,y),j=Xt("button",{class:A.page,type:"button"},Y),R=l.getIn(z).map(function(w){return w.slide.id}),k=!c()&&$>1?S.pageX:S.slideX;s(j,"click",q(L,z)),r.paginationKeyboard&&s(j,"keydown",q(N,z)),M(Y,_t,"presentation"),M(j,_t,"tab"),M(j,Me,R.join(" ")),M(j,at,Ir(k,z+1)),M(j,Zt,-1),f.push({li:Y,button:j,page:z})}}function L(P){v(">"+P,!0)}function N(P,A){var S=f.length,$=on(A),D=E(),z=-1;$===p(dr,!1,D)?z=++P%S:$===p(cr,!1,D)?z=(--P+S)%S:$==="Home"?z=0:$==="End"&&(z=S-1);var Y=f[z];Y&&(ho(Y.button),v(">"+z),bt(A,!0))}function E(){return r.paginationDirection||r.direction}function T(P){return f[u.toPage(P)]}function U(){var P=T(h(!0)),A=T(h());if(P){var S=P.button;yt(S,Ft),pt(S,Mn),M(S,Zt,-1)}if(A){var $=A.button;vt($,Ft),M($,Mn,!0),M($,Zt,"")}i(is,{list:y,items:f},P,A)}return{items:f,mount:b,destroy:g,getAt:T,update:U}}var Xs=[" ","Enter"];function Zs(e,t,r){var n=r.isNavigation,o=r.slideFocus,i=[];function s(){e.splides.forEach(function(d){d.isParent||(u(e,d.splide),u(d.splide,e))}),n&&c()}function l(){i.forEach(function(d){d.destroy()}),Et(i)}function a(){l(),s()}function u(d,f){var y=G(d);y.on(Tt,function(m,b,g){f.go(f.is(ie)?g:m)}),i.push(y)}function c(){var d=G(e),f=d.on;f(bo,v),f(Ao,p),f([qt,ot],h),i.push(d),d.emit(yo,e.splides)}function h(){M(t.Elements.list,en,r.direction===hr?"vertical":"")}function v(d){e.go(d.index)}function p(d,f){Gr(Xs,on(f))&&(v(d),bt(f))}return{setup:q(t.Media.set,{slideFocus:ke(o)?n:o},!0),mount:s,destroy:l,remount:a}}function Js(e,t,r){var n=G(e),o=n.bind,i=0;function s(){r.wheel&&o(t.Elements.track,"wheel",l,Gt)}function l(u){if(u.cancelable){var c=u.deltaY,h=c<0,v=kr(u),p=r.wheelMinThreshold||0,d=r.wheelSleep||0;nt(c)>p&&v-i>d&&(e.go(h?"<":">"),i=v),a(h)&&bt(u)}}function a(u){return!r.releaseWheel||e.state.is(ne)||t.Controller.getAdjacent(u)!==-1}return{mount:s}}var Qs=90;function ta(e,t,r){var n=G(e),o=n.on,i=t.Elements.track,s=r.live&&!r.isNavigation,l=Xt("span",ms),a=lr(Qs,q(c,!1));function u(){s&&(v(!t.Autoplay.isPaused()),M(i,Un,!0),l.textContent="…",o(_o,q(v,!0)),o(Eo,q(v,!1)),o([De,oe],q(c,!0)))}function c(p){M(i,zn,p),p?(Ie(i,l),a.start()):(Bt(l),a.cancel())}function h(){pt(i,[Vn,Un,zn]),Bt(l)}function v(p){s&&M(i,Vn,p?"off":"polite")}return{mount:u,disable:v,destroy:h}}var ea=Object.freeze({__proto__:null,Media:us,Direction:cs,Elements:Ss,Slides:Cs,Layout:Ls,Clones:Ts,Move:Os,Controller:ks,Arrows:Rs,Autoplay:Ds,Cover:Ms,Scroll:Hs,Drag:qs,Keyboard:js,LazyLoad:Ys,Pagination:Ks,Sync:Zs,Wheel:Js,Live:ta}),ra={prev:"Previous slide",next:"Next slide",first:"Go to first slide",last:"Go to last slide",slideX:"Go to slide %s",pageX:"Go to page %s",play:"Start autoplay",pause:"Pause autoplay",carousel:"carousel",slide:"slide",select:"Select a slide to show",slideLabel:"%s of %s"},na={type:"slide",role:"region",speed:400,perPage:1,cloneStatus:!0,arrows:!0,pagination:!0,paginationKeyboard:!0,interval:5e3,pauseOnHover:!0,pauseOnFocus:!0,resetProgress:!0,easing:"cubic-bezier(0.25, 1, 0.5, 1)",drag:!0,direction:"ltr",trimSpace:!0,focusableNodes:"a, button, textarea, input, select, iframe",live:!0,classes:Es,i18n:ra,reducedMotion:{speed:0,rewindSpeed:0,autoplay:"pause"}};function oa(e,t,r){var n=t.Slides;function o(){G(e).on([qt,J],i)}function i(){n.forEach(function(l){l.style("transform","translateX(-"+100*l.index+"%)")})}function s(l,a){n.style("transition","opacity "+r.speed+"ms "+r.easing),ao(a)}return{mount:o,start:s,cancel:Or}}function ia(e,t,r){var n=t.Move,o=t.Controller,i=t.Scroll,s=t.Elements.list,l=q(ct,s,"transition"),a;function u(){G(e).bind(s,"transitionend",function(p){p.target===s&&a&&(h(),a())})}function c(p,d){var f=n.toPosition(p,!0),y=n.getPosition(),m=v(p);nt(f-y)>=1&&m>=1?r.useScroll?i.scroll(f,m,!1,d):(l("transform "+m+"ms "+r.easing),n.translate(f,!0),a=d):(n.jump(p),d())}function h(){l(""),i.cancel()}function v(p){var d=r.rewindSpeed;if(e.is(te)&&d){var f=o.getIndex(!0),y=o.getEnd();if(f===0&&p>=y||f>=y&&p===0)return d}return r.speed}return{mount:u,start:c,cancel:h}}var sa=function(){function e(r,n){this.event=G(),this.Components={},this.state=as(Kt),this.splides=[],this._o={},this._E={};var o=Lt(r)?vo(document,r):r;pe(o,o+" is invalid."),this.root=o,n=$t({label:dt(o,at)||"",labelledby:dt(o,tn)||""},na,e.defaults,n||{});try{$t(n,JSON.parse(dt(o,Xr)))}catch{pe(!1,"Invalid JSON")}this._o=Object.create($t({},n))}var t=e.prototype;return t.mount=function(n,o){var i=this,s=this.state,l=this.Components;pe(s.is([Kt,Je]),"Already mounted!"),s.set(Kt),this._C=l,this._T=o||this._T||(this.is(Ve)?oa:ia),this._E=n||this._E;var a=Ae({},ea,this._E,{Transition:this._T});return Vt(a,function(u,c){var h=u(i,l,i._o);l[c]=h,h.setup&&h.setup()}),Vt(l,function(u){u.mount&&u.mount()}),this.emit(qt),vt(this.root,ys),s.set(Qt),this.emit(Nn),this},t.sync=function(n){return this.splides.push({splide:n}),n.splides.push({splide:this,isParent:!0}),this.state.is(Qt)&&(this._C.Sync.remount(),n.Components.Sync.remount()),this},t.go=function(n){return this._C.Controller.go(n),this},t.on=function(n,o){return this.event.on(n,o),this},t.off=function(n){return this.event.off(n),this},t.emit=function(n){var o;return(o=this.event).emit.apply(o,[n].concat(Ot(arguments,1))),this},t.add=function(n,o){return this._C.Slides.add(n,o),this},t.remove=function(n){return this._C.Slides.remove(n),this},t.is=function(n){return this._o.type===n},t.refresh=function(){return this.emit(J),this},t.destroy=function(n){n===void 0&&(n=!0);var o=this.event,i=this.state;return i.is(Kt)?G(this).on(Nn,this.destroy.bind(this,n)):(Vt(this._C,function(s){s.destroy&&s.destroy(n)},!0),o.emit(mo),o.destroy(),n&&Et(this.splides),i.set(Je)),this},qi(e,[{key:"options",get:function(){return this._o},set:function(n){this._C.Media.set(n,!0,!0)}},{key:"length",get:function(){return this._C.Slides.getLength(!0)}},{key:"index",get:function(){return this._C.Controller.getIndex()}}]),e}(),sn=sa;sn.defaults={};sn.STATES=ji;function aa(){document.querySelectorAll("[data-slider]").forEach(e=>{new sn(e,{type:"loop",autoplay:!0,interval:4e3,pauseOnHover:!0,perPage:1,arrows:!0,pagination:!0}).mount()})}function la(){const e=document.querySelector("[data-video-modal]");if(!e)return;const t=e.querySelector("[data-video-player]"),r=e.querySelector("[data-video-close]"),n=document.querySelector("[data-hero-video]");function o(s){t.src=s,e.hidden=!1,document.documentElement.classList.add("is-modal-open"),n&&!n.paused&&n.pause(),t.requestFullscreen&&t.requestFullscreen().catch(()=>{}),t.play().catch(()=>{})}function i(){e.hidden||(t.pause(),t.removeAttribute("src"),t.load(),e.hidden=!0,document.documentElement.classList.remove("is-modal-open"),document.fullscreenElement&&document.exitFullscreen&&document.exitFullscreen(),n&&n.paused&&n.play().catch(()=>{}))}document.addEventListener("click",s=>{const l=s.target.closest("[data-video-open]");if(l){const a=l.getAttribute("data-video-src");a&&o(a)}s.target.matches("[data-video-modal]")&&i()}),r==null||r.addEventListener("click",i),document.addEventListener("keydown",s=>{s.key==="Escape"&&i()})}function ua(){const e=document.querySelectorAll(".reveal");if(!e.length)return;const t=new IntersectionObserver((r,n)=>{r.forEach(o=>{o.isIntersecting&&(o.target.classList.add("reveal--in"),n.unobserve(o.target))})},{rootMargin:"0px 0px -10% 0px",threshold:.2});e.forEach(r=>t.observe(r))}function ca(){document.querySelectorAll('a[href^="#"]').forEach(e=>{e.addEventListener("click",t=>{const r=e.getAttribute("href").slice(1),n=document.getElementById(r);n&&(t.preventDefault(),n.scrollIntoView({behavior:"smooth",block:"start"}))})})}function da(){const e=document.querySelector(".hero"),t=document.querySelector("[data-hero-video]");if(!e||!t)return;const r=()=>e.classList.add("hero--ready");t.readyState>=2&&r(),t.addEventListener("loadeddata",r,{once:!0}),t.addEventListener("canplay",r,{once:!0})}function ha(){const e=document.querySelector(".stage"),t=e.querySelector(".backdrop"),r=1200;e.classList.remove("is-open");const n=e.querySelectorAll(".bottom");let o=0;const i=()=>{e.classList.add("is-open"),t&&t.paused&&t.play().catch(()=>{})};n.forEach(s=>{s.complete?o++:s.addEventListener("load",()=>{++o===n.length&&setTimeout(i,r)},{once:!0})}),o===n.length&&setTimeout(i,r),setTimeout(i,4e3)}function fa(){const e=document.getElementById("menuMobile"),t=document.getElementById("main");if(!e||!t)return;e.querySelector(".menuMobile__panel");const r=()=>{e.classList.add("is-open"),document.body.classList.add("no-scroll"),t.classList.add("overlay-mobile")},n=()=>{e.classList.remove("is-open"),document.body.classList.remove("no-scroll"),t.classList.remove("overlay-mobile")};window.openNav=r,window.closeNav=n,e.addEventListener("click",o=>{o.target===e&&n()}),document.addEventListener("keydown",o=>{o.key==="Escape"&&n()})}function va(){const e=document.querySelector(".booking"),t=document.querySelector("section.intro");if(!e||!t)return;const r=()=>{const n=e.offsetHeight/2;t.style.setProperty("--half-ref-h",`${n}px`)};r(),window.addEventListener("resize",r),"ResizeObserver"in window&&new ResizeObserver(r).observe(e)}function pa(){document.querySelectorAll(".faq .faq-item").forEach(e=>{const t=e.querySelector("summary"),r=e.querySelector(".answer");t.addEventListener("click",n=>{if(n.preventDefault(),e.hasAttribute("open")){e.classList.add("is-animating","is-closing"),r.style.height=r.scrollHeight+"px",requestAnimationFrame(()=>r.style.height="0px");const i=s=>{s.propertyName==="height"&&(e.removeAttribute("open"),e.classList.remove("is-closing","is-animating"),r.removeEventListener("transitionend",i))};r.addEventListener("transitionend",i)}else{e.classList.add("is-animating","is-opening"),e.setAttribute("open",""),r.style.height="0px",requestAnimationFrame(()=>r.style.height=r.scrollHeight+"px");const i=s=>{s.propertyName==="height"&&(r.style.height="auto",e.classList.remove("is-opening","is-animating"),r.removeEventListener("transitionend",i))};r.addEventListener("transitionend",i)}})})}window.addEventListener("DOMContentLoaded",()=>{va(),Fi(),fa(),aa(),la(),ua(),ca(),da(),ha(),pa()});
