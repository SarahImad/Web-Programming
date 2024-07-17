//forEach functio loop
let nums=[2,4,5,6,8]
//nums.forEach() this returns one bvalue at a time
nums.forEach((n)=>{
    console.log(n*2)
})

nums.forEach((n,i,nums)=>{
    console.log(n,i,nums)
})

//print even numbers in array

//if only  one parameter no need of braces in arrow function
nums.forEach(n=>{
    //this will call for each and every elememnt and bulky code
    if(n%2==0){
        console.log(n)
    }
    
})
//Using filter
//nums.filter(n=>n%2==0)  will return array of even numbers
console.log(nums.filter(n=>n%2==0))
nums.filter(n=>n%2==0).forEach(n=>{
    console.log(n)
})

nums.filter(n=>n>3).forEach(n=>{
    console.log(n)
})

//map will take a value and change
nums.filter(n=>n%2==0).map(n=>n*2).forEach(n=>{
    console.log(n)
})

//Reduce will reduce to a single value
let result=nums.filter(n=>n%2===0).map(n=>n*2)
.reduce((a,b)=>a+b)
console.log("this result is after reduce "+result)
