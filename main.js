var fruit = [
    [" strawberry", 12],
    [" grape", 15],
    [" tomato", 10]
]
for ( i = 0; i < 3; i++){
      console.log("i have " + fruit[i][1] +  fruit[i][0]);
}
for ( i=0 ; i<3; i++){
    console.log(fruit[i]);
}
console.log(" ");
for (var value in fruit){
    console.log(fruit[value]);
}
console.log(" ");
for (var value of fruit){
    console.log(value);
}
var mydog = {
    name : "ngao",
    legs : 4,
    friends : ["everything"],
};

 mydog.husky = 'ngao';
 delete  mydog.name ;
 mydog.color = 'brown';
 delete mydog.friends;
 console.log(mydog);