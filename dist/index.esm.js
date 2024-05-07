import e from"react";function t(e){var n,r,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(n=0;n<o;n++)e[n]&&(r=t(e[n]))&&(a&&(a+=" "),a+=r)}else for(r in e)e[r]&&(a&&(a+=" "),a+=r);return a}function n(){for(var e,n,r=0,a="",o=arguments.length;r<o;r++)(e=arguments[r])&&(n=t(e))&&(a&&(a+=" "),a+=n);return a}"function"==typeof SuppressedError&&SuppressedError;const r=t=>{var{primary:r=!1,size:a="medium",backgroundColor:o,label:l}=t,i=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}(t,["primary","size","backgroundColor","label"]);const s=r?"font-white bg-[#1ea7fd]":"color-[#333] bg-transparent shadow-[0_0_0_1px_rgba(0,0,0,0.15)]";return e.createElement("button",Object.assign({type:"button",className:n("border-0 rounded-[3rem] font-[700] cursor-pointer inline-block font-['Nunito_Sans','Helvetica_Neue',Helvetica,Arial,sans-serif]",(()=>{switch(a){case"large":return"py-[12px] px-[24px] text-[16px]";case"small":return"py-[11px] px-[20px] text-[12px]";default:return"py-[10px] px-[16px] text-[14px]"}})(),s),style:{backgroundColor:o}},i),l)},a=({user:t,onLogin:n,onLogout:a,onCreateAccount:o})=>e.createElement("header",null,e.createElement("div",{className:"font-['Nunito_Sans','Helvetica_Neue',Helvetica,Arial,sans-serif] px-[20px] py-[15px] flex items-center justify-between border-b-[rgba(0,0,0,0.1)] border-b"},e.createElement("div",null,e.createElement("svg",{className:"inline-block align-top",width:"32",height:"32",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg"},e.createElement("g",{fill:"none",fillRule:"evenodd"},e.createElement("path",{d:"M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z",fill:"#FFF"}),e.createElement("path",{d:"M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z",fill:"#555AB9"}),e.createElement("path",{d:"M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z",fill:"#91BAF8"}))),e.createElement("h1",{className:"font-[700] text-20 m-[6px_0_6px_10px] inline-block, align-top"},"Acme")),e.createElement("div",{className:"space-x-[10px]"},t?e.createElement(e.Fragment,null,e.createElement("span",{className:"text-[14px] text-[#333] mr-10"},"Welcome, ",e.createElement("b",null,t.name),"!"),e.createElement(r,{size:"small",onClick:a,label:"Log out"})):e.createElement(e.Fragment,null,e.createElement(r,{size:"small",onClick:n,label:"Log in"}),e.createElement(r,{primary:!0,size:"small",onClick:o,label:"Sign up"}))))),o=()=>{const[t,n]=e.useState();return e.createElement("article",null,e.createElement(a,{user:t,onLogin:()=>n({name:"Jane Doe"}),onLogout:()=>n(void 0),onCreateAccount:()=>n({name:"Jane Doe"})}),e.createElement("section",{className:"font-['Nunito_Sans','Helvetica_Neue',Helvetica,Arial,sans-serif] text-[14px]/[24px] px-[20px] py-[48px] my-0 mx-auto max-w-[600px] text-[#333]"},e.createElement("h2",null,"Pages in Storybook"),e.createElement("p",null,"We recommend building UIs with a"," ",e.createElement("a",{href:"https://componentdriven.org",target:"_blank",rel:"noopener noreferrer"},e.createElement("strong",null,"component-driven"))," ","process starting with atomic components and ending with pages."),e.createElement("p",null,"Render pages with mock data. This makes it easy to build and review page states without needing to navigate to them in your app. Here are some handy patterns for managing page data in Storybook:"),e.createElement("ul",null,e.createElement("li",null,'Use a higher-level connected component. Storybook helps you compose such data from the "args" of child component stories'),e.createElement("li",null,"Assemble data in the page component from your services. You can mock these services out using Storybook.")),e.createElement("p",null,"Get a guided tutorial on component-driven development at"," ",e.createElement("a",{href:"https://storybook.js.org/tutorials/",target:"_blank",rel:"noopener noreferrer"},"Storybook tutorials"),". Read more in the"," ",e.createElement("a",{href:"https://storybook.js.org/docs",target:"_blank",rel:"noopener noreferrer"},"docs"),"."),e.createElement("div",{className:"tip-wrapper"},e.createElement("span",{className:"tip"},"Tip")," Adjust the width of the canvas with the"," ",e.createElement("svg",{width:"10",height:"10",viewBox:"0 0 12 12",xmlns:"http://www.w3.org/2000/svg"},e.createElement("g",{fill:"none",fillRule:"evenodd"},e.createElement("path",{d:"M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0 01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0 010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z",id:"a",fill:"#999"}))),"Viewports addon in the toolbar")))};export{r as Button,a as Header,o as Page};
//# sourceMappingURL=index.esm.js.map