/*let user = null
console.log(user) 
console.log(typeof user) // print's 'object'
console.log("hello")
let k ='5'
console.log(k+5)


function fo(name){
    console.log(name)
    return 1
}
fo("saea")
x = 5 //assigning 5 to a variable.
console.log(x)

console.log(typeof x)

let x = 5 //here we used let as a good practice (var can be used too)
let _taha = 8
x = _taha
console.log(x)

console.log(typeof x)
//

let rr = 5 
let a
const pi = 3.14 // cannot change later 
a = pi*rr*rr
console.log(a)
console.log(typeof rr/"s") // it is a NaN

console.log('-------------print with the " " ---------')
let f = "sara"
let s = 'I am "sara"'
console.log(s)


console.log('-------------class 2---------')
//class 2
// Arithmatic operations
let n1 = 3
let n2 = 2
let rrr = n1 % n2 

//check even or odd
if (n1%2 == 0)
    console.log("even")
else
console.log("odd")

//or
console.log(n1%2 ==0? 'even':'odd')

console.log(n1%2 == 0? "even": "odd")


console.log('===============adding boolean values============')
let num3 = true
let num4 = true
let num5 = num3 + num4
console.log(num5 + typeof num5) //= 2 as true = 1 so 1+1 = 2


if(num5){
    console.log("it is true1")
}
   
if(0){
    console.log("it is true2")
}
if(undefined){
    console.log("it is true3")
}
if(null){
    console.log("it is true4")
}

console.log('---------------- ++ and -- -----------------------')
let xx = 4
let y = xx++
console.log(xx,y)

let num6 = 5
console.log(num6)
num6 = num6 + 2
console.log(num6)

let t = 4
console.log(t++,1)
console.log(t,2)

console.log(++t,3)
console.log(t,4)

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
let _n = "a"
let _nu2 = 1
let _data3 = _n > _nu2
console.log(_data3, typeof _n, typeof _nu2, typeof _data3)
/////////////////////////////////////////////////////////////////////////////////////

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



let nump 
console.log(nump)
console.log(typeof nump)
nump = 8 
console.log(nump)
console.log(typeof nump)
nump = nump + ''
console.log(nump)
console.log(typeof nump)

nump = nump - 2 
console.log(nump, typeof nump)

nump = !nump // num = 6 which is true, so not true is false. since I am useing !, so javascript will change it to boolean
console.log(nump, typeof nump)

//false
console.log(Boolean(null)) // this give be if it is true or not
console.log(Boolean(0))

//true
console.log(Boolean(7))



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

}*/

//2


/*
let nu = 4566682
nustr = nu.toString()
for(let y = 0; y <= nustr.length; y++){
    console.log(nustr.charAt(y)); 

}

var x = 4566682
while(x!=0){
    console.log(x%10) //returns 2
    x=Math.floor(x/10) // removes 2, x is 4566682, x / 10 is 456668.2, and Math.floor(456668.2) is 456668.
}

//functions
//functions main parts:name, parameters, return type
//here, we don't have to define a return type, it happens automatically 



function greet(){
    console.log('hello')
}

greet()
function greetModified(user){
return `hello ${user}` //return a string
}

let user = 'taha'
console.log(greetModified(user))


//Anonymous function
let add = function(num1,num2){ //I assigned the finction to a variable 
    return num1 +num2
}

let sum = add(1,2)
console.log(sum)


//defualt value in function
function adding(num1,num2=2){
    return num1+num2
}


console.log(adding(3))


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


//class 3
let myf = function(){

}
console.log(typeof myf)*/
/*
let add = function(num1,num2){
    return num1 +num2
}

let sum = add(1) // apssing one value while we need 2 result in a NAN
console.log(sum)


//arrow function: used to make the code look better, less and more organised
greet => { // no parameters, we can remove the () and let
console.log("h")
return 1
}
console.log(greet()) //it returns 1


let addd = (n1,n2) =>{

}



//arrays
//let values = new Array()
let values = []
values.push(5)
values.push(7)
console.log(values) // size of an array is the last index +1
console.log(values.length)

//let values = [5,7,8]
console.log('for loop')
console.log(values[0])
for(num =0;num<=values.length;num++){ // the equal sign here will cause an error (undefined)
    console.log(values[num])
}



let ar = [1,5,"taha",5.5,[1,3,5],{tech:"js"}, function(){console.log("hello")}]
for(num = 0; num<ar.length;num++){ 
console.log(ar[num])}

ar[6](); // calling a function from inside the array



let n= ["Taha", "ahmed", "saad"]
n.push("raad")
n[4] = "ahmed"

console.log(n)

for (let x in n){   //print each name with it's index
    console.log(n[x],x)
}
*/
/*
let a = [1,2,4,5]
console.log("return" + a.push(7),a)//give me the index of the array length 

console.log("return" + a.pop(),a)
console.log("return" + a.pop(5),a)//give me the index of the removed element
console.log("return" + a.shift(),a) //remove the top element and shift. Returns the values that we removed
console.log("return" + a.unshift(3),a)  //insert an element in index 0 and shift the rest to the right. Returns the length


let a = [7,2,4]
a.push(11)
a.push(12)
a.push(7)
a.push(15)
//console.log("return"+a.splice(3),a) //a.splice(3) is called, which starts removing elements from index 3 (inclusive) onwards.
//Without specifying how many elements to remove, splice() will remove all elements from the start index (3) to the end of the array.
//console.log("return"+a.splice(2,1),a)
//console.log("return"+a.splice(2,2),a)
console.log("return befor" + a)
console.log("return"+a.splice(2,2,11,15),a) //start from 2 and remove 2 and replace with 11 and 15





let num = []
num[0] =5
num[99] = 9
console.log(num)
console.log(num.length)


for (let n of num){ // we used of, so it will print the values.unlike in, it will print the index
    console.log(n)
}


//why do we need destructuring of array


// Swapping values without using a third variable

let a = 5
let b = 7

console.log("Before swap: a = " + a + " b = " + b);

a = a + b //make it 12
b = a - b //make it 5
a = a - b //make it 7 

console.log("After swap: a = " + a + " b = " + b);

let [m, n] = [5, 6];
[m, n] = [n, m];
console.log(m, n);
*//*
let w ="my name is taha khan".split(' ')
console.log(w)
let[a1,a2,a3,...a4] = w
console.log(a4)
//a1 gets "my", a2 gets "name", a3 gets "is", and the rest of the array is assigned to a4.



let num = [2,4,5,6,8]
//console.log("dir from for each"+ num.forEach()) // I need to define an function
num.forEach((n)=>{ //printng each element after doing a spicifice action in the function
    if (n%2 ==0){
    console.log(n)}
})
//or
console.log(num.filter(n=> n > 3))

num.filter(n => n>3).forEach(n=> {
    console.log(n)
})


num.forEach((n)=>{ //printng each element after doing a spicifice action in the function
    console.log(n)
})

num.forEach((n,i,nums)=>{ //giving 3 parameters to the function
    console.log(n,i,nums)
})



//map is to do an action to the values before printing them
let num2 = [2,4,5,6,8]
num2.filter(n => n>3).map(n => n*2).forEach(n=> {
    console.log(n)
})

//suppose you have a list of items. If length of items is greater 5 then print the length multiply by 2




let items = ["Apple", "samsung", "motorola", "nokia", "huwaei"];

items.filter(n => n.length > 5).map(n => n.length * 2).forEach(n => {
    console.log(n);
});
//or
let filterd = items.filter(n=> n.length > 5) //remove each item that has a length more than 5
let mapped = filterd.map(n => n.length*2) // change the value of their length to the double,return the result of the expression n.length * 2, array now is [14,16,12]
let fin = mapped.forEach(n => {console.log(n)}) //print for each value


console.log("-------q2----------")

let numbers = [2,4,7,99,88,12,33];

numbers.filter(n => n > 10 && n%2 == 0).map(n => n * 2).forEach(n => {
    console.log(n);
});
let numb = [2,4,5,6,8];
console.log("-------q3----------")

let r = numb.filter(n=> n%2===0).map(n=>n*2).reduce((a,b) => a+b) //reducing the result into one single value
console.log(r)
let r1 = numb.filter(n=> n%2===0).map(n=>n*2).reduce((a,b) => a*b) //reducing the result into one single value
console.log(r1)

//suppose you have a list of items. If length of items is greater 5 then concatenate the x in the items and later concatenate all items together and print

console.log("-------q4----------")


let item = ["Apple", "samsung", "motorola", "nokia", "huwaei"];

let re =item.filter(n => n.length > 5).map(n => n + 'X').reduce((a,b) =>a+b)

console.log(re)


console.log('-------------recursion------------');

function fa(num) {
    if (num == 0 || num == 1) {
        return 1} 
        else {
        return num * fa(num - 1);
    }
}


console.log(fa(5))


//class 4
console.log("-------class 4---------")
let map = new Map()
map.set("taha","java")
map.set("ahmed","js")
map.set("khan", "node")
map.set("khan", "ml") //update the value
console.log(map.get("taha")) //returns java
console.log(map) //print the whole map
console.log(map.keys())//pront all the keys
console.log(map.has("taha")) //check if key exist 

for(let [k,v] of map){
    console.log(k, " : " ,v)
}

map.forEach((v,k)=>{
   console.log(k, " : " ,v)

} )


//creat the map that has the key as number(employee) and values as string (Name). print the values that has id more than 101
console.log("------------q1---------")

let mapp = new Map();
mapp.set(123, "java");
mapp.set(100, "ahmed");
mapp.set(966, "node");
mapp.set(966, "nodeh"); //updating the values assotiated with 966


mapp.forEach((value, key) => { //it is expecting 3 elements in this order
    if (key > 101) {
        console.log(key, ":", value);
    }
});

console.log("--------q2-------")
//having a list of numbers and I want to find out the numbers that are repeating and find the sum of repeated numbers
let num1 = [1,2,3,5,5,1]

let mappp = new Map()
let ssum = 0
for (x of num1){
    if(mappp.has(x)){
        mappp.set(x,mappp.get(x)+1)
    }
    else{
        mappp.set(x,1)
    }
}

mappp.forEach((v,k)=>{
    if(v >1)
    ssum += v*k
})

console.log(mappp)
console.log(ssum)



console.log("---------Sets------------")
let nums = new Set()
nums.add(3)
nums.add(3) // it will not add repeating values
nums.add("sara")
console.log(nums)
for (let x of nums){
    console.log(x)
}

nums.forEach(x=> {
    console.log(x)
})

//array and set: array we can have repeating value but set we cant
*/

console.log("--------------OBJECTS---------------")
let eng1 = {} //empty obj
console.log(typeof eng1)

eng1 = {
    name: "sara",
    id: 123,
    'work exp' : 4
}

console.log(eng1.name)
//or
console.log(eng1['name'])


//to create obj from the same type

function Employee(name,tech){
    this.name = name;
    this.tech = tech
    this.work= function(){
        console.log(`${this.name} solving bug`)
    }
}

let em1 = new Employee("sara", "JS")
console.log(em1)
em1.work()


function laptop(brand,ram,cpu){
    this.brand = brand;
    this.ram = ram;
    this.cpu = cpu;
    this.work= function(){
        console.log(`${this.brand}  is running perfectly`) //
    }

}

console.log("---laptop 1---")
let l1 = new laptop("hp",8, 'i7')
console.log(l1)
l1.ram = 20
l1.work()



console.log("---laptop 2---")

let l2 = new laptop("Dell",6, 'i4')
console.log(l1)
l2.work()



//
console.log("------------obj2 ----------------")

let Eng={ // obj inside another
    name: "sara",
    laptop:{
        cpu:'i7',
        brand:null
    }

}

console.log(Eng)
console.log(Eng.laptop.brand?.length) //checks if barnd exists

delete Eng.laptop
console.log(Eng) // deleting spicific value


for (let key in Eng){
    console.log(key, Eng[key])
}

/*function pri(obj){
    for(let key in obj){
        if (obj.hasOwnProperty(key)){
            if(typeof obj[key] ==='object' && obj[key !== null {}])
        }
    }
}*/

// lap 1 has a method to compare cpu of lap1 with lap 2 and prints wich is
console.log("-------------q3----------------")
let laptop1 = {
    cpu: 'i9',
    compare: function(otherLaptop) {
        if (this.cpu > otherLaptop.cpu) {
            console.log("Laptop 1 is faster");
        } else if (this.cpu < otherLaptop.cpu) {
            console.log("Laptop 2 is faster");
        } else {
            console.log("Both laptops have the same CPU speed");
        }
    }
};

let laptop2 = {
    cpu: 'i7'
};

laptop1.compare(laptop2); // Output: Laptop 1 is faster




console.log("--------")


var myVar = 1;
function writeIt(){
var myVar = 2;
console.log("Variable = " + myVar);  
	writeMore();
 }
function writeMore(){
console.log("Variable = " + myVar);   }
writeIt();




