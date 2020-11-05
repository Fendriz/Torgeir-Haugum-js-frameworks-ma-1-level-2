$(document).ready(function(){
    console.log($);
    $(".slideshow").addSlideshow({
        arrowType: CHEVORN_CIRCLE,
        arrowSize: "40px",
        arrowColor: GREEN,
        dots: true,
        dotType: SQUARE,
        dotSize: "12px",
        dotColor:GREEN,
        fadeTime: 800
       
    });

})