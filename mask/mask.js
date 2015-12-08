;
(function () {
    'use strict';

    function Mask() {

    }

    Mask.mask = null;                          //遮罩对象
    Mask.isShow = false;                       //是否已显示
    Mask.isLock = false;                       //是否被锁定
    Mask.tapEventArray = [];                   //触摸回调数组

    Mask.show = function (options) {

        if (Mask.isLock) return;
        var setting = {
            bgColor: 'rgba(255,255,255,0)',
            zIndex: 886
        }
        $.extend(setting, options);
        if (Mask.mask === null) {

            $(document.body).append('<div id="mask"></div>');
            Mask.mask = $('#mask');
            Mask.mask.css({
                position: 'fixed',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                zIndex: setting.zIndex,
                backgroundColor: setting.bgColor
            }).on('click', function () {
                for (var i = 0; i < Mask.tap.length; i++) {
                    Mask.tap[i]();
                }
            });

        } else {

            Mask.mask.css({
                zIndex: setting.zIndex,
                backgroundColor: setting.bgColor
            });

            Mask.mask.show();
        }
        Mask.isShow = true;
    }

    Mask.hide = function () {

        if (!Mask.isShow || Mask.isLock) {
            return;
        }
        Mask.mask.hide();
        Mask.isShow = false;
    }

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = Mask;
    } else {
        window.Mask = Mask;
    }
})();
