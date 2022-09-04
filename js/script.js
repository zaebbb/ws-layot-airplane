const activeFormImg = document.querySelector(".block-info-open");
const headingInfo = document.querySelector(".header-info");

const menuBtn = document.querySelector('svg.fa-bars');
const closeBtn = document.querySelector('svg.fa-times');
const sidebar = document.querySelector('.navigation-sidebar');

let i = 100000;
document.querySelector(".randomNumber").textContent = Math.floor(Math.random() * i) + " руб.";

function activeFormInfo(){
    activeFormImg.classList.add("active");
    headingInfo.classList.add("active");
}

function menuOpen(){
    sidebar.classList.add("active");
}

function menuRemove(){
    sidebar.classList.remove("active");
}