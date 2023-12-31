let lineA = document.querySelectorAll("#lineA");
console.log("c la ligne A", lineA);
let caseLineA = document.querySelectorAll('.caseLineA')
console.log("c les caseLigne A", caseLineA);
console.log("c les caseAB", caseLineA[0]);

let resultArray = []

function play() {
     for (let i = 0; i < caseLineA.length; i++) {
    let dataValue = caseLineA[i].getAttribute('data');
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
let sold = 500;
let symbolAValue = spinValue * 10;
let symbolBValue = spinValue * 3;
let symbolCValue = spinValue * 1;

if (result) {
    console.log("win")
    if (1==1) {
        console.log("fzef")
        sold = symbolAValue + sold - spinValue;
        console.log("vous gangé ", symbolAValue, " votre sold est de ", sold)
    }
} else {
    console.log("lose")
}



resultArray=[]
}



const playButonGame=document.getElementById("playButonGame")
console.log(play)



   

playButonGame.addEventListener('click',play );