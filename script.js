const routeSelect = document.getElementById('route');
const typeSelect = document.getElementById('type');
const stopSelect = document.getElementById('stop');
const playButton = document.getElementById('play');
const audioPlayer = document.getElementById('player');

playButton.addEventListener('click', () => {
  const route = routeSelect.value;
  const type = typeSelect.value;
  const stop = stopSelect.value;

  const filename = `audio/route${route}-${type}-stop${stop}.mp3`;
  
  audioPlayer.src = filename;
  audioPlayer.play().catch(err => {
    alert("Audio file not found or error playing: " + filename + "\n\n" + err.message);
  });
});
