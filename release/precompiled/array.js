function Ba(a,b,c,d){var e=k;if(a===b)return k;else if(D(b)&&C(a))return r(b).test(a);else if(A(b))return b.apply(c,d);else if(L(b)&&la(a)){G(b,function(f){Ba(a[f],b[f],c,[a[f],a])||(e=n)});return e}else return va(a)&&va(b)?ua(a)===ua(b):a===b}function S(a,b,c,d){return K(b)?a:A(b)?b.apply(c,d||[]):A(a[b])?a[b].call(a):a[b]}
function T(a,b,c,d){var e,f;if(c<0)c=a.length+c;f=isNaN(c)?0:c;for(c=d===k?a.length+f:a.length;f<c;){e=f%a.length;if(e in a){if(b.call(a,a[e],e,a)===n)break}else return Ca(a,b,f,d);f++}}function Ca(a,b,c){var d=[],e;for(e in a)e in a&&e>>>0==e&&e!=4294967295&&e>=c&&d.push(parseInt(e));d.sort().each(function(f){return b.call(a,a[f],f,a)});return a}function Ea(a,b,c,d,e){var f,h;T(a,function(i,j,g){if(Ba(i,b,g,[i,j,g])){f=i;h=j;return n}},c,d);return e?h:f}
function Fa(a,b){var c=[],d={},e;T(a,function(f,h){e=b?S(f,b,a,[f,h,a]):f;Ga(d,e)||c.push(f)});return c}function Ha(a,b,c){var d=[],e={};b.each(function(f){Ga(e,f)});a.each(function(f){var h=ua(f),i=!va(f);if(Ia(e,h,f,i)!=c){var j=0;if(i)for(h=e[h];j<h.length;)if(h[j]===f)h.splice(j,1);else j+=1;else delete e[h];d.push(f)}});return d}function Ja(a,b,c){b=b||Infinity;c=c||0;var d=[];T(a,function(e){if(da(e)&&c<b)d=d.concat(Ja(e,b,c+1));else d.push(e)});return d}
function Ka(a){var b=[];F(a,function(c){b=b.concat(c)});return b}function Ia(a,b,c,d){var e=b in a;if(d){a[b]||(a[b]=[]);e=a[b].indexOf(c)!==-1}return e}function Ga(a,b){var c=ua(b),d=!va(b),e=Ia(a,c,b,d);if(d)a[c].push(b);else a[c]=b;return e}
function La(a,b,c,d){var e,f=[],h=c==="max",i=c==="min",j=Array.isArray(a);G(a,function(g){var m=a[g];g=S(m,b,a,j?[m,parseInt(g),a]:[]);if(K(g))throw new TypeError("Cannot compare with undefined");if(g===e)f.push(m);else if(K(e)||h&&g>e||i&&g<e){f=[m];e=g}});j||(f=Ja(f,1));return d?f:f[0]}function Ma(a){if(q[Na])a=a.toLowerCase();return a.replace(q[Oa],"")}function Pa(a,b){var c=a.charAt(b);return(q[Qa]||{})[c]||c}function Ra(a){var b=q[Sa];return a?b.indexOf(a):l}
var Sa="AlphanumericSortOrder",Oa="AlphanumericSortIgnore",Na="AlphanumericSortIgnoreCase",Qa="AlphanumericSortEquivalents";E(q,n,n,{create:function(){var a=[],b;F(arguments,function(c){if(la(c))try{b=q.prototype.slice.call(c,0);if(b.length>0)c=b}catch(d){}a=a.concat(c)});return a}});
E(q,k,n,{find:function(a,b,c){return Ea(this,a,b,c)},findAll:function(a,b,c){var d=[];T(this,function(e,f,h){Ba(e,a,h,[e,f,h])&&d.push(e)},b,c);return d},findIndex:function(a,b,c){a=Ea(this,a,b,c,k);return K(a)?-1:a},count:function(a){if(K(a))return this.length;return this.findAll(a).length},removeAt:function(a,b){var c,d;if(K(a))return this;if(K(b))b=a;c=0;for(d=b-a;c<=d;c++)this.splice(a,1);return this},include:function(a,b){return this.clone().add(a,b)},exclude:function(){return q.prototype.remove.apply(this.clone(),
arguments)},clone:function(){return ma([],this)},unique:function(a){return Fa(this,a)},flatten:function(a){return Ja(this,a)},union:function(){return Fa(this.concat(Ka(arguments)))},intersect:function(){return Ha(this,Ka(arguments),n)},subtract:function(){return Ha(this,Ka(arguments),k)},at:function(){return wa(this,arguments)},first:function(a){if(K(a))return this[0];if(a<0)a=0;return this.slice(0,a)},last:function(a){if(K(a))return this[this.length-1];return this.slice(this.length-a<0?0:this.length-
a)},from:function(a){return this.slice(a)},to:function(a){if(K(a))a=this.length;return this.slice(0,a)},min:function(a,b){return La(this,a,"min",b)},max:function(a,b){return La(this,a,"max",b)},least:function(a,b){return La(this.groupBy.apply(this,[a]),"length","min",b)},most:function(a,b){return La(this.groupBy.apply(this,[a]),"length","max",b)},sum:function(a){a=a?this.map(a):this;return a.length>0?a.reduce(function(b,c){return b+c}):0},average:function(a){a=a?this.map(a):this;return a.length>0?
a.sum()/a.length:0},inGroups:function(a,b){var c=arguments.length>1,d=this,e=[],f=O(this.length/a,void 0,"ceil");oa(0,a-1,function(h){h=h*f;var i=d.slice(h,h+f);c&&i.length<f&&oa(1,f-i.length,function(){i=i.add(b)});e.push(i)});return e},inGroupsOf:function(a,b){var c=[],d=this.length,e=this,f;if(d===0||a===0)return e;if(K(a))a=1;if(K(b))b=l;oa(0,O(d/a,void 0,"ceil")-1,function(h){for(f=e.slice(a*h,a*h+a);f.length<a;)f.push(b);c.push(f)});return c},isEmpty:function(){return this.compact().length==
0},sortBy:function(a,b){var c=this.clone();c.sort(function(d,e){var f,h;f=S(d,a,c,[d]);h=S(e,a,c,[e]);if(C(f)&&C(h)){f=f;h=h;var i,j,g,m,o=0,x=0;f=Ma(f);h=Ma(h);do{g=Pa(f,o);m=Pa(h,o);i=Ra(g);j=Ra(m);if(i===-1||j===-1){i=f.charCodeAt(o)||l;j=h.charCodeAt(o)||l}g=g!==f.charAt(o);m=m!==h.charAt(o);if(g!==m&&x===0)x=g-m;o+=1}while(i!=l&&j!=l&&i===j);f=i===j?x:i<j?-1:1}else f=f<h?-1:f>h?1:0;return f*(b?-1:1)});return c},randomize:function(){for(var a=this.concat(),b=a.length,c,d;b;){c=v.random()*b|0;
d=a[--b];a[b]=a[c];a[c]=d}return a},zip:function(){var a=F(arguments);return this.map(function(b,c){return[b].concat(a.map(function(d){return c in d?d[c]:l}))})},sample:function(a){var b=this.randomize();return arguments.length>0?b.slice(0,a):b[0]},each:function(a,b,c){T(this,a,b,c);return this},add:function(a,b){if(!B(u(b))||isNaN(b))b=this.length;q.prototype.splice.apply(this,[b,0].concat(a));return this},remove:function(){var a,b=this;F(arguments,function(c){for(a=0;a<b.length;)if(Ba(b[a],c,b,
[b[a],a,b]))b.splice(a,1);else a++});return b},compact:function(a){var b=[];T(this,function(c){if(da(c))b.push(c.compact());else if(a&&c)b.push(c);else!a&&c!=l&&c.valueOf()===c.valueOf()&&b.push(c)});return b},groupBy:function(a,b){var c=this,d={},e;T(c,function(f,h){e=S(f,a,c,[f,h,c]);d[e]||(d[e]=[]);d[e].push(f)});b&&G(d,b);return d},none:function(){return!this.any.apply(this,arguments)}});E(q,k,n,{all:q.prototype.every,any:q.prototype.some,insert:q.prototype.add});
function Ta(a){if(a&&a.valueOf)a=a.valueOf();return p.keys(a)}function Ua(a,b){H(p,n,n,a,function(c,d){c[d]=function(e,f,h){var i=Ta(e);h=q.prototype[d].call(i,function(j){return b?S(e[j],f,e,[j,e[j],e]):Ba(e[j],f,e,[j,e[j],e])},h);if(da(h))h=h.reduce(function(j,g){j[g]=e[g];return j},{});return h}});xa(a,na)}
E(p,n,n,{map:function(a,b){return Ta(a).reduce(function(c,d){c[d]=S(a[d],b,a,[d,a[d],a]);return c},{})},reduce:function(a){var b=Ta(a).map(function(c){return a[c]});return b.reduce.apply(b,F(arguments).slice(1))},each:function(a,b){ka(b);G(a,b);return a},size:function(a){return Ta(a).length}});var Va="any,all,none,count,find,findAll,isEmpty".split(","),Wa="sum,average,min,max,least,most".split(","),Xa="map,reduce,size".split(","),Ya=Va.concat(Wa).concat(Xa);
(function(){H(q,k,function(){var a=arguments;return a.length>0&&!A(a[0])},"map,every,all,some,any,none,filter",function(a,b){a[b]=function(c){return this[b](function(d,e){return b==="map"?S(d,c,this,[d,e,this]):Ba(d,c,this,[d,e,this])})}})})();
(function(){q[Sa]="A\u00c1\u00c0\u00c2\u00c3\u0104BC\u0106\u010c\u00c7D\u010e\u00d0E\u00c9\u00c8\u011a\u00ca\u00cb\u0118FG\u011eH\u0131I\u00cd\u00cc\u0130\u00ce\u00cfJKL\u0141MN\u0143\u0147\u00d1O\u00d3\u00d2\u00d4PQR\u0158S\u015a\u0160\u015eT\u0164U\u00da\u00d9\u016e\u00db\u00dcVWXY\u00ddZ\u0179\u017b\u017d\u00de\u00c6\u0152\u00d8\u00d5\u00c5\u00c4\u00d6".split("").map(function(b){return b+b.toLowerCase()}).join("");var a={};T("A\u00c1\u00c0\u00c2\u00c3\u00c4,C\u00c7,E\u00c9\u00c8\u00ca\u00cb,I\u00cd\u00cc\u0130\u00ce\u00cf,O\u00d3\u00d2\u00d4\u00d5\u00d6,S\u00df,U\u00da\u00d9\u00db\u00dc".split(","),
function(b){var c=b.charAt(0);T(b.slice(1).split(""),function(d){a[d]=c;a[d.toLowerCase()]=c.toLowerCase()})});q[Na]=k;q[Qa]=a})();Ua(Va);Ua(Wa,k);xa(Xa,na);
