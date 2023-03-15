let btn=document.querySelector(".container #btn")
const random=document.querySelectorAll(".random")
const kq=document.querySelector(".kq")
const ct=document.querySelector(".content")
const money=document.querySelector("h1 span")
const input=document.querySelector("#enterMoney")
btn.addEventListener('click',play)
function play(){
    let tong =0
    for(i=0;i<random.length;i++){
        random[i].value=Math.floor(Math.random()*(6))+1
        tong+=Number(random[i].value)
    }
    if(document.getElementById("t1").checked==1){
        if(tong>10){
         kq.innerHTML="Win"
         ct.innerHTML="Lụm Xèn!"
         money.innerHTML=Number(money.innerHTML)+Number(input.value)
        }
        else{
        kq.innerHTML="Lose"
        ct.innerHTML="Bay Sổ Red!"
        money.innerHTML=Number(money.innerHTML)-Number(input.value)
        }
    }
    else{
        if(tong<=10){
            kq.innerHTML="win"
            ct.innerHTML="Lụm Xèn!"
            money.innerHTML=Number(money.innerHTML)+Number(input.value)
        }
        else{
            kq.innerHTML="Lose" 
            ct.innerHTML="Bay Sổ Red!" 
            money.innerHTML=Number(money.innerHTML)-Number(input.value)
        }
    }
}
