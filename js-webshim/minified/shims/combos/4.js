webshims.register("dom-extend",function(a,b,c,d,e){"use strict";var f=!("hrefNormalized"in a.support)||a.support.hrefNormalized,g=!("getSetAttribute"in a.support)||a.support.getSetAttribute,h=Object.prototype.hasOwnProperty;if(b.assumeARIA=g||Modernizr.canvas||Modernizr.video||Modernizr.boxsizing,("text"==a('<input type="email" />').attr("type")||""===a("<form />").attr("novalidate")||"required"in a("<input />")[0].attributes)&&b.error("IE browser modes are busted in IE10+. Please test your HTML/CSS/JS with a real IE version or at least IETester or similiar tools"),"debug"in b&&b.error('Use webshims.setOptions("debug", true||false||"noCombo"); to debug flag'),!b.cfg.no$Switch){var i=function(){if(!c.jQuery||c.$&&c.jQuery!=c.$||c.jQuery.webshims||(b.error("jQuery was included more than once. Make sure to include it only once or try the $.noConflict(extreme) feature! Webshims and other Plugins might not work properly. Or set webshims.cfg.no$Switch to 'true'."),c.$&&(c.$=b.$),c.jQuery=b.$),b.M!=Modernizr){b.error("Modernizr was included more than once. Make sure to include it only once! Webshims and other scripts might not work properly.");for(var a in Modernizr)a in b.M||(b.M[a]=Modernizr[a]);Modernizr=b.M}};i(),setTimeout(i,90),b.ready("DOM",i),a(i),b.ready("WINDOWLOAD",i)}var j=(b.modules,/\s*,\s*/),k={},l={},m={},n={},o={},p={},q=a.fn.val,r=function(b,c,d,e,f){return f?q.call(a(b)):q.call(a(b),d)};a.widget||!function(){var b=a.cleanData;a.cleanData=function(c){if(!a.widget)for(var d,e=0;null!=(d=c[e]);e++)try{a(d).triggerHandler("remove")}catch(f){}b(c)}}(),a.fn.val=function(b){var c=this[0];if(arguments.length&&null==b&&(b=""),!arguments.length)return c&&1===c.nodeType?a.prop(c,"value",b,"val",!0):q.call(this);if(a.isArray(b))return q.apply(this,arguments);var d=a.isFunction(b);return this.each(function(f){if(c=this,1===c.nodeType)if(d){var g=b.call(c,f,a.prop(c,"value",e,"val",!0));null==g&&(g=""),a.prop(c,"value",g,"val")}else a.prop(c,"value",b,"val")})},a.fn.onTrigger=function(a,b){return this.on(a,b).each(b)},a.fn.onWSOff=function(b,c,e,f){return f||(f=d),a(f)[e?"onTrigger":"on"](b,c),this.on("remove",function(d){d.originalEvent||a(f).off(b,c)}),this};var s="_webshimsLib"+Math.round(1e3*Math.random()),t=function(b,c,d){if(b=b.jquery?b[0]:b,!b)return d||{};var f=a.data(b,s);return d!==e&&(f||(f=a.data(b,s,{})),c&&(f[c]=d)),c?f&&f[c]:f};[{name:"getNativeElement",prop:"nativeElement"},{name:"getShadowElement",prop:"shadowElement"},{name:"getShadowFocusElement",prop:"shadowFocusElement"}].forEach(function(b){a.fn[b.name]=function(){var c=[];return this.each(function(){var d=t(this,"shadowData"),e=d&&d[b.prop]||this;-1==a.inArray(e,c)&&c.push(e)}),this.pushStack(c)}}),b.cfg.extendNative||b.cfg.noTriggerOverride||!function(b){a.event.trigger=function(c,d,e,f){if(!m[c]||f||!e||1!==e.nodeType)return b.apply(this,arguments);var g,i,j,k=e[c],l=a.prop(e,c),n=l&&k!=l;return n&&(j="__ws"+c,i=c in e&&h.call(e,c),e[c]=l,e[j]=k),g=b.apply(this,arguments),n&&(i?e[c]=k:delete e[c],delete e[j]),g}}(a.event.trigger),["removeAttr","prop","attr"].forEach(function(c){k[c]=a[c],a[c]=function(b,d,f,g,h){var i="val"==g,j=i?r:k[c];if(!b||!l[d]||1!==b.nodeType||!i&&g&&"attr"==c&&a.attrFn[d])return j(b,d,f,g,h);var m,o,q,s=(b.nodeName||"").toLowerCase(),t=n[s],u="attr"!=c||f!==!1&&null!==f?c:"removeAttr";if(t||(t=n["*"]),t&&(t=t[d]),t&&(m=t[u]),m){if("value"==d&&(o=m.isVal,m.isVal=i),"removeAttr"===u)return m.value.call(b);if(f===e)return m.get?m.get.call(b):m.value;m.set&&("attr"==c&&f===!0&&(f=d),q=m.set.call(b,f)),"value"==d&&(m.isVal=o)}else q=j(b,d,f,g,h);if((f!==e||"removeAttr"===u)&&p[s]&&p[s][d]){var v;v="removeAttr"==u?!1:"prop"==u?!!f:!0,p[s][d].forEach(function(a){(!a.only||(a.only="prop"&&"prop"==c)||"attr"==a.only&&"prop"!=c)&&a.call(b,f,v,i?"val":u,c)})}return q},o[c]=function(a,d,f){n[a]||(n[a]={}),n[a][d]||(n[a][d]={});var g=n[a][d][c],h=function(a,b,e){var g;return b&&b[a]?b[a]:e&&e[a]?e[a]:"prop"==c&&"value"==d?function(a){var b=this;return f.isVal?r(b,d,a,!1,0===arguments.length):k[c](b,d,a)}:"prop"==c&&"value"==a&&f.value.apply?(g="__ws"+d,m[d]=!0,function(){var a=this[g]||k[c](this,d);return a&&a.apply&&(a=a.apply(this,arguments)),a}):function(a){return k[c](this,d,a)}};n[a][d][c]=f,f.value===e&&(f.set||(f.set=f.writeable?h("set",f,g):b.cfg.useStrict&&"prop"==d?function(){throw d+" is readonly on "+a}:function(){b.info(d+" is readonly on "+a)}),f.get||(f.get=h("get",f,g))),["value","get","set"].forEach(function(a){f[a]&&(f["_sup"+a]=h(a,g))})}});var u=function(){var a=b.getPrototypeOf(d.createElement("foobar")),c=Modernizr.advancedObjectProperties&&Modernizr.objectAccessor;return function(e,f,g){var i,j;if(!(c&&(i=d.createElement(e))&&(j=b.getPrototypeOf(i))&&a!==j)||i[f]&&h.call(i,f))g._supvalue=function(){var a=t(this,"propValue");return a&&a[f]&&a[f].apply?a[f].apply(this,arguments):a&&a[f]},v.extendValue(e,f,g.value);else{var k=i[f];g._supvalue=function(){return k&&k.apply?k.apply(this,arguments):k},j[f]=g.value}g.value._supvalue=g._supvalue}}(),v=function(){var c={};b.addReady(function(d,e){var f={},g=function(b){f[b]||(f[b]=a(d.getElementsByTagName(b)),e[0]&&a.nodeName(e[0],b)&&(f[b]=f[b].add(e)))};a.each(c,function(a,c){return g(a),c&&c.forEach?(c.forEach(function(b){f[a].each(b)}),void 0):(b.warn("Error: with "+a+"-property. methods: "+c),void 0)}),f=null});var e,f=a([]),g=function(b,f){c[b]?c[b].push(f):c[b]=[f],a.isDOMReady&&(e||a(d.getElementsByTagName(b))).each(f)};return{createTmpCache:function(b){return a.isDOMReady&&(e=e||a(d.getElementsByTagName(b))),e||f},flushTmpCache:function(){e=null},content:function(b,c){g(b,function(){var b=a.attr(this,c);null!=b&&a.attr(this,c,b)})},createElement:function(a,b){g(a,b)},extendValue:function(b,c,d){g(b,function(){a(this).each(function(){var a=t(this,"propValue",{});a[c]=this[c],this[c]=d})})}}}(),w=function(a,b){a.defaultValue===e&&(a.defaultValue=""),a.removeAttr||(a.removeAttr={value:function(){a[b||"prop"].set.call(this,a.defaultValue),a.removeAttr._supvalue.call(this)}}),a.attr||(a.attr={})};a.extend(b,{getID:function(){var b=(new Date).getTime();return function(c){c=a(c);var d=c.prop("id");return d||(b++,d="ID-"+b,c.eq(0).prop("id",d)),d}}(),implement:function(a,c){var d=t(a,"implemented")||t(a,"implemented",{});return d[c]?(b.warn(c+" already implemented for element #"+a.id),!1):(d[c]=!0,!0)},extendUNDEFProp:function(b,c){a.each(c,function(a,c){a in b||(b[a]=c)})},getOptions:function(){var c=/\-([a-z])/g,d={},e={},f=function(a,b){return b.toLowerCase()},g=function(a,b){return b.toUpperCase()};return function(h,i,j,k){e[i]?i=e[i]:(e[i]=i.replace(c,g),i=e[i]);var l,m=t(h,"cfg"+i),n={};if(m)return m;if(m=a(h).data(),m&&"string"==typeof m[i]){if(k)return t(h,"cfg"+i,m[i]);b.error("data-"+i+" attribute has to be a valid JSON, was: "+m[i])}j?Array.isArray(j)?j.unshift(!0,{}):j=[!0,{},j]:j=[!0,{}],m&&"object"==typeof m[i]&&j.push(m[i]),d[i]||(d[i]=new RegExp("^"+i+"([A-Z])"));for(l in m)d[i].test(l)&&(n[l.replace(d[i],f)]=m[l]);return j.push(n),t(h,"cfg"+i,a.extend.apply(a,j))}}(),createPropDefault:w,data:t,moveToFirstEvent:function(b,c,d){var e,f=(a._data(b,"events")||{})[c];f&&f.length>1&&(e=f.pop(),d||(d="bind"),"bind"==d&&f.delegateCount?f.splice(f.delegateCount,0,e):f.unshift(e)),b=null},addShadowDom:function(){var e,f,g,h=a(c),i={init:!1,runs:0,test:function(){var a=i.getHeight(),b=i.getWidth();a!=i.height||b!=i.width?(i.height=a,i.width=b,i.handler({type:"docresize"}),i.runs++,i.runs<9&&setTimeout(i.test,90)):i.runs=0},handler:function(){var b=function(){a(d).triggerHandler("updateshadowdom")};return function(a){clearTimeout(e),e=setTimeout(function(){if("resize"==a.type){var d=h.width(),e=h.width();if(e==f&&d==g)return;f=e,g=d,i.height=i.getHeight(),i.width=i.getWidth()}c.requestAnimationFrame?requestAnimationFrame(b):setTimeout(b,0)},"resize"!=a.type||c.requestAnimationFrame?9:50)}}(),_create:function(){a.each({Height:"getHeight",Width:"getWidth"},function(a,b){var c=d.body,e=d.documentElement;i[b]=function(){return Math.max(c["scroll"+a],e["scroll"+a],c["offset"+a],e["offset"+a],e["client"+a])}})},start:function(){!this.init&&d.body&&(this.init=!0,this._create(),this.height=i.getHeight(),this.width=i.getWidth(),setInterval(this.test,999),a(this.test),b.ready("WINDOWLOAD",this.test),a(d).on("updatelayout.webshim pageinit popupafteropen panelbeforeopen tabsactivate collapsibleexpand shown.bs.modal shown.bs.collapse slid.bs.carousel",this.handler),a(c).on("resize",this.handler))}};return b.docObserve=function(){b.ready("DOM",function(){i.start(),null==a.support.boxSizing&&a(function(){a.support.boxSizing&&i.handler({type:"boxsizing"})})})},function(c,d,e){if(c&&d){e=e||{},c.jquery&&(c=c[0]),d.jquery&&(d=d[0]);var f=a.data(c,s)||a.data(c,s,{}),g=a.data(d,s)||a.data(d,s,{}),h={};e.shadowFocusElement?e.shadowFocusElement&&(e.shadowFocusElement.jquery&&(e.shadowFocusElement=e.shadowFocusElement[0]),h=a.data(e.shadowFocusElement,s)||a.data(e.shadowFocusElement,s,h)):e.shadowFocusElement=d,a(c).on("remove",function(b){b.originalEvent||setTimeout(function(){a(d).remove()},4)}),f.hasShadow=d,h.nativeElement=g.nativeElement=c,h.shadowData=g.shadowData=f.shadowData={nativeElement:c,shadowElement:d,shadowFocusElement:e.shadowFocusElement},e.shadowChilds&&e.shadowChilds.each(function(){t(this,"shadowData",g.shadowData)}),e.data&&(h.shadowData.data=g.shadowData.data=f.shadowData.data=e.data),e=null}b.docObserve()}}(),propTypes:{standard:function(a){w(a),a.prop||(a.prop={set:function(b){a.attr.set.call(this,""+b)},get:function(){return a.attr.get.call(this)||a.defaultValue}})},"boolean":function(a){w(a),a.prop||(a.prop={set:function(b){b?a.attr.set.call(this,""):a.removeAttr.value.call(this)},get:function(){return null!=a.attr.get.call(this)}})},src:function(){var b=d.createElement("a");return b.style.display="none",function(c,d){w(c),c.prop||(c.prop={set:function(a){c.attr.set.call(this,a)},get:function(){var c,e=this.getAttribute(d);if(null==e)return"";if(b.setAttribute("href",e+""),!f){try{a(b).insertAfter(this),c=b.getAttribute("href",4)}catch(g){c=b.getAttribute("href",4)}a(b).detach()}return c||b.href}})}}(),enumarated:function(a){w(a),a.prop||(a.prop={set:function(b){a.attr.set.call(this,b)},get:function(){var b=(a.attr.get.call(this)||"").toLowerCase();return b&&-1!=a.limitedTo.indexOf(b)||(b=a.defaultValue),b}})}},reflectProperties:function(c,d){"string"==typeof d&&(d=d.split(j)),d.forEach(function(d){b.defineNodeNamesProperty(c,d,{prop:{set:function(b){a.attr(this,d,b)},get:function(){return a.attr(this,d)||""}}})})},defineNodeNameProperty:function(c,d,e){return l[d]=!0,e.reflect&&(e.propType&&!b.propTypes[e.propType]?b.error("could not finde propType "+e.propType):b.propTypes[e.propType||"standard"](e,d)),["prop","attr","removeAttr"].forEach(function(f){var g=e[f];g&&(g="prop"===f?a.extend({writeable:!0},g):a.extend({},g,{writeable:!0}),o[f](c,d,g),"*"!=c&&b.cfg.extendNative&&"prop"==f&&g.value&&a.isFunction(g.value)&&u(c,d,g),e[f]=g)}),e.initAttr&&v.content(c,d),e},defineNodeNameProperties:function(a,c,d,e){for(var f in c)!e&&c[f].initAttr&&v.createTmpCache(a),d&&(c[f][d]||(c[f][d]={},["value","set","get"].forEach(function(a){a in c[f]&&(c[f][d][a]=c[f][a],delete c[f][a])}))),c[f]=b.defineNodeNameProperty(a,f,c[f]);return e||v.flushTmpCache(),c},createElement:function(c,d,e){var f;return a.isFunction(d)&&(d={after:d}),v.createTmpCache(c),d.before&&v.createElement(c,d.before),e&&(f=b.defineNodeNameProperties(c,e,!1,!0)),d.after&&v.createElement(c,d.after),v.flushTmpCache(),f},onNodeNamesPropertyModify:function(b,c,d,e){"string"==typeof b&&(b=b.split(j)),a.isFunction(d)&&(d={set:d}),b.forEach(function(a){p[a]||(p[a]={}),"string"==typeof c&&(c=c.split(j)),d.initAttr&&v.createTmpCache(a),c.forEach(function(b){p[a][b]||(p[a][b]=[],l[b]=!0),d.set&&(e&&(d.set.only=e),p[a][b].push(d.set)),d.initAttr&&v.content(a,b)}),v.flushTmpCache()})},defineNodeNamesBooleanProperty:function(c,d,f){f||(f={}),a.isFunction(f)&&(f.set=f),b.defineNodeNamesProperty(c,d,{attr:{set:function(a){f.useContentAttribute?b.contentAttr(this,d,a):this.setAttribute(d,a),f.set&&f.set.call(this,!0)},get:function(){var a=f.useContentAttribute?b.contentAttr(this,d):this.getAttribute(d);return null==a?e:d}},removeAttr:{value:function(){this.removeAttribute(d),f.set&&f.set.call(this,!1)}},reflect:!0,propType:"boolean",initAttr:f.initAttr||!1})},contentAttr:function(a,b,c){if(a.nodeName){var d;return c===e?(d=a.attributes[b]||{},c=d.specified?d.value:null,null==c?e:c):("boolean"==typeof c?c?a.setAttribute(b,b):a.removeAttribute(b):a.setAttribute(b,c),void 0)}},activeLang:function(){var c=[],d=[],e={},f=function(d,f,h){f._isLoading=!0,e[d]?e[d].push(f):(e[d]=[f],b.loader.loadScript(d,function(){h==c.join()&&a.each(e[d],function(a,b){g(b)}),delete e[d]}))},g=function(b){var d=b.__active,e=function(a,d){return b._isLoading=!1,b[d]||-1!=b.availableLangs.indexOf(d)?(b[d]?(b.__active=b[d],b.__activeName=d):f(b.langSrc+d,b,c.join()),!1):void 0};a.each(c,e),b.__active||(b.__active=b[""],b.__activeName=""),d!=b.__active&&a(b).trigger("change")};return function(a){var b;if("string"==typeof a)c[0]!=a&&(c=[a],b=c[0].split("-")[0],b&&b!=a&&c.push(b),d.forEach(g));else if("object"==typeof a)return a.__active||(d.push(a),g(a)),a.__active;return c[0]}}()}),a.each({defineNodeNamesProperty:"defineNodeNameProperty",defineNodeNamesProperties:"defineNodeNameProperties",createElements:"createElement"},function(a,c){b[a]=function(a,d,e,f){"string"==typeof a&&(a=a.split(j));var g={};return a.forEach(function(a){g[a]=b[c](a,d,e,f)}),g}}),b.isReady("webshimLocalization",!0),function(){if(!("content"in d.createElement("template")||(a(function(){var c=a("main").attr({role:"main"});c.length>1?b.error("only one main element allowed in document"):c.is("article *, section *")&&b.error("main not allowed inside of article/section elements")}),"hidden"in d.createElement("a")))){b.defineNodeNamesBooleanProperty(["*"],"hidden");var c={article:"article",aside:"complementary",section:"region",nav:"navigation",address:"contentinfo"},e=function(a,b){var c=a.getAttribute("role");c||a.setAttribute("role",b)};a.webshims.addReady(function(b,f){if(a.each(c,function(c,d){for(var g=a(c,b).add(f.filter(c)),h=0,i=g.length;i>h;h++)e(g[h],d)}),b===d){var g=d.getElementsByTagName("header")[0],h=d.getElementsByTagName("footer"),i=h.length;if(g&&!a(g).closest("section, article")[0]&&e(g,"banner"),!i)return;var j=h[i-1];a(j).closest("section, article")[0]||e(j,"contentinfo")}})}}()}),webshims.register("form-message",function(a,b,c,d,e,f){"use strict";f.lazyCustomMessages&&(f.customMessages=!0);var g=b.validityMessages,h=f.customMessages?["customValidationMessage"]:[];g.en=a.extend(!0,{typeMismatch:{defaultMessage:"Please enter a valid value.",email:"Please enter an email address.",url:"Please enter a URL."},badInput:{defaultMessage:"Please enter a valid value.",number:"Please enter a number.",date:"Please enter a date.",time:"Please enter a time.",range:"Invalid input.",month:"Please enter a valid value.","datetime-local":"Please enter a datetime."},rangeUnderflow:{defaultMessage:"Value must be greater than or equal to {%min}."},rangeOverflow:{defaultMessage:"Value must be less than or equal to {%max}."},stepMismatch:"Invalid input.",tooLong:"Please enter at most {%maxlength} character(s). You entered {%valueLen}.",tooShort:"Please enter at least {%minlength} character(s). You entered {%valueLen}.",patternMismatch:"Invalid input. {%title}",valueMissing:{defaultMessage:"Please fill out this field.",checkbox:"Please check this box if you want to proceed."}},g.en||g["en-US"]||{}),"object"==typeof g.en.valueMissing&&["select","radio"].forEach(function(a){g.en.valueMissing[a]=g.en.valueMissing[a]||"Please select an option."}),"object"==typeof g.en.rangeUnderflow&&["date","time","datetime-local","month"].forEach(function(a){g.en.rangeUnderflow[a]=g.en.rangeUnderflow[a]||"Value must be at or after {%min}."}),"object"==typeof g.en.rangeOverflow&&["date","time","datetime-local","month"].forEach(function(a){g.en.rangeOverflow[a]=g.en.rangeOverflow[a]||"Value must be at or before {%max}."}),g["en-US"]||(g["en-US"]=a.extend(!0,{},g.en)),g["en-GB"]||(g["en-GB"]=a.extend(!0,{},g.en)),g["en-AU"]||(g["en-AU"]=a.extend(!0,{},g.en)),g[""]=g[""]||g["en-US"],g.de=a.extend(!0,{typeMismatch:{defaultMessage:"{%value} ist in diesem Feld nicht zul\xe4ssig.",email:"{%value} ist keine g\xfcltige E-Mail-Adresse.",url:"{%value} ist kein(e) g\xfcltige(r) Webadresse/Pfad."},badInput:{defaultMessage:"Geben Sie einen zul\xe4ssigen Wert ein.",number:"Geben Sie eine Nummer ein.",date:"Geben Sie ein Datum ein.",time:"Geben Sie eine Uhrzeit ein.",month:"Geben Sie einen Monat mit Jahr ein.",range:"Geben Sie eine Nummer.","datetime-local":"Geben Sie ein Datum mit Uhrzeit ein."},rangeUnderflow:{defaultMessage:"{%value} ist zu niedrig. {%min} ist der unterste Wert, den Sie benutzen k\xf6nnen."},rangeOverflow:{defaultMessage:"{%value} ist zu hoch. {%max} ist der oberste Wert, den Sie benutzen k\xf6nnen."},stepMismatch:"Der Wert {%value} ist in diesem Feld nicht zul\xe4ssig. Hier sind nur bestimmte Werte zul\xe4ssig. {%title}",tooLong:"Der eingegebene Text ist zu lang! Sie haben {%valueLen} Zeichen eingegeben, dabei sind {%maxlength} das Maximum.",tooShort:"Der eingegebene Text ist zu kurz! Sie haben {%valueLen} Zeichen eingegeben, dabei sind {%minlength} das Minimum.",patternMismatch:"{%value} hat f\xfcr dieses Eingabefeld ein falsches Format. {%title}",valueMissing:{defaultMessage:"Bitte geben Sie einen Wert ein.",checkbox:"Bitte aktivieren Sie das K\xe4stchen."}},g.de||{}),"object"==typeof g.de.valueMissing&&["select","radio"].forEach(function(a){g.de.valueMissing[a]=g.de.valueMissing[a]||"Bitte w\xe4hlen Sie eine Option aus."}),"object"==typeof g.de.rangeUnderflow&&["date","time","datetime-local","month"].forEach(function(a){g.de.rangeUnderflow[a]=g.de.rangeUnderflow[a]||"{%value} ist zu fr\xfch. {%min} ist die fr\xfcheste Zeit, die Sie benutzen k\xf6nnen."}),"object"==typeof g.de.rangeOverflow&&["date","time","datetime-local","month"].forEach(function(a){g.de.rangeOverflow[a]=g.de.rangeOverflow[a]||"{%value} ist zu sp\xe4t. {%max} ist die sp\xe4teste Zeit, die Sie benutzen k\xf6nnen."});var i=g[""],j=function(b,c){return b&&"string"!=typeof b&&(b=b[a.prop(c,"type")]||b[(c.nodeName||"").toLowerCase()]||b.defaultMessage),b||""},k=/</g,l=/>/g,m={value:1,min:1,max:1},n=function(){var b,d={number:function(a){var b=1*a;return b.toLocaleString&&!isNaN(b)&&(a=b.toLocaleString()||a),a}};return[{n:"date",f:"toLocaleDateString"},{n:"time",f:"toLocaleTimeString"},{n:"datetime-local",f:"toLocaleString"}].forEach(function(a){d[a.n]=function(b){var c=new Date(b);return c&&c[a.f]&&(b=c[a.f]()||b),b}}),c.Intl&&Intl.DateTimeFormat&&(b=new Intl.DateTimeFormat(navigator.browserLanguage||navigator.language,{year:"numeric",month:"2-digit"}).format(new Date),b&&b.format&&(d.month=function(a){var c=new Date(a);return c&&(a=b.format(c)||a),a})),function(b,c,e){var f,g;return m[e]&&(f=a.prop(c,"type"),g=a(c).getShadowElement().data("wsWidget"+f),g&&g.formatValue?b=g.formatValue(b,!1):d[f]&&(b=d[f](b))),b}}();b.replaceValidationplaceholder=function(c,d,e){var f=a.prop(c,"title");return d&&("patternMismatch"!=e||f||b.error("no title for patternMismatch provided. Always add a title attribute."),f&&(f='<span class="ws-titlevalue">'+f.replace(k,"&lt;").replace(l,"&gt;")+"</span>"),-1!=d.indexOf("{%title}")?d=d.replace("{%title}",f):f&&(d=d+" "+f)),d&&-1!=d.indexOf("{%")&&["value","min","max","maxlength","minlength","label"].forEach(function(b){if(-1!==d.indexOf("{%"+b)){var e=("label"==b?a.trim(a('label[for="'+c.id+'"]',c.form).text()).replace(/\*$|:$/,""):a.prop(c,b))||"";e=""+e,e=n(e,c,b),d=d.replace("{%"+b+"}",e.replace(k,"&lt;").replace(l,"&gt;")),"value"==b&&(d=d.replace("{%valueLen}",e.length))}}),d},b.createValidationMessage=function(c,d){var e=j(i[d],c);return e||"badInput"!=d||(e=j(i.typeMismatch,c)),e||"typeMismatch"!=d||(e=j(i.badInput,c)),e||(e=j(g[""][d],c)||a.prop(c,"validationMessage"),b.info("could not find errormessage for: "+d+" / "+a.prop(c,"type")+". in language: "+b.activeLang())),e=b.replaceValidationplaceholder(c,e,d),e||""},(!Modernizr.formvalidation||b.bugs.bustedValidity)&&h.push("validationMessage"),i=b.activeLang(g),a(g).on("change",function(){i=g.__active}),h.forEach(function(c){b.defineNodeNamesProperty(["fieldset","output","button"],c,{prop:{value:"",writeable:!1}}),["input","select","textarea"].forEach(function(d){var e=b.defineNodeNameProperty(d,c,{prop:{get:function(){var c=this,d="";if(!a.prop(c,"willValidate"))return d;var f=a.prop(c,"validity")||{valid:1};return f.valid?d:(d=b.getContentValidationMessage(c,f))?d:f.customError&&c.nodeName&&(d=Modernizr.formvalidation&&!b.bugs.bustedValidity&&e.prop._supget?e.prop._supget.call(c):b.data(c,"customvalidationMessage"))?d:(a.each(f,function(a,e){return"valid"!=a&&e?(d=b.createValidationMessage(c,a),d?!1:void 0):void 0}),d||"")},writeable:!1}})})})});