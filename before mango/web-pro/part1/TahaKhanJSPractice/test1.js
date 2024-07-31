let items=["Apple",'samsung','motorola','huwaei']
let result= items.filter(n=>n.length>5).map(x=>x+'X').reduce((a,b)=>a+b)

console.log(result)


//list of number {2,4,7,99,88,12,33} print out all alement multiply by 2 which are greater than 10 and even number

let nums=[2,4,7,99,88,12,33]
nums.filter(n=>n>10 && n%2==0).map(x=>x*2).forEach(n=>{
    console.log(n)
})


function show(){
    show()
}

show();