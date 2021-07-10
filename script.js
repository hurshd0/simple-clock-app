const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const ampm = document.getElementById("ampm");
const tz = document.getElementById("timezone")
const usertz = Intl.DateTimeFormat().resolvedOptions().timeZone;

tz.textContent = `${usertz}`;

function updateClock() {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let ap = h >= 12 ? 'pm' : 'am';
    h = h % 12;
    h = h ? h : 12;
    // console.log(`TimeZone: ${usertz}, Hour: ${h}, Minute: ${m}, Second: ${s}, AM/PM: ${ampm}`);    
    hours.textContent = h;
    minutes.textContent = m;
    seconds.textContent = s;
    ampm.textContent = ap;
}


let interval = setInterval(updateClock, 1);