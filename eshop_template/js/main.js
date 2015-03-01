$(document).ready(function (){
            $("#s-i").click(function() {
                $(".right-top input").show();
                $(".right-top input").animate({
                    "width": "130px"
                });
                $("#c-t").show(150);

            });

            $("#c-t").click(function() {
                $("#c-t").hide(150);
                $(".right-top input").animate({
                    "width": "0px"
                }, 500, function() {
                    $(".right-top input").hide();


                });
                //$("#c-t").hide(150);
                //$(".right-top input").hide();
            });


  


  $("#item-in-cart li > #cart").click(function(){
    if ($(".item-menu").height() <= 0){
      $(".item-menu").css("height","100px");
    } else {
      $(".item-menu").css("height","0px");
    }
  });


  }); 


   