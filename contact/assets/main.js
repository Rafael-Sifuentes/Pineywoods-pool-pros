// PARALLAX EFFECT JS
document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);
  });  
  
  gsap.to(".header-img", {
    y: "100px",
    scrollTrigger: {
        trigger: "#header-img-container",
        start: "top top",
        end : "bottom top",
        scrub: true,
    }
  })

function goToLinkOne(){
    let url = 'https://pwpoolpros.com'
    window.open(url, '_blank')  
}

function goToLinkTwo(){
    let url = 'https://pwpoolpros.com/services/index.html#packages'
    window.open(url, '_blank')  
}

function goToLinkThree(){
  let url = 'https://g.page/r/CQeMRNhcR3TTEAI/review'
  window.open(url, '_blank')  
}



// SCROLL REVEAL JS
const sr = ScrollReveal({
    distance: '50px',
    duration: 2000,
  })
  
  sr.reveal(`.left`,{
    origin: 'left',
    delay: 700,
  })

  sr.reveal(`.right`,{
    origin: 'right',
    delay: 700,
  })
  
  sr.reveal(`.button, .header-logo-container, .header-title, .header-subtitle, .header-text`, {
    origin: 'top',
    delay: 400,
    interval: 100,
  })
