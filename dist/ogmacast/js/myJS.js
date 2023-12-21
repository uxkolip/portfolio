$(document).ready(function() {
  $('[data-toggle="tooltip"]').tooltip();
  $('[data-toggle="popover"]').popover();
  $('#setup').tab('show');

  if (location.href.indexOf('firstRun') > -1) {
    console.log('vrethike');
    $('#introCurtain').removeClass('d-none');
    $('#mainContent').addClass('blurred');
    $('#dropdownMenuButton').addClass('d-none');
  }

});

$('#settingsModal').on('hidden.bs.modal', function () {
  $('#advancedSettingsCollapse, #keybindsCollapse, #aboutCollapse').collapse("hide");
});

$(document).on('click', '.closeSettings', function(){
  $('#mainContent').removeClass('blurred');
  $('#settingsContent').addClass('d-none');
});

function reCalibrate(step) {
  $('.calibrationStep2, .calibrationStep3, .calibrationStep4, .initialSetup').addClass('d-none');
  $('#micCalibration').removeClass('d-none');
  $('#mainContent').addClass('blurred');
  switch(step) {
      case 'step1':
      $('.calibrationStep1, .smallLogo').removeClass('d-none');
    break;
      case 'step2':
      $('.calibrationStep1').addClass('d-none');
      $('.calibrationStep2').removeClass('d-none');
      setTimeout(function() {
        reCalibrate('step3');
      }, 4000);
    break;
      case 'step3':
      $('.calibrationStep2').addClass('d-none');
      $('.calibrationStep3').removeClass('d-none');
      setTimeout(function() {
        reCalibrate('step4');
      }, 4000);
    break;
    case 'step4':
      $('.calibrationStep3').addClass('d-none');
      $('.calibrationStep4').removeClass('d-none');
    break;
  }
}

function closeCalibration() {
  $('#micCalibration').addClass('d-none');
  $('#mainContent').removeClass('blurred');
  $('#introCurtain').addClass('d-none');
  $('#dropdownMenuButton').removeClass('d-none');
}

function settingsMode(accordion) {
  switch(accordion) {
      case 'settings':
      $('#advancedSettingsCollapse').collapse("show");
    break;
      case 'keybinds':
      $('#keybindsCollapse').collapse("show");
    break;
      case 'about':
      $('#aboutCollapse').collapse("show");
    break;
  }

  setTimeout(function() {
    $('#dropdownMenuButton').dropdown('hide');
    $('#mainContent').addClass('blurred');
    $('#settingsContent').removeClass('d-none');
  }, 250);

  }

const rangeInputs = document.querySelectorAll('input[type="range"]')

function handleInputChange(e) {
  let target = e.target
  if (e.target.type !== 'range') {
    target = document.getElementById('range')
  } 
  const min = target.min
  const max = target.max
  const val = target.value

    target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'
}

rangeInputs.forEach(input => {
  input.addEventListener('input', handleInputChange)
})

$('.dropdown-menu').click(function(e) {
    e.stopPropagation();
});