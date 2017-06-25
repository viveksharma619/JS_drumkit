(function() {
  function playsound(e) {
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    if (!audio) {
      // stop the functionality if wrnf key is pressed
      return;
    }
    audio.currentTime = 0; // revind it to the start
    audio.play();
    key.classList.add("playing");
  }

  function removeTransition(e) {
    if (e.propertyName !== "transform") return; // skip if it is not a transform
    this.classList.remove("playing");
  }

  const keys = Array.from(document.querySelectorAll(".key"));
  keys.forEach(key => key.addEventListener("transitionend", removeTransition));
  window.addEventListener("keydown", playsound);
})();
