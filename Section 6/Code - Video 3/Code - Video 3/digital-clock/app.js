const $ = require('jquery');

const setCurrentTime = () => {
  $('#clock').text((new Date()).toLocaleTimeString());
};

setCurrentTime();
setInterval(setCurrentTime, 1000);
