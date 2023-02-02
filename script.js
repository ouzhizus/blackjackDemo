function take(){
    let sum;
    if(document.getElementById("number1").innerText === "?"){
        let firstCard =  Math.floor(Math.random() * (13-2) + 2);
        sum =+ firstCard;
        document.getElementById("number1").innerText = firstCard;
        document.getElementById("result").innerText = sum;
        console.log(document.getElementById("number1").innerText);
    }
    else if(document.getElementById("number2").innerText === "?"){
        let firstCard =  Math.floor(Math.random() * (13-2) + 2);
        sum =+ firstCard;
        document.getElementById("number2").innerText = firstCard;
        document.getElementById("result").innerText = parseInt(document.getElementById("number1").innerText) + parseInt(firstCard);
    }
    else if(document.getElementById("number3").innerText === "?"){
        let firstCard =  Math.floor(Math.random() * (13-2) + 2);
        sum =+ firstCard;
        document.getElementById("number3").innerText = firstCard;
        document.getElementById("result").innerText = parseInt(document.getElementById("number1").innerText) + parseInt(document.getElementById("number2").innerText) + parseInt(firstCard);
    }
    else if(document.getElementById("number4").innerText === "?"){
        let firstCard =  Math.floor(Math.random() * (13-2) + 2);
        sum =+ firstCard;
        document.getElementById("number4").innerText = firstCard;
        document.getElementById("result").innerText = parseInt(firstCard) + parseInt(document.getElementById("number1").innerText) + parseInt(document.getElementById("number2").innerText)
        + parseInt(document.getElementById("number3").innerText);
    }
}
function reset(){
    document.getElementById("number1").innerText = "?";
    document.getElementById("number2").innerText = "?";
    document.getElementById("number3").innerText = "?";
    document.getElementById("number4").innerText = "?";
    document.getElementById("result").innerText = "_";
}