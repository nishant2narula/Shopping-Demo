import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-read-product',
  imports: [CommonModule],
  templateUrl: './read-product.html',
  styleUrl: './read-product.css',
})
export class ReadProduct implements OnInit {
  id!: number;
  product!: Product;

  constructor(private route: ActivatedRoute, private router: Router, private productService: ProductService){}

  ngOnInit(): void {
    this.product = new Product();
    // 1. Convert route param to number safely
    this.id = Number(this.route.snapshot.params['id']);

   // 2. Fetch product details from service
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

  list(){
    this.router.navigate(['products']);
  }
  
  

}
