jQuery.fn.extend({
    /**
     * 复选框
     * config {
     *      curName : 反馈样式类名 默认'cur'，
     * 		call : 点击之后的回调函数，可接收参数有两个，第一个为选中的复选框的值，第二个为复选框是否被选中的Boolean值,
     * }
     */
    freeCheckbox : function(userConfig){
        var
            config = {
                curName : 'cur',
                call : null
            };
        $.extend(config,userConfig);
        $(this).on('click',function(event){
            event.preventDefault();
            var
                cur = $(this),
                curCk = cur.children(':checkbox'),
                isChecked  = false;
            curCk.attr('checked',((isChecked = curCk.attr('checked') === undefined ?true:false)));
            cur.toggleClass(config.curName);
            if(typeof config.call === 'function'){
            	config.call(curCk.attr('value'),isChecked);
            }
        });
    }
});