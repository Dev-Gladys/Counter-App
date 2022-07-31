let counter=0;


increaseBtn=document.getElementById("increaseBtn");
resetBtn=document.getElementById("resetBtn");
decreaseBtn=document.getElementById("decreaseBtn");



increaseBtn.addEventListener("click", increase);
resetBtn.addEventListener("click", reset);
decreaseBtn.addEventListener("click", decrease);



function increase(){
    counter += 1
  document.getElementById("text").innerHTML = counter;
  document.getElementById("text").style.color="green";
}


function reset(){
    counter = 0
  document.getElementById("text").innerHTML = counter;
  document.getElementById("text").style.color="black";
}


function decrease(){
    counter -= 1
  text=document.getElementById("text").innerHTML = counter;
  if(text < 0){
  document.getElementById("text").style.color="red";
}else{
  document.getElementById("text").style.color="green";
}
}
