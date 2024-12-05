import './polyfills.server.mjs';
import{A as F,G as P,a as r,b as S,c as I,d as p,e as u,f as e,g as t,h as m,i as E,j as o,k as f,l as k,m as l,r as D,u as M,w as N,x as A}from"./chunk-DKUQMNR4.mjs";var x=class i{static \u0275fac=function(n){return new(n||i)};static \u0275cmp=r({type:i,selectors:[["app-nav"]],standalone:!0,features:[l],decls:18,vars:0,consts:[[1,"fixed","flex","w-full","h-24","pt-2","pl-24","bg-white","border-2","drop-shadow-2xl","border-cyan-600"],["href","#"],[1,"flex","flex-col"],[1,"px-8","text-6xl","font-semibold","text-cyan-600"],[1,"text-md","text-cyan-600","w-96"],[1,"flex","flex-row","justify-between","w-full","pt-8","text-2xl","text-cyan-600","mr-72","ml-52"],["href","#home"],["href","#clients"],["href","#aboutus"],["href","#contactus"],["href","https://forms.gle/akhtmmPhwK3EVrSf8"]],template:function(n,a){n&1&&(e(0,"nav",0)(1,"a",1)(2,"div",2)(3,"div",3),o(4,"A P S"),t(),e(5,"div",4),o(6,"airways placement services"),t()()(),e(7,"div",5)(8,"a",6),o(9,"Home"),t(),e(10,"a",7),o(11,"Clients"),t(),e(12,"a",8),o(13,"About US"),t(),e(14,"a",9),o(15,"Contact Us"),t(),e(16,"a",10),o(17,"Form"),t()()())}})};var g=class i{currentImageIndex=0;totalImages=5;intervalId;ngOnInit(){this.intervalId=window.setInterval(()=>{this.nextImage()},3e3)}ngOnDestroy(){this.intervalId&&clearInterval(this.intervalId)}nextImage(){this.currentImageIndex=(this.currentImageIndex+1)%this.totalImages}prevImage(){this.currentImageIndex=(this.currentImageIndex-1+this.totalImages)%this.totalImages}static \u0275fac=function(n){return new(n||i)};static \u0275cmp=r({type:i,selectors:[["app-carousel"]],standalone:!0,features:[l],decls:15,vars:10,consts:[[1,"relative","w-full","h-full","bg-red-500"],[1,"absolute","flex","w-full","h-full","sm:h-80"],[1,"flex","justify-between","w-full","mx-3","my-auto"],[1,"text-white",3,"click"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24","stroke-width","1.5","stroke","currentColor",1,"w-6","h-6"],["stroke-linecap","round","stroke-linejoin","round","d","M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"],["stroke-linecap","round","stroke-linejoin","round","d","M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"],["id","slider",1,"w-full","h-full","mx-px","my-px"],["src","https://i.pinimg.com/736x/a7/8c/d1/a78cd122324ef28372980dbf65ce8fcf.jpg","alt","",1,"w-full","h-full"],["src","https://miro.medium.com/v2/resize:fit:1200/1*JktzC9GrA_l4yz0cCy8a5Q.jpeg","alt","",1,"w-full","h-full"],["src","https://thumbs.dreamstime.com/b/courier-delivery-black-man-driver-driving-car-boxes-packages-high-resolution-124918588.jpg","alt","",1,"w-full","h-full"],["src","https://b3503797.smushcdn.com/3503797/wp-content/uploads/2023/01/iStock-1341381755-1024x683.jpg?lossy=2&strip=1&webp=1","alt","",1,"w-full","h-full"],["src","carpenter.jpg","alt","",1,"w-full","h-full"]],template:function(n,a){n&1&&(e(0,"div",0)(1,"div",1)(2,"div",2)(3,"button",3),E("click",function(){return a.prevImage()}),S(),e(4,"svg",4),m(5,"path",5),t()(),I(),e(6,"button",3),E("click",function(){return a.nextImage()}),S(),e(7,"svg",4),m(8,"path",6),t()()()(),I(),e(9,"div",7),m(10,"img",8)(11,"img",9)(12,"img",10)(13,"img",11)(14,"img",12),t()()),n&2&&(p(10),u("hidden",a.currentImageIndex!==0),p(),u("hidden",a.currentImageIndex!==1),p(),u("hidden",a.currentImageIndex!==2),p(),u("hidden",a.currentImageIndex!==3),p(),u("hidden",a.currentImageIndex!==4))}})};var b=class i{static \u0275fac=function(n){return new(n||i)};static \u0275cmp=r({type:i,selectors:[["app-home"]],standalone:!0,features:[l],decls:7,vars:0,consts:[["id","home",1,"h-screen"],[1,"border-2","border-black","pt-24","h-3/4"],[1,"text-2xl","font-semibold","text-center","pt-7"],[1,"pt-4","text-xl","text-justify","mx-72","textIntent"]],template:function(n,a){n&1&&(e(0,"div",0)(1,"div",1),m(2,"app-carousel"),t(),e(3,"h1",2),o(4,"Welcome to Airways placement services"),t(),e(5,"p",3),o(6,"Welcome to Airways Placement Services, your trusted partner in career excellence and workforce solutions. We are dedicated to bridging the gap between talented individuals and reputable organizations, delivering unparalleled recruitment services tailored to your needs. Together, let's achieve success and unlock new opportunities."),t()())},dependencies:[g]})};var v=class i{static \u0275fac=function(n){return new(n||i)};static \u0275cmp=r({type:i,selectors:[["app-clients"]],standalone:!0,features:[l],decls:3,vars:0,consts:[["id","clients",1,"h-screen","bg-slate-600"],[1,"pt-32","text-5xl","font-semibold","text-center","text-white","underline"]],template:function(n,a){n&1&&(e(0,"div",0)(1,"h1",1),o(2,"Our Clients"),t()())}})};var h=class i{description="We are committed to delivering excellent service and providing innovative solutions for our customers. Our team works tirelessly to meet and exceed expectations.";mission="To provide exceptional value and foster long-term relationships through our commitment to excellence.";vision="To be a leader in our industry by setting standards of quality, innovation, and trust.";static \u0275fac=function(n){return new(n||i)};static \u0275cmp=r({type:i,selectors:[["app-aboutus"]],standalone:!0,features:[l],decls:16,vars:3,consts:[["id","aboutus",1,"h-screen","bg-slate-500"],[1,"pt-32","text-5xl","font-semibold","text-center","text-white","underline"],[1,"mx-24","my-8","text-lg","leading-relaxed","text-black"],[1,"w-5/6","p-6","mx-24","mb-6","bg-gray-100","rounded-lg","shadow-md"],[1,"mb-4","text-2xl","font-semibold","text-gray-800"],[1,"w-5/6","p-6","mx-24","bg-gray-100","rounded-lg","shadow-md"]],template:function(n,a){n&1&&(e(0,"div",0)(1,"h1",1),o(2,"About Us"),t(),e(3,"div",2)(4,"p"),o(5),t()(),e(6,"div",3)(7,"h2",4),o(8,"Our Mission"),t(),e(9,"p"),o(10),t()(),e(11,"div",5)(12,"h2",4),o(13,"Our Vision"),t(),e(14,"p"),o(15),t()()()),n&2&&(p(5),f(a.description),p(5),f(a.mission),p(5),f(a.vision))}})};var C=class i{mailId="airwayplacementservices@gmail.com";static \u0275fac=function(n){return new(n||i)};static \u0275cmp=r({type:i,selectors:[["app-contactus"]],standalone:!0,features:[l],decls:26,vars:1,consts:[["id","contactus",1,"h-screen","bg-slate-800"],[1,"pt-32","text-5xl","font-semibold","text-center","text-white","underline"],[1,"flex","flex-row","pt-20","mx-20"],[1,"w-full","text-white","h-96"],[1,"mx-20","mt-10","text-xl","font-semibold"],["action","https://formsubmit.co/airwaysplacementservices.md@gmail.com","method","POST",1,"flex","flex-col","mx-20","mt-10"],["for","name",1,"font-sans","font-semibold"],["type","text","name","name","id","name",1,"border-2","border-black","rounded-lg","w-96"],["for","Email",1,"font-sans","font-semibold"],["type","email","name","Email","id","Email",1,"border-2","border-black","rounded-lg","w-96"],["for","number",1,"font-sans","font-semibold"],["type","tel","name","number","id","number",1,"border-2","border-black","rounded-lg","w-96"],["for","message",1,"font-sans","font-semibold"],["name","message","id","message",1,"text-black","border-2","border-black","rounded-lg","w-96"],["type","submit","value","Send",1,"w-20","px-3","py-2","mt-3","font-serif","text-xl","font-extrabold","text-black","bg-white","border-2","border-black","rounded-xl"],[1,"pt-10","font-semibold"],[1,"font-semibold"]],template:function(n,a){n&1&&(e(0,"div",0)(1,"h1",1),o(2,"Contact Us"),t(),e(3,"div",2)(4,"div",3)(5,"h1",4),o(6,"How can we Help you ?"),t(),e(7,"form",5)(8,"label",6),o(9,"Name :"),t(),m(10,"input",7),e(11,"label",8),o(12,"Email :"),t(),m(13,"input",9),e(14,"label",10),o(15,"Phone number :"),t(),m(16,"input",11),e(17,"label",12),o(18,"Message :"),t(),m(19,"textarea",13)(20,"input",14),t()(),e(21,"div",3)(22,"h1",15),o(23,"Mobile Number : 9380882191"),t(),e(24,"label",16),o(25),t()()()()),n&2&&(p(25),k("Email : ",a.mailId,""))}})};var w=class i{static \u0275fac=function(n){return new(n||i)};static \u0275cmp=r({type:i,selectors:[["app-footer"]],standalone:!0,features:[l],decls:5,vars:0,consts:[[1,"flex","justify-between","w-full","h-20","pt-8","font-serif","text-xl","bg-slate-400"],[1,"ml-20"],[1,"mr-20"]],template:function(n,a){n&1&&(e(0,"div",0)(1,"div",1),o(2,"managing director : Sajitha P. J"),t(),e(3,"div",2),o(4,"Credits : JTSoftwareSolutions"),t()())}})};var y=class i{title="Aps_website";static \u0275fac=function(n){return new(n||i)};static \u0275cmp=r({type:i,selectors:[["app-root"]],standalone:!0,features:[l],decls:7,vars:0,consts:[[1,"w-full","h-max"]],template:function(n,a){n&1&&(e(0,"div",0),m(1,"app-nav")(2,"app-home")(3,"app-clients")(4,"app-aboutus")(5,"app-contactus")(6,"app-footer"),t())},dependencies:[x,b,v,h,C,w]})};var T=[];var j={providers:[D({eventCoalescing:!0}),P(T),A()]};var O={providers:[F()]},_=M(j,O);var z=()=>N(y,_),xe=z;export{xe as a};