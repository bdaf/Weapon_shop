package com.bdaf.weapon_shop.service;

import com.bdaf.weapon_shop.entity.Product;

import java.util.List;

public interface ProductService {
    Product findProductById(Long aProductId);

    List<Product> findAllProducts();
}
