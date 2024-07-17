//Arithmatic operations
let num1=4
let num2=2
//Try +,-,*,/,%
let result=num1%num2
console.log(result)

let x1= 16
if(x1%2==0){
    console.log(x1+" is even nummber")
}
else{
    console.log(x1+" is odd nummber")
}

//Covercion
let num3=true
let num4=true
let result2=num3+num4
console.log("The result of boolean data type addition is  "+typeof result2)
if(undefined){
    console.log("value in result2 is truthy")
}


// 
let num=4
console.log(num)
num=num+2
console.log(num)
//Shorthand
num+=2
console.log(num)
//Increment
num++
console.log(num)

//++num preincrement
//num++ post increment
let x=4
let y=++x
console.log(x,y)
//Find the cube of num
let cubeResult=num*num*num
console.log(cubeResult)
console.log(Math.pow(num,3))
console.log(num**3)
