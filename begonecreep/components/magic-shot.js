AFRAME.registerComponent('magic-shot', {
  schema: {
    target: { type: 'vec3' },
    speed: { type: 'number', default: 10 }
  },

  init() {
    this.start = this.el.object3D.position.clone();
    this.dir = new THREE.Vector3(
      this.data.target.x - this.start.x,
      this.data.target.y - this.start.y,
      this.data.target.z - this.start.z
    ).normalize();

    
    this.tmpVec = new THREE.Vector3();
  },

  tick(_, dt) {
    const step = (dt / 1000) * this.data.speed;
    const pos = this.el.object3D.position;

    pos.addScaledVector(this.dir, step);

    
    const creepers = document.querySelectorAll('[creeper]');
    for (let c of creepers) {
      const cpos = c.object3D.getWorldPosition(this.tmpVec);
      if (pos.distanceTo(cpos) < 1) {   
        c.emit('hit', { damage: 1 });     
        this.el.parentNode.removeChild(this.el);
        return;
      }
    }

    
    if (pos.distanceTo(this.data.target) < 0.1) {
      this.el.parentNode.removeChild(this.el);
    }
  }
});
