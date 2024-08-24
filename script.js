let btn = document.getElementById("btn");
let ans = document.getElementById("ans");
if(btn.addEventListener("click",function(){
    let min = parseInt(document.getElementById("min").value);
    let max = parseInt(document.getElementById("max").value);

    let Rn = Math.floor(Math.random()*(max-min))+min;
    
    ans.innerHTML="Random number is : "+Rn;

}));
