//login section
const loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", function(){
    const loginArea = document.getElementById("login-area");
    loginArea.style.display="none";
    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display="block";
});


//deposit section

const depositBtn = document.getElementById("addDeposit");

depositBtn.addEventListener("click", function(){
    const depositNumber = getInputNumber("depositAmount");
    updateSpanText("currentDeposit", depositNumber);
    
    document.getElementById("depositAmount").value ="";
    updateSpanText("blanceAdd", depositNumber);

})

//input update 
function updateSpanText(id, depositNumber){
    const blanceadd = document.getElementById(id).innerText;
    const blanceNumber = parseFloat(blanceadd);
    const newblance = depositNumber + blanceNumber;
    document.getElementById(id).innerText=newblance;
}

//withdraw section

const withdrawBtn = document.getElementById("withdrawBtn");
withdrawBtn.addEventListener("click",function(){
    // const withdrawAmount = document.getElementById("withdrawAmount").value;
    // const withdrawNumber = parseFloat(withdrawAmount);
    const withdrawAmount = getInputNumber("withdrawAmount");
    updateSpanText("withdrawValue", withdrawAmount);
    document.getElementById("withdrawAmount").value ="";
    updateSpanText("blanceAdd",-1 * withdrawAmount);
    
    
})

function getInputNumber(id){
    const withdrawAmount = document.getElementById(id).value;
    const withdrawNumber = parseFloat(withdrawAmount);
    return withdrawNumber;
}