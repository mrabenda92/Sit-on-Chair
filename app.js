//menu 
$(".toProd").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".promotion-offer").offset().top
    }, 1000);
});

$(".toPrices").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".price-offer").offset().top
    }, 1000);
});

$(".toContact").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".contact").offset().top
    }, 1000);
});

//slider

let sliderImages = document.querySelectorAll(".product-picture"),
    leftArrow = document.querySelector(".left-arrow"),
    rightArrow = document.querySelector(".right-arrow"),
    current = 0;

function reset() {
    for (let i=0; i < sliderImages.length; i++) {
        sliderImages[i].style.display = "none";
    }
}

function startSlide() {
    reset();
    sliderImages[0].style.display = "block";
}

function slideLeft() {
    reset();
    sliderImages[current - 1].style.display = "block";
    current--;
}

function slideRight() {
    reset();
    sliderImages[current + 1].style.display = "block";
    current++;
}

leftArrow.addEventListener("click", function() {
    if (current === 0) {
        current = sliderImages.length;
    }
    slideLeft();
});

rightArrow.addEventListener("click", function() {
    if (current === sliderImages.length - 1) {
        current = -1;
    }
    slideRight();
})


startSlide();

//contact
let agreement = document.querySelector(".agreement")
let trackAgreement = "no";

agreement.addEventListener("click", function(){
    if (trackAgreement === "no") {
        agreement.src = "images/form_ok.jpg";
        trackAgreement = "yes"
    } else {
        agreement.src = "images/form_zero.jpg";
        trackAgreement = "no"
}})

//buttons

const buttons = document.querySelectorAll("button")

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        alert("Będzie dodane już wkrótce!")
    })
}