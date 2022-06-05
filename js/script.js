let btnContainer = document.querySelector("nav");
let btns = btnContainer.getElementsByClassName("a");


for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    let current = document.getElementsByClassName("active");
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }
    this.className += " active";
  });
}


//let myNav = document.querySelector("header");
//
//window.onscroll = function () {
//    if (document.body.scrollTop >= 1 || document.documentElement.scrollTop >= 1) {
//        myNav.style.backgroundColor = '#00BFFF';
//        myNav.style.transition = '0.5s all';
//       
//        
//
//    } else {
//        myNav.style.backgroundColor = 'transparent';  
//        myNav.style.transition = '1s all'; 
//      
//     
//    }
//};


//let header = document.querySelector("header")
//
//var prevScrollpos = window.pageYOffset;
//window.onscroll = function() {
//  var currentScrollPos = window.pageYOffset;
//  if (prevScrollpos > currentScrollPos) {
//    header.style.top = "0";
//  } else {
//    header.style.top = "-120px";
//  }
//  prevScrollpos = currentScrollPos;
//}