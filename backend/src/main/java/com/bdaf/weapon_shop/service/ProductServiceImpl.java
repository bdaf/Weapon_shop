package com.bdaf.weapon_shop.service;

import com.bdaf.weapon_shop.entity.Product;
import com.bdaf.weapon_shop.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    private ProductRepository productRepository;

    @Override
    public Product findProductById(Long aProductId) {
        return productRepository.findById(aProductId).get();
    }

    @Override
    public List<Product> findAllProducts() {
        return productRepository.findAll();
    }

    @Override
    public Product addProduct(Product aProduct) {
        return productRepository.save(aProduct);
    }
}
