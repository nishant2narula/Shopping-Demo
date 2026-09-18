import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {Product} from '../product';

@Component({
  selector: 'app-show-product',
  imports: [CommonModule],
  templateUrl: './show-product.html',
  styleUrl: './show-product.css',
})
export class ShowProduct implements OnInit {

      products!: Observable<Product[]>;

      constructor(private productService:ProductService, private router: Router) {}

      ngOnInit(): void {
            this.fetchProductList();
      }

      fetchProductList(){
        this.products = this.productService.getProductsList();
      }

      deleteProduct(id:number){
        this.productService.deleteProduct(id)
        .subscribe(
          data=>{
            console.log(data);
            this.fetchProductList();
          },
          error=>console.log(error));
      }

      productDetails(id:number){
        this.router.navigate(['details',id]);
      }

      updateProduct(product:Product){
        this.router.navigate(['update', product]);
      }


}
