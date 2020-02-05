$(document).ready(function(){
    $('#nav').onePageNav();

    $('a[href^="http"]').attr('target','_blank');

    $('.toggle').click(function(){
        $('.overview').toggleClass('open');
    });

    $('.toggleMenu').click(function(){
        $('.open').toggleClass('open');
        $('.arrow-down').toggleClass('arrow-down');
        $('.current ul').toggleClass('open');
        $('.current span').toggleClass('arrow-down');
    });

    $(window).scroll(function(){
        if (!$('.current').is(":visible")){
          $('.open').toggleClass('open');
          $('.arrow-down').toggleClass('arrow-down');
          $('.current').parent('ul').toggleClass('open');
          $('.current').parents('.parent').find('.toggleMenu span').addClass('arrow-down');
        }
    })
});
