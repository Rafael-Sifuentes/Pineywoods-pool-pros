const navbar = document.querySelector('.navbar'); // Get the parent navbar
            const mobileMenuButton = document.getElementById('mobile-menu-button');
            const hamburgerIcon = document.getElementById('hamburger-icon');
            const closeIcon = document.getElementById('close-icon');

            mobileMenuButton.addEventListener('click', () => {
                // NEW: Toggle a class on the navbar to control the menu state
                navbar.classList.toggle('menu-open'); 
                
                // These lines remain the same to swap the icons
                hamburgerIcon.classList.toggle('hidden');
                closeIcon.classList.toggle('hidden');
                
                const isExpanded = mobileMenuButton.getAttribute('aria-expanded') === 'true';
                mobileMenuButton.setAttribute('aria-expanded', !isExpanded);
            });


function callNumber() {
    var phoneNumber = "9363716146";
    window.location.href = "tel:" + phoneNumber;
    gtag('event', 'CTA_Event', {
      'event_category': 'Engagement',  // Optional category
      'event_label': 'Phone Call',   // Optional label
    });
}

function trackPhoneCallClick() {
  gtag('event', 'CTA_Event', {
    'event_category': 'Engagement',  // Optional category
    'event_label': 'Phone Call',   // Optional label
  });
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' }); 
    }
}

function openReview(){
  var url = "https://g.page/r/CQeMRNhcR3TTEBM/review"
  window.open(url, '_blank')
}

//Select all FAQ question sections
            const faqQuestions = document.querySelectorAll('.faq-card');

            faqQuestions.forEach(question => {
                question.addEventListener('click', () => {
                    // Find the parent .faq-card element
                    const card = question.closest('.faq-card');
                    const isExpanded = question.getAttribute('aria-expanded') === 'true';

                    // Toggle the 'active' class on the card
                    card.classList.toggle('active');
                    
                    // Update the aria-expanded attribute for accessibility
                    question.setAttribute('aria-expanded', !isExpanded);
                });
            });

var gallerySwiper = new Swiper('.gallery-frame-one', {

  slidesPerView: 1,
    spaceBetween: 24,
    speed: 600,
    loop: true,
    centeredSlide: true,
  
     autoplay: {
         delay: 2000,
         disableOnInteraction: true,
       },

       pagination: {
        el: ".gallery-pagination",
      },
  
      navigation: {
        nextEl: '.gallery-swiper-next',
        prevEl: '.gallery-swiper-prev',
    },

    breakpoints: {
      744:{
        slidesPerView: 2,
      },

      1440:{
        centeredSlide: true,
        slidesPerView: 3,
      }
    }

});

var gallerySwiper = new Swiper('.reviews-container', {

  slidesPerView: 1,
    spaceBetween: 24,
    speed: 600,
    loop: true,
    centeredSlide: true,
  
     autoplay: {
         delay: 2000,
         disableOnInteraction: true,
       },
  
      navigation: {
        nextEl: '.review-next',
        prevEl: '.review-prev',
    },

    breakpoints: {
      744:{
        slidesPerView: 2,
      },

      1440:{
        centeredSlide: true,
        slidesPerView: 3,
      }
    }

});


// SCROLL REVEAL JS
const sr = ScrollReveal({
  distance: '50px',
  duration: 2500,
})

sr.reveal(`.top, .section-accent, .section-title`,{
  origin: 'top',
  interval: 250,
})

sr.reveal(`.bottom`,{
  origin: 'bottom',
  interval: 250,
})

sr.reveal(`.left`,{
  origin: 'left',
  interval: 250,
})

sr.reveal(`.right`,{
  origin: 'right',
  interval: 250,
})


// MENU SELECTION / FILTER JS
let container = document.querySelector('.services');
var mixer;

if (container) {
    mixer = mixitup('.services', {
      selectors: {
        target: '.service-card'
      },
      animation: {
        duration: 400
      },
      load: { // This is the key change!
        filter: '.service-one' // Only show elements with this class initially
      }
    });
}

const linkProducts = document.querySelectorAll('.service-selector');

linkProducts.forEach(l => l.addEventListener('click', activeProduct));

function activeProduct() {
  linkProducts.forEach(l => l.classList.remove('active'));
  this.classList.add('active');
}