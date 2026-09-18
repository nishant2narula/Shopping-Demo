import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update-product',
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './update-product.html',
  styleUrl: './update-product.css',
})
export class UpdateProduct implements OnInit {

   id!: number;
    product: Product = new Product();

    submitted: boolean = false;

      constructor(private route: ActivatedRoute, private router: Router, private productService: ProductService){}
     
    ngOnInit(): void {

      // 1. Extract id from route parameter
    this.id = Number(this.route.snapshot.params['id']);

    this.productService.getProduct(this.id).subscribe({
      next: (data: Product) => {
        console.log('Product details retrieved:', data);
        this.product = data;
      },
      error: (err) => {
        console.error('Error fetching product details:', err);
      }
    });
  }

    updateProduct(): void{
      this.productService.updateProduct(this.product).subscribe({
      next: (data) => {
        console.log('Product updated successfully:', data);
        // Navigate back ONLY after update completes
        this.gotoList();
      },
      error: (err) => console.error('Error updating product:', err)
    });
    }

    onSubmit(){
      this.updateProduct();
    }

    gotoList(){
      this.router.navigate(['/products']);
    }

}



