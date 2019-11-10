var d, message = "Hello, world!", position = 0;

function myFunction() {
  d = new Date();
  document.getElementById("test-id").innerHTML = d;
}

function goForward() {
  position++;
  if (position > 12) {
    position = 0;
  }
  document.getElementById("position-display").innerHTML = position;
  document.getElementById("pitch-deck").className = "playing";
}

function goBack() {
  position--;
  if (position < 0) {
    position = 12;
  }
  document.getElementById("position-display").innerHTML = position;
}
