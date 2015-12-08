$.fn.extend({
	/**
	 * @description 对于不支持'placeholder'属性的浏览器的扩展
	 * @function
	 * @param {String} color
	 */
	freePlaceholder : function(color){
		 var color=color || "#ededed";
	     if( 'placeholder' in document.createElement('input') ){
	        return false;
	     }   
	      return this.each(function(i,obj){
	        var freePid = (this.name || this.id)+"_freepid_"+i,
	            me = $(this),
	            className = me.attr("class"),
	            placeholderText = me.attr("placeholder"),
	            substitute = $("#"+freePid);
	        me.before("<input type='text' id="+freePid+" class='"+className+"' value='"+placeholderText+"'>");
	        substitute.hide().css("color",color);
	        if($.trim(this.value) == ""){
	            me.hide();
	            substitute.show();
	        }   
	        substitute.on('focus',function(){
	        	$(this).hide();
	            me.show();
	            me.focus();
	        });
	        me.on('blur',function(){
	        	if($.trim(this.value) == ""){
		            me.hide();
		            substitute.show();
	           }  
	        });
	      }); 
	}
});
