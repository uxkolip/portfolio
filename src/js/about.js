const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

function checkiftooltip() {
    $(window).width() > 768 ? ($('[data-toggle="tooltip"]').tooltip(), 
    $("[data-toggle='tooltip']").tooltip(),
    $('[data-toggle="tooltip"]').tooltip("enable")) : $('[data-toggle="tooltip"]').tooltip("disable")
}

$(document).ready(function() {
    checkiftooltip();

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
    const lenis = new Lenis()

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
        lenis.scrollTo(this.getAttribute('href'));
        setTimeout(function() {
          showAnim.reverse();
        }, 3050);
      });
    })

    document.querySelectorAll('[data-target^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        lenis.scrollTo(this.getAttribute('data-target'));
        setTimeout(function() {
          showAnim.reverse();
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
/*gsap.registerPlugin(ScrollTrigger);
gsap.to('progress', {
  value: 100,
  ease: 'none',
  scrollTrigger: { scrub: 0.3 }
});*/
// page progress end


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


//get weather from https://home.openweathermap.org


//http://api.openweathermap.org/geo/1.0/direct?q=Athens,ATH,GR&limit={limit}&appid=572411f622250c0eadb58134c8a65cb5
//http://api.openweathermap.org/geo/1.0/direct?q=Athens&limit=5&appid=572411f622250c0eadb58134c8a65cb5

//get weather from https://home.openweathermap.org end

// workspaces scroller
/*gsap.registerPlugin(ScrollTrigger);

const cards = $(".design-card");

gsap.set(cards, {
    position: "absolute",
    opacity: 1,
    scale: .1,
    yPercent: 100,
    xPercent: 0,
    rotate: 0,
    filter: 'blur(10px)'
});

gsap.to(".design-card", {
    yPercent: 0,
    xPercent: 0,
    stagger: 1000,
    duration: 1400,
    opacity: 1,
    rotate: 0,
    scale: 1,
    filter: 'blur(0px)',
    scrollTrigger: {
        trigger: ".design-cards",
        pin: true,
        scrub: true,
        start: "-20%",
        end: "5900px"
    },
    onComplete: self => {
       $(this).fadeOut();
  },
});*/
// workspaces scroller end