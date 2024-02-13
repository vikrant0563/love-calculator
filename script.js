const outer = document.querySelector(".outer");            //fetch the progress circle 
const progress = document.getElementById('progress');        // fetch the progress percentage
const appreciation = document.querySelector(".appreciation");
console.log(appreciation);
const calculate = document.getElementById('calculate');

calculate.addEventListener('click',()=>{
   document.querySelector('.calculator').style.display = "none";
    document.querySelector('.result').style.display = "none";
    document.querySelector(".questioning").style.display = "block";
    
    const textName = document.getElementById('text-name').value;
    const textPartner = document.getElementById('text-partner').value;

   
    document.querySelectorAll(".input-data").forEach((e)=>{
        e.innerText = textPartner;
    });
  
});


const afQues = document.getElementById('af-Ques');
let intervalId;
afQues.addEventListener('click',()=>{
    
    document.querySelector('.calculator').style.display = "none";
    document.querySelector(".questioning").style.display = "none";
    document.querySelector(".result").style.display = "block";

    const inputVal = document.getElementsByTagName('input');
    
    const arr = [];
   for(let i=0;i<inputVal.length;i++){
    if(inputVal[i].type = 'radio'){
        if(inputVal[i].checked){
           arr[i] = inputVal[i];           //it stores the response of radio buttons
        }
    }
   }

   
  //============================================================================================================
   
    let count = 0;
    arr.forEach((e)=>{
        if(e.value == 'yes'){
            count++;                   // it stores the count value of 'yes' from radio buttons
        }
    })
   
   //===========================================================================================================
     let value = 0;
     let line = '';
    if( count == 5){
        value =   floor(70,90);
        if(!intervalId){
            intervalId = setInterval(() => {
                program(parseInt(progress.textContent), value);
            }, 30);
        }
     line = "Try it and see, there's about a 50/50 chance. Love Guru thinks that this relationship has a reasonable chance of working out, but on the other hand, it might not. Your relationship may suffer good and bad times. If things might not be working out as you would like them to, do not hesitate to talk about it with the person involved. Spend time together, talk with each other"
    }
    else if( count == 3 || count ==4)
   {
    value =   floor(45,70);
    if(!intervalId){
        intervalId = setInterval(() => {
            program(parseInt(progress.textContent), value);
        }, 30);
    }
    line = "Try it and see, there's about a 50/50 chance. Love Guru thinks that this relationship has a reasonable chance of working out, but on the other hand, it might not. Your relationship may suffer good and bad times. If things might not be working out as you would like them to, do not hesitate to talk about it with the person involved. Spend time together, talk with each other"
   }
    else if(count < 3)
   {
    value =   floor(20,45);
    if(!intervalId){
        intervalId = setInterval(() => {
            program(parseInt(progress.textContent), value);
        }, 30);
    }
    line = "Try it and see, there's about a 50/50 chance. Love Guru thinks that this relationship has a reasonable chance of working out, but on the other hand, it might not. Your relationship may suffer good and bad times. If things might not be working out as you would like them to, do not hesitate to talk about it with the person involved. Spend time together, talk with each other"
   }

   appreciation.innerHTML = `<p>${line}</p>`;
    
   //============================================================================================================================
//it return the percentage value
function floor(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

//=============================================================================================================================



 function program(progressStartValue, progressEndValue) {
    progressStartValue++;
    progress.textContent = `${progressStartValue}%`;

    outer.style.background = `conic-gradient(#b90303 ${progressStartValue * 3.6}deg, #ede8ea 0deg)`;
    if (progressStartValue === progressEndValue) {
        clearInterval(intervalId);
        intervalId = null;
    }
}



})//end of afQues


document.getElementById('recalculate').addEventListener('click',()=>{
    
    window.location.href = "index.html";
    
})
