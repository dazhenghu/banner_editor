!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t("object"==typeof exports?require("jquery"):jQuery)}(function(t){"use strict";function e(n,o){this.$element=t(n),this.options=t.extend({},e.DEFAULTS,t.isPlainObject(o)&&o),this.init()}var n="qor.bannereditor",o="enable."+n,i="disable."+n,r="click."+n,a=".qor-bannereditor__upload";return e.prototype={constructor:e,init:function(){this.bind(),this.initStatus()},bind:function(){this.$element.on(r,a,this.openBottomSheet.bind(this))},initStatus:function(){t(".qor-bannereditor__content").each(function(e,n){var o=t(n).data("configure");t(n).vee({width:o.width,height:o.height,datas:o.elements})})},openBottomSheet:function(e){var n=this,o=t("body").data("qor.bottomsheets");o.open({url:"/admin/product_images"},function(){var o=t(".qor-bottomsheets"),i={formatOnSelect:n.formatSelectResults.bind(e.target),formatOnSubmit:function(){}};o.qorSelectCore(i).addClass("qor-bottomsheets__mediabox").find(".qor-button--new").data("ingore-submit",!0)})},formatSelectResults:function(e,n){var o=t("body").data("qor.bottomsheets");t(this).parents(".qor-bannereditor__wrap").find(".veeContentWrap").css("background-image","url("+t(n.Image).attr("src")+")"),o.hide()}},e.plugin=function(o){return this.each(function(){var i,r=t(this),a=r.data(n);if(!a){if(/destroy/.test(o))return;r.data(n,a=new e(this,o))}"string"==typeof o&&t.isFunction(i=a[o])&&i.apply(a)})},t(function(){var n='[data-toggle="qor.bannereditor"]';t(document).on(i,function(o){e.plugin.call(t(n,o.target),"destroy")}).on(o,function(o){e.plugin.call(t(n,o.target))}).triggerHandler(o)}),e});