let numScript = [];

function clearAll(){
    numScript.length = 0;
    document.getElementById('display').value = numScript.splice(0, numScript.length);
}
function potenza(){
    let ptz = +(document.getElementById('display').value);
    document.getElementById('display').value = Math.pow(ptz, 2);
}
function radice(){
    let rad = +(document.getElementById('display').value);
    document.getElementById('display').value = Math.sqrt(rad);
}
function del(){
    numScript.pop();
    insert();
}
function equal(){
    let inputDisplay = numScript.join('');
    if(inputDisplay.indexOf('-') !== -1){
        inputDisplayNew = inputDisplay.split('-');
        operation = +(inputDisplayNew[0]) - +(inputDisplayNew[1]);
    } else if(inputDisplay.indexOf('+') !== -1){
        inputDisplayNew = inputDisplay.split('+');
        operation = +(inputDisplayNew[0]) + +(inputDisplayNew[1]);
    } else if(inputDisplay.indexOf('*') !== -1){
        inputDisplayNew = inputDisplay.split('*');
        operation = +(inputDisplayNew[0]) * +(inputDisplayNew[1]);
    } else if(inputDisplay.indexOf('/') !== -1){
        inputDisplayNew = inputDisplay.split('/');
        operation = +(inputDisplayNew[0]) / +(inputDisplayNew[1]);
    }
    document.getElementById('display').value = operation; 
}
// Questa è stata la prima prova, per cui per ogni tasto avevo creato una funzione, come quella dell'esempio sotto. Poi provando e riprovando altri metodi, sono giunta ad una soluzione più compatta, che si può vedere attiva. Ho eliminato anche i relativi id e value impostati inizialmente nell'HTML

/* function insOne(){
    let one = document.getElementById('one').value;
    numScript.push(one);
    insert();
} */ 
function ins(num){
    numScript.push(num);
    insert();
}
function insPlus(){
    let plus = document.getElementById('plus').value;
    numScript.push(plus);
    insert();
}
function insMinus(){
    let minus = document.getElementById('minus').value;
    numScript.push(minus);
    insert();
}
function insMult(){
    let mult = document.getElementById('mult').value;
    numScript.push(mult);
    insert();
}
function insDivide(){
    let divide = document.getElementById('divide').value;
    numScript.push(divide);
    insert();
}
function insPoint(){
    let point = document.getElementById('point').value;
    numScript.push(point);
    insert();
}
function insert(){
    numScript.toString();
    document.getElementById('display').value = numScript.join('');
}