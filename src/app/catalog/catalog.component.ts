import { Component, Inject } from '@angular/core';
import { IProduct } from './product.module';
import { CartService } from '../cart.service';
import { ProductService } from './product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent {
  products:any;
  filter:string='';

  constructor(private cartSvc:CartService,private productSvc:ProductService,private router:Router, private route:ActivatedRoute){
    
  }

  ngOnInit(){
    this.productSvc.getProducts().subscribe((products)=>{
      this.products=products
    })
    this.route.queryParams.subscribe((params)=>{
      this.filter=params['filter']??''
    })
  }

  getFilteredProducts(){
    return this.filter === ''?this.products:this.products.filter((product:any)=> product.category===this.filter)
  }

  addToCart(product:IProduct){
    this.cartSvc.add(product)
    this.router.navigate(['/cart'])
  }
}
