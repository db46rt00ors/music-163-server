(function(t){function i(i){for(var e,n,r=i[0],c=i[1],u=i[2],l=0,d=[];l<r.length;l++)n=r[l],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&d.push(s[n][0]),s[n]=0;for(e in c)Object.prototype.hasOwnProperty.call(c,e)&&(t[e]=c[e]);h&&h(i);while(d.length)d.shift()();return o.push.apply(o,u||[]),a()}function a(){for(var t,i=0;i<o.length;i++){for(var a=o[i],e=!0,n=1;n<a.length;n++){var r=a[n];0!==s[r]&&(e=!1)}e&&(o.splice(i--,1),t=c(c.s=a[0]))}return t}var e={},n={app:0},s={app:0},o=[];function r(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-2d0e9ba0":"efe372fe","chunk-2d22c902":"c90e8800","chunk-685a349e":"84120114"}[t]+".js"}function c(i){if(e[i])return e[i].exports;var a=e[i]={i:i,l:!1,exports:{}};return t[i].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var i=[],a={"chunk-685a349e":1};n[t]?i.push(n[t]):0!==n[t]&&a[t]&&i.push(n[t]=new Promise((function(i,a){for(var e="css/"+({}[t]||t)+"."+{"chunk-2d0e9ba0":"31d6cfe0","chunk-2d22c902":"31d6cfe0","chunk-685a349e":"14101829"}[t]+".css",s=c.p+e,o=document.getElementsByTagName("link"),r=0;r<o.length;r++){var u=o[r],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===e||l===s))return i()}var d=document.getElementsByTagName("style");for(r=0;r<d.length;r++){u=d[r],l=u.getAttribute("data-href");if(l===e||l===s)return i()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=i,h.onerror=function(i){var e=i&&i.target&&i.target.src||s,o=new Error("Loading CSS chunk "+t+" failed.\n("+e+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=e,delete n[t],h.parentNode.removeChild(h),a(o)},h.href=s;var m=document.getElementsByTagName("head")[0];m.appendChild(h)})).then((function(){n[t]=0})));var e=s[t];if(0!==e)if(e)i.push(e[2]);else{var o=new Promise((function(i,a){e=s[t]=[i,a]}));i.push(e[2]=o);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=r(t);var d=new Error;u=function(i){l.onerror=l.onload=null,clearTimeout(h);var a=s[t];if(0!==a){if(a){var e=i&&("load"===i.type?"missing":i.type),n=i&&i.target&&i.target.src;d.message="Loading chunk "+t+" failed.\n("+e+": "+n+")",d.name="ChunkLoadError",d.type=e,d.request=n,a[1](d)}s[t]=void 0}};var h=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(i)},c.m=t,c.c=e,c.d=function(t,i,a){c.o(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,i){if(1&i&&(t=c(t)),8&i)return t;if(4&i&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&i&&"string"!=typeof t)for(var e in t)c.d(a,e,function(i){return t[i]}.bind(null,e));return a},c.n=function(t){var i=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(i,"a",i),i},c.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},c.p="/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=i,u=u.slice();for(var d=0;d<u.length;d++)i(u[d]);var h=l;o.push([0,"chunk-vendors"]),a()})({0:function(t,i,a){t.exports=a("56d7")},"1c75":function(t,i,a){},"56d7":function(t,i,a){"use strict";a.r(i);a("e260"),a("e6cf"),a("cca6"),a("a79d");var e=a("2b0e"),n=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"navList"},[a("span",{staticClass:"iconfont icon-caidan"}),a("ul",t._l(t.navList,(function(i,e){return a("li",{key:e,class:["iconfont",i.iconfont,{cur:i.iconfont===t.$route.name}],on:{click:function(a){return t.routerGo(i.url)}}})})),0),a("span",{staticClass:"iconfont icon-zhuanjiguangpan",on:{click:t.showPlayer}})]),a("router-view"),a("album",{attrs:{albumObj:t.albumObj}}),a("audio-player",{directives:[{name:"show",rawName:"v-show",value:t.audio.isShowPlayer,expression:"audio.isShowPlayer"}],attrs:{audio:t.audio}})],1)},s=[],o=function(){var t=this,i=t.$createElement,a=t._self._c||i;return t.albumObj.isShowAlbum?a("div",{directives:[{name:"height",rawName:"v-height"}],staticClass:"albumPage"},[a("div",{staticClass:"header",style:{background:"url("+t.albumObj.albumItem.albumbg+") 0 0 / cover no-repeat"}},[a("header",[a("span",{staticClass:"goback iconfont icon-houtui1",on:{click:t.goback}}),t._v(" "+t._s(t.albumObj.albumItem.albumTitle)+" ")]),a("div",{staticClass:"content"},[a("img",{attrs:{src:t.albumObj.albumItem.albumImg,alt:""}}),a("div",{staticClass:"album-detail"},[a("p",{staticClass:"albumTitle"},[t._v("专辑名称："+t._s(t.albumObj.albumItem.albumTitle))]),a("p",{staticClass:"albumSinger"},[t._v("歌手："+t._s(t.albumObj.albumItem.albumSinger))])])]),t._m(0)]),a("div",{directives:[{name:"height",rawName:"v-height",value:300,expression:"300"}],staticClass:"albumList"},[a("ul",t._l(t.albumObj.albumItem.albumList,(function(i,e){return a("li",{key:e,class:{cur:e==t.$store.state.audio.index&&t.albumObj.index==t.$store.state.audio.albumIndex},on:{click:function(i){return t.playAudio(t.albumObj.albumItem.albumList,e)}}},[a("span",{staticClass:"xuhao iconfont",class:{"icon-laba":e==t.$store.state.audio.index&&t.albumObj.index==t.$store.state.audio.albumIndex}},[t._v(t._s(e==t.$store.state.audio.index&&t.albumObj.index==t.$store.state.audio.albumIndex?"":e+1))]),a("div",[a("p",[t._v(t._s(i.musicName))]),a("p",[t._v(t._s(i.musicSinger))])]),a("span",{staticClass:"iconfont icon-bofang"})])})),0)])]):t._e()},r=[function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("ul",{staticClass:"setting"},[a("li",[a("p",{staticClass:"iconfont icon-addfile"}),a("p",{staticClass:"num"},[t._v("3333")])]),a("li",[a("p",{staticClass:"iconfont icon-BAI-pinglun"}),a("p",{staticClass:"num"},[t._v("1247")])]),a("li",[a("p",{staticClass:"iconfont icon-fenxiang1"}),a("p",{staticClass:"num"},[t._v("12")])]),a("li",[a("p",{staticClass:"iconfont icon-icon--"}),a("p",{staticClass:"num"},[t._v("15")])])])}],c={props:["albumObj"],methods:{goback:function(){this.$store.commit("HIDEALBUM",{isShowAlbum:!1})},playAudio:function(t,i){console.log("itemList: ",t),this.$store.commit("SHOWPLAYER",{isShowPlayer:!0,playerList:t,index:i,avatar:this.albumObj.albumItem.albumImg,playerbg:this.albumObj.albumItem.playerbg,albumIndex:this.albumObj.index})}}},u=c,l=(a("a49b"),a("2877")),d=Object(l["a"])(u,o,r,!1,null,"50a47947",null),h=d.exports,m=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{directives:[{name:"height",rawName:"v-height"}],staticClass:"audio-player-page",style:{background:"#3b7e85 url("+t.audio.playerbg+") 0 0 / cover no-repeat"}},[a("header",[a("span",{staticClass:"goback iconfont icon-houtui1",on:{click:t.goback}}),t._v(" "+t._s("number"==typeof t.audio.index?t.audio.playerList[t.audio.index].musicName:"播放器")+" ")]),"number"==typeof t.audio.index?a("div",[a("audio",{attrs:{src:t.audio.playerList[t.audio.index].musicUrl,autoplay:""},on:{timeupdate:t.play}})]):t._e(),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.isShowLyric,expression:"!isShowLyric"}],staticClass:"content",on:{click:t.showLyric}},[a("div",{staticClass:"cd-mine"},[a("img",{attrs:{src:"number"==typeof t.audio.index?"/img/cd-mine.png":"/img/cd.png"}}),a("div",{staticClass:"singerImg",class:{cur:t.isPlay}},[a("img",{attrs:{src:t.audio.avatar,alt:""}})])]),a("div",{staticClass:"swith",class:{cur:t.isPlay}},[a("img",{attrs:{src:"/img/swith.png",alt:""}})])]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowLyric,expression:"isShowLyric"}],staticClass:"lyricBox",on:{click:t.showLyric}},[a("h1",{staticStyle:{color:"#fff"}},[t._v("我是歌词页面")])]),t._m(0),a("div",{staticClass:"progressBar"},[a("p",{staticClass:"star"},[t._v(t._s(t._f("zhuanhuan")(t.currentTime)))]),a("p",{staticClass:"progress"},[a("span",{staticClass:"durationTime",on:{click:function(i){return t.goTime(i)}}},[a("span",{staticClass:"currentTime",style:{width:t.currentTime/t.duration*100+"%"}})])]),a("p",{staticClass:"end"},[t._v(t._s(t._f("zhuanhuan")(t.duration)))])]),a("div",{staticClass:"controller"},[a("span",{staticClass:"playMode iconfont",class:[{"icon-xunhuan":"all"==t.playState},{"icon-bofangye-caozuolan-suijibofang":"random"==t.playState},{"icon-singlecycle":"once"==t.playState}],on:{click:t.changePlayMode}}),a("ul",[a("li",{staticClass:"iconfont icon-previous",on:{click:t.goPrev}}),a("li",{staticClass:"iconfont",class:[t.isPlay?"icon-pause-20":"icon-bofang"],on:{click:t.pause_play}}),a("li",{staticClass:"iconfont icon-next",on:{click:t.goNext}})]),a("span",{staticClass:"iconfont icon-zhankaicaidan",on:{click:t.showPlayList}})]),a("div",{directives:[{name:"height",rawName:"v-height"}],staticClass:"popwindow",class:{cur:t.isShowPlayList}}),a("div",{staticClass:"playList",class:{cur:t.isShowPlayList}},[a("ul",t._l(t.audio.playerList,(function(i,e){return a("li",{key:e,class:{cur:e==t.audio.index},on:{click:function(i){return t.changeMusic(e)}}},[a("span",{directives:[{name:"show",rawName:"v-show",value:e===t.audio.index,expression:"index === audio.index"}],staticClass:"iconfont icon-laba"}),a("p",[a("span",{staticClass:"musicName"},[t._v(t._s(i.musicName))]),a("span",{staticClass:"musicSinger"},[t._v("- "+t._s(i.musicSinger))])]),a("span",{staticClass:"iconfont icon-bofang"})])})),0),a("div",{staticClass:"close",on:{click:t.showPlayList}},[t._v("关闭")])])])},p=[function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"setting"},[a("ul",[a("li",{staticClass:"iconfont icon-xin1"}),a("li",{staticClass:"iconfont icon-icon--"}),a("li",{staticClass:"iconfont icon-BAI-pinglun"}),a("li",{staticClass:"iconfont icon-more-vert"})])])}],f={props:["audio"],data:function(){return{isShowLyric:!1,isShowPlayList:!1,duration:0,currentTime:0,isPlay:!0,isAddClass:!0,playState:"all"}},computed:{index:function(){return this.$store.state.audio.index}},filters:{zhuanhuan:function(t){var i;if(t>-1){var a=Math.floor(t/60)%60,e=t%60;a<10&&(i+="0"),i=a+":",e<10&&(i+="0"),i+=0|e}return i}},methods:{goback:function(){this.$store.commit("HIDEAUDIOPLAYER",{isShowPlayer:!1})},showLyric:function(){this.isShowLyric=!this.isShowLyric},showPlayList:function(){this.isShowPlayList=!this.isShowPlayList},play:function(){if(this.duration=$("audio")[0].duration,this.currentTime=$("audio")[0].currentTime,this.isAddClass&&$("audio")[0].pause?(this.isPlay=!1,this.isAddClass=!1):this.isPlay=!0,$("audio")[0].ended)if("all"==this.playState)this.index>=this.audio.playerList.length-1?(console.log("这张专辑播放完了！！！"),this.changeMusic(0)):this.changeMusic(this.index+1);else if("once"==this.playState)this.changeMusic(this.index),$("audio")[0].load();else if("random"==this.playState){var t;do{t=~~(Math.random()*this.audio.playerList.length)}while(t==this.index);this.changeMusic(t)}},goTime:function(t){$("audio")[0].currentTime=t.offsetX/$(".durationTime").width()*$("audio")[0].duration},pause_play:function(){this.isPlay=!this.isPlay,this.isPlay?$("audio")[0].play():($("audio")[0].pause(),this.isAddClass=!0)},changePlayMode:function(){"all"==this.playState?this.playState="random":"random"==this.playState?this.playState="once":"once"==this.playState&&(this.playState="all")},changeMusic:function(t){null==this.$store.state.audio.albumIndex?this.$store.commit("CHANGEMUSIC",{index:t,playerbg:this.audio.playerList[t].playerbg,avatar:this.audio.playerList[t].singerImg}):"number"==typeof this.$store.state.audio.albumIndex&&this.$store.commit("CHANGEMUSIC",{index:t,playerbg:this.audio.playerbg,avatar:this.audio.avatar})},goPrev:function(){if("random"==this.playState){var t=~~(Math.random()*this.audio.playerList.length);console.log(t),this.changeMusic(t)}else this.index<=0?this.changeMusic(this.audio.playerList.length-1):this.changeMusic(this.index-1)},goNext:function(){if("random"==this.playState){var t=~~(Math.random()*this.audio.playerList.length);this.changeMusic(t)}else this.index>=this.audio.playerList.length-1?this.changeMusic(0):this.changeMusic(this.index+1)}},created:function(){console.log(this.audio)}},b=f,y=(a("7a3f"),Object(l["a"])(b,m,p,!1,null,"07707f0c",null)),g=y.exports,v={data:function(){return{navList:[{iconfont:"icon-wangyiyunyinlezizhi-copy",url:"/index"},{iconfont:"icon-diantai",url:"/diantai"},{iconfont:"icon-pengyou",url:"/wode"}]}},computed:{albumObj:function(){return this.$store.state.albumObj},audio:function(){return this.$store.state.audio}},methods:{routerGo:function(t){this.$router.push({path:t})},showPlayer:function(){this.$store.commit("_SHOWPLAYER_",{isShowPlayer:!0})}},components:{album:h,audioPlayer:g}},w=v,x=(a("e4fd"),Object(l["a"])(w,n,s,!1,null,"67009e88",null)),C=x.exports,S=(a("d3b7"),a("8c4f")),_=S["a"].prototype.push;S["a"].prototype.push=function(t){return _.call(this,t).catch((function(t){return t}))},e["a"].use(S["a"]);var L=[{path:"/index",name:"icon-wangyiyunyinlezizhi-copy",component:function(){return a.e("chunk-685a349e").then(a.bind(null,"37f9"))}},{path:"/diantai",name:"icon-diantai",component:function(){return a.e("chunk-2d22c902").then(a.bind(null,"f486"))}},{path:"/wode",name:"icon-pengyou",component:function(){return a.e("chunk-2d0e9ba0").then(a.bind(null,"8f84"))}},{path:"/*",redirect:"/index"}],P=new S["a"]({routes:L}),O=P,k=(a("96cf"),a("89ba")),j=a("2f62");e["a"].use(j["a"]);var I=new j["a"].Store({state:{mapList:[],albumObj:{isShowAlbum:!1,albumItem:{},index:null},audio:{isShowPlayer:!1,playerList:[],index:null,avatar:null,playerbg:"",albumIndex:null}},mutations:{GETMUSIC:function(t,i){t.mapList=i},SHOWALBUM:function(t,i){console.log(i),t.albumObj.isShowAlbum=i.isShowAlbum,t.albumObj.albumItem=i.albumItem,t.albumObj.index=i.index},HIDEALBUM:function(t,i){t.albumObj.isShowAlbum=i.isShowAlbum},HIDEAUDIOPLAYER:function(t,i){t.audio.isShowPlayer=i.isShowPlayer},SHOWPLAYER:function(t,i){t.audio.isShowPlayer=i.isShowPlayer,t.audio.playerList=i.playerList,t.audio.index=i.index,t.audio.avatar=i.avatar,t.audio.playerbg=i.playerbg,t.audio.albumIndex=i.albumIndex},_SHOWPLAYER_:function(t,i){t.audio.isShowPlayer=i.isShowPlayer},CHANGEMUSIC:function(t,i){console.log("payload: ",i),t.audio.index=i.index,t.audio.avatar=i.avatar,t.audio.playerbg=i.playerbg}},actions:{GETMUSIC:function(){var t=Object(k["a"])(regeneratorRuntime.mark((function t(i){var a,e,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=i.commit,t.next=3,fetch("/getmusic").then((function(t){return t.json()}));case 3:e=t.sent,n=e.mapList,console.log(n),a("GETMUSIC",n);case 7:case"end":return t.stop()}}),t)})));function i(i){return t.apply(this,arguments)}return i}()},modules:{}}),A=(a("b0c0"),function(t){t.directive("height",{inserted:function(t,i){"number"==typeof i.value?$(t).css(i.name,$(window).height()-i.value):$(t).css(i.name,$(window).height())}})}),M=a("6fe8"),E=a.n(M);a("664d");e["a"].use(E.a),e["a"].use(A),e["a"].config.productionTip=!1,new e["a"]({router:O,store:I,render:function(t){return t(C)}}).$mount("#app")},"7a3f":function(t,i,a){"use strict";var e=a("f36b"),n=a.n(e);n.a},a49b:function(t,i,a){"use strict";var e=a("b474"),n=a.n(e);n.a},b474:function(t,i,a){},e4fd:function(t,i,a){"use strict";var e=a("1c75"),n=a.n(e);n.a},f36b:function(t,i,a){}});
//# sourceMappingURL=app.d77fcfbe.js.map