console.log('Добрый день! Старался выполнить все пункты ТЗ. Почти удалось, за исключением пару пунктов)');
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
    modalReg.classList.remove("active");
    overlay1.classList.remove("open");
    // document.body.style.overflowY = 'hidden';
})

overlay.addEventListener("click", function () {
    overlay.classList.toggle("open");
    nav.classList.toggle("active");
    navBtn.classList.toggle("active");
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
// console.log(seasons);
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
};

//============================ log-in

const logIn = document.querySelector(".log-in");
const logSing = document.querySelector(".log-sing-reg");
const logInWrap = document.querySelector(".log-in-wrap");
const overlay3 = document.querySelector(".overlay3");
const closeRegLog = document.querySelector(".close-reg-log")
logIn.addEventListener("click", function () {
    logInWrap.classList.toggle("active");
    overlay1.classList.remove("open");
    modalReg.classList.remove("active");
    overlay3.classList.toggle("open");
})
logSing.addEventListener("click", function () {
    logInWrap.classList.toggle("active");
    overlay3.classList.toggle("open");
    register.classList.toggle("active-reg");
    overlay2.classList.toggle("open");
})
overlay3.addEventListener("click", function () {
    overlay3.classList.toggle("open");
    logInWrap.classList.toggle("active");
})
closeRegLog.addEventListener("click", function () {
    logInWrap.classList.toggle("active");
    overlay3.classList.toggle("open");
})
//============================ modal-reg
const icon = document.querySelector(".icon");
const modalReg = document.querySelector(".modal-reg");
const overlay1 = document.querySelector(".overlay1");

icon.addEventListener("click", function () {
    // modalReg.style.display = "flex";
    modalReg.classList.toggle("active");
    overlay1.classList.toggle("open");
    nav.classList.remove("active");
    overlay.classList.remove("open");
    navBtn.classList.remove("active");

});
overlay1.addEventListener("click", function () {
    overlay1.classList.toggle("open");
    modalReg.classList.toggle("active");
})

//============================ registetr
const singUP = document.querySelector(".reg");
const register = document.querySelector(".register");
const overlay2 = document.querySelector(".overlay2");
const closeRegReg = document.querySelector(".close-reg-reg");
const logSingLog = document.querySelector(".log-sing-log")
singUP.addEventListener("click", function () {
    register.classList.toggle("active-reg");
    overlay2.classList.toggle("open");
    modalReg.classList.toggle("active");
    overlay1.classList.toggle("open");
})
const btnCardReg = document.querySelector(".btn-card-reg");
btnCardReg.addEventListener("click", function () {
    register.classList.toggle("active-reg");
    overlay2.classList.toggle("open");
})
closeRegReg.addEventListener("click", function () {
    register.classList.toggle("active-reg");
    overlay2.classList.toggle("open");
})
overlay2.addEventListener("click", function () {
    register.classList.toggle("active-reg");
    overlay2.classList.toggle("open");
})
logSingLog.addEventListener("click", function () {
    register.classList.toggle("active-reg");
    overlay2.classList.toggle("open");
    logInWrap.classList.toggle("active");
    overlay3.classList.toggle("open");
})

//============================ valid login email
// const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
// const inputEmail = document.getElementById('email2');
// console.log(inputEmail);
// function onInput() {
//     if (isEmailValid(inputEmail.value)) {
//         inputEmail.style.borderColor = 'green';
//     } else {
//         inputEmail.style.borderColor = 'red';
//     }
// }
// inputEmail.addEventListener('input', onInput);
// function isEmailValid(value) {
//     return EMAIL_REGEXP.test(value);
// }

const submitBtnLog = document.getElementById("submit-reg-log");
console.log(submitBtnLog);
submitBtnLog.addEventListener('click', (event) => {
    // отменяем действие по умолчанию. Перехода не будет.
    event.preventDefault();
    logInWrap.classList.toggle("active");
    overlay3.classList.toggle("open");
})

const form2 = document.getElementById("form2");
const formInputs2 = form2.elements;


for (let index = 0; index < formInputs2.length; index++) {
    formInputs2[index].addEventListener("change", changeMessage2);
}
function changeMessage2() {
    console.log(this.name, this.value);
    localStorage.setItem(this.name, this.value);
}

for (let index = 0; index < formInputs2.length; index++) {
    formInputs2[index].addEventListener("change", function () {
        if (formInputs2[0].value !== '' && formInputs2[1].value !== '') {
            const w = document.getElementById("submit-reg-log");
            w.removeAttribute('disabled');
        } else {
            const w = document.getElementById("submit-reg-log");
            w.setAttribute('disabled', 'disabled');
        }
    });
}


for (let index = 0; index < formInputs2.length; index++) {
    formInputs2[index].addEventListener("mouseout", valid_form2);
}
function valid_form2() {
    const email = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
    const psw = new RegExp(/[A-Za-z0-9]{8,}/);

    if (formInputs2[0].value.match(email)) {
        console.log(`${formInputs2[0].value}`);
    } else {
        formInputs2[0].value = '';
    }
    if (formInputs2[1].value.match(psw)) {
        console.log(`${formInputs2[1].value}`);
    } else {
        formInputs2[1].value = '';
    }
}
//============================ localStorage

const form = document.getElementById("form1");
const formInputs = form.elements;
const submitBtn = form.querySelector(".btn-reg");
const iconIcon = document.querySelector(".icon-icon");

// submitBtn.addEventListener("click", clearStorage); // чистим localStorage

for (let index = 0; index < formInputs.length; index++) {
    formInputs[index].addEventListener("change", changeMessage);
}

function clearStorage() {
    localStorage.clear();
}
function changeMessage() {
    console.log(this.name, this.value);
    localStorage.setItem(this.name, this.value);
}
function checkStorage() {
    let arr = [];
    submitBtn.addEventListener('click', (event) => {
        // отменяем действие по умолчанию. Перехода не будет.
        event.preventDefault();
        register.classList.toggle("active-reg");
        overlay2.classList.toggle("open");
    })
    submitBtn.addEventListener("click", function () {
        let letter1 = formInputs[0].value.substr(0, 1).toUpperCase();
        arr[0] = letter1;
        let letter2 = formInputs[1].value.substr(0, 1).toUpperCase();
        arr[1] = letter2;
        // console.log(arr);   // массив 2 букв
        arr = arr.join('');
        // console.log(arr);  //  2 буквы
        icon.style.display = "none";
        iconIcon.innerHTML = ``;
        iconIcon.style.display = "block";
        let iconLetter = document.createElement("div");
        iconLetter.classList.add("icon-name1");
        iconLetter.title = `${formInputs[0].value} ${formInputs[1].value}`;
        iconIcon.appendChild(iconLetter);

        let iconLetter1 = document.createElement("span");
        iconLetter1.classList.add("icon-name");
        iconLetter.appendChild(iconLetter1);
        iconLetter.innerHTML = arr;
        icon.classList.add("open");
        // console.log(cardNumber);
        // console.log(arr);
        const foto = document.querySelector(".foto");
        foto.innerHTML = `${arr}`;
        arr = [];


        randomNumber();
        // console.log(cardNumber);  // номер карты
        let profNumber = document.querySelector(".prof-number");
        let profNumberCard = document.querySelector(".prof-number-card");
        let fotoText = document.querySelector(".foto-text");
        // console.log(fotoText);
        // console.log(profNumber);
        profNumber.textContent = `${cardNumber}`;
        profNumberCard.textContent = `${cardNumber}`;
        fotoText.textContent = `${formInputs[0].value} ${formInputs[1].value}`;

        let name = document.querySelector(".name");
        name.value = ``;
        name.value = `${formInputs[0].value} ${formInputs[1].value}`;

        let cardBlock = document.querySelector(".card-block");
        cardBlock.value = ``;
        cardBlock.value = cardNumber;

        let user = {
            name: `${formInputs[0].value}`,
            lname: `${formInputs[1].value}`,
            email: `${formInputs[2].value}`,
            psw: `${formInputs[3].value}`,
            card: `${cardNumber}`
        }
        localStorage.setItem(`${formInputs[0].value}`, JSON.stringify(user));
        // console.log(user);   // вывод юзера с данными
        // console.log(localStorage.getItem(formInputs[0].name));



        // Проверка на наличие строки в localStorage

        // if(localStorage.getItem(formInputs[0].name) == `${formInputs[0].value}`) {
        //     console.log("true");
        // } else {
        //     console.log("false");
        // }
        return;
    })
}
checkStorage();

const copyText = document.querySelector(".copy-foto");
copyText.addEventListener("click", function () {
    console.log("copy to clipboard");
    let copyText = document.querySelector(".prof-number-card");
    navigator.clipboard.writeText(copyText.innerHTML);
});




// const submitBtn = form.querySelector(".btn");
console.log(submitBtn);


for (let index = 0; index < formInputs.length; index++) {
    formInputs[index].addEventListener("change", function () {
        if (formInputs[0].value !== '' && formInputs[1].value !== '' && formInputs[2].value !== '' && formInputs[3].value !== '') {
            const w = document.getElementById("submit-reg-reg");
            w.removeAttribute('disabled');
        } else {
            const w = document.getElementById("submit-reg-reg");
            w.setAttribute('disabled', 'disabled');
        }
    });
}


for (let index = 0; index < formInputs.length; index++) {
    formInputs[index].addEventListener("mouseout", valid_form1);
}
function valid_form1() {
    const lowerCaseLetters = /[A-Za-zА-Яа-яЁё]/g;
    const email = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
    const psw = new RegExp(/[A-Za-z0-9]{8,}/);

    if (formInputs[0].value.match(lowerCaseLetters)) {
        console.log(`${formInputs[0].value}`);
    } else {
        formInputs[0].value = '';
    }
    if (formInputs[1].value.match(lowerCaseLetters)) {
        console.log(`${formInputs[1].value}`);
    } else {
        formInputs[1].value = '';
    }
    if (formInputs[2].value.match(email)) {
        console.log(`${formInputs[2].value}`);
    } else {
        formInputs[2].value = '';
    }
    if (formInputs[3].value.match(psw)) {
        console.log(`${formInputs[3].value}`);
    } else {
        formInputs[3].value = '';
    }
}











//============================ cardNumber
let cardNumber = [];
function randomNumber() {
    let r = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 1).toUpperCase();
    cardNumber += r;
    // console.log(cardNumber);
    for (let index = 0; cardNumber.length < 10; index++) {
        let num = Math.floor(Math.random() * 10);
        // console.log(num);
        cardNumber += num;
    }
    // console.log(cardNumber);
    return;
}
//   console.log(cardNumber);
//============================ my profile
const iconProf = document.querySelector(".icon-icon");
const myProf = document.querySelector(".my-profile");
const modalProf = document.querySelector(".modal-prof");
const modalMyProf = document.querySelector(".modal-my-prof");
const overlay4 = document.querySelector(".overlay4");
const overlay5 = document.querySelector(".overlay5");
const overlay6 = document.querySelector(".overlay6");
const closeProf = document.querySelector(".close-prof");
const logOut = document.querySelector(".log-out");
const logInButton = document.querySelector(".btn-card-log");
// console.log(iconProf);
// console.log(myProf);

iconProf.addEventListener("click", function () {
    modalProf.classList.toggle("active");
    overlay4.classList.toggle("open");
})
// modal-prof
modalMyProf.addEventListener("click", function () {
    myProf.classList.toggle("active");
    modalProf.classList.remove("active");
    overlay4.classList.remove("open");
    overlay5.classList.toggle("open");
})
overlay4.addEventListener("click", function () {
    modalProf.classList.toggle("active");
    overlay4.classList.toggle("open");
})
overlay5.addEventListener("click", function () {
    myProf.classList.remove("active");
    overlay5.classList.remove("open");
})
closeProf.addEventListener("click", function () {
    myProf.classList.remove("active");
    overlay5.classList.remove("open");
})
logOut.addEventListener("click", function () {
    icon.style.display = "block";
    iconIcon.style.display = "none";
    overlay4.classList.toggle("open");
    modalProf.classList.toggle("active");
    let name = document.querySelector(".name");
    name.value = ``;

    let cardBlock = document.querySelector(".card-block");
    cardBlock.value = ``;
    location.reload();

})
logInButton.addEventListener("click", function () {
    overlay3.classList.toggle("open");
    logInWrap.classList.toggle("active");
})
icon


//================================================= при нажатии на любую кнопку Buy открывается модальное окно LOGIN
const btnBooks = document.querySelectorAll(".btn");
const buyCard = document.querySelector(".by-card");
const closeBuyCard = document.querySelector(".closebtn-card");
// console.log(btnBooks);
    for (let index = 0; index < btnBooks.length; index++) {
        const element = btnBooks[index];
        // console.log(element);
        element.addEventListener("click", function() {
            if (icon.classList.contains("open")) {
                console.log("+ 1 book");
                overlay6.classList.toggle("open");
                buyCard.classList.toggle("active");
            } else {
                // console.log("No open");
                overlay3.classList.toggle("open");
                logInWrap.classList.toggle("active");

            }  
        })
    }
    overlay6.addEventListener("click", function () {
        buyCard.classList.remove("active");
        overlay6.classList.remove("open");
    })
    closeBuyCard.addEventListener("click", function () {
        buyCard.classList.remove("active");
        overlay6.classList.remove("open");
    })


//=================================================Если введённые имя и номер карты совпадают с данными пользователя -----


// let name1 = document.querySelector(".name");
// // console.log(name1);

// let cardBlock = document.querySelector(".card-block");
// // console.log(cardBlock);
// console.log(localStorage.qwee); 
// // for (let index = 0; index < localStorage.qwee.length; index++) {
// //     const element = localStorage.qwee[index];
// //     console.log(element);
// // }

// // for(let key of localStorage.qwee) {
// //     console.log(Object.values(key))
// // }

// console.log(Object.values(localStorage.qwee));



// for(let i=0; i<localStorage.length; i++) {
//     let key = localStorage.key(i);
//     console.log(`${key}`); //нашли все ключи которые соответсвуют name
//     // console.log(`${localStorage.getItem(key)}`);
//     // console.log( Object.values(`${localStorage.getItem(key)}`));

   




//     // for (let index = 0; index < loc.length; index++) {
//     //     const element = loc[index];
//     //     console.log(element);
//     // }
//     // name1.addEventListener("input", function() {
//     //     console.log(name1.value);
//     //     if (name1.value == `${key}`) {
//     //         console.log("bingo");
//     //     }else {
//     //         console.log("fasle");
//     //     }
//     // })
//     // cardBlock.addEventListener("input", function() {
//     //     console.log(cardBlock.value);
//     // })


//   }




  //================================================= добавление книг 
  const buttons = document.querySelectorAll(".btn");
//   console.log(buttons);
let currentnumber = 0;

  buttons.forEach(button => {
    button.addEventListener("click", function(event) {
        let book = event.target.closest(".book-title");
        let bookTitle = book.querySelector(".book-auto").textContent;
        bookTitle = bookTitle.toLowerCase();
        bookTitle = bookTitle[0].toUpperCase() + bookTitle.slice(1);
        // console.log(bookTitle);
        
        let bookAutor = book.querySelector(".book-autor").textContent;
        // console.log(bookAutor);

        const listBooks = document.querySelector(".list-books");
        let listBook = document.createElement("li");
        listBook.className = "list-book";
        listBook.textContent = bookTitle + ", " + bookAutor;
        listBooks.appendChild(listBook);

        let number = document.querySelector(".number-book");
        number.innerText = ++number.innerText;
        // console.log(number);


        button.textContent = "Own";
        button.setAttribute('disabled', 'disabled');
        // console.log(button.textContent);
    })
  });




//   Блок Digital Library Cards. Если введённые имя и номер карты совпадают с данными пользователя, то отображается панель с информацией, вместо кнопки Check the card на 10 секунд. +2
//   Там же после отображения информации, кнопка возвращается в прежнее состояние, а поля в форме сбрасываются. +2
const btnBuy = document.querySelector(".btn-buy");
btnBuy.addEventListener("click", function(event) {
    event.preventDefault();
    buyCard.classList.add("open");
    overlay6.classList.add("active");  
})
const form3 = document.getElementById("form3");
const items = form3.elements;



// function ewq() {
//     for (let index = 0; index < items.length; index++) {
//         const element = items[index];
//         console.log(element);
//         if (element.value !== '') {
//             console.log("не пусто");
//         } else {
//             console.log("пусто");
//         }
//     } 
// }
// ewq();
//  for (let index = 0; index < items.length; index++) {
//     const element = items[index];
//     element.addEventListener("input", function() {
//         let qw = element.value
//         console.log(qw);
//     })
//  }



// const form3 = document.getElementById("form3");
// const items = form.elements;
// function valid_form3() {
//     // const lowerCaseLetters = /[A-Za-zА-Яа-яЁё]/g;
//     // const email = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
//     const psw = new RegExp(/[0-9]{8,}/);
// for (let index = 0; index < items.length; index++) {
//     const item = items[index];
//     console.log(item[0])
//     if (item[0].value.match(psw)) {
//         console.log(`${item[0].value}`);
//     } else {
//         item[0].value = '';
//     }
//     // if (item[1].value.match(lowerCaseLetters)) {
//     //     console.log(`${item[1].value}`);
//     // } else {
//     //     item[1].value = '';
//     // }
//     // if (item[2].value.match(email)) {
//     //     console.log(`${item[2].value}`);
//     // } else {
//     //     item[2].value = '';
//     // }
//     // if (item[3].value.match(psw)) {
//     //     console.log(`${item[3].value}`);
//     // } else {
//     //     item[3].value = '';
//     // }
// }

// }
// valid_form3();




for (let index = 0; index < items.length; index++) {
    items[index].addEventListener("change", function () {
        if (items[0].value !== '' && items[1].value !== '' && items[2].value !== '' && items[3].value !== '' && items[4].value !== '' && items[5].value !== '' && items[6].value !== '') {
            const w = document.getElementById("submit-reg-reg");
            btnBuy.removeAttribute('disabled');
        } else {
            const w = document.getElementById("submit-reg-reg");
            btnBuy.setAttribute('disabled', 'disabled');
        }
    });
}

for (let index = 0; index < items.length; index++) {
    items[index].addEventListener("mouseout", valid_form3);
}
function valid_form3() {
    const lowerCaseLetters = /[A-Za-zА-Яа-яЁё]/g;
    const email = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
    const psw = new RegExp(/[A-Za-z0-9]{8,}/);
    const psw1 = new RegExp(/[0-9]{16,}/);
    const psw2 = new RegExp(/[0-9]{2,}/);
    const psw3 = new RegExp(/[0-9]{2,}/);
    const psw4 = new RegExp(/[0-9]{3,}/);

    if (items[0].value.match(psw1)) {
        console.log(`${items[0].value}`);
    } else {
        items[0].value = '';
    }
    if (items[1].value.match(psw2)) {
        console.log(`${items[1].value}`);
    } else {
        items[1].value = '';
    }
    if (items[2].value.match(psw3)) {
        console.log(`${items[2].value}`);
    } else {
        items[2].value = '';
    }
    if (items[3].value.match(psw4)) {
        console.log(`${items[3].value}`);
    } else {
        items[3].value = '';
    }
}