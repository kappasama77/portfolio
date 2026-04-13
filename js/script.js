// swiperの実装
const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: {
    delay: 2000,
    },
});

// start時にフルスクリーン
window.addEventListener("load",function(){
    const loading = document.getElementById("loading");
    console.log(loading);

    // フェードアウト
    setTimeout(() => {
        loading.classList.add("fade-out");

        // アニメーション終わったら消す
        setTimeout(() => {
            loading.style.display = "none";
        },1500);//終わる時間
    }, 3000);//表示時間
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
}, 2000);

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
}, 3000); 

// ハンバーガーメニュー
window.onload = function () {
    var nav = document.getElementById('nav-wrapper');
    var hamburger = document.getElementById('hamburger');
    var blackBg = document.getElementById('js-black-bg');

    hamburger.addEventListener('click', function () {
        nav.classList.toggle('open');
    });
    blackBg.addEventListener('click', function () {
        nav.classList.remove('open');
    });
};