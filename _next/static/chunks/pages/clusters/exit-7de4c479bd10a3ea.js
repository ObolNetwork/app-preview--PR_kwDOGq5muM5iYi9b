(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[232],{21918:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/clusters/exit",function(){return n(60969)}])},60969:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var r=n(85893),c=n(8478),s=n(67294),l=n(18190),o=n(21237),u=n(11163),a=n(9765);let i=e=>{if("exit-cluster"===e.type){let t=e.route.indexOf("{0}")>-1?"/clusters/list":e.route;return(0,r.jsx)(c.kC,{direction:"column",css:{gap:"$2xl"},children:(0,r.jsx)(c.zx,{as:c.rU,fullWidth:!0,href:t,css:{color:"$bg01","&:hover":{color:"$bg01",textDecoration:"none"}},children:e.label})})}return null},p=e=>a.Mp.map((t,n)=>{let{contentTitle:c,contentSection:s,enableNextStep:u,rank:a,term:p,value:x,title:d,cta:f}=t,h=e&&f?{...f,route:f.route.replace("{0}",e)}:f;return{content:(e,t,n,o)=>(0,r.jsx)(l.ns,{contentTitle:c,title:d,contentSection:s,rank:e,onAccept:n,onBack:o,enableNextStep:t,term:p,children:h&&(0,r.jsx)(i,{...h})}),enableNextStep:u,rank:a,state:(0,o.d$)(n),value:x,title:d,term:p}}),x=()=>{let e=(0,u.useRouter)(),t=(0,o.xs)(e,"ctaRouteValue"),[n,l]=(0,s.useState)(p(t)),[a,i]=(0,s.useState)(n[0]),x=e=>{l(n.map(t=>t.rank===e+1?(i(t),{...t,state:"enabled"}):t))},d=e=>{l(n.map(t=>t.rank===e?{...t,state:"upcoming"}:t));let t=n.find(t=>t.rank===e-1);t&&i(t)},f=()=>{},h=e=>{i(e)};return(0,r.jsxs)(c.kC,{direction:"column",css:{gap:"$2xl",px:"15%",py:"5%"},children:[(0,r.jsx)(c.xv,{variant:"h3",children:"Exit Clusters"}),(0,r.jsx)(c.I,{itemSelected:a,items:n,onItemChange:h,onComplete:f,onUpdateState:x,onBack:d})]})};var d=x}},function(e){e.O(0,[774,888,179],function(){return e(e.s=21918)}),_N_E=e.O()}]);