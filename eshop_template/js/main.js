$(function(){
    var cislo = 0;
    var pole = ['header2.jpg','header.jpg'];
     setInterval(function(){

   $("#discount").css("background" , "url('img/"+pole[cislo]+"') no-repeat scroll 0 68% transparent");
   if(pole.length == cislo+1){ cislo = 0;} else { cislo ++;}
},
      10000);
});
/**
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


  

//$(".item-menu").fadeOut();
 // $("#cart").click(function(){
 //   $(".item-menu").fadeIn(150);

 // });


  }); 
**/

   