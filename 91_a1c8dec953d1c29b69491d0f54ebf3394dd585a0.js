webpackJsonp([91],{562:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(69);n.default={op:function(e,n){return a.v(e,n.DOWNSAMPLE.coeficient,n.DOWNSAMPLE.type||"mean")},tick:function(e,n){var t=n.canvas,c=n.operation,i=n.output,u=n.session;a.p(t),u.runOp(c,e,i),a.n(t,i)},params:{DOWNSAMPLE:{coeficient:{name:"Coefficient",type:"constant",min:1,max:20,step:.25,default:1.75},type:{name:"Type",type:"constant",values:[{name:"Nearest",value:"nearest"},{name:"Bicubic",value:"bicubic"}]}}}}}});