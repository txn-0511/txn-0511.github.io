"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[397],{913:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var a=n(2322),i=n(3866),o=n(7896),r=n(2784),c={icon:function(e,t){return{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M923 283.6a260.04 260.04 0 00-56.9-82.8 264.4 264.4 0 00-84-55.5A265.34 265.34 0 00679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 00-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z",fill:e}},{tag:"path",attrs:{d:"M679.7 201c-73.1 0-136.5 40.8-167.7 100.4C480.8 241.8 417.4 201 344.3 201c-104 0-188.3 82.6-188.3 184.5 0 201.2 356 429.3 356 429.3s356-228.1 356-429.3C868 283.6 783.7 201 679.7 201z",fill:t}}]}},name:"heart",theme:"twotone"},l=n(2258),s=r.forwardRef(function(e,t){return r.createElement(l.Z,(0,o.Z)({},e,{ref:t,icon:c}))}),h=n(789);function u(e){let{languages:t}=e,{t:n}=(0,h.$G)(),{lang:i}=(0,h.gE)();return(0,a.jsx)("nav",{children:t.map(e=>{let{key:t,text:o,localizedText:r}=e,c="language-button-wrapper";return t===i&&(c+=" selected"),(0,a.jsxs)("div",{className:c,children:[(0,a.jsx)("span",{children:"\xa0\xa0"}),(0,a.jsx)(h.Ww,{lang:t,children:null!=o?o:n(r)},t),(0,a.jsx)("span",{children:"\xa0\xa0"})]},t)})})}function d(e){let{videoUrl:t,fallbackGiftUrl:n,style:o,onLoaded:c}=e,[l,s]=(0,r.useState)(!0),[h,u]=(0,r.useState)(!0),d=(0,r.useRef)(null);(0,r.useEffect)(()=>{/iPad|iPhone|iPod/.test(navigator.userAgent)&&new(void 0)({videoSelector:".app-bg-video",canvasSelector:".app-bg-canvas",timelineSelector:!1,autoplay:!0,makeLoop:!0,pauseOnClick:!1,audio:!1}),setTimeout(()=>{(function(){let e=d.current;return null!=e&&e.currentTime>0&&!e.paused&&!e.ended&&e.readyState>2})()?(console.log("canPlay True"),s(!0)):(console.log("canPlay False"),s(!1),h&&null!=c&&c())},3e3)});let m=!0===l?{display:"none"}:o,g=!1===l?{display:"none"}:o,p=(0,r.useMemo)(()=>(0,i.zo)("video",g),[o]);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(p,{ref:d,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,className:"app-bg-video",onCanPlayThrough:c,children:(0,a.jsx)("source",{src:t,type:"video/mp4"})}),(0,a.jsx)("canvas",{className:"app-bg-canvas",style:{display:"none"}}),n&&(0,a.jsx)("img",{src:n,onLoadedData:function(){u(!0),l||null==c||c()},style:m})]})}let m=(0,i.zo)("div",{width:"100%",height:"100vh",overflow:"hidden",margin:"0px auto",position:"relative"}),g=(0,i.zo)("div",{position:"absolute",width:"100%",top:"20%",left:"50%",transform:"translate(-50%, -50%)",textAlign:"center",textShadow:"-1px 0 #9e9e9e, 0 1px #9e9e9e, 1px 0 #9e9e9e, 0 -1px #9e9e9e",animation:"fadein 3s","-moz-animation":"fadein 3s","-webkit-animation":"fadein 3s","-o-animation":"fadein 3s"});(0,i.zo)("img",{backgroundColor:"#aeb8b3 !important",opacity:.9,objectFit:"cover",objectPosition:"center center",width:"100%",height:"100%",minHeight:480});let p=(0,i.zo)("p",{fontSize:"1.5vh",opacity:.45,marginBottom:16}),y=(0,i.zo)("p",{fontSize:"2vh",opacity:.65,marginBottom:24});function b(e){let{onLoaded:t}=e,{t:n}=(0,h.$G)();return(0,a.jsxs)(m,{children:[(0,a.jsx)(d,{videoUrl:"./assets/BackgroundVideo.mp4",fallbackGiftUrl:"./assets/Background.gif",style:{backgroundColor:"#aeb8b3 !important",opacity:.9,objectFit:"cover",objectPosition:"center center",width:"100%",height:"100%",minHeight:480},onLoaded:t}),(0,a.jsxs)(g,{children:[(0,a.jsx)(u,{languages:[{key:"vn",text:"VN"},{key:"en",text:"EN"}]}),(0,a.jsx)(p,{children:n("message.titleSlide.title")}),(0,a.jsxs)("p",{id:"title-text",children:[(0,a.jsx)("span",{id:"title-text-pad",children:"\xa0\xa0\xa0\xa0\xa0"}),n("data.groom.name")," ",(0,a.jsx)(s,{twoToneColor:"#fe7daf"})," ",n("data.bride.name")]}),(0,a.jsxs)(y,{children:[n("message.titleSlide.message"),(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),n("data.date")]})]})]})}},6441:function(e,t,n){var a=n(3983),i=n(1547);e.exports={translations:{en:a,vn:i},defaultLang:"vn",useBrowserDefault:!1,languageDataStore:"query"}},3983:function(e){e.exports=JSON.parse('{"message":{"titleSlide":{"title":"WEDDING INVITATION","message":"Save the date"},"greetingSlide":{"title":"Meet the Couple"},"gallerySlide":{"title":"Gallery"},"partySlide":{"title":"Directions","mapButton":"View on Google Map","groomParty":"Party at Groom\'s house","brideParty":"Party at Bride\'s house"},"congratulationMoneySlide":{"title":"Send Your Congratulations","content":"Please convey your congratulations by sending a monetary gift.","sendGroomMoney":"Send Groom a gift","groomAccountTitle":"Groom\'s Account Number","sendBrideMoney":"Send Bride a gift","brideAccountTitle":"Bride\'s Account Number","fatherLabel":"Father) ","motherLabel":"Mother) ","clickToCopy":"Clicking the account number will copy it as a text that can be pasted.","copySuccess":"The account number has been copied."},"thankYouSlide":{"title":"Thank you {{guestName}}","description":"Your presence is an honor for us \uD83E\uDD35\uD83D\uDC70","linkCopySuccess":"The invitation link has been copied.","shareLink":"Share"}},"data":{"date":"November 9-10th, 2024","greeting":"We have nurtured our love while facing each other,\\nNow we wish to grow it into a great love that we can walk towards together.\\nWe would be grateful if you could bless our future\\nso that we can protect it in the name of love.","groom":{"name":"Viet Toan","introduction":"A gentle and quiet soul, he deeply values friendship and cherishes his family. He believes that \'Family is the strongest support and the peaceful harbor unmatched by any other—a place filled with love to which we can always return.\'","bankName":"TP Bank","accountNumber":"00001565713","accountName":"TRAN VIET TOAN","partyTime":"11:00 November 10th, 2024","partyLocation":"Cultural Center of Thanh Tri District, Van Dien Town, Thanh Tri District, Hanoi","partyLocationUrl":"https://maps.app.goo.gl/4Jbb2QLTtdbuDGmi8","parents":{"mother":{"name":"Nguyễn Thị Thất"},"father":{"name":"Trần Văn Đợi"}}},"bride":{"name":"Hong Nhung","introduction":"A spirited young woman from Nam Dinh, she carries dreams of studying and working in Hanoi. A petite girl with a big heart.","bankName":"BIDV","accountNumber":"2600612093","accountName":"PHAM THI HONG NHUNG","partyTime":"10:30 November 9th, 2024","partyLocation":"Village B, Nam Duong Commune, Nam Truc District, Nam Dinh","partyLocationUrl":"https://maps.app.goo.gl/6CB7vcqLhQPcpi4DA","parents":{"mother":{"name":"Phạm Thị Quy"},"father":{"name":"Phạm Văn Kho\xe1"}}},"wedding_invitation_url":"https://txn-0511.github.io"}}')},1547:function(e){e.exports=JSON.parse('{"message":{"titleSlide":{"title":"WEDDING INVITATION","message":"Save the date"},"greetingSlide":{"title":"C\xf4 d\xe2u & Ch\xfa rể"},"gallerySlide":{"title":"Album ảnh cưới"},"partySlide":{"title":"Sự kiện cưới","mapButton":"Chỉ đường tr\xean Google Map","groomParty":"Dự tiệc tại nh\xe0 ch\xfa rể","brideParty":"Dự tiệc tại nh\xe0 c\xf4 d\xe2u"},"congratulationMoneySlide":{"title":"Hộp mừng cưới","content":"Please convey your congratulations by sending a monetary gift.","sendGroomMoney":"Gửi qu\xe0 tới ch\xfa rể","groomAccountTitle":"Số t\xe0i khoản ch\xfa rể","sendBrideMoney":"Gửi qu\xe0 tới c\xf4 d\xe2u","brideAccountTitle":"Số t\xe0i khoản c\xf4 d\xe2u","fatherLabel":"Father) ","motherLabel":"Mother) ","clickToCopy":"Hint: Bấm v\xe0o số t\xe0i khoản để copy","copySuccess":"Copy số t\xe0i khoản th\xe0nh c\xf4ng"},"thankYouSlide":{"title":"Thank you {{guestName}}","description":"Sự c\xf3 mặt của bạn l\xe0 niềm vinh dự với ch\xfang t\xf4i \uD83E\uDD35\uD83D\uDC70","linkCopySuccess":"Copy link th\xe0nh c\xf4ng","shareLink":"Chia sẻ"}},"data":{"date":"Ng\xe0y 9-10 Th\xe1ng 11 2024","groom":{"name":"Viết To\xe0n","introduction":"Một người hiền l\xe0nh v\xe0 \xedt n\xf3i. Lu\xf4n coi trọng t\xecnh cảm v\xe0 y\xeau thương gia đ\xecnh. Với anh: “Gia đ\xecnh l\xe0 điểm tựa vững chắc nhất v\xe0 l\xe0 bến đỗ b\xecnh y\xean kh\xf4ng đ\xe2u s\xe1nh bằng đối với mỗi con người. Đ\xf3 lu\xf4n l\xe0 nơi tr\xe0n ngập t\xecnh y\xeau thương để ta trở về.”","bankName":"TP Bank","accountNumber":"00001565713","accountName":"TRAN VIET TOAN","partyTime":"11 giờ ng\xe0y 10 th\xe1ng 11 năm 2024","partyLocation":"Trung t\xe2m văn ho\xe1 huyện Thanh Tr\xec, thị trấn Văn Điển, huyện Thanh Tr\xec, H\xe0 Nội","partyLocationUrl":"https://maps.app.goo.gl/4Jbb2QLTtdbuDGmi8","parents":{"mother":{"name":"Nguyễn Thị Thất"},"father":{"name":"Trần Văn Đợi"}}},"bride":{"name":"Hồng Nhung","introduction":"C\xf4 g\xe1i đến từ Nam Định mang theo ho\xe0i b\xe3o v\xe0 ước mơ l\xean H\xe0 Nội học tập v\xe0 l\xe0m việc. L\xe0 một người nhỏ nhắn, hay cười v\xe0 c\xf3 tr\xe1i tim ấm \xe1p.","bankName":"BIDV","accountNumber":"2600612093","accountName":"PHAM THI HONG NHUNG","partyTime":"10 giờ 30 ph\xfat ng\xe0y 10 th\xe1ng 11 năm 2024","partyLocation":"Th\xf4n chiền B, x\xe3 Nam Dương, huyện Nam Trực, Nam Định","partyLocationUrl":"https://maps.app.goo.gl/6CB7vcqLhQPcpi4DA","parents":{"mother":{"name":"Phạm Thị Quy"},"father":{"name":"Phạm Văn Kho\xe1"}}},"wedding_invitation_url":"https://txn-0511.github.io"}}')}}]);