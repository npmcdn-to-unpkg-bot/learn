;(function(window,$){
/*
 * slink 配置约定:
 * {"1":"one.html&页面1"}
 * 第一个参数：页面预留占位符；
 * 第二个参数：页面英文名与页面中文名拼接字符串，以&符号拼接（英文名在前，中文名在后）；
 */	
var data = {
	slink : [
		{ 1 : "one.html&页面1"},
		{ 2 : "two.html&页面2"},
		{ 3 : "three.html&页面3s"},
		{ 4 : "four.html&页面4s"}
	]
}

/*
 * slink 函数
 */
	//Slink构造函数
	function Slink(sdata){
		this._config = sdata.slink;  //页面对照数组
		var	$links = $('a'),  //页面链接集合
		    keyV = '',        //页面预留钩子       
		    value = null;     //页面预留钩子对应值
		for(var i = 0,len = $links.length; i <len; i++){
			keyV = $.trim($links.eq(i).attr('href'));
			if(keyV === '') break;
			for(var m = 0,n = this._config.length; m < n; m++){
				value = this._config[m][keyV];
				if(typeof value === 'string'){
					$links.eq(i).attr('href', $.trim(value).split('&')[0]);
				}
			}
		}
	}
	
	//Print 页面对照打印方法
	Slink.prototype.print = function(ele){
        var	$table = $(
                '<table style="width: 60%; margin: 0px auto; background-color: #F0F0F0;border-collapse: collapse;text-indent: 5px;font-size:12px;font-family:\'microsoft yahei\';">' +
                '</table>'),
            value = null,
            cur = null;
        $table.append(
            '<tr style="height: 30px;line-height: 30px;">' +
                '<th style="width:50%;border:#BFBFBF solid 1px">英</th>' +
                '<th style="width:50%;border:#BFBFBF solid 1px">中</th>' +
            '</tr>'
        );
		for(var i=0,len = this._config.length; i < len; i++){
            for(cur in this._config[i]){
                value = $.trim(this._config[i][cur]).split('&');
                $table.append(
                    '<tr style="height: 30px;line-height: 30px;">' +
                    '<td style="border:#BFBFBF solid 1px"><a href='+value[0]+'>'+value[0]+'</a></td>' +
                    '<td style="border:#BFBFBF solid 1px">'+value[1]+'</td>' +
                    '</tr>'
                );
            }
		}
		typeof ele === 'undefined' ? $('body').append($table): $(ele).append($table);
		return this;
	}

    //页面载入完成执行初始化
    $(function(){
        window.slink = new Slink(data);
    });
})(window,$);


