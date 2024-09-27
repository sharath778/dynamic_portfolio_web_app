const params = new URLSearchParams(window.location.search);
const id = params.get('id');


var userName = document.querySelectorAll(".user")
var skills = document.querySelectorAll(".skill")
var summ = document.querySelector(".summ");
var mail = document.querySelectorAll(".email");
var txtMail = document.querySelector(".textMail");
var title = "";
var add = document.querySelector(".address");


const render = async ()=>{
    const data = await fetch(`https://your-portfolio-p15c.onrender.com/api/getData/${id}`);
    const newData= await data.json();
    userName.forEach((e)=>e.innerHTML=newData.name);
    skills.forEach((e,key)=>e.innerHTML=newData.techSkills[key]);
    summ.innerHTML=newData.summary;
    mail.forEach((e)=>e.setAttribute('href',`mailto:${newData.email}`));
    txtMail.innerHTML=newData.email;
    add.innerHTML=newData.address;
    title=newData.title;
    var typed = new Typed(".typing", {
        strings: [title],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed(".typing-2", {
        strings: [title],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
}
render();
$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });
    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });
    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    // typing text animation script
    
    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});