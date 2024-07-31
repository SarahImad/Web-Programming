class Emp {
    // Define class fields

  
    constructor(name, data) {
      this.name = name;
      this.data = data;
    }
  }
  
  // Create two objects of the class
  const emp1 = new Emp('Alice', [1, 2, 3]);
  const emp2 = new Emp('Bob', [4, 5, 6]);
  
  console.log(emp1); // Output: Emp { name: 'Alice', data: [ 1, 2, 3 ] }
  console.log(emp2); // Output: Emp { name: 'Bob', data: [ 4, 5, 6 ] }