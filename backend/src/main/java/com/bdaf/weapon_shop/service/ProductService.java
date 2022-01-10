package com.bdaf.weapon_shop.service;

import com.bdaf.weapon_shop.entity.Product;

import java.util.List;

public interface ProductService {
    Product findProductById(Long aProductId);

    List<Product> findAllProducts();

    Product addProduct(Product aProduct);

    Product updateProductById(Product aProduct, Long aProductId);

    void deleteProductById(Long aProductId);

    Product findById(Long aProductId);
}
