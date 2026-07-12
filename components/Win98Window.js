import{r as o,j as s}from"../assets/jsx-runtime.js";import{m as p}from"../assets/proxy.js";/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),b=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,a,i)=>i?i.toUpperCase():a.toLowerCase()),h=t=>{const e=b(t);return e.charAt(0).toUpperCase()+e.slice(1)},w=(...t)=>t.filter((e,a,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===a).join(" ").trim(),k=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var C={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=o.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:a=2,absoluteStrokeWidth:i,className:l="",children:r,iconNode:d,...n},u)=>o.createElement("svg",{ref:u,...C,width:e,height:e,stroke:t,strokeWidth:i?Number(a)*24/Number(e):a,className:w("lucide",l),...!r&&!k(n)&&{"aria-hidden":"true"},...n},[...d.map(([m,c])=>o.createElement(m,c)),...Array.isArray(r)?r:[r]]));/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=(t,e)=>{const a=o.forwardRef(({className:i,...l},r)=>o.createElement(N,{ref:r,iconNode:e,className:w(`lucide-${j(h(t))}`,`lucide-${t}`,i),...l}));return a.displayName=h(t),a};/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=[["path",{d:"M5 12h14",key:"1ays0h"}]],y=x("minus",g);/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]],z=x("square",v);/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],W=x("x",M),_=({title:t,children:e,icon:a,className:i="",contentClassName:l="",defaultMaximized:r=!1,onClose:d})=>{const[n,u]=o.useState(r),[m,c]=o.useState(!1);if(m)return s.jsxs("button",{onClick:()=>c(!1),className:"win98-button flex items-center gap-2 max-w-[200px] truncate",children:[a&&s.jsx("span",{className:"w-4 h-4",children:a}),s.jsx("span",{className:"truncate",children:t})]});const f=n?"fixed inset-0 z-50 m-0 w-full h-full win98-window flex flex-col":`win98-window flex flex-col ${i}`;return s.jsxs(p.div,{layout:!0,initial:!1,animate:{width:n?"100vw":"auto",height:n?"100vh":"auto",x:0,y:0},transition:{type:"spring",bounce:0,duration:.3},className:f,children:[s.jsxs("div",{className:"win98-titlebar cursor-default",children:[s.jsxs("div",{className:"flex items-center gap-1 overflow-hidden",children:[a&&s.jsx("span",{className:"w-4 h-4 flex-shrink-0",children:a}),s.jsx("span",{className:"truncate text-sm tracking-wide",children:t})]}),s.jsxs("div",{className:"flex items-center gap-[2px] ml-2",children:[s.jsx("button",{onClick:()=>c(!0),className:"win98-button !p-0 w-4 h-4 flex items-center justify-center","aria-label":"Minimize",children:s.jsx(y,{size:10,strokeWidth:3})}),s.jsx("button",{onClick:()=>u(!n),className:"win98-button !p-0 w-4 h-4 flex items-center justify-center","aria-label":"Maximize",children:s.jsx(z,{size:10,strokeWidth:3})}),s.jsx("button",{onClick:d,className:"win98-button !p-0 w-4 h-4 flex items-center justify-center","aria-label":"Close",children:s.jsx(W,{size:12,strokeWidth:3})})]})]}),s.jsx("div",{className:`win98-content flex-grow overflow-auto ${l}`,children:e})]})};export{_ as W,x as c};
