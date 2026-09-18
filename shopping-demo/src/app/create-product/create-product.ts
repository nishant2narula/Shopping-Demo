import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-product',
  imports: [
     CommonModule,
    FormsModule
  ],
  templateUrl: './create-product.html',
  styleUrl: './create-product.css',
})
export class CreateProduct implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private productService: ProductService){}

   product: Product = new Product();

    submitted: boolean = false;

    ngOnInit(){}

    onSubmit(){
      this.saveProduct();
    }

    saveProduct(): void{
      this.productService.createProduct(this.product).subscribe({
      next: (data) => {
        console.log('Product created successfully:', data);
        // Navigate back ONLY after update completes
      },
      error: (err) => console.error('Error creating a product:', err)
    });
        this.product = new Product();
         this.gotoList();
    }

     gotoList(){
      this.router.navigate(['/products']);
    }

   


}
