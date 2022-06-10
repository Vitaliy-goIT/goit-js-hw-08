import Vimeo from '@vimeo/player';
var throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay(data) {
  const time = Math.round(data.seconds);
  localStorage.setItem('videoplayer-current-time', time);
}

const currentTime = localStorage.getItem('videoplayer-current-time');

player.setCurrentTime(currentTime);
