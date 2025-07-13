//ARRAYS

const students =["adi","aggu", "yashi"]
const marks =[1,2,3,4,5];
const myArr =[1,'❤️' ,true, "yashi"]// Homo || Hetrogenous

//students[0] ="Adishree";  Make changes in Array 


//PUSH
students.push("DVD");// Add name to an Array
students.push("Ankit");
console.log(students);

myArr.push({NAME: 'Ansh'}) //Add object in the AArray
console.log(myArr); //Print my array
console.log(myArr.indexOf("yashi")); // Search for elements


//POP
const student =["adi","aggu", "yashi","deepu"]
students.pop();
students.reverse();
console.log(students);