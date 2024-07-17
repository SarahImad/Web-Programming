let itEngineer={
    name:"Taha",
    technology:"JS",
    laptop:{
        cpu:'i7',
        ram:'16gb',
        brand:'asus'


    }
   }
console.log(itEngineer)
console.log(itEngineer.laptop)
//console.log(itEngineer.laptop.brand.length)
console.log(itEngineer.laptop.brand?.length)//it will check if property brand1 exist then only will call length method
//delete itEngineer.laptop
console.log(itEngineer)

//iterate a object using loop and printing values
for(let key in itEngineer){
   
        console.log(key,itEngineer[key])
    
   
    }

// Function to print all keys and values, including nested objects
function printObject(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (typeof obj[key] === 'object' && obj[key] !== null) {
                for (let innerKey in obj[key]) {
                    if (obj[key].hasOwnProperty(innerKey)) {
                        console.log(`${key}.${innerKey}: ${obj[key][innerKey]}`);
                    }
                }
            } else {
                console.log(`${key}: ${obj[key]}`);
            }
        }
    }
}

printObject(itEngineer);
    
