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

var defaultSettings = headerElements.getBoundingClientRect().top;
var getDefaultSettings = function(){
  defaultSettings = headerElements.getBoundingClientRect().top;
};


var scrollAction = function(){
var currentScrollPos = 0;

  var incrimentConstant = function(){
      var c = (defaultSettings +  (currentScrollPos * 3) ) ;
    return (c);
  };

  var currentScrollPos = window.pageYOffset;

  headerElements.style.top =  incrimentConstant()   + "px";

  if(currentScrollPos > 1){


    var circleSize = (currentScrollPos )/ 2;

    topHeader.style.height = circleSize + "px";
    pageHeader.style.top = -currentScrollPos + "px";
    secondRow.style.top = -currentScrollPos + 450 + "px";


      if(currentScrollPos > 60) {

          var opacity =  1 + (( - currentScrollPos + 60 )/ 100)  ;
          var fontSize = (1 + ( (  -currentScrollPos + 100 ) / 10) / 2) ;


        projectTagline.style.opacity = opacity;
        projectName.style.opacity = opacity;
        topInfo.style.marginTop = ( opacity * 62) + 130 +"px";


        if(circleSize >= 170) {
            topHeader.style.height = 170 + "px";
              topInfo.style.marginTop = 20 + "px"

        }


      }

      if (currentScrollPos < 70 && projectName.classList.contains("tansition-name")) {

          headerElements.style.position= "absolute";
          headerElements.style.marginTop = 0 + "px";
          headerElements.classList.remove("transition-elements");
          projectName.classList.remove("tansition-name");
          projectTaglineSecondary.innerHTML = "";


      }

    }

    else if (currentScrollPos <= 1){
      //reset things
      projectTagline.style.opacity = 1;
      projectName.style.opacity = 1;
      projectName.style.fontSize = 3.9 + "rem";
      projectName.style.lineHeight = 3.9 + "rem";
      headerElements.style.marginTop = 0;
      headerElements.style.top = defaultSettings + "px";
      secondRow.style.height = 0 + "px";
      topHeader.style.height = 0 + "px";





    }



    if(currentScrollPos > 200){
        animateLogos();
    }





}
