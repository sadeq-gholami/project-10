(this["webpackJsonpprojekt-10"]=this["webpackJsonpprojekt-10"]||[]).push([[0],{54:function(e,a,t){e.exports=t.p+"static/media/tech.405635f5.jpeg"},58:function(e,a,t){e.exports=t(71)},71:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(11),c=t.n(r),o=t(17),u=t(18),i=t(20),s=t(21),m=t(55),p=t(22),d=t(31),b=t(77),E=t(76),h=t(73),f=function(e){e.closePopup;var a=e.handleSubmit,t=e.props,n=e.children;return l.a.createElement("div",{id:"bg-modal"},l.a.createElement(E.a.Dialog,null,l.a.createElement(E.a.Header,null,l.a.createElement(E.a.Title,null,t.title)),l.a.createElement(E.a.Body,null,n),l.a.createElement(E.a.Footer,null,l.a.createElement(h.a,{variant:"primary",onClick:a},t.button))))},v=function(e){Object(s.a)(t,e);var a=Object(i.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).state={message:""},e.closePopup=function(a){c.a.findDOMNode(Object(d.a)(e)).querySelector("#bg-modal").style.display="none"},e.handlechange=function(a){e.setState({message:a.target.value})},e.handleSubmit=function(a){console.log(e.state.message),e.setState({message:""})},e}return Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(f,{closePopup:this.closePopup,handleSubmit:this.handleSubmit,props:{title:"message",body:"enter the message",button:"send message"}},l.a.createElement(b.a.Group,{controlId:"exampleForm.ControlTextarea1"},l.a.createElement(b.a.Label,null,"Enter the message here"),l.a.createElement(b.a.Control,{as:"textarea",rows:"3",onChange:this.handlechange}))))}}]),t}(n.Component),g=t(74),y=function(e){Object(s.a)(t,e);var a=Object(i.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).state={},e}return Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement(g.a,null,l.a.createElement("h2",null,"About"),l.a.createElement("p",null,"Lorem ipsum dolor sit amet, morbi facilisis elit euismod taciti, mollis lectus mi lobortis feugiat torquent lacus, curabitur et nunc, nec integer ornare. Lorem in nulla at eleifend orci, ultrices nam turpis pellentesque eros suspendisse lectus, sed lorem elit ut ipsum imperdiet vestibulum. In integer sed aliquam dui, molestie suspendisse eleifend. Quis nulla blandit ante, sem consequat dictum nec massa mauris inceptos, maecenas mauris tempus nulla sed lacus id. Officia nibh ligula lectus est diam, fusce praesent libero eleifend, magnis rutrum, pretium amet tellus. Cursus libero nisl praesent orci cursus. Sed et, in dolores. Erat libero. Tortor suspendisse in convallis orci wisi nunc, turpis faucibus blandit ac vitae donec quisque, at suscipit nonummy nascetur, aliquam porttitor nullam ac massa vulputate, aspernatur a sit in."))}}]),t}(n.Component),j=function(e){Object(s.a)(t,e);var a=Object(i.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).state={},e}return Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement(g.a,null,l.a.createElement("h2",null,"your Screens"),l.a.createElement("ul",null,l.a.createElement("li",null,"Screen 1"),l.a.createElement("li",null,"Screen 2"),l.a.createElement("li",null,"Screen 3"),l.a.createElement("li",null,"Screen 4")))}}]),t}(n.Component),O=t(36),k=t(79),S=t(78),x=t(37);function C(){var e=Object(O.a)(["\n    .navbar {\n        background-color : #233;\n    }\n    .navbar-brand, .navbar-nav .nav-link {\n        color: #bbb;\n\n        &:hover {\n            color: white;\n        }\n    }\n"]);return C=function(){return e},e}var w=x.a.div(C()),q=function(){return l.a.createElement(w,null,l.a.createElement(k.a,{expand:"lg"},l.a.createElement(k.a.Brand,{href:"/"},"door dispay"),l.a.createElement(k.a.Toggle,{"aria-controls":"basic-navbar-nav"}),l.a.createElement(k.a.Collapse,{id:"basic-navbar-nav"},l.a.createElement(S.a,{className:"ml-auto"},l.a.createElement(S.a.Item,null,l.a.createElement(S.a.Link,{href:"/"},"Home")),l.a.createElement(S.a.Item,null,l.a.createElement(S.a.Link,{href:"/About"},"About")),l.a.createElement(S.a.Item,null,l.a.createElement(S.a.Link,{href:"/Displays"},"Displays"))))))},A=t(75),I=t(54),L=t.n(I);function D(){var e=Object(O.a)(["\n    .jumbo {\n        background: url(",") no-repeat fixed bottom;\n        background-size: cover;\n        color:#ccc;\n        height: 200px;\n        position: relative;\n        z-index: -2;\n    }\n\n    .overlay{\n        background-color: #000;\n        opacity: 0.6;\n        position: absolute;\n        top:0;\n        right:0;\n        bottom: 0;\n        left: 0;\n        z-index: -1;\n\n    }\n"]);return D=function(){return e},e}var F=x.a.div(D(),L.a),N=function(){return l.a.createElement(F,null,l.a.createElement(A.a,{fluid:!0,className:"jumbo"},l.a.createElement("div",{className:"overlay"}),l.a.createElement(g.a,null,l.a.createElement("h1",null,"Welcome"),l.a.createElement("p",null,"Here you can send message to all your displays"))))},P=function(e){Object(s.a)(t,e);var a=Object(i.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).state={},e}return Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(q,null),l.a.createElement(N,null),l.a.createElement(m.a,null,l.a.createElement(p.c,null,l.a.createElement(p.a,{exact:!0,path:"/",component:v}),l.a.createElement(p.a,{path:"/About",component:y}),l.a.createElement(p.a,{path:"/Displays",component:j}))))}}]),t}(n.Component);t(70);c.a.render(l.a.createElement(l.a.Fragment,null,l.a.createElement(P,null)),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.0b9a73e1.chunk.js.map