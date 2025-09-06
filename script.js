// Hoisting 


// console.log(name);
// var name="Mohua Bera";

function d(){
    console.log("four");
}
function c(){
    console.log("three");
    d();
}
function b(){
    console.log("two");
    c();
}
function a (){
    console.log("one");
    b();
}
a();



function myname(){
    console.log("Rupayan");
}
function fullname( mname,age){
     console.log(mname);
    return age;
    
}

let finalans=fullname(myname,30);
console.log(finalans);


// Function with array  


let myarray=[
    function firstone(){
        console.log("first array print");
    },
    function secondone(){
        return "second array print";
    },
    function thirdone(){
        console.log("third array print");
    }
];
console.log(myarray[1].name);
let love = myarray[1]();
console.log(love);






let obj ={
    name3:  "rupayab"
}
console.log(obj["name3"]);