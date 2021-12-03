function Num(val){
    document.getElementById("result").value += val;
}

function equal(){
    let input = document.getElementById('result').value;
    let output = eval(input);
    document.getElementById('result').value = output;
}

function clr(){
    document.getElementById('result').value = ""; 
}