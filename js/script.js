// audio
function play() {
	var audio = document.getElementById("audio");
	audio.play();
}

// Animate On Scroll Library : https://michalsnik.github.io/aos/
AOS.init({
  delay: 200,
  duration: 1000
});

function scrollToBottom(timedelay = 0) {
  let scrollId;
  let height = 0;
  let minScrollHeight = window.innerHeight; // 100vh
  
  scrollId = setInterval(function () {
      if (height <= document.body.scrollHeight) {
          window.scrollBy(0, minScrollHeight);
          console.log(minScrollHeight);
      }
      else {
          clearInterval(scrollId);
      }
      height += minScrollHeight;
  }, timedelay);           
}

// setInterval(() => {
scrollToBottom(2000)
// }, 1000)