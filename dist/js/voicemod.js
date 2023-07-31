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









var vmHeroAnimation = bodymovin.loadAnimation({
  container: document.getElementById('vm-hero-lottie'), 
  path: 'js/vm-lottie/vm-hero-lottie.json', 
  renderer: 'svg', 
  loop: true, 
  autoplay: false
});
vmHeroAnimation.setSpeed(4);

var vmStreamingApps = bodymovin.loadAnimation({
  container: document.getElementById('vm-streaming-apps'), 
  path: 'js/vm-lottie/streaming-apps.json', 
  renderer: 'svg', 
  loop: true, 
  autoplay: false
});

var vmMeetingApps = bodymovin.loadAnimation({
  container: document.getElementById('vm-meeting-apps'), 
  path: 'js/vm-lottie/meeting-apps.json', 
  renderer: 'svg', 
  loop: true, 
  autoplay: false
});

var vmMetaverseApps = bodymovin.loadAnimation({
  container: document.getElementById('vm-metaverse-apps'), 
  path: 'js/vm-lottie/metaverse-apps.json', 
  renderer: 'svg', 
  loop: true, 
  autoplay: false
});

