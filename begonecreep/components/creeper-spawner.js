AFRAME.registerComponent('creeper-spawner', {
  schema: {
    interval: { type: 'number', default: 5000 }, 
    radius:   { type: 'number', default: 10 }    
  },

  init() {
    this.nextSpawn = 0;
    this.player = document.querySelector('#player');
  },

  tick(time) {
    if (!this.player) return;

    if (time > this.nextSpawn) {
      this.spawnCreeper();
      this.nextSpawn = time + this.data.interval;
    }
  },

  spawnCreeper() {
    const angle = Math.random() * Math.PI * 2;
    const r = this.data.radius;

    const px = this.player.object3D.position.x;
    const pz = this.player.object3D.position.z;

    const x = px + Math.cos(angle) * r;
    const z = pz + Math.sin(angle) * r;

    
    const c = document.createElement('a-entity');
    c.setAttribute('position', `${x} 1 ${z}`);
    c.setAttribute('creeper', '');
    c.setAttribute('gltf-model', '#creeper');

    this.el.sceneEl.appendChild(c);
  }
});
