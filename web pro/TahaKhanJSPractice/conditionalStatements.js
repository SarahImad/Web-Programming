//if else
let num1=6
let num2=4
let result=num1>num2
if(result){
    console.log("num1 is greater than num2");
}
   
else{
    console("num1 is less than num2")
}
    

console.log("bye")

//find odd even
let num=6
if(num%2==0){
    result="Even"

}
else{
 result="Odd"
}
console.log(result)

//Ternary operator
result=(num%2==0)?"Even":"Odd"
console.log(result)

//Switch case
let day="Monday1"
switch(day){
    case "Monday":
        console.log("wakeup at 4.0 am")
        break
    case "Tuesday":
        console.log("wakeup at 5.0 am")
        break
    case "Wednesday":
        console.log("wakeup at 6.0 am")
        break
    default:
        console.log("its weekend")


}
