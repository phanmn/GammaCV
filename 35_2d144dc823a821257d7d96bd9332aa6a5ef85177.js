webpackJsonp([35],{127:function(e,a,t){e.exports={default:t(705),__esModule:!0}},164:function(e,a){e.exports={name:"gammacv",version:"0.3.10",description:"GammaCV is a WebGL accelerated Computer Vision library for browser",main:"dist/index.js","jsnext:main":"dist/index.es.js",module:"dist/index.es.js",types:"dist/index.d.ts",scripts:{prebuild:"npm run clean",build:"rollup -c rollup.config.js && cp lib/index.d.ts dist/index.d.ts",clean:"rimraf dist dist-es6",test:"NODE_ENV=test SINGLE_RUN=true babel-node ./node_modules/.bin/karma start","test-server":"NODE_ENV=test babel-node ./node_modules/.bin/karma start","test-crossbrowser":"NODE_ENV=test babel-node ./node_modules/.bin/karma start ./scripts/karma_all.conf.js",lint:"./node_modules/.bin/eslint --ext .js lib/ test/",prelint:"cd app && npm run lint",development:"cd app && npm run development",production:"cd app && npm run production",docs:"cd app && npm run docs","deploy:gh-pages":"cd app && npm run deploy:gh-pages"},repository:{type:"git",url:"https://github.com/PeculiarVentures/GammaCV"},author:{name:"Peculiar Ventures",url:"https://peculiarventures.com"},license:"MIT",contributors:[{name:"Mihail Zachepilo",email:"mihailzachepilo@gmail.com"},{name:"Arkadiy Pilguk",email:"apilguk@gmail.com"}],bugs:{url:"https://github.com/PeculiarVentures/GammaCV/issues"},homepage:"https://gammacv.com",devDependencies:{"babel-cli":"^6.26.0","babel-eslint":"^8.2.3","babel-loader":"^7.1.4","babel-plugin-transform-runtime":"^6.23.0","babel-preset-env":"^1.7.0","babel-preset-react":"^6.24.1","babel-preset-stage-0":"^6.24.1",chai:"^4.1.2",eslint:"^4.19.1","eslint-config-airbnb":"^16.1.0","eslint-plugin-import":"^2.12.0","eslint-plugin-jsx-a11y":"^6.0.3","eslint-plugin-react":"7.20.3",karma:"2.0.2","karma-chrome-launcher":"^2.2.0","karma-detect-browsers":"^2.3.2","karma-edge-launcher":"^0.4.2","karma-firefox-launcher":"^1.1.0","karma-ie-launcher":"^1.0.0","karma-mocha":"^1.3.0","karma-opera-launcher":"^1.0.0","karma-phantomjs-launcher":"^1.0.4","karma-safari-launcher":"^1.0.0","karma-safaritechpreview-launcher":"0.0.6","karma-webpack":"^3.0.0",mocha:"^5.2.0",puppeteer:"^1.5.0","raw-loader":"^0.5.1",regl:"^1.3.5",rimraf:"^2.6.2",rollup:"^0.59.1","rollup-plugin-babel":"^3.0.7","rollup-plugin-glsl":"git+https://github.com/WorldThirteen/rollup-plugin-glsl.git#dist","rollup-plugin-json":"^3.0.0","rollup-plugin-node-resolve":"^3.3.0","rollup-plugin-uglify":"^3.0.0","url-loader":"^1.0.1",webpack:"^3.8.1"},files:["LICENSE.md","README.md","dist/"]}},165:function(e,a,t){"use strict";a.a=d;var r=t(16),o=t.n(r),i=t(67),n=t(17),l=t.n(n),p=t(164),s=t.n(p),m=t(292),c=t.n(m);function d(e,a){var t=a.intl;return"mobile"===a.device.type?o.a.createElement("div",{className:c.a.footer_wrapper},o.a.createElement("div",{className:c.a.api},o.a.createElement(i.j,{type:"b3",color:"dark_grey"},t.getText("Footer.Api"),s.a.version)),o.a.createElement("div",{className:c.a.love},o.a.createElement(i.j,{type:"b3",color:"grey"},o.a.createElement("span",{dangerouslySetInnerHTML:{__html:t.getText("Footer.Love")}}))),o.a.createElement("a",{className:c.a.get,href:"mailto:info@peculiarventures.com"},o.a.createElement(i.j,{type:"b3",color:"grey"},t.getText("Footer.Get")))):o.a.createElement("div",{className:c.a.footer_wrapper},o.a.createElement("div",{className:c.a.love},o.a.createElement(i.j,{type:"b3",color:"grey"},o.a.createElement("span",{dangerouslySetInnerHTML:{__html:t.getText("Footer.Love")}}))),o.a.createElement("div",{className:c.a.api},o.a.createElement(i.j,{type:"b3",color:"dark_grey"},t.getText("Footer.Api"),s.a.version)),o.a.createElement("a",{className:c.a.get,href:"mailto:info@peculiarventures.com"},o.a.createElement(i.j,{type:"b3",color:"grey"},t.getText("Footer.Get"))))}d.contextTypes={intl:l.a.object,device:l.a.object}},292:function(e,a,t){var r=t(293);"string"==typeof r&&(r=[[e.i,r,""]]),t(64)(r,{hmr:!0,transform:void 0}),r.locals&&(e.exports=r.locals)},293:function(e,a,t){(a=e.exports=t(63)(!1)).push([e.i,".footer_wrapper_2Wmp3{width:100%;padding:28px;border-top:1px solid #f4f5f9}.api_3BxJ3,.get_-NLK8,.love_1tOhP{display:inline-block;vertical-align:middle}.get_-NLK8{transition:opacity .3s;cursor:pointer}.get_-NLK8:hover{opacity:.6}.api_3BxJ3{margin-right:15px}.love_1tOhP{width:calc(100% - 213px)}@media (max-width:768px),(max-width:812px) and (max-height:375px){.footer_wrapper_2Wmp3{padding:19px 20px 20px;position:relative}.api_3BxJ3,.get_-NLK8,.love_1tOhP{display:block;width:100%}.love_1tOhP{margin-bottom:5px}.api_3BxJ3{margin-bottom:15px}}",""]),a.locals={footer_wrapper:"footer_wrapper_2Wmp3",love:"love_1tOhP",api:"api_3BxJ3",get:"get_-NLK8"}},458:function(e,a){e.exports=[{key:"morphology",name:"MORPHOLOGY",examples:[{type:"video",name:"Erosion",path:"erode"},{type:"video",name:"Dilation",path:"dilate"},{type:"video",name:"Extended Morphology",path:"morphology_ex"}]},{key:"processing",name:"PROCESSING",examples:[{type:"video",name:"Gaussian Blur",path:"gaussian_blur"},{type:"video",name:"Convolution",path:"conv2d"},{type:"video",name:"Downsample",path:"downsample"},{type:"video",name:"Upsample",path:"upsample"},{type:"video",name:"Color Segmentation",path:"color_segmentation"},{type:"video",name:"Normalization",path:"norm"},{type:"video",name:"Histogram Equalization",path:"histogram_equalization"},{type:"video",name:"HSV Color Converter",path:"hsv_color"},{type:"video",name:"Threshold",path:"threshold"},{type:"video",name:"Adaptive Threshold",path:"adaptive_threshold"},{type:"video",name:"Summed Area Table",path:"sat"}]},{key:"feature_extraction",name:"Feature extraction",examples:[{type:"video",name:"Hog",path:"hog"},{type:"video",name:"Canny Edges",path:"canny_edges"},{type:"video",name:"Skin Test",path:"skin_test"},{type:"video",name:"PCLinest",path:"pc_lines"},{type:"video",name:"Extract Mean and Std",path:"extract_mean_std"},{type:"video",name:"Extract Histogram",path:"histogram"}]},{key:"image_derivatives",name:"Image Derivatives",examples:[{type:"video",name:"Sobel Operator",path:"sobel_operator"}]},{key:"math",name:"Math",examples:[{type:"video",name:"Tensor Scalar",path:"math_tensor_scalar"},{type:"video",name:"Pixelwise Math",path:"math_pixelwise"}]}]},705:function(e,a,t){t(706),e.exports=t(74).Object.keys},706:function(e,a,t){var r=t(159),o=t(158);t(518)("keys",function(){return function(e){return o(r(e))}})}});