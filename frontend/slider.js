var elem = document.querySelector('input[type="range"]');

var rangeValue = function(){
  var threshold = elem.value;
  var target = document.querySelector('.value');
  if (threshold == 0){
    target.innerHTML = "low";
    elem.style.setProperty('--sliderColor', "#3AD06C");
  }
  if (threshold == 1){
    target.innerHTML = "med";
    elem.style.setProperty('--sliderColor', "#E4B635");
  }
  if (threshold == 2){
    target.innerHTML = "high";
    elem.style.setProperty('--sliderColor', "#BD1515");
  }
  // Changes the color of the slider bar to match the threshold level
  // either low medium or high
  chrome.storage.sync.set({ "thresh": threshold });
}

elem.addEventListener("input", rangeValue);

chrome.storage.sync.get(["thresh"], function(result) {
  elem.value = result.thresh;
  rangeValue();
});