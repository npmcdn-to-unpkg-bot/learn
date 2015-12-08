/**
 * @fileoverview 移动端常用JS
 * @version 1.0
 */


;(function () {
    'use strict';

    /** @description Mutil构造函数
     * @constructor
     */
    function Mutil(){

    }
    /**
     * @description 页面尺寸变化注册事件存放数组
     * @field
     */
    Mutil.reSizeEventArray = [];

    /**
     * @description 网站缩放比例
     * @field
     */
    Mutil.ratio = -1;

    /**
     * @description 屏幕尺寸变化
     * @method
     */
    Mutil.reSize = function(){
        function resize() {
            for (var i = 0, len = Mutil.reSizeEventArray.length; i < len; i++) {
                Mutil.reSizeEventArray[i]();
            }
        }

        window.addEventListener('orientationchange', resize);
        window.addEventListener('resize', resize);
    }

    /**
     * @description 设置页面基础字体大小 - 注意页面不能缺少'width=device-width'的 meta
     * @method
     */
    Mutil.setRootFontSize = function () {

        var maxW = 750; //最大宽度
        var doc = document.documentElement;
        recalc();

        function recalc() {
            var clientWidth = doc.clientWidth >= maxW ? maxW : doc.clientWidth;

            if (!clientWidth) return;
            Mutil.ratio = clientWidth / maxW;
            doc.style.fontSize = 100 * Mutil.ratio + 'px';
            document.getElementsByTagName('body')[0].style.display = 'block';

        };

        Mutil.reSizeEventArray.push(recalc);

    }
    /**
     * @description 设置触摸反馈
     * @method
     */
    Mutil.setTouchFeedback = function () {
        var target = null;
        var pattern = /\s*\bhover\b\s*/g;
        document.addEventListener('touchstart',function(event){
            target = event.target;
            if(target.className.search(pattern) === -1){
                target.className += ' hover';
            }
        },false);
        document.addEventListener('touchend',function(){
            cancelFeedback();
        },false);
        document.addEventListener('touchcancel',function(){
            cancelFeedback();
        },false);
        function cancelFeedback(){
            var classes = target.className;
            if(target !== null && classes.search(pattern) !== -1){
                target.className = classes.replace(pattern,'');
            }
        }
    }
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = Mutil;
    } else {
        window.Mutil = Mutil
    }
}());





