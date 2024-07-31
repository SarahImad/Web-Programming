//let values= new Array(); one way to create empty array

let values=[]//another way for creating empty array
values.push(5)
values.push(7)
console.log(values)
console.log(values.length)

//let values =[5,7,8]

console.log(values[0])
for(num=0;num<values.length;num++){
    console.log(values[num])

    }

    let mixedArray =  [1,5,"taha",5.5,[1,3,5],{technology:"js"},function(){console.log("hello")}]
    for(num=0;num<mixedArray.length;num++){
        console.log(mixedArray[num])
        if(num==4){
            for(num1=0;num1<mixedArray[num].length;num1++){
                if(num1==1){
                    console.log(mixedArray[num][num1])
                }
                
            }
        }
        
    
        }

        //Calling the function of array
        mixedArray[6]()

//Array of strings
let allNames=["Taha","ahmed","saad"]
//Adding extra elements
allNames.push("raad")
allNames[4]="ahmed"

//for in used for objects it will give you index or key
for(let x in allNames){
    console.log(allNames[x])

}

//Methods in array
let myArray=[1,2,4,5]
//return  of push is new size of array
console.log("return of push method in array "+myArray.push(7),myArray)

//method pop and its return will be value removed

console.log("return of pop method in array "+myArray.pop(),myArray)
console.log("return of pop method in array "+myArray.pop(5),myArray)
//Shift method , will remove the first element and shift all elements to right side
console.log("return of shift method in array "+myArray.shift(),myArray)

//unshift method , will remove the first element and shift all elements to right side
console.log("return of unshift method in array "+myArray.unshift(7),myArray)

//Splice
myArray.push(11)
myArray.push(12)
myArray.push(7)
myArray.push(15)
//console.log("return of splice method in array "+myArray.splice(3),myArray)
//console.log("return of splice method in array "+myArray.splice(2,1),myArray)
//console.log("return of splice method in array "+myArray.splice(2,2),myArray)
//console.log("my array before splice "+myArray)
//console.log("return of splice method in array "+myArray.splice(2,2,11,15),myArray)

//for of loop
let nums =[];
nums[0]=5
nums[99]=9
console.log(nums)
console.log(nums.length)

for(let n of nums){
    console.log(n)

}

//Destructuring of array
let arrayOfNumbers=[1,6,5,4]
console.log(arrayOfNumbers)
//suppose you want to  pass the values as parameter or send to internet
//like a=1, b=6 and ..
//one way is let a=arrayOfNumbers[0] and so on
//other way is destructuring
let[a,b,c,d]=arrayOfNumbers
console.log(d)
let[x,y,,z]=arrayOfNumbers
console.log(z)

//Write a program to swap two numbers in java script without using 3rd variable


//split method to create array of string
let words = "my name is taha khan technology java".split(' ')
console.log(words)
//destructuring
//let[a1,a2,a3,a4,a5]=words
let[a1,a2,a3,...a4]=words
console.log(a4)












