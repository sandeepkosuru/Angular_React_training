import { Component } from '@angular/core';
import { Stock} from '../../model/stock'
@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css']
})

export class StockItemComponent {
  
  favourite = true;
  stock : Stock
  stockClasses = {}
  stockStyles = {}
  stocks = []

  constructor(){
    this.favourite = false;
    this.stocks = [new Stock('Shirt','SHR100',80,81.6),new Stock('Jeans','JNS100',100,100.6), new Stock('Hoodies','HDS100',90,89.6)]
    // let diff = (this.stock.price/this.stock.prevPrice) - 1
    // let largeChange = Math.abs(diff) > 0.01
    
    // this.stockClasses = {
    //   "positive" : this.stock.isPositiveChange(),
    //   "negative" : !this.stock.isPositiveChange(),
    //   "large-change" : largeChange,
    //   "small-change" : !largeChange,
    // }
    // this.stockStyles = {
    //   "color" : this.stock.isPositiveChange() ? "green" : "red" ,
    //   "font-size" : largeChange ? "10.2em" : "0.8em" ,
    // }
  }
  toggleFav(e,i){
    this.stocks[i].favourite = !this.stocks[i].favourite;
    console.log("Im in toggle fav",e)
  }
}
