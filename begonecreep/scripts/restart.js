function restart() {
  const scene = document.querySelector('a-scene');
  const player = document.querySelector('#player');
  const gameOverText = document.querySelector('#gameOverText');

  
  gameOverText.setAttribute('text', 'value: Creeper Exploded! Restarting...');
  gameOverText.setAttribute('visible', true);

  
  scene.querySelectorAll('[creeper]').forEach(c => c.remove());
  scene.querySelectorAll('[mixin="voxel"]').forEach(v => v.remove());

  
  player.setAttribute('position', '0 1.6 0');
  player.object3D.rotation.set(0, 0, 0);

  
  if (player.components['look-controls']) {
    player.components['look-controls'].pitchObject.rotation.x = 0;
    player.components['look-controls'].yawObject.rotation.y = 0;
  }

  
  if (scene.systems.score) {
    scene.systems.score.setScore(0);
  }

  
  setTimeout(() => {
    gameOverText.setAttribute('visible', false);
    gameOverText.setAttribute('text', 'value:');
  }, 1000);
}
