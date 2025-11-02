const currentyear = document.querySelector("#currentyear");
const today = new Date();
currentyear.innerHTML = today.getFullYear();

let when = document.querySelector("#when");
let lastMod = new Date(document.lastModified);
when.innerHTML = lastMod.toLocaleDateString();