(this.webpackJsonpsrc=this.webpackJsonpsrc||[]).push([[0],{309:function(e,t,a){e.exports=a(362)},314:function(e,t,a){},315:function(e,t,a){},362:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(12),l=a.n(o),i=(a(314),a(315),a(250)),c=a(386),s=a(251),m=a(73),u=a(180),p=a(291),h=a.n(p),d=a(252),f=a(70),v=Object(i.a)((function(e){return{appBar:{width:"calc(100% - ".concat(240,"px)"),marginLeft:240},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},link:{cursor:"pointer",textDecoration:"none",color:"white"}}}));var g=function(){var e=v();return r.a.createElement(c.a,{position:"fixed",className:e.appBar},r.a.createElement(s.a,null,r.a.createElement(u.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu"},r.a.createElement(h.a,null)),r.a.createElement(d.a,null,r.a.createElement(m.a,{variant:"h6",className:e.title},r.a.createElement(f.b,{title:"Hottest Artists",className:e.link,to:"/artist"},"Hottest Artists"))),r.a.createElement(d.a,null,r.a.createElement(m.a,{variant:"h6",className:e.title},r.a.createElement(f.b,{title:"Hottest Songs",className:e.link,to:"/"},"Hottest Songs"))),r.a.createElement(d.a,null,r.a.createElement(m.a,{variant:"h6",className:e.title},r.a.createElement(f.b,{title:"Music Trends",className:e.link,to:"/"},"Music Trends"))),r.a.createElement(d.a,null,r.a.createElement(m.a,{variant:"h6",className:e.title},"About"))))},E=a(45),b=a(369),w=a(364),y=a(390),O=a(254),k=a(293),x=a.n(k),j=a(294),N=a.n(j),M=a(393),S=a(389),A=Object(i.a)((function(e){return{drawer:{width:240,flexShrink:0},drawerPaper:{width:240,backgroundImage:"linear-gradient(#cfd9df,#e2ebf0)",color:"grey"},bigAvatar:{margin:30,width:100,height:100}}}));var B=function(){var e=A();return r.a.createElement(E.a,{open:!0,variant:"permanent",anchor:"left",className:e.drawer,classes:{paper:e.drawerPaper}},r.a.createElement(S.a,{container:!0,justify:"center",alignItems:"center"},r.a.createElement(M.a,{src:"https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg",className:e.bigAvatar})),r.a.createElement(b.a,null,["Profile","Sign Out"].map((function(e,t){return r.a.createElement(w.a,{button:!0,key:e},r.a.createElement(y.a,null,t%2===0?r.a.createElement(x.a,null):r.a.createElement(N.a,null)),r.a.createElement(O.a,{primary:e}))}))))},_=Object(i.a)((function(e){return{appBar:{top:"auto",bottom:0,width:"calc(100% - ".concat(240,"px)"),marginLeft:240},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1,marginLeft:10},footer:{marginLeft:20,fontSize:17}}}));var T=function(){var e=_();return r.a.createElement(c.a,{position:"fixed",className:e.appBar},r.a.createElement(m.a,{variant:"h6",className:e.footer},"\xa9 Copyright 2020"))},C=a(20),D=a(141),H=a(142),I=a(156),W=a(153),P=a(295),R=a.n(P),G=a(296),L=a.n(G),z=a(81),F=a(391),J=function(e){Object(I.a)(a,e);var t=Object(W.a)(a);function a(){var e;Object(D.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).getMuiTheme=function(){return Object(z.a)({overrides:{MUIDataTable:{responsiveScroll:{maxHeight:"100%",overflow:"visible"}},MuiTableRow:{head:{color:"#000"}},MuiTableCell:{root:{color:"#000",fontFamily:"inherit",fontSize:"1rem",padding:".2rem .2rem"},head:{color:"#000",fontWeight:"700",fontSize:"1rem"},body:{maxWidth:"15em"}},MuiIconButton:{root:{color:"#000"}},MuiCheckbox:{root:{}}}})},e}return Object(H.a)(a,[{key:"render",value:function(){var e=this,t=[];this.props.data&&this.props.colnames&&this.props.data.map((function(a,n){var r=[];e.props.colnames.map((function(e,t){r.push(a[e])})),t.push(r)}));return r.a.createElement(F.a,{theme:this.getMuiTheme()},r.a.createElement(L.a,{title:this.props.reportname,data:t,columns:this.props.colnameheaders,options:{filterType:"dropdown",responsive:"scrollMaxHeight",selectableRows:"none",downloadOptions:{filename:"tableDownload.csv",separator:",",filterOptions:{useDisplayedColumnsOnly:!0,useDisplayedRowsOnly:!0}}}}))}}]),a}(r.a.Component),U=function(e){Object(I.a)(a,e);var t=Object(W.a)(a);function a(){var e;Object(D.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={top_artists:[],avg_duration:"",error:!1,colnames:["artists","name","popularity"],colnameheaders:["Artists","Song","Popularity"]},e}return Object(H.a)(a,[{key:"componentDidMount",value:function(){var e=this;R.a.get("http://localhost:5000/trend/year/2020").then((function(t){var a=t.data.artists,n="Average Duration of Popular Songs:"+t.data.avg_duration;e.setState({top_artists:a,avg_duration:n})}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(J,{data:this.state.top_artists,colnames:this.state.colnames,totalItemsCount:this.state.top_artists.length,colnameheaders:this.state.colnameheaders,reportname:"Top Artists of 2020"}),r.a.createElement(m.a,{variant:"h6"},this.state.avg_duration))}}]),a}(r.a.Component),$=Object(i.a)((function(e){return{toolbar:e.mixins.toolbar,title:{flexGrow:1,backgroundColor:e.palette.background.default,padding:e.spacing(3)},content:{flexGrow:1,padding:e.spacing(3)},fullWidth:{width:"100%"}}}));var q=function(){var e=$();return r.a.createElement(r.a.Fragment,null,r.a.createElement("main",{className:e.fullWidth},r.a.createElement("div",{className:e.toolbar}),r.a.createElement("div",{className:e.content},r.a.createElement(C.c,null,r.a.createElement(C.a,{path:"/artist",component:U})))))},K=Object(i.a)((function(e){return{root:{display:"flex"}}}));var Q=function(){var e=K();return r.a.createElement("div",{className:e.root},r.a.createElement(g,null),r.a.createElement(B,null),r.a.createElement(q,null),r.a.createElement(T,null))};var V=function(){return r.a.createElement(f.a,null,r.a.createElement(C.a,{path:"/",component:Q,render:function(e){return r.a.createElement(Q,e)}}),r.a.createElement(C.a,{path:"/home",component:Q,render:function(e){return r.a.createElement(Q,e)}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(V,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[309,1,2]]]);
//# sourceMappingURL=main.b4517dc1.chunk.js.map