
// Coding for Navigation
// IF I SEE THIS THEN I KNOOWWWWW

$("#menu").click(function () {
	$( this).hide( );
	$(".close-btn").show();
	
 	 $("#overlay").fadeIn("slow"); 
 	
});


$(".close-btn").click(function () {
	$( this).hide( );
	$("#menu").show();
	$("#overlay").fadeOut("fast"); 
});

$(".main-nav a").click(function () {
  
  $("#menu").show();
  $("#overlay").fadeOut("fast"); 
});
