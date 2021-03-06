const headerText = document.querySelector(".hero__header--text");
const burgerMenu = document.querySelector(".burger");
const mobileNav = document.querySelector(".mobile-nav");
const activeElement = document.querySelectorAll(".active");
const backdrop = document.querySelector(".backdrop");
const closeModal = document.querySelector(".mobile-nav__items");

const text = "Frontend Resources !!"
const time = 200;
let index = 0;

const addLetter = () => {
    headerText.textContent += text[index];
    index++;
    if (index === text.length) {
        clearInterval(headerTyping);
    }
}
const headerTyping = setInterval(addLetter, time);

burgerMenu.addEventListener("click", (e) => {
    for (let i = 0; i < activeElement.length; i++) {
        activeElement[i].classList.toggle("show_icon");
        activeElement[i].classList.toggle("mobile-nav__visible");
        activeElement[i].classList.toggle("backdrop-active");
    }
    burgerMenu.classList.toggle("animated");
})

closeModal.addEventListener("click", (e) => {
    mobileNav.classList.remove("mobile-nav__visible");
    backdrop.classList.remove("backdrop-active");
    for (let i = 0; i < activeElement.length; i++) {
        activeElement[i].classList.toggle("show_icon");
    }
    burgerMenu.classList.toggle("animated");
})

// backdrop.addEventListener("click", (e) => {
//     mobileNav.classList.remove("mobile-nav__visible");
//     backdrop.classList.remove("backdrop-active");

// })

const person = {
    name: "Piotr",
    age: "32"
}

console.log(person);

const jasonPerson = JSON.stringify(person);
console.log(jasonPerson);

localStorage.setItem("person", jasonPerson);

const personStringify = localStorage.getItem("person");

const newPerson = JSON.parse(personStringify);

console.log(newPerson);

// localStorage.removeItem("person");