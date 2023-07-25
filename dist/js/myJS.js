function checkiftooltip() {
    $(window).width() > 768 ? ($('[data-toggle="tooltip"]').tooltip(), 
    $('[data-toggle="tooltip"]').tooltip("enable")) : $('[data-toggle="tooltip"]').tooltip("disable")

    $("[data-toggle='tooltip']").tooltip();

    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

}

$(document).ready(function() {
    $(window).resize(function() {
        checkiftooltip()
    });
}); 

const lenis = new Lenis()

lenis.on('scroll', (e) => {
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)


const panels = document.querySelectorAll('.panel');
panels.forEach((panel, index) => {
        gsap.set(panel, {
        y: index * panel.offsetHeight, 
        opacity: 1 
    });
});

const panelTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: '.cardsContainer', 
    pin: true,
    start: 'top 15%', 
    end: '1000px', 
    markers: false, 
    scrub: true, 
  },
});

let completedIndexCount = 0;

panels.forEach((panel, index) => {
  panelTimeline.to(panel, {
    y: -(index * panel.offsetHeight - index * 50), 
    opacity: 1, 
    duration: 5.5, 
    delay: index * 1, 
    ease: 'circ.out', 
    onComplete: () => {

        },
    onReverseComplete: () => {
    },
  });
});

gsap.registerPlugin(ScrollTrigger);

const cards = document.querySelectorAll(".design-card");

gsap.set(cards, {position: 'absolute'})

gsap.to(".design-card", {
    yPercent: -150,
    rotation: -20,
    display: "none",
    stagger: 0.8,
    scrollTrigger: {
    trigger: ".design-cards",
    pin: true,
    scrub: 1,
    start: "top top",
    end: "+=1500px",
  }
});


const horizontalSections = gsap.utils.toArray('section.horizontal')

horizontalSections.forEach(function (sec, i) {  

    var thisPinWrap = sec.querySelector('.pin-wrap');
    var thisAnimWrap = thisPinWrap.querySelector('.animation-wrap');

          var getToValue = () => -(thisAnimWrap.scrollWidth - window.innerWidth); 

    gsap.fromTo(thisAnimWrap, { 
        x: () => thisAnimWrap.classList.contains('to-right') ? 0 : getToValue() 
    }, { 
    x: () => thisAnimWrap.classList.contains('to-right') ? getToValue() : 0, 
    ease: "none",
    scrollTrigger: {
            trigger: sec,     
            start: "top top",
            end: () => "+=" + (thisAnimWrap.scrollWidth - window.innerWidth),
            pin: thisPinWrap,
            invalidateOnRefresh: true,
            scrub: true
        }
    });

    gsap.registerPlugin(ScrollTrigger);

}); 




$(window).scroll(function() {
    $(this).scrollTop() > 3800 ? $("#toTop").fadeIn("fast", function() {}) : $("#toTop").fadeOut("fast", function() {})
    }), $("#toTop").click(function() {
        return $("html, body").animate({
            scrollTop: 0
        }, 800)

});



var animation = bodymovin.loadAnimation({
  container: document.getElementById('lottie'), 
  path: 'js/takes-export.json', 
  renderer: 'svg', 
  loop: true, 
  autoplay: true, 
  name: "Hero animation", 
});
