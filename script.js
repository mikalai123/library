console.log('Добрый день! Старался выполнить все пункты ТЗ. Вроде мне это удалось! Хорошего лня и настроения!)');

//Burger

const nav = document.querySelector(".nav");
const navBtn = document.querySelector(".nav-line");
const overlay = document.querySelector(".overlay");
const btns = document.querySelectorAll(".nav-link");

console.log(nav);

navBtn.addEventListener("click", function() {
    nav.classList.toggle("active");
    navBtn.classList.toggle("active");
    overlay.classList.toggle("open");
})

overlay.addEventListener("click", function(){
    overlay.classList.toggle("open");
    nav.classList.toggle("active");
})

btns.forEach(function(btn) {
    btn.addEventListener("click", function(){
        nav.classList.toggle("active");
        overlay.classList.toggle("open");

    })
})