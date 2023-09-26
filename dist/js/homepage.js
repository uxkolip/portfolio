const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
const lenis = new Lenis();

lenis.stop();

function checkiftooltip() {
    $(window).width() > 768 ? ($('[data-toggle="tooltip"]').tooltip(), 
    $("[data-toggle='tooltip']").tooltip(),
    $('[data-toggle="tooltip"]').tooltip("enable")) : $('[data-toggle="tooltip"]').tooltip("disable");
}

function checkifLenis() {
  var isMobile = $(window).width() < 768;
  if (isMobile == false) {
    lenis.start();
  } else {
    lenis.destroy();
  }
}

$(document).ready(function() {
    $(".panel").css("opacity", "1");
    checkiftooltip();
    checkifLenis();
    $("body").removeClass("opacity-0");
});

$(window).resize(function() {
    checkiftooltip();
});

//smooth scroll
lenis.on('scroll', (e) => {
  //console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
    lenis.scrollTo(this.getAttribute('href'));
  });
})

document.querySelectorAll('[data-target^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
    lenis.scrollTo(this.getAttribute('data-target'));
  });
})


//scroll toTop visibility
/*$(window).scroll(function() {
  $(this).scrollTop() > 800 ? $("#toTop").css("opacity", 1) : $("#toTop").css("opacity", 0)
});*/
//scroll toTop visibility end

//smooth scroll end


//navbar show on scroll up
const showAnim = gsap.from('.main-navbar', { 
    yPercent: -100,
    paused: true,
    duration: 0.3
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
/*gsap.registerPlugin(ScrollTrigger);
gsap.to('.progress-circle', {
  strokeDashoffset: 0,
  ease: 'none',
  scrollTrigger: { scrub: 0.3 },
  onComplete: self => {
      $('.icon-wrap').addClass('bg-accent');
      $('.icon--close path').css({ fill: '#fff' })
  },
  onUpdate: self => {
      if ($('.progress-circle').css('stroke-dashoffset') !== "0px" ) {
          $('.icon-wrap').removeClass('bg-accent');
          $('.icon--close path').css({ fill: '#3A2D52' })
      } 
  }
});*/
// page progress end

// homepage selected work gsock
// Select the panels and set their initial position and opacity
const panels = document.querySelectorAll('.panel');
panels.forEach((panel, index) => {
        gsap.set(panel, {
        y: index * panel.offsetHeight, // Add some vertical space between the panels
    });
});

// Create a timeline for the panel animations
const panelTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: '.cardsContainer', // The wrapper element that contains the panels
    pin: true,
    start: 'top 5%', // The animation starts when the top of the wrapper is 75% from the top of the viewport
    end: '+=1400px', // The animation ends when the bottom of the wrapper is 25% from the top of the viewport
    scrub: true // Enable "scrubbing" so that the animations are smoothly reversed as the user scrolls back up
  },
});

// Add animations for each panel to the timeline, with a delay before each animation begins
panels.forEach((panel, index) => {
    var currentPanel = `${index + 1}`;
    panelTimeline.to(panel, {
    y: -(index * panel.offsetHeight - index * 75), // Move the panel up to its final position
    duration: 1, // Set the duration of the animation to 5 second
    stagger: 1,
    delay: index * 1, // Delay the animation by 2 seconds per panel
    ease: 'linear', // Add some easing to the motion
    onComplete: () => {
        //console.log(`Panel ${index + 1} timeline completed`);
        switch (currentPanel) {
          case "1":
            //console.log("voicemod panel is complete");
            break;
          case "2":
            //console.log("meta panel is complete");
            $("#voicemodPanel").css('scale', '.94').css('marginTop', "-25px");
            $("[data-target='#voicemodPanel']").addClass('btn-link').removeClass('btn-outline-primary');
            $("[data-target='#metaPanel']").addClass('btn-outline-primary').removeClass('btn-link');
            break;
          case "3":
            //console.log("msft panel is complete");
            $("#voicemodPanel").css('scale', '.86');
            $("#metaPanel").css('scale', '.94').css('marginTop', "-55px");
            $("[data-target='#metaPanel']").addClass('btn-link').removeClass('btn-outline-primary');
            $("[data-target='#msftPanel']").addClass('btn-outline-primary').removeClass('btn-link');
            //$(".pin-spacer").css('zIndex', 99);
            break;
          default:
            //console.log("Unknown panel");
        }
    },
    onReverseComplete: () => {
        //console.log(`Panel ${index + 1} timeline reversed`);
        switch (currentPanel) {
          case "1":
            //console.log("voicemod panel is reverse-complete");
            $("[data-target='#voicemodPanel']").addClass('btn-outline-primary').removeClass('btn-link');
            $("[data-target='#metaPanel']").addClass('btn-link').removeClass('btn-outline-primary');
            break;
          case "2":
            //console.log("meta panel is reverse-complete");
            $("#voicemodPanel").css('scale', '1');
            $("[data-target='#voicemodPanel']").addClass('btn-link').removeClass('btn-link');
            $("[data-target='#metaPanel']").addClass('btn-link').removeClass('btn-link');
            break;
          case "3":
            //console.log("msft panel is reverse-complete");
            $("#metaPanel").css('scale', '1').css('marginTop', "0px");
            $("[data-target='#metaPanel']").addClass('btn-outline-primary').removeClass('btn-link');
            $("[data-target='#msftPanel']").addClass('btn-link').removeClass('btn-outline-primary');
            //$(".pin-spacer").css('zIndex', '-1');
            break;
          default:
            //console.log("Unknown panel");
        }
    },
  });
});
// homepage selected work gsock end


// checks if elem is in view
function isScrolledIntoView(elem)
{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}
// checks if elem is in view end


//homepage design process gsock
gsap.registerPlugin(ScrollTrigger);

const cards = document.querySelectorAll(".design-card");

gsap.set(cards, {position: 'absolute'})

const cardTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: '.design-cards', // The wrapper element that contains the panels
    pin: true,
    start: "-15%",
    end: "1000px",
    scrub: true // Enable "scrubbing" so that the animations are smoothly reversed as the user scrolls back up
  },
});

cards.forEach((card, index) => {
    var currentCard = `${index + 1}`;
    cardTimeline.to(card, {
      yPercent: -180,
      rotation: 32,
      stagger: 3,
      duration: 8,
      onComplete: () => {
        //console.log(`Card ${index + 1} timeline completed`);
         switch (currentCard) {
          case "3":
            if (isScrolledIntoView($('.celebrate')) && $(window).width() >= 769) {
              confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 },
              });
            }
          break;
          default:
            //console.log("Unknown card");
        }
      }
    });
});
//homepage design process gsock end


//homepage testimonials
const horizontalSections = gsap.utils.toArray('section.horizontal')

horizontalSections.forEach(function (sec, i) {  

    var thisPinWrap = sec.querySelector('.pin-wrap');
    var thisAnimWrap = thisPinWrap.querySelector('.animation-wrap');
    /*var getToValue = () => -(thisAnimWrap.scrollWidth - window.innerWidth);*/
    var getToValue = () => -($('.testimonialCard').width() * 6.2);

    //gsap.set(horizontalSections, {marginTop: '-350px'})

    gsap.fromTo(thisAnimWrap, 
        { x: () => thisAnimWrap.classList.contains('to-right') ? 0 : getToValue()  },
        { x: () => thisAnimWrap.classList.contains('to-right') ? getToValue()  : 0, 
    ease: "none",
    scrollTrigger: {
        trigger: sec,
        start: "center center",
        end: "+=100%",        
        pin: true,
        invalidateOnRefresh: true,
        scrub: true
        }
    });

    gsap.registerPlugin(ScrollTrigger);

}); 
//homepage testimonials end


//voiceflow
(function(d, t) {
  var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
  v.onload = function() {
    window.voiceflow.chat.load({
      verify: { projectID: '64f776b3d0a6dd00073f976a' },
      url: 'https://general-runtime.voiceflow.com',
      versionID: 'production'
    });
  }
  v.src = "https://cdn.voiceflow.com/widget/bundle.mjs"; 
  v.type = "text/javascript"; 
  s.parentNode.insertBefore(v, s);
})(document, 'script');
//voiceflow end

//homepage animations
if ($(window).scrollTop() === 0) {
  gsap.set(".anim01, .anim02, .anim03, .anim04", { opacity: "0" });
  //console.log("Window is at the top.");
} else {
  gsap.set(".anim01, .anim02, .anim03, .anim04", { opacity: "1" });
  //console.log("Window is not at the top.");
} 

const timeline = gsap.timeline();

timeline
  .add(gsap.to(".anim01", { delay: 1, duration: 1, opacity: 1 }))
  .add(gsap.to(".anim02", { duration: 1, opacity: 1 }), "-=0.3")
  .add(gsap.to(".anim03", { duration: 1, opacity: 1 }), "-=0.3")
  .add(gsap.to(".anim04", { duration: 1, opacity: 1 }), "-=0.3");
//homepage animations end


// homepage selected work scrollTo
/*$(document).on('click', '.selectedWorkNav button', function() {
   
    //$("html, body").animate({ scrollTop: $($(this).attr('data-target')).offset().top - 400}, 1500);
    var targetElement = $(this).attr('data-target');
     
    console.log(targetElement);
     // Apply ScrollTrigger to the target element
    gsap.registerPlugin(ScrollTrigger);
    gsap.set(targetElement, { opacity: 0, y: 100 });
    const targetOffsetTop = document.getElementById(targetElement).getBoundingClientRect().top;
    const currentScrollPosition = window.pageYOffset;
    const scrollToPosition = currentScrollPosition + targetOffsetTop;
    

    function scrollToTarget() {     

      window.scrollTo({
        top: scrollToPosition,
        behavior: "smooth", // You can use "auto" for instant scroll without animation
      });            
    }

    $("html, body").animate({ 
        scrollTop: $(scrollToPosition).offset().top - 400}, 1500
        );
        console.log('asdfsdf');
});*/
// homepage selected work scrollTo end