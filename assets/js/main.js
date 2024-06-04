/*=============== SHOW MENU ===============*/
const navMenu=document.getElementById('nav-menu')
    navToggle=document.getElementById('nav-toggle')
    navClsoe=document.getElementById('nav-close');
/*=============== MENU SHOW ===============*/
if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.toggle('show-menu')
    })
}
/*=============== MENU HIDE  ===============*/
if(navClsoe){
    navClsoe.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu')
    })
}
/*=============== REMOVE MENU MOBILE ===============*/
const navLink=document.querySelectorAll('.nav__link');
const linkaction=()=>{
    const navMenu=document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n=>n.addEventListener('click',linkaction));
/*=============== ADD BLUR TO HEADER ===============*/

const blurHeader=()=>{
    const header=document.getElementById('header');
    this.scrollY>=50? header.classList.add('blur-header'):header.classList.remove('blur-header');
}
window.addEventListener('scroll',blurHeader);
/*=============== EMAIL JS ===============*/


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/