import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player', {
    id: 236203659,
    width: 640,
});

player.on('timeupdate', throttle(onPlayerTimeUpdate, 1000));

function onPlayerTimeUpdate(event) {
    localStorage.setItem('videoplayer-current-time', `${event.seconds}`)
};

const savedTime = localStorage.getItem('videoplayer-current-time');
player.setCurrentTime(savedTime);