import{r as b,G as k,B as A,z as E,D as C,E as s,H,F as d,J as y,j as R,K as S}from"./index-DzniXKr6.js";import{f as G}from"./Modal-DWK17faB.js";const V=o=>{const a=b.useRef({});return b.useEffect(()=>{a.current=o}),a.current};function er(o){const{badgeContent:a,invisible:r=!1,max:t=99,showZero:n=!1}=o,l=V({badgeContent:a,max:t});let e=r;r===!1&&a===0&&!n&&(e=!0);const{badgeContent:i,max:g=t}=e?l:o,c=i&&Number(i)>g?`${g}+`:i;return{badgeContent:i,invisible:e,max:g,displayValue:c}}function lr(o){return k}function cr(o){return E("MuiBadge",o)}const gr=A("MuiBadge",["root","badge","dot","standard","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft","invisible","colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","overlapRectangular","overlapCircular","anchorOriginTopLeftCircular","anchorOriginTopLeftRectangular","anchorOriginTopRightCircular","anchorOriginTopRightRectangular","anchorOriginBottomLeftCircular","anchorOriginBottomLeftRectangular","anchorOriginBottomRightCircular","anchorOriginBottomRightRectangular"]),p=gr,pr=["anchorOrigin","className","classes","component","components","componentsProps","children","overlap","color","invisible","max","badgeContent","slots","slotProps","showZero","variant"],P=10,$=4,dr=lr(),ur=o=>{const{color:a,anchorOrigin:r,invisible:t,overlap:n,variant:l,classes:e={}}=o,i={root:["root"],badge:["badge",l,t&&"invisible",`anchorOrigin${s(r.vertical)}${s(r.horizontal)}`,`anchorOrigin${s(r.vertical)}${s(r.horizontal)}${s(n)}`,`overlap${s(n)}`,a!=="default"&&`color${s(a)}`]};return S(i,cr,e)},vr=C("span",{name:"MuiBadge",slot:"Root",overridesResolver:(o,a)=>a.root})({position:"relative",display:"inline-flex",verticalAlign:"middle",flexShrink:0}),fr=C("span",{name:"MuiBadge",slot:"Badge",overridesResolver:(o,a)=>{const{ownerState:r}=o;return[a.badge,a[r.variant],a[`anchorOrigin${s(r.anchorOrigin.vertical)}${s(r.anchorOrigin.horizontal)}${s(r.overlap)}`],r.color!=="default"&&a[`color${s(r.color)}`],r.invisible&&a.invisible]}})(({theme:o})=>{var a;return{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center",alignContent:"center",alignItems:"center",position:"absolute",boxSizing:"border-box",fontFamily:o.typography.fontFamily,fontWeight:o.typography.fontWeightMedium,fontSize:o.typography.pxToRem(12),minWidth:P*2,lineHeight:1,padding:"0 6px",height:P*2,borderRadius:P,zIndex:1,transition:o.transitions.create("transform",{easing:o.transitions.easing.easeInOut,duration:o.transitions.duration.enteringScreen}),variants:[...Object.keys(((a=o.vars)!=null?a:o).palette).filter(r=>{var t,n;return((t=o.vars)!=null?t:o).palette[r].main&&((n=o.vars)!=null?n:o).palette[r].contrastText}).map(r=>({props:{color:r},style:{backgroundColor:(o.vars||o).palette[r].main,color:(o.vars||o).palette[r].contrastText}})),{props:{variant:"dot"},style:{borderRadius:$,height:$*2,minWidth:$*2,padding:0}},{props:({ownerState:r})=>r.anchorOrigin.vertical==="top"&&r.anchorOrigin.horizontal==="right"&&r.overlap==="rectangular",style:{top:0,right:0,transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%",[`&.${p.invisible}`]:{transform:"scale(0) translate(50%, -50%)"}}},{props:({ownerState:r})=>r.anchorOrigin.vertical==="bottom"&&r.anchorOrigin.horizontal==="right"&&r.overlap==="rectangular",style:{bottom:0,right:0,transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%",[`&.${p.invisible}`]:{transform:"scale(0) translate(50%, 50%)"}}},{props:({ownerState:r})=>r.anchorOrigin.vertical==="top"&&r.anchorOrigin.horizontal==="left"&&r.overlap==="rectangular",style:{top:0,left:0,transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%",[`&.${p.invisible}`]:{transform:"scale(0) translate(-50%, -50%)"}}},{props:({ownerState:r})=>r.anchorOrigin.vertical==="bottom"&&r.anchorOrigin.horizontal==="left"&&r.overlap==="rectangular",style:{bottom:0,left:0,transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%",[`&.${p.invisible}`]:{transform:"scale(0) translate(-50%, 50%)"}}},{props:({ownerState:r})=>r.anchorOrigin.vertical==="top"&&r.anchorOrigin.horizontal==="right"&&r.overlap==="circular",style:{top:"14%",right:"14%",transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%",[`&.${p.invisible}`]:{transform:"scale(0) translate(50%, -50%)"}}},{props:({ownerState:r})=>r.anchorOrigin.vertical==="bottom"&&r.anchorOrigin.horizontal==="right"&&r.overlap==="circular",style:{bottom:"14%",right:"14%",transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%",[`&.${p.invisible}`]:{transform:"scale(0) translate(50%, 50%)"}}},{props:({ownerState:r})=>r.anchorOrigin.vertical==="top"&&r.anchorOrigin.horizontal==="left"&&r.overlap==="circular",style:{top:"14%",left:"14%",transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%",[`&.${p.invisible}`]:{transform:"scale(0) translate(-50%, -50%)"}}},{props:({ownerState:r})=>r.anchorOrigin.vertical==="bottom"&&r.anchorOrigin.horizontal==="left"&&r.overlap==="circular",style:{bottom:"14%",left:"14%",transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%",[`&.${p.invisible}`]:{transform:"scale(0) translate(-50%, 50%)"}}},{props:{invisible:!0},style:{transition:o.transitions.create("transform",{easing:o.transitions.easing.easeInOut,duration:o.transitions.duration.leavingScreen})}}]}}),br=b.forwardRef(function(a,r){var t,n,l,e,i,g;const c=dr({props:a,name:"MuiBadge"}),{anchorOrigin:u={vertical:"top",horizontal:"right"},className:Z,component:J,components:T={},componentsProps:B={},children:K,overlap:z="rectangular",color:_="default",invisible:q=!1,max:Q=99,badgeContent:N,slots:v,slotProps:f,showZero:M=!1,variant:m="standard"}=c,X=H(c,pr),{badgeContent:L,invisible:Y,max:w,displayValue:rr}=er({max:Q,invisible:q,badgeContent:N,showZero:M}),or=V({anchorOrigin:u,color:_,overlap:z,variant:m,badgeContent:N}),U=Y||L==null&&m!=="dot",{color:ar=_,overlap:tr=z,anchorOrigin:nr=u,variant:j=m}=U?or:c,I=j!=="dot"?rr:void 0,h=d({},c,{badgeContent:L,invisible:U,max:w,displayValue:I,showZero:M,anchorOrigin:nr,color:ar,overlap:tr,variant:j}),D=ur(h),W=(t=(n=v==null?void 0:v.root)!=null?n:T.Root)!=null?t:vr,F=(l=(e=v==null?void 0:v.badge)!=null?e:T.Badge)!=null?l:fr,O=(i=f==null?void 0:f.root)!=null?i:B.root,x=(g=f==null?void 0:f.badge)!=null?g:B.badge,ir=G({elementType:W,externalSlotProps:O,externalForwardedProps:X,additionalProps:{ref:r,as:J},ownerState:h,className:y(O==null?void 0:O.className,D.root,Z)}),sr=G({elementType:F,externalSlotProps:x,ownerState:h,className:y(D.badge,x==null?void 0:x.className)});return R.jsxs(W,d({},ir,{children:[K,R.jsx(F,d({},sr,{children:I}))]}))}),Rr=br;function mr(o){return E("MuiToolbar",o)}A("MuiToolbar",["root","gutters","regular","dense"]);const hr=["className","component","disableGutters","variant"],Or=o=>{const{classes:a,disableGutters:r,variant:t}=o;return S({root:["root",!r&&"gutters",t]},mr,a)},xr=C("div",{name:"MuiToolbar",slot:"Root",overridesResolver:(o,a)=>{const{ownerState:r}=o;return[a.root,!r.disableGutters&&a.gutters,a[r.variant]]}})(({theme:o,ownerState:a})=>d({position:"relative",display:"flex",alignItems:"center"},!a.disableGutters&&{paddingLeft:o.spacing(2),paddingRight:o.spacing(2),[o.breakpoints.up("sm")]:{paddingLeft:o.spacing(3),paddingRight:o.spacing(3)}},a.variant==="dense"&&{minHeight:48}),({theme:o,ownerState:a})=>a.variant==="regular"&&o.mixins.toolbar),Pr=b.forwardRef(function(a,r){const t=k({props:a,name:"MuiToolbar"}),{className:n,component:l="div",disableGutters:e=!1,variant:i="regular"}=t,g=H(t,hr),c=d({},t,{component:l,disableGutters:e,variant:i}),u=Or(c);return R.jsx(xr,d({as:l,className:y(u.root,n),ref:r,ownerState:c},g))}),Cr=Pr;export{Rr as B,Cr as T,V as u};