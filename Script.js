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
    var textMywork = document.getElementById("mywork");

    // var Intro = document.querySelector("hero");
    // var textIntro = document.getElementById("Intro");
    // var IntroelementTop = Intro.getBoundingClientRect().top;
    // if (IntroelementTop < windowHeight - 150){
    //     textIntro.style.color = "#30CFD0";
    //     textIntro.style.fontSize = "1.5vw"
    // }


    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("REactive");
            textMywork.style.color = "#30CFD0";
            textMywork.style.fontSize = "1.5vw"

        } else {
            reveals[i].classList.remove("REactive");
            textMywork.style.color = "#ffffff";
            textMywork.style.fontSize = "1vw"
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
    myworktext.innerHTML = "MY WORK"
}

function cancleShowMenu() {
    let myworktext = document.getElementById("mywork");
    myworktext.innerHTML = "."
}


window.addEventListener("scroll", reveal);

function scrollOnReveal() {
    var reveals = document.querySelector(".reveal");
    var elementTop = reveals.getBoundingClientRect().top;
    var elementVisible = 160;
    window.scrollTo(0, elementTop - elementVisible);


}