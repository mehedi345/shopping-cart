// casing increasing part


const caseIncrease = document.getElementById("case-increase");
caseIncrease.addEventListener("click",function(){
    const caseCount = document.getElementById("case-value").value;
    const caseCountNum = parseInt(caseCount);

    const caseNewCount = caseCountNum + 1;
    document.getElementById("case-value").value = caseNewCount;
    const caseTotal = caseNewCount * 59;
    document.getElementById("case-total").innerText = '$' +  caseTotal;

})

// casing reducing  part

const caseReduce = document.getElementById("case-reduce");
caseReduce.addEventListener("click", function(){
    const caseCount = document.getElementById("case-value").value;
    const caseCountNum = parseInt(caseCount);

    const caseNewCount = caseCountNum - 1;
    document.getElementById("case-value").value = caseNewCount;

    const caseTotal = caseNewCount * 59;
    document.getElementById("case-total").innerText = "$" + caseTotal;

})

// phone increasing part

const phoneIncrease = document.getElementById("phone-increase");
phoneIncrease.addEventListener("click",function(){
    const phoneCount = document.getElementById("phone-value").value;
    const phoneCountNum = parseInt(phoneCount );

    const phoneNewCount = phoneCountNum + 1;
    document.getElementById("phone-value").value = phoneNewCount;

    const phoneTotal = phoneNewCount * 1219;
    document.getElementById("phone-total").innerText = "$" + phoneTotal;
})


//  phone reduce part

const phoneReduce = document.getElementById("phone-reduce");
phoneReduce.addEventListener("click", function(){
    const phoneCount = document.getElementById("phone-value").value;
    const phoneCountNum = parseInt(phoneCount);
     
    const phoneNewCount = phoneCountNum - 1;
    document.getElementById("phone-value").value = phoneNewCount;
    
    const phoneTotal = phoneNewCount * 1219;
    document.getElementById("phone-total").innerText = "$" + phoneTotal;
})
// function caseHandle(isIncrease){
//         const caseCount = document.getElementById("case-value").value;
//         const caseCountNum = parseInt(caseCount);
//         let caseNewCount = 1;
//         if(isIncrease == true){
//              caseNewCount = caseCountNum + 1;
//         }
//         if(isIncrease == false){

//             caseNewCount = caseCountNum - 1;
//         }
//         document.getElementById("case-value").value = caseNewCount;
//         const caseTotal = caseNewCount * 59;
//         document.getElementById("case-total").innerText = caseTotal;

// }
