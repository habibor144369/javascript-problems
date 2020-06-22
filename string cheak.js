// string number count kora...
var speech = "i love       bangladesh. is my mother    land. is is a beautyfull country.";
var count = 0;
for (var i = 0; i < speech.length; i++){
    var char  = speech [i];
    if (char == " " && speech[i-1] != " " ){ 
       count = count + 1;
    }
}
count++,
console.log(count);

// same example...

var sentene = "my love is allah and hozrot mohammod";
var count = 0;
 for (var i = 0; i < sentene.length; i++){
     var result = sentene[i];
     if (result == " " && sentene[i-1] !== " " ){
         count = count + 1;
     }
 }
 count++;
 console.log(count);
