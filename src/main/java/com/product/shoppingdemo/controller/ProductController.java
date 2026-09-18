package com.product.shoppingdemo.controller;

import com.product.shoppingdemo.model.Product;
import com.product.shoppingdemo.repository.ProductRepository;
import com.product.shoppingdemo.service.ProductService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.util.List;
@RestController
@RequestMapping("/api")
public class ProductController {

    @Autowired
    private ProductService productService;

    @GetMapping("/products")
    public Flux<Product> getProducts() {
        return productService.getProducts() ;
    }

    @PostMapping("/products")
    public Mono<Product> postProducts(@Valid @RequestBody Product product) {
        return productService.createProduct(product);
    }

    @GetMapping("/products/{id}")
    public Mono<Product> getProductById(@PathVariable(value = "id") Long id) {
        return productService.getProduct(id);
    }

    @PutMapping("/products/")
    public Mono<Product>  updateProduct(@Valid @RequestBody Product product) {
        return productService.updateProduct(product);
    }

    @DeleteMapping("/products/{id}")
    public Mono<Void> deleteProduct(@PathVariable(value = "id") Long id) {
        return productService.deleteProduct(id);
    }



}
