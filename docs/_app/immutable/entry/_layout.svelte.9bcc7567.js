import{S as O,i as C,s as G,k as _,l as p,m as y,h as c,n as s,b as A,C as Y,D as L,o as se,q,a as M,y as Q,r as V,c as x,z as R,E as m,A as W,g as P,d as z,B as X,F as ne,G as le,H as oe,I as ie,J as ce,K as ue,L as de,M as me}from"../chunks/index.9f19670c.js";import{n as fe}from"../chunks/stores.c6d0825e.js";function he(l){let e;return{c(){e=_("i"),this.h()},l(t){e=p(t,"I",{class:!0}),y(e).forEach(c),this.h()},h(){s(e,"class","bx bx-sm bxs-moon")},m(t,a){A(t,e,a)},d(t){t&&c(e)}}}function _e(l){let e;return{c(){e=_("i"),this.h()},l(t){e=p(t,"I",{class:!0}),y(e).forEach(c),this.h()},h(){s(e,"class","bx bx-sm bxs-sun")},m(t,a){A(t,e,a)},d(t){t&&c(e)}}}function pe(l){let e,t,a;function i(u,g){return u[0]==="dark"?_e:he}let o=i(l),n=o(l);return{c(){e=_("button"),n.c(),this.h()},l(u){e=p(u,"BUTTON",{id:!0,class:!0});var g=y(e);n.l(g),g.forEach(c),this.h()},h(){s(e,"id","toggle-dark-mode"),s(e,"class","button svelte-hfgnui")},m(u,g){A(u,e,g),n.m(e,null),t||(a=Y(e,"click",l[1]),t=!0)},p(u,[g]){o!==(o=i(u))&&(n.d(1),n=o(u),n&&(n.c(),n.m(e,null)))},i:L,o:L,d(u){u&&c(e),n.d(),t=!1,a()}}}function ve(l,e,t){let a="dark";function i(){t(0,a=a==="dark"?"light":"dark"),document.documentElement.setAttribute("theme",a),localStorage.setItem("theme",a)}return se(()=>{localStorage.getItem("theme")==="light"&&i()}),[a,i]}class ge extends O{constructor(e){super(),C(this,e,ve,pe,G,{})}}function ae(l,e,t){const a=l.slice();return a[2]=e[t][0],a[3]=e[t][1],a}function re(l){let e,t=l[2]+"",a;return{c(){e=_("a"),a=q(t),this.h()},l(i){e=p(i,"A",{href:!0,class:!0});var o=y(e);a=V(o,t),o.forEach(c),this.h()},h(){s(e,"href",l[3]),s(e,"class","navbar-item svelte-rpm6s3")},m(i,o){A(i,e,o),m(e,a)},p:L,d(i){i&&c(e)}}}function be(l){let e,t,a,i,o,n,u,g,f,E,w,I,b,r,v,k,T,H,J,B,K,ee;n=new ge({});let D=Object.entries(l[0]),$=[];for(let h=0;h<D.length;h+=1)$[h]=re(ae(l,D,h));return{c(){e=_("nav"),t=_("div"),a=_("a"),i=q("Jeremy Meadows"),o=M(),Q(n.$$.fragment),u=M(),g=M(),f=_("a"),E=_("span"),w=M(),I=_("span"),b=M(),r=_("span"),v=M(),k=_("div"),T=_("div"),H=M(),J=_("div");for(let h=0;h<$.length;h+=1)$[h].c();this.h()},l(h){e=p(h,"NAV",{class:!0,"aria-label":!0});var S=y(e);t=p(S,"DIV",{class:!0});var d=y(t);a=p(d,"A",{href:!0,class:!0});var j=y(a);i=V(j,"Jeremy Meadows"),j.forEach(c),o=x(d),R(n.$$.fragment,d),u=x(d),g=x(d),f=p(d,"A",{id:!0,role:!0,class:!0,"aria-label":!0,"aria-expanded":!0,"data-target":!0,tabindex:!0});var N=y(f);E=p(N,"SPAN",{"aria-hidden":!0}),y(E).forEach(c),w=x(N),I=p(N,"SPAN",{"aria-hidden":!0}),y(I).forEach(c),b=x(N),r=p(N,"SPAN",{"aria-hidden":!0}),y(r).forEach(c),N.forEach(c),d.forEach(c),v=x(S),k=p(S,"DIV",{id:!0,class:!0});var F=y(k);T=p(F,"DIV",{class:!0}),y(T).forEach(c),H=x(F),J=p(F,"DIV",{class:!0});var te=y(J);for(let U=0;U<$.length;U+=1)$[U].l(te);te.forEach(c),F.forEach(c),S.forEach(c),this.h()},h(){s(a,"href","/"),s(a,"class","navbar-item svelte-rpm6s3"),s(E,"aria-hidden","true"),s(I,"aria-hidden","true"),s(r,"aria-hidden","true"),s(f,"id","burger-menu"),s(f,"role","button"),s(f,"class","navbar-burger"),s(f,"aria-label","menu"),s(f,"aria-expanded","false"),s(f,"data-target","navbar-menu"),s(f,"tabindex","0"),s(t,"class","navbar-brand"),s(T,"class","navbar-start"),s(J,"class","navbar-end"),s(k,"id","navbar-menu"),s(k,"class","navbar-menu svelte-rpm6s3"),s(e,"class","navbar is-fixed-top has-shadow svelte-rpm6s3"),s(e,"aria-label","main navigation")},m(h,S){A(h,e,S),m(e,t),m(t,a),m(a,i),m(t,o),W(n,t,null),m(t,u),m(t,g),m(t,f),m(f,E),m(f,w),m(f,I),m(f,b),m(f,r),m(e,v),m(e,k),m(k,T),m(k,H),m(k,J);for(let d=0;d<$.length;d+=1)$[d]&&$[d].m(J,null);B=!0,K||(ee=[Y(f,"click",Z),Y(f,"keypress",Z)],K=!0)},p(h,[S]){if(S&1){D=Object.entries(h[0]);let d;for(d=0;d<D.length;d+=1){const j=ae(h,D,d);$[d]?$[d].p(j,S):($[d]=re(j),$[d].c(),$[d].m(J,null))}for(;d<$.length;d+=1)$[d].d(1);$.length=D.length}},i(h){B||(P(n.$$.fragment,h),B=!0)},o(h){z(n.$$.fragment,h),B=!1},d(h){h&&c(e),X(n),ne($,h),K=!1,le(ee)}}}function Z(){const l=document.getElementById("burger-menu");l.classList.toggle("is-active"),document.getElementById(l.getAttribute("data-target")).classList.toggle("is-active")}function $e(l,e,t){let a;oe(l,fe,o=>t(1,a=o));const i={about_me:"/about",education:"/education",work_experience:"/work_experience",projects:"/projects"};return se(async()=>{var o;(o=document.querySelector(`.navbar-item[href="${document.location.pathname}"]`))==null||o.classList.add("is-current-page")}),l.$$.update=()=>{var o,n,u;l.$$.dirty&2&&a&&(Z(),(o=document.querySelector(".is-current-page"))==null||o.classList.remove("is-current-page"),(u=document.querySelector(`.navbar-item[href="${(n=a.to)==null?void 0:n.url.pathname}"]`))==null||u.classList.add("is-current-page"))},[i,a]}class ye extends O{constructor(e){super(),C(this,e,$e,be,G,{})}}function Ee(l){let e,t,a=new Date().getFullYear()+"",i,o;return{c(){e=_("p"),t=q("©"),i=q(a),o=q(" Jeremy Meadows"),this.h()},l(n){e=p(n,"P",{class:!0});var u=y(e);t=V(u,"©"),i=V(u,a),o=V(u," Jeremy Meadows"),u.forEach(c),this.h()},h(){s(e,"class","center svelte-18b0vlz")},m(n,u){A(n,e,u),m(e,t),m(e,i),m(e,o)},p:L,i:L,o:L,d(n){n&&c(e)}}}function ke(l){return[]}class we extends O{constructor(e){super(),C(this,e,ke,Ee,G,{})}}function Me(l){let e,t,a,i,o,n,u,g,f,E,w;n=new ye({});const I=l[1].default,b=ie(I,l,l[0],null);return E=new we({}),{c(){e=_("meta"),t=_("meta"),a=_("meta"),i=_("meta"),o=M(),Q(n.$$.fragment),u=M(),g=_("main"),b&&b.c(),f=M(),Q(E.$$.fragment),this.h()},l(r){const v=ce("svelte-k4mcr1",document.head);e=p(v,"META",{name:!0,content:!0}),t=p(v,"META",{name:!0,content:!0}),a=p(v,"META",{name:!0,content:!0}),i=p(v,"META",{name:!0,content:!0}),v.forEach(c),o=x(r),R(n.$$.fragment,r),u=x(r),g=p(r,"MAIN",{class:!0});var k=y(g);b&&b.l(k),k.forEach(c),f=x(r),R(E.$$.fragment,r),this.h()},h(){document.title="Jeremy Meadows",s(e,"name","author"),s(e,"content","Jeremy Meadows"),s(t,"name","description"),s(t,"content","150 words"),s(a,"name","url"),s(a,"content","jeremymeadows.github.io"),s(i,"name","keywords"),s(i,"content","Jeremy Meadows, Jeremy, Meadows"),s(g,"class","svelte-nidt2z")},m(r,v){m(document.head,e),m(document.head,t),m(document.head,a),m(document.head,i),A(r,o,v),W(n,r,v),A(r,u,v),A(r,g,v),b&&b.m(g,null),A(r,f,v),W(E,r,v),w=!0},p(r,[v]){b&&b.p&&(!w||v&1)&&ue(b,I,r,r[0],w?me(I,r[0],v,null):de(r[0]),null)},i(r){w||(P(n.$$.fragment,r),P(b,r),P(E.$$.fragment,r),w=!0)},o(r){z(n.$$.fragment,r),z(b,r),z(E.$$.fragment,r),w=!1},d(r){c(e),c(t),c(a),c(i),r&&c(o),X(n,r),r&&c(u),r&&c(g),b&&b.d(r),r&&c(f),X(E,r)}}}function xe(l,e,t){let{$$slots:a={},$$scope:i}=e;return l.$$set=o=>{"$$scope"in o&&t(0,i=o.$$scope)},[i,a]}class Se extends O{constructor(e){super(),C(this,e,xe,Me,G,{})}}export{Se as default};
