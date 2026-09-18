package com.product.shoppingdemo.model;


import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("Product")
@Data
public class Product {

    private Product(){
        super();
    }

    @Id
    private Long id;

    private String productName;

    private Integer price;

    private String productDesc;

}
