    $('#up').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 500);
        return false;
    });

    $('#down').click(function() {
        $('html, body').animate({ scrollTop: $("#elem").offset().top }, 500);
        return false;
    });

    //кнопка
    $(window).scroll(function() {
        if ($(window).scrollTop() > 500) {
            $('#up').show();
        } else {
            $('#up').hide();
        }
    });

    //спойлер
    $(document).ready(function() {
        $('.spoiler_title').click(function() { // при клике по заголовку спойлера
            let $show1 = $(this).attr('show');
            if ($show1 == 1) { // если отображен, то прячем
                $(this).attr('show', 0);
                $('.spoiler_block').slideUp(300);
            } else { // если спрятан, то показываем
                $(this).attr('show', 1);
                $('.spoiler_block').slideDown(300);
            }
        });
    });