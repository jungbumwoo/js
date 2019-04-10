const abc = querySelector.document(".js-clock");
const qwe = querySelector.document("h1");

function getTime() {
    const time = new Date;
    const hours = time.getHours;
    const minutes = time.getMinutes;
    const seconds = time.getSeconds;
    `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}
    :${seconds < 10 ? `0${seconds}` : seconds}`
}



function init () {
    getTime();
}

init();