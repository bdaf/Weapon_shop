package com.bdaf.weapon_shop.service;

import com.bdaf.weapon_shop.entity.Category;
import com.bdaf.weapon_shop.entity.Producer;
import com.bdaf.weapon_shop.entity.Product;
import com.bdaf.weapon_shop.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private CategoryService categoryService;

    @Autowired
    private ProducerService producerService;

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
        // validation of category
        Category category = categoryService.findCategoryByName(aProduct.getCategory().getName());
        if(category == null){
            category = categoryService.addCategory(aProduct.getCategory());
        }
        aProduct.setCategory(category);

        // validation of producer
        Producer producer = producerService.findProducerByNip(aProduct.getProducer().getNip());
        if(producer == null){
            producer = producerService.addProducer(aProduct.getProducer());
        }
        aProduct.setProducer(producer);

        return productRepository.save(aProduct);
    }
}
