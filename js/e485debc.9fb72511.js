(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["e485debc"],{"8b24":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",{staticClass:"flex flex-center column"},[a("h1",[e._v("Ensinamentos de Mokiti Okada")]),a("p",[e._v("Um guia sobre onde encontrar os ensinamentos de Meishu-Sama")]),a("q-input",{attrs:{outlined:"",label:"Filtro"},model:{value:e.filtro,callback:function(t){e.filtro=t},expression:"filtro"}}),a("q-list",{staticClass:"q-my-md"},e._l(e.getTeachings(),function(t,n){return a("q-item",{key:n},[a("q-item-section",[a("q-item-label",[e._v(e._s(n+1)+" - "+e._s(t.name))]),a("q-item-label",{attrs:{caption:""}},e._l(e.getMetaOfTeaching(t.id),function(t,n){return a("span",{key:n},[a("span",[a("strong",[e._v(e._s(t.key)+":")])]),e._v(" "+e._s(t.value)+"\n          ")])}),0)],1)],1)}),1)],1)},s=[],r=(a("8e6e"),a("8a81"),a("ac6a"),a("cadf"),a("06db"),a("456d"),a("7f7f"),a("6762"),a("2fdb"),a("c47a")),o=a.n(r),i=a("2f62");function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(a,!0).forEach(function(t){o()(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var l={name:"PageIndex",data:function(){return{filtro:""}},beforeMount:function(){this.$store.dispatch("database/loadBooks"),this.$store.dispatch("database/loadVolumes"),this.$store.dispatch("database/loadEditions"),this.$store.dispatch("database/loadChapters"),this.$store.dispatch("database/loadTeachings")},computed:d({},Object(i["b"])("database",{books:function(e){return e.books}}),{},Object(i["b"])("database",{teachings:function(e){return e.teachings}})),methods:{getTeachings:function(){var e=this;return this.$store.state.database.teachings.filter(function(t){return t.name.toLowerCase().normalize("NFD").includes(e.filtro.toLowerCase().normalize("NFD"))})},getMetaOfTeaching:function(e){var t=this.$store.getters["database/getTeachingById"](e),a=this.$store.getters["database/getChapterById"](t.id_chapter),n=this.$store.getters["database/getEditionById"](a.id_edition),s=this.$store.getters["database/getVolumeById"](n.id_volume),r=this.$store.getters["database/getBookById"](s.id_book);return[{key:"Livro",value:r.name},{key:"Capítulo",value:a.name},{key:"Volume",value:s.name},{key:"Edição",value:n.name}]}}},u=l,b=(a("9afe"),a("2877")),f=Object(b["a"])(u,n,s,!1,null,"e2ebe752",null);t["default"]=f.exports},"9afe":function(e,t,a){"use strict";var n=a("ab7b"),s=a.n(n);s.a},ab7b:function(e,t,a){}}]);