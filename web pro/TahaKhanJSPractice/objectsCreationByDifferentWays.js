//Blue print...if  you want to create multiple objects of same type
//Create a constructor function

function Employee(name,technology){
    this.name=name;
    this.technology=technology;
    this.work=function(){
        console.log(`${this.name} solving bug from 2 hours `)
    }

}

let employee1= new Employee("Taha","JS")
console.log(employee1)
let employee2= new Employee("Ahmed","Java")
console.log(employee2)

employee1.technology='blockchain'
console.log(employee1)
employee1.work()
employee2.work()


function Laptop(brand,ram,cpu){
    this.brand=brand;
    this.ram=ram;
    this.cpu=cpu
    this.running=function(){
        console.log(`${this.brand} laptop is running perfectly `)
    }

}

let laptop1 = new Laptop("dell",16,3.4)
let laptop2 = new Laptop("hp",8,3.0)
console.log(laptop1)
console.log(laptop2)

laptop1.running()
laptop2.running()