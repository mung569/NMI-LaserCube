const frameCount = 110; // number of SVG files
let currentFrame = 1;

function updateFrame() {
  const animationDiv = document.getElementById('svg-animation');

  // Convert number to 4 digits with leading zeros
  const frameString = String(currentFrame).padStart(4, '0');

  animationDiv.innerHTML = `<img src="assets/svgs/nmixpo-slide/seq-${frameString}.svg" width="200">`;

  currentFrame = (currentFrame % frameCount) + 1; // loop
}

setInterval(updateFrame, 100); // change frame every 100ms
