

// let grandParent = document.querySelector(".grandParent")
// let parent= grandParent.querySelector(".parent")
// let child = parent.querySelectorAll(".children")
// console.log(child);

// let children = document.querySelector(".children")
// let parent = children.parentElement
// console.log(parent);

// let children = document.querySelector(".children")
// let grandParent = children.closest(".grandParent")
// console.log(grandParent);

// let childrenOne = document.querySelector(".children")
// let childrenTwo = childrenOne.nextElementSibling
// console.log(childrenTwo.style.color = "red");
// let childrenTwo = document.querySelector(".children").nextElementSibling;
// let previousChildren = childrenTwo.previousElementSibling
// console.log(previousChildren.style.color = "red");


// createElement
const divElement = document.createElement("div")
console.log(divElement);
divElement.className = "red"
divElement.setAttribute("id", "red div")
let container = document.querySelector(".grandParent")
let h1Element = document.querySelector("h1")
container.insertBefore(divElement, h1Element)











