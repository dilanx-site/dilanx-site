import{S as H,i as V,s as j,l as b,u as z,a as I,m as $,p as k,v as P,h as u,c as q,q as h,b as w,I as g,n as A,e as K,M as v,N as pe,O as F,f as m,g as W,t as d,d as G,F as X,x as L,y as D,z as S,J as Y,K as Z,L as y,C as T,w as Ee,o as de,P as Ne,Q as we}from"./index-09afa4d5.js";function Ie(r){let e,t,n,l,a,s,f="2.0.9",i,o,_,p,N,c,E,O,U,M,J,ee,R,te;return{c(){e=b("footer"),t=b("p"),n=z("Copyright \xA9 2022 Dilan Nair"),l=I(),a=b("p"),s=z("SITE VERSION "),i=z(f),o=I(),_=b("p"),p=b("a"),N=z("System Status"),c=z(` |
    `),E=b("a"),O=z("Sponsor"),U=z(` |
    `),M=b("a"),J=z("Privacy"),ee=z(`
    | `),R=b("a"),te=z("Attributions"),this.h()},l(Q){e=$(Q,"FOOTER",{class:!0});var B=k(e);t=$(B,"P",{class:!0});var ae=k(t);n=P(ae,"Copyright \xA9 2022 Dilan Nair"),ae.forEach(u),l=q(B),a=$(B,"P",{class:!0});var ne=k(a);s=P(ne,"SITE VERSION "),i=P(ne,f),ne.forEach(u),o=q(B),_=$(B,"P",{class:!0});var C=k(_);p=$(C,"A",{href:!0,class:!0});var ie=k(p);N=P(ie,"System Status"),ie.forEach(u),c=P(C,` |
    `),E=$(C,"A",{href:!0,class:!0});var fe=k(E);O=P(fe,"Sponsor"),fe.forEach(u),U=P(C,` |
    `),M=$(C,"A",{href:!0,class:!0});var re=k(M);J=P(re,"Privacy"),re.forEach(u),ee=P(C,`
    | `),R=$(C,"A",{href:!0,class:!0});var oe=k(R);te=P(oe,"Attributions"),oe.forEach(u),C.forEach(u),B.forEach(u),this.h()},h(){h(t,"class","svelte-1qn76rg"),h(a,"class","version svelte-1qn76rg"),h(p,"href","https://dilan.statuspage.io"),h(p,"class","svelte-1qn76rg"),h(E,"href","https://github.com/sponsors/dilanx"),h(E,"class","svelte-1qn76rg"),h(M,"href","/privacy"),h(M,"class","svelte-1qn76rg"),h(R,"href","/attributions"),h(R,"class","svelte-1qn76rg"),h(_,"class","svelte-1qn76rg"),h(e,"class","svelte-1qn76rg")},m(Q,B){w(Q,e,B),g(e,t),g(t,n),g(e,l),g(e,a),g(a,s),g(a,i),g(e,o),g(e,_),g(_,p),g(p,N),g(_,c),g(_,E),g(E,O),g(_,U),g(_,M),g(M,J),g(_,ee),g(_,R),g(R,te)},p:A,i:A,o:A,d(Q){Q&&u(e)}}}class rt extends H{constructor(e){super(),V(this,e,null,Ie,j,{})}}function ue(r){let e,t,n,l,a;return{c(){e=b("a"),t=b("i"),l=I(),a=b("a"),this.h()},l(s){e=$(s,"A",{class:!0,href:!0});var f=k(e);t=$(f,"I",{class:!0}),k(t).forEach(u),f.forEach(u),l=q(s),a=$(s,"A",{class:!0,id:!0}),k(a).forEach(u),this.h()},h(){h(t,"class","fa-solid fa-link"),h(e,"class","button svelte-1xu3bt0"),h(e,"href",n="#"+r[0]),h(a,"class","anchor svelte-1xu3bt0"),h(a,"id",r[0])},m(s,f){w(s,e,f),g(e,t),w(s,l,f),w(s,a,f)},p(s,f){f&1&&n!==(n="#"+s[0])&&h(e,"href",n),f&1&&h(a,"id",s[0])},d(s){s&&u(e),s&&u(l),s&&u(a)}}}function qe(r){let e,t=r[0]&&ue(r);return{c(){t&&t.c(),e=K()},l(n){t&&t.l(n),e=K()},m(n,l){t&&t.m(n,l),w(n,e,l)},p(n,[l]){n[0]?t?t.p(n,l):(t=ue(n),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:A,o:A,d(n){t&&t.d(n),n&&u(e)}}}function Le(r,e,t){let{anchor:n=void 0}=e;return r.$$set=l=>{"anchor"in l&&t(0,n=l.anchor)},[n]}class se extends H{constructor(e){super(),V(this,e,Le,qe,j,{anchor:0})}}function ce(r,e,t){const n=r.slice();return n[2]=e[t].icon,n[3]=e[t].url,n}function he(r){let e,t,n,l,a;return{c(){e=b("a"),t=b("i"),l=I(),this.h()},l(s){e=$(s,"A",{href:!0,class:!0});var f=k(e);t=$(f,"I",{class:!0}),k(t).forEach(u),l=q(f),f.forEach(u),this.h()},h(){h(t,"class",n=F(r[2])+" svelte-eievq6"),h(e,"href",a=r[3]),h(e,"class","svelte-eievq6")},m(s,f){w(s,e,f),g(e,t),g(e,l)},p(s,f){f&2&&n!==(n=F(s[2])+" svelte-eievq6")&&h(t,"class",n),f&2&&a!==(a=s[3])&&h(e,"href",a)},d(s){s&&u(e)}}}function De(r){let e,t=r[1],n=[];for(let l=0;l<t.length;l+=1)n[l]=he(ce(r,t,l));return{c(){e=b("div");for(let l=0;l<n.length;l+=1)n[l].c();this.h()},l(l){e=$(l,"DIV",{class:!0});var a=k(e);for(let s=0;s<n.length;s+=1)n[s].l(a);a.forEach(u),this.h()},h(){h(e,"class","svelte-eievq6"),v(e,"large",r[0])},m(l,a){w(l,e,a);for(let s=0;s<n.length;s+=1)n[s].m(e,null)},p(l,[a]){if(a&2){t=l[1];let s;for(s=0;s<t.length;s+=1){const f=ce(l,t,s);n[s]?n[s].p(f,a):(n[s]=he(f),n[s].c(),n[s].m(e,null))}for(;s<n.length;s+=1)n[s].d(1);n.length=t.length}a&1&&v(e,"large",l[0])},i:A,o:A,d(l){l&&u(e),pe(n,l)}}}function Se(r,e,t){let{large:n}=e,{socials:l}=e;return r.$$set=a=>{"large"in a&&t(0,n=a.large),"socials"in a&&t(1,l=a.socials)},[n,l]}class Te extends H{constructor(e){super(),V(this,e,Se,De,j,{large:0,socials:1})}}function _e(r){let e,t,n,l,a;const s=r[8].default,f=X(s,r,r[7],null);return n=new se({props:{anchor:r[5]}}),{c(){e=b("h1"),f&&f.c(),t=I(),L(n.$$.fragment),this.h()},l(i){e=$(i,"H1",{class:!0});var o=k(e);f&&f.l(o),t=q(o),D(n.$$.fragment,o),o.forEach(u),this.h()},h(){h(e,"class",l=F(r[6])+" svelte-97tqn2"),v(e,"hidden",r[3]),v(e,"large",r[4])},m(i,o){w(i,e,o),f&&f.m(e,null),g(e,t),S(n,e,null),a=!0},p(i,o){f&&f.p&&(!a||o&128)&&Y(f,s,i,i[7],a?y(s,i[7],o,null):Z(i[7]),null);const _={};o&32&&(_.anchor=i[5]),n.$set(_),(!a||o&64&&l!==(l=F(i[6])+" svelte-97tqn2"))&&h(e,"class",l),o&72&&v(e,"hidden",i[3]),o&80&&v(e,"large",i[4])},i(i){a||(m(f,i),m(n.$$.fragment,i),a=!0)},o(i){d(f,i),d(n.$$.fragment,i),a=!1},d(i){i&&u(e),f&&f.d(i),T(n)}}}function ge(r){let e,t,n,l,a;const s=r[8].default,f=X(s,r,r[7],null);return n=new se({props:{anchor:r[5]}}),{c(){e=b("h2"),f&&f.c(),t=I(),L(n.$$.fragment),this.h()},l(i){e=$(i,"H2",{class:!0});var o=k(e);f&&f.l(o),t=q(o),D(n.$$.fragment,o),o.forEach(u),this.h()},h(){h(e,"class",l=F(r[6])+" svelte-97tqn2"),v(e,"hidden",r[3]),v(e,"large",r[4])},m(i,o){w(i,e,o),f&&f.m(e,null),g(e,t),S(n,e,null),a=!0},p(i,o){f&&f.p&&(!a||o&128)&&Y(f,s,i,i[7],a?y(s,i[7],o,null):Z(i[7]),null);const _={};o&32&&(_.anchor=i[5]),n.$set(_),(!a||o&64&&l!==(l=F(i[6])+" svelte-97tqn2"))&&h(e,"class",l),o&72&&v(e,"hidden",i[3]),o&80&&v(e,"large",i[4])},i(i){a||(m(f,i),m(n.$$.fragment,i),a=!0)},o(i){d(f,i),d(n.$$.fragment,i),a=!1},d(i){i&&u(e),f&&f.d(i),T(n)}}}function me(r){let e,t,n,l,a;const s=r[8].default,f=X(s,r,r[7],null);return n=new se({props:{anchor:r[5]}}),{c(){e=b("h3"),f&&f.c(),t=I(),L(n.$$.fragment),this.h()},l(i){e=$(i,"H3",{class:!0});var o=k(e);f&&f.l(o),t=q(o),D(n.$$.fragment,o),o.forEach(u),this.h()},h(){h(e,"class",l=F(r[6])+" svelte-97tqn2"),v(e,"hidden",r[3]),v(e,"large",r[4])},m(i,o){w(i,e,o),f&&f.m(e,null),g(e,t),S(n,e,null),a=!0},p(i,o){f&&f.p&&(!a||o&128)&&Y(f,s,i,i[7],a?y(s,i[7],o,null):Z(i[7]),null);const _={};o&32&&(_.anchor=i[5]),n.$set(_),(!a||o&64&&l!==(l=F(i[6])+" svelte-97tqn2"))&&h(e,"class",l),o&72&&v(e,"hidden",i[3]),o&80&&v(e,"large",i[4])},i(i){a||(m(f,i),m(n.$$.fragment,i),a=!0)},o(i){d(f,i),d(n.$$.fragment,i),a=!1},d(i){i&&u(e),f&&f.d(i),T(n)}}}function Ae(r){let e,t,n,l,a=r[0]&&_e(r),s=r[1]&&ge(r),f=r[2]&&me(r);return{c(){a&&a.c(),e=I(),s&&s.c(),t=I(),f&&f.c(),n=K()},l(i){a&&a.l(i),e=q(i),s&&s.l(i),t=q(i),f&&f.l(i),n=K()},m(i,o){a&&a.m(i,o),w(i,e,o),s&&s.m(i,o),w(i,t,o),f&&f.m(i,o),w(i,n,o),l=!0},p(i,[o]){i[0]?a?(a.p(i,o),o&1&&m(a,1)):(a=_e(i),a.c(),m(a,1),a.m(e.parentNode,e)):a&&(W(),d(a,1,1,()=>{a=null}),G()),i[1]?s?(s.p(i,o),o&2&&m(s,1)):(s=ge(i),s.c(),m(s,1),s.m(t.parentNode,t)):s&&(W(),d(s,1,1,()=>{s=null}),G()),i[2]?f?(f.p(i,o),o&4&&m(f,1)):(f=me(i),f.c(),m(f,1),f.m(n.parentNode,n)):f&&(W(),d(f,1,1,()=>{f=null}),G())},i(i){l||(m(a),m(s),m(f),l=!0)},o(i){d(a),d(s),d(f),l=!1},d(i){a&&a.d(i),i&&u(e),s&&s.d(i),i&&u(t),f&&f.d(i),i&&u(n)}}}function He(r,e,t){let{$$slots:n={},$$scope:l}=e,{h1:a}=e,{h2:s}=e,{h3:f}=e,{hidden:i}=e,{large:o}=e,{anchor:_}=e,{className:p}=e;return r.$$set=N=>{"h1"in N&&t(0,a=N.h1),"h2"in N&&t(1,s=N.h2),"h3"in N&&t(2,f=N.h3),"hidden"in N&&t(3,i=N.hidden),"large"in N&&t(4,o=N.large),"anchor"in N&&t(5,_=N.anchor),"className"in N&&t(6,p=N.className),"$$scope"in N&&t(7,l=N.$$scope)},[a,s,f,i,o,_,p,l,n]}class be extends H{constructor(e){super(),V(this,e,He,Ae,j,{h1:0,h2:1,h3:2,hidden:3,large:4,anchor:5,className:6})}}function Ve(r){let e,t;return e=new be({props:{h1:r[0],h2:r[1],h3:r[2],hidden:r[3],large:r[4],anchor:r[5],className:r[6],$$slots:{default:[ze]},$$scope:{ctx:r}}}),{c(){L(e.$$.fragment)},l(n){D(e.$$.fragment,n)},m(n,l){S(e,n,l),t=!0},p(n,l){const a={};l&1&&(a.h1=n[0]),l&2&&(a.h2=n[1]),l&4&&(a.h3=n[2]),l&8&&(a.hidden=n[3]),l&16&&(a.large=n[4]),l&32&&(a.anchor=n[5]),l&64&&(a.className=n[6]),l&512&&(a.$$scope={dirty:l,ctx:n}),e.$set(a)},i(n){t||(m(e.$$.fragment,n),t=!0)},o(n){d(e.$$.fragment,n),t=!1},d(n){T(e,n)}}}function je(r){let e,t,n,l;t=new be({props:{h1:r[0],h2:r[1],h3:r[2],hidden:r[3],large:r[4],anchor:r[5],className:r[6],$$slots:{default:[Pe]},$$scope:{ctx:r}}});let a=r[7]&&ve(r);return{c(){e=b("div"),L(t.$$.fragment),n=I(),a&&a.c(),this.h()},l(s){e=$(s,"DIV",{class:!0});var f=k(e);D(t.$$.fragment,f),n=q(f),a&&a.l(f),f.forEach(u),this.h()},h(){h(e,"class","container svelte-1wts15"),v(e,"large",r[4])},m(s,f){w(s,e,f),S(t,e,null),g(e,n),a&&a.m(e,null),l=!0},p(s,f){const i={};f&1&&(i.h1=s[0]),f&2&&(i.h2=s[1]),f&4&&(i.h3=s[2]),f&8&&(i.hidden=s[3]),f&16&&(i.large=s[4]),f&32&&(i.anchor=s[5]),f&64&&(i.className=s[6]),f&512&&(i.$$scope={dirty:f,ctx:s}),t.$set(i),s[7]?a?(a.p(s,f),f&128&&m(a,1)):(a=ve(s),a.c(),m(a,1),a.m(e,null)):a&&(W(),d(a,1,1,()=>{a=null}),G()),f&16&&v(e,"large",s[4])},i(s){l||(m(t.$$.fragment,s),m(a),l=!0)},o(s){d(t.$$.fragment,s),d(a),l=!1},d(s){s&&u(e),T(t),a&&a.d()}}}function ze(r){let e;const t=r[8].default,n=X(t,r,r[9],null);return{c(){n&&n.c()},l(l){n&&n.l(l)},m(l,a){n&&n.m(l,a),e=!0},p(l,a){n&&n.p&&(!e||a&512)&&Y(n,t,l,l[9],e?y(t,l[9],a,null):Z(l[9]),null)},i(l){e||(m(n,l),e=!0)},o(l){d(n,l),e=!1},d(l){n&&n.d(l)}}}function Pe(r){let e;const t=r[8].default,n=X(t,r,r[9],null);return{c(){n&&n.c()},l(l){n&&n.l(l)},m(l,a){n&&n.m(l,a),e=!0},p(l,a){n&&n.p&&(!e||a&512)&&Y(n,t,l,l[9],e?y(t,l[9],a,null):Z(l[9]),null)},i(l){e||(m(n,l),e=!0)},o(l){d(n,l),e=!1},d(l){n&&n.d(l)}}}function ve(r){let e,t;return e=new Te({props:{large:r[4],socials:r[7]}}),{c(){L(e.$$.fragment)},l(n){D(e.$$.fragment,n)},m(n,l){S(e,n,l),t=!0},p(n,l){const a={};l&16&&(a.large=n[4]),l&128&&(a.socials=n[7]),e.$set(a)},i(n){t||(m(e.$$.fragment,n),t=!0)},o(n){d(e.$$.fragment,n),t=!1},d(n){T(e,n)}}}function Me(r){let e,t,n,l;const a=[je,Ve],s=[];function f(i,o){return i[7]?0:1}return e=f(r),t=s[e]=a[e](r),{c(){t.c(),n=K()},l(i){t.l(i),n=K()},m(i,o){s[e].m(i,o),w(i,n,o),l=!0},p(i,[o]){let _=e;e=f(i),e===_?s[e].p(i,o):(W(),d(s[_],1,1,()=>{s[_]=null}),G(),t=s[e],t?t.p(i,o):(t=s[e]=a[e](i),t.c()),m(t,1),t.m(n.parentNode,n))},i(i){l||(m(t),l=!0)},o(i){d(t),l=!1},d(i){s[e].d(i),i&&u(n)}}}function Oe(r,e,t){let{$$slots:n={},$$scope:l}=e,{h1:a=!1}=e,{h2:s=!1}=e,{h3:f=!1}=e,{hidden:i=!1}=e,{large:o=!1}=e,{anchor:_=void 0}=e,{class:p=void 0}=e,{socials:N=void 0}=e;return r.$$set=c=>{"h1"in c&&t(0,a=c.h1),"h2"in c&&t(1,s=c.h2),"h3"in c&&t(2,f=c.h3),"hidden"in c&&t(3,i=c.hidden),"large"in c&&t(4,o=c.large),"anchor"in c&&t(5,_=c.anchor),"class"in c&&t(6,p=c.class),"socials"in c&&t(7,N=c.socials),"$$scope"in c&&t(9,l=c.$$scope)},[a,s,f,i,o,_,p,N,n,l]}class ot extends H{constructor(e){super(),V(this,e,Oe,Me,j,{h1:0,h2:1,h3:2,hidden:3,large:4,anchor:5,class:6,socials:7})}}function Fe(r){let e,t,n,l;return{c(){e=b("li"),t=b("a"),n=b("i"),this.h()},l(a){e=$(a,"LI",{class:!0});var s=k(e);t=$(s,"A",{href:!0,class:!0});var f=k(t);n=$(f,"I",{class:!0}),k(n).forEach(u),f.forEach(u),s.forEach(u),this.h()},h(){h(n,"class",l=F(r[1])+" svelte-vd8joo"),h(t,"href",r[0]),h(t,"class","svelte-vd8joo"),h(e,"class","svelte-vd8joo")},m(a,s){w(a,e,s),g(e,t),g(t,n)},p(a,[s]){s&2&&l!==(l=F(a[1])+" svelte-vd8joo")&&h(n,"class",l),s&1&&h(t,"href",a[0])},i:A,o:A,d(a){a&&u(e)}}}function Be(r,e,t){let{to:n}=e,{icon:l}=e;return r.$$set=a=>{"to"in a&&t(0,n=a.to),"icon"in a&&t(1,l=a.icon)},[n,l]}class x extends H{constructor(e){super(),V(this,e,Be,Fe,j,{to:0,icon:1})}}function Ce(r){let e,t,n,l,a,s,f,i,o;return t=new x({props:{to:"https://instagram.com/dilan4k",icon:"fab fa-instagram"}}),l=new x({props:{to:"https://github.com/dilanx",icon:"fab fa-github"}}),s=new x({props:{to:"https://twitter.com/dilans4k",icon:"fab fa-twitter"}}),i=new x({props:{to:"https://linkedin.com/in/dilann",icon:"fab fa-linkedin"}}),{c(){e=b("ul"),L(t.$$.fragment),n=I(),L(l.$$.fragment),a=I(),L(s.$$.fragment),f=I(),L(i.$$.fragment),this.h()},l(_){e=$(_,"UL",{class:!0});var p=k(e);D(t.$$.fragment,p),n=q(p),D(l.$$.fragment,p),a=q(p),D(s.$$.fragment,p),f=q(p),D(i.$$.fragment,p),p.forEach(u),this.h()},h(){h(e,"class","svelte-1u57mm7"),v(e,"big",r[0])},m(_,p){w(_,e,p),S(t,e,null),g(e,n),S(l,e,null),g(e,a),S(s,e,null),g(e,f),S(i,e,null),o=!0},p(_,[p]){p&1&&v(e,"big",_[0])},i(_){o||(m(t.$$.fragment,_),m(l.$$.fragment,_),m(s.$$.fragment,_),m(i.$$.fragment,_),o=!0)},o(_){d(t.$$.fragment,_),d(l.$$.fragment,_),d(s.$$.fragment,_),d(i.$$.fragment,_),o=!1},d(_){_&&u(e),T(t),T(l),T(s),T(i)}}}function Re(r,e,t){let{big:n}=e;return r.$$set=l=>{"big"in l&&t(0,n=l.big)},[n]}class $e extends H{constructor(e){super(),V(this,e,Re,Ce,j,{big:0})}}function Ue(r){let e,t,n;return{c(){e=b("li"),t=b("a"),n=z(r[1]),this.h()},l(l){e=$(l,"LI",{class:!0});var a=k(e);t=$(a,"A",{href:!0,class:!0});var s=k(t);n=P(s,r[1]),s.forEach(u),a.forEach(u),this.h()},h(){h(t,"href",r[0]),h(t,"class","svelte-1jszjx4"),v(t,"active",r[2]),h(e,"class","svelte-1jszjx4")},m(l,a){w(l,e,a),g(e,t),g(t,n)},p(l,[a]){a&2&&Ee(n,l[1]),a&1&&h(t,"href",l[0]),a&4&&v(t,"active",l[2])},i:A,o:A,d(l){l&&u(e)}}}function Je(r,e,t){let{to:n}=e,{title:l}=e,a=!1;return de(()=>{t(2,a=window.location.pathname.startsWith(n))}),r.$$set=s=>{"to"in s&&t(0,n=s.to),"title"in s&&t(1,l=s.title)},[n,l,a]}class le extends H{constructor(e){super(),V(this,e,Je,Ue,j,{to:0,title:1})}}function Ke(r){let e,t,n,l,a,s,f;return t=new le({props:{to:"/projects",title:"Projects"}}),l=new le({props:{to:"https://dilan.blog",title:"Blog"}}),s=new le({props:{to:"https://dilan.statuspage.io",title:"Status"}}),{c(){e=b("ul"),L(t.$$.fragment),n=I(),L(l.$$.fragment),a=I(),L(s.$$.fragment),this.h()},l(i){e=$(i,"UL",{class:!0});var o=k(e);D(t.$$.fragment,o),n=q(o),D(l.$$.fragment,o),a=q(o),D(s.$$.fragment,o),o.forEach(u),this.h()},h(){h(e,"class","svelte-1u57mm7"),v(e,"big",r[0])},m(i,o){w(i,e,o),S(t,e,null),g(e,n),S(l,e,null),g(e,a),S(s,e,null),f=!0},p(i,[o]){o&1&&v(e,"big",i[0])},i(i){f||(m(t.$$.fragment,i),m(l.$$.fragment,i),m(s.$$.fragment,i),f=!0)},o(i){d(t.$$.fragment,i),d(l.$$.fragment,i),d(s.$$.fragment,i),f=!1},d(i){i&&u(e),T(t),T(l),T(s)}}}function Qe(r,e,t){let{big:n}=e;return r.$$set=l=>{"big"in l&&t(0,n=l.big)},[n]}class ke extends H{constructor(e){super(),V(this,e,Qe,Ke,j,{big:0})}}function We(r){let e,t,n,l,a;return t=new ke({props:{big:r[0]}}),l=new $e({props:{big:r[0]}}),{c(){e=b("div"),L(t.$$.fragment),n=I(),L(l.$$.fragment),this.h()},l(s){e=$(s,"DIV",{class:!0});var f=k(e);D(t.$$.fragment,f),n=q(f),D(l.$$.fragment,f),f.forEach(u),this.h()},h(){h(e,"class","svelte-199ghs0")},m(s,f){w(s,e,f),S(t,e,null),g(e,n),S(l,e,null),a=!0},p(s,[f]){const i={};f&1&&(i.big=s[0]),t.$set(i);const o={};f&1&&(o.big=s[0]),l.$set(o)},i(s){a||(m(t.$$.fragment,s),m(l.$$.fragment,s),a=!0)},o(s){d(t.$$.fragment,s),d(l.$$.fragment,s),a=!1},d(s){s&&u(e),T(t),T(l)}}}function Ge(r,e,t){let{big:n}=e;return r.$$set=l=>{"big"in l&&t(0,n=l.big)},[n]}class Xe extends H{constructor(e){super(),V(this,e,Ge,We,j,{big:0})}}function Ye(r){let e,t,n,l,a;return{c(){e=b("div"),t=b("button"),n=b("div"),this.h()},l(s){e=$(s,"DIV",{class:!0});var f=k(e);t=$(f,"BUTTON",{class:!0});var i=k(t);n=$(i,"DIV",{class:!0}),k(n).forEach(u),i.forEach(u),f.forEach(u),this.h()},h(){h(n,"class","layer-2 svelte-1hydrgz"),h(t,"class","layer-1 svelte-1hydrgz"),h(e,"class","layer-0 svelte-1hydrgz"),v(e,"big",r[0]),v(e,"open",r[1])},m(s,f){w(s,e,f),g(e,t),g(t,n),l||(a=Ne(t,"click",r[2]),l=!0)},p(s,[f]){f&1&&v(e,"big",s[0]),f&2&&v(e,"open",s[1])},i:A,o:A,d(s){s&&u(e),l=!1,a()}}}function Ze(r,e,t){let{big:n}=e,{open:l}=e;function a(s){we.call(this,r,s)}return r.$$set=s=>{"big"in s&&t(0,n=s.big),"open"in s&&t(1,l=s.open)},[n,l,a]}class ye extends H{constructor(e){super(),V(this,e,Ze,Ye,j,{big:0,open:1})}}function xe(r){let e,t,n,l,a;return t=new ke({props:{big:r[0]}}),l=new $e({props:{big:r[0]}}),{c(){e=b("div"),L(t.$$.fragment),n=I(),L(l.$$.fragment),this.h()},l(s){e=$(s,"DIV",{class:!0});var f=k(e);D(t.$$.fragment,f),n=q(f),D(l.$$.fragment,f),f.forEach(u),this.h()},h(){h(e,"class","svelte-hvd1aq")},m(s,f){w(s,e,f),S(t,e,null),g(e,n),S(l,e,null),a=!0},p(s,[f]){const i={};f&1&&(i.big=s[0]),t.$set(i);const o={};f&1&&(o.big=s[0]),l.$set(o)},i(s){a||(m(t.$$.fragment,s),m(l.$$.fragment,s),a=!0)},o(s){d(t.$$.fragment,s),d(l.$$.fragment,s),a=!1},d(s){s&&u(e),T(t),T(l)}}}function et(r,e,t){let{big:n}=e;return r.$$set=l=>{"big"in l&&t(0,n=l.big)},[n]}class tt extends H{constructor(e){super(),V(this,e,et,xe,j,{big:0})}}function nt(r){let e,t,n;return{c(){e=b("div"),t=b("a"),n=z("Dilan N"),this.h()},l(l){e=$(l,"DIV",{class:!0});var a=k(e);t=$(a,"A",{href:!0,class:!0});var s=k(t);n=P(s,"Dilan N"),s.forEach(u),a.forEach(u),this.h()},h(){h(t,"href","/"),h(t,"class","svelte-13gtta3"),h(e,"class","svelte-13gtta3"),v(e,"big",r[0]),v(e,"open",r[1])},m(l,a){w(l,e,a),g(e,t),g(t,n)},p(l,[a]){a&1&&v(e,"big",l[0]),a&2&&v(e,"open",l[1])},i:A,o:A,d(l){l&&u(e)}}}function lt(r,e,t){let{big:n}=e,{open:l}=e;return r.$$set=a=>{"big"in a&&t(0,n=a.big),"open"in a&&t(1,l=a.open)},[n,l]}class st extends H{constructor(e){super(),V(this,e,lt,nt,j,{big:0,open:1})}}function at(r){let e,t,n,l,a,s,f,i,o,_,p,N;return t=new st({props:{big:r[1],open:r[0]}}),l=new Xe({props:{big:r[1]}}),s=new ye({props:{big:r[1],open:r[0]}}),s.$on("click",r[3]),o=new tt({props:{big:r[1]}}),{c(){e=b("div"),L(t.$$.fragment),n=I(),L(l.$$.fragment),a=I(),L(s.$$.fragment),f=I(),i=b("div"),L(o.$$.fragment),_=I(),p=b("div"),this.h()},l(c){e=$(c,"DIV",{class:!0});var E=k(e);D(t.$$.fragment,E),n=q(E),D(l.$$.fragment,E),a=q(E),D(s.$$.fragment,E),E.forEach(u),f=q(c),i=$(c,"DIV",{class:!0});var O=k(i);D(o.$$.fragment,O),O.forEach(u),_=q(c),p=$(c,"DIV",{class:!0}),k(p).forEach(u),this.h()},h(){h(e,"class","main svelte-1tfgctr"),v(e,"big",r[1]),v(e,"open",r[0]),h(i,"class","overlay svelte-1tfgctr"),v(i,"open",r[0]),h(p,"class","space svelte-1tfgctr")},m(c,E){w(c,e,E),S(t,e,null),g(e,n),S(l,e,null),g(e,a),S(s,e,null),w(c,f,E),w(c,i,E),S(o,i,null),w(c,_,E),w(c,p,E),N=!0},p(c,[E]){const O={};E&2&&(O.big=c[1]),E&1&&(O.open=c[0]),t.$set(O);const U={};E&2&&(U.big=c[1]),l.$set(U);const M={};E&2&&(M.big=c[1]),E&1&&(M.open=c[0]),s.$set(M),E&2&&v(e,"big",c[1]),E&1&&v(e,"open",c[0]);const J={};E&2&&(J.big=c[1]),o.$set(J),E&1&&v(i,"open",c[0])},i(c){N||(m(t.$$.fragment,c),m(l.$$.fragment,c),m(s.$$.fragment,c),m(o.$$.fragment,c),N=!0)},o(c){d(t.$$.fragment,c),d(l.$$.fragment,c),d(s.$$.fragment,c),d(o.$$.fragment,c),N=!1},d(c){c&&u(e),T(t),T(l),T(s),c&&u(f),c&&u(i),T(o),c&&u(_),c&&u(p)}}}function it(r,e,t){let n,l=!0,a=!1;function s(){t(1,l=document.body.scrollTop>80||document.documentElement.scrollTop<80)}de(()=>{t(2,n=document.body),window.onscroll=()=>s(),window.onresize=()=>t(0,a=!1),s()});const f=()=>{t(0,a=!a)};return r.$$.update=()=>{r.$$.dirty&5&&n&&(a?(document.body.style.overflow="hidden",s()):document.body.style.overflow="auto")},[a,l,n,f]}class ut extends H{constructor(e){super(),V(this,e,it,at,j,{})}}export{rt as F,ot as H,ut as N};
