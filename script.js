const hamburger = document.querySelector('.hamburger_menu');
const nav = document.querySelector('.sptop_menu');
  hamburger.addEventListener('click', function() {
    hamburger.classList.toggle("open"); //hamburgerにopenクラスを付け外しする
    nav.classList.toggle("open"); 
});

const img_src=["images/pctop_image1.png","images/pctop_image2.png","images/pctop_image3.png"];
let num = -1;

function slide_time () {
    if (num === 2) {
        num = 0;
    } else {
        num++;
    }
    document.getElementById("slide-img").src = img_src[num];
}

setInterval(slide_time,5000);

$('slider').slick({
    autoplay:true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
});