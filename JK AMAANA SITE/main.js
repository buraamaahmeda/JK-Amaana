const bars = document.querySelector(".fa-bars");
const exb = document.querySelector(".fa-xmark");
const dropDown = document.querySelector(".dropdown");
const links = document.querySelectorAll(".links");

for(let i = 0; i < links.length; i++){
     links[i].addEventListener("click",closeDropdown)
}
bars.addEventListener("click",displayDropdown)
exb.addEventListener("click",closeDropdown)


function displayDropdown() {
     bars.style.display = "none";
     dropDown.style.display = "block";
     exb.style.display = "block";
}
function closeDropdown() {
     bars.style.display = "block";
     dropDown.style.display = "none";
     exb.style.display = "none";
}