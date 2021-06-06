
$(document).ready(function(){
  $(".black").css("background" , "rgba(255, 255, 255, 0.0)");
  $(".black").css("background" , "rgba(0, 0, 0, 0.3)");
  $(".black").css ("transition","0.5s","ease");
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 100) {
        $(".black").css ("transition","0.5s","ease");
	    $(".black").css("background" , "rgba(0, 0, 0, 0.7)");
	  }else{
      $(".black").css("background" , "rgba(0, 0, 0, 0.3)");
      $(".black").css ("transition","0.5s","ease");
    }
  })
})