import { Component, NgModule, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CreateProduct } from './create-product/create-product';
import { ReadProduct } from './read-product/read-product';
import { ShowProduct } from './show-product/show-product';
import { UpdateProduct } from './update-product/update-product';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    CreateProduct,
    ReadProduct,
    ShowProduct,
    UpdateProduct,
    CommonModule,
    FormsModule, 
    RouterLink, 
    RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css'
})



export class App {
  protected readonly title = signal('Shopping-Demo');
}
