(self.webpackChunknik0kin_github_io=self.webpackChunknik0kin_github_io||[]).push([[514],{3616:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return ie}});var a=n(7294),i=n(3905),l=n(2263),o=n(6291),r=n(2611),s=n(2122),c=n(9756),u=n(6010),d=n(6700),m=n(944),b=n(1839),p=n(3783),f=n(7898),v=n(6742),h=n(3919),E=n(5537),_=function(e){return a.createElement("svg",(0,s.Z)({width:"20",height:"20",role:"img"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},k=n(4478),C=n(4973),g="sidebar_15mo",Z="sidebarWithHideableNavbar_267A",N="sidebarHidden_2kNb",I="sidebarLogo_3h0W",S="menu_Bmed",y="menuLinkText_2aKo",A="menuWithAnnouncementBar_2WvA",M="collapseSidebarButton_1CGd",R="collapseSidebarButtonIcon_3E-R",x="sidebarMenuIcon_fgN0",T="sidebarMenuCloseIcon_1lpH",B="menuLinkExternal_1OhN",L=["items"],w=["item","onItemClick","collapsible","activePath"],P=["item","onItemClick","activePath","collapsible"];var H=function e(t,n){return"link"===t.type?(0,d.Mg)(t.href,n):"category"===t.type&&t.items.some((function(t){return e(t,n)}))},D=(0,a.memo)((function(e){var t=e.items,n=(0,c.Z)(e,L);return t.map((function(e,t){return a.createElement(O,(0,s.Z)({key:t,item:e},n))}))}));function O(e){switch(e.item.type){case"category":return a.createElement(W,e);case"link":default:return a.createElement(K,e)}}function W(e){var t,n,i,l=e.item,o=e.onItemClick,r=e.collapsible,d=e.activePath,m=(0,c.Z)(e,w),b=l.items,p=l.label,f=H(l,d),v=(n=f,i=(0,a.useRef)(n),(0,a.useEffect)((function(){i.current=n}),[n]),i.current),h=(0,a.useState)((function(){return!!r&&(!f&&l.collapsed)})),E=h[0],_=h[1],k=(0,a.useRef)(null),C=(0,a.useState)(void 0),g=C[0],Z=C[1],N=function(e){var t;void 0===e&&(e=!0),Z(e?(null==(t=k.current)?void 0:t.scrollHeight)+"px":void 0)};(0,a.useEffect)((function(){f&&!v&&E&&_(!1)}),[f,v,E]);var I=(0,a.useCallback)((function(e){e.preventDefault(),g||N(),setTimeout((function(){return _((function(e){return!e}))}),100)}),[g]);return 0===b.length?null:a.createElement("li",{className:(0,u.Z)("menu__list-item",{"menu__list-item--collapsed":E})},a.createElement("a",(0,s.Z)({className:(0,u.Z)("menu__link",(t={"menu__link--sublist":r,"menu__link--active":r&&f},t[y]=!r,t)),onClick:r?I:void 0,href:r?"#!":void 0},m),p),a.createElement("ul",{className:"menu__list",ref:k,style:{height:g},onTransitionEnd:function(){E||N(!1)}},a.createElement(D,{items:b,tabIndex:E?"-1":"0",onItemClick:o,collapsible:r,activePath:d})))}function K(e){var t,n=e.item,i=e.onItemClick,l=e.activePath,o=(e.collapsible,(0,c.Z)(e,P)),r=n.href,d=n.label,m=H(n,l);return a.createElement("li",{className:"menu__list-item",key:d},a.createElement(v.Z,(0,s.Z)({className:(0,u.Z)("menu__link",(t={"menu__link--active":m},t[B]=!(0,h.Z)(r),t)),to:r},(0,h.Z)(r)&&{isNavLink:!0,exact:!0,onClick:i},o),d))}function z(e){var t=e.onClick;return a.createElement("button",{type:"button",title:(0,C.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,C.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,u.Z)("button button--secondary button--outline",M),onClick:t},a.createElement(_,{className:R}))}function F(e){var t=e.responsiveSidebarOpened,n=e.onClick;return a.createElement("button",{"aria-label":t?(0,C.I)({id:"theme.docs.sidebar.responsiveCloseButtonLabel",message:"Close menu",description:"The ARIA label for close button of mobile doc sidebar"}):(0,C.I)({id:"theme.docs.sidebar.responsiveOpenButtonLabel",message:"Open menu",description:"The ARIA label for open button of mobile doc sidebar"}),"aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:n},t?a.createElement("span",{className:(0,u.Z)(x,T)},"\xd7"):a.createElement(k.Z,{className:x,height:24,width:24}))}var J=function(e){var t,n,i=e.path,l=e.sidebar,o=e.sidebarCollapsible,r=void 0===o||o,s=e.onCollapse,c=e.isHidden,v=function(){var e=(0,m.Z)().isAnnouncementBarClosed,t=(0,a.useState)(!e),n=t[0],i=t[1];return(0,f.Z)((function(t){var n=t.scrollY;e||i(0===n)})),n}(),h=(0,d.LU)(),_=h.navbar.hideOnScroll,k=h.hideableSidebar,C=(0,m.Z)().isAnnouncementBarClosed,y=function(){var e=(0,a.useState)(!1),t=e[0],n=e[1];(0,b.Z)(t);var i=(0,p.Z)();return(0,a.useEffect)((function(){i===p.D.desktop&&n(!1)}),[i]),{showResponsiveSidebar:t,closeResponsiveSidebar:(0,a.useCallback)((function(e){e.target.blur(),n(!1)}),[n]),toggleResponsiveSidebar:(0,a.useCallback)((function(){n((function(e){return!e}))}),[n])}}(),M=y.showResponsiveSidebar,R=y.closeResponsiveSidebar,x=y.toggleResponsiveSidebar;return a.createElement("div",{className:(0,u.Z)(g,(t={},t[Z]=_,t[N]=c,t))},_&&a.createElement(E.Z,{tabIndex:-1,className:I}),a.createElement("div",{className:(0,u.Z)("menu","menu--responsive","thin-scrollbar",S,(n={"menu--show":M},n[A]=!C&&v,n))},a.createElement(F,{responsiveSidebarOpened:M,onClick:x}),a.createElement("ul",{className:"menu__list"},a.createElement(D,{items:l,onItemClick:R,collapsible:r,activePath:i}))),k&&a.createElement(z,{onClick:s}))},Y=n(3541),G=n(4608),Q=n(5977),U="docPage_31aa",X="docMainContainer_3ufF",j="docMainContainerEnhanced_3NYZ",q="docSidebarContainer_3Kbt",V="docSidebarContainerHidden_3pA8",$="collapsedDocSidebar_2JMH",ee="expandSidebarButtonIcon_1naQ",te="docItemWrapperEnhanced_2vyJ",ne="docItemWrapper_3FMP";function ae(e){var t,n,o,s,c,m=e.currentDocRoute,b=e.versionMetadata,p=e.children,f=(0,l.default)(),v=f.siteConfig,h=f.isClient,E=b.pluginId,k=b.permalinkToSidebar,g=b.docsSidebars,Z=b.version,N=k[m.path],I=g[N],S=(0,a.useState)(!1),y=S[0],A=S[1],M=(0,a.useState)(!1),R=M[0],x=M[1],T=(0,a.useCallback)((function(){R&&x(!1),A(!y)}),[R]);return a.createElement(r.Z,{key:h,wrapperClassName:d.kM.wrapper.docPages,pageClassName:d.kM.page.docPage,searchMetadatas:{version:Z,tag:(0,d.os)(E,Z)}},a.createElement("div",{className:U},I&&a.createElement("div",{className:(0,u.Z)(q,(t={},t[V]=y,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(q)&&y&&x(!0)},role:"complementary"},a.createElement(J,{key:N,sidebar:I,path:m.path,sidebarCollapsible:null==(n=null==(o=v.themeConfig)?void 0:o.sidebarCollapsible)||n,onCollapse:T,isHidden:R}),R&&a.createElement("div",{className:$,title:(0,C.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,C.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:T,onClick:T},a.createElement(_,{className:ee}))),a.createElement("main",{className:(0,u.Z)(X,(s={},s[j]=y||!I,s))},a.createElement("div",{className:(0,u.Z)("container padding-vert--lg",ne,(c={},c[te]=y,c))},a.createElement(i.Zo,{components:Y.Z},p)))))}var ie=function(e){var t=e.route.routes,n=e.versionMetadata,i=e.location,l=t.find((function(e){return(0,Q.LX)(i.pathname,e)}));return l?a.createElement(ae,{currentDocRoute:l,versionMetadata:n},(0,o.Z)(t)):a.createElement(G.default,e)}}}]);