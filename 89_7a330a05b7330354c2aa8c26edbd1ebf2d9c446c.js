webpackJsonp([89],{562:function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=a(69);n.default={op:function(e,n){return t.v(e,n.DOWNSAMPLE.coeficient,n.DOWNSAMPLE.type||"mean")},tick:function(e,n){var a=n.canvas,i=n.operation,o=n.output,u=n.session;t.p(a),u.runOp(i,e,o),t.n(a,o)},params:{DOWNSAMPLE:{coeficient:{name:"Coeficient",type:"constant",min:1,max:20,step:.25,default:1.75},type:{name:"Type",type:"constant",values:[{name:"Maximum",value:"max"},{name:"Mean",value:"mean"}]}}}}}});