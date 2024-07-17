//map is like objects, key and values

let map = new Map();
map.set("taha","java")
map.set("ahmed","js")
map.set("khan","node")

//print whole map
console.log(map)
//print keys
console.log(map.keys())
//check if key exist
console.log(map.has("taha"))
//get a value u need to pass a key
console.log(map.get("taha"))

//print all values

for(let [k,v] of map){
    console.log(k," : ",v)
}

//map.set("khan","ML") //what will be output
//use for each
map.set("khan","ML")
map.forEach((v,k)=>{
    console.log(k," : ",v)
})

let emloyeeNameMap =new Map();
emloyeeNameMap.set(101,"Ahmed")
emloyeeNameMap.set(99,"Raad")
emloyeeNameMap.set(11,"Sahal")
emloyeeNameMap.set(102,"Ghano")
emloyeeNameMap.set(102,"Ghano1")

emloyeeNameMap.forEach((v,k)=>{
    if(k>101){
        console.log(v)
    }
})



//let listOFNumbrrs=[1,2,1,3]