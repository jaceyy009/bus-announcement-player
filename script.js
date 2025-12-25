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

constlastBusButton = 
  document.getElementById('lastBus');

lastBusButton.addEventListener('click', () => {
  
  // No need to check route - it's a universal message
  const filename = `audio/lastbus.mp3`;

  audioPlayer.src = filename;
  audioPlayer.play().catch(err => {
    alert("Audio file not found or error playing: " + filename + "/n/n" + err.message);
  });
});
