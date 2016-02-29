/**
 * imageZoom.js
 * date: 2016-2-29
 * author: taozhiw@gmail.com
 * version: 0.1
 */
;(function(){
    var MAX_RATIO = 0.9;

    var win = window,
        doc = document,
        body = document.body,
        maxWidth = win.outerWidth * MAX_RATIO,
        maxHeight = win.outerHeight * MAX_RATIO;

    /**
     * Mask
     * 遮罩层
     * @constructor
     * @param options
     * {
     *  hideCall: {function}
     * }
     */
    function Mask(options){
        var config = {
            hideCall: null
        }

        extend(config,options);

        this.hideCall = config.hideCall;

        this.element = null;
    }

    Mask.prototype._create = function(){
        var that = this,
            style;

        that.element = doc.createElement('div');

        style = that.element.style;
        style.display = 'none';
        style.position = 'fixed';
        style.top = 0;
        style.right = 0;
        style.bottom = 0;
        style.left = 0;
        style.backgroundColor = '#000';
        style.backgroundColor = 'rgba(0,0,0,.7)';
        style.zIndex = 9998;
        style.filter = 'alpha(opacity=70)';

        that.element.addEventListener('click',function(){
            that.hide();
        },false);

        body.appendChild(that.element);
    }

    Mask.prototype.show = function(){
        var that = this;

        if(that.element === null){
            that._create();
        }

        that.element.style.display = 'block';
    }

    Mask.prototype.hide = function(){
        var that = this;

        that.hideCall && that.hideCall();

        if(that.element !== null){
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
    function Zoom(images,options){
        var that = this,
            config = {
                bigAttribute: 'src'
            };

        extend(config,options);

        that.images = images;

        that.activeImage = null;

        that.wrapElement = null;

        that.imageElement = null;

        that.mask = new Mask({
            hideCall: function(){
                that._hide();
            }
        });

        that.bigAttribute = config.bigAttribute;

        that._initEvent();
    }

    Zoom.prototype._create = function(){
        var that = this,
            wrapStyle;

        that.wrapElement = doc.createElement('div');

        wrapStyle = that.wrapElement.style;

        wrapStyle.width = '800px';
        wrapStyle.height = '580px';
        wrapStyle.marginTop = '-290px';
        wrapStyle.marginLeft = '-400px';
        wrapStyle.position = 'fixed';
        wrapStyle.top = '50%';
        wrapStyle.left = '50%';
        wrapStyle.zIndex = '9999';
        wrapStyle.backgroundColor = '#3c3b3b';
        wrapStyle.boxShadow = '0 0 10px #000';

        that.imageElement = doc.createElement('img');

        that.wrapElement.appendChild(that.imageElement);

        body.appendChild(that.wrapElement);
    }

    Zoom.prototype._initEvent = function(){
        var that = this;

        for(var i = 0,len = that.images.length; i < len; i++){
            that.images[i].addEventListener('click',function(){

                that.activeImage = this;

                that.mask.show();

                that._zoom();
            },false);
        }

        win.addEventListener('resize',function(){

            maxWidth = window.outerWidth;

            maxHeight = window.outerHeight;
        },false);
    }

    Zoom.prototype._zoom = function(){
        var that = this,
            img,
            url = that.activeImage.getAttribute(that.bigAttribute);

        if(that.wrapElement === null){
            that._create();
        }else{
            that.wrapElement.style.display = 'block';
        }

        img = new Image();

        img.onload = function(){
            var imgW = img.width,
                imgH =  img.height;

            that.imageElement.setAttribute('src',url);

            if(imgW <= maxWidth && imgH > maxHeight){
                while(imgH > maxHeight){
                    imgH = imgH * MAX_RATIO;
                    imgW = imgW * MAX_RATIO;
                }
            }else if(imgW > maxWidth && imgH <= maxHeight ){
                while(imgW > maxWidth){
                    imgH = imgH * MAX_RATIO;
                    imgW = imgW * MAX_RATIO;
                }
            }else if(imgW > maxWidth && imgH > maxHeight){
                while(imgW > maxWidth || imgH > maxHeight){
                    imgH = imgH * MAX_RATIO;
                    imgW = imgW * MAX_RATIO;
                }
            }

            that.wrapElement.style.width = imgW + 'px';
            that.wrapElement.style.height = imgH + 'px';
            that.wrapElement.style.marginTop = -imgH/2 + 'px';
            that.wrapElement.style.marginLeft = -imgW/2 + 'px';

            that.imageElement.style.width = imgW + 'px';
            that.imageElement.style.height = imgH + 'px';
        }

        img.src = url;
    }

    Zoom.prototype._hide = function(){
        var that = this;

        if(that.wrapElement !== null){
            that.wrapElement.style.display = 'none';
        }
    }

    window.imageZoom = function(images,options){
        return new Zoom(images,options);
    };

    /**
     * tool function
     */
    function extend(object1,object2){
        for(var key in object2){
            if(object2.hasOwnProperty(key)){
                object1[key] = object2[key]
            }
        }
    }
})();




