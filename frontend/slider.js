var elem = document.querySelector('input[type="range"]');

var rangeValue = function(){
  var newValue = elem.value;
  var target = document.querySelector('.value');
  if (newValue == 0){
    target.innerHTML = "low";
  }
  if (newValue == 1){
    target.innerHTML = "med";
  }
  if (newValue == 2){
    target.innerHTML = "high";
  }
}

elem.addEventListener("input", rangeValue);