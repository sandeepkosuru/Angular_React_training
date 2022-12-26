export class Stock {
    favourite = false
    constructor( public name,public code,public price,public prevPrice){
    }
    isPositiveChange(){
        return this.price >= this.prevPrice
    }
}