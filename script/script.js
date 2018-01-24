let h = 0;
let m = 0;
let s = 0;

let tid = null;
let speed = 1000;
function myStart() { 
showTime();
    if (!tid) {
    tid = setInterval(myTimer, speed);
    }
}

function myTimer() {
    s++;
    if (s===60){
        s=0;
        m++;
        if (m===60) {
        m=0;
        h++;
        if (h===24) {
        h=0;

            }
        }
    }
showTime();
}

function myPause() {
    if(tid) {
        document.getElementById("pausebutton").textContent="continue";
        clearInterval(tid);
        tid = null;
    }
    else {
        document.getElementById("pausebutton").textContent="pause";
        tid = setInterval(myTimer, speed);
    }
}
function myReset() {
    if(tid) {
        clearInterval(tid);
        tid=null;
    }
    speed=1000;
    document.getElementById("pausebutton").textContent="pause";
    h=0;
    m=0;
    s=0;
    showTime();
}

function myFaster() {
    if (tid) {
        clearInterval(tid);
        if (speed > 1) {
        }
        speed /=2;
        tid = setInterval(myTimer, speed);
    }
}

function mySlower() {
        if (tid) {
        clearInterval(tid);
        speed *=2;
        tid = setInterval(myTimer, speed);
    }
}

function showTime(){
  var str="00"+s;
  str=str.substring(str.length-2);
  document.getElementById("SS").innerHTML=str;
  str="00"+m;
  str=str.substring(str.length-2);
  document.getElementById("MM").innerHTML=str;
  str="00"+h;
  str=str.substring(str.length-2);
  document.getElementById("HH").innerHTML=str;
}

