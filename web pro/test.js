/*let user = null
console.log(user)
console.log(typeof user)
console.log("hello")*/

/*x = 5 //assigning 5 to a variable.
console.log(x)

console.log(typeof x)*/

/*let x = 5 //here we used let as a good practice (var can be used too)
let _taha = 8
x = _taha
console.log(x)

console.log(typeof x)*/
//
/*
let r = 5 
let a
const pi = 3.14 // cannot change later 
a = pi*r*r
console.log(a)
console.log(typeof r/"s")
*/
/*
let f = "sara"
let s = 'I am "sara"'
console.log(s)*/


//class 2
// Arithmatic operations
/*let n1 = 3
let n2 = 2
let r = n1 % n2 

//check even or odd
if (n1%2 == 0)
    console.log("even")
else
console.log("odd")

//or

console.log(n1%2 == 0? "even": "odd")

let num3 = true
let num4 = true
let num5 = num3 + num4
console.log(num5 + typeof num5) //= 2 as true = 1 so 1+1 = 2


if(num5){
    console.log("it is true")
}
   
if(0){
    console.log("it is true")
}
if(undefined){
    console.log("it is true")
}

let x = 4
let y = x++
console.log(x,y)

/*console.log(num6)
num6 = num6 + 2
console.log(num6)

console.log(x++)
console.log(x)

console.log(++x)
console.log(x)

//not static method: we need to create an abj to call 
// static : we don't need to create an obj

console.log(Math.pow(x,3))
console.log(x**3)

// Logical operations
console.log(4==4)
let data = "a" > "a1"
console.log(data)
console.log(typeof data) // type of logical op is always boolean

let data2 = "abu" > "du"
console.log(data2)

let n = "2"
let nu2 = 1
let data3 = n > nu2
console.log(data3, typeof n, typeof nu2, typeof data3)
let n = "a"
let nu2 = 1
let data3 = n > nu2
console.log(data3, typeof n, typeof nu2, typeof data3)


console.log('' == false) // because an empty string is a false

console.log(4 == "4") // only checking the value, so it is true
console.log(4 === "4") // check the value and datatype so it is a false

console.log(4 == "'4'")

let phone = "iphone14";
iphone_pricediscount = 30
DeliveryDay = 2
if( phone = "iphone14" && iphone_pricediscount == 30 && DeliveryDay ==2 )
    console.log("condition met")
else
    console.log("not met")



let num 
console.log(num)
console.log(typeof num)
num = 8 
console.log(num)
console.log(typeof num)
num = num + ''
console.log(num)
console.log(typeof num)

num = num - 2 
console.log(num, typeof num)

num = !num // num = 6 which is true, so not true is false. since I am useing !, so javascript will change it to boolean
console.log(num, typeof num)

//false
console.log(Boolean(null))
console.log(Boolean(0))

//true
console.log(Boolean(7))

*/
/*
let i =7;
while (i <=5 ){
    console.log('hi')
    i++
}


let j = 7;
do{
    console.log("do while hi")
    j++
} while(j<=5)

// both conditions are false, but the do while will print once with the while won't

//1

for(let k = 1; k<=100;k++){
    if (k%3==0)
    console.log(k)

}

//2



let nu = 4566682
nustr = nu.toString()
for(let y = 0; y <= nustr.length; y++){
    console.log(nustr.charAt(y)); 

}

var x = 4566682
while(x!=0){
    console.log(x%10) //returns 2
    x=Math.floor(x/10) // removes 2
}

//functions
//functions main parts:name, parameters, return type
//here, we don't have to define a return type, it happens automatically 



function greet(){
    console.log('hello')
}

greet()
function greetModified(user){
return `hello ${user}`
}

let user = 'taha'
console.log(greetModified(user))


//Anonymous function
let add = function(num1,num2){
    return num1 +num2
}

let sum = add(1,2)
console.log(sum)


//defualt value in function
function adding(num1,num2=2){
    return num1+num2
}


console.log(adding(3))*/


//objects
let itEngineer ={}
console.log(typeof itEngineer)

let itEngineer1 = {
   empid : '55' ,
   name: 'taha'
}

console.log(itEngineer1)
console.log(itEngineer1.name)
//or
console.log(itEngineer1['name'])


