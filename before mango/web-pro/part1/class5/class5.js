/*var y=10;

if(true){
    let x=5;
    var z=10;
    console.log(x,z,y)

}

console.log(x,z,y)*/
//var make the variable globale, 
//while let makes it accecable within the block of code that it was defined in(local variable)
//so it is a good practice to use const to make sure that the variable is globale and wont change
/*
console.log("------------------------")
let db = new Array("")
console.log(typeof db)
// what is the type ?
//to know if the object is an array or not, we use Array.isArray to know
// or we can know by checking if it is an instance of an array using instanceof

let x1 = null
console.log(typeof x1)

let x2
console.log(typeof x2)







   
   function Employee1(id, name, age, Houseno, city, state, country, technologies) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.address = {
        Houseno: Houseno,
        city: city,
        state: state,
        country: country
    };
    this.technologies = technologies;
}

let employee1 = new Employee1(1, 'sara', 30, 33, '17', 'Dubai', 'SOM', 'UAE', 'Java,JS');
let employee2 = new Employee1(2, 'omnia', 25, 89, '23', 'New York', 'NY', 'USA', 'Python,JS');

console.log(employee1);
console.log(employee2);


//or 

function Address(houseno, city, state, country, brand) {
    this.Houseno = houseno;
    this.city = city;
    this.state = state;
    this.country = country;
    this.brand = brand;
}

function Employee22(id, name, age, address, technologies) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.address = address;
    this.technologies = technologies;
}

const address = new Address('17', 'dubai', 'som', 'UAE', 'asus');
const employee = new Employee22("102", "sara", 18, address, 'java,JS');

console.log(employee);

*/




let Employee={
    id:"102",
    name:"sara",
    age:18,
    address:{
        Houseno:'17',
        city:'dubai',
        state:'som',
        country:'UAE',
        brand:'asus'},
    technologies: ['java','JS']
   }

   console.log("==============converting===============")
   //object to JSON
   console.log(Employee)
   const empJSON = JSON.stringify(Employee)
   console.log(empJSON)

   //JSON to object
   const empinfo = JSON.parse(empJSON)
   console.log(empinfo)

   class a{
    constructor(){
        this.name='sara'
    }
}

   console.log("=======question1=========")
   let employees = [
    {
        id: "102",
        name: "Sara",
        age: 18,
        address: {
            Houseno: '17',
            city: new a(),
            state: 'Som',
            country: 'UAE',
            brand: 'Asus'
        },
        technologies: ['Java', 'JS']
    },
   
    {
        id: "103",
        name: "Fatima",
        age: 25,
        address: {
            Houseno: '21',
            city: 'New York',
            state: 'NY',
            country: 'USA',
            brand: 'Lenovo'
        },
        technologies: ['Python', 'C++']
    }]

    console.log(employees)
    const emp1JSON = JSON.stringify(employees)
    console.log(emp1JSON)
 
    //JSON to object
    const toOb = JSON.parse(emp1JSON)
    console.log(toOb)
 

    //read data from Json and apend those info into the html page
    console.log("================")



    