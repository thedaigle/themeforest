jQuery(document).ready(function( $ ){
    // menu in responsive, with select
    if( $('body').hasClass('responsive') ) {  
        $('#nav').parent().after('<div class="menu-select"></div>');
        $('#nav ul:first-child').clone().appendTo('.menu-select');  
        $('.menu-select > ul').attr('id', 'nav-select').after('<div class="arrow-icon"></div>');
                  
        $( '#nav-select' ).hide().mobileMenu({
            subMenuDash : '-'
        });
        
        //$( '#nav > ul, #nav .menu > ul' ).hide();
    }
    
    //shortcode banner
    $( '.sc-banner a[href=""]' ).click( function( e ) {
        e.preventDefault();
        return false;
    } );
});