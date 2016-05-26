$(document).ready(function(){

    $('section[data-type="parallax_section"]').each(function(){
        var $bgobj = $(this); // Variable para asignacion de objeto
        $(window).scroll(function() {
            $window = $(window);
            var yPos = -($window.scrollTop() / $bgobj.data('speed'));
            // cordinadas del background
            var coords = '50% '+ yPos + 'px';
            // moviendo el background
            $bgobj.css({ backgroundPosition: coords });
        })
    })

    $(window).bind('scroll', function () {
        if ($(window).scrollTop() > $('#bg').height()) {
            $('#nav-menu').addClass('fixed');
            $('.container').addClass('act');
        } else {
            $('#nav-menu').removeClass('fixed');
            $('.container').removeClass('act');
        }
    });

    var aux=0;
    $('#main-btn').click(function () {
        if(aux==0){
            $('#nav-menu').css({
                'left':'0vw'
            })

            $('main').removeClass('desact').addClass('activo');

            $('#main-icon').removeClass('fa-bars').addClass('fa-arrow-left');
            aux=1;
            $('body').append("<div class='bloq-capa'></div>")
            $('html').css({
                'overflow':'hidden'
            })
        }else{
            $('#nav-menu').css({
                'left':'-100vw'
            })

            $('main').removeClass('activo').addClass('desact');

            $('#main-icon').removeClass('fa-arrow-left').addClass('fa-bars');
            aux=0;
            $('.bloq-capa').remove();
            $('html').css({
                'overflow':'initial'
            })
        }

    })

    goup = function () {
        if($(window).scrollTop() > 100){
            $('.go-up').addClass('show');
        }else{
            $('.go-up').removeClass('show');
        }
    }
    goup()
    $(window).on('scroll',function () {
        goup()
    })

    $('#go-up-btn').click(function () {
        $('html,body').animate({
            scrollTop : 0
        }, 700)
    })

    $(".slides").slidesjs({
        play : {
            restartDelay: 2500,
            effect: "slide",
            auto: true
        }
    })
});