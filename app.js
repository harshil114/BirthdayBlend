const dateOfBirth = document.querySelector("#dob");
const luckyNumber = document.querySelector("#lucky-number");
const btn = document.querySelector("#btn");
const outputBox = document.querySelector("#output-box");

btn.addEventListener("click",clickHandler);
function clickHandler(){
    const dob=dateOfBirth.value;
    const sum = calcualteSum(dob);
    if(sum && dob){
        comapreValue(sum,luckyNumber.value);
    }else{
        outputBox.innerText="Enter both fields";
    }    
};

function calcualteSum(dob){
    dob = dob.replaceAll("-","");
    let sum=0;
    for(let i=0; i<dob.length; i++){
        sum = sum + Number(dob.charAt(i));
    }
    return sum;
}

function comapreValue(sum,luckyNumber){
   if(sum % luckyNumber===0){
    outputBox.innerText="Great!Your Birthday is Lucky";    
   }else{
    outputBox.innerText="Oops! Not that much Lucky";
   }
}



