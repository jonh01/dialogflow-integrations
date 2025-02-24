(this["webpackJsonpdialogflow-messenger"]=this["webpackJsonpdialogflow-messenger"]||[]).push([[0],{28:function(e,t,i){},50:function(e,t,i){"use strict";i.r(t);var o=i(2),n=i.n(o),s=i(19),a=i.n(s),r=(i(28),i(1));const l=r.a.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: none;
  box-shadow: rgb( 0 0 0 / 24%) 1px 4px 15px 0px;
  cursor: pointer;
  background-color: #42A5F5;
`,c=r.a.div`
  position: fixed;
  bottom: 105px;
  right: 20px;
  width: 370px;
  height: 560px;
  background-color: #e5e5e5;
  opacity: ${e=>e.opened?"1":"0"};
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  box-shadow: 1px 4px 15px 0px rgb(0 0 0 / 0.24);
  transform: ${e=>e.opened?"translate3d(0px, 0px, 0px) scale(1, 1);":"translateX(25%) translateY(35%) scale(0.5, 0.5)"};
  transition: transform 0.2s ease, opacity 0.2s ease-in${e=>e.opened?"":", height 0s ease 0.2s"};
`,d=r.a.div`
  height: 50px;
  min-height: 50px;
  padding-left: 16px;
  display: flex;
  align-items: center;
  border-radius: 5px 5px 0 0;
  color: white;
  background-color: #42a5f5;
  box-shadow: 0px 3px 6px 0px #00000029;
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
`,p=r.a.div`
  min-height: 0;
  background-color: #fafafa;
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  min-width: 250px;
`,x=r.a.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  min-height: 0;
`,b=r.a.div`
  display: flex;
  flex-direction: column;
  flex: 1 1;
  padding: 10px;
  overflow-x: hidden;
  overflow-y: scroll;

  > * {
    &:first-child {
      margin-top: auto !important;
    }
  }
`,h=r.a.div`
  border-radius: 20px;
  border: 1px solid #e0e0e0;
  padding: 7px 16px;
  margin-top: 10px;
  align-self: flex-end;
  background-color: white;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
`,g=r.b`
  100% {
    opacity: 1;
  }
`,j=Object(r.a)(h)`
  background-color: #ddd;
  margin-left: 75px;
  align-self: flex-end;

  animation: ${g} 0.3s ease 0.1s forwards;
  opacity: 0;
`,f=Object(r.a)(h)`
  margin-right: 75px;
  align-self: flex-start;

  animation: ${g} 0.3s ease 0.1s forwards;
  opacity: 0;
`,u=r.a.div`
  background-color: white;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0px 2px 2px 0px rgb(0 0 0 / 24%);
  margin-top: 10px;
`,m=r.a.div`
  height: 50px;
  background-color: white;
  border-top: 1px solid #eeeeee;
  display: flex;
  font-family: 'Roboto', sans-serif;
  border-radius: 0 0 5px 5px;
`,v=r.a.input`
  padding-left: 16px;
  font-size: 14px;
  width: 100%;
  border: none;
  outline: none;
`,w=r.a.svg`
  cursor: pointer;
  fill: #42A5F5;
  height: 24px;
  width: 24px;
  margin: 15px;
  transform: ${e=>e.visible?"scale(1, 1);":"scale(0.01, 0.01);"}
  transition: 0.3s ease;

  &:hover {
    fill: green;
  }
`,O=r.a.svg`
  height: 36px;
  left: 10px;
  opacity: ${e=>e.visible?"1":"0"};
  position: absolute;
  top: 10px;
  transition: opacity 0.5s;
  width: 36px;
`,y=r.a.img`
  height: 36px;
  left: 10px;
  opacity: ${e=>e.visible?"1":"0"};
  position: absolute;
  top: 10px;
  transition: opacity 0.5s;
  width: 36px;
`,k=r.a.svg`
  fill: white;
  left: 15px;
  opacity: ${e=>e.visible?"1":"0"};
  transform: ${e=>e.visible?"":"rotate(-90deg);"};
  position: absolute;
  top: 15px;
  transition: transform 0.5s, opacity 0.5s;
`,M=r.a.a`
  align-items: center;
  background: white;
  border-radius: 8px;
  color: black;
  cursor: pointer;
  display: flex;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  padding: 12px 12px;
  text-decoration: none;
`,z=r.a.div`
  height: 24px;
  width: 24px;
  margin-right: 12px;
`,C=r.a.div`

`,R=r.a.img`
  background: url("dist/images/progress_spinner_grey.gif") 50% no-repeat;
  borderRadius: 8px;
  borderStyle: none;
  width: 100%;
`,$=r.a.div`
  background-color: white;
  border-radius: 8px;
  display: flex;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  padding: 16px;
`,I=r.a.img`
  background-repeat: no-repeat;
  background-size: contain;
  margin-right: 24px;
  max-height: 24px;
  max-width: 24px;
`,V=r.a.div`
  display: block;
`,S=r.a.div`
  background-color: white;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  font-family: 'Roboto', sans-serif;
  padding: 16px;
`,H=r.a.div`
  color: black;
  font-size: 14px;
  font-weight: bold;

`,A=r.a.div`
  color: rgba(0,0,0,0.87);
  font-size: 14px;
  padding-top: 8px;
  word-break: break-word;
`,U=r.a.div`
  color: black;
  font-weight: bold;
`,L=r.a.div`
  color: #757577;
  padding-top: 8px;
`,E=r.a.hr`
  border: 0;
  border-top: 1px solid #e0e0e0;
  margin: 0;
`,D=r.a.div`
  background: linear-gradient( to left, rgba(216,209,213) 0%, rgba(177,166,177) 47%, rgba(216,209,213) 100% ) left bottom white no-repeat;
  background-size: 100% 1px;
  border-radius: 8px;
  cursor: pointer;
  display: block;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  padding: 16px;
`,F=r.a.div`
  background: white;
  border-radius: 8px;
  color: black;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  padding: 12px 12px;
  text-decoration: none;
`,B=r.a.button`
  display: flex;
  justify-content: space-between;
  background-color: white;
  border: none;
  cursor: pointer;
`,_=r.a.div`
  display: flex;
`,J=r.a.div`
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
`,N=r.a.img`
  border-radius: 3px;
  margin-right: 10px;
  max-width: 47px;
`,T=r.a.div`
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
`,q=Object(r.a)(U)`
  word-break: break-word;
  word-wrap: break-word;
  text-align: left;
`,Y=Object(r.a)(L)`
  word-break: break-word;
  word-wrap: break-word;
`,Z=r.a.svg`
  font-size: 32px;
  padding: 7px 0;
  color: #757575;
  transform: rotate(${e=>e.open?"-":""}90deg);
  transition: transform 0.15s ease-${e=>e.open?"out":"in"};
`,P=r.a.div`
  max-height: ${e=>e.open?"inherit":"0"};
  margin-top: ${e=>e.open?"10px":"0"};
  margin-left: 4px;
  overflow: hidden;
  transition: max-height 0.25s ease-${e=>e.open?"out":"in"};
`,K=r.a.div`
  padding: 10px;
`,X=r.a.a`
  align-items: center;
  background-color: white;
  border-radius: 20px;
  border: 1px solid;
  border-color: #e0e0e0;
  box-shadow: 0px 2px 2px 0px rgb(0 0 0 / 24%);
  color: black;
  cursor: pointer;
  display: inline-flex;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  height: 35px;
  margin: 0 10px 10px 0;
  padding: 0 16px;
  text-decoration: none;
  vertical-align: bottom;
`,G=r.a.img`
  margin-right: 8px;
  max-height: 17.5px;
  max-width: 17.5px;
`,Q=r.a.svg`
  display: inline-block;
  height: 15px;
  margin-left: 8px;
  width: 15px;
`,W=r.a.div`
  align-items: center;
  align-self: center;
  background-color: black;
  box-shadow: 1px 4px 15px 0 rgb(0 0 0 / 24%);
  color: white;
  display: flex;
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  justify-content: center;
  margin-top: 0;
  opacity: ${e=>e.open?"0.8":"0"};
  padding: 10px;
  position: absolute;
  transition: transform 0.2s, opacity 0.2s;
  transform: ${e=>e.open?"translateY(0)":"translateY(-100%);"};
  width: 95%;
  z-index: 1;
`,ee=e=>"chips"===e.type,te=e=>"list"===e.type&&"subtitle"in e,ie=e=>!te(e);var oe=i(23),ne=i.n(oe);const se=async(e,t,i,o)=>{const n=o?{event:{event:i}}:{text:{text:i}};try{const i=await ne.a.post(e,{queryInput:{...n,languageCode:null!==t&&void 0!==t?t:"en"}});let o=0;for(;"{"!==i.data[o];)o++;return JSON.parse(i.data.substr(o))}catch(s){return console.log(s.response),{}}};var ae=i(0);const re=async e=>{var t,i;const{apiURI:o,languageCode:n,addMessage:s,updateAgentMessage:a}=e,r="button"in e?e.button:e.item;s({type:"agent",text:"...",id:null===(t=r.event)||void 0===t?void 0:t.name});a(await se(o,n,null===(i=r.event)||void 0===i?void 0:i.name,!0),!0)},le=e=>{const{button:t}=e;return Object(ae.jsxs)("div",{children:[Object(ae.jsx)("link",{href:"https://fonts.googleapis.com/icon?family=Material+Icons",rel:"stylesheet"}),Object(ae.jsxs)(M,{onClick:()=>re(e),href:t.link,target:"_blank",children:[t.icon&&Object(ae.jsx)(z,{children:Object(ae.jsx)("span",{className:"material-icons",style:{color:t.icon.color},children:t.icon.type})}),Object(ae.jsx)(C,{children:t.text})]})]})},ce=e=>{var t;let{info:i}=e;return Object(ae.jsx)("a",{href:i.actionLink,style:{textDecoration:"none"},rel:"noreferrer",target:"_blank",children:Object(ae.jsxs)($,{children:[i.image&&Object(ae.jsx)(I,{src:null===(t=i.image)||void 0===t?void 0:t.src.rawUrl}),Object(ae.jsxs)(V,{children:[Object(ae.jsx)(U,{children:i.title}),Object(ae.jsx)(L,{children:i.subtitle})]})]})})},de=e=>{let{text:t,link:i,image:o}=e;return Object(ae.jsxs)(X,{href:i,target:"_blank",children:[o&&Object(ae.jsx)(G,{src:o.src.rawUrl}),t,Object(ae.jsxs)(Q,{xmlns:"http://www.w3.org/2000/svg",fill:"black",height:"24",viewBox:"0 0 24 24",width:"24",children:[Object(ae.jsx)("path",{d:"M0 0h24v24H0z",fill:"none"}),Object(ae.jsx)("path",{d:"M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"})]})]})},pe=e=>{let{chips:t}=e;return Object(ae.jsx)(K,{children:t.options.map((e=>Object(ae.jsx)(de,{text:e.text,link:e.link,image:e.image})))})},xe=e=>{let{description:t}=e;return Object(ae.jsxs)(S,{children:[Object(ae.jsx)(H,{children:t.title}),t.text.map((e=>Object(ae.jsx)(A,{children:e})))]})},be=e=>{const{item:t}=e;return Object(ae.jsxs)(D,{onClick:()=>re(e),children:[Object(ae.jsx)(U,{children:t.title}),Object(ae.jsx)(L,{children:t.subtitle})]})},he=e=>{const{list:t}=e;return Object(ae.jsx)("div",{children:t.items.map((t=>"DIVIDER"===t?Object(ae.jsx)(E,{}):Object(ae.jsx)(be,{...e,item:t})))})},ge=e=>{var t,i;let{accordion:n}=e;const[s,a]=Object(o.useState)(!1);return Object(ae.jsxs)(F,{children:[Object(ae.jsxs)(B,{onClick:()=>a(!s),children:[Object(ae.jsxs)(_,{children:[n.image&&Object(ae.jsx)(J,{children:Object(ae.jsx)(N,{src:null===(t=n.image)||void 0===t||null===(i=t.src)||void 0===i?void 0:i.rawUrl})}),Object(ae.jsxs)(T,{children:[Object(ae.jsx)(q,{children:n.title}),Object(ae.jsx)(Y,{children:n.subtitle})]})]}),Object(ae.jsx)("div",{children:Object(ae.jsxs)(Z,{open:s,xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#455A64",children:[Object(ae.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),Object(ae.jsx)("path",{d:"M7.59 18.59L9 20l8-8-8-8-1.41 1.41L14.17 12"})]})})]}),Object(ae.jsx)(P,{open:s,children:n.text})]})},je=e=>{let{message:t,apiURI:i,languageCode:o,addMessage:n,updateAgentMessage:s}=e;const a=t.payload;if(!a)return null;let r=[],l=[];for(let c=0;c<a.length;c++){const e=a[c];if(te(e)){let e=[];for(;c<a.length;c++){const t=a[c];if("divider"===t.type)e.push("DIVIDER");else{if(!te(t)){c--;break}e.push(t)}}r.push({type:"list",items:e})}else ee(e)?l.push(e):ie(e)&&r.push(e)}return Object(ae.jsxs)(ae.Fragment,{children:[r.length>0&&Object(ae.jsx)(u,{children:r.map(((e,t)=>((e,t,i,o,n,s)=>(e=>"accordion"===e.type)(e)?Object(ae.jsx)(ge,{accordion:e},t):(e=>"image"===e.type)(e)?Object(ae.jsx)(R,{alt:e.accessibilityText,src:e.rawUrl},t):(e=>"info"===e.type)(e)?Object(ae.jsx)(ce,{info:e},t):ee(e)?Object(ae.jsx)(pe,{chips:e},t):(e=>"description"===e.type)(e)?Object(ae.jsx)(xe,{description:e},t):(e=>"list"===e.type)(e)?Object(ae.jsx)(he,{list:e,apiURI:i,languageCode:s,addMessage:o,updateAgentMessage:n},t):(e=>"button"===e.type)(e)?Object(ae.jsx)(le,{button:e,apiURI:i,languageCode:s,addMessage:o,updateAgentMessage:n},t):void 0)(e,t,i,n,s,o)))}),l.map(((e,t)=>Object(ae.jsx)(pe,{chips:e},t)))]})},fe=e=>{let{message:t}=e;const i="user"===t.type?j:f;return Object(ae.jsx)(i,{children:t.text})},ue=e=>{let{visible:t,url:i}=e;return i?Object(ae.jsx)(y,{visible:t,src:i}):Object(ae.jsxs)(O,{visible:t,width:"36",height:"36",viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(ae.jsx)("mask",{id:"mask0","mask-type":"alpha",maskUnits:"userSpaceOnUse",x:"3",y:"3",width:"30",height:"30",children:Object(ae.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M24.0001 19.5C24.8251 19.5 25.5001 18.825 25.5001 18V4.5C25.5001 3.675 24.8251 3 24.0001 3H4.50006C3.67506 3 3.00006 3.675 3.00006 4.5V25.5L9.00006 19.5H24.0001ZM22.5001 5.99999V16.5H9.00013H6.00013V5.99999H22.5001ZM28.5 9.00001H31.5C32.325 9.00001 33 9.67501 33 10.5V33L27 27H10.5C9.675 27 9 26.325 9 25.5V22.5H28.5V9.00001Z",fill:"white"})}),Object(ae.jsx)("g",{mask:"url(#mask0)",children:Object(ae.jsx)("rect",{width:"36",height:"36",fill:"white"})})]})},me=e=>{let{visible:t}=e;return Object(ae.jsxs)(k,{visible:t,id:"closeSvg",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg",children:[Object(ae.jsx)("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),Object(ae.jsx)("path",{d:"M0 0h24v24H0z",fill:"none"})]})};var ve=function(e){let{domElement:t}=e;const{"chat-title":i,"language-code":n,"api-uri":s,"chat-icon":a,expand:r}=(e=>{let t={};for(let i=0;i<e.attributes.length;i++){const o=e.attributes.item(i);o&&(t[o.name]=o.value)}return t})(t),[h,g]=Object(o.useState)(null!=r),[j,f]=Object(o.useState)(""),[u,O]=Object(o.useState)(!1),[y,k]=Object(o.useState)([]),M=Object(o.useRef)(null),z=()=>{var e;null===(e=M.current)||void 0===e||e.scrollIntoView({behavior:"smooth"})};Object(o.useEffect)((()=>{u&&setTimeout((()=>{O(!1)}),2e3)}),[u]);const C=(e,t)=>{k((i=>{if("{}"===JSON.stringify(e)){const e=i.filter((e=>"..."!==e.text));return O(!0),e}const o=[...i],{queryResult:n}=e,{text:s="",responseMessages:a=[]}=n;let r=o.length-1;for(;r>0&&(t?"..."!==o[r].text:o[r].id!==s);)r--;if(o[r].id===s||t&&"..."===o[r].text){const e=a[0];if(e.text){var l;const t=null===e||void 0===e||null===(l=e.text)||void 0===l?void 0:l.text;o[r].text=t[0],o[r].id=void 0}else if(e.payload){const{richContent:t=[]}=e.payload,i=t[0];o[r].text=void 0,o[r].id=void 0,o[r].payload=i}}for(let e=1;e<a.length;e++){const t=a[e];if(t.text){var c;const e=null===t||void 0===t||null===(c=t.text)||void 0===c?void 0:c.text;e&&o.push({type:"agent",text:e[0]})}else if(t.payload){const{richContent:e=[]}=t.payload,i=e[0];i&&o.push({type:"agent",payload:i})}}return o})),z()},R=async()=>{const e=j;$({type:"user",text:e}),$({type:"agent",text:"...",id:e});const t=await se(s,n,j);console.log(t),C(t)},$=e=>{let{type:t,text:i,id:o}=e;k((e=>[...e,{type:t,text:i,id:o}])),f("")};return Object(o.useEffect)((()=>{z()}),[y.length]),Object(ae.jsxs)("div",{className:"App",children:[Object(ae.jsxs)(c,{opened:h,children:[Object(ae.jsx)(d,{children:i}),Object(ae.jsx)(p,{children:Object(ae.jsxs)(x,{children:[Object(ae.jsx)(W,{open:u,children:"Something went wrong, please try again."}),Object(ae.jsxs)(b,{children:[y.map(((e,t)=>((e,t)=>e.text?Object(ae.jsx)(fe,{message:e},t):e.payload?Object(ae.jsx)(je,{message:e,apiURI:s,addMessage:$,updateAgentMessage:C,languageCode:n},t):null)(e,t))),Object(ae.jsx)("div",{ref:M})]})]})}),Object(ae.jsxs)(m,{children:[Object(ae.jsx)(v,{id:"text-input",type:"text",value:j,onKeyDown:e=>{"Enter"===e.key&&R()},onChange:e=>f(e.target.value),placeholder:"Ask something..."}),Object(ae.jsx)("div",{onClick:()=>R(),children:Object(ae.jsx)(w,{visible:j.length>0,children:Object(ae.jsx)("path",{d:"M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"})})})]})]}),Object(ae.jsxs)(l,{onClick:()=>g(!h),children:[Object(ae.jsx)(ue,{url:a,visible:!h}),Object(ae.jsx)(me,{visible:h})]})]})};var we=e=>{e&&e instanceof Function&&i.e(3).then(i.bind(null,51)).then((t=>{let{getCLS:i,getFID:o,getFCP:n,getLCP:s,getTTFB:a}=t;i(e),o(e),n(e),s(e),a(e)}))};let Oe=setInterval((()=>{const e=document.querySelectorAll("df-messenger");e.length&&clearInterval(Oe),e.forEach((e=>{a.a.render(Object(ae.jsx)(n.a.StrictMode,{children:Object(ae.jsx)(ve,{domElement:e})}),e)}))}),100);we()}},[[50,1,2]]]);
//# sourceMappingURL=main.5b36341e.chunk.js.map