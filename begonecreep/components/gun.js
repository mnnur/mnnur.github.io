AFRAME.registerComponent('gun', {
    schema: {
        speed: { type: 'number', default: 2 },
        event: { default: 'click' }   
    },

    init: function () {
        var data = this.data;
        var el = this.el;

        el.addEventListener(data.event, evt => {
            const me = evt.detail.mouseEvent;
            if (me && me.button !== 0) return;

  const hit = evt.detail.intersection.point;

  const bolt = document.createElement('a-entity');
  bolt.setAttribute('geometry', 'primitive: sphere; radius: 0.1');
  bolt.setAttribute('material', 'color: cyan; emissive: cyan');
  
  
  const origin = el.object3D.getWorldPosition(new THREE.Vector3());
  bolt.setAttribute('position', origin);

  
  bolt.setAttribute('magic-shot', `target: ${hit.x} ${hit.y} ${hit.z}; speed: 12`);

  el.sceneEl.appendChild(bolt);
          const sfx = document.querySelector('#gunSound');
        if (sfx) {
            sfx.currentTime = 0;
            sfx.play();
        }

        });
    },
});
