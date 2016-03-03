var HUB = {};

!(function(){
    $('body').show();

    // 注册页面事件
    HUB.register = function(){

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

        // 文件预览
        $('#hub_register_form_file').change(function(e) {
            var file = e.target.files[0],
                img = new Image(),
                url = img.src = URL.createObjectURL(file),
                $img = $(img);

            img.onload = function() {
                var $preview = $('#hub_register_form_preview');
                URL.revokeObjectURL(url);
                $preview.parent().addClass('active');
                $preview.append($img)
            }
        });

        //function preview2(file) {
        //    var reader = new FileReader()
        //    reader.onload = function(e) {
        //        var $img = $('<img>').attr("src", e.target.result)
        //        $('#preview').empty().append($img)
        //    }
        //    reader.readAsDataURL(file)
        //}
    }
})();
