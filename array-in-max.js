// big number
var marks = [200, 30, 40, 50, 60, 45, 65, 34, 71, 38];
var max = marks[0];
for(var i = 0; i < marks.length; i++){
    var element = marks [i];
    if(element > max){
        max = element;
    }
}
console.log("Highest number is:", max);

//small number..
var marks = [200, 30, 40, 50, 60, 45, 65, 34, 71, 38];
var max = marks[0];
for(var i = 0; i < marks.length; i++){
    var element = marks [i];
    if(element < max){
        max = element;
    }
}
console.log("Highest number is:", max);

// new try...
var mama = [10, 20, 30, 40, 50, 70, 60];
var loccation = mama[0];
for(var i = 0; i< mama.length; i++){
    var tata = mama[i];
    if(tata > loccation){
        loccation = tata;
    }
}
console.log("Highest number is: ",loccation);
