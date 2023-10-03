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
    lenis.start();
    $("body").removeClass("opacity-0");
    $("html").css("opacity", 1);

    changingH1s();  

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

document.querySelectorAll('[data-target^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
    lenis.scrollTo(this.getAttribute('data-target'));
    bootstrap.Tooltip.dispose();
    setTimeout(function() {
      [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
    }, 3050);
  });
})


//scroll toTop visibility
$(window).scroll(function() {
  $(this).scrollTop() > 800 ? $("#toTop").fadeIn("fast", function() {}) : $("#toTop").fadeOut("fast")
});
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
gsap.registerPlugin(ScrollTrigger);

setTimeout(function() {
  gsap.to('.progress-circle', {
    strokeDashoffset: 0,
    ease: 'none',
    scrollTrigger: { scrub: 0.3 },
    onComplete: self => {
        $('.icon-wrap').addClass('bg-secondary');
        $('.icon--close path').css({ fill: '#3A2D52' })
    },
    onUpdate: self => {
        if ($('.progress-circle').css('stroke-dashoffset') !== "0px" ) {
            $('.icon-wrap').removeClass('bg-secondary');
            $('.icon--close path').css({ fill: '#3A2D52' })
        } 
    }
  });  
}, 300);


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
            $('.voicemodPanel').addClass('btn-link').removeClass('btn-outline-primary');
            $('.metaPanel').addClass('btn-outline-primary').removeClass('btn-link');
            break;
          case "3":
            //console.log("msft panel is complete");
            $("#voicemodPanel").css('scale', '.86');
            $("#metaPanel").css('scale', '.94').css('marginTop', "-55px");
            $('.metaPanel').addClass('btn-link').removeClass('btn-outline-primary');
            $('.msftPanel').addClass('btn-outline-primary').removeClass('btn-link');
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
            $('.voicemodPanel').addClass('btn-outline-primary').removeClass('btn-link');
            $('.metaPanel').addClass('btn-link').removeClass('btn-outline-primary');
            break;
          case "2":
            //console.log("meta panel is reverse-complete");
            $("#voicemodPanel").css('scale', '1');
            $('.voicemodPanel').addClass('btn-link').removeClass('btn-link');
            $('.metaPanel').addClass('btn-link').removeClass('btn-link');
            break;
          case "3":
            //console.log("msft panel is reverse-complete");
            $("#metaPanel").css('scale', '1').css('marginTop', "0px");
            $('.metaPanel').addClass('btn-outline-primary').removeClass('btn-link');
            $('.msftPanel').addClass('btn-link').removeClass('btn-outline-primary');
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
    var getToValue = () => -($('.testimonialCard').width() * 6.2);

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


//h1 text randomizer
function changingH1s() {
  var sentences = ["Crafting products with a purpose.", "User-focused experiences.", "Designing products with user insights."];
  var currentIndex = 0;
  var h1Element = $("#changing-text");

      function changeText() {
        var currentSentence = sentences[currentIndex];
        var words = currentSentence.split(" ");
        var spanElements = words.map(function(word) {
          return $("<span>").text(word + " ");
        });

        h1Element.fadeTo("slow", 0, function() {
          h1Element.empty().append(spanElements);
          $(spanElements).each(function(index) {
            $(this).css("opacity", 0).delay(index * 200).fadeTo("slow", 1);
            h1Element.fadeTo("slow", 1);
          });
        });

        currentIndex = (currentIndex + 1) % sentences.length;
      }

  setInterval(changeText, 7000);

};
//h1 text randomizer


//navbar dropdown show on hover
let trigger = document.getElementById('worksDropdown');

document.getElementById('worksDropdown').addEventListener("mouseover", ()=>{
    if (!$(trigger).hasClass('show')) {
      bootstrap.Dropdown.getOrCreateInstance(trigger).toggle()
    }
});

document.getElementById('dropdown-menu').addEventListener("mouseleave", ()=>{
    bootstrap.Dropdown.getOrCreateInstance(trigger).toggle()
    if (!$(trigger).hasClass('show')) {
      $("#ddImgContainer").attr("src", "img/misc/illustrations/spying.svg");
      $("#ddImgContainer").attr("alt", "Spying illustration");
    }
});

$(".ddLink").on("mouseover", function () {
  var className = $(this).attr("class").split(" ")[1]; // Get the second class name
  switch (className) {
    case "voicemodDD":
      $("#ddImgContainer").attr("src", "img/misc/logos/voicemod-logo-card.svg");
      $("#ddImgContainer").attr("alt", "Voicemod logo");
      break;
    case "metaDD":
      $("#ddImgContainer").attr("src", "img/misc/logos/meta-logo-card.svg");
      $("#ddImgContainer").attr("alt", "Meta logo");
      break;
    case "msftDD":
      $("#ddImgContainer").attr("src", "img/misc/logos/msft-logo-card.svg");
      $("#ddImgContainer").attr("alt", "Microsoft logo");
      break;
    default:
      break;
  }
});
//navbar dropdown show on hover end