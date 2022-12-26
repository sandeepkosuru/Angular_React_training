import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TrailComponent } from './trail/trail.component';
import { StockItemComponent } from './stock/stock-item/stock-item.component';
import { TcsHydComponent } from './tcs/tcs-hyd/tcs-hyd.component';
import { FormsModule} from '@angular/forms'
@NgModule({
  declarations: [
    AppComponent, TrailComponent, StockItemComponent, TcsHydComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
