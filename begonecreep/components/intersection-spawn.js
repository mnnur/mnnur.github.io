AFRAME.registerComponent('intersection-spawn', {
  schema: {
    default: '',
    parse: AFRAME.utils.styleParser.parse
  },

  init: function () {
    var data = this.data;
    var el = this.el;

    el.addEventListener(data.event, evt => {
          const me = evt.detail.mouseEvent;
  if (me && me.button !== 2) { return; }
      var spawnEl = document.createElement('a-entity');

      spawnEl.setAttribute('position', evt.detail.intersection.point);

      Object.keys(data).forEach(name => {
        if (name === 'event') { return; }
        AFRAME.utils.entity.setComponentProperty(spawnEl, name, data[name]);
      });

      el.sceneEl.appendChild(spawnEl);
    });
  }
});