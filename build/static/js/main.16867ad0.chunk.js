(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{19:function(e,t,a){e.exports=a.p+"static/media/teaserSupebook.70ee8d35.mp4"},21:function(e,t,a){e.exports=a(37)},26:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),c=a(18),i=a.n(c),r=a(6),o=a(7),l=a(9),u=a(8),m=a(1),d=(a(26),a(19)),v=a.n(d),p=(a(27),a(28),a(29),function(e){var t=e.urlVideo;return s.a.createElement("a",{href:"".concat(t),className:"btn auto blue-col uppercase bold",target:"_blank"},s.a.createElement("div",{className:"content"},"Voir la video"))}),f=function(e){var t=e.titleWebsite,a=e.txtInfos;return s.a.createElement("div",{className:"absolute-center",id:"header-content"},s.a.createElement("div",{className:"title-website uppercase white-col"},t),s.a.createElement("p",{className:"txt-infos roboto-light white-col auto"},a),s.a.createElement(p,{urlVideo:"https://youtube.com/watch?v=47orBokt6Es"}))},h=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={isVideoMuted:!0,isVideoPlayed:!0},e.componentWillUnmount=function(){e.pauseAndPlayVideo(),e.mutedAndUnmutedVideo()},e.pauseAndPlayVideo=function(){e.setState({isVideoPlayed:e.state.isVideoPlayed?e.refs.vidRef.pause():e.refs.vidRef.play()})},e.mutedAndUnmutedVideo=function(){e.setState({isVideoMuted:e.state.isVideoMuted?e.refs.vidRef.muted=!1:e.refs.vidRef.muted=!0})},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.setState({isVideoPlayed:(this.state.isVideoPlayed,this.refs.vidRef.play())})}},{key:"render",value:function(){var e=this,t=function(){return s.a.createElement("div",{className:"manage-video"},s.a.createElement("div",{className:"btn-video",onClick:e.pauseAndPlayVideo},e.state.isVideoPlayed?s.a.createElement("i",{className:"fal fa-pause icon-btn-anime"}):s.a.createElement("i",{className:"fal fa-play icon-btn-anime"})),s.a.createElement("div",{className:"btn-video",onClick:e.mutedAndUnmutedVideo},e.state.isVideoMuted?s.a.createElement("i",{className:"fal fa-volume-up icon-btn-anime"}):s.a.createElement("i",{className:"fal fa-volume-mute icon-btn-anime"})))};return s.a.createElement("div",{className:"wrapper"},s.a.createElement("div",{className:"video-container"},s.a.createElement("video",{ref:"vidRef",autoPlay:!0,muted:!0,loop:!0},s.a.createElement("source",{src:v.a,type:"video/mp4"})),s.a.createElement("div",{className:"video-layer"})),s.a.createElement(f,{titleWebsite:"Divine Words",txtInfos:"Vous r\xe9concilier avec la Parole de Dieu ou de vous \n\n          enraciner davantage en elle car plus que des mots, mais des\n          paroles divines."}),s.a.createElement(t,null))}}]),a}(n.Component),b=(a(30),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={burgerActive:!1},e.burgerMenu=function(){e.setState({burgerActive:!e.state.burgerActive})},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props,t=e.menuNav,a=void 0===t?[]:t,n=e.menuLinks,c=void 0===n?[]:n,i=e.logo,r=this.state.burgerActive,o=window.location.pathname;return s.a.createElement("div",{className:"res-nav"},s.a.createElement("div",{className:"icon-res-menu ".concat(o.includes("/mes-situations")?"bg-nav-responsive-blue":"icon-res-menu"," ").concat(o.includes("/mes-situations/")?"bg-nav-responsive-white":"icon-res-menu"),onClick:this.burgerMenu},s.a.createElement("div",{className:"".concat(o.includes("/mes-situations/")?"icon-menu-res orange-bgc":"icon-menu-res white-bg")}),s.a.createElement("div",{className:"".concat(o.includes("/mes-situations/")?"icon-menu-res orange-bgc":"icon-menu-res white-bg")}),s.a.createElement("div",{className:"".concat(o.includes("/mes-situations/")?"icon-menu-res orange-bgc":"icon-menu-res white-bg")})),s.a.createElement("nav",{className:"nav-responsive ".concat(r?"show":"hide"," ")},s.a.createElement("ul",{className:""},s.a.createElement("h2",{className:"logo "},i),s.a.createElement("div",{className:"list-items-res"},a.map((function(e,t){var a=c.map((function(e){return e}));return s.a.createElement("li",{key:t,className:"list-items"},s.a.createElement("a",{href:a[t],className:"anchors uppercase white-col"},e))})))),s.a.createElement("div",{className:"closed",onClick:this.burgerMenu},s.a.createElement("i",{class:"close hairline closed-icon"}))))}}]),a}(n.Component)),E=(a(31),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={matchesScreen:window.matchMedia("(min-width: 1068px)").matches},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;window.matchMedia("(min-width: 1068px)").addListener((function(t){return e.setState({matchesScreen:t.matches})}))}},{key:"render",value:function(){var e=this.props,t=e.menuNav,a=void 0===t?[]:t,n=e.menuLinks,c=void 0===n?[]:n,i=e.logo,r=window.location.pathname,o=function(){return s.a.createElement("nav",{className:"nav-default ".concat(r.includes("/mes-situations")?"bg-nav-blue":"nav-default"," ").concat(r.includes("/mes-situations/")?"bg-nav-white":"nav-default")},s.a.createElement("div",{className:"container"},s.a.createElement("ul",{className:"flex-menu"},s.a.createElement("h2",{className:"logo white-col"},i),s.a.createElement("div",{className:"flex-items"},a.map((function(e,t){var a=c.map((function(e){return e}));return s.a.createElement("li",{key:t,className:"list-items"},s.a.createElement("a",{href:a[t],className:"".concat(r.includes("/mes-situations/")?"anchors uppercase orange-col-anchors":"anchors uppercase white-col"," ")},e))}))))))};return s.a.createElement("div",null,this.state.matchesScreen&&s.a.createElement(o,null),!this.state.matchesScreen&&s.a.createElement(b,{menuNav:["Accueil","Alphabets versets","Mes situations"],menuLinks:["/","/alphabets-versets","/mes-situations"]}))}}]),a}(n.Component)),N=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=window.location.pathname.includes("/alphabets-versets")?s.a.createElement(b,{menuNav:["Accueil","Alphabets versets","Mes situations"],menuLinks:["/","/alphabets-versets","/mes-situations"]}):s.a.createElement(E,{menuNav:["Accueil","Alphabets versets","Mes situations"],menuLinks:["/","/alphabets-versets","/mes-situations"]});return s.a.createElement("div",{className:"app"},e,s.a.createElement(m.c,null,s.a.createElement(m.a,{exact:!0,path:"/",component:h})))}}]),a}(n.Component),g=Object(m.f)(N),w=a(13),y=Object(m.f)((function(e){var t=e.children,a=e.location.pathname;return Object(n.useEffect)((function(){window.scrollTo(0,0)}),[a]),t}));i.a.render(s.a.createElement(w.a,null,s.a.createElement(y,{className:"scrollAnime"},s.a.createElement(g,null))),document.getElementById("app"))}},[[21,1,2]]]);
//# sourceMappingURL=main.16867ad0.chunk.js.map