class Person{
    constructor(age){
        this.age = age
    }
    greeting(){
        return ("Sandeep"+this.age)
    }
    getAge(){
        return this.age
    }
}

let p = new Person(23)
console.log(p.greeting())
console.log(p.getAge())