$(document).ready (function(){
    $(".menu-mobile>svg").click(function(){
        $(".menu-mobile>.menu-body").slideToggle(500);
    });

    let slider = $(".slider");
    let sliderItems = $(".slider-item");
    let slideIndex = 0;

    slider.click(function(){
    	if (slideIndex < sliderItems.length-1){
    		sliderItems.eq(slideIndex).css("display","none");
    		slideIndex++;
    		sliderItems.eq(slideIndex).css("display","flex");
    	} else {
    		sliderItems.eq(slideIndex).css("display","none");
    		slideIndex=0;
    		sliderItems.eq(slideIndex).css("display","flex");
    	}
    });
    setInterval (function(){
    	slider.click();

    },1500);


   
});
