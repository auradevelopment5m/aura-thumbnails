(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{3148:function(e,t,o){Promise.resolve().then(o.bind(o,9235))},9235:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return x}});var a=o(7437),s=o(29),l=o.n(s),c=o(2265),n=o(2208),r=o(2735),i=o(2489);let d=[{value:"Anton",label:"Anton",cssName:"'Anton', Impact, sans-serif"},{value:"BebasNeue",label:"Bebas Neue",cssName:"'Bebas Neue', cursive"},{value:"Teko",label:"Teko",cssName:"'Teko', sans-serif"},{value:"Oswald",label:"Oswald",cssName:"'Oswald', sans-serif"},{value:"Staatliches",label:"Staatliches",cssName:"'Staatliches', cursive"}];function m(){let e=(0,c.useRef)(null),[t,o]=(0,c.useState)(!1),[s,l]=(0,c.useState)(!1),[m,x]=(0,c.useState)(!0),[g,h]=(0,c.useState)(!1),[b,u]=(0,c.useState)({topText:"AURA",bottomText:"PRINTERS",topTextColor:"#2ecc71",bottomTextColor:"#ffffff",topTextSize:8,bottomTextSize:9,topTextFont:"Anton",bottomTextFont:"Anton",topTextBold:!0,bottomTextBold:!0,backgroundImage:"https://i.postimg.cc/Bv5q3LD1/image.png",overlayColor:"#174D25",overlayOpacity:45,auraLogo:"https://i.postimg.cc/jdM8CF8v/LOGO-Aura-Development-512x512-Transparent-by-Flight-Design.png",showESX:!1,showQB:!0,showQBX:!0,esxLogo:"https://i.postimg.cc/6pTMZfgK/image.png",qbLogo:"https://i.postimg.cc/MGQtPKzr/image.png",qbxLogo:"https://i.postimg.cc/B6fpd96Z/image.png"});(0,c.useEffect)(()=>{let e=d.map(e=>{let t=document.createElement("link");return t.href="https://fonts.googleapis.com/css2?family=".concat(e.value.replace(" ","+"),"&display=swap"),t.rel="stylesheet",t});return e.forEach(e=>document.head.appendChild(e)),o(!0),console.log("Font loading initiated"),()=>{e.forEach(e=>{document.head.contains(e)&&document.head.removeChild(e)})}},[]),(0,c.useEffect)(()=>{let e=setTimeout(()=>{t&&s||(console.log("Fallback: Setting font and image as loaded"),o(!0),l(!0))},3e3);return()=>clearTimeout(e)},[t,s]);let p=(e,t)=>{u(o=>({...o,[e]:t}))},f=(e,t)=>{p(t,e.target.value),"backgroundImage"===t&&l(!1)},j=e=>{let t=d.find(t=>t.value===e);return t?t.cssName:d[0].cssName};return(0,a.jsxs)("div",{className:"relative w-full flex flex-col lg:flex-row gap-6",children:[(0,a.jsxs)("div",{className:"".concat(m?"block":"hidden"," lg:block bg-gray-800 p-4 rounded-lg shadow-lg lg:w-1/3 mb-6 lg:mb-0 overflow-y-auto max-h-[80vh]"),children:[(0,a.jsxs)("div",{className:"flex justify-between items-center mb-4",children:[(0,a.jsx)("h2",{className:"text-xl font-bold",children:"Thumbnail Settings"}),(0,a.jsx)("button",{onClick:()=>x(!m),className:"lg:hidden p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition",children:(0,a.jsx)(n.Z,{size:20})})]}),(0,a.jsxs)("div",{className:"mb-6",children:[(0,a.jsx)("h3",{className:"text-lg font-semibold mb-2 border-b border-gray-700 pb-1",children:"Text Settings"}),(0,a.jsxs)("div",{className:"mb-3",children:[(0,a.jsx)("label",{className:"block text-sm font-medium mb-1",children:"Top Text"}),(0,a.jsx)("input",{type:"text",value:b.topText,onChange:e=>p("topText",e.target.value),className:"w-full bg-gray-700 text-white px-3 py-2 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"})]}),(0,a.jsxs)("div",{className:"mb-3",children:[(0,a.jsx)("label",{className:"block text-sm font-medium mb-1",children:"Bottom Text"}),(0,a.jsx)("input",{type:"text",value:b.bottomText,onChange:e=>p("bottomText",e.target.value),className:"w-full bg-gray-700 text-white px-3 py-2 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"})]}),(0,a.jsxs)("div",{className:"grid grid-cols-2 gap-4 mb-3",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"block text-sm font-medium mb-1",children:"Top Font"}),(0,a.jsx)("select",{value:b.topTextFont,onChange:e=>p("topTextFont",e.target.value),className:"w-full bg-gray-700 text-white px-3 py-2 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none",children:d.map(e=>(0,a.jsx)("option",{value:e.value,style:{fontFamily:e.cssName},children:e.label},e.value))})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"block text-sm font-medium mb-1",children:"Bottom Font"}),(0,a.jsx)("select",{value:b.bottomTextFont,onChange:e=>p("bottomTextFont",e.target.value),className:"w-full bg-gray-700 text-white px-3 py-2 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none",children:d.map(e=>(0,a.jsx)("option",{value:e.value,style:{fontFamily:e.cssName},children:e.label},e.value))})]})]}),(0,a.jsxs)("div",{className:"grid grid-cols-2 gap-4 mb-3",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"block text-sm font-medium mb-1",children:"Top Text Style"}),(0,a.jsx)("div",{className:"flex items-center gap-2",children:(0,a.jsxs)("label",{className:"custom-checkbox",children:[(0,a.jsx)("input",{type:"checkbox",checked:b.topTextBold,onChange:e=>p("topTextBold",e.target.checked)}),(0,a.jsx)("span",{className:"checkmark"}),(0,a.jsx)("span",{className:"text-sm",children:"Bold"})]})})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"block text-sm font-medium mb-1",children:"Bottom Text Style"}),(0,a.jsx)("div",{className:"flex items-center gap-2",children:(0,a.jsxs)("label",{className:"custom-checkbox",children:[(0,a.jsx)("input",{type:"checkbox",checked:b.bottomTextBold,onChange:e=>p("bottomTextBold",e.target.checked)}),(0,a.jsx)("span",{className:"checkmark"}),(0,a.jsx)("span",{className:"text-sm",children:"Bold"})]})})]})]}),(0,a.jsxs)("div",{className:"grid grid-cols-2 gap-4 mb-3",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"block text-sm font-medium mb-1",children:"Top Text Color"}),(0,a.jsxs)("div",{className:"flex items-center gap-2",children:[(0,a.jsx)("input",{type:"color",value:b.topTextColor,onChange:e=>p("topTextColor",e.target.value),className:"color-picker"}),(0,a.jsx)("span",{className:"text-xs",children:b.topTextColor})]})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"block text-sm font-medium mb-1",children:"Bottom Text Color"}),(0,a.jsxs)("div",{className:"flex items-center gap-2",children:[(0,a.jsx)("input",{type:"color",value:b.bottomTextColor,onChange:e=>p("bottomTextColor",e.target.value),className:"color-picker"}),(0,a.jsx)("span",{className:"text-xs",children:b.bottomTextColor})]})]})]}),(0,a.jsxs)("div",{className:"grid grid-cols-2 gap-4",children:[(0,a.jsxs)("div",{children:[(0,a.jsxs)("label",{className:"block text-sm font-medium mb-1",children:["Top Text Size: ",b.topTextSize]}),(0,a.jsx)("input",{type:"range",min:"5",max:"12",value:b.topTextSize,onChange:e=>p("topTextSize",Number.parseInt(e.target.value)),className:"custom-slider"})]}),(0,a.jsxs)("div",{children:[(0,a.jsxs)("label",{className:"block text-sm font-medium mb-1",children:["Bottom Text Size: ",b.bottomTextSize]}),(0,a.jsx)("input",{type:"range",min:"5",max:"12",value:b.bottomTextSize,onChange:e=>p("bottomTextSize",Number.parseInt(e.target.value)),className:"custom-slider"})]})]})]}),(0,a.jsxs)("div",{className:"mb-6",children:[(0,a.jsx)("h3",{className:"text-lg font-semibold mb-2 border-b border-gray-700 pb-1",children:"Background Settings"}),(0,a.jsxs)("div",{className:"mb-3",children:[(0,a.jsx)("label",{className:"block text-sm font-medium mb-1",children:"Background Image URL"}),(0,a.jsx)("input",{type:"text",value:b.backgroundImage,onChange:e=>f(e,"backgroundImage"),className:"w-full bg-gray-700 text-white px-3 py-2 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"})]}),(0,a.jsxs)("div",{className:"mb-3",children:[(0,a.jsx)("label",{className:"block text-sm font-medium mb-1",children:"Overlay Color"}),(0,a.jsxs)("div",{className:"flex items-center gap-2",children:[(0,a.jsx)("input",{type:"color",value:b.overlayColor,onChange:e=>p("overlayColor",e.target.value),className:"color-picker"}),(0,a.jsx)("span",{className:"text-xs",children:b.overlayColor})]})]}),(0,a.jsxs)("div",{children:[(0,a.jsxs)("label",{className:"block text-sm font-medium mb-1",children:["Overlay Opacity: ",b.overlayOpacity,"%"]}),(0,a.jsx)("input",{type:"range",min:"0",max:"100",value:b.overlayOpacity,onChange:e=>p("overlayOpacity",Number.parseInt(e.target.value)),className:"custom-slider"})]})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{className:"text-lg font-semibold mb-2 border-b border-gray-700 pb-1",children:"Logo Settings"}),(0,a.jsxs)("div",{className:"mb-3",children:[(0,a.jsx)("label",{className:"block text-sm font-medium mb-1",children:"Aura Logo URL"}),(0,a.jsx)("input",{type:"text",value:b.auraLogo,onChange:e=>f(e,"auraLogo"),className:"w-full bg-gray-700 text-white px-3 py-2 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"})]}),(0,a.jsxs)("div",{className:"mb-3",children:[(0,a.jsx)("label",{className:"block text-sm font-medium mb-2",children:"Framework Logos"}),(0,a.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,a.jsxs)("label",{className:"custom-checkbox",children:[(0,a.jsx)("input",{type:"checkbox",checked:b.showESX,onChange:e=>p("showESX",e.target.checked)}),(0,a.jsx)("span",{className:"checkmark"}),(0,a.jsx)("span",{className:"text-sm",children:"Show ESX Logo"})]}),(0,a.jsxs)("label",{className:"custom-checkbox",children:[(0,a.jsx)("input",{type:"checkbox",checked:b.showQB,onChange:e=>p("showQB",e.target.checked)}),(0,a.jsx)("span",{className:"checkmark"}),(0,a.jsx)("span",{className:"text-sm",children:"Show QB Logo"})]}),(0,a.jsxs)("label",{className:"custom-checkbox",children:[(0,a.jsx)("input",{type:"checkbox",checked:b.showQBX,onChange:e=>p("showQBX",e.target.checked)}),(0,a.jsx)("span",{className:"checkmark"}),(0,a.jsx)("span",{className:"text-sm",children:"Show QBX Logo"})]})]})]}),(0,a.jsxs)("div",{className:"grid grid-cols-3 gap-2",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"block text-sm font-medium mb-1",children:"ESX Logo URL"}),(0,a.jsx)("input",{type:"text",value:b.esxLogo,onChange:e=>f(e,"esxLogo"),className:"w-full bg-gray-700 text-white px-3 py-2 rounded-md text-xs focus:ring-2 focus:ring-blue-500 focus:outline-none"})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"block text-sm font-medium mb-1",children:"QB Logo URL"}),(0,a.jsx)("input",{type:"text",value:b.qbLogo,onChange:e=>f(e,"qbLogo"),className:"w-full bg-gray-700 text-white px-3 py-2 rounded-md text-xs focus:ring-2 focus:ring-blue-500 focus:outline-none"})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"block text-sm font-medium mb-1",children:"QBX Logo URL"}),(0,a.jsx)("input",{type:"text",value:b.qbxLogo,onChange:e=>f(e,"qbxLogo"),className:"w-full bg-gray-700 text-white px-3 py-2 rounded-md text-xs focus:ring-2 focus:ring-blue-500 focus:outline-none"})]})]})]})]}),(0,a.jsxs)("div",{className:"lg:w-2/3 relative",children:[!m&&(0,a.jsx)("button",{onClick:()=>x(!0),className:"absolute top-2 left-2 z-10 p-2 bg-gray-800 rounded-full lg:hidden hover:bg-gray-700 transition",children:(0,a.jsx)(n.Z,{size:20})}),(0,a.jsxs)("div",{className:"relative w-full aspect-video rounded-lg overflow-hidden shadow-2xl mx-auto group",style:{width:"1280px",height:"720px",maxWidth:"100%"},ref:e,children:[(0,a.jsx)("button",{onClick:()=>h(!0),className:"absolute top-4 right-4 z-10 p-3 bg-gray-800/70 rounded-full hover:bg-gray-700 transition opacity-0 group-hover:opacity-100 focus:opacity-100","aria-label":"View fullscreen",children:(0,a.jsx)(n.Z,{size:22})}),(0,a.jsx)("div",{className:"absolute inset-0",children:(0,a.jsx)("img",{src:b.backgroundImage||"/placeholder.svg",alt:"Thumbnail Background",className:"w-full h-full object-cover",onLoad:e=>{e.target.style.filter="contrast(1.1) brightness(0.95)",l(!0),console.log("Image loaded successfully")},onError:()=>{console.error("Failed to load background image")}})}),(0,a.jsxs)("div",{className:"absolute inset-0 flex flex-col items-center justify-center",style:{backgroundColor:"".concat(b.overlayColor).concat(Math.round(2.55*b.overlayOpacity).toString(16).padStart(2,"0"))},children:[(0,a.jsx)("div",{className:"absolute inset-0 bg-gradient-radial",style:{"--tw-gradient-from":"".concat(b.overlayColor,"33"),"--tw-gradient-to":"".concat(b.overlayColor,"99")}}),(0,a.jsx)("h1",{className:"".concat(b.topTextSize<=9?"text-".concat(b.topTextSize,"xl"):""," tracking-wide text-center drop-shadow-[0_5px_5px_rgba(0,0,0,0.7)]"),style:{fontFamily:j(b.topTextFont),color:b.topTextColor,fontSize:b.topTextSize>9?"".concat(b.topTextSize,"rem"):void 0,fontWeight:b.topTextBold?"bold":"normal"},children:b.topText}),(0,a.jsx)("div",{className:"h-10"}),(0,a.jsx)("h2",{className:"".concat(b.bottomTextSize<=9?"text-".concat(b.bottomTextSize,"xl"):""," tracking-wide text-center drop-shadow-[0_5px_5px_rgba(0,0,0,0.7)]"),style:{fontFamily:j(b.bottomTextFont),color:b.bottomTextColor,fontSize:b.bottomTextSize>9?"".concat(b.bottomTextSize,"rem"):void 0,fontWeight:b.bottomTextBold?"bold":"normal"},children:b.bottomText}),(0,a.jsx)("div",{className:"absolute bottom-1 left-1",children:(0,a.jsx)("img",{src:b.auraLogo||"/placeholder.svg",alt:"Aura Development Logo",className:"h-24 w-24 object-contain drop-shadow-xl",onError:e=>{e.target.src="https://via.placeholder.com/100?text=Logo+Error"}})}),(0,a.jsxs)("div",{className:"absolute bottom-6 right-4 flex items-center gap-5",children:[b.showESX&&(0,a.jsx)("img",{src:b.esxLogo||"/placeholder.svg",alt:"ESX Logo",className:"h-16 w-16 object-contain drop-shadow-lg",onError:e=>{e.target.src="https://via.placeholder.com/70?text=ESX"}}),b.showQB&&(0,a.jsx)("img",{src:b.qbLogo||"/placeholder.svg",alt:"QB Logo",className:"h-16 w-16 object-contain drop-shadow-lg",onError:e=>{e.target.src="https://via.placeholder.com/70?text=QB"}}),b.showQBX&&(0,a.jsx)("img",{src:b.qbxLogo||"/placeholder.svg",alt:"QBX Logo",className:"h-16 w-16 object-contain drop-shadow-lg",onError:e=>{e.target.src="https://via.placeholder.com/70?text=QBX"}})]})]})]}),(0,a.jsx)("div",{className:"flex justify-center mt-6",children:(0,a.jsxs)("button",{onClick:()=>{if(!e.current||!t||!s)return;let o=document.createElement("canvas");o.width=1280,o.height=720;let a=o.getContext("2d");if(!a)return;let l=new Image;l.crossOrigin="anonymous",l.src=b.backgroundImage;let c=new Image;c.crossOrigin="anonymous",c.src=b.auraLogo;let n=new Image;n.crossOrigin="anonymous",n.src=b.esxLogo;let r=new Image;r.crossOrigin="anonymous",r.src=b.qbLogo;let i=new Image;i.crossOrigin="anonymous",i.src=b.qbxLogo,Promise.all([new Promise(e=>{l.onload=e}),new Promise(e=>{c.onload=e}),new Promise(e=>{n.onload=e}),new Promise(e=>{r.onload=e}),new Promise(e=>{i.onload=e})]).then(()=>{let e=document.createElement("canvas"),t=e.getContext("2d");e.width=1280,e.height=720,t?(t.drawImage(l,0,0,1280,720),t.globalCompositeOperation="source-atop",t.fillStyle="rgba(255, 255, 255, 0.05)",t.fillRect(0,0,1280,720),a.drawImage(e,0,0,1280,720)):a.drawImage(l,0,0,1280,720),a.imageSmoothingEnabled=!0,a.imageSmoothingQuality="high",a.drawImage(l,0,0,1280,720),a.globalCompositeOperation="source-atop",a.fillStyle="rgba(0, 0, 0, 0.15)",a.fillRect(0,0,1280,720),a.globalCompositeOperation="source-over";let s=(e=>{let t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?{r:Number.parseInt(t[1],16),g:Number.parseInt(t[2],16),b:Number.parseInt(t[3],16)}:{r:0,g:0,b:0}})(b.overlayColor),m=b.overlayOpacity/100;a.fillStyle="rgba(".concat(s.r,", ").concat(s.g,", ").concat(s.b,", ").concat(m,")"),a.fillRect(0,0,1280,720);let x=a.createRadialGradient(640,360,240,640,360,720);x.addColorStop(0,"rgba(".concat(s.r,", ").concat(s.g,", ").concat(s.b,", 0.2)")),x.addColorStop(1,"rgba(".concat(s.r,", ").concat(s.g,", ").concat(s.b,", 0.6)")),a.fillStyle=x,a.fillRect(0,0,1280,720),a.textAlign="center",a.textBaseline="middle",a.shadowColor="rgba(0, 0, 0, 0.7)",a.shadowBlur=15,a.shadowOffsetX=3,a.shadowOffsetY=3;let g=e=>{let t=d.find(t=>t.value===e);return t?t.cssName:d[0].cssName},h=b.topTextSize<=9?70+5*b.topTextSize:115+(b.topTextSize-9)*15,u=b.bottomTextSize<=9?70+5*b.bottomTextSize:115+(b.bottomTextSize-9)*15;a.fillStyle=b.topTextColor;let p=b.topTextBold?"bold":"normal";a.font="".concat(p," ").concat(h,"px ").concat(g(b.topTextFont)),a.fillText(b.topText,640,270),a.fillStyle=b.bottomTextColor;let f=b.bottomTextBold?"bold":"normal";a.font="".concat(f," ").concat(u,"px ").concat(g(b.bottomTextFont)),a.fillText(b.bottomText,640,430),a.shadowColor="rgba(0, 0, 0, 0.7)",a.shadowBlur=15,a.shadowOffsetX=5,a.shadowOffsetY=5,a.drawImage(c,5,595,120,120);let j=[b.showESX?n:null,b.showQB?r:null,b.showQBX?i:null].filter(Boolean),v=1280-(85*j.length+(j.length-1)*25)-20;j.forEach((e,t)=>{e&&a.drawImage(e,v+110*t,605,85,85)});let N=o.toDataURL("image/png"),w=document.createElement("a");w.download="aura-".concat(b.bottomText.toLowerCase(),"-thumbnail.png"),w.href=N,w.click()})},className:"bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md font-bold tracking-wider transition-all flex items-center space-x-2 shadow-lg",disabled:!t||!s,children:[(0,a.jsx)(r.Z,{className:"h-5 w-5"}),(0,a.jsx)("span",{children:t&&s?"DOWNLOAD THUMBNAIL":"LOADING..."})]})})]}),g&&(0,a.jsx)("div",{className:"fullscreen-modal",onClick:()=>h(!1),children:(0,a.jsxs)("div",{className:"modal-content",onClick:e=>e.stopPropagation(),children:[(0,a.jsxs)("div",{className:"relative w-full h-full aspect-video",style:{width:"1280px",height:"720px",maxWidth:"100%"},children:[(0,a.jsx)("div",{className:"absolute inset-0",children:(0,a.jsx)("img",{src:b.backgroundImage||"/placeholder.svg",alt:"Thumbnail Background",className:"w-full h-full object-cover",style:{filter:"contrast(1.1) brightness(0.95)"}})}),(0,a.jsxs)("div",{className:"absolute inset-0 flex flex-col items-center justify-center",style:{backgroundColor:"".concat(b.overlayColor).concat(Math.round(2.55*b.overlayOpacity).toString(16).padStart(2,"0"))},children:[(0,a.jsx)("div",{className:"absolute inset-0 bg-gradient-radial",style:{"--tw-gradient-from":"".concat(b.overlayColor,"33"),"--tw-gradient-to":"".concat(b.overlayColor,"99")}}),(0,a.jsx)("h1",{className:"".concat(b.topTextSize<=9?"text-".concat(b.topTextSize,"xl"):""," tracking-wide text-center drop-shadow-[0_5px_5px_rgba(0,0,0,0.7)]"),style:{fontFamily:j(b.topTextFont),color:b.topTextColor,fontSize:b.topTextSize>9?"".concat(b.topTextSize,"rem"):void 0,fontWeight:b.topTextBold?"bold":"normal"},children:b.topText}),(0,a.jsx)("div",{className:"h-10"}),(0,a.jsx)("h2",{className:"".concat(b.bottomTextSize<=9?"text-".concat(b.bottomTextSize,"xl"):""," tracking-wide text-center drop-shadow-[0_5px_5px_rgba(0,0,0,0.7)]"),style:{fontFamily:j(b.bottomTextFont),color:b.bottomTextColor,fontSize:b.bottomTextSize>9?"".concat(b.bottomTextSize,"rem"):void 0,fontWeight:b.bottomTextBold?"bold":"normal"},children:b.bottomText}),(0,a.jsx)("div",{className:"absolute bottom-1 left-1",children:(0,a.jsx)("img",{src:b.auraLogo||"/placeholder.svg",alt:"Aura Development Logo",className:"h-24 w-24 object-contain drop-shadow-xl"})}),(0,a.jsxs)("div",{className:"absolute bottom-6 right-4 flex items-center gap-5",children:[b.showESX&&(0,a.jsx)("img",{src:b.esxLogo||"/placeholder.svg",alt:"ESX Logo",className:"h-16 w-16 object-contain drop-shadow-lg"}),b.showQB&&(0,a.jsx)("img",{src:b.qbLogo||"/placeholder.svg",alt:"QB Logo",className:"h-16 w-16 object-contain drop-shadow-lg"}),b.showQBX&&(0,a.jsx)("img",{src:b.qbxLogo||"/placeholder.svg",alt:"QBX Logo",className:"h-16 w-16 object-contain drop-shadow-lg"})]})]})]}),(0,a.jsx)("button",{className:"close-button",onClick:()=>h(!1),children:(0,a.jsx)(i.Z,{size:24})})]})})]})}function x(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l(),{id:"93e59dacda88f292",children:"body{background-color:#111827;color:white}.bg-gray-800{background-color:#1f2937}.bg-gray-700{background-color:#374151}.rounded-lg{-webkit-border-radius:.5rem;-moz-border-radius:.5rem;border-radius:.5rem}.p-4{padding:1rem}.shadow-lg{-webkit-box-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05);-moz-box-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05);box-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05)}"}),(0,a.jsx)("main",{className:"jsx-93e59dacda88f292 min-h-screen bg-gray-900 text-white",children:(0,a.jsxs)("div",{className:"jsx-93e59dacda88f292 container mx-auto px-4 py-8",children:[(0,a.jsx)("h1",{className:"jsx-93e59dacda88f292 text-3xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-500 to-purple-600 bg-clip-text text-transparent",children:"Aura Thumbnail Generator"}),(0,a.jsx)(m,{})]})})]})}}},function(e){e.O(0,[618,971,117,744],function(){return e(e.s=3148)}),_N_E=e.O()}]);