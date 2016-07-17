function fizzbuzz(userInput){
    var arr = [];
    for(var x=1; x<userInput; x++){
        if(x%15 == 0){
            arr.push("fizzbuzz")
        }
        else if(x%5 == 0){
            arr.push("buzz")
        }
        else if(x%3 == 0){
            arr.push("fizz")
        }
        else{
            arr.push(x.toString())
        }
    }
    return arr;
}


function printThis(array1){
    for (var x=0; x<array1.length; x++){
        console.log(array1[x]);
        document.write(array1[x])
        document.write("<br>")
    }
}

$(document).ready(function(){
//$("body").
    var userInput = parseInt(prompt("State your number:"));
    console.log(userInput);
    if (isNaN(userInput) == false){
        console.log("what?")
        var anu = fizzbuzz(userInput);
        printThis(anu);
    } else{
        alert("Please enter valid number")
        location.reload();
    }
})
