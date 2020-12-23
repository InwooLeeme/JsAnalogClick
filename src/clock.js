
const clockContainer = document.querySelector('.clockContainer');
const hoursBar = document.querySelector('.hours');
const minutesBar = document.querySelector('.minutes');
const secondsBar = document.querySelector('.seconds');

const defaultTime = 1000;
const defaultDeg = 90;

function getCurrentTime(){
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    
    const hoursDeg = (12 + hours) * 30 + defaultDeg;
    const minutesDeg = (minutes * 6) + defaultDeg;
    const secondsDeg = (seconds * 6) + defaultDeg;
    console.log(hoursDeg, hours);
    hoursBar.style.transform = "rotate("+hoursDeg+"deg)";
    minutesBar.style.transform = "rotate("+minutesDeg+"deg)";
    secondsBar.style.transform = "rotate("+secondsDeg+"deg)";
}

function init(){
    setInterval(getCurrentTime, defaultTime);
}

init();