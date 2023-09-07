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


//lottie
var vmHeroAnimation = bodymovin.loadAnimation({
  container: document.getElementById('vm-hero-lottie'), // Required
  path: 'js/lottie-files/vm-hero-lottie.json', // Required
  renderer: 'svg', // Required
  loop: true, // Optional
  autoplay: true
});
vmHeroAnimation.setSpeed(2);

var vmStreamingApps = bodymovin.loadAnimation({
  container: document.getElementById('vm-streaming-apps'), // Required
  path: 'js/lottie-files/streaming-apps.json', // Required
  renderer: 'svg', // Required
  loop: true, // Optional
  autoplay: true
});

var vmMeetingApps = bodymovin.loadAnimation({
  container: document.getElementById('vm-meeting-apps'), // Required
  path: 'js/lottie-files/meeting-apps.json', // Required
  renderer: 'svg', // Required
  loop: true, // Optional
  autoplay: true
});

var vmMetaverseApps = bodymovin.loadAnimation({
  container: document.getElementById('vm-metaverse-apps'), // Required
  path: 'js/lottie-files/metaverse-apps.json', // Required
  renderer: 'svg', // Required
  loop: true, // Optional
  autoplay: true
});
//lottie end


//user journey

//user journey end


//voice changer radios
$(document).on('click', '.voiceChangeContainer .form-check', function() {
    var voiceId = "#" + $(this).find('input').attr('id');
    $(voiceId).attr("checked", true);
    $('.voiceChangeContainer .form-check').removeClass('activeVoice');
    $('.voiceChangeContainer .form-check p').removeClass('text-background');
    $(voiceId).closest('.form-check').addClass('activeVoice');
    $(voiceId).closest('.form-check').find('p').addClass('text-background');
});
// voice changer radios end


//voice changer sample
var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'sounds/vm-voice-clean.mp3');
    currentTime = '';
    
    audioElement.addEventListener("canplay", function(){
        //$("#length").text("Duration: " + audioElement.duration + " seconds");
        //$("#source").text("Source: " + audioElement.src);
        //$("#status").text("Status: Ready to play").css("color","green");
    });
    
    audioElement.addEventListener("timeupdate", function(){
        const totalDuration = audioElement.duration; // Total duration of the audio in seconds
        currentTime = audioElement.currentTime;
        const percentage = (currentTime / totalDuration) * 100;
        $('.playing_progress').css('width', percentage + '%')
        //$("#currentTime").text("Current second: " + audioElement.currentTime + " and percentage is " + percentage);
    });

    $(document).on("click", "#voiceEngineSwitch", function() {
        if ($('#voiceEngineSwitch').prop("checked")) {
            var selectedVoice = $('.activeVoice').find('input[type="radio"]').attr('id');
            audioElement.pause();
            audioElement.setAttribute('src', 'sounds/vm-voice-' + selectedVoice + '.mp3');
            audioElement.currentTime = currentTime;
            audioElement.play();
        } else {
            audioElement.pause();
            audioElement.setAttribute('src', 'sounds/vm-voice-clean.mp3');
            audioElement.currentTime = currentTime;
            audioElement.play();
        }        
    });
        
    $(document).on("click", "#play", function() {
        $('#voiceEngineSwitch').attr('disabled', false);
        audioElement.play();
        $(this).attr('id', 'pause');
        $(this).find('img').attr('src', 'img/misc/icons/pause-icon-solo.svg');
        $(this).find('img').attr('alt', 'Pause icon');
        $('.playBtn').removeClass('playBtn').addClass('playBtnOFF');
        $('.fancy-arrow').removeClass('opacity-0').addClass('opacity-100');
        //$("#status").text("Status: Playing");
    });
    
    $(document).on("click", "#pause", function() {
        $('#voiceEngineSwitch').attr('disabled', true);
        audioElement.pause();
        $(this).attr('id', 'play');
        $(this).find('img').attr('src', 'img/misc/icons/play-icon-solo.svg');
        $(this).find('img').attr('alt', 'Play icon');
        $('.playBtnOFF').removeClass('playBtnOFF').addClass('playBtn');
        $('.fancy-arrow').removeClass('opacity-100').addClass('opacity-0')
        //$("#status").text("Status: Paused");
    });

    $(document).on('click', '.voiceChangeContainer .form-check', function() {
        /*console.log('allagi fonis');*/
        $('#voiceEngineSwitch').attr('disabled', true).prop('checked', false);
        audioElement.pause();
        $('#pause').find('img').attr('src', 'img/misc/icons/play-icon-solo.svg');
        $('#pause').find('img').attr('alt', 'Play icon');
        $('#pause').attr('id', 'play');
        $('.playBtnOFF').removeClass('playBtnOFF').addClass('playBtn');
        $('.fancy-arrow').removeClass('opacity-100').addClass('opacity-0');
        $('.playing_progress').css('width', '0%');
        audioElement.currentTime = 0;
        audioElement.setAttribute('src', 'sounds/vm-voice-clean.mp3');
        //$("#status").text("Status: Paused");
    });
        
    $('#restart').click(function() {
        audioElement.currentTime = 0;
    });

    audioElement.addEventListener('ended', function() {
        audioElement.pause();
        $('#pause').find('img').attr('src', 'img/misc/icons/play-icon-solo.svg');
        $('#pause').find('img').attr('alt', 'Play icon');
        $('.playBtnOFF').removeClass('playBtnOFF').addClass('playBtn');
        $('.fancy-arrow').removeClass('opacity-100').addClass('opacity-0');
        $('#voiceEngineSwitch').attr('disabled', true).prop('checked', false);
        $('.fancy-arrow').removeClass('opacity-100').addClass('opacity-0');
        audioElement.setAttribute('src', 'sounds/vm-voice-clean.mp3');
        $('#pause').attr('id', 'play');
    });
//voice changer sample end


//competitive analysis
$(document).on('click', '.competitive-analysis .nav-link', function(){
  var targetElement = $('.analysis-container div');
    
  // Get the current class
  var currentId = $(this).attr('id');
  // Use a switch statement to toggle classes
  switch (currentId) {
    case 'analysisBtn01':
      targetElement.removeClass('d-none');
      targetElement.addClass('d-none');
      $('.analysis-01').removeClass('d-none').addClass('d-block');
      $(this).closest('.competitive-analysis').find('.active').removeClass('active');
      $(this).addClass('active');
      break;
    case 'analysisBtn02':
      targetElement.removeClass('d-none');
      targetElement.addClass('d-none');
      $('.analysis-02').removeClass('d-none').addClass('d-block');
      $(this).closest('.competitive-analysis').find('.active').removeClass('active');
      $(this).addClass('active');
      break;
    case 'analysisBtn03':
      targetElement.removeClass('d-none');
      targetElement.addClass('d-none');
      $('.analysis-03').removeClass('d-none').addClass('d-block');
      $(this).closest('.competitive-analysis').find('.active').removeClass('active');
      $(this).addClass('active');
      break;
    case 'analysisBtn04':
      targetElement.removeClass('d-none');
      targetElement.addClass('d-none');
      $('.analysis-04').removeClass('d-none').addClass('d-block');
      $(this).closest('.competitive-analysis').find('.active').removeClass('active');
      $(this).addClass('active');
      break;
    case 'analysisBtn05':
      targetElement.removeClass('d-none');
      targetElement.addClass('d-none');
      $('.analysis-05').removeClass('d-none').addClass('d-block');
      $(this).closest('.competitive-analysis').find('.active').removeClass('active');
      $(this).addClass('active');
      break;
    default:
      break;
  }
  
});
//competitive analysis end



//drag to scroll
var isDragging = false;
var startX, scrollLeft;

$("#userJourneyScroll").mousedown(function(e) {
    e.preventDefault();
    isDragging = true;
    startX = e.pageX - $("#userJourneyScroll").offset().left;
    scrollLeft = $("#userJourneyScroll").scrollLeft();
    $(this).css("cursor", "grabbing"); // Change cursor to grabbing during drag
}).mouseup(function() {
    isDragging = false;
    $(this).css("cursor", "grab"); // Restore cursor to grab after drag
});

$(document).mousemove(function(e) {
    e.preventDefault();
    if (!isDragging) return;
    var mouseX = e.pageX - $("#userJourneyScroll").offset().left;
    var distance = mouseX - startX;
    $("#userJourneyScroll").scrollLeft(scrollLeft - distance);
}).mouseup(function() {
    isDragging = false;
});





var isDraggingWireframes = false;
var startXWireframes, scrollLeftWireframes;

$("#wireframesScroll").mousedown(function(e) {
    e.preventDefault();
    isDraggingWireframes = true;
    startXWireframes = e.pageX - $("#wireframesScroll").offset().left;
    scrollLeftWireframes = $("#wireframesScroll").scrollLeft();
    $(this).css("cursor", "grabbing"); // Change cursor to grabbing during drag
}).mouseup(function() {
    isDraggingWireframes = false;
    $(this).css("cursor", "grab"); // Restore cursor to grab after drag
});

$(document).mousemove(function(e) {
    e.preventDefault();
    if (!isDraggingWireframes) return;
    var mouseX = e.pageX - $("#wireframesScroll").offset().left;
    var distance = mouseX - startXWireframes;
    $("#wireframesScroll").scrollLeft(scrollLeftWireframes - distance);
}).mouseup(function() {
    isDraggingWireframes = false;
});
//drag to scroll end


//show research plan
function showResearchPlan() {
  $('#research').removeClass('d-none');
  $('.researchPlanBtn').addClass('d-none');
  lenis.scrollTo('#research');
}
//show research plan end

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