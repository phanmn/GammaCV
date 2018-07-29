webpackJsonp([57],{513:function(e,a){e.exports=[{license:"MIT",author:"Mihail Zachepilo(mihailzachepilo@gmail.com)\nCopyright 2018 Peculiar Ventures and Pentatonica.\nAll rights reserved."},{name:"Downsample",description:[{type:"paragraph",children:['Performance is always important, but some algorithms are very expensive to apply\n to large picture sizes. To accommodate for this in Computer Vision we often need\n reduce an original image to a smaller size before we apply a given algorithm,\n GammaCV support a few different ways to reduce the dimension of a image,\n for example we support "meaning pixels" and an approach known as "MaxPooling".']}],examples:[{title:"example",description:"// this line reduces an input image in 3x\n downsample(inputImage, 3, 0);"}],params:[{name:"tSrc",description:"The source image to be downsampled.",type:[{type:"Tensor"}]},{name:"coeficient",description:"Downsampling coeficient.",type:[{type:"number"}]},{name:"type",description:"Downsampling support two possible variants of processing\n pixels to be downsampled 'max', 'mean'.",type:[{type:"number"}]}]}]}});