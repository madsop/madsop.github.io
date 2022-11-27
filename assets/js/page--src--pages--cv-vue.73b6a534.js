(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{ERk1:function(t,e,r){"use strict";r("n2Gq")},G0B5:function(t,e,r){"use strict";r.d(e,"a",(function(){return n.a}));var n=r("Kw5r");
/**
  * vue-class-component v7.2.6
  * (c) 2015-present Evan You
  * @license MIT
  */
function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t){return function(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function s(){return"undefined"!=typeof Reflect&&Reflect.defineMetadata&&Reflect.getOwnMetadataKeys}function u(t,e){c(t,e),Object.getOwnPropertyNames(e.prototype).forEach((function(r){c(t.prototype,e.prototype,r)})),Object.getOwnPropertyNames(e).forEach((function(r){c(t,e,r)}))}function c(t,e,r){(r?Reflect.getOwnMetadataKeys(e,r):Reflect.getOwnMetadataKeys(e)).forEach((function(n){var o=r?Reflect.getOwnMetadata(n,e,r):Reflect.getOwnMetadata(n,e);r?Reflect.defineMetadata(n,o,t,r):Reflect.defineMetadata(n,o,t)}))}var f={__proto__:[]}instanceof Array;function p(t,e){var r=e.prototype._init;e.prototype._init=function(){var e=this,r=Object.getOwnPropertyNames(t);if(t.$options.props)for(var n in t.$options.props)t.hasOwnProperty(n)||r.push(n);r.forEach((function(r){Object.defineProperty(e,r,{get:function(){return t[r]},set:function(e){t[r]=e},configurable:!0})}))};var n=new e;e.prototype._init=r;var o={};return Object.keys(n).forEach((function(t){void 0!==n[t]&&(o[t]=n[t])})),o}var l=["data","beforeCreate","created","beforeMount","mounted","beforeDestroy","destroyed","beforeUpdate","updated","activated","deactivated","render","errorCaptured","serverPrefetch"];function m(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e.name=e.name||t._componentTag||t.name;var r=t.prototype;Object.getOwnPropertyNames(r).forEach((function(t){if("constructor"!==t)if(l.indexOf(t)>-1)e[t]=r[t];else{var n=Object.getOwnPropertyDescriptor(r,t);void 0!==n.value?"function"==typeof n.value?(e.methods||(e.methods={}))[t]=n.value:(e.mixins||(e.mixins=[])).push({data:function(){return a({},t,n.value)}}):(n.get||n.set)&&((e.computed||(e.computed={}))[t]={get:n.get,set:n.set})}})),(e.mixins||(e.mixins=[])).push({data:function(){return p(this,t)}});var o=t.__decorators__;o&&(o.forEach((function(t){return t(e)})),delete t.__decorators__);var i=Object.getPrototypeOf(t.prototype),c=i instanceof n.a?i.constructor:n.a,f=c.extend(e);return v(f,t,c),s()&&u(f,t),f}var d={prototype:!0,arguments:!0,callee:!0,caller:!0};function v(t,e,r){Object.getOwnPropertyNames(e).forEach((function(n){if(!d[n]){var a=Object.getOwnPropertyDescriptor(t,n);if(!a||a.configurable){var i,s,u=Object.getOwnPropertyDescriptor(e,n);if(!f){if("cid"===n)return;var c=Object.getOwnPropertyDescriptor(r,n);if(i=u.value,s=o(i),null!=i&&("object"===s||"function"===s)&&c&&c.value===u.value)return}0,Object.defineProperty(t,n,u)}}}))}function h(t){return"function"==typeof t?m(t):function(e){return m(e,t)}}h.registerHooks=function(t){l.push.apply(l,i(t))};"undefined"!=typeof Reflect&&Reflect.getMetadata},hi1C:function(t,e,r){"use strict";r.r(e);var n=r("G0B5"),o=(r("P9IC"),n.a.extend({data:()=>({metaInfo:{title:"CV"}})})),a=(r("ERk1"),r("KHd+")),i=Object(a.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("Layout",[r("div",{staticClass:"content-box",attrs:{id:"wrapper"}},[r("h1",[t._v("CV")]),r("p",[t._v("I'm a tech lead and developer. "),r("a",{attrs:{href:"/about/"}},[t._v("Read more about me.")])]),t._v("\n        Mads Opheim\n        "),r("a",{attrs:{href:"mailto:mads.opheim@gmail.com"}},[t._v("mads.opheim@gmail.com")]),r("a",{attrs:{href:"http://madsopheim.com"}},[t._v("madsopheim.com")]),r("h2",[t._v("Tech I'm frequently using")]),r("p",[t._v("Java (8&11), Maven, Jakarta EE 8, Eclipse MicroProfile, Git, Mercurial, Jenkins, SonarQube, Google Cloud Platform,\n                Quarkus, Wildfly, REST, Mockito, JUnit, Docker, Microsoft SQL Server, Vue, HTML, TypeScript, GitHub, yarn, npm and a lot more")]),r("h2",[t._v("Methodologies")]),r("p",[t._v("Tech is important to solve the problem right, but you also need to solve the right problem. I've in-depth knowledge of Domain-driven design,\n            and stick to test-driven development and "),r("a",{attrs:{href:"http://modernagile.org/"}},[t._v("Modern agile")]),t._v(".\n            I know Kanban, behaviour-driven development and Scrum and other methodologies as well.\n        ")]),r("h2",[t._v("Formal knowledge")]),r("ul",[r("li",[r("a",{attrs:{href:"https://www.ntnu.edu/studies/mtdt"}},[t._v("Master of Technology in computer science")]),t._v(" from "),r("a",{attrs:{href:"https://www.ntnu.no/"}},[t._v("NTNU")]),t._v("\n                , specialization in AI (2014). "),r("a",{attrs:{href:"https://ntnuopen.ntnu.no/ntnu-xmlui/handle/11250/253748"}},[t._v("Master's thesis")])]),r("li",[r("a",{attrs:{href:"https://www.microsoft.com/en-us/learning/exam-70-483.aspx"}},[t._v("70-483")]),t._v(" Programming in C# (2014)")]),r("li",[t._v("Certified Scrum master (2015)")]),r("li",[r("a",{attrs:{href:"https://education.oracle.com/java-se-8-programmer-i/pexam_1Z0-808"}},[t._v("1Z0-808")]),t._v(" Oracle Certified Associate, Java SE 8 Programmer I (2016)")])]),r("h2",[t._v("Presentations")]),r("p",[t._v("I've been doing a lot of presentations on various topics at meetups, conferences and other events both domestically and internationally. "),r("a",{attrs:{href:"/talks"}},[t._v("See the full list here.")])]),r("h2",[t._v("Jobs")]),r("ul",[r("li",[t._v("2014-present: "),r("a",{attrs:{href:"https://computas.com/en/"}},[t._v("Computas")]),t._v(", currently as principal engineer. \n            "),r("a",{attrs:{href:"https://computas.com/jobb/vare-ansatte/mads"}},[t._v("Read more about my experiences at Computas")])]),r("li",[t._v("2013-2014: Leader for "),r("a",{attrs:{href:"https://umeu.no/"}},[t._v("Ungdom mot EU")]),t._v(" (Youth against Norwegian EU membership)")]),r("li",[t._v("2011-2012: Knowledge engineer at "),r("a",{attrs:{href:"https://computas.com/en/"}},[t._v("Computas")])]),r("li",[t._v("2007-2014: Studied at NTNU")])]),r("h2",[t._v("Side projects")]),r("ul",[r("li",[t._v("This webpage. Built using Vue.js, based on "),r("a",{attrs:{href:"https://gridsome.org/"}},[t._v("Gridsome")])]),r("li",[t._v("Viatrumf scraper. Scraping bonus point earnings from online stores at "),r("a",{attrs:{href:"https://viatrumf.no/"}},[t._v("Viatrumf")]),t._v(".\n\n            Running version at "),r("a",{attrs:{href:"http://viatrumf.madsopheim.com/"}},[t._v("http://viatrumf.madsopheim.com/")]),r("br"),t._v("\n\n            Scraping with Python and Scrapy, running with Google Cloud Functions. "),r("a",{attrs:{href:"https://github.com/madsop/viatrumf-scraper"}},[t._v("GitHub")]),r("br"),t._v("\n            Backend-for-frontend running on Quarkus on Java 11 at Google Cloud Run. "),r("a",{attrs:{href:"https://github.com/madsop/viatrumf-scraper-bff"}},[t._v("GitHub")]),t._v("\n\n            Frontend built with Vue.js, utilizing Axios and Chart.js, running on Netlify. "),r("a",{attrs:{href:"https://github.com/madsop/viatrumf-scraper-frontend"}},[t._v("GitHub")])]),r("li",[t._v("MicroProfile IoT. Controlling Philips Hue light bulbs through a set of microservices.\n                Mainly intended as a showcase for Eclipse MicroProfile, running on several different appservers, including Quarkus, Thorntail,\n                KumuluzEE and OpenLiberty. Co-project with "),r("a",{attrs:{href:"http://mehmandarov.com/"}},[t._v("Rustam Mehmandarov")]),t._v(".\n                "),r("a",{attrs:{href:"https://github.com/mehmandarov/microprofile-iot"}},[t._v("GitHub")])]),r("li",[t._v("And others, which are available on GitHub")])]),r("Profiles")],1)])}),[],!1,null,"75585a23",null);e.default=i.exports},n2Gq:function(t,e,r){}}]);