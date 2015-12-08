jQuery.fn.extend({
   /**
     * 单选框
     * config {
     *      curName : 反馈样式类名 默认'cur'，
     * 		call : 点击之后的回调函数，可接收参数有两个，第一个为选中的单选框的值，第二个为单选框的Name值,
     * }
     */
    freeRadio : function(userConfig){
        var
            config = {
                curName : 'cur',
                call : null
            }
        $.extend(config,userConfig);
        var
            self = $(this),
            radioList = self.children('input'),
            len = radioList.length,
            radioGrounp  = [],
            tempName = '',
            index = 0;
        for(var i = 0;i<len;i++){
            radioGrounp[i] = [];
        }
        for(var m = 0;m<len;m++){
            var
                cur = radioList.eq(m),
                curName = $.trim(cur.attr('name')),
                isOk = false;
            if(m === 0){
                radioGrounp[0].push(cur);
                cur.attr('data-gr',0);
                tempName = curName;
                index = m;
                continue;
            }
            if(curName === tempName){
                radioGrounp[index].push(cur);
                cur.attr('data-gr',index);
                tempName = curName;
                continue;
            }
            for(var i = 0,l = radioGrounp.length;i<l;i++){
            	if(i === index){continue;}
                var
                    length = radioGrounp[i].length;
                if(length <= 0){
                    radioGrounp[i].push(cur);
                    cur.attr('data-gr',i);
                    index = i;
                    tempName = curName;
                    break;
                }
                for(var j = 0;j<length;j++){
                    tempName = radioGrounp[i][j].attr('name');
                    if(tempName === curName){
                        radioGrounp[i].push(cur);
                        cur.attr('data-gr',i);
                        index = i;
                        isOk = true;
                        tempName = curName;
                        break;
                    }
                }
                if(isOk){
                    isOk = false;
                    break;
                }
            }
        }
        self.on('click',function(){
            var
                cur = $(this),
                curRadio = cur.children('input'),
                index = parseInt(curRadio.attr('data-gr'));
            for(var i = 0,len = radioGrounp[index].length;i<len;i++){
                radioGrounp[index][i].attr('checked',false).parent().removeClass(config.curName)
            }
            cur.addClass(config.curName);
            curRadio.attr('checked',true);
            if(typeof config.call === 'function'){
            	config.call(curRadio.attr('value'),curRadio.attr('name'));
            }
        });
    }
});