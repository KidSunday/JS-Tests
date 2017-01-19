var theArray = ["test1", "test2", "test3"];

document.getElementById("demo").innerHTML = theArray[0];
document.getElementById("demo").innerHTML = theArray[1];

function getBall(theball) {
    var thisBall = theball;
    //document.getElementById("demo").innerHTML = thisBall;

    return thisBall;
}

function someMath(x, y) {
    var xCoor = x;
    var yCoor = y;
    var set = Math.random() * (x * y);
    console.log(set);
    return Math.round(set)
}
document.getElementById("demo").innerHTML = someMath(12, 540);

/*document.onclick = function() {
    alert("you clicked");
}*/

function diceRoll(x) {
    var diceResult = Math.floor((Math.random() * x) + 1);
    document.getElementById("spell").innerHTML = diceResult;
}
