



let menuIcon = document.querySelector(".menu_icon");
let body = document.querySelector("body");
let progress = document.querySelector(".progress_container");
let closeIcon = document.querySelector(".close_icon");
let menuButton = document.querySelector(".menu_button");
let hiddenHeaderNav = document.querySelector(".hidden_header_nav");
let playImage1 = document.querySelector("#play_image1");
let mainImage1 = document.querySelector("#main_image1");
let playImage2 = document.querySelector("#play_image2");
let mainImage2 = document.querySelector("#main_image2");
let playImage3 = document.querySelector("#play_image3");
let mainImage3 = document.querySelector("#main_image3");
let playImage4 = document.querySelector("#play_image4");
let mainImage4 = document.querySelector("#main_image4");
let playImage5 = document.querySelector("#play_image5");
let mainImage5 = document.querySelector("#main_image5");
let playImage6 = document.querySelector("#play_image6");
let mainImage6 = document.querySelector("#main_image6");
let playImage7 = document.querySelector("#play_image7");
let mainImage7 = document.querySelector("#main_image7");
let playImage8 = document.querySelector("#play_image8");
let mainImage8 = document.querySelector("#main_image8");
let playImage9 = document.querySelector("#play_image9");
let mainImage9 = document.querySelector("#main_image9");
let playImage10 = document.querySelector("#play_image10");
let mainImage10 = document.querySelector("#main_image10");


// for (let i = 0; i < mainImage.length; i++) {
//     mainImage[i].onmouseout = function(){
//     mainImage.style.transform = "scale(1)";
//     };
// }


menuIcon.addEventListener('click', function(){
    menuIcon.style.display = "none";
    closeIcon.style.display = "block";
    hiddenHeaderNav.style.opacity = "1";
    hiddenHeaderNav.style.left = "0";
    body.style.overflow = "hidden";
    progress.style.display = "none";
})
closeIcon.addEventListener('click', function(){
    menuIcon.style.display = "block";
    closeIcon.style.display = "none";
    hiddenHeaderNav.style.opacity = "0";
    hiddenHeaderNav.style.left = "-100%";
    body.style.overflow = "visible";
    progress.style.display = "block";
})

playImage1.onmouseover = function(){mainImage1.style.transform = "scale(1.15)";}
playImage1.onmouseout = function(){mainImage1.style.transform = "scale(1.10)";}
playImage2.onmouseover = function(){mainImage2.style.transform = "scale(1.15)";}
playImage2.onmouseout = function(){mainImage2.style.transform = "scale(1.10)";}
playImage3.onmouseover = function(){mainImage3.style.transform = "scale(1.15)";}
playImage3.onmouseout = function(){mainImage3.style.transform = "scale(1.10)";}
playImage4.onmouseover = function(){mainImage4.style.transform = "scale(1.15)";}
playImage4.onmouseout = function(){mainImage4.style.transform = "scale(1.10)";}
playImage5.onmouseover = function(){mainImage5.style.transform = "scale(1.15)";}
playImage5.onmouseout = function(){mainImage5.style.transform = "scale(1.10)";}
playImage6.onmouseover = function(){mainImage6.style.transform = "scale(1.15)";}
playImage6.onmouseout = function(){mainImage6.style.transform = "scale(1.10)";}
playImage7.onmouseover = function(){mainImage7.style.transform = "scale(1.15)";}
playImage7.onmouseout = function(){mainImage7.style.transform = "scale(1.10)";}
playImage8.onmouseover = function(){mainImage8.style.transform = "scale(1.15)";}
playImage8.onmouseout = function(){mainImage8.style.transform = "scale(1.10)";}
playImage9.onmouseover = function(){mainImage9.style.transform = "scale(1.15)";}
playImage9.onmouseout = function(){mainImage9.style.transform = "scale(1.10)";}
playImage10.onmouseover = function(){mainImage10.style.transform = "scale(1.15)";}
playImage10.onmouseout = function(){mainImage10.style.transform = "scale(1.10)";}









// const items = ['Nurullo Karimov', 'Developer', 'Student'];
// const delSpeed = 55;
// const typeSpeed = 125;
// const targetElm = '.type';

// // Code

// let index = 0; // index of array
// let charIndex = 0; // index of character in string

// function typing() {
//   if (index === items.length) {
//     index = 0;
//     setTimeout(typing, typeSpeed);
//   } else if (charIndex >= items[index].length + 1) {
//     setTimeout(deleteTxt, delSpeed);
//   } else if (charIndex < items[index].length + 1) {
//     const addChar = items[index].substr(-items[index].length, charIndex);
//     document.querySelector(targetElm).innerHTML = addChar;
//     charIndex += 1;
//     setTimeout(typing, typeSpeed); 
//   }
// };

// function deleteTxt() {
//   if (charIndex >= 0) {
//     const delChar = items[index].substr(-items[index].length, charIndex);
//     document.querySelector(targetElm).innerHTML = delChar;
//     charIndex -= 1;
//     setTimeout(deleteTxt, delSpeed); 
//   } else if (index <= items.length -1) {
//     index += 1;
//     typing();
//   } else {
//     typing();
//   }
// }; 

// typing();

$('.owl-carousel').owlCarousel({
    center: true,
    loop:true,
    margin:20,
    nav: true,
    autoWidth: true,
    autoplay: true,
    // items: 3,
    // responsiveClass:true,
    // responsive:{
    //     500:{
    //         items:1,
    //         nav:true,
    //     },
    // }
})
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}