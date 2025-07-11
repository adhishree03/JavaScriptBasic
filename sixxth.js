//FUNCTIONS -> Block of code that perform a particular task

/*function sayHello()
{
    console.log('hey adi')
}


(
parameter
function add(a,b){
    console.log(a+b);
}



function multiply(a,b){
    let ans = a*b;
    return ans ;
}

let a=multiply(10,9)
console.log('That hey user result is', a)




//ques) addNumber(1,2,3,5,6,78,88)->unlimited arguments accept

function addNumber(){

    let ans=0
    for(let i=0 ; i< arguments.length; i= i+1){
        ans = ans + arguments[i]
    }
    return ans;;


}
let result = addNumber(1,2,3,5,8,88)
console.log(result)*/


//another way by spread operation

function addNumberV2(...numbers){
    let ans=0
    for(let i=0 ; i< numbers.length ; i++){
        ans= ans+ numbers[i]
    }
    return ans;
}
let result1 = addNumberV2(10,2,2,4,6,7,7,4,3)
console.log(result1)
