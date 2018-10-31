var cloud;//Cloud Image
var w;//innerWidth of Browser
var sp = 50;//starting position of cloud
function Load() {
    w = window.innerWidth;
    cloud = document.getElementById("cloud");
    setInterval(moveCloud,100);
}
//call Move Cloud
function moveCloud(){
    cloud.style.left = sp+"px";
    sp-=10;
    if(sp<=0) sp = w-10;
}
