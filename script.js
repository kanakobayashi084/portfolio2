const header = document.querySelector('.header');
window.addEventListener('scroll', function(){
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    header.classList.add('resize');
  } else {
    header.classList.remove('resize');
  }
});
const hamburger = document.querySelector('.hamburger_menu');
const nav = document.querySelector('.sptop_menu');
const infomation = document.querySelector('.header');
const page = document.querySelector('.body');
const topscreen = document.querySelector('.screen');
  hamburger.addEventListener('click', function() {
    hamburger.classList.toggle("open"); //hamburgerにopenクラスを付け外しする
    nav.classList.toggle("open");
    infomation.classList.toggle("open");
    page.classList.toggle("open");
    topscreen.classList.toggle("open");
});


const btntime = document.querySelector('.btn_time');
const wait = document.querySelector('.wait_time');
const info = document.querySelector('.header');
const waitpage = document.querySelector('.body');
const waitscreen = document.querySelector('.screen2');
  btntime.addEventListener('click', function() {
    btntime.classList.toggle("open");
    wait.classList.toggle("open");
    info.classList.toggle("open");
    waitpage.classList.toggle("open");
    waitscreen.classList.toggle("open");
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

const spimg_src=["images/sptop_image1.png","images/sptop_image2.png","images/sptop_image3.png"];
let spnum = -1;
function spslide_time () {
    if (spnum === 2) {
        spnum = 0;
    } else {
        spnum++;
    }
    document.getElementById("spslide-img").src = spimg_src[spnum];
}
setInterval(slide_time,5000);

$('.slide-news').slick({
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: '<img src="images/icon/arrow-prev.png" class="slide-arrow prev-arrow">',
  nextArrow: '<img src="images/icon/arrow-next.png" class="slide-arrow next-arrow">',
});

$('.insta-photo').slick({
  infinite: false,
  speed: 300,
  slidesToShow: 6,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: '<img src="images/icon/arrow-prev.png" class="slide-arrow2 prev-arrow">',
  nextArrow: '<img src="images/icon/arrow-next.png" class="slide-arrow2 next-arrow">',
});