const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute("data-visible");

    if (visibility === "false") {
        primaryNav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true)
    } else if (visibility === "true") {
        primaryNav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false)
    }
});


let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.logo');
window.addEventListener('DOMContentLoaded', ()=> {

    setTimeout(()=>{
      logoSpan.forEach((span, idx)=> {
          setTimeout(()=> {
              span.classList.add('active');
          }, (idx + 1) * 400)
      });

      setTimeout (()=> {
          logoSpan.forEach((span, idx)=> {
              setTimeout (()=> {
                  span.classList.remove('active');
                  span.classList.add('fade');
              }, (idx + 1) * 50)
          })
      },2000);

      setTimeout(()=> {
          intro.style.top = '-100vh';
      },2300)
    }) 
})


