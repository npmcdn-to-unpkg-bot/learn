/**
 * imageZoom.js
 * date: 2016-2-29
 * author: taozhiw@gmail.com
 * version: 0.1
 */
;(function($,window){
	
	$.fn.imageZoom = function(options){
		var config = {
			big: 'src',
			maskId : 'img-enlarge-mask',
			popupId : 'img-enlarge-popup',
			popupImgId : 'img-enlarge-popup-img'
		}
		$.extend(config,options);
		
		var _this = this,
			mask = null,                            //遮罩
			popup = null,                           //弹窗外包裹
			popupImg = null,                        //大图
			MaxW = $(window).width()*0.9,           //窗口最大宽度
			MaxH = $(window).height()*0.9;          //窗口最大高度
		
		_this.on('click',function(){
			showMask();
			showPopup($(this).attr(config.big));
		});
		
		//显示遮罩
		function showMask(){
			if(!mask){
				$('body').append('<div id="'+config.maskId+'"></div>')
				mask = $('#'+config.maskId).fadeIn();
				mask.on('click',function(){
					popup.fadeOut();
					mask.fadeOut();
				});
			}else{
				mask.fadeIn();
			}
		}
		
	   //显示图片容器
	   function showPopup(url){
	   		if(!popup){
				$('body').append('<div id="'+config.popupId+'"><img src="" id="'+config.popupImgId+'"/></div>');
				popup = $('#'+config.popupId);
				popupImg = $('#'+config.popupImgId);
				setStyle();
	   		}
	   		var img = new Image();
			img.onload = function(){
				var imgW = img.width,         //图片实际宽度
		        	imgH =  img.height;       //图片实际高度
				popupImg.attr('src',url); 
				if(imgW <= MaxW && imgH > MaxH){
			    	while(imgH > MaxH){
			    		imgH = imgH*0.99;
			    		imgW = imgW*0.99;
			    	}
			    }else if(imgW > MaxW && imgH <= MaxH ){
			    	while(imgW > MaxW){
			    		imgH = imgH*0.99;
			    		imgW = imgW*0.99;
			    	}
			    }else if(imgW > MaxW && imgH > MaxH){
			    	while(imgW > MaxW || imgH >MaxH){
			    		imgH = imgH*0.99;
			    		imgW = imgW*0.99;
			    	}
			    }
			    setSize(imgW,imgH);
			    popup.fadeIn();
			}
			img.src = url;
	   }
	   
	   //设置大小
	   function setSize(w,h){
			popup.css({
				width　: w+'px',
				height : h+'px',
				marginLeft : -w/2+'px',
				marginTop : -h/2+'px'
			})
			popupImg.css({
				width　: w+'px',
				height : h+'px'
			})
		}
	   
	   //窗口变化
	   $(window).on('resize',function(){
			MaxW = $(window).width()*0.9;
			MaxH = $(window).height()*0.9;
		})
	   
	   //设置样式
	   function setStyle(){
	   		mask.attr('style','position: fixed;top:0;bottom: 0;left: 0;right: 0;background-color:#000;background-color:rgba(0,0,0,.7);z-index: 9998;filter:alpha(opacity=70);');
	   		popup.attr('style','width: 800px;height: 580px;margin-top:-290px;margin-left:-400px;background-color:#3c3b3b;position:fixed;top:50%;left:50%;z-index:9999;-webkit-box-shadow: 0 0 10px #000;-moz-box-shadow: 0 0 10px #000;box-shadow: 0 0 10px #000;');
	   }
	}
})(jQuery,window)


