/********************************************************************************
 *
 * Adobe Fillable Form
 *
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 *  (c) Copyright 2011 Adobe Systems, Inc.
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and may be covered by U.S. and Foreign Patents,
 * patents in process, and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 **********************************************************************************/
if(typeof (ADOBEFORMS)=="undefined"){ADOBEFORMS={formsCentralDomain:"https://adobeformscentral.com",fcHashRE:/^#_@@fc/,rdHashRE:/^#_@@rd/,formURLTemplate:["%formDomain%/?%formId%&embed=%mainDocURL%%transparent%%showHeader%%preview%%paymentsSandbox%%hash%","%formDomain%/forms/?htmlGen.debug=true&%formId%&embed=%mainDocURL%%transparent%%showHeader%%preview%%hash%"],iframeTemplate:'<iframe id="%frameId%" name="%frameId%" src="%formURL%"%width%%height% scrolling="no" allowTransparency="true" style="border:none" frameborder="0"></iframe>',windowScrollMsg:"action=windowScroll;windowScrollTop=%scrollTop%;windowClientHeight=%height%;iframeTop=%iframeTop%"};(function(){ADOBEFORMS.EmbedForm=function(F){if(this.EmbedForm){return new ADOBEFORMS.EmbedForm(F)}var J={docId:undefined,formId:"formId",height:undefined,heightAfterRedirect:-1,paymentssandbox:false,place:undefined,placeHow:undefined,preview:false,showHeader:undefined,transparent:undefined,width:undefined,widthAfterRedirect:-1};if(typeof (F)!="object"){F={}}for(var G in J){this[G]=F.hasOwnProperty(G)?F[G]:J[G]}this.fid=this.convertValidId(this.formId);this.msgListeners=[];this.intervalId=null;this.messageSent=false;this.messageReceived=false;this.hasShowHeader=this.showHeader!==undefined;this.hasTransparent=this.transparent!==undefined;this.formsCentralDomain=F.server?F.server.replace(/\/$/,""):ADOBEFORMS.formsCentralDomain;this.restoreDataHash="";var I=decodeURIComponent(document.location.hash);if(ADOBEFORMS.rdHashRE.test(I)){var E=this.extractParameters(I.replace(ADOBEFORMS.rdHashRE,""));if(E.d){document.location.hash=E.h||"";this.restoreDataHash="#d="+E.d}}this.formUrl=this.getFormUrl(F.hasOwnProperty("docId"));if(window.postMessage){this.messageHandlerClosure=this.messageHandler.bind(this);this.scrollHandlerClosure=this.scrollHandler.bind(this);if(window.addEventListener){window.addEventListener("message",this.messageHandlerClosure,false);window.addEventListener("scroll",this.scrollHandlerClosure,false)}else{window.attachEvent("onmessage",this.messageHandlerClosure);window.attachEvent("onscroll",this.scrollHandlerClosure)}}else{this.intervalId=setInterval(this.timerCallback.bind(this),300)}this.addMsgListener(this.onFrameMessage.bind(this));var D=ADOBEFORMS.iframeTemplate.replace(/%frameId%/g,this.fid).replace("%formURL%",this.formUrl).replace("%width%",this.width?' width="'+this.width+'px"':"").replace("%height%",this.height?' height="'+this.height+'px"':"");function H(K){var L=document.createElement("div");L.innerHTML=K;return L.firstChild}if(this.place){switch(this.placeHow){default:case"after":this.place.parentNode.insertBefore(H(D),this.place.nextSibling);break;case"before":this.place.parentNode.insertBefore(H(D),this.place);break;case"child":this.place.appendChild(H(D));break}}else{document.write(D)}};ADOBEFORMS.EmbedForm.prototype.addMsgListener=function(D){if(this.msgListeners&&this.findMsgListener(D)<0){this.msgListeners.push(D)}};ADOBEFORMS.EmbedForm.prototype.cleanUp=function(){if(this.msgListeners){this.msgListeners=[]}if(window.postMessage&&this.messageHandlerClosure&&this.scrollHandlerClosure){if(window.addEventListener){window.removeEventListener("message",this.messageHandlerClosure,false);window.removeEventListener("scroll",this.scrollHandlerClosure,false)}else{window.detachEvent("onmessage",this.messageHandlerClosure);window.detachEvent("onscroll",this.scrollHandlerClosure)}}else{if(this.intervalId){clearInterval(this.intervalId)}}};ADOBEFORMS.EmbedForm.prototype.display=function(){};ADOBEFORMS.EmbedForm.prototype.convertValidId=function(D){return("f"+this.formId).replace(/\*/g,"_2a").replace(/\-/g,"_2d").replace(/\./g,"_2e")};ADOBEFORMS.EmbedForm.prototype.getFormUrl=function(D){return ADOBEFORMS.formURLTemplate[D?1:0].replace("%formDomain%",this.formsCentralDomain).replace("%formId%",(this.docId&&this.formId)?"doc="+this.docId+"&f="+this.formId:this.docId?"doc="+this.docId:"f="+this.formId).replace("%mainDocURL%",encodeURIComponent(document.location.href)).replace("%preview%",this.preview?"&preview":"").replace("%showHeader%",this.hasShowHeader?("&sh="+(this.showHeader?"1":"0")):"").replace("%transparent%",this.hasTransparent&&this.transparent?"&tr":"").replace("%paymentsSandbox%",this.paymentssandbox?"&paymentssandbox":"").replace("%hash%",this.restoreDataHash)};ADOBEFORMS.EmbedForm.prototype.messageHandler=function(F){if(F.origin!==this.formsCentralDomain){return false}this.messageReceived=true;var E=this.extractParameters(decodeURIComponent(F.data));if(E&&(typeof E.name=="string")&&(E.formId==this.formId)){for(var D=0;D<this.msgListeners.length;D++){this.msgListeners[D](E)}}};ADOBEFORMS.EmbedForm.prototype.notifyEmbedForm=function(E){var D=document.getElementById(this.fid);if(this.messageReceived&&D&&this.formUrl&&window.postMessage){D.contentWindow.postMessage(E,this.formUrl);this.messageSent=true}};ADOBEFORMS.EmbedForm.prototype.scrollHandler=function(E){var D=document.getElementById(this.fid);var F=ADOBEFORMS.windowScrollMsg.replace("%scrollTop%",document.body.scrollTop||document.documentElement.scrollTop).replace("%height%",document.body.clientHeight).replace("%iframeTop%",this.getElementTop(D));this.notifyEmbedForm(F)};ADOBEFORMS.EmbedForm.prototype.timerCallback=function(){var G=document.location.hash;if(G.length>1&&ADOBEFORMS.fcHashRE.test(G)){var D=decodeURIComponent(G.replace(ADOBEFORMS.fcHashRE,""));var F=this.extractParameters(D);if(F&&(F.formId==this.formId)){for(var E=0;E<this.msgListeners.length;E++){this.msgListeners[E](F)}}setTimeout(function(){var I=document.body.scrollTop||document.documentElement.scrollTop;var H=document.location.href;window.top.location=H.substr(0,H.length-(G.length-1));setTimeout(function(){window.scrollBy(0,I)},10)},10)}};ADOBEFORMS.EmbedForm.prototype.extractParameters=function(G){var I=G.split(";");var F={};for(var E=0;E<I.length;E++){param=I[E];paramPair=param.split("=");if(paramPair.length==2){var D=decodeURIComponent(paramPair[0]);var H=decodeURIComponent(paramPair[1]);F[D]=H}}return F};ADOBEFORMS.EmbedForm.prototype.onFrameMessage=function(G){if(G.ping){this.scrollHandler()}if(G.name=="init"||G.name=="heightChanged"){var F=document.getElementById(this.fid);if(G.height){F.style.height=parseInt(G.height,10)+"px"}if(G.width){F.style.width=parseInt(G.width,10)+"px"}if(G.pageChange=="true"){this.scrollIntoView(F);if(/(msie) ([\w.]+)/.test(navigator.userAgent.toLowerCase())){this.messageSent=false;setTimeout(function(){if(!this.messageSent){this.scrollHandler()}}.bind(this),10)}}}else{if(G.name=="beforeRedirect"){this.messageReceived=false;var F=document.getElementById(this.fid);if(F){var D=(this.widthAfterRedirect&&this.widthAfterRedirect>0)?this.widthAfterRedirect:G.redirectWidth;if(D&&D>0){F.style.width=D+"px"}var E=(this.heightAfterRedirect&&this.heightAfterRedirect>0)?this.heightAfterRedirect:G.redirectHeight;if(E&&D>0){F.style.height=E+"px"}}}}};ADOBEFORMS.EmbedForm.prototype.findMsgListener=function(F){var E=-1;for(var D=0;D<this.msgListeners.length;D++){if(this.msgListeners[D]==F){E=D;break}}return E};ADOBEFORMS.EmbedForm.prototype.getElementTop=function(D){return(D&&D.tagName.toLowerCase()!="html")?D.offsetTop+this.getElementTop(D.parentNode):0};ADOBEFORMS.EmbedForm.prototype.scrollIntoView=function(F){var E=0;for(var I=F;I&&I.tagName!="BODY";I=I.offsetParent){E+=I.offsetTop}var G=F.offsetHeight;var D=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;var H=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight||0;if(E<D||(G>H&&(E>D+H||E+G>D+H))){F.scrollIntoView(true)}else{if(E>D+H||E+G>D+H){F.scrollIntoView(false)}}};if(!Function.prototype.bind){Function.prototype.bind=function(E,G){if(typeof (this)!="function"){throw new TypeError("Function.prototype.bind - attempt to bind to a non function")}var D=this;var I=arguments[0];var K=Array.prototype.slice.call(arguments,1);var H=function(){};H.prototype=D.prototype;function F(){return D.apply(this instanceof H&&I?this:I,K.concat(Array.prototype.slice.call(arguments)))}var J=undefined;switch(D.length){default:case 0:J=function(){return F.apply(this,arguments)};break;case 1:J=function(L){return F.apply(this,arguments)};break;case 2:J=function(M,L){return F.apply(this,arguments)};break;case 3:J=function(M,L,N){return F.apply(this,arguments)};break;case 4:J=function(M,L,O,N){return F.apply(this,arguments)};break;case 5:J=function(M,L,P,O,N){return F.apply(this,arguments)};break;case 6:J=function(M,L,Q,P,O,N){return F.apply(this,arguments)};break;case 7:J=function(M,L,R,Q,P,O,N){return F.apply(this,arguments)};break;case 8:J=function(M,L,S,R,Q,P,O,N){return F.apply(this,arguments)};break;case 9:J=function(T,S,R,Q,P,O,N,M,L){return F.apply(this,arguments)};break}J.prototype=new H();return J}}var A=document.getElementsByTagName("script");if(A){var B=A[A.length-1];if(B&&B.src){var C=/formscentral\.(.+)\.acrobat.com|http:\/\/(.*)\.acrobat\.com\/Client\/FormsCentral\/htmlClient|(localhost.*)\/Clients\/Current|(\d+\.\d+\.\d+\.\d+.*)\/Clients\/Current/i.exec(""+B.src);if(C){if(C[1]){ADOBEFORMS.formsCentralDomain=/stage/i.test(C[1])?"https://stage.adobeformscentral.com":"http://"+C[1]+".adobeformscentral.com:8580"}else{if(C[2]){ADOBEFORMS.formsCentralDomain="http://"+(/efu-logan|efu-marcy|efu-misti/i.test(C[2])?"efu":C[2])+".adobeformscentral.com:8580"}else{if(C[3]){ADOBEFORMS.formsCentralDomain="http://"+C[3]}else{if(C[4]){ADOBEFORMS.formsCentralDomain="http://"+C[4]+(C[4].indexOf(":")>0?"":":8580")}}}}}}}})()};

;ADOBEFORMS.EmbedForm({formId:"lBQF0Bu5MOR3GEYXx30ZtQ"});