console.log('Добрый день! Старался выполнить все пункты ТЗ. Вроде мне это удалось! Хорошего лня и настроения!)');
const screenWidth = window.innerWidth;
// console.log(screenWidth);
//Burger

const nav = document.querySelector(".nav");
const navBtn = document.querySelector(".nav-line");
const overlay = document.querySelector(".overlay");
const btns = document.querySelectorAll(".nav-link");

navBtn.addEventListener("click", function () {
    nav.classList.toggle("active");
    navBtn.classList.toggle("active");
    overlay.classList.toggle("open");
})

overlay.addEventListener("click", function () {
    overlay.classList.toggle("open");
    nav.classList.toggle("active");
})

btns.forEach(function (btn) {
    btn.addEventListener("click", function () {
        nav.classList.toggle("active");
        overlay.classList.toggle("open");
    })
})

//carusel
const sliderLine = document.querySelector(".slider-line");
const prevButton = document.querySelector(".pre");
const nextButton = document.querySelector(".next");
const dots = document.querySelectorAll(".dot");

let position = 0;
let dotIndex = 0;

const next = () => {
    if (position > 950) {
        nextButton.setAttribute('disabled', '');
        nextButton.style.cursor = "auto";
        console.log('stop');
    }
    position += 475;
    dotIndex++;
    sliderLine.style.left = -position + 'px';
    prevButton.removeAttribute('disabled', '');
    prevButton.style.cursor = "pointer";
    console.log(position);
    slide(dotIndex);
}
const prev = () => {
    if (position <= 475) {
        prevButton.setAttribute('disabled', '');
        prevButton.style.cursor = "auto";
        console.log('stop');
    }
    position -= 475;
    dotIndex--;
    sliderLine.style.left = -position + 'px';
    nextButton.removeAttribute('disabled', '');
    nextButton.style.cursor = "pointer";
    console.log(position);
    slide(dotIndex);
}
const slide = (index) => {
    for (let dot of dots) {
        dot.classList.remove("active-dot");
    }
    dots[index].classList.add("active-dot");
}
nextButton.addEventListener("click", next);
prevButton.addEventListener("click", prev);

dots.forEach((dot, index) => {
    dot.addEventListener("click", function () {
        position = 475 * index;
        sliderLine.style.left = -position + "px";
        dotIndex = index;
        slide(dotIndex);
        prevButton.removeAttribute('disabled', '');
        prevButton.style.cursor = "pointer";
        nextButton.removeAttribute('disabled', '');
        nextButton.style.cursor = "pointer";
    })
});
let q1 = document.getElementById("1");
q1.addEventListener("click", function () {
    prevButton.setAttribute('disabled', '');
    prevButton.style.cursor = "auto";
    nextButton.removeAttribute('disabled', '');
    nextButton.style.cursor = "pointer";
})
let q5 = document.getElementById("2");
q5.addEventListener("click", function () {
    prevButton.removeAttribute('disabled', '');
    prevButton.style.cursor = "pointer";
    nextButton.setAttribute('disabled', '');
    nextButton.style.cursor = "auto";
})

//============================ Слайдер в блоке Favorites
const seasons = document.querySelectorAll(".season-block");
console.log(seasons);
wrapIndex = 0;
seasons.forEach((season, index) => {
    season.addEventListener("click", function () {
        wrapIndex = index;
        slide1(wrapIndex);
    })
});
const wraps = document.querySelectorAll(".wrap")
const slide1 = (index) => {
    for (let wrap of wraps) {
        setTimeout(() => {
            wrap.style.opacity = "0";
        }, 0);
        setTimeout(() => {
            wrap.classList.remove("active-wrap");
        }, 400);
    }
    setTimeout(() => {
        wraps[index].classList.add("active-wrap");
        wraps[index].style.opacity = "0";
    }, 400);
    setTimeout(() => {
        // wraps[index].classList.add("active-wrap");
        wraps[index].style.opacity = "1";
    }, 600);
}
//============================