webpackJsonp([83],{573:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(69);t.default={init:function(){return{prevFrame:new n.g("uint8",[384,500,4])}},op:function(e,t,a){var r=e;return"mult"===t.MATH.type&&(r=n.F(r,a.prevFrame)),"div"===t.MATH.type&&(r=n.t(r,a.prevFrame)),"add"===t.MATH.type&&(r=n.i(r,a.prevFrame)),"sub"===t.MATH.type&&(r=n.O(r,a.prevFrame)),r},tick:function(e,t){var a=t.canvas,r=t.operation,u=t.output,p=t.session,i=t.context;n.p(a),p.runOp(r,e,u),n.Q(this.imgInput,i.prevFrame),n.n(a,u)},params:{MATH:{type:{name:"Operation",type:"constant",values:[{name:"Mult",value:"mult"},{name:"Div",value:"div"},{name:"Add",value:"add"},{name:"Sub",value:"sub"}]}}}}}});