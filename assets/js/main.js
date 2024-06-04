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
const contactForm=document.getElementById('contact-form'),
contactMessage=document.getElementById('contact-message');
const sendEmail=(e)=>{
    e.preventDefault();
    console.log('sendEmail');
    emailjs.sendForm('service_08cl6oa','template_740ym6p','#contact-form','Ue7Ih3pkJASE0cf9A')
    .then(()=>{
        contactMessage.textContent='Message sent successfully';
        setTimeout(()=>{
            contactMessage.textContent='';
        },5000);
    },()=>{
        console.log('fail');
        contactMessage.textContent='Something went wrong';
    })
}
contactForm.addEventListener('submit',sendEmail);
/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp=()=>{
    const scrollup=document.getElementById('scroll-up');
    if(this.scrollY>=350){
        scrollup.classList.add('show-scroll');
    }else{
        scrollup.classList.remove('show-scroll');
    }
}
window.addEventListener('scroll',scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections=document.querySelectorAll('section[id]');
const scrollActive=()=>{
    const scrollY=window.pageYOffset;

    sections.forEach(current=>{
        const sectionHeight=current.offsetHeight;
        const sectionTop=current.offsetTop-58;
        sectionId=current.getAttribute('id');
        if(scrollY>sectionTop && scrollY<=sectionTop+sectionHeight){
            document.querySelector('.nav__menu a[href*='+sectionId+']').classList.add('active-link');
        }else{
            document.querySelector('.nav__menu a[href*='+sectionId+']').classList.remove('active-link');
        }
    })
}
window.addEventListener('scroll',scrollActive);

/*=============== SCROLL REVEAL ANIMATION ===============*/
