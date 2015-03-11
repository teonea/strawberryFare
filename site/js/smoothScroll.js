jQuery(document).ready(function($) {

    $('a[href=#home01]','a[href=#about02]','a[href=#menu03]','a[href=#contact04]').on('click', function(e) {
        e.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top-0}, 1000);
    });


});