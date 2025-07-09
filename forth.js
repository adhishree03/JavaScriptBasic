//LOGICAL OPERATORS: AND , OR , NOT

//AND -> All cond. must be true

const age =20;
const gender ='male';

if(age>= 18 && gender == 'male'){
    console.log('You are adult Male')
}


//OR -> Atleast one condition must be true

const age =22;
const gender ='male';

//let isMale = gender =='male' ->oolean value

if(age>= 18 || gender == 'male'){
    console.log('You are adult Male')
}



//NOT -> Converts True into False and vice versa

const number=5;
if(!(number%2==0) )
{
    console.log('Odd')
}