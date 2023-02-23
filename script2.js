function reveal() {
    var home = document.querySelector(".hero").getBoundingClientRect().top;
    var revealswork = document.getElementById("workpage").getBoundingClientRect().top;
    var revealsAboutMe = document.getElementById("pageaboutme").getBoundingClientRect().top;

    var windowHeight = window.innerHeight;

    var buttonhome = document.getElementById("Home");
    var buttonwork = document.getElementById("mywork");
    var buttonabout = document.getElementById("AboutMe");

    if (home * -1 < windowHeight) {
        buttonhome.style.backgroundColor = "#0d0a18";
    }
    else{
        buttonhome.style.backgroundColor = "";
    }

    if (revealswork * -1 < windowHeight +200  && revealswork * -1 > windowHeight-750 - revealswork * -1) {
        buttonwork.style.backgroundColor = "#0d0a18";
    }
    else{
        buttonwork.style.backgroundColor = "";
    }

    if (revealsAboutMe * -1 < windowHeight && revealsAboutMe * -1 > windowHeight-1000 - revealsAboutMe * -1) {
        buttonabout.style.backgroundColor = "#0d0a18";

    }
    else{
        buttonabout.style.backgroundColor = "";
    } 
}
function scrollOnHome(){
    var reveals = document.getElementById("hero");
    var elementTop = reveals.getBoundingClientRect().top;
    window.scrollTo(0, elementTop+50);
}

function scrollOnMyWork(){
    var reveals = document.getElementById("workpage");
    var elementTop = reveals.getBoundingClientRect().top;
    window.scrollTo(0, elementTop+50);
}

function scrollOnAboutME(){
    var reveals = document.getElementById("pageaboutme");
    var elementTop = reveals.getBoundingClientRect().top;
    window.scrollTo(0, elementTop);
}


window.addEventListener("scroll", reveal);

reveal();