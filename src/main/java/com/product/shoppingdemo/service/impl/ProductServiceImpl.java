package com.product.shoppingdemo.service.impl;

import com.product.shoppingdemo.model.Product;
import com.product.shoppingdemo.repository.ProductRepository;
import com.product.shoppingdemo.service.NextSequenceService;
import com.product.shoppingdemo.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Service
public class ProductServiceImpl implements ProductService {

    private ProductRepository productRepository;
    @Autowired
    private NextSequenceService nextSequenceService;
    public ProductServiceImpl(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @Override
    public Flux<Product> getProducts() {
        return productRepository.findAll();
    }

    @Override
    public Mono<Product> getProduct(Long id) {
        return productRepository.findById(id);
    }

    @Override
    public Mono<Product> createProduct(Product product) {
        product.setId(nextSequenceService.getNextSequence("customSequences"));
        return productRepository.save(product);
    }

    @Override
    public Mono<Product> updateProduct(Product product) {
        return productRepository.findById(product.getId()).flatMap(existingProduct ->{
            existingProduct.setProductName(product.getProductName());
            existingProduct.setPrice(product.getPrice());
            existingProduct.setProductDesc(product.getProductDesc());
            return productRepository.save(existingProduct);
        });
    }

    @Override
    public Mono<Void> deleteProduct(Long id) {
        return productRepository.deleteById(id);
    }


}
