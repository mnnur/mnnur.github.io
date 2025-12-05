AFRAME.registerComponent('creeper', {
    schema: {
        speed: { type: 'number', default: 2 }
    },

    init: function () {
        const el = this.el;

        
        if (!el.hasAttribute('dynamic-body')) {
            el.setAttribute('dynamic-body', 'shape: box;');
        }

        el.addEventListener('body-loaded', () => {
            if (el.body) {
                el.body.angularFactor.set(0, 1, 0); 
            }
        });

        
        this.player = document.querySelector('#player');

        
        el.addEventListener('hit', () => {
            this.die();
        });
    },

    die() {
        const el = this.el;

        
        const sfx = document.querySelector('#creeperDeath');
        if (sfx) {
            sfx.currentTime = 0;
            sfx.play();
        }

        
        el.sceneEl.systems.score.add(1);

        
        if (el.body) {
            el.body.velocity.set(0, 3, 0);
        }

        
        setTimeout(() => {
            if (el.parentNode) el.parentNode.removeChild(el);
        }, 200);
    },

    tick: function (t, dt) {
        if (!this.player || !this.el.body) return;

        const body = this.el.body;
        const pos = this.el.object3D.position;
        const ppos = this.player.object3D.position;

        if(pos.y < -10) {
            this.die();
            return;
        }

        const dir = new CANNON.Vec3(
            ppos.x - pos.x,
            0,
            ppos.z - pos.z
        );
        dir.normalize();

        body.velocity.x = dir.x * this.data.speed;
        body.velocity.z = dir.z * this.data.speed;

        
        const lookPos = new THREE.Vector3(ppos.x, pos.y, ppos.z);
        this.el.object3D.lookAt(lookPos);
        const dist = pos.distanceTo(ppos);
        if (dist < 1) {
            Promise.resolve().then(() => restart());
        }
    }
});
