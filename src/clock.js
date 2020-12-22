
const clockContainer = document.querySelector('.clockContainer');
const hoursBar = document.querySelector('.hours');
const minutesBar = document.querySelector('.minutes');
const secondsBar = document.querySelector('.seconds');

const defaultTime = 1000;
const defaultDeg = 90;
const 

function getCurrentTime(){
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    
}

function init(){
    setInterval(getCurrentTime, defaultTime);
}

init();