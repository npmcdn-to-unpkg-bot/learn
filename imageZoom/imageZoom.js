/**
 * imageZoom.js
 * date: 2016-2-29
 * author: taozhiw@gmail.com
 * version: 0.1
 */
;(function () {
    var MAX_RATIO = 0.95;

    var win = window,
        doc = document,
        body = document.body,
        baseWidth = win.innerWidth || doc.document.clientWidth || doc.body.clientWidth,
        baseHeight = win.innerHeight || doc.document.clientHeight || doc.body.clientHeight,
        maxWidth = baseWidth * MAX_RATIO,
        maxHeight = baseHeight * MAX_RATIO;

    /**
     * Mask
     * 遮罩层
     * @constructor
     * @param options
     * {
     *  hideCall: {function}
     * }
     */
    function Mask(options) {
        var config = {
            hideCall: null
        }

        extend(config, options);

        this.hideCall = config.hideCall;

        this.element = null;
    }

    Mask.prototype._create = function () {
        var that = this;

        that.element = doc.createElement('div');

        css(that.element, {
            display: 'none',
            position: 'fixed',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            backgroundColor: '#000',
            backgroundColor: 'rgba(0,0,0,.7)',
            zIndex: 9998,
            filter: 'alpha(opcity=70)'
        });

        that.element.addEventListener('click', function () {
            that.hide();
        }, false);

        body.appendChild(that.element);
    }

    Mask.prototype.show = function () {
        var that = this;

        if (that.element === null) {
            that._create();
        }

        that.element.style.display = 'block';
    }

    Mask.prototype.hide = function () {
        var that = this;

        that.hideCall && that.hideCall();

        if (that.element !== null) {
            that.element.style.display = 'none';
        }
    }

    /**
     * 放大层
     * @param images  图片集合
     * @param options
     * {
     *   bigAttribute: 大图参数
     * }
     * @constructor
     */
    function Zoom(images, options) {
        var that = this,
            config = {
                bigAttribute: 'src'
            };

        extend(config, options);

        that.images = images;

        that.activeImage = null;

        that.wrapElement = null;

        that.imageElement = null;

        that.loadingElement = null;

        that.mask = new Mask({
            hideCall: function () {
                that._hide();
            }
        });

        that.bigAttribute = config.bigAttribute;

        that._initEvent();
    }

    Zoom.prototype._create = function () {
        var that = this;

        that.wrapElement = doc.createElement('div');

        css(that.wrapElement,{
            display: 'none',
            width: '800px',
            height: '580px',
            marginTop: '-290px',
            marginLeft: '-400px',
            position: 'fixed',
            top: '50%',
            left: '50%',
            zIndex: '9999',
            boxShadow: '0 0 10px #000'
        });

        that.imageElement = doc.createElement('img');

        that.loadingElement = doc.createElement('img');

        that.loadingElement.setAttribute('src',
            'data:image/gif;base64,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'
        );

        css(that.loadingElement,{
            width: '32px',
            height: '32px',
            position: 'fixed',
            top: '50%',
            left: '50%',
            marginTop: '-16px',
            marginLeft: '-16px',
            zIndex: '9998'
        });

        that.wrapElement.appendChild(that.imageElement);

        body.appendChild(that.loadingElement);

        body.appendChild(that.wrapElement);
    }

    Zoom.prototype._initEvent = function () {
        var that = this;

        for (var i = 0, len = that.images.length; i < len; i++) {
            that.images[i].addEventListener('click', function () {

                that.activeImage = this;

                that.mask.show();

                that._zoom();
            }, false);
        }

        win.addEventListener('resize', function () {

            maxWidth = window.outerWidth;

            maxHeight = window.outerHeight;
        }, false);
    }

    Zoom.prototype._zoom = function () {
        var that = this,
            img,
            url = that.activeImage.getAttribute(that.bigAttribute);

        if (that.wrapElement === null) {
            that._create();
        }else {
            css(that.loadingElement,{
                display: 'block'
            });
        }

        img = new Image();

        img.onload = function () {
            var imgW = img.width,
                imgH = img.height;

            that.imageElement.setAttribute('src', url);

            if (imgW <= maxWidth && imgH > maxHeight) {
                while (imgH > maxHeight) {
                    imgH = imgH * MAX_RATIO;
                    imgW = imgW * MAX_RATIO;
                }
            } else if (imgW > maxWidth && imgH <= maxHeight) {
                while (imgW > maxWidth) {
                    imgH = imgH * MAX_RATIO;
                    imgW = imgW * MAX_RATIO;
                }
            } else if (imgW > maxWidth && imgH > maxHeight) {
                while (imgW > maxWidth || imgH > maxHeight) {
                    imgH = imgH * MAX_RATIO;
                    imgW = imgW * MAX_RATIO;
                }
            }

            css(that.wrapElement,{
                width: imgW + 'px',
                height: imgH + 'px',
                marginTop: -imgH / 2 + 'px',
                marginLeft: -imgW / 2 + 'px'
            });

            css(that.imageElement,{
                width: imgW + 'px',
                height: imgH + 'px'
            });

            css(that.wrapElement,{
                display: 'block'
            });
        }

        img.src = url;
    }

    Zoom.prototype._hide = function () {
        var that = this;

        if (that.wrapElement !== null) {
            css(that.loadingElement,{
                display: 'none'
            });

            css(that.wrapElement,{
                display: 'none'
            });
        }
    }

    window.imageZoom = function (images, options) {
        return new Zoom(images, options);
    };

    /**
     * tool function
     */
    function extend(object1, object2) {
        for (var key in object2) {
            if (object2.hasOwnProperty(key)) {
                object1[key] = object2[key]
            }
        }
    }

    function css(element, styles) {
        var style = element.style;

        for (var key in styles) {
            if (styles.hasOwnProperty(key)) {
                style[key] = styles[key];
            }
        }
    }
})();




