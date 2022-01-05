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
        validationOfCategoryAndProducer(aProduct, aProduct);

        return productRepository.save(aProduct);
    }

    @Override
    public Product updateProductById(Product aProduct, Long aProductId) {
        // validation - if product with that ID exists
        Product productToUpdate = productRepository.getById(aProductId);
        if(productToUpdate == null) throw new IllegalArgumentException("The is no product with following ID in database: "+aProductId);

        // updating
        if(aProduct.getName() != null && aProduct.getName().equalsIgnoreCase("")){
            productToUpdate.setName(aProduct.getName());
        }
        if(aProduct.getDescription() != null && aProduct.getDescription().equalsIgnoreCase("")){
            productToUpdate.setDescription(aProduct.getDescription());
        }
        if(aProduct.getPrice() != null && aProduct.getPrice() > 0){
            productToUpdate.setPrice(aProduct.getPrice());
        }
        if(aProduct.getAmount() != null && aProduct.getAmount() >= 0){
            productToUpdate.setAmount(aProduct.getAmount());
        }
        if(aProduct.getPhotoUrl() != null && aProduct.getPhotoUrl().equalsIgnoreCase("")){
            productToUpdate.setPhotoUrl(aProduct.getPhotoUrl());
        }
        validationOfCategoryAndProducer(aProduct, productToUpdate);

        return productRepository.save(productToUpdate);
    }

    private void validationOfCategoryAndProducer(Product aProduct, Product aProductToUpdate) {
        // validation and update of category
        aProductToUpdate.setCategory(saveCategoryToDatabaseIfNotExists(aProduct));

        // validation of producer
        aProductToUpdate.setProducer(saveProducerToDatabaseIfNotExists(aProduct));
    }

    private Producer saveProducerToDatabaseIfNotExists(Product aProduct) {
        Producer producer = producerService.findProducerByNip(aProduct.getProducer().getNip());
        if (producer == null) {
            producer = producerService.addProducer(aProduct.getProducer());
        }
        return producer;
    }

    private Category saveCategoryToDatabaseIfNotExists(Product aProduct) {
        Category category = categoryService.findCategoryByName(aProduct.getCategory().getName());
        if (category == null) {
            category = categoryService.addCategory(aProduct.getCategory());
        }
        return category;
    }

    @Override
    public void deleteProductById(Long aProductId) {

    }
}
