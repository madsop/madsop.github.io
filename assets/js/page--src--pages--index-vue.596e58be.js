(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{F3F8:function(t,s,a){},HWHi:function(t,s,a){"use strict";a("F3F8")},eerB:function(t,s,a){"use strict";a.r(s);var o=a("ES8P"),e={components:{PostMeta:a("hwtZ").a},props:["post"]},i=(a("HWHi"),a("K1/g")),r=Object(i.a)(e,(function(){var t=this,s=t._self._c;return s("div",{staticClass:"post-card content-box",class:{"post-card--has-poster":t.post.poster}},[s("div",{staticClass:"post-card__header"},[t.post.cover_image?s("g-image",{staticClass:"post-card__image",attrs:{alt:"Cover image",src:t.post.cover_image}}):t._e()],1),s("div",{staticClass:"post-card__content"},[s("h2",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"post-card__title",domProps:{innerHTML:t._s(t.post.title)}}),s("p",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"post-card__description",domProps:{innerHTML:t._s(t.post.description)}}),s("PostMeta",{staticClass:"post-card__meta",attrs:{post:t.post}}),s("g-link",{staticClass:"post-card__link",attrs:{to:t.post.path}},[t._v("Link")])],1)])}),[],!1,null,null,null).exports,n={components:{Author:o.a,PostCard:r},metaInfo:{title:"Home"}},c=null,p=Object(i.a)(n,(function(){var t=this._self._c;return t("Layout",[t("Author",{attrs:{"show-title":!0}}),t("div",{staticClass:"posts"},this._l(this.$page.posts.edges,(function(s){return t("PostCard",{key:s.node.id,attrs:{post:s.node}})})),1)],1)}),[],!1,null,null,null);"function"==typeof c&&c(p);s.default=p.exports}}]);