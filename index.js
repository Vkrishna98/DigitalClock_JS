const hr = document.getElementById("hour");
const mn = document.getElementById("mins");
const sc = document.getElementById("secs");
const ampmel = document.getElementById("ampm");

function updateClock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    let ampmval = "AM";

    if(h>12){
        h = h-12;
        ampmval = "PM";
    }
    if(h==0){
        h=12;
        ampmval = "AM";
    }

    h = h<10 ? "0"+h : h;
    m = m<10 ? "0"+m : m;
    s = s<10 ? "0"+s : s;

    hr.innerHTML = h;
    mn.innerHTML = m;
    sc.innerHTML = s;
    ampmel.innerHTML = ampmval;
    setTimeout(() => {
        updateClock();
    }, 1000);
}

updateClock();