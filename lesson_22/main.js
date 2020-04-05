    $('#up').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 500);
        return false;
    })

    $('#down').click(function() {
        $('html, body').animate({ scrollTop: $("#elem").offset().top }, 500);
        return false;
    })

    window.onscroll = function vverh() {
        document.getElementById('up').style.display = (window.pageYOffset > '500' ? 'block' : 'none');
    }

    /*$(document).ready(function() {
        $('.spoiler_title').click(function() { // при клике по заголовку спойлера
            var show = $(this).attr('show'); // проверяем атрибут, в котором записано - отображен спойлер или скрыт
            if (show == 1) { // если отображен, то прячем
                $(this).attr('show', 0);
                $('.spoiler_block').slideUp(300);
            } else { // если спрятан, то показываем
                $(this).attr('show', 1);
                $('.spoiler_block').slideDown(300);
            }
        });
    });*/


    $(document).ready(function() {
        $('.spoiler_title').click(function() { // при клике по заголовку спойлера
            var show = $(this).attr('show'); // проверяем атрибут, в котором записано - отображен спойлер или скрыт

            if (show == 1) { // если отображен, то прячем
                $(this).attr('show', 0);
                $('.spoiler_block').slideUp(300);
            } else { // если спрятан, то показываем
                $(this).attr('show', 1);
                $('.spoiler_block').slideDown(300);
            }
        });
    });