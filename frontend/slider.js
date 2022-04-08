var elem = document.querySelector('input[type="range"]');

var rangeValue = function(){
  var newValue = elem.value;
  var target = document.querySelector('.value');
  if (newValue == 0){
    target.innerHTML = "low";
    elem.style.setProperty('--sliderColor', "#3AD06C");
  }
  if (newValue == 1){
    target.innerHTML = "med";
    elem.style.setProperty('--sliderColor', "#E4B635");
  }
  if (newValue == 2){
    target.innerHTML = "high";
    elem.style.setProperty('--sliderColor', "#BD1515");
  }
  // Changes the color of the slider bar to match the threshold level
  // either low medium or high
}

elem.addEventListener("input", rangeValue);

// TODO: Add this data to a local source so it remains the users decision