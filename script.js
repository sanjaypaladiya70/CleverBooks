const targetEl = document.querySelectorAll('.part1')
const observer = new IntersectionObserver((entries)=>{
    entries.forEach((en)=>{
        if(en.isIntersecting){
            en.target.classList.add('show')
        } else{
            en.target.classList.remove('show');
        }
    });
});

targetEl.forEach((el)=>{
    observer.observe(el);
})

document.addEventListener("DOMContentLoaded", () => {
    for (let index = 1; index < 7; index++){
        const scrollwrap = document.querySelector('.scrolling-wrapper');
    const svgContainers = document.querySelectorAll('.svg-container');
    svgContainers.forEach(svg => {
        const clone = svg.cloneNode(true);
        scrollwrap.appendChild(clone);       
    
    });
}
});

// const blockContainer = document.querySelector('.block-container');
// const blocks = document.querySelectorAll('.block');
// let currentIndex = 0;

// document.getElementById('left-go').addEventListener('click', function() {
//     if (currentIndex > 0) {
//         currentIndex--;
//         const move = -currentIndex * 80;
//         blockContainer.style.transform = `translateX(${move}vw)`;
//     }
// });

// document.getElementById('right-go').addEventListener('click', function() {
//     if (currentIndex < blocks.length - 1) {
//         currentIndex++;
//         const move = -currentIndex * 80;
//         blockContainer.style.transform = `translateX(${move}vw)`;
//     }
// });
let translate = 0;
let blockContainer = document.querySelector('.block-container');
let blocks = document.querySelectorAll('.block')

document.querySelector('.right-go').addEventListener('click' , function(){
    
    if(translate>-240){
        translate-= 80;
        blockContainer.style.transform = `translateX(${translate}vw)`;
    }
});

document.querySelector('.left-go').addEventListener('click' , function(){

    if(translate<0){
        translate+= 80;
        blockContainer.style.transform = `translateX(${translate}vw)`;
    }
});


let lastScrollTop = 0;
const navbar = document.getElementsByClassName('navbar')[0]; // Access the first element

window.addEventListener('scroll', function() {
    let scrollTop = document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        navbar.style.top = '-100px'; // Adjust based on navbar height
    } else {
        navbar.style.top = '0';
    }
    lastScrollTop = scrollTop;
});

const founderImg = document.querySelector('.founder-img')
const observ = new IntersectionObserver((entries)=>{
    entries.forEach((en)=>{
        if(en.isIntersecting){
            en.target.classList.add('founder-show')
        } else{
            en.target.classList.remove('founder-show');
        }
    });
});

observ.observe(founderImg);



