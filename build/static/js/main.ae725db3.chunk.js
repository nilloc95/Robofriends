(this["webpackJsonptest-app"]=this["webpackJsonptest-app"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(2),c=n.n(o),l=(n(12),n(3)),i=n(4),s=n(6),h=n(5),u=function(e){var t=e.name,n=e.email,a=e.id;return r.a.createElement("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},r.a.createElement("img",{src:"https://robohash.org/".concat(a,"?200x200"),alt:"Card of a Contact"}),r.a.createElement("div",null,r.a.createElement("h2",null,t),r.a.createElement("p",null,n)))},m=function(e){var t=e.robots,n=t.map((function(e,n){return r.a.createElement(u,{key:n,id:t[n].id,name:t[n].name,email:t[n].email})}));return r.a.createElement("div",null,n)},d=function(e){e.searchField;var t=e.searchChange;return r.a.createElement(a.Fragment,null,r.a.createElement("input",{className:" pa3 ma2 w-30 ba b--green bg-lightest-blue br-pill",type:"search",placeholder:"Search",onChange:t}))},b=(n(13),function(e){return r.a.createElement("div",{style:{overflowY:"scroll",border:"1px solid black",height:"650px"}},e.children)}),p=function(e){Object(s.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchField:t.target.value})},e.state={robots:[],searchField:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this,t=this.state.robots.filter((function(t){return t.name.toLowerCase().includes(e.state.searchField.toLowerCase())}));return 0===this.state.robots.length?r.a.createElement("h1",null,"Loading"):r.a.createElement("main",{className:"tc"},r.a.createElement("h1",{className:"f-subheadline"},"Robo Friends"),r.a.createElement(d,{searchChange:this.onSearchChange}),r.a.createElement(b,null,r.a.createElement(m,{robots:t})))}}]),n}(a.Component);n(14),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,n){e.exports=n(15)}},[[7,1,2]]]);
//# sourceMappingURL=main.ae725db3.chunk.js.map