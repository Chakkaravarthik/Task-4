//Task_4


const jsonObj = {
    Students :{
        Chytanya :{
            Name :"Chytanya",
            Gender :"male"
        },
        sugar :{
            Name :"sugar",
            Gender :"male"
        },
        Arun :{
            Name :"Arun",
            Gender :"male"
        }
    }
}
    
//for loop : 
console.log(Object.keys(jsonObj.Students).length);
for (var i=0;i<=Object.keys(jsonObj.Students).length;i++) {
    console.log(jsonObj.Students);
}


//for-- in loop :
for (var key in jsonObj){
    console.log(key+":"+jsonObj[key]);
}

//for -of loop :
var Naame = "chytanya";
for (var char of Naame){
    console.log(char)
}

//for each loop :
var numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(number) {
  console.log(number);
});