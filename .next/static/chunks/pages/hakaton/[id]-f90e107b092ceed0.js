(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[864],{4623:function(a,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hakaton/[id]",function(){return n(1593)}])},701:function(a,e,n){"use strict";n.d(e,{Z:function(){return h}});var r=n(5893),t=(n(7294),n(6763)),i=n.n(t),o=(n(5966),n(960),n(5152)),l=n.n(o),s=n(1163);n(1664),n(9755);window.$=window.jQuery=n(9755);var c=l()((function(){return n.e(568).then(n.t.bind(n,2568,23))}),{loadableGenerated:{webpack:function(){return[2568]}},ssr:!1});function h(a){var e=(0,s.useRouter)(),n=e.locale,t=e.pathname,o=a.HomeContent,l=a.partners,h=a.status;return(0,r.jsxs)("div",{className:i().initpartners+" initpartners",children:[o.partner.filter((function(a){return a.languages_code===n})).map((function(a,e){var n=a.title,o=a.desc;return(0,r.jsxs)("div",{className:"active"===h&&i().active,children:[(0,r.jsx)("div",{className:"/hakaton/[id]"===t&&i().partnersForHak,children:(0,r.jsx)("h3",{children:n})}),(0,r.jsx)("p",{children:o})]},e)})),(0,r.jsx)("div",{className:i().sliders+" sliders",children:(0,r.jsx)(c,{className:i().slider,loop:!0,margin:10,dots:!1,nav:!0,responsive:{0:{items:2,margin:5},580:{items:2,margin:10},900:{items:3,margin:20},1200:{items:4,margin:20},1400:{items:4,margin:10}},autoplay:!0,autoplayTimeout:15e5,children:l.map((function(a){var e=a.id,n=a.partner_link,t=a.partner_image,o=a.partner_title;return(0,r.jsxs)("a",{href:n,target:"_blank",className:i().item,children:[(0,r.jsx)("img",{src:"https://admin.uzbekvoice.ai/assets/".concat(t)}),(0,r.jsx)("span",{children:o})]},e)}))})})]})}},1593:function(a,e,n){"use strict";n.r(e),n.d(e,{__N_SSP:function(){return I},default:function(){return R}});var r=n(5893),t=n(7294),i=n(9276),o=(n(6205),n(2e3)),l=n.n(o),s=n(1163);function c(a){var e=a.data,o=a.galleryID,c=(0,s.useRouter)(),h=c.query,d=c.locale,u=(0,t.useState)(8),_=u[0],m=u[1],p=e.filter((function(a){return a.hackathons_translations_id===parseInt(h.id)})),k=_-p.length;if(k>0)for(var g=0;g<k;g++)p.push({directus_files_id:""});return(0,t.useEffect)((function(){var a=new i.Z({gallery:"#"+o,children:"a",showAnimationDuration:200,hideAnimationDuration:50,pswpModule:function(){return n.e(687).then(n.bind(n,5826))}});return a.init(),function(){a.destroy(),a=null}}),[]),(0,r.jsxs)("div",{className:l().hakatonFoto,children:["uz-UZ"===d?(0,r.jsx)("h3",{className:l().hakatonFoto_title,children:"Foto"}):"ru-RU"===d?(0,r.jsx)("h3",{className:l().hakatonFoto_title,children:"\u0424\u043e\u0442\u043e"}):(0,r.jsx)("h3",{className:l().hakatonFoto_title,children:"Photo"}),(0,r.jsx)("div",{className:l().hakatonFoto_wrapper+" pswp-gallery",id:o,children:p.slice(0,_).map((function(a,e){return a.directus_files_id?(0,r.jsx)("a",{"data-pswp-src":"https://admin.uzbekvoice.ai/assets/".concat(a.directus_files_id),target:"_blank",rel:"noreferrer","data-pswp-width":"1200","data-pswp-height":"800",children:(0,r.jsx)("img",{src:"https://admin.uzbekvoice.ai/assets/".concat(a.directus_files_id),alt:a.directus_files_id})},o+"-"+e):(0,r.jsx)("span",{})}))}),p.length>8&&_<12&&(0,r.jsx)("button",{onClick:function(){return m(_+4)},type:"button",children:"uz-UZ"===d?"Yana yuklash":"ru-RU"===d?"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0435":"Load more"})]})}var h=n(9606),d=n.n(h);function u(a){var e=a.data,n=(0,s.useRouter)(),t=n.locale,i=n.query;return e.filter((function(a){return a.languages_code===t&&a.hackathons_id===parseInt(i.id)})).map((function(a){var e=a.id,n=a.hackathons_id,i=a.hackathon_projects_count,o=a.hackathon_teams_count,l=a.hackathon_title,s=(a.hackathons_content,a.hackathons_participants_count),c=(a.hackaton_dates,a.status);return(0,r.jsx)("div",{className:1===n?d().hakatonHeroWrappper+" "+d().one:d().hakatonHeroWrappper,children:(0,r.jsx)("div",{className:"container__fluid",children:(0,r.jsxs)("div",{className:"active"===c?d().hakatonHero+" "+d().active:d().hakatonHero,children:[(0,r.jsx)("h3",{className:d().hakatonHero_Left,children:l}),"active"!==c&&(0,r.jsxs)("div",{className:d().hakatonHero_Right,children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h4",{children:s}),"uz-UZ"===t?(0,r.jsx)("p",{children:"Qatnashchilar"}):"ru-RU"===t?(0,r.jsx)("p",{children:"\u0423\u0447\u0430\u0441\u0442\u043d\u0438\u043a\u0438"}):(0,r.jsx)("p",{children:"Participants"})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h4",{children:o}),"uz-UZ"===t?(0,r.jsx)("p",{children:"Jamoa"}):"ru-RU"===t?(0,r.jsx)("p",{children:"\u041a\u043e\u043c\u0430\u043d\u0434\u0430"}):(0,r.jsx)("p",{children:"Team"})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h4",{children:i}),"uz-UZ"===t?(0,r.jsx)("p",{children:"Loyiha"}):"ru-RU"===t?(0,r.jsx)("p",{children:"\u041f\u0440\u043e\u0435\u043a\u0442"}):(0,r.jsx)("p",{children:"Project"})]})]})]})})},e)}))}var _=n(1664),m=n.n(_),p=n(3681),k=n.n(p);function g(a){var e=a.data,n=(0,s.useRouter)(),t=n.query,i=n.locale;return(0,r.jsxs)("div",{className:k().hakatonJuri,children:["uz-UZ"===i?(0,r.jsx)("h3",{className:k().hakatonJuri_title,children:"Hakamlar"}):"ru-RU"===i?(0,r.jsx)("h3",{className:k().hakatonJuri_title,children:"\u0416\u044e\u0440\u0438"}):(0,r.jsx)("h3",{className:k().hakatonJuri_title,children:"Jury"}),(0,r.jsx)("div",{className:k().hakatonJuri_wrapper,children:e.filter((function(a){return a.hackathon_id===parseInt(t.id)&a.languages_code===i})).map((function(a){var e=a.id,n=a.jury_image,t=a.jury_link,o=a.jury_name,l=a.jury_job;return(0,r.jsxs)("div",{className:k().hakatonJuri_card,children:[(0,r.jsx)("img",{src:"https://admin.uzbekvoice.ai/assets/".concat(n),alt:"img"}),(0,r.jsx)("p",{children:o}),(0,r.jsx)("h5",{children:l}),(0,r.jsxs)("a",{href:t,target:"_blank",children:["uz-UZ"===i?(0,r.jsx)("span",{children:"Bog'lanish"}):"ru-RU"===i?(0,r.jsx)("span",{children:"\u0421\u0432\u044f\u0437\u0430\u0442\u044c\u0441\u044f"}):(0,r.jsx)("span",{children:"Contact"}),(0,r.jsx)("img",{src:"/chevron-right.svg"})]})]},e)}))})]})}var v=n(626),x=n.n(v);function j(a){var e=a.data,n=(0,s.useRouter)(),t=n.locale,i=n.query;return(0,r.jsxs)("div",{className:x().hakatonTeams,children:["uz-UZ"===t?(0,r.jsx)("h3",{className:x().hakatonTeams_title,children:"Jamoalar"}):"ru-RU"===t?(0,r.jsx)("h3",{className:x().hakatonTeams_title,children:"\u041a\u043e\u043c\u0430\u043d\u0434\u044b"}):(0,r.jsx)("h3",{className:x().hakatonTeams_title,children:"Teams"}),(0,r.jsx)("div",{className:x().hakatonTeams_wrapper,children:e.filter((function(a){return a.languages_code===t&&a.hackathon_id===parseInt(i.id)&&null!==a.hackathon_teams_id})).map((function(a){var e=a.hackathon_teams_id,n=a.team_image,i=a.team_project_content,o=a.team_title,l=a.team_winner_place;return(0,r.jsxs)("div",{className:x().hakatonTeams_card,children:[(0,r.jsx)("div",{className:x().hakatonTeams_cardHeader,children:(0,r.jsx)("img",{src:"https://admin.uzbekvoice.ai/assets/".concat(n),alt:"img"})}),(0,r.jsxs)("div",{className:x().hakatonTeams_cardBody,children:[(0,r.jsx)("h4",{children:o}),(0,r.jsx)("span",{dangerouslySetInnerHTML:{__html:i.split(" ",10).join(" ")}}),(0,r.jsx)(m(),{href:"/teams/".concat(e),children:(0,r.jsxs)("a",{children:["uz-UZ"===t?(0,r.jsx)("span",{children:"Batafsil"}):"ru-RU"===t?(0,r.jsx)("span",{children:"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435"}):(0,r.jsx)("span",{children:"Read more"}),(0,r.jsx)("img",{src:"/chevron-right.svg",alt:"icon arrow"})]})})]}),(0,r.jsx)("div",{className:x().hakatonTeams_cardBadge,children:(0,r.jsx)("span",{children:l})})]},e)}))})]})}var f=n(701),b=n(9160),y=n(4051),H=n.n(y),N=n(4724),z=n.n(N),w=n(8456),T=(n(6054),n(7607));function F(a,e,n,r,t,i,o){try{var l=a[i](o),s=l.value}catch(c){return void n(c)}l.done?e(s):Promise.resolve(s).then(r,t)}function q(){var a=(0,s.useRouter)().locale,e=(0,t.useState)("false"),n=e[0],i=e[1],o=(0,t.useState)(""),l=o[0],c=o[1],h=(0,t.useState)(""),d=h[0],u=h[1],_=(0,t.useState)(""),m=_[0],p=_[1],k=(0,t.useState)(""),g=k[0],v=k[1],x=(0,t.useState)(""),j=x[0],f=x[1],b=(0,t.useState)(""),y=b[0],N=b[1],q=(0,t.useState)(""),J=q[0],S=q[1],U=(0,t.useState)(""),I=U[0],R=U[1],C=(0,t.useState)(""),P=C[0],B=C[1],Z=(0,t.useState)(""),D=Z[0],L=Z[1],A=(0,t.useState)(""),E=A[0],V=A[1],O=(0,t.useState)(""),M=O[0],W=O[1],Q=function(){var a,e=(a=H().mark((function a(e){var n;return H().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(e.preventDefault(),""===l||""===d||""===m||""===g||""===j||""===y||""===J||""===I||""===D||""===M){a.next=16;break}return i("true"),n={name_surname:l,email:d,telephone_number:m,city:y,study_work_place:J,solution:I,is_team:P,position:D,team_title:E,confirmation:M,telegram_nik:g,date_of_birth:j},a.prev=4,a.next=7,fetch("https://admin.uzbekvoice.ai/items/hackathon_registration_form",{method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}});case 7:a.sent,a.next=13;break;case 10:a.prev=10,a.t0=a.catch(4),console.log("Error: ",a.t0);case 13:setTimeout((function(){return i("false")}),8e3),a.next=17;break;case 16:i("error"),setTimeout((function(){return i("false")}),5e3);case 17:case"end":return a.stop()}}),a,null,[[4,10]])})),function(){var e=this,n=arguments;return new Promise((function(r,t){var i=a.apply(e,n);function o(a){F(i,r,t,o,l,"next",a)}function l(a){F(i,r,t,o,l,"throw",a)}o(void 0)}))});return function(a){return e.apply(this,arguments)}}();return w.B.filter((function(e){return e.languages_code===a})).map((function(e){var t=e.id,i=e.title,o=e.descr,s=e.form_title,h=e.form_title2,_=e.form_title3,k=e.confirm_accept,x=e.link,b=e.oferta,y=e.label_fio,H=e.label_email,w=e.label_phone,F=e.label_tg_nike,q=e.label_date_of_brith,U=e.label_country,C=e.label_place_work,Z=e.label_problem,A=e.label_isTeam,O=e.label_position,Y=e.label_confirm,K=e.placeholder_problem,G=e.placeholder_team_name,X=e.choose,$=e.yes,aa=e.no,ea=e.button,na=e.parag,ra=e.parag1,ta=e.parag2,ia=e.parag3,oa=e.parag4,la=e.parag5,sa=e.country,ca=e.position_role;return(0,r.jsxs)("div",{className:z().hackaton,children:[(0,r.jsx)("h3",{children:i}),(0,r.jsx)("p",{children:o}),(0,r.jsxs)("div",{className:z().partners,children:[(0,r.jsxs)("div",{className:z().partners_left,children:[(0,r.jsx)("h4",{children:na}),(0,r.jsx)("div",{className:z().cards,children:(0,r.jsx)("li",{children:ra})}),(0,r.jsx)("div",{className:z().cards,children:(0,r.jsx)("li",{children:ta})}),(0,r.jsx)("div",{className:z().cards,children:(0,r.jsx)("li",{children:ia})}),(0,r.jsx)("div",{className:z().cards,children:(0,r.jsx)("li",{children:oa})}),(0,r.jsx)("div",{className:z().cards,children:(0,r.jsx)("li",{children:la})})]}),(0,r.jsx)("h6",{children:o}),(0,r.jsxs)("form",{className:z().partners_right,onSubmit:Q,style:{display:"true"===n?"none":"flex"},method:"post",children:[(0,r.jsx)("h4",{children:s}),(0,r.jsx)("hr",{}),(0,r.jsxs)("div",{className:z().userbox,children:[(0,r.jsx)("input",{required:!0,value:l,type:"text",onChange:function(a){return c(a.target.value)}}),(0,r.jsxs)("label",{children:[y," "]})]}),(0,r.jsxs)("div",{className:z().userbox,children:[(0,r.jsx)("input",{value:j,type:"date",required:!0,placeholder:"",onChange:function(a){return f(a.target.value)}}),(0,r.jsx)("label",{children:q})]}),(0,r.jsx)("div",{className:z().city,children:(0,r.jsxs)("label",{children:[U," ",(0,r.jsx)("span",{children:"*"}),(0,r.jsxs)("select",{onChange:function(a){return N(a.target.value)},children:[(0,r.jsx)("option",{disabled:!0,selected:!0,children:X}),sa.map((function(a){var e=a.id,n=a.value;return(0,r.jsx)("option",{children:n},e)}))]})]})}),(0,r.jsxs)("div",{className:z().userbox,children:[(0,r.jsx)("input",{value:J,type:"text",required:!0,onChange:function(a){return S(a.target.value)}}),(0,r.jsx)("label",{children:C})]}),(0,r.jsx)("h4",{children:h}),(0,r.jsx)("hr",{}),(0,r.jsxs)("div",{className:z().userbox,children:[(0,r.jsx)(T.ZP,{international:!0,country:"UZ",defaultCountry:"UZ",withCountryCallingCode:!0,maxlength:"17",value:m,required:!0,onChange:p}),(0,r.jsx)("label",{children:w})]}),(0,r.jsxs)("div",{className:z().userbox,children:[(0,r.jsx)("input",{value:d,type:"email",required:!0,onChange:function(a){return u(a.target.value)}}),(0,r.jsx)("label",{style:{top:!d&&"0px",fontSize:!d&&"16px"},children:H})]}),(0,r.jsxs)("div",{className:z().userbox,children:[(0,r.jsx)("input",{value:g,type:"text",required:!0,onChange:function(a){return v(a.target.value)}}),(0,r.jsx)("label",{children:F})]}),(0,r.jsx)("h4",{children:_}),(0,r.jsx)("hr",{}),(0,r.jsxs)("label",{style:{color:"#111"},children:[Z," ",(0,r.jsx)("span",{children:"*"}),(0,r.jsx)("textarea",{value:I,type:"text",placeholder:K,onChange:function(a){return R(a.target.value)}})]}),(0,r.jsxs)("div",{className:z().teamyes,children:[(0,r.jsx)("p",{children:A}),(0,r.jsxs)("label",{htmlFor:"yes",children:[(0,r.jsx)("input",{className:z().radioInput,name:"isTeam",id:"yes",type:"radio",value:P,required:!0,onChange:function(){return B("yes")}}),$]}),(0,r.jsxs)("label",{htmlFor:"no",children:[(0,r.jsx)("input",{className:z().radioInput,name:"isTeam",id:"no",type:"radio",required:!0,value:P,onChange:function(){return B("no")}}),aa]})]}),"yes"===P&&(0,r.jsxs)("div",{className:z().userbox,children:[(0,r.jsx)("input",{value:E,type:"text",required:!0,onChange:function(a){return V(a.target.value)}}),(0,r.jsx)("label",{children:G})]}),(0,r.jsxs)("div",{className:z().position,children:[(0,r.jsx)("p",{children:O}),ca.map((function(a){var e=a.id,n=a.value;return(0,r.jsxs)("label",{children:[(0,r.jsx)("input",{required:!0,className:z().radioInput,name:D,type:"radio",value:n,onChange:function(){return L(n)}},e),n]})}))]}),(0,r.jsxs)("h4",{children:[" ",b,(0,r.jsx)("a",{href:"https://docs.google.com/document/d/1VNxNKmMLo1KtuZN_jjnsOS9PqftUDUPz/edit$1usp=sharing&ouid=105377763824178379927&rtpof=true&sd=true",target:"_blank",children:x})]}),(0,r.jsx)("div",{className:z().lastline,children:(0,r.jsx)("hr",{})}),(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{children:Y}),(0,r.jsxs)("label",{htmlFor:"confim",children:[(0,r.jsx)("input",{className:z().radioInput,id:"confim",type:"checkbox",required:!0,value:M,onChange:function(a){return function(a){a.target.checked?W("yes"):W("")}(a)}})," ",k]})]}),(0,r.jsx)("hr",{}),(0,r.jsxs)("div",{className:z().finally,children:[(0,r.jsx)("button",{type:"submit",children:ea}),(0,r.jsx)("div",{style:{display:"error"===n?"flex":"none"},className:z().error,children:"uz-UZ"===a?(0,r.jsx)("span",{children:"Iltimos maydonlarni to'ldiring"}):"ru-RU"===a?(0,r.jsx)("span",{children:"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0437\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043f\u043e\u043b\u044f"}):(0,r.jsx)("span",{children:"Please fill in the fields"})})]})]}),(0,r.jsx)("div",{className:z().thanks,style:{display:"true"===n?"flex":"none"},children:"uz-UZ"===a?(0,r.jsx)("span",{children:"Murojatingiz uchun raxmat. Biz siz bilan yaqin orada aloqaga chiqamiz."}):"ru-RU"===a?(0,r.jsx)("span",{children:"\u0421\u043f\u0430\u0441\u0438\u0431\u043e \u0437\u0430 \u0432\u0430\u0448 \u0437\u0430\u043f\u0440\u043e\u0441. \u041c\u044b \u0441\u0432\u044f\u0436\u0435\u043c\u0441\u044f \u0441 \u0412\u0430\u043c\u0438 \u0432 \u0441\u043a\u043e\u0440\u043e\u043c \u0432\u0440\u0435\u043c\u0435\u043d\u0438."}):(0,r.jsx)("span",{children:"Thank you for your message. We will contact you as soon as possible."})})]})]},t)}))}var J=n(3607),S=n.n(J);function U(a){var e=a.data,n=(0,s.useRouter)(),t=n.query,i=n.locale;return(0,r.jsxs)("div",{className:S().hakatonJuri,children:["uz-UZ"===i?(0,r.jsx)("h3",{className:S().hakatonJuri_title,children:"Mentorlar"}):"ru-RU"===i?(0,r.jsx)("h3",{className:S().hakatonJuri_title,children:"\u041c\u0435\u043d\u0442\u043e\u0440\u044b "}):(0,r.jsx)("h3",{className:S().hakatonJuri_title,children:"Mentors"}),(0,r.jsx)("div",{className:S().hakatonJuri_wrapper,children:e.filter((function(a){return a.hackathon_id===parseInt(t.id)&a.languages_code===i})).map((function(a){var e=a.id,n=a.mentor_image,t=a.mentor_link,o=a.mentor_name,l=a.mentor_job;return(0,r.jsxs)("div",{className:S().hakatonJuri_card,children:[(0,r.jsx)("img",{src:"https://admin.uzbekvoice.ai/assets/".concat(n),target:"_blank",alt:"img"}),(0,r.jsx)("p",{children:o}),(0,r.jsx)("h5",{children:l}),(0,r.jsxs)("a",{target:"_blank",href:t,children:["uz-UZ"===i?(0,r.jsx)("span",{children:"Bog'lanish"}):"ru-RU"===i?(0,r.jsx)("span",{children:"\u0421\u0432\u044f\u0437\u0430\u0442\u044c\u0441\u044f"}):(0,r.jsx)("span",{children:"Contact"}),(0,r.jsx)("img",{src:"/chevron-right.svg"})]})]},e)}))})]})}var I=!0;function R(a){var e=a.partners,n=a.hakatonHero,t=a.hakatonFoto,i=a.hakatonTeam,o=a.hakatonJury,l=a.mentor,h=(0,s.useRouter)(),d=h.query,_=h.locale,m=n.data.filter((function(a){return a.languages_code===_&&a.hackathons_id===parseInt(d.id)}))[0].status;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(u,{data:n.data}),(0,r.jsx)(f.Z,{HomeContent:b,partners:e.data,status:m}),"active"!==m?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(j,{data:i.data}),(0,r.jsx)(c,{data:t.data,galleryID:"gallery--responsive-images"}),(0,r.jsx)(g,{data:o.data}),(0,r.jsx)(U,{data:l.data})]}):(0,r.jsx)(q,{})]})}},4724:function(a){a.exports={hackaton:"HakatonForm_hackaton__tOwPh",partners:"HakatonForm_partners__DOV1v",partners_right:"HakatonForm_partners_right__0D8_6",show:"HakatonForm_show__TPG9C",partners_left:"HakatonForm_partners_left__B0J_f",cards:"HakatonForm_cards__FaukZ",userbox:"HakatonForm_userbox__LFhFP",position:"HakatonForm_position__B2qsh",city:"HakatonForm_city__oW2LS",teamyes:"HakatonForm_teamyes__JFsug",lastline:"HakatonForm_lastline__upPGV",radioInput:"HakatonForm_radioInput__p_aPJ",finally:"HakatonForm_finally__VFziG",error:"HakatonForm_error__24XcL",thanks:"HakatonForm_thanks__xaHjr",partners_descr:"HakatonForm_partners_descr__o_E8n"}},2e3:function(a){a.exports={hakatonFoto:"HakatonFoto_hakatonFoto__LObgz",hakatonFoto_title:"HakatonFoto_hakatonFoto_title__QlzxR",hakatonFoto_wrapper:"HakatonFoto_hakatonFoto_wrapper__B1DyS",modalImg:"HakatonFoto_modalImg__rvlqX",modalWrap:"HakatonFoto_modalWrap__s6hSn",iconTimes:"HakatonFoto_iconTimes__fBYO9",hakatonFoto_card:"HakatonFoto_hakatonFoto_card__9bFud"}},9606:function(a){a.exports={hakatonHeroWrappper:"HakatonHero_hakatonHeroWrappper__V1c1Y",one:"HakatonHero_one__VyymE",hakatonHero:"HakatonHero_hakatonHero__c1WmL",active:"HakatonHero_active__i9hjy",hakatonHeroBg:"HakatonHero_hakatonHeroBg__kaH6Z",hakatonHero_Left:"HakatonHero_hakatonHero_Left__TQ_bq",hakatonHero_Right:"HakatonHero_hakatonHero_Right__RiBgo"}},3681:function(a){a.exports={hakatonJuri_title:"HakatonJuri_hakatonJuri_title__F4ojw",hakatonJuri_wrapper:"HakatonJuri_hakatonJuri_wrapper__DzCiU",hakatonJuri_card:"HakatonJuri_hakatonJuri_card__lxdXK"}},3607:function(a){a.exports={hakatonJuri:"HakatonMentors_hakatonJuri__3xpkc",hakatonJuri_title:"HakatonMentors_hakatonJuri_title__hs5UP",hakatonJuri_wrapper:"HakatonMentors_hakatonJuri_wrapper__8CKoz",hakatonJuri_card:"HakatonMentors_hakatonJuri_card__S_8Gd"}},626:function(a){a.exports={hakatonTeams:"HakatonTeams_hakatonTeams__hgM_z",hakatonTeams_title:"HakatonTeams_hakatonTeams_title__BKl9s",hakatonTeams_cardBadge:"HakatonTeams_hakatonTeams_cardBadge__gT_j0",hakatonTeams_wrapper:"HakatonTeams_hakatonTeams_wrapper___ED1f",hakatonTeams_card:"HakatonTeams_hakatonTeams_card__LgnsR",hakatonTeams_cardHeader:"HakatonTeams_hakatonTeams_cardHeader__MDNR5",hakatonTeams_cardBody:"HakatonTeams_hakatonTeams_cardBody__Q6NGV"}},6763:function(a){a.exports={initpartners:"InitiativePartners_initpartners__1AFi5",partnersForHak:"InitiativePartners_partnersForHak__d7lLc",item:"InitiativePartners_item__BsRgq",active:"InitiativePartners_active__QgHjQ",partners:"InitiativePartners_partners__c4fui"}},8456:function(a){"use strict";a.exports=JSON.parse('{"p":[{"id":1,"languages_code":"uz-UZ","title":"Hamkor sifatida qo\'shiling","descr":"UzbekVoice tashabbusi bilan hamkorlik qilishni istasangiz, iltimos shu yerda ma\'lumotlaringizni qoldiring. Homiylar, OAV, bloggerlar, dasturchilar va loyihani rivojlantirishga hissa qo\'sha oladidan barchani hamkorlikka taklif qilamiz.","label_name":"Ismingiz","label_phone":"Telefon raqamingiz","label_comment":"Izoh","placeholder_name":"Ismingizni kiriting","placeholder_comment":"Izoh qoldiring (ixtiyoriy)","button":"Ariza yuborish"},{"id":2,"languages_code":"ru-RU","title":"\u0421\u0442\u0430\u0442\u044c \u0441\u043f\u043e\u043d\u0441\u043e\u0440\u043e\u043c","descr":"\u0415\u0441\u043b\u0438 \u0432\u044b \u0445\u043e\u0442\u0438\u0442\u0435 \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u0447\u0430\u0442\u044c \u0441 \u0438\u043d\u0438\u0446\u0438\u0430\u0442\u0438\u0432\u043e\u0439 UzbekVoice, \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043e\u0441\u0442\u0430\u0432\u044c\u0442\u0435 \u0441\u0432\u043e\u044e \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u0437\u0434\u0435\u0441\u044c. \u041a \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u0447\u0435\u0441\u0442\u0432\u0443 \u043f\u0440\u0438\u0433\u043b\u0430\u0448\u0430\u0435\u043c \u0441\u043f\u043e\u043d\u0441\u043e\u0440\u043e\u0432, \u0421\u041c\u0418, \u0431\u043b\u043e\u0433\u0435\u0440\u043e\u0432, \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u043e\u0432 \u0438 \u0432\u0441\u0435\u0445, \u043a\u0442\u043e \u043c\u043e\u0436\u0435\u0442 \u0432\u043d\u0435\u0441\u0442\u0438 \u0441\u0432\u043e\u0439 \u0432\u043a\u043b\u0430\u0434 \u0432 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u0435 \u043f\u0440\u043e\u0435\u043a\u0442\u0430.","label_name":"\u0418\u043c\u044f","label_phone":"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430","label_comment":"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439","placeholder_name":"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0432\u043e\u0435 \u0438\u043c\u044f","placeholder_comment":"\u041e\u0441\u0442\u0430\u0432\u044c\u0442\u0435 \u0441\u0432\u043e\u0438 \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0438 (\u043d\u0435\u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e)","button":"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u044f\u0432\u043a\u0443"},{"id":3,"languages_code":"en-US","title":"Become a partner","descr":"If you want to cooperate with the UzbekVoice initiative, please leave your information here. We invite sponsors, mass media, bloggers, programmers and everyone who can contribute to the development of the project.","label_name":"Name","label_phone":"Phone number","label_comment":"Comment","placeholder_name":"Enter your name","placeholder_comment":"Leave your comments (optional)","button":"Apply now"}],"B":[{"id":1,"languages_code":"uz-UZ","title":"Voice AI Challenge 2022","descr":"Hakatonga ro\'yxatdan o\'ting","form_title":"Shaxsiy ma\'lumot","form_title2":"Aloqa ma\'lumotlar","form_title3":"Qo\'shimcha ma\'lumotlar","confirm_accept":"Roziman","oferta":"Oferta  bilan tanishib chiqishingizni so\'raymiz","link":"(havola)","label_fio":"F. I. Sh","label_email":"name@example.com","label_phone":"Telefon raqamingiz","label_tg_nike":"Telegramdagi nikingiz","label_date_of_brith":"Tug\'ilgan kuningiz","label_country":"Siz qaysi viloyatdansiz","label_place_work":"Ish/o\'qish joyingiz","label_problem":"Hakatonda qanday muammoni hal qilmoqchisiz?","label_isTeam":"Jamoangiz bormi","label_position":"Sizning jamoadagi rolingiz","label_team_name":"Agar jamoangiz bo\'lsa, jamoa nomi (jamoaning barcha a\'zolari ro\'yxatdan o\'tishi kerak)","label_confirm":"Oferta shartlarini qabul qilish orqali, siz o\'z ishtirokingizni tasdiqlaysiz","placeholder_fio":"Ergashev Ergashboy Ergashboy o\'gli","placeholder_tg":"@username","placeholder_email":"example@gmail.com","placeholder_phone":"+998","choose":"Iltimos, tanlang","yes":"Ha","no":"Yo\'q","placeholder_place_work":"Sizning javobingiz","placeholder_problem":"Sizning javobingiz","placeholder_team_name":"Jamoangiz nomi","button":"Hakatonga ro\'yxatga o\'tish","parag":"Hakatonda qatnashish uchun 5 ta sabab:","parag1":"Yangi va qiziqarli narsalarni qilish imkoniyati.","parag2":"Dam olish kunlarida anchadan beri qilmoqchi bo\'lgan loyihani yaratish imkoniyati.","parag3":"Professionallar davrasida foyda bilan vaqt o\'tkazish imkoniyati.","parag4":"Netvorking - yangi odamlar bilan tanishish imkoniyati.","parag5":"Loyihangiz yoki g\'oyangiz haqida boshqa ishtirokchilar va hakamlar hay\'atidan fikr-mulohaza olish imkoniyati","country":[{"id":1,"value":"Toshkent shahri"},{"id":2,"value":"Toshkent viloyati"},{"id":3,"value":"Farg`ona viloyati"},{"id":4,"value":"Jizzax viloyati"},{"id":5,"value":"Xorazm viloyati"},{"id":6,"value":"Namangan viloyati"},{"id":7,"value":"Navoiy viloyati"},{"id":8,"value":"Qashqadaryo viloyati"},{"id":9,"value":"Qoraqalpog`iston Respublikasi"},{"id":10,"value":"Samarqand viloyati"},{"id":11,"value":"Sirdaryo viloyati"},{"id":12,"value":"Surxondaryo viloyati"},{"id":13,"value":"Buxoro viloyati"},{"id":14,"value":"Andijon viloyati"}],"position_role":[{"id":1,"value":"Loyihalar bo\'yicha menejer"},{"id":2,"value":"Dasturchi"},{"id":3,"value":"Dizayner"}]},{"id":2,"languages_code":"ru-RU","title":"Voice AI Challenge 2022","descr":"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0443\u0439\u0442\u0435\u0441\u0442\u044c \u043d\u0430 \u0445\u0430\u043a\u0430\u0442\u043e\u043d","form_title":"\u041f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f","form_title2":"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435","form_title3":"\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f","confirm_accept":"\u041f\u0440\u0438\u043d\u0438\u043c\u0430\u044e","oferta":"\u041f\u0440\u043e\u0441\u0438\u043c \u043e\u0437\u043d\u0430\u043a\u043e\u043c\u0438\u0446\u0438\u044f \u0441 \u043e\u0444\u0435\u0440\u0442\u043e\u0439","link":"(\u0441\u0441\u044b\u043b\u043a\u0430)","label_fio":"\u0424.\u0418.\u041e.","label_email":"name@example.com","label_phone":"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430","label_tg_nike":"\u0422\u0435\u043b\u0435\u0433\u0440\u0430\u043c \u043d\u0438\u043a","label_date_of_brith":"\u0414\u0430\u0442\u0430 \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f","choose":"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430 \u0432\u044b\u0431\u0435\u0440\u0438\u0442\u0435","yes":"\u0414\u0430","no":"\u041d\u0435\u0442","label_country":"\u0421 \u043a\u0430\u043a\u043e\u0433\u043e \u0432\u044b \u0440\u0435\u0433\u0438\u043e\u043d\u0430","label_place_work":"\u0412\u0423\u0417 \u0438\u043b\u0438 \u043c\u0435\u0441\u0442\u043e \u0440\u0430\u0431\u043e\u0442\u044b","label_problem":"\u041a\u0430\u043a\u0443\u044e \u0437\u0430\u0434\u0430\u0447\u0443 \u0432\u044b \u043f\u044b\u0442\u0430\u0435\u0442\u0435\u0441\u044c \u0440\u0435\u0448\u0438\u0442\u044c \u043d\u0430 \u0445\u0430\u043a\u0430\u0442\u043e\u043d\u0435","label_isTeam":"\u0423 \u0432\u0430\u0441 \u0435\u0441\u0442\u044c \u043a\u043e\u043c\u0430\u043d\u0434\u0430","label_position":" \u0412\u0430\u0448\u0430 \u0440\u043e\u043b\u044c \u0432 \u043a\u043e\u043c\u0430\u043d\u0434\u0435","label_team_name":" \u0415\u0441\u043b\u0438 \u0443 \u0432\u0430\u0441 \u0443\u0436\u0435 \u0435\u0441\u0442\u044c \u043a\u043e\u043c\u0430\u043d\u0434\u0430, \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u044b (\u0432\u0441\u0435 \u0443\u0447\u0430\u0441\u0442\u043d\u0438\u043a\u0438 \u043a\u043e\u043c\u0430\u043d\u0434\u044b \u0434\u043e\u043b\u0436\u043d\u044b \u043f\u0440\u043e\u0439\u0442\u0438 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044e \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e) ","label_team_count":"\u0421\u043a\u043e\u043b\u044c\u043a\u043e \u0447\u0435\u043b\u043e\u0432\u0435\u043a \u0432 \u0432\u0430\u0448\u0435\u0439 \u043a\u043e\u043c\u0430\u043d\u0434\u0435","label_confirm":"\u041f\u0440\u0438\u043d\u044f\u0432 \u0443\u0441\u043b\u043e\u0432\u0438\u044f \u043e\u0444\u0435\u0440\u0442\u044b, \u0432\u044b \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0430\u0435\u0442\u0435 \u0441\u0432\u043e\u0435 \u0443\u0447\u0430\u0441\u0442\u0438\u0435","placeholder_fio":"\u0410\u043d\u0434\u0440\u0435\u0435\u0432 \u0410\u043d\u0434\u0440\u0435\u0439 \u0410\u043d\u0434\u0440\u0435\u0435\u0432\u0438\u0447","placeholder_tg":"@username","placeholder_email":"example@gmail.com","placeholder_phone":"+998","placeholder_country":"placeholder_country","placeholder_place_work":"\u0412\u0430\u0448 \u043e\u0442\u0432\u0435\u0442","placeholder_problem":"\u0412\u0430\u0448 \u043e\u0442\u0432\u0435\u0442","placeholder_team_name":"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u044f \u0432\u0430\u0448\u0435\u0439 \u043a\u043e\u043c\u0430\u043d\u0434\u044b","placeholder_team_count":"placeholder_team_count","placeholder_confirm":"placeholder_confirm","button":"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u043d\u0430 \u0445\u0430\u043a\u0430\u0442\u043e\u043d","parag":"5 \u043f\u0440\u0438\u0447\u0438\u043d \u043f\u0440\u0438\u043d\u044f\u0442\u044c \u0443\u0447\u0430\u0441\u0442\u0438\u0435 \u0432 \u0445\u0430\u043a\u0430\u0442\u043e\u043d\u0435:","parag1":"\u0421\u0434\u0435\u043b\u0430\u0442\u044c \u0447\u0442\u043e-\u043d\u0438\u0431\u0443\u0434\u044c \u043d\u043e\u0432\u043e\u0435 \u0438 \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u043d\u043e\u0435.","parag2":"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0437\u0430 \u0432\u044b\u0445\u043e\u0434\u043d\u044b\u0435 \u043f\u0440\u043e\u0435\u043a\u0442, \u043d\u0430 \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0434\u0430\u0432\u043d\u043e \u043d\u0435 \u0431\u044b\u043b\u043e \u0432\u0440\u0435\u043c\u0435\u043d\u0438.","parag3":"\u041f\u0440\u043e\u0432\u0435\u0441\u0442\u0438 \u0432\u0440\u0435\u043c\u044f \u0441 \u043f\u043e\u043b\u044c\u0437\u043e\u0439 \u0432 \u043a\u0440\u0443\u0433\u0443 \u043f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u043e\u043d\u0430\u043b\u043e\u0432.","parag4":"\u041d\u0435\u0442\u0432\u043e\u0440\u043a\u0438\u043d\u0433 \u2013 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435 \u043d\u043e\u0432\u044b\u0445 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u043e\u0432.","parag5":"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043e\u0431\u0440\u0430\u0442\u043d\u0443\u044e \u0441\u0432\u044f\u0437\u044c \u043e \u0441\u0432\u043e\u0435\u043c \u043f\u0440\u043e\u0435\u043a\u0442\u0435 \u0438\u043b\u0438 \u0438\u0434\u0435\u0435 \u043e\u0442 \u0434\u0440\u0443\u0433\u0438\u0445 \u0443\u0447\u0430\u0441\u0442\u043d\u0438\u043a\u043e\u0432 \u0438 \u0436\u044e\u0440\u0438.","country":[{"id":1,"value":"\u0410\u043d\u0434\u0438\u0436\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c"},{"id":2,"value":"\u0411\u0443\u0445\u0430\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c"},{"id":3,"value":"\u0424\u0435\u0440\u0433\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c"},{"id":4,"value":"\u0414\u0436\u0438\u0437\u0430\u043a\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c"},{"id":5,"value":"\u0425\u043e\u0440\u0435\u0437\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c"},{"id":6,"value":"\u041d\u0430\u043c\u0430\u043d\u0433\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c"},{"id":7,"value":"\u041d\u0430\u0432\u043e\u0438\u0439\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c"},{"id":8,"value":"\u041a\u0430\u0448\u043a\u0430\u0434\u0430\u0440\u044c\u0438\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c"},{"id":9,"value":"\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041a\u0430\u0440\u0430\u043a\u0430\u043b\u043f\u0430\u043a\u0441\u0442\u0430\u043d"},{"id":10,"value":"\u0421\u0430\u043c\u0430\u0440\u043a\u0430\u043d\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c"},{"id":11,"value":"\u0421\u044b\u0440\u0434\u0430\u0440\u044c\u0438\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c"},{"id":12,"value":"\u0421\u0443\u0440\u0445\u0430\u043d\u0434\u0430\u0440\u044c\u0438\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c"},{"id":13,"value":"\u0422\u0430\u0448\u043a\u0435\u043d\u0442\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c"},{"id":14,"value":"\u0433\u043e\u0440\u043e\u0434 \u0422\u0430\u0448\u043a\u0435\u043d\u0442"}],"position_role":[{"id":1,"value":"\u041c\u0435\u043d\u0435\u0434\u0436\u0435\u0440 \u043f\u0440\u043e\u0435\u043a\u0442\u0430"},{"id":2,"value":"\u041f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0441\u0442"},{"id":3,"value":"\u0414\u0438\u0437\u0430\u0439\u043d\u0435\u0440"}]},{"id":3,"languages_code":"en-US","title":"Voice AI Challenge 2022","descr":"Register for the hackathon","form_title":"Personal information","form_title2":"Contact details","form_title3":"Additional Information","confirm_accept":"I accept","link":"(link)","oferta":"Please read the offer","label_fio":"Full name","label_email":"name@example.com","label_phone":"Phone number","label_tg_nike":"Telegram nickname","label_date_of_brith":"Date of Birth","label_country":"What region are you from?","label_place_work":"University or place of work","label_age":"How old are you?","choose":"Please, choose","yes":"Yes","no":"No","label_problem":"What problem are you trying to solve at the hackathon?","label_isTeam":"Do you have a team ?","label_position":"Your role in the team","label_team_name":"If you already have a team, the name of the team (all team members must be registered)","label_team_count":"How many people are on your team?","label_confirm":"By accepting the terms of the offer, you confirm your participation","placeholder_fio":"Jon Snow","placeholder_email":"example@gmail.com","placeholder_phone":"+998","placeholder_tg":"@username","placeholder_country":"placeholder_country","placeholder_place_work":"Your answer","placeholder_age":"placeholder_age","placeholder_problem":"Your answer","placeholder_isTeam":"placeholder_isTeam","placeholder_position":"placeholder_position","placeholder_team_name":"Your team name","placeholder_team_count":"placeholder_team_count","placeholder_confirm":"placeholder_confirm","button":"Register for the hackathon","parag":"5 reasons to take part in the hackathon:","parag1":"Do something new and interesting.","parag2":"Create over the weekend a project for which there was no time for a long time.","parag3":"Spend time with benefit in the circle of professionals.","parag4":"Networking - getting new contacts.","parag5":"Get feedback about your project or idea from other participants and the jury.","country":[{"id":1,"value":"Andijan region"},{"id":2,"value":"Bukhara region"},{"id":3,"value":"Fergana region"},{"id":4,"value":"Jizzakh region"},{"id":5,"value":"Khorezm region"},{"id":6,"value":"Namangan region"},{"id":7,"value":"Navoi region"},{"id":8,"value":"Kashkadarya region"},{"id":9,"value":"Republic of Karakalpakstan"},{"id":10,"value":"Samarkand region"},{"id":11,"value":"Syrdarya region"},{"id":12,"value":"Surkhandarya region"},{"id":13,"value":"Tashkent region"},{"id":13,"value":"Tashkent city"}],"position_role":[{"id":1,"value":"Project manager"},{"id":2,"value":"Developer"},{"id":3,"value":"Designer"}]}]}')}},function(a){a.O(0,[571,252,64,91,774,888,179],(function(){return e=4623,a(a.s=e);var e}));var e=a.O();_N_E=e}]);