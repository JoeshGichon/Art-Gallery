// UX/UI
// reviews section
$(document).ready(function(){

    $('#slider').owlCarousel({
      loop:true,
      margin:15,
      nav:false,
      autoplay : true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:2
          },
          1000:{
              items:3
          }
      }
    });
});


$(document).ready(function(){
    $("#b1").click(function(){
        $("#p1").toggle();
    });
});
$(document).ready(function(){
    $("#b2").click(function(){
        $("#p2").toggle();
    });
});
$(document).ready(function(){
    $("#b3").click(function(){
        $("#p3").toggle();
    });
});
$(document).ready(function(){
    $("#b4").click(function(){
        $("#p4").toggle();
    });
});
$(document).ready(function(){
    $("#b5").click(function(){
        $("#p5").toggle();
    });
});
$(document).ready(function(){
    $("#b6").click(function(){
        $("#p6").toggle();
    });
});