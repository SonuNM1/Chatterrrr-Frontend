import{j as d,z as C,B as j,D as m,F as n,r as g,G as w,H as D,J as I,K as F}from"./index-DzniXKr6.js";import{c as M}from"./Typography-WEqvqQe5.js";const P=M(d.jsx("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");function S(a){return C("MuiAvatar",a)}const z=j("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]),$=z,N=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],U=a=>{const{classes:r,variant:t,colorDefault:e}=a;return F({root:["root",t,e&&"colorDefault"],img:["img"],fallback:["fallback"]},S,r)},E=m("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(a,r)=>{const{ownerState:t}=a;return[r.root,r[t.variant],t.colorDefault&&r.colorDefault]}})(({theme:a})=>({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:a.typography.fontFamily,fontSize:a.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none",variants:[{props:{variant:"rounded"},style:{borderRadius:(a.vars||a).shape.borderRadius}},{props:{variant:"square"},style:{borderRadius:0}},{props:{colorDefault:!0},style:n({color:(a.vars||a).palette.background.default},a.vars?{backgroundColor:a.vars.palette.Avatar.defaultBg}:n({backgroundColor:a.palette.grey[400]},a.applyStyles("dark",{backgroundColor:a.palette.grey[600]})))}]})),L=m("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(a,r)=>r.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),_=m(P,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(a,r)=>r.fallback})({width:"75%",height:"75%"});function q({crossOrigin:a,referrerPolicy:r,src:t,srcSet:e}){const[l,o]=g.useState(!1);return g.useEffect(()=>{if(!t&&!e)return;o(!1);let i=!0;const s=new Image;return s.onload=()=>{i&&o("loaded")},s.onerror=()=>{i&&o("error")},s.crossOrigin=a,s.referrerPolicy=r,s.src=t,e&&(s.srcset=e),()=>{i=!1}},[a,r,t,e]),l}const B=g.forwardRef(function(r,t){const e=w({props:r,name:"MuiAvatar"}),{alt:l,children:o,className:i,component:s="div",imgProps:y,sizes:x,src:p,srcSet:v,variant:A="circular"}=e,k=D(e,N);let c=null;const R=q(n({},y,{src:p,srcSet:v})),b=p||v,h=b&&R!=="error",u=n({},e,{colorDefault:!h,component:s,variant:A}),f=U(u);return h?c=d.jsx(L,n({alt:l,srcSet:v,src:p,sizes:x,ownerState:u,className:f.img},y)):o||o===0?c=o:b&&l?c=l[0]:c=d.jsx(_,{ownerState:u,className:f.fallback}),d.jsx(E,n({as:s,ownerState:u,className:I(f.root,i),ref:t},k,{children:c}))}),G=B;export{G as A,$ as a};