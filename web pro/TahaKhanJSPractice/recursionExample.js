function show(){
    console.log("hi")
    let y=4
}

function abc(){
    show()
}
abc()
//log function will be on top of the stack

//calling a function inside itself will give you stack overflow

//calculate factorial using recursion

//n!=n*(n-1)*(n-2)   and 0!=1

function fact(n){
    if(n==0){
        return 1
    }
    else{
        return n*fact(n-1)
    }
    
}
let factorial=fact(5)
console.log(factorial)
