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

//smooth scroll
const lenis = new Lenis()

lenis.on('scroll', (e) => {
  //console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
//smooth scroll end


// homepage selected work gsock
// Select the panels and set their initial position and opacity
const panels = document.querySelectorAll('.panel');
panels.forEach((panel, index) => {
        gsap.set(panel, {
        y: index * panel.offsetHeight, // Add some vertical space between the panels
        opacity: 1 // Set the initial opacity to 0 so the panels are hidden
    });
});

// Create a timeline for the panel animations
const panelTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: '.cardsContainer', // The wrapper element that contains the panels
    pin: true,
    start: 'top 15%', // The animation starts when the top of the wrapper is 75% from the top of the viewport
    end: '1000px', // The animation ends when the bottom of the wrapper is 25% from the top of the viewport
    markers: false, // Add markers to help visualize the trigger area (for testing purposes)
    scrub: true, // Enable "scrubbing" so that the animations are smoothly reversed as the user scrolls back up
  },
});

let completedIndexCount = 0;

// Add animations for each panel to the timeline, with a delay before each animation begins
panels.forEach((panel, index) => {
  panelTimeline.to(panel, {
    y: -(index * panel.offsetHeight - index * 50), // Move the panel up to its final position
    opacity: 1, // Fade the panel in
    duration: 5.5, // Set the duration of the animation to 2 second
    delay: index * 1, // Delay the animation by 0.5 seconds per panel
    ease: 'circ.out', // Add some easing to the motion
    onComplete: () => {
    //console.log(`Panel ${index + 1} timeline completed`);
    
    },
    onReverseComplete: () => {
    //console.log(`Panel ${index + 1} timeline reversed`);
    },
  });
});
// homepage selected work gsock end

//homepage design process gsock
gsap.registerPlugin(ScrollTrigger);

const cards = document.querySelectorAll(".design-card");

gsap.set(cards, {position: 'absolute'})

gsap.to(".design-card", {
    yPercent: -150,
    rotation: -20,
    stagger: 0.8,
    scrollTrigger: {
    trigger: ".design-cards",
    pin: true,
    scrub: 1,
    start: "top top",
    end: "+=1500px",
  }
});
//homepage design process gsock end


//homepage testimonials
const horizontalSections = gsap.utils.toArray('section.horizontal')

horizontalSections.forEach(function (sec, i) {  

    var thisPinWrap = sec.querySelector('.pin-wrap');
    var thisAnimWrap = thisPinWrap.querySelector('.animation-wrap');
      
    var getToValue = () => -(thisAnimWrap.scrollWidth - window.innerWidth); 

    gsap.fromTo(thisAnimWrap, 
        { x: () => thisAnimWrap.classList.contains('to-right') ? 0 : getToValue() * 2.05 },
        { x: () => thisAnimWrap.classList.contains('to-right') ? getToValue() * 2.05 : 0, 
    ease: "none",
    scrollTrigger: {
            trigger: sec,     
            start: "top top",
            end: "+=1500px",
            pin: true,
            invalidateOnRefresh: true,
            scrub: true
        }
    });

    gsap.registerPlugin(ScrollTrigger);

}); 
//homepage testimonials end

//navbar show on scroll up
const showAnim = gsap.from('.main-navbar', { 
    yPercent: -100,
    paused: true,
    duration: 0.2
}).progress(1);

ScrollTrigger.create({
    start: "top top",
    end: 99999,
    onUpdate: (self) => {
        self.direction === -1 ? showAnim.play() : showAnim.reverse()
    }
});
//navbar show on scroll up end


// page progress
gsap.registerPlugin(ScrollTrigger);
gsap.to('progress', {
  value: 100,
  ease: 'none',
  scrollTrigger: { scrub: 0.3 }
});
// page progress end


//scroll toTop
$(window).scroll(function() {
    $(this).scrollTop() > 800 ? $("#toTop").fadeIn("fast", function() {}) : $("#toTop").fadeOut("fast", function() {})
    }), $("#toTop").click(function() {
        return $("html, body").animate({
            scrollTop: 0
        }, 800)

});
//scroll toTop end



//lottie homepage test
var animation = bodymovin.loadAnimation({
  container: document.getElementById('lottie'), // Required
  path: 'js/takes-export.json', // Required
  renderer: 'svg', // Required
  loop: true, // Optional
  autoplay: true, // Optional
  name: "Hero animation", // Name for future reference. Optional.
});
//lottie homepage test end