import Vimeo from '@vimeo/player';
var throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);

player.on('timeupdate', throttle(onPlay, 1000));

if (localStorage.length === 0) {
  localStorage.setItem('videoplayer-current-time', 0);
}

function onPlay(data) {
  const time = data.seconds;
  console.log(time);

  localStorage.setItem('videoplayer-current-time', time);
}

const currentTime = localStorage.getItem('videoplayer-current-time');

player.setCurrentTime(currentTime);
