import{u as S,d as y,aX as C,r as D,j as e,S as o,v as k,b2 as E,aj as H}from"./index-DzniXKr6.js";import{U as T}from"./UserItem-VX8er4h7.js";import{b as v,a as w}from"./Menu-CsxIfhZM.js";import{D as B,a as F}from"./DialogTitle-CuiSdGNw.js";import{T as I}from"./Typography-WEqvqQe5.js";import{B as c}from"./Button-Ar-Ars-G.js";import"./ListItem-JCRUsbQY.js";import"./Menu-D56s9vmV.js";import"./Modal-DWK17faB.js";import"./isMuiElement-3IplVnOk.js";import"./Avatar-0R8LXdz1.js";import"./IconButton-BwCM-hay.js";import"./Delete-Bvt8ci42.js";const P=({chatId:n})=>{var d,m;const l=S(),{isAddMember:p}=y(s=>s.misc),{isLoading:u,data:r,isError:b,error:x}=C(n),[g,h]=v(E),[a,j]=D.useState([]),M=s=>{j(i=>i.includes(s)?i.filter(A=>A!==s):[...i,s])},t=()=>{l(H(!1))},f=()=>{g("Adding Members...",{members:a,chatId:n}),t()};return w([{isError:b,error:x}]),e.jsx(B,{open:p,onClose:t,children:e.jsxs(o,{p:"2rem",width:"20rem",spacing:"2rem",children:[e.jsx(F,{textAlign:"center",children:"Add Member"}),e.jsx(o,{spacing:"1rem",children:u?e.jsx(k,{}):((d=r==null?void 0:r.friends)==null?void 0:d.length)>0?(m=r==null?void 0:r.friends)==null?void 0:m.map(s=>e.jsx(T,{user:s,handler:M,isAdded:a.includes(s._id)},s._id)):e.jsx(I,{textAlign:"center",children:"No Friends"})}),e.jsxs(o,{direction:"row",alignItems:"center",justifyContent:"space-evenly",children:[e.jsx(c,{color:"error",onClick:t,children:"Cancel"}),e.jsx(c,{onClick:f,variant:"contained",disabled:h,children:"Submit Changes"})]})]})})};export{P as default};