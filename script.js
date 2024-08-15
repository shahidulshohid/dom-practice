

// let grandParent = document.querySelector(".grandParent")
// let parent= grandParent.querySelector(".parent")
// let child = parent.querySelectorAll(".children")
// console.log(child);
// let children = document.querySelector(".children")
// let parent = children.parentElement
// console.log(parent);
let children = document.querySelector(".children")
let grandParent = children.closest(".grandParent")
console.log(grandParent);







