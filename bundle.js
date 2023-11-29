(()=>{"use strict";var e={28:(e,n,t)=>{t.d(n,{Z:()=>c});var o=t(537),a=t.n(o),r=t(645),i=t.n(r)()(a());i.push([e.id,"*{\n    font-family: 'Courgette', cursive;\n    margin: 0;\n    padding: 0;\n}\nbody, .container{\n    width:100vw;\n    height: 100vh;\n}\n.header{\n    padding-top: 1%;\n    width: 100%;\n    height: 20%;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    background-color: #161A30;\n}\n.logo{\n    height: 70%;\n}\n.controls{\n    display: flex;\n    justify-content: space-between;\n    \n\n}\n.controls>button{\n    background-color: #161A30;\n    border-style: none;\n    padding: 10px 15px;\n    color: #F0ECE5;\n    font-size: 1.25rem;\n    font-family: 'Pacifico', cursive;\n    \n}\n.controls>button:hover{\n    background-color: #B6BBC4;\n    color:#161A30\n}\n.content-container{\n    display: grid;\n    grid-template-columns: 1fr 3fr 1fr;\n    grid-template-rows: 1fr;\n    width: 100%;\n    height: 100%;\n    background-color: #F0ECE5; \n    overflow: scroll;\n}\n#active-button{\n    background-color: #B6BBC4;\n    color: #161A30;\n}\n.content{\n    padding: 20px;\n    box-shadow: 6px 6px 8px -2px rgba(0,0,0,0.75), -6px 6px 8px -2px rgba(0,0,0,0.75);\n    grid-column: 2/3;\n    background-color: #B6BBC4;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 20px;\n}\n.image-container{\n    width: 100%;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n}\n.image-container>div{\n    background-color: white;\n    width: 30%;\n    padding-top:30%;    \n    border-radius: 50%;\n    background-position: center;\n    background-size: cover;\n    box-shadow: 5px 5px 2px 0px rgba(0,0,0,0.75);\n\n}\n\n.home-info{\n    font-family: 'Courgette', cursive;\n    font-size: 1.5rem;\n    width: 90%;\n    color: #F0ECE5;\n    background-color: #161A30;\n    padding: 20px;\n    border-radius: 15px;\n    box-shadow: 10px 10px 10px -4px rgba(0,0,0,0.75);\n}\n\n.package{\n    color: white;\n    background-color: #31304D;\n    width:90%;\n    padding: 20px;\n    background-position: center;\n    background-size: cover;\n    border-radius: 25px;\n    box-shadow: inset 0 0 0 1000px #626262bc,10px 10px 10px -4px rgba(0,0,0,0.75);\n    \n}\n\n.package-title{\n    font-size: 3rem;\n    margin-bottom: 10%;\n}\n.package-disc{\n    font-size: 1.5rem;\n}\n\n.portraits{\n    width: 100%;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-around;\n    gap:10px;\n}\n.portrait{\n    box-shadow: 5px 5px 2px 0px rgba(0,0,0,0.75);\n    width: 100%;\n    padding-top: 100%;\n    border-radius: 50%;\n    background-position: center;\n    background-size: cover;\n    flex: none;\n    margin-bottom: 20px;\n}\n.chef-container{\n    font-size: 2rem;\n    padding: 20px;\n\n    width: 32%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n.chef-text{\n    background-color: #161A30;\n    color: #F0ECE5;\n    text-align: center;\n    width: 100%;\n    border-radius: 20px;\n}\n\n","",{version:3,sources:["webpack://./src/styles.css"],names:[],mappings:"AAAA;IACI,iCAAiC;IACjC,SAAS;IACT,UAAU;AACd;AACA;IACI,WAAW;IACX,aAAa;AACjB;AACA;IACI,eAAe;IACf,WAAW;IACX,WAAW;IACX,aAAa;IACb,sBAAsB;IACtB,8BAA8B;IAC9B,mBAAmB;IACnB,yBAAyB;AAC7B;AACA;IACI,WAAW;AACf;AACA;IACI,aAAa;IACb,8BAA8B;;;AAGlC;AACA;IACI,yBAAyB;IACzB,kBAAkB;IAClB,kBAAkB;IAClB,cAAc;IACd,kBAAkB;IAClB,gCAAgC;;AAEpC;AACA;IACI,yBAAyB;IACzB;AACJ;AACA;IACI,aAAa;IACb,kCAAkC;IAClC,uBAAuB;IACvB,WAAW;IACX,YAAY;IACZ,yBAAyB;IACzB,gBAAgB;AACpB;AACA;IACI,yBAAyB;IACzB,cAAc;AAClB;AACA;IACI,aAAa;IACb,iFAAiF;IACjF,gBAAgB;IAChB,yBAAyB;IACzB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,SAAS;AACb;AACA;IACI,WAAW;IACX,aAAa;IACb,eAAe;IACf,8BAA8B;AAClC;AACA;IACI,uBAAuB;IACvB,UAAU;IACV,eAAe;IACf,kBAAkB;IAClB,2BAA2B;IAC3B,sBAAsB;IACtB,4CAA4C;;AAEhD;;AAEA;IACI,iCAAiC;IACjC,iBAAiB;IACjB,UAAU;IACV,cAAc;IACd,yBAAyB;IACzB,aAAa;IACb,mBAAmB;IACnB,gDAAgD;AACpD;;AAEA;IACI,YAAY;IACZ,yBAAyB;IACzB,SAAS;IACT,aAAa;IACb,2BAA2B;IAC3B,sBAAsB;IACtB,mBAAmB;IACnB,6EAA6E;;AAEjF;;AAEA;IACI,eAAe;IACf,kBAAkB;AACtB;AACA;IACI,iBAAiB;AACrB;;AAEA;IACI,WAAW;IACX,aAAa;IACb,eAAe;IACf,6BAA6B;IAC7B,QAAQ;AACZ;AACA;IACI,4CAA4C;IAC5C,WAAW;IACX,iBAAiB;IACjB,kBAAkB;IAClB,2BAA2B;IAC3B,sBAAsB;IACtB,UAAU;IACV,mBAAmB;AACvB;AACA;IACI,eAAe;IACf,aAAa;;IAEb,UAAU;IACV,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;AAC3B;AACA;IACI,yBAAyB;IACzB,cAAc;IACd,kBAAkB;IAClB,WAAW;IACX,mBAAmB;AACvB",sourcesContent:["*{\n    font-family: 'Courgette', cursive;\n    margin: 0;\n    padding: 0;\n}\nbody, .container{\n    width:100vw;\n    height: 100vh;\n}\n.header{\n    padding-top: 1%;\n    width: 100%;\n    height: 20%;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    background-color: #161A30;\n}\n.logo{\n    height: 70%;\n}\n.controls{\n    display: flex;\n    justify-content: space-between;\n    \n\n}\n.controls>button{\n    background-color: #161A30;\n    border-style: none;\n    padding: 10px 15px;\n    color: #F0ECE5;\n    font-size: 1.25rem;\n    font-family: 'Pacifico', cursive;\n    \n}\n.controls>button:hover{\n    background-color: #B6BBC4;\n    color:#161A30\n}\n.content-container{\n    display: grid;\n    grid-template-columns: 1fr 3fr 1fr;\n    grid-template-rows: 1fr;\n    width: 100%;\n    height: 100%;\n    background-color: #F0ECE5; \n    overflow: scroll;\n}\n#active-button{\n    background-color: #B6BBC4;\n    color: #161A30;\n}\n.content{\n    padding: 20px;\n    box-shadow: 6px 6px 8px -2px rgba(0,0,0,0.75), -6px 6px 8px -2px rgba(0,0,0,0.75);\n    grid-column: 2/3;\n    background-color: #B6BBC4;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 20px;\n}\n.image-container{\n    width: 100%;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n}\n.image-container>div{\n    background-color: white;\n    width: 30%;\n    padding-top:30%;    \n    border-radius: 50%;\n    background-position: center;\n    background-size: cover;\n    box-shadow: 5px 5px 2px 0px rgba(0,0,0,0.75);\n\n}\n\n.home-info{\n    font-family: 'Courgette', cursive;\n    font-size: 1.5rem;\n    width: 90%;\n    color: #F0ECE5;\n    background-color: #161A30;\n    padding: 20px;\n    border-radius: 15px;\n    box-shadow: 10px 10px 10px -4px rgba(0,0,0,0.75);\n}\n\n.package{\n    color: white;\n    background-color: #31304D;\n    width:90%;\n    padding: 20px;\n    background-position: center;\n    background-size: cover;\n    border-radius: 25px;\n    box-shadow: inset 0 0 0 1000px #626262bc,10px 10px 10px -4px rgba(0,0,0,0.75);\n    \n}\n\n.package-title{\n    font-size: 3rem;\n    margin-bottom: 10%;\n}\n.package-disc{\n    font-size: 1.5rem;\n}\n\n.portraits{\n    width: 100%;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-around;\n    gap:10px;\n}\n.portrait{\n    box-shadow: 5px 5px 2px 0px rgba(0,0,0,0.75);\n    width: 100%;\n    padding-top: 100%;\n    border-radius: 50%;\n    background-position: center;\n    background-size: cover;\n    flex: none;\n    margin-bottom: 20px;\n}\n.chef-container{\n    font-size: 2rem;\n    padding: 20px;\n\n    width: 32%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n.chef-text{\n    background-color: #161A30;\n    color: #F0ECE5;\n    text-align: center;\n    width: 100%;\n    border-radius: 20px;\n}\n\n"],sourceRoot:""}]);const c=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,a,r){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(i[d]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);o&&i[l[0]]||(void 0!==r&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=r),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),n.push(l))}},n}},537:e=>{e.exports=function(e){var n=e[1],t=e[3];if(!t)return n;if("function"==typeof btoa){var o=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),r="/*# ".concat(a," */");return[n].concat([r]).join("\n")}return[n].join("\n")}},379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var r={},i=[],c=0;c<e.length;c++){var d=e[c],s=o.base?d[0]+o.base:d[0],l=r[s]||0,p="".concat(s," ").concat(l);r[s]=l+1;var u=t(p),A={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)n[u].references++,n[u].updater(A);else{var f=a(A,o);o.byIndex=c,n.splice(c,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function a(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,a){var r=o(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<r.length;i++){var c=t(r[i]);n[c].references--}for(var d=o(e,a),s=0;s<r.length;s++){var l=t(r[s]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}r=d}}},569:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,a&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},520:(e,n,t)=>{t.d(n,{Z:()=>o});const o=(e,n,t)=>{const o=document.createElement("div"),a=document.createElement("div"),r=document.createElement("div");return a.textContent=n,r.textContent=t,a.classList.add("package-title"),r.classList.add("package-disc"),o.appendChild(a),o.appendChild(r),"#"==e.charAt(0)?o.style.backgroundColor=e:o.style.backgroundImage="url('"+e+"')",o.classList.add("package"),o.classList.add("meals-pack"),o}},912:(e,n,t)=>{t.r(n),t.d(n,{default:()=>B});const o=t.p+"2711ba79ef7c1dc9e65f55bf3d3d4c1f.png",a=t.p+"1f31f1985b23eb721a7a29c783391c91.jpg",r=t.p+"1909bc586cdfee8bf952d75a0b1460eb.jpeg",i=t.p+"5ee486854cf726000340f8dc41cfb2f3.jpeg",c=t.p+"bd8fe0ab06623d5d72b207df2498af9b.jpeg",d=t.p+"fcb1a92dfc723ab9cd5a3f9928199c64.jpeg",s=t.p+"2849a2e7adab6c43516ebc99909b7fc5.jpeg";var l=t(520);const p=()=>{const e=document.createElement("div");e.classList.add("content");const n=(0,l.Z)("#161A30","Our Chef, your Kitchen","Our chefs don't just cook; they bring a culinary theater to your home. With skillful artistry, they transform your kitchen into a stage of flavors, leaving behind nothing but culinary masterpieces and a spotless kitchen. Experience the luxury of fine dining in the comfort of your home.");let t=[[a,"Chef 1","Gourmet Food"],[r,"Chef 2","Italian food"],[i,"Chef 3","Mediterranean food"],[c,"Chef 4","Asian Food"],[d,"Chef 5","Baker"],[s,"Chef 6","Vegan Dishes"]];return n.style.boxShadow="10px 10px 10px -4px rgba(0,0,0,0.75)",n.querySelector(".package-title").style.marginBottom="0",e.appendChild(n),e.appendChild((e=>{const n=document.createElement("div");for(let t=0;t<e.length;t++){const o=document.createElement("div");o.classList.add("chef-container");const a=document.createElement("div");a.classList.add("portrait"),a.style.backgroundImage="url('"+e[t][0]+"')";const r=document.createElement("div"),i=document.createElement("div");r.classList.add("chef-text"),i.classList.add("chef-text"),r.textContent=e[t][1],i.textContent=e[t][2],o.appendChild(a),o.appendChild(r),o.appendChild(i),n.appendChild(o)}return n.classList.add("portraits"),n})(t)),e},u=t.p+"93507e7d6ae1d46b5f34f4255ad0cdd6.jpeg",A=t.p+"9d512b66089892532f63b7f8ce374f0d.jpeg",f=t.p+"96c3176eded5e181241c4962e4ffa5e5.jpeg",h=t.p+"9474bc74627515098204c20adfeb21ea.jpeg",g=(e,n,t)=>{const o=document.createElement("div"),a=document.createElement("div"),r=document.createElement("div");return o.style.backgroundImage="url("+e+")",a.textContent=n,r.textContent=t,a.classList.add("package-title"),r.classList.add("package-disc"),o.appendChild(a),o.appendChild(r),o.classList.add("package"),o};var m=t(153);const C=t.p+"cd551569fc443efa6c58c8856fa46d16.jpeg",b=t.p+"1600f3eb9b387132ad17fca011d57dc5.jpeg",y=t.p+"258d6e48e15ed53512d67d3a2d0b35ba.jpeg",x=t.p+"f2487b154a85ae83041d745b8dda1f40.jpeg",v=e=>{document.querySelector(".controls").childNodes.forEach((e=>{e.removeAttribute("id")}));const n=document.querySelector(".content-container");n.innerHTML="";let t=e.target.dataset.key;"home"==t?(n.appendChild((0,m.Z)()),e.target.setAttribute("id","active-button")):"catering"==t?(n.appendChild((()=>{const e=document.createElement("div");e.classList.add("content");const n=g(u,"Wedding","Experience the art of elegance with our bespoke wedding catering service, where every dish is a masterpiece crafted with love. Let us turn your dream day into an unforgettable symphony of flavor, creating memories that linger like the sweetest taste."),t=g(A,"Events","Transform your events into a mosaic of memorable tastes with our catering service. Each dish we serve is a testament to culinary excellence, designed to elevate your gatherings into a luxurious feast for the senses."),o=g(f,"Birthday Bundle!","Celebrate life's special moments with our birthday bundles. Indulge in a culinary fiesta where flavors dance to the rhythm of your joy, making every birthday not just a party, but a gourmet festival."),a=g(h,"Holidays","Embrace the spirit of the holidays with our festive feasts. From Christmas warmth to Ramadan reflections, our holiday menus are crafted to complement the essence of each celebration, turning your festive gatherings into a banquet of joy and togetherness.");return e.appendChild(n),e.appendChild(t),e.appendChild(o),e.appendChild(a),e})()),console.log(e.target),e.target.setAttribute("id","active-button")):"meals"==t?(n.appendChild((()=>{const e=document.createElement("div");e.classList.add("content");const n=(0,l.Z)(C,"1 Meal Monthly","Enjoy the convenience of a professionally crafted meal delivered right to your doorstep every day for 30 days. With our 1 Meal Package, savor the deliciousness of a thoughtfully prepared dish, made from your personally chosen ingredients. Tailor your meal to perfection and experience culinary delight effortlessly."),t=(0,l.Z)(b,"2 Meal Monthly","Elevate your dining experience with our 2 Meal Package, offering the luxury of two gourmet meals delivered daily for 30 days. Whether it's a delightful lunch and a sumptuous dinner or any combination you desire, you have the flexibility to customize each meal. Experience the culinary expertise of our chefs while relishing the convenience of Chef-to-Door."),o=(0,l.Z)(y,"3 Meal Monthly","Indulge in a culinary journey with our 3 Meal Package, providing the ultimate dining solution with three delicious meals delivered every day for 30 days. Immerse yourself in a world of flavors as you customize each meal to your heart's content. Breakfast, lunch, and dinner – all expertly prepared and conveniently brought to your doorstep. Experience gourmet dining without the hassle, only with Chef-to-Door."),a=(0,l.Z)(x,"Student Discount","We understand the hectic life of students, and that's why we've tailored a special discount package just for you! Customize your daily meals with flexibility, ranging from 1 to 3 delicious options per day. Whether you need a quick bite or a complete three-course meal, our Student Discount Package ensures that you get the nourishment you need at an affordable price. Elevate your dining experience without breaking the bank – because great food should always be within reach for students. Enjoy the convenience and flavor with Chef-to-Door's Student Discount Package.");return e.appendChild(n),e.appendChild(t),e.appendChild(o),e.appendChild(a),e})()),e.target.setAttribute("id","active-button")):"chefs"==t&&(n.appendChild(p()),e.target.setAttribute("id","active-button"))},B=()=>{const e=document.createElement("div"),n=new Image,t=(()=>{const e=document.createElement("div"),n=document.createElement("button"),t=document.createElement("button"),o=document.createElement("button"),a=document.createElement("button");return n.textContent="Home",t.textContent="Catering",a.textContent="Personal Meals",o.textContent="Our Chefs",n.setAttribute("data-key","home"),n.addEventListener("click",v),t.setAttribute("data-key","catering"),t.addEventListener("click",v),a.setAttribute("data-key","meals"),a.addEventListener("click",v),o.setAttribute("data-key","chefs"),o.addEventListener("click",v),e.appendChild(n),e.appendChild(t),e.appendChild(a),e.appendChild(o),e.classList.add("controls"),e})();return n.classList.add("logo"),e.classList.add("header"),n.src=o,e.appendChild(n),e.appendChild(t),e}},153:(e,n,t)=>{t.d(n,{Z:()=>l});const o=t.p+"9f4ee822dee3f7036023e8328c433d67.jpeg",a=t.p+"01216184e37be8f9aff80a4cb262c86e.jpeg",r=t.p+"170b2cf373860a564aa293ef4b8715bf.jpeg";var i=t(520);const c=t.p+"542c736a465c29d579dd6c838ab30b94.png",d=e=>{const n=document.createElement("div");n.classList.add("image-container");for(let t=0;t<e.length;t++){const o=document.createElement("div");o.classList.add("image"),o.style.backgroundImage="url('"+e[t]+"')",n.appendChild(o)}return n},s=()=>{const e=document.createElement("div");return e.classList.add("home-info"),e},l=()=>{const e=document.createElement("div");e.classList.add("content");let n=[o,a,r];e.appendChild(d(n));const t=s(),l=s();return t.textContent="Embark on a culinary journey with us, where your satisfaction is our canvas and exceptional dining experiences are the masterpiece. At Chef-To-Door, we blend the art of fine cuisine with the warmth of unparalleled service. Our mission is to transform your every meal into a poetic encounter, leaving a symphony of flavors that resonate with your most cherished moments. Let us be the architects of your gastronomic delights, crafting experiences that go beyond mere satisfaction - they enchant, they linger, they redefine dining.",l.textContent="Discover a world where culinary dreams come true. Our website is your gateway to: \n Exquisite Catering Services: From intimate gatherings to grand celebrations.\n Personal Chef Experience: Bespoke meals, cooked in your kitchen, leaving no trace but delicious memories. \n Customizable Personal Meals: Your choice, our creation - delivered right to your doorstep. \nStudent Delight Program: Exclusive discounts for the university community. \n Event Bundles: Tailored packages for every occasion, making every event a culinary celebration.",e.appendChild(t),e.appendChild(l),e.appendChild((()=>{const e=document.createElement("div"),n=(0,i.Z)("#161A30","Contact Us","Phone Number: +961-12 345 678 \nEmail: ChefToDoor@outlook.com"),t=d([c]);return e.appendChild(n),e.appendChild(t),t.style.justifyContent="center",t.style.alignItems="center",e.style.display="flex",e.style.width="100%",e.style.justifyContent="center",e.style.alignItems="space-between",n.style.boxShadow="10px 10px 10px -4px rgba(0,0,0,0.75)",e})()),e}}},n={};function t(o){var a=n[o];if(void 0!==a)return a.exports;var r=n[o]={id:o,exports:{}};return e[o](r,r.exports,t),r.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var o=n.getElementsByTagName("script");if(o.length)for(var a=o.length-1;a>-1&&!e;)e=o[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.nc=void 0,(()=>{var e=t(153),n=t(379),o=t.n(n),a=t(795),r=t.n(a),i=t(569),c=t.n(i),d=t(565),s=t.n(d),l=t(216),p=t.n(l),u=t(589),A=t.n(u),f=t(28),h={};h.styleTagTransform=A(),h.setAttributes=s(),h.insert=c().bind(null,"head"),h.domAPI=r(),h.insertStyleElement=p(),o()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals;const{default:g}=t(912);(()=>{const n=document.querySelector(".container");n.append(g());const t=(()=>{const e=document.createElement("div");return e.classList.add("content-container"),e})();t.appendChild((0,e.Z)()),n.append(t)})()})()})();
//# sourceMappingURL=bundle.js.map