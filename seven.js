//ARROW FUNCTION

// 1) Syntax

function sayHello(){
    console.log("Hello!");

    sayHello()
}
// Above code in arrow function
const sayHelo = () =>{   //ARROW FUNCTION
    console.log("HEY!!")
};
//const add = (a,b) =>{
   // return a+b; };
const addV2 = (a,b) => a+b; //one liner

console.log( addV2(2,3));    




// 2) 'arguments' keyword

const addNumbers =(...nums) =>  //spread operation
{
    console.log(nums);
}
addNumbers(10,22,3,23,4);




// 3) hoisting


const sayHey=()=> 
{
    console.log("Hey there");
}
sayHey();



// 4) This Keyword

const obj ={
    value: 20,
    myFunction: function()
    {
        console.log("Value is"+ this.value);
    },
};
obj.myFunction();
