//LOOPS : FOR , WHILE , DO WHILE

//FOR

for(let i=1;i<=10;i=i+2){
    console.log('adi'+i)
}


//WHILE

let ip =0
let house = 50

while(ip!=house){
    ip=ip+1;
    console.log('Step Taken'+ip)
}


//DO WHILE -> first run the code then check the condition

let ip =0
let house = 50

do{
    ip=ip+1;
    console.log('Step Taken'+ip)

}while(ip <= house)



//GAME - GUESS THE INPUT

let number =40;

let guess=0;

do{
    guess = parseInt(prompt("Guess number"))
    if(guess == number)
    {
        alert('Winner')
        break;
    }
}
while(guess != 0)
 
    