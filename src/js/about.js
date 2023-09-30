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
    checkiftooltip();
    //checkifLenis();
    lenis.start();
    $("html").css("opacity", 1);

    //get athens' temp
    $.get("https://api.openweathermap.org/data/2.5/weather?q=Athens&units=metric&appid=cc645b18d5f5a4906bf8bdc7f9137124", function(athData) {
        setTimeout(function() {
            var temp = athData.main.temp
            var truncatedTemp = temp.toFixed(0);
            $('#athTemp').html(truncatedTemp + '°C')
        }, 300);
    });

    //get amsterdam's temp
    $.get("https://api.openweathermap.org/data/2.5/weather?q=Amsterdam&units=metric&appid=cc645b18d5f5a4906bf8bdc7f9137124", function(amsData) {
        setTimeout(function() {
            var temp = amsData.main.temp
            var truncatedTemp = temp.toFixed(0);
            $('#amsTemp').html(truncatedTemp + '°C')
        }, 100);
    });

    //end temps

}); 

$(window).resize(function() {
    checkiftooltip();
});

//smooth scroll
lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)

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
    bootstrap.Tooltip.getInstance('.close-button').dispose();
    setTimeout(function() {
      [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
    }, 3050);
  });
})

document.querySelectorAll('[data-target^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
    lenis.scrollTo(this.getAttribute('data-target'));
    bootstrap.Tooltip.getInstance('.close-button').dispose();
    setTimeout(function() {
      [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
    }, 3050);
  });
})

//scroll toTop
$(window).scroll(function() {
  $(this).scrollTop() > 800 ? $("#toTop").fadeIn("fast", function() {}) : $("#toTop").fadeOut("fast")
});
//scroll toTop end

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
});
// page progress end

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
  gsap.set(".anim01, .anim02, .anim03, .anim04, .anim05", { opacity: "0" });
  //console.log("Window is at the top.");
} else {
  gsap.set(".anim01, .anim02, .anim03, .anim04, .anim05", { opacity: "1" });
  //console.log("Window is not at the top.");
} 

const timeline = gsap.timeline();

timeline
  .add(gsap.to(".anim01", { delay: 1, duration: 1, opacity: 1 }))
  .add(gsap.to(".anim02", { duration: 1, opacity: 1 }), "-=0.3")
  .add(gsap.to(".anim03", { duration: 1, opacity: 1 }), "-=0.3")
  .add(gsap.to(".anim04", { duration: 1, opacity: 1 }), "-=0.3")
  .add(gsap.to(".anim05", { duration: 1, opacity: 1 }), "-=0.3");
//homepage animations end


// workspaces scroller
/*const cards = document.querySelectorAll(".deskImg");

gsap.set(cards, {
  position: 'absolute',
  opacity: 0,
  filter: 'blur(4px)',
  yPercent: 0,
  xPercent: 0
});

const cardTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: '.deskContainer',
    pin: true,
    start: "center center",
    end: "+=300%", // Adjust the end value for a longer animation
    scrub: true
  }
});

cards.forEach((card, index) => {
  var currentCard = `${index + 1}`;
  cardTimeline.to(card, {
    opacity: 1,
    filter: 'blur(0px)',
    stagger: 130,
    duration: 10,
    onComplete: () => {
      //console.log('the card that was completed was', card, currentCard)
      gsap.to(card, {
        opacity: 0,
        stagger: 5,
        scrub: true,
        onComplete: () => {
          console.log('Card faded out:', card);
        }
      });
    }
  });
});*/
// workspaces scroller end


  //homepage design process gsock
/*gsap.registerPlugin(ScrollTrigger);

const cards = document.querySelectorAll(".desk-card");

// Set the initial position of each card
cards.forEach((card, index) => {
  gsap.set(card, {
    position: 'absolute',
    opacity: 0,
    filter: 'blur(16px)',
    x: gsap.utils.random(-100, 100), // Randomly offset the X position
    y: gsap.utils.random(-100, 100), // Randomly offset the Y position
    scale: .3
  });
});

const cardTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: '.design-cards', // The wrapper element that contains the panels
    pin: true,
    start: "-15%",
    end: "+=600%",
    scrub: true // Enable "scrubbing" so that the animations are smoothly reversed as the user scrolls back up
  },
});

cards.forEach((card, index) => {
  var currentCard = `${index + 1}`;
  cardTimeline.to(card, {
    filter: 'blur(0px)',
    translateZ: 15,
    scale: 1,
    opacity: 1,
    stagger: 1,
    duration: 8,
    onComplete: () => {
      console.log(`Card ${index + 1} timeline completed`);    
    }
  });
});*/


window.onload = () => {
  gsap.set("#scrollDist", {
    width: "100%",
    height: gsap.getProperty("#app", "height"),
    onComplete: () => {
      gsap.set("#app, #imgGroup", {
        height: "100%",
        width: "100%",
        opacity: 1,
        position: "fixed",
        top: 20,
        left: 0,
        perspective: 300
      });
    }
  });

  gsap.set("#app img", {
    position: "absolute",
    attr: {
      id: (iterator, target, array) => {
        initImage(target, iterator);
        return "img" + iterator;
      }
    }
  });

  const tl = gsap
    .timeline({
      defaults: {
        duration: 1
      },
      //  onUpdate: ()=>{},
      scrollTrigger: {
        trigger: "#scrollDist",
        start: "top top",
        end: "bottom bottom",
        scrub: 1
      }
    })
    .fromTo(
      "#txt1",
      {
        scale: 0.4,
        transformOrigin: "50%"
      },
      {
        scale: 2,
        opacity: 0.03
      },
      0
    )
    .to(
      "#txt1 path",
      {
        duration: 0.3,
        drawSVG: 0,
        stagger: 0.05,
        ease: "power1.in"
      },
      0
    )
    // Images
    .fromTo(
      ".imgBox",
      { z: -5000 },
      { z: 350, ease: "none", stagger: -0.3 },
      0.3
    )
    .fromTo(".imgBox img", { scale: 3 }, { scale: 1.15, stagger: -0.3 }, 0.3)
    .to(".imgBox", { duration: 0, pointerEvents: "auto", stagger: -0.3 }, 0.5)
    .from(
      ".imgBox img",
      { duration: 0.3, opacity: 0, stagger: -0.3, ease: "power1.inOut" },
      0.3
    )
    .to(
      ".imgBox img",
      { duration: 0.1, opacity: 0, stagger: -0.3, ease: "expo.inOut" },
      1.2
    )
    .to(".imgBox", { duration: 0, pointerEvents: "none", stagger: -0.3 }, 1.27)
    // End Text
    .add("end")
    .fromTo(
      "#txt2",
      {
        scale: 0.1,
        transformOrigin: "50%"
      },
      {
        scale: 0.6,
        ease: "power3"
      },
      "end-=0.2"
    )
    .from(
      "#txt2 path",
      {
        duration: 0.4,
        drawSVG: 0,
        stagger: 0.15,
        ease: "sine.inOut"
      },
      "end-=0.2"
    );
};

function initImage(target, iterator) {
  const box = document.createElement("div");
  const imgGroup = document.querySelector("#imgGroup");
  box.appendChild(target);
  imgGroup.appendChild(box);
  gsap.set(box, {
    pointerEvents: "none",
    position: "absolute",
    attr: {
      id: "box" + iterator,
      class: "imgBox"
    },
    width: target.width,
    height: target.height,
    borderRadius: "24px",
    overflow: "hidden",
    scale: "1.2",
    top: "50%",
    left: "50%",
    xPercent: -50,
    yPercent: -50,
    x: target.dataset.x,
    y: target.dataset.y,
    perspective: 500
  });
  
  target.onmouseover = (e)=>{
    $('#DeskAlt').html(e.srcElement.alt)    
    $('#DeskAlt').css('opacity', 1);
  }

  target.onmouseout = (e)=>{
    $('#DeskAlt').css('opacity', 0);
  }
}

if (ScrollTrigger.isTouch === 1) {
  gsap.set(".imgBox", { x: 0, y: 0 });
} else {
  window.addEventListener("mousemove", (e) => {
    gsap.to(".imgBox", {
      xPercent: (-e.clientX / innerWidth) * 100,
      yPercent: -25 - (e.clientY / innerHeight) * 50,
      rotateX: 4 - (e.clientY / innerHeight) * 8,
      rotateY: -4 + (e.clientX / innerWidth) * 8
    });
    
    gsap.to(".imgBox img", {
      xPercent: (-e.clientX / innerWidth) * 10,
      yPercent: -5 - (e.clientY / innerHeight) * 10
    });
    
  });
}

//homepage design process gsock end