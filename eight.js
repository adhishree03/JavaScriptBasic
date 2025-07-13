//HIGHER ORDER FUNCTION-> A function that takes a func as an argument
//CALLBACK
function add(a,b,cb)
{
   let result = a + b;
   cb(result);
   
   return()=> console.log(result);
}
let resultFunction = add(2,4,()=>{});
resultFunction();
/*add(2,4, function(val){ //add(2,4,val=> console.log(val))
    console.log(val); 
}*/



