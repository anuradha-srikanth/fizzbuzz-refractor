function fizzbuzz(){
    var arr = [];
    for(var x=1; x<100; x++){
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
    var anu = fizzbuzz();
    printThis(anu);
})
