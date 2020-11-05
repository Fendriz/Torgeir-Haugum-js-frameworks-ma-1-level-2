

const CARET = {
    left: `<i class="fas fa-caret-left"></i>`,
    right: `<i class="fas fa-caret-right"></i>`
}
const CARET_SQUARE = {
    left:`<i class="fas fa-caret-square-left"></i>`,
    right:`<i class="fas fa-caret-square-right"></i>`
}
const CHEVORN = {
    left:`<i class="fas fa-chevron-left"></i>`,
    right:`<i class="fas fa-chevron-right"></i>`
}
const CHEVORN_CIRCLE = {
    left: `<i class="fas fa-chevron-circle-left"></i>`,
    right: `<i class="fas fa-chevron-circle-right"></i>`
}
const CIRCLE = 0;
const SQUARE = 1;

const RED = "#F1C3B3";
const YELLOW ="#EFF1B3";
const GREEN ="#B8F1B3";
const CYAN ="#B3F1F1";
const BLUE ="#B3BBF1";
const PURPLE ="#D4B3F1";
const PINK = "F1B3DB";


(function ($) {
 
    $.fn.addSlideshow = function( options ) {
 
        let slideIndex = 1;
        const slideshow = this;
        let settings = $.extend({
           
            arrowType: CHEVORN,
            arrowSize: "30px",
            arrowColor: "white",
            dots: true,
            dotType: CIRCLE,
            dotSize: "12px",
            dotColor:"white",
            fadeTime: 800
        }, options );
        init();
        function init(){
            addArrows();
            if(settings.dots===true){
                addDots();
            }
        }
        function addArrows(){
            slideshow.append(`</div><a class="prev">${settings.arrowType.left}</a><a class="next">${settings.arrowType.right}</a></div>`);
            $('.prev, .next').css({
                'font-size': settings.arrowSize,
                'top': `calc(50% - 32px - calc(${settings.arrowSize}/2))`,
                'color': settings.arrowColor 
            });
        }
        function showSlides(index){
            let slides = $(".slideshow-slides");
            let dot = $(".slideshow-dots_dot");
            if (index > slides.length) {slideIndex = 1}    
            if (index < 1) {slideIndex = slides.length}

            slides.css('display','none');
            dot.css({
                'background-color': 'rgba(255, 255, 255, 0.0',
                'border':`2px solid ${settings.dotColor}`
            });
            $(slides[slideIndex-1]).css({'display':'block'});  
            $(slides[slideIndex-1]).css({'opacity': 0.5}) ;  
            $(slides[slideIndex-1]).animate({'opacity': 1},settings.fadeTime)
            $(dot[slideIndex-1]).css('background-color', settings.dotColor);
        }

        function addDots(){
            let imagecount = $(".slideshow > div").length
            slideshow.append('<div class="slideshow-dots"></div>')
            let dots= $('.slideshow-dots');
            for (let i = 0; i < imagecount; i++) {
                dots.append('<span class="slideshow-dots_dot"></span>');
            }
            dots.css('top',`calc(-${settings.dotSize}*1.5 - 20px)`);
            $('.slideshow-dots_dot:first-child').css('background-color', settings.dotColor);
            $('.slideshow-dots_dot').css('border',`2px solid ${settings.dotColor}`);
            if (settings.dotType === 0){$('.slideshow-dots_dot').css('border-radius','50%')}
            if (settings.dotType === 1){$('.slideshow-dots_dot').css('border-radius','10%')}
            else {$('.slideshow-dots_dot').css('border-radius','50%')}
            $('.slideshow-dots_dot').css({
                "width": settings.dotSize,
                'height':settings.dotSize
            })
        }
        $('.prev').click(function(){
            slideIndex--;
            showSlides(slideIndex);
        })
        $('.next').click(function(){
            slideIndex++;
            showSlides(slideIndex);
        })
    };
 
}( jQuery ));