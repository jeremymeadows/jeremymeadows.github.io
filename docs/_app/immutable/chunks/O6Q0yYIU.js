import{Q as T,R as m,S as V,O,v as $,V as j,w as q,W as B,P as C,i as F,X as Q,j as w,H as I,Y as A,n as g,s as S,t as h,L as P,Z as D,_ as R,k as X,$ as Z,a0 as z,a1 as G,a2 as J,a3 as K,a4 as U,p as x,A as ee,c as te,D as re}from"./BQkHan-u.js";import{b as ae}from"./BVrivz3l.js";const ne=["touchstart","touchmove"];function ie(e){return ne.includes(e)}function se(e){var t=V,a=O;T(null),m(null);try{return e()}finally{T(t),m(a)}}const oe=new Set,H=new Set;function ue(e,t,a,i={}){function s(r){if(i.capture||E.call(t,r),!r.cancelBubble)return se(()=>a==null?void 0:a.call(this,r))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?j(()=>{t.addEventListener(e,s,i)}):t.addEventListener(e,s,i),s}function _e(e,t,a,i,s){var r={capture:i,passive:s},l=ue(e,t,a,r);(t===document.body||t===window||t===document)&&$(()=>{t.removeEventListener(e,l,r)})}function E(e){var k;var t=this,a=t.ownerDocument,i=e.type,s=((k=e.composedPath)==null?void 0:k.call(e))||[],r=s[0]||e.target,l=0,v=e.__root;if(v){var d=s.indexOf(v);if(d!==-1&&(t===document||t===window)){e.__root=t;return}var p=s.indexOf(t);if(p===-1)return;d<=p&&(l=d)}if(r=s[l]||e.target,r!==t){q(e,"currentTarget",{configurable:!0,get(){return r||a}});var L=V,f=O;T(null),m(null);try{for(var n,o=[];r!==null;){var c=r.assignedSlot||r.parentNode||r.host||null;try{var _=r["__"+i];if(_!=null&&(!r.disabled||e.target===r))if(B(_)){var[Y,...M]=_;Y.apply(r,[e,...M])}else _.call(r,e)}catch(b){n?o.push(b):n=b}if(e.cancelBubble||c===t||c===null)break;r=c}if(n){for(let b of o)queueMicrotask(()=>{throw b});throw n}}finally{e.__root=t,delete e.currentTarget,T(L),m(f)}}}let u;function le(){u=void 0}function he(e){let t=null,a=w;var i;if(w){for(t=h,u===void 0&&(u=P(document.head));u!==null&&(u.nodeType!==8||u.data!==I);)u=A(u);u===null?g(!1):u=S(A(u))}w||(i=document.head.appendChild(C()));try{F(()=>e(i),Q)}finally{a&&(g(!0),u=h,S(t))}}function ve(e,t){var a=t==null?"":typeof t=="object"?t+"":t;a!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=a,e.nodeValue=a+"")}function fe(e,t){return W(e,t)}function pe(e,t){D(),t.intro=t.intro??!1;const a=t.target,i=w,s=h;try{for(var r=P(a);r&&(r.nodeType!==8||r.data!==I);)r=A(r);if(!r)throw R;g(!0),S(r),X();const l=W(e,{...t,anchor:r});if(h===null||h.nodeType!==8||h.data!==Z)throw z(),R;return g(!1),l}catch(l){if(l===R)return t.recover===!1&&G(),D(),J(a),g(!1),fe(e,t);throw l}finally{g(i),S(s),le()}}const y=new Map;function W(e,{target:t,anchor:a,props:i={},events:s,context:r,intro:l=!0}){D();var v=new Set,d=f=>{for(var n=0;n<f.length;n++){var o=f[n];if(!v.has(o)){v.add(o);var c=ie(o);t.addEventListener(o,E,{passive:c});var _=y.get(o);_===void 0?(document.addEventListener(o,E,{passive:c}),y.set(o,1)):y.set(o,_+1)}}};d(K(oe)),H.add(d);var p=void 0,L=U(()=>{var f=a??t.appendChild(C());return x(()=>{if(r){ee({});var n=te;n.c=r}s&&(i.$$events=s),w&&ae(f,null),p=e(f,i)||{},w&&(O.nodes_end=h),r&&re()}),()=>{var c;for(var n of v){t.removeEventListener(n,E);var o=y.get(n);--o===0?(document.removeEventListener(n,E),y.delete(n)):y.set(n,o)}H.delete(d),f!==a&&((c=f.parentNode)==null||c.removeChild(f))}});return N.set(p,L),p}let N=new WeakMap;function ye(e,t){const a=N.get(e);return a?(N.delete(e),a(t)):Promise.resolve()}export{he as a,_e as e,pe as h,fe as m,ve as s,ye as u};
