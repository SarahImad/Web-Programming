//Mehods in object
let laptop={
    cpu:'i9',
    ram:16,
    brand:'hp',

    getConfig:function(){
        console.log("hello from laptop object")
        console.log(laptop.cpu)
        console.log(this.cpu)

    }
}

laptop.getConfig()

//This keyword

//Write two laptop objects and laptop1 should have a compare mmethod to compare with reference to cpu
let laptop1={
    cpu:'i9',
    ram:16,
    brand:'hp',
    compare:function(otherLaptop){
        if(this.ram>otherLaptop.ram)
            console.log("Laptop1 is faster")
       
        else
            console.log("Laptop2 is faster")
   
    },
    getConfig:()=>{
        console.log(this.cpu)
    }

}

let laptop2={
    cpu:'i7',
    ram:8,
    brand:'apple'
}

laptop1.compare(laptop2)