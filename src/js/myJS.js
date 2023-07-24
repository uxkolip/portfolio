function checkiftooltip() {
    $(window).width() > 768 ? ($('[data-toggle="tooltip"]').tooltip(), 
    $('[data-toggle="tooltip"]').tooltip("enable")) : $('[data-toggle="tooltip"]').tooltip("disable")
}

$(document).ready(function() {
    $(window).resize(function() {
        checkiftooltip()
    });
}); 

//smooth scroll
const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)


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
    end: 'bottom 100%', // The animation ends when the bottom of the wrapper is 25% from the top of the viewport
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
    console.log(`Panel ${index + 1} timeline completed`);
    
    },
    onReverseComplete: () => {
    console.log(`Panel ${index + 1} timeline reversed`);
    },
  });
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
    //anticipatePin: 1,
    scrub: true,
    //markers: true,
    }
});

gsap.registerPlugin(ScrollTrigger);

function animateCards() {
  // select the cards and set their initial position
  const cards = document.querySelectorAll(".dProcess");
  gsap.set(cards, { y: "+=200", rotation: -5 });

  // create a timeline to animate the cards
  const tl = gsap.timeline({
    scrollTrigger: {
    trigger: ".dProcesscontainer",
    start: "top bottom",
    end: "bottom top",
    scrub: true,
    },
    });

// animate each card in sequence
cards.forEach((card, index) => {
    const nextCard = cards[index + 1];
    const duration = index === 0 ? 1 : 0.5;

    tl.to(card, { y: "-=200", rotation: 0, duration }, "<");
    if (nextCard) {
    tl.to(nextCard, { y: "-=100", duration: 0.5 }, "<");
    }
    });
}

    animateCards();

}); 


//lottie homepage test
var animation = bodymovin.loadAnimation({
  container: document.getElementById('lottie'), // Required
  path: 'js/takes-export.json', // Required
  renderer: 'svg', // Required
  loop: true, // Optional
  autoplay: true, // Optional
  name: "Hero animation", // Name for future reference. Optional.
});