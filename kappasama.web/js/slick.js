// slickの実装
$(document).ready(function(){
    $('.slick').slick({
        dots:true,
        infinite:true,
        speed: 300,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        arrows: true,
    });
    $('.slider').slick({
        appendArrows: $(element),
    });
});
// start時にフルスクリーン
$(function() {
	setTimeout(function(){
		$('.start p').fadeIn(1000);
	},300); //0.5秒後にロゴをフェードイン!
	setTimeout(function(){
		$('.start').fadeOut(500);
	},2000); //2.5秒後にロゴ含め真っ白背景をフェードアウト！
});
// scrollの実装
$(function($){
    var fadeIn =$("[class*='.fade-in']");
    $(window).scroll(function(){
        $(fadeIn).each(function(){
            var offset = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > offset-windowHeight+150){
                $(this).addClass("scroll-in");
            }
        });
    });
});