import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../catalog/product.module';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  @Input() product!:IProduct
  @Output() buy = new EventEmitter()

  getImageUrl(productName:string){
    if(!productName) return ''
    return '/assets/images/robot-parts/'+productName;
  }

  buyButton(product:IProduct){
    this.buy.emit()
  }
}
