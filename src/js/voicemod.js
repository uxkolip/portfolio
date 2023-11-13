const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
const lenis = new Lenis();

lenis.stop();

function checkiftooltip() {
    $(window).width() > 768 ? ($('[data-toggle="tooltip"]').tooltip(), 
    $('[data-toggle="tooltip"]').tooltip("enable")) : $('[data-toggle="tooltip"]').tooltip("disable"),
    $("[data-toggle='tooltip']").tooltip();
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

    var opporunityHeight = $('.opportunityHeight').outerHeight();
    var dottedBGHeight = $('.dotted-bg').outerHeight();
    var dottedBGHeight2 = $('.dotted-bg2').outerHeight();
    setTimeout(function() {
      $('body').append("<style> .opporunityAfter:after { height: "+ opporunityHeight +"px; } .dotted-bg:after { height: "+ dottedBGHeight +"px; } .dotted-bg2:after { height: "+ dottedBGHeight2 +"px; } </style>");
    }, 700);

    checkiftooltip();
    lenis.start();
    $("body").removeClass("opacity-0");
    $("html").css("opacity", 1);
}); 

$(window).resize(function() {
    checkiftooltip();

    var opporunityHeight = $('.opportunityHeight').outerHeight();
    var dottedBGHeight = $('.dotted-bg').outerHeight();
    $('body').append("<style> .opporunityAfter:after { height: "+ opporunityHeight +"px; } .dotted-bg:after { height: "+ dottedBGHeight +"px; } </style>");

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
    $(this).scrollTop() > 800 ? $("#toTop").fadeIn("fast") : $("#toTop").fadeOut("fast")
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
    //$(this).css("cursor", "grabbing"); // Change cursor to grabbing during drag
    $(this).removeClass("grab");
    $(this).addClass("grabbing");
}).mouseup(function() {
    isDraggingImprovements = false;
    //$(this).css("cursor", "grab"); // Restore cursor to grab after drag
    $(this).addClass("grab");
    $(this).removeClass("grabbing");
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
    //$(this).css("cursor", "grabbing"); // Change cursor to grabbing during drag
    $(this).removeClass("grab");
    $(this).addClass("grabbing");
}).mouseup(function() {
    isDraggingImprovements = false;
    //$(this).css("cursor", "grab"); // Restore cursor to grab after drag
    $(this).addClass("grab");
    $(this).removeClass("grabbing");
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


// horizontal scroll buttons scrollableDivImprovements
function checkScrollableLeftSpace($scrollableDiv) {
  const $btnLeft = $scrollableDiv.parent().find('.btn-left');

  if ($scrollableDiv.scrollLeft() <= 0) {
    $btnLeft.addClass('d-none');
  } else {
    $btnLeft.removeClass('d-none');
  }
}

function checkScrollableRightSpace($scrollableDiv) {
  const $btnRight = $scrollableDiv.parent().find('.btn-right');
  const maxScrollLeft = $scrollableDiv.get(0).scrollWidth - $scrollableDiv.width();

  if ($scrollableDiv.scrollLeft() >= maxScrollLeft) {
    $btnRight.addClass('d-none');
  } else {
    $btnRight.removeClass('d-none');
  }
}

// Function to handle manual scrolling
function handleManualScroll() {
  const $scrollableDiv = $(this);
  checkScrollableLeftSpace($scrollableDiv);
  checkScrollableRightSpace($scrollableDiv);
}

// Event listener for manual scrolling
$('.scrollableArea').on('scroll', handleManualScroll);

// Event handler for left button click
$('.btn-left').click(function() {
  const $scrollableDiv = $(this).parent().find('.scrollableArea');
  $scrollableDiv.animate({
    scrollLeft: '-=300px'
  }, 'fast');
  checkScrollableLeftSpace($scrollableDiv);
  checkScrollableRightSpace($scrollableDiv);
});

// Event handler for right button click
$('.btn-right').click(function() {
  const $scrollableDiv = $(this).parent().find('.scrollableArea');
  $scrollableDiv.animate({
    scrollLeft: '+=300px'
  }, 'fast');
  checkScrollableLeftSpace($scrollableDiv);
  checkScrollableRightSpace($scrollableDiv);
});

// Call these functions once to initialize the button visibility for all .scrollableArea elements
$('.scrollableArea').each(function() {
  checkScrollableLeftSpace($(this));
  checkScrollableRightSpace($(this));
});
// horizontal scroll buttons scrollableDivImprovements end


//page animations
if ($(window).scrollTop() === 0) {
  gsap.set(".anim01, .anim02, .anim03, .anim04, .anim05, .anim06", { opacity: "0" });
  //console.log("Window is at the top.");
} else {
  gsap.set(".anim01, .anim02, .anim03, .anim04, .anim05, .anim06", { opacity: "1" });
  //console.log("Window is not at the top.");
}


const timeline = gsap.timeline();

timeline
  .add(gsap.to(".anim01", { delay: 1, duration: 1, opacity: 1 }))
  .add(gsap.to(".anim02", { duration: 1, opacity: 1 }), "-=0.3")
  .add(gsap.to(".anim03", { duration: 1, opacity: 1 }), "-=0.3")
  .add(gsap.to(".anim06", { duration: 1, opacity: 1 }), "-=0.3")
  .add(gsap.to(".anim04", { duration: 1, opacity: 1 }), "-=0.3")
  .add(gsap.to(".anim05", { duration: 1, opacity: 1 }), "-=0.3");
//page animations end

// checks if elem is in view
function isScrolledIntoView(elem)
{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    if ((elemBottom <= docViewBottom) && (elemTop >= docViewTop)) {
      return true;
    }
}
// checks if elem is in view end

//progress width animation
$(document).on('scroll', function() {
  if (isScrolledIntoView($('.progress01') || $('.progress03'))) {
      $('.progress01').css('width', '14.4%').find('img').css('opacity', 1);
      setTimeout(function() {
        $('.progress02').css('width', '24.6%').find('img').css('opacity', 1);
      }, 500);
      setTimeout(function() {
        $('.progress03').css('width', '21.2%').find('img').css('opacity', 1);
      }, 700);
  }

  if (isScrolledIntoView($('.progress04') || $('.progress07'))) {
      $('.progress04').css('width', '24.6%').find('img').css('opacity', 1);
      setTimeout(function() {
        $('.progress05').css('width', '5%').find('img').css('opacity', 1);
      }, 300);
      setTimeout(function() {
        $('.progress06').css('width', '21.2%').find('img').css('opacity', 1);
      }, 600);
      setTimeout(function() {
        $('.progress07').css('width', '2%').find('img').css('opacity', 1);
      }, 900);
  }  
});
//progress width animation end


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
    case "accusonusDD":
      $("#ddImgContainer").attr("src", "img/misc/logos/accusonus-logo.svg");
      $("#ddImgContainer").attr("alt", "accusonus logo");
      break;
    default:
      break;
  }
});
//navbar dropdown show on hover end