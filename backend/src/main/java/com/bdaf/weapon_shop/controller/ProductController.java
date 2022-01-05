package com.bdaf.weapon_shop.controller;

import com.bdaf.weapon_shop.entity.Product;
import com.bdaf.weapon_shop.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products")
public class ProductController {

    @Autowired
    private ProductService productService;

    @GetMapping
    public List<Product> getAllProducts(){
        return productService.findAllProducts();
    }

    @GetMapping("/{id}")
    public Product getProductById(@PathVariable("id") Long aProductId){
        return productService.findProductById(aProductId);
    }

    @PostMapping
    public Product saveProduct(@RequestBody Product aProduct){
        return productService.addProduct(aProduct);
    }
}
