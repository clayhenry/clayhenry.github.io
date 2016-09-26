var pageHeader =  document.querySelector(".page-header");
var projectName = document.querySelector(".project-name");
var projectTagline = document.querySelector(".project-tagline");
var headerElements = document.querySelector(".header-elements");
var projectTaglineSecondary = document.querySelector(".project-tagline-secondary");
var secondRow = document.querySelector(".second-row");
var topHeader = document.querySelector(".top-header");
var topInfo = document.querySelector(".top-info");

var animateLogos = function(){
      var allLogos = document.querySelectorAll(".logos");
      var count = 0;
      var intv = setInterval(function(){
            count ++;
            allLogos[count - 1].classList.add("transition-logos")
            if(count == 7) {
              clearInterval(intv)
            }
        }, 200)
}


var scrollAction = function(){
  var currentScrollPos = window.pageYOffset;
  var currentPositionOfheaderElements = 95 + currentScrollPos;
    headerElements.style.top = (currentScrollPos + 40) * 5 + "px";


  if(currentScrollPos > 1){

    var circleSize = (currentScrollPos )/ 2;

    topHeader.style.height = circleSize + "px";

    pageHeader.style.top = -currentScrollPos + "px";
    secondRow.style.top = -currentScrollPos + 450 + "px";


      if(currentScrollPos > 50) {

          var opacity =  1 + (( - currentScrollPos + 50 )/ 100) *2 ;
          var fontSize = (1 + ( (  -currentScrollPos + 100 ) / 10) / 2) ;


        projectTagline.style.opacity = opacity;
        projectName.style.opacity = opacity;
        topInfo.style.marginTop = ( opacity * 22) + 130 +"px";

        // projectName.style.fontSize = opacity  + "rem";


        // if (fontSize <= 4) {
        //   projectName.style.fontSize =  fontSize  + "rem";
        //   projectName.style.lineHeight = fontSize  + "rem";
        //
        //
        // }
        // if(fontSize <= 1 ){
        //     fontSize = 1
        //     projectName.style.fontSize =  1 + "rem";
        //     projectName.style.lineHeight = 1  + "rem";
        //     projectName.style.opacity = 0;
        //     projectTagline.style.opacity = 0;
        //
        //
        // }

        if(circleSize >= 170) {
            topHeader.style.height = 170 + "px";
              topInfo.style.marginTop = 20 + "px"

        }

        // if( secondarySize >= 350) {
        //         secondRow.style.height  = 350 + "px";
        // }

      }


      if (currentScrollPos > 70 && !projectName.classList.contains("tansition-name")) {
        // headerElements.style.position= "initial";
        // headerElements.style.marginTop = 300 + "px";
        // headerElements.classList.add("transition-elements");
        // projectName.classList.add("tansition-name");
        // projectTaglineSecondary.innerHTML = " <br /> Web Developer"

      }

      if (currentScrollPos < 70 && projectName.classList.contains("tansition-name")) {

          headerElements.style.position= "absolute";
          headerElements.style.marginTop = 0 + "px";
          headerElements.classList.remove("transition-elements");
          projectName.classList.remove("tansition-name");
          projectTaglineSecondary.innerHTML = "";

      }

    } else if (currentScrollPos <= 1){
      //reset things
      projectTagline.style.opacity = 1;
      projectName.style.opacity = 1;
      projectName.style.fontSize = 3.9 + "rem";
      projectName.style.lineHeight = 3.9 + "rem";
      headerElements.style.marginTop = 0;
      headerElements.style.top = 200 + "px";
      secondRow.style.height = 0 + "px";
      topHeader.style.height = 0 + "px";





    }



    if(currentScrollPos > 200){
        animateLogos();
    }





}
