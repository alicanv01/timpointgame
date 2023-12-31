let lineA = document.querySelectorAll("#lineA");
console.log("c la ligne A", lineA);
let caseLineA = document.querySelectorAll('.caseLineA')
console.log("c les caseLigne A", caseLineA);
console.log("c les caseAB", caseLineA[0]);



var sold = 500;

let resultArray = []
const imgArray=[ "assets/scatter.png","assets/symbolA.png", "assets/symbolB.png" ]

let symbolLineImgA =document.querySelectorAll(".symbolImgLineA");
console.log(symbolLineImgA)




var randomNbr = Math.floor(Math.random() *3);


function play() {


    let dataValue;
    for (let i = 0; i < caseLineA.length; i++) {
        randomNbr = Math.floor(Math.random() *3);
        caseLineA[i].setAttribute('data', `${randomNbr}`);
        symbolLineImgA[i].setAttribute('src', `${imgArray[randomNbr]}`);
        
        dataValue = caseLineA[i].getAttribute('data');
        resultArray.push(dataValue);
    }




    console.log(resultArray)

    let result = resultArray.every(function (element) {
        return element === resultArray[0];
    })


    // Select the checked radio button
    let spinValueChoix = document.querySelector('input[name="spinValueChoix"]:checked');

    // Check if any radio button is selected
    if (spinValueChoix) {
        // Retrieve and log the value of the selected radio button
        var spinValue = spinValueChoix.value;
        console.log("Selected Radio Value:", spinValue);
    } else {
        console.log("No radio button selected");
    }

    console.log(spinValue)

    
    let symbolAValue = spinValue * 100;
    let symbolBValue = spinValue * 50;
    let symbolCValue = spinValue * 20;
 const amountWinPointDiv = document.getElementById("amountWinPointDiv")
   const amountPointDiv = document.getElementById("amountPointDiv") 
   if (result) {
        console.log("win")
        if (dataValue == "0") {
            sold = symbolAValue + sold - spinValue;
            console.log("vous gangé ", symbolAValue, " votre sold est de ", sold)
           
            amountWinPointDiv.innerHTML = `Win Point  ${symbolAValue}  `
            
            amountPointDiv.innerHTML = `your Point  ${sold  - spinValue}  `
       
        }
        if(dataValue == "1"){
            sold = symbolBValue + sold - spinValue;
            console.log("vous gangé ", symbolBValue, " votre sold est de ", sold)
            
            amountWinPointDiv.innerHTML = `Win Point   ${symbolBValue}  `
            
            amountPointDiv.innerHTML = `your Point   ${sold - spinValue} `
        }
        if(dataValue == "2"){
            sold = symbolCValue + sold - spinValue;
            console.log("vous gangé ", symbolCValue, " votre sold est de ", sold)
            
            amountWinPointDiv.innerHTML = `Win Point ${symbolCValue}  `
       
            amountPointDiv.innerHTML = `your Point  ${sold - spinValue}  `
        }
    } else {
        sold=sold-spinValue
        amountWinPointDiv.innerHTML = `lost Point   -${spinValue}  `
        amountPointDiv.innerHTML = ` your Point ${sold - spinValue}  `
    }


    resultArray = []

}

const playButonGame = document.getElementById("playButonGame")
console.log(play)





playButonGame.addEventListener('click', play);
