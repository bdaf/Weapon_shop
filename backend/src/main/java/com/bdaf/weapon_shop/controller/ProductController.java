package com.bdaf.weapon_shop.controller;

import com.bdaf.weapon_shop.entity.Product;
import com.bdaf.weapon_shop.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/products")
public class ProductController {

    @Autowired
    private ProductService productService;

    @GetMapping
    public List<Product> getAllProducts() {
        return productService.findAllProducts();
    }

    @GetMapping("/order/name")
    public List<Product> getAllProductsOrderedByName() {
        return productService.findAllProductsOrderedByName();
    }

    @GetMapping("/order/price")
    public List<Product> getAllProductsOrderedByPrize() {
        return productService.findAllProductsOrderedByPrice();
    }

    @GetMapping("/{id}")
    public Product getProductById(@PathVariable("id") Long aProductId) {
        return productService.findProductById(aProductId);
    }

    @PostMapping
    public Product saveProduct(@RequestBody Product aProduct) {
        return productService.addProduct(aProduct);
    }

    @PutMapping("/{id}")
    public Product updateProduct(@RequestBody Product aProduct, @PathVariable("id") Long aProductId) {
        return productService.updateProductById(aProduct, aProductId);
    }

    @DeleteMapping("/{id}")
    public String deleteProduct(@PathVariable("id") Long aProductId) {
        productService.deleteProductById(aProductId);
        return "Product with ID "+aProductId+" has been deleted successfully!";
    }
}
