let lineA = document.querySelectorAll("#lineA");
console.log("c la ligne A" , lineA);
let caseLineA =document.querySelectorAll('.caseLineA')
console.log("c les caseLigne A" , caseLineA);
console.log("c les caseAB" , caseLineA[0]);


//recupere les resulta
let resultArray = []
for (let i = 0; i < caseLineA.length; i++) {
    let dataValue = caseLineA[i].getAttribute('data');
    resultArray.push(dataValue);
}
console.log(resultArray)

//comparer les resultat
let result = resultArray.every(function(element){
    return element === resultArray[0];
})

let amountPointDiv=0;
let symbolAValue=10;
let symbolBValue=3;
let symbolCValue=1;
function gain(){
if (result) {
    console.log("win")

    if( resultArray[0]=="a"){
       amountPointDiv = symbolAValue+amountPointDiv;
        console.log("vous gangé ", symbolAValue , " votre sold est de " , amountPointDiv)
    }
} else {
    console.log("lose")
}
}







