$(document).ready(function(){
    "use strict";

    /* ------------------------------------- */
    /* 2. Action Buttons ................... */
    /* ------------------------------------- */

     $('a#open-more-info').on( "click", function() {
 
        $("#open-more-info").toggleClass("hide-btn");
        $( ".empty" ).append( "<i class='fa fa-long-arrow-right'></i>" );
        $("#sidemenu").toggleClass("hide-right");
        $("#close-more-info").toggleClass("hide-close");
        $( "#box" ).removeClass( "container" ).addClass( "container-clicked" );
   
    });

    $('button#close-more-info').on( "click", function() {
          $("#open-more-info").toggleClass("hide-btn");
          $( ".fa-long-arrow-right" ).remove();
        $("#sidemenu").addClass("hide-right");
        $("#close-more-info").addClass("hide-close");
        $( "#box" ).removeClass( "container-clicked" ).addClass( "container" );
    });



});