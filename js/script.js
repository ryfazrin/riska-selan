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

function scrollToBottom(timedelay=0) {
  var scrollId;
  var height = 0;
  var minScrollHeight = screen.height;
  scrollId = setInterval(function () {
      if (height <= document.body.scrollHeight) {
          window.scrollBy(0, minScrollHeight);
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