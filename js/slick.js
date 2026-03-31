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
// 画像の切り替え
// 目
const  images1 = [
    document.getElementById("eye-normal"),
    document.getElementById("eye-wink")
];

let index1 = 0;

setInterval(() => {
    images1.forEach(img => img.style.display = "none");
    images1[index1].style.display = "block";
    index1 = (index1 + 1) % images1.length;
}, 1000);
// 文字
const  images2 = [
    document.getElementById("Hi"),
    document.getElementById("hart"),
    document.getElementById("welcome")
];

let index2 = 0;

setInterval(() => {
    images2.forEach(img => img.style.display = "none");
    images2[index2].style.display = "block";
    index2 = (index2 + 1) % images2.length;
}, 1000);

//背景
const  images3 = [
    document.getElementById("back-ck-blue"),
    document.getElementById("back-ck-green"),
    document.getElementById("back-ck-pink")
];

let index3 = 0;

setInterval(() => {
    images3.forEach(img => img.style.display = "none");
    images3[index3].style.display = "block";
    index3 = (index3 + 1) % images3.length;
}, 1000); 