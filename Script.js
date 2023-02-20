let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}



function reveal() {

    var reveals = document.querySelectorAll(".reveal");
    var revealsAboutMe = document.querySelectorAll(".reveal-aboutMe");
    var textMywork = document.getElementById("mywork");
    var textAboutMe = document.getElementById("AboutMe");

    for (let i = 0; i < revealsAboutMe.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = revealsAboutMe[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible && elementTop > -200) {
            revealsAboutMe[i].classList.add("REactive");
            textAboutMe.style.color = "#30CFD0";
            textAboutMe.style.fontSize = "1.5vw"


        }
        else {
            revealsAboutMe[i].classList.remove("REactive");
            textAboutMe.style.color = "#ffffff";
            textAboutMe.style.fontSize = "1vw"
        }
        //  else {
        //     revealsAboutMe[i].classList.remove("REactive");
        //     textAboutMe.style.color = "#ffffff";
        //     textAboutMe.style.fontSize = "1vw"
        // }

    }

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementTopHead = document.getElementById("revalHead").getBoundingClientRect().top;;
        var elementVisible = 200;
        console.log(elementTopHead);
        if (elementTopHead < windowHeight - elementVisible && elementTopHead > -500) {
            textMywork.style.color = "#30CFD0";
            textMywork.style.fontSize = "1.5vw"
        }
        else{
            textMywork.style.color = "#ffffff";
            textMywork.style.fontSize = "1vw"
        }
        if (elementTop < windowHeight - elementVisible && elementTop > -500) {
            reveals[i].classList.add("REactive");



        } else {
            reveals[i].classList.remove("REactive");
           
        }
    }
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 4000); // Change image every 2 seconds
}

function showmenu() {
    console.log("sdsdsdsdsds");
    let myworktext = document.getElementById("mywork");
    let AboutMetext = document.getElementById("AboutMe");
    myworktext.innerHTML = "MY WORK";
    AboutMetext.innerHTML = "ABOUT ME";
}

function cancleShowMenu() {
    let myworktext = document.getElementById("mywork");
    let AboutMetext = document.getElementById("AboutMe");
    myworktext.innerHTML = "."
    AboutMetext.innerHTML = ".";
}


window.addEventListener("scroll", reveal);

function scrollOnReveal() {
    var reveals = document.querySelector(".reveal");
    var elementTop = reveals.getBoundingClientRect().top;
    var elementVisible = 160;
    window.scrollTo(0, elementTop - elementVisible);


}