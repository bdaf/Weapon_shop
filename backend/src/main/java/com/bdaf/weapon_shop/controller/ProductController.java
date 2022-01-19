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

    @GetMapping("/order/name/asc")
    public List<Product> getAllProductsOrderedByNameAsc() {
        return productService.findAllProductsOrderedByNameAsc();
    }

    @GetMapping("/order/name/desc")
    public List<Product> getAllProductsOrderedByNameDesc() {
        return productService.findAllProductsOrderedByNameDesc();
    }

    @GetMapping("/order/date/asc")
    public List<Product> getAllProductsOrderedByReleaseDateAsc() {
        return productService.findAllProductsOrderedByReleaseDateAsc();
    }

    @GetMapping("/order/date/desc")
    public List<Product> getAllProductsOrderedByReleaseDateDesc() {
        return productService.findAllProductsOrderedByReleaseDateDesc();
    }

    @GetMapping("/order/price/asc")
    public List<Product> getAllProductsOrderedByPrizeAsc() {
        return productService.findAllProductsOrderedByPriceAsc();
    }

    @GetMapping("/order/price/desc")
    public List<Product> getAllProductsOrderedByPrizeDesc() {
        return productService.findAllProductsOrderedByPriceDesc();
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
