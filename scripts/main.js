
function reveal() {
    var home = document.getElementById('hero').getBoundingClientRect();
    var revealswork = document.getElementById("workpage").getBoundingClientRect();
    var revealsAboutMe = document.getElementById("pageaboutme").getBoundingClientRect();
    var revealsContact = document.getElementById("pagecontact").getBoundingClientRect();


    var buttonhome = document.getElementById("Home");
    var buttonwork = document.getElementById("mywork");
    var buttonabout = document.getElementById("AboutMe");
    var buttoncontact = document.getElementById("ContactMe");
    const section = document.getElementById('hero');

    // Get the position of the section relative to the viewport

    // Check if the section is currently visible in the viewport
    if (home.bottom >= 100 && home.top <= window.innerHeight) {
        buttonhome.style.backgroundColor = "#0d0a18";
    } else {
        buttonhome.style.backgroundColor = "";
    }
    if (revealswork.bottom >= 150 && revealswork.top <= window.innerHeight && revealswork.top <= 100) {
        buttonwork.style.backgroundColor = "#0d0a18";
    } else {
        buttonwork.style.backgroundColor = "";
    }
    if (revealsAboutMe.bottom >= 100 && revealsAboutMe.top <= window.innerHeight && revealsAboutMe.top <= 100) {
        buttonabout.style.backgroundColor = "#0d0a18";
    } else {
        buttonabout.style.backgroundColor = "";
    }
    if (revealsContact.bottom >= 0 && revealsContact.top <= window.innerHeight && revealsContact.top <= 100) {
        buttoncontact.style.backgroundColor = "#0d0a18";
    } else {
        buttoncontact.style.backgroundColor = "";
    }   
}

document.getElementById("main").addEventListener("scroll", reveal);
reveal();