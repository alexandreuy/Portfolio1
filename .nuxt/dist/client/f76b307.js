(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{374:function(e,t,n){var content=n(381);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(52).default)("3de7bbc4",content,!0,{sourceMap:!1})},375:function(e,t,n){var content=n(383);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(52).default)("57ce75dc",content,!0,{sourceMap:!1})},376:function(e,t,n){var content=n(385);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(52).default)("070d0837",content,!0,{sourceMap:!1})},377:function(e,t,n){"use strict";n.r(t);var o={name:"Content",props:["slideID","items"]},r=(n(380),n(31)),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},e._l(e.items[e.slideID],(function(t){return n("b-card",{key:t.nomPoste,staticStyle:{"margin-bottom":"10px"},attrs:{"title-variant":"card_title","text-variant":"dark"}},[""!==t.image?n("img",{staticClass:"mb-2",attrs:{src:t.image,alt:"Card Image","img-left":""}}):e._e(),e._v(" "),n("div",{staticClass:"container-fluid"},[n("h2",[e._v(" "+e._s(e.$t(t.nomPoste)))]),e._v(" "),n("p",{staticClass:"para"},[e._v(" "+e._s(t.nomEntreprise)+" ")]),e._v(" "),""!==t.type?n("p",[e._v(" "+e._s(e.$t(t.periode))+"  ")]):n("p",[e._v(" "+e._s(e.$t(t.periode))+" ")]),e._v(" "),n("b-card-text",["https://www.time-planet.com/fr"===t.description?n("a",{attrs:{href:"item.description"}},[e._v(" "+e._s(e.$t(t.description))+" ")]):n("p",{staticClass:"colorp"},[e._v(" "+e._s(e.$t(t.description))+" ")])])],1)])})),1)}),[],!1,null,"633f8d92",null);t.default=component.exports},378:function(e,t,n){"use strict";n.r(t);var o={components:{Content:n(377).default},data:function(){return{slideID:0,slide:0,sliding:null,carouselInfo:[{caption:"Work Experience",src:"https://zupimages.net/up/20/40/n798.jpg"},{caption:"Education",src:"https://zupimages.net/up/20/42/o5bf.jpg"},{caption:"Key Skills",src:"https://zupimages.net/up/20/44/j450.jpg"}]}},methods:{getID:function(caption){this.slideID=caption,this.$emit("sendid",{slideID:this.slideID})},onSlideStart:function(e){this.sliding=!0},onSlideEnd:function(e){this.sliding=!1}}},r=(n(382),n(31)),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-carousel",{staticStyle:{"text-shadow":"1px 1px 2px #333"},attrs:{id:"carousel-fade",fade:"",indicators:"",controls:"",interval:5e3},on:{input:e.getID,"sliding-start":e.onSlideStart,"sliding-end":e.onSlideEnd},model:{value:e.slideID,callback:function(t){e.slideID=t},expression:"slideID"}},e._l(e.carouselInfo,(function(t){return n("b-carousel-slide",{key:t.caption,staticClass:"carousel-inner",scopedSlots:e._u([{key:"img",fn:function(){return[n("img",{staticClass:"d-block img-fluid w-100",attrs:{src:t.src,alt:"image slot"}})]},proxy:!0}],null,!0)},[n("h2",[e._v(" "+e._s(e.$t(t.caption))+" ")])])})),1)],1)}),[],!1,null,"0414b952",null);t.default=component.exports},379:function(e,t,n){"use strict";n.r(t);var o={name:"Skills",props:["items","name"]},r=(n(384),n(31)),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},e._l(e.items[2],(function(t){return n("el-col",{key:t.nomCompetence,attrs:{gutter:12}},[n("el-row",{staticStyle:{margin:"9px"},attrs:{span:10}},[n("el-card",{attrs:{shadow:"always"}},[n("img",{staticClass:"mb-2",attrs:{src:t.img,alt:"Card Image","img-right":""}}),e._v("\n               "+e._s(t.nomCompetence)+"\n            ")])],1)],1)})),1)}),[],!1,null,"333eda56",null);t.default=component.exports},380:function(e,t,n){"use strict";var o=n(374);n.n(o).a},381:function(e,t,n){(t=n(51)(!1)).push([e.i,".card-card_title[data-v-633f8d92]{font-size:5px;font-weight:500}h2[data-v-633f8d92]{font-size:1.3em;font-weight:700}p[data-v-633f8d92]{font-size:1em}img[data-v-633f8d92]{width:10%;float:right}",""]),e.exports=t},382:function(e,t,n){"use strict";var o=n(375);n.n(o).a},383:function(e,t,n){(t=n(51)(!1)).push([e.i,".carousel-inner[data-v-0414b952]{max-height:500px}h2[data-v-0414b952]{font-size:1.8em;color:#fff}",""]),e.exports=t},384:function(e,t,n){"use strict";var o=n(376);n.n(o).a},385:function(e,t,n){(t=n(51)(!1)).push([e.i,"img[data-v-333eda56]{max-width:2.5%}",""]),e.exports=t},389:function(e,t,n){"use strict";n.r(t);var o=n(378),r=n(377),l=(n(379),{name:"ContentSI",props:["items"]}),c=n(31),component=Object(c.a)(l,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("Skills",{attrs:{items:this.items}})],1)}),[],!1,null,"4f614fc5",null),m=component.exports;installComponents(component,{Skills:n(379).default});var d={components:{Carrousel:o.default,Content:r.default,ContentSI:m},data:function(){return{slideID:0,section:[[{nomPoste:"Full-stack Web Developer",nomEntreprise:"JACK Agency",type:"Apprenticeship",description:"",periode:"September 2020 - September 2021",image:"https://zupimages.net/up/20/42/anld.png"},{nomPoste:"Shareholders",nomEntreprise:"Time For The Planet",type:"",description:"https://www.time-planet.com/fr",periode:"July 2020 - Now",image:"https://zupimages.net/up/20/42/4kky.png"},{nomPoste:"VBA Developer",nomEntreprise:"AXA FRANCE",type:"Apprenticeship",description:"Programming Access and Excel tools in VBA as part of a project",periode:"September 2019 - August 2020",image:"https://zupimages.net/up/20/42/45qe.png"}],[{nomPoste:"Engineer's Degree in Computer Science",nomEntreprise:"CY TECH (EISTI)",periode:"2021 - 2024",image:"https://zupimages.net/up/21/15/fhhq.png"},{nomPoste:"Bachelor’s Degree in Web, Mobile and Business Intelligence",nomEntreprise:"CNAM",description:"Analysis and Design Web, Mobile and Business Intelligence Applications",periode:"2020 - 2021",image:"https://zupimages.net/up/20/42/iq8l.png"},{nomPoste:"Associate Degree in Computer Science",nomEntreprise:"IUT DE MONTREUIL",description:"2019 - 2020 : Year performed in apprenticeship",periode:"2018 - 2020",image:"https://zupimages.net/up/20/42/3ehw.png"}],[{nomCompetence:"Java",img:"https://zupimages.net/up/21/15/hrnc.png"},{nomCompetence:"C",img:"https://zupimages.net/up/21/15/zom9.png"},{nomCompetence:"Python",img:"https://zupimages.net/up/21/15/ob6t.png"},{nomCompetence:"HTML",img:"https://zupimages.net/up/20/44/6ype.png"},{nomCompetence:"CSS",img:"https://zupimages.net/up/20/44/lecy.png"},{nomCompetence:"MySQL",img:"https://zupimages.net/up/20/44/pdpx.png"},{nomCompetence:"PostgreSQL",img:"https://zupimages.net/up/21/15/swku.png"},{nomCompetence:"OracleSQLDeveloper",img:"https://zupimages.net/up/21/15/7jht.png"},{nomCompetence:"Firebase",img:"https://zupimages.net/up/21/15/u5u7.png"},{nomCompetence:"JavaScript",img:"https://zupimages.net/up/20/44/ly7k.png"},{nomCompetence:"VueJS",img:"https://zupimages.net/up/20/44/xb27.png"},{nomCompetence:"NuxtJS",img:"https://zupimages.net/up/20/44/883i.png"},{nomCompetence:"NodeJS",img:"https://zupimages.net/up/20/44/b2tc.png"},{nomCompetence:"PHP",img:"https://zupimages.net/up/20/30/tw67.png"}]]}},methods:{setSlideID:function(e){this.slideID=e.slideID}}},f=Object(c.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Carrousel",{on:{sendid:e.setSlideID}}),e._v(" "),n("br"),e._v(" "),0===e.slideID||1==e.slideID?n("Content",{attrs:{items:e.section,slideID:e.slideID}}):e._e(),e._v(" "),2===e.slideID?n("ContentSI",{attrs:{items:e.section}}):e._e(),e._v(" "),n("br")],1)}),[],!1,null,"64e558fe",null);t.default=f.exports;installComponents(f,{Carrousel:n(378).default,Content:n(377).default})}}]);