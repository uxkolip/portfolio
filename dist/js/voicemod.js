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

    const lenis = new Lenis()

    lenis.on('scroll', (e) => {
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

    $(window).scroll(function() {
        $(this).scrollTop() > 800 ? $("#toTop").fadeIn("fast", function() {}) : $("#toTop").fadeOut("fast")
    });



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

gsap.registerPlugin(ScrollTrigger);
gsap.to('progress', {
  value: 100,
  ease: 'none',
  scrollTrigger: { scrub: 0.3 }
});


$(document).on('click', '.voiceChangeContainer .form-check', function() {
    var voiceId = "#" + $(this).find('input').attr('id');
    $(voiceId).attr("checked", true);
    $('.voiceChangeContainer .form-check').removeClass('activeVoice');
    $('.voiceChangeContainer .form-check p').removeClass('text-white');
    $(voiceId).closest('.form-check').addClass('activeVoice');
    $(voiceId).closest('.form-check').find('p').addClass('text-white');
});


var vmHeroAnimation = bodymovin.loadAnimation({
  container: document.getElementById('vm-hero-lottie'), 
  path: 'js/lottie-files/vm-hero-lottie.json', 
  renderer: 'svg', 
  loop: true, 
  autoplay: true
});
vmHeroAnimation.setSpeed(4);

var vmStreamingApps = bodymovin.loadAnimation({
  container: document.getElementById('vm-streaming-apps'), 
  path: 'js/lottie-files/streaming-apps.json', 
  renderer: 'svg', 
  loop: true, 
  autoplay: true
});

var vmMeetingApps = bodymovin.loadAnimation({
  container: document.getElementById('vm-meeting-apps'), 
  path: 'js/lottie-files/meeting-apps.json', 
  renderer: 'svg', 
  loop: true, 
  autoplay: true
});

var vmMetaverseApps = bodymovin.loadAnimation({
  container: document.getElementById('vm-metaverse-apps'), 
  path: 'js/lottie-files/metaverse-apps.json', 
  renderer: 'svg', 
  loop: true, 
  autoplay: true
});






