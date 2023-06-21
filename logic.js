let hour = document.querySelector('.hour');
let minute = document.querySelector('.min');
let second = document.querySelector('.sec');
let year = document.querySelector('.year');
let indication=document.querySelector('.amOrPm');
let amOrPm;
let time;
function helloPeter() {
    time = new Date();
    let hrs = time.getHours();
    amOrPm=(hrs>=12)? 'PM':'AM';
    if (hrs > 12) {
        hrs = hrs - 12;
    }

    minute.innerHTML = time.getMinutes();
    second.innerHTML = time.getSeconds();
    hour.innerHTML = hrs;
}
// year.innerHTML = time.getFullYear();
// indication.innerHTML=amOrPm;

setInterval(helloPeter, 1000);