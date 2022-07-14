$(document).ready(function(){
 		$('.sidenav').sidenav();
 	});

M.AutoInit()


$('document').ready(function($){
  
  var bloque = $('.elemento'),
      enlaces = $('.teal, .menu').find('a');
  
  enlaces.click(function(e){
    
    e.preventDefault();
    
    var hash = $(this).attr('href');
    
    bloque
      .filter(hash)
      .addClass('visible')
      .siblings()
      .removeClass('visible');
      
    enlaces
      .removeClass('activo');
    
    $(this)
      .addClass('activo');    

  });
  
});


$(document).ready(function(){
    $("a").click(function(){
        ($('html,body').scrollTop(0));
    });
});


$(document).ready(function () {
      $('ul li').on('click', function() {
       $(".sidenav").css("display", "none");
        

       $(".sidenav-trigger").click(function () {
        $("#nav-mobile").css("display", "");
         $('.sidenav-overlay').click();
      });
    });
  });


