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
$("#item-in-cart li > #cart").click(function () {
      $(this).parent().find(".item-menu").slideDown(300);
     });
    $("#item-in-cart li").mouseleave(function () {
      $(this).parent().find(".item-menu").slideUp(300);
       });
  }); 
