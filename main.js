var issasoundbocks = document.getElementById('issasoundbocks');
function playissabocks() {
  issasoundbocks.play();
  setTimeout(playissabocks, Math.floor(Math.random * 5000));
}
playissabocks();
