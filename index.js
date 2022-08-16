const hrEl=document.getElementById("hours");
const mnEl=document.getElementById("minutes");
const scEl=document.getElementById("seconds");
const ampmEL=document.getElementById("ampm");

function updateClock(){
    let h=new Date().getHours();
    let m=new Date().getMinutes();
    let s=new Date().getSeconds();
    let am="AM";
    
    if(h>12){
    am="PM";
    h=h-12        
    }
    
    setTimeout(()=>{
        updateClock();
    },1000) 

    h=h<10?"0"+h:h;
    m=m<10?"0"+m:m;
    s=s<10?"0"+s:s;
    hrEl.innerText=h;
    mnEl.innerText=m;
    scEl.innerText=s;
    ampmEL.innerText=am;            
}
updateClock();