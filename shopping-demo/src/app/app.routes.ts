import { RouterModule, Routes } from '@angular/router';
import { ShowProduct } from './show-product/show-product';
import { CreateProduct } from './create-product/create-product';
import { UpdateProduct } from './update-product/update-product';
import { ReadProduct } from './read-product/read-product';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {path:'', redirectTo:'products', pathMatch: 'full'},
     {path:'products', component: ShowProduct},
     {path:'add', component: CreateProduct},
     {path:'update', component: UpdateProduct},
     {path:'details/:id', component: ReadProduct},
];
