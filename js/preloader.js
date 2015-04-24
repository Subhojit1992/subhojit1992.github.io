jQuery(function($){

    $(window).load(function() {

        // preloader
        setTimeout(function(){
            $('#loader-wrap').animate({opacity:0}, 800);
        }, 300);

        setTimeout(function(){
            $('#loader').css('display', 'none');
            $('#loader-wrap').css('display', 'none');
        }, 1100);

    });

});
