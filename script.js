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
const wait = document.querySelector('.header_waittime');
const info = document.querySelector('.header');
const waitscreen = document.querySelector('.screen2');
  btntime.addEventListener('click', function() {
    btntime.classList.toggle("open");
    wait.classList.toggle("open");
    info.classList.toggle("open");
    waitscreen.classList.toggle("open");
});

document.getElementById("view_time").innerHTML = getNow();
function getNow() {
  const now = new Date();
  const year = now.getFullYear();
  const mon = now.getMonth() + 1;
  const day = now.getDate();
  const hour = now.getHours();
  const min = now.getMinutes();
  const sec = now.getSeconds();
  const s = year + "年" + mon + "月" + day + "日" + hour + ":" + min + ":" + sec + "現在"; 
  return s;
}

$('.slide-img').slick({
  autoplay: true,
  autoplaySpeed: 5000,
  speed: 5000,
  slidesToShow: 1,
});


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

$(function(){
  $('.menulist').click(function(){
    $(this).toggleClass('active');
    $(this).next('.menulists').slideToggle();
  });
});