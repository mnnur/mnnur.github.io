AFRAME.registerSystem('score', {
  init() {
    this.value = 0;
    this.ui = document.querySelector('#scoreUI');
    this.updateUI();
  },

  updateUI() {
    if (this.ui) {
      this.ui.setAttribute('text', 'value: Score: ' + this.value);
    }
  },

  add(points = 1) {
    this.value += points;
    this.updateUI();
  },

  setScore(val) {
    this.value = val;
    this.updateUI();
  }
});
