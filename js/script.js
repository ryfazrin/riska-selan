let audio = document.getElementById("audio");

// audio
function play() {
	audio.play();
  audio.ontimeupdate = (event) => {
    let audioTime = document.getElementById("audioTime");
    audioTime.innerHTML = audio.currentTime;
    if (Math.floor(audio.currentTime) === 8) {
      scrollToBottom()
    }
    console.log('The currentTime attribute has been updated. Again.');
  };
  // scrollToBottom(2000);
}

let audioPause = document.getElementById("audioPause");
audioPause.onclick = (event) => {
  audio.pause();
}

let audioPlay = document.getElementById("audioPlay");
audioPlay.onclick = (event) => {
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

  if (height <= document.body.scrollHeight) {
    window.scrollBy(0, minScrollHeight);
    console.log(minScrollHeight);
  }
  else {
      clearInterval(scrollId);
  }

height += minScrollHeight;
  
  // scrollId = setInterval(function () {
  //     if (height <= document.body.scrollHeight) {
  //         window.scrollBy(0, minScrollHeight);
  //         console.log(minScrollHeight);
  //     }
  //     else {
  //         clearInterval(scrollId);
  //     }
  //     height += minScrollHeight;
  // }, timedelay);           
}

// setInterval(() => {
// }, 1000)