
$(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 100) {
        $(".black").css ("transition","0.5s","ease");
	    $(".black").css("background" , "rgba(0, 0, 0, 0.5)");
	  }
      else{
        $(".black").css("background" , "rgba(255, 255, 255, 0.0)");
      }
  })
})