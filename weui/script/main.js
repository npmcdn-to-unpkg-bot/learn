$(function(){

    // 注册
    $('#hub_register').on('tap',function(){
        var $form = $('#hub_register_form'),
            $requireds = $form.find('input[required]');

        for(var i = 0,len = $requireds.length; i < len; i++){
            var $input = $requireds.eq(i),
                inputName;
            if($.trim($input.val()) === ''){
                inputName = $input.attr('name');
                alert('必填项不能为空！')
                return false;
            }
        }
    });
});