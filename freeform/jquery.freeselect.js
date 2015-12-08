jQuery.fn.extend({
    /**
     * @description 下拉选框
     * @function
     *
     */
    freeSelect: function () {
        var len = $(this).length, index = 1;
        var hideSelect = function (oTarget) {
            var ulVisible = $('.select ul:visible');
            ulVisible.each(function () {
                var oSelect = $(this).parents(".select:first").find("select").get(0);
                if (!(oTarget && oSelect.oLabel && oSelect.oLabel.get(0) == oTarget.get(0))) {
                    $(this).hide();
                    $("a.SelectOpen").removeClass("cur");
                }
            });
        }
        $(document).mousedown(function (event) {
            if ($(event.target).parents('.select').length === 0) {
                hideSelect($(event.target));
            }
        });
        return this.each(function () {
            var $select = $(this);
            var hasClass = false;
                index++;
            var $wrapper;
            if (!$select.hasClass('hide')) {
                hasClass = true;
                $wrapper = $select
                    .addClass('hide')
                    .wrap('<div class="select"></div>')
                    .parent();

                $wrapper.prepend('<div class="select-text"><span></span><a href="javascript:;" class="SelectOpen icon"></a></div><ul class="select-pop" style="overflow:hidden;"></ul>');
            } else {
                $wrapper = $select.parent('.select');
            }
            var $ul = $('ul', $wrapper).css('width', $select.width()).hide().empty();

            $('option', this).each(function (i) {
                var oLi = $('<li><a href="javascript:void(0);" index="' + i + '">' + $(this).html() + '</a></li>');
                $ul.append(oLi);

            });
            $ul.find('a').click(function () {
                $('a.selected', $wrapper).removeClass('selected');
                $(this).addClass('selected');
                if ($select[0].selectedIndex != $(this).attr('index')) {//&& $select[0].onchange
                    $select[0].selectedIndex = $(this).attr('index');
                    $select.trigger('change');
                }
                $select[0].selectedIndex = $(this).attr('index');
                $('span:eq(0)', $wrapper).html($(this).html());
                $("a.SelectOpen", $wrapper).removeClass("cur");
                $ul.hide();
                return false;
            });
            $('a:eq(' + this.selectedIndex + ')', $ul).click();
            $('span:first', $wrapper).unbind('click').click(function () {
                $("a.SelectOpen", $wrapper).trigger('click');
            });
            var oLinkOpen;
            oLinkOpen = $('a.SelectOpen', $wrapper).unbind('click')
                .click(function (event) {
                    if ($ul.css('display') == 'none') {
                        hideSelect();
                    }
                    if ($select.attr('disabled')) {
                        return false;
                    }
                    $("a.SelectOpen", $wrapper).toggleClass("cur");
                    $ul.slideToggle('fast');
                    return false;
                });

            var iSelectWidth = $select.outerWidth();
            var oSpan = $('span:first', $wrapper);
            var newWidth = (iSelectWidth > oSpan.innerWidth()) ? iSelectWidth + oLinkOpen.outerWidth() : iSelectWidth + oLinkOpen.outerWidth(); //计算DIV的宽
            $wrapper.css('width', newWidth);
            $ul.css('width', newWidth - 2); // 计算UL的宽
            oSpan.css({
                width: iSelectWidth
            });
            $ul.css({
                display: 'block',
                visibility: 'hidden'
            });
            var iSelectHeight = ($('li', $ul).length) * ($('li:first', $ul).height()); //+1 else bug ff
            (iSelectHeight < $ul.height()) && $ul.css({
                height: iSelectHeight,
                'overflow': 'hidden'
            });
            $ul.css({
                display: 'none',
                visibility: 'visible'
            });
        });
    }
});