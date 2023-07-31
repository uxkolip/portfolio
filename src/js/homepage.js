function checkiftooltip() {
    $(window).width() > 768 ? ($('[data-toggle="tooltip"]').tooltip(), 
    $('[data-toggle="tooltip"]').tooltip("enable")) : $('[data-toggle="tooltip"]').tooltip("disable")

    $("[data-toggle='tooltip']").tooltip();

    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

}

$(document).ready(function() {
    $(".panel").css("opacity", "1");
    checkiftooltip();
}); 

$(window).resize(function() {
    checkiftooltip();
});

//smooth scroll
    /*const lenis = new Lenis()

    lenis.on('scroll', (e) => {
      //console.log(e)
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)*/
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
    start: 'top 20%', // The animation starts when the top of the wrapper is 75% from the top of the viewport
    end: '+=1000px', // The animation ends when the bottom of the wrapper is 25% from the top of the viewport
    scrub: true // Enable "scrubbing" so that the animations are smoothly reversed as the user scrolls back up
  },
});

// Add animations for each panel to the timeline, with a delay before each animation begins
panels.forEach((panel, index) => {
    var currentPanel = `${index + 1}`;
    panelTimeline.to(panel, {
    y: -(index * panel.offsetHeight - index * 75), // Move the panel up to its final position
    duration: 5.5, // Set the duration of the animation to 5 second
    stagger: 1,
    delay: index * 2, // Delay the animation by 2 seconds per panel
    ease: 'circ.out', // Add some easing to the motion
    onComplete: () => {
        //console.log(`Panel ${index + 1} timeline completed`);
        switch (currentPanel) {
          case "1":
            console.log("voicemod panel is complete");
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
            console.log("meta panel is reverse-complete");
            $("#voicemodPanel").css('scale', '1');
            $("[data-target='#voicemodPanel']").addClass('btn-link').removeClass('btn-link');
            $("[data-target='#metaPanel']").addClass('btn-link').removeClass('btn-link');
            break;
          case "3":
            console.log("msft panel is reverse-complete");
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



//homepage design process gsock
gsap.registerPlugin(ScrollTrigger);

const cards = document.querySelectorAll(".design-card");

gsap.set(cards, {position: 'absolute'})

gsap.to(".design-card", {
    yPercent: -180,
    rotation: 32,
    stagger: 3,
    duration: 8,
    scrollTrigger: {
        trigger: ".design-cards",
        pin: true,
        scrub: true,
        start: "-15%",
        end: "1000px",
    }
});
//homepage design process gsock end


//homepage testimonials
const horizontalSections = gsap.utils.toArray('section.horizontal')

horizontalSections.forEach(function (sec, i) {  

    var thisPinWrap = sec.querySelector('.pin-wrap');
    var thisAnimWrap = thisPinWrap.querySelector('.animation-wrap');
    /*var getToValue = () => -(thisAnimWrap.scrollWidth - window.innerWidth);*/
    var getToValue = () => -($('.testimonialCard').width() * 5.8);

    //gsap.set(horizontalSections, {marginTop: '-350px'})

    gsap.fromTo(thisAnimWrap, 
        { x: () => thisAnimWrap.classList.contains('to-right') ? 0 : getToValue()  },
        { x: () => thisAnimWrap.classList.contains('to-right') ? getToValue()  : 0, 
    ease: "none",
    scrollTrigger: {
        trigger: sec,
        start: "-50%",
        end: "+=1500px",
        pin: true,
        invalidateOnRefresh: true,
        scrub: true
        }
    });

    gsap.registerPlugin(ScrollTrigger);

}); 
//homepage testimonials end



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

// aboutmeVideoModal functions
if ($("#aboutmeVideoModal").length) {
    const aboutmeVideoModal = document.getElementById('aboutmeVideoModal');
    const aboutmeVideo = document.getElementById('aboutmeVideo');

    aboutmeVideoModal.addEventListener('hidden.bs.modal', () => {
        aboutmeVideo.pause();
        aboutmeVideo.currentTime = 0;
    });

    aboutmeVideoModal.addEventListener('shown.bs.modal', () => {
        aboutmeVideo.play();
    });    
}
// aboutmeVideoModal functions end



//lottie homepage test
/*var animation = bodymovin.loadAnimation({
  container: document.getElementById('lottie'), // Required
  path: 'js/takes-export.json', // Required
  renderer: 'svg', // Required
  loop: true, // Optional
  autoplay: true, // Optional
  name: "Hero animation", // Name for future reference. Optional.
});*/
//lottie homepage test end