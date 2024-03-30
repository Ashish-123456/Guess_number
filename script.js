//for changing there value
let time=document.getElementById("time");
let container = document.querySelectorAll(".container");
let gettar=document.getElementById("targetvalue");
let score=document.getElementById("point");
let cir=document.querySelectorAll(".cir");
let restart=document.querySelector(".restart");

let game=document.querySelector(".game");
let myTimeout=1;
console.log(restart);
// console.log(time.innerText);

var guess=()=>{
if(time.innerText==0){
    console.log("finish");
    clearInterval(myTimeout);
    document.querySelector(".val").innerText=score.innerText;
    game.style.display="none";
    restart.style.display="block";
    document.querySelector(".but").addEventListener('click',(e)=>{
        location.reload();
    })
}else
time.innerText=(parseInt(time.innerText)-1);

    
container.forEach((row)=>{
    //  console.log(row);
    if(time.innerText==0){
        console.log(myTimeout);
        clearInterval(myTimeout);
        document.querySelector(".val").innerText=score.innerText;
        game.style.display="none";
        restart.style.display="block";
        document.querySelector(".but").addEventListener('click',(e)=>{
            location.reload();
        })
    }
    row.addEventListener('click',(e)=>{
        if(parseInt(time.innerText) && e.target.innerText==gettar.innerText){
           score.innerText=parseInt(score.innerText)+10;
           cir.forEach((val,index)=>{
                 val.innerText=Math.floor(Math.random()*10);
           })
           gettar.innerText=Math.floor(Math.random()*10);
           time.innerText=((parseInt(time.innerText)+2));
         }
        //  console.log(score.innerText,time.innerText);
    })
})
    // console.log(time);
}
if(myTimeout){
    myTimeout = setInterval(guess,1000);
    game.style.display="block";
    restart.style.display = "none";
}
   

