//set is a collection which will have unique values and not ordered
//let nums=new Set("bookkeeper"); it will create a set of characters
//console.log(nums)
let nums=new Set()
nums.add(3)
nums.add(3)
nums.add(4)
nums.add("taha")
nums.add("khan")
nums.add("khan")
nums.add("khan")
console.log(nums)
for (let x of nums){
    console.log(x)
}

nums.forEach(x=>{
    console.log(x)
})

//print a specific value in set as set is not having index
console.log(nums.has("taha"))