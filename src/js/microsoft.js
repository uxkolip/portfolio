function checkiftooltip() {

    $(window).width() > 768 ? ($('[data-toggle="tooltip"]').tooltip(), 
    $('[data-toggle="tooltip"]').tooltip("enable")) : $('[data-toggle="tooltip"]').tooltip("disable")

    $("[data-toggle='tooltip']").tooltip();

    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

}

$(document).ready(function() {
    checkiftooltip();
}); 

$(window).resize(function() {
    checkiftooltip();
});

//smooth scroll
/*    const lenis = new Lenis()

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
        lenis.scrollTo(this.getAttribute('href'))
      });
    })

    document.querySelectorAll('[data-target^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        lenis.scrollTo(this.getAttribute('data-target'))
      });
    })

    //scroll toTop
    $(window).scroll(function() {
        $(this).scrollTop() > 800 ? $("#toTop").fadeIn("fast", function() {}) : $("#toTop").fadeOut("fast")
    });*/
//scroll toTop end
 

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

//old - new switch
 $(document).on("click", "#oldNewSwitch", function() {
    // Check if the switch is checked or not
    if ($(this).prop("checked")) {
        // If checked, change the image source to image2.jpg
        $("#oldNewImageContainer").attr("src", "img/misc/elements/power-automate-desktop.jpg");
        $("#oldNewImageContainer").attr("alt", "Screenshot from Power Automate Desktop");
    } else {
        // If not checked, change the image source back to image1.jpg
        $("#oldNewImageContainer").attr("src", "img/misc/elements/winautomation-old.jpg");
        $("#oldNewImageContainer").attr("alt", "Screenshot from WinAutomation");
    }
});
//old - new switch end


 //accessibility switch
 $(document).on("click", "#accessibilitySwitch", function() {
    // Check if the switch is checked or not
    if ($(this).prop("checked")) {
        // If checked, change the image source to image2.jpg
        $("#accessibilityImgContainer").attr("src", "img/misc/elements/pad-high-contrast.png");
        $("#accessibilityImgContainer").attr("alt", "High contrast version");
    } else {
        // If not checked, change the image source back to image1.jpg
        $("#accessibilityImgContainer").attr("src", "img/misc/elements/pad-no-high-contrast.png");
        $("#accessibilityImgContainer").attr("alt", "Regular version");
    }
});
//accessibility switch end