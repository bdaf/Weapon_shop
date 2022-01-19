package com.bdaf.weapon_shop.service;

import com.bdaf.weapon_shop.entity.Discount;
import com.bdaf.weapon_shop.entity.Product;
import com.bdaf.weapon_shop.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Date;
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
        List<Product> products = productRepository.findProductsByForSale(true);
        return getDiscountedProducts(products);
    }
    @Override
    public List<Product> findAllProductsOrderedByName() {
        List<Product> products = productRepository.findProductsByForSaleOrderByName(true);
        return getDiscountedProducts(products);
    }

    @Override
    public List<Product> findAllProductsOrderedByPrice() {
        List<Product> products = productRepository.findProductsByForSaleOrderByPrice(true);
        return getDiscountedProducts(products);
    }

    private List<Product> getDiscountedProducts(List<Product> aProductsToDiscount) {
        for (int i = 0; i < aProductsToDiscount.size(); i++) {
            aProductsToDiscount.set(i, getDiscountedProduct(aProductsToDiscount.get(i)));
        }
        return aProductsToDiscount;
    }

    @Override
    public Product fetchProductForSaleById(Long aProductId) {
        Product product = productRepository.findProductByProductIdAndForSale(aProductId, true);
        if (product == null) {
            product = productRepository.findById(aProductId).get();
        }
        return getDiscountedProduct(product);
    }


    @Override
    public Product addProduct(Product aProduct) {
        // validation of category
        validationOfCategoryAndProducer(aProduct, aProduct);
        // find product in DB
        Product product = productRepository.findProductByNameAndProducer(aProduct.getName(), aProduct.getProducer());
        if (product == null) { // if new product: create new
            product = productRepository.save(aProduct);
        } else { // if products are the same: increase amount
            product.setAmount(product.getAmount()+aProduct.getAmount());
            product = productRepository.save(product);
        }
        return product;
    }

    @Override
    public Product updateProductById(Product aProduct, Long aProductId) {
        // validation - if product with that ID exists
        Product productToUpdate = productRepository.getById(aProductId);
        if(productToUpdate == null) throw new IllegalArgumentException("The is no product with following ID in database: "+aProductId);

        // updating
        if(aProduct.getName() != null && !aProduct.getName().equalsIgnoreCase("")){
            productToUpdate.setName(aProduct.getName());
        }
        if(aProduct.getDescription() != null && !aProduct.getDescription().equalsIgnoreCase("")){
            productToUpdate.setDescription(aProduct.getDescription());
        }
        if(aProduct.getPrice() != null && aProduct.getPrice() > 0){
            productToUpdate.setPrice(aProduct.getPrice());
        }
        if(aProduct.getAmount() != null && aProduct.getAmount() >= 0){
            productToUpdate.setAmount(aProduct.getAmount());
        }
        if(aProduct.getPhotoUrl() != null && !aProduct.getPhotoUrl().equalsIgnoreCase("")){
            productToUpdate.setPhotoUrl(aProduct.getPhotoUrl());
        }
        validationOfCategoryAndProducer(aProduct, productToUpdate);

        return productRepository.save(productToUpdate);
    }

    private void validationOfCategoryAndProducer(Product aProduct, Product aProductToUpdate) {
        // validation and update of category
        aProductToUpdate.setCategory(categoryService.saveCategoryToDatabaseIfNotExists(aProduct.getCategory()));

        // validation and update of producer
        aProductToUpdate.setProducer(producerService.saveProducerToDatabaseIfNotExists(aProduct.getProducer()));
    }


    @Override
    public void deleteProductById(Long aProductId) {
        productRepository.deleteById(aProductId);
    }

    @Override
    public Product findById(Long aProductId) {
        return productRepository.findById(aProductId).get();
    }

    private Product getDiscountedProduct(Product product) {
        // take category of product
        Long categoryId = product.getCategory().getCategoryId();
        List<Discount> discounts = categoryService.findById(categoryId).getDiscounts();
        // count the biggest discount which product has
        Discount theBiggestDiscount = null;
        Date now = new Date(System.currentTimeMillis()); // if date includes now
        for (int i = 0; i < discounts.size(); i++) {
            if ((theBiggestDiscount == null || // if is bigger than the biggest previous
                    theBiggestDiscount.getPercent() < discounts.get(i).getPercent())
                    && discounts.get(i).getFromDate().getTime() < now.getTime()
                    && now.getTime() < discounts.get(i).getToDate().getTime())
            theBiggestDiscount = discounts.get(i);
        }
        if (theBiggestDiscount != null) {
            Double priceAfterBiggestDiscount =product.getPrice() * (1 - theBiggestDiscount.getPercent());
            product.setPrice(Math.round(priceAfterBiggestDiscount*100)/100.0);
        }
        return product;
    }
}
