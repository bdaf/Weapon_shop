package com.bdaf.weapon_shop.service;

import com.bdaf.weapon_shop.entity.Category;
import com.bdaf.weapon_shop.entity.Discount;
import com.bdaf.weapon_shop.repository.CategoryRepository;
import com.bdaf.weapon_shop.repository.DiscountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CategoryServiceImpl implements CategoryService{

    @Autowired
    private CategoryRepository categoryRepository;

    @Autowired
    private DiscountRepository discountRepository;

    private Category findCategoryByName(String aName) {
        return categoryRepository.findCategoryByName(aName);
    }

    // if category already was in database, thor exception
    public Category saveCategoryAndIfAlreadyExistsThrowException(Category aCategory){
        if(findCategoryByName(aCategory.getName()) != null){
            throw new IllegalArgumentException("Category already exists: "+aCategory.getName());
        }
        return categoryRepository.save(aCategory);
    }


    public Category saveCategoryToDatabaseIfNotExists(Category aCategory) {
        Category category = findCategoryByName(aCategory.getName());
        if (category != null) return categoryRepository.save(category);
        return categoryRepository.save(aCategory);
    }

    @Override
    public List<Category> findAllCategories() {
        return categoryRepository.findAll();
    }

    @Override
    public Category findCategoryById(Long aCategoryId) {
        return categoryRepository.findById(aCategoryId).get();
    }

    @Override
    public Category findById(Long aCategoryId) {
        return categoryRepository.findById(aCategoryId).get();
    }

    @Override
    public Category saveDiscountToCategory(Long aCategoryId, Discount aDiscount) {
        Discount discount = discountRepository.findById(aDiscount.getDiscountId()).get();
        Category category = categoryRepository.findById(aCategoryId).get();
        boolean ifCategoryHasThisDiscount = category.getDiscounts().stream().anyMatch(d -> d.getDiscountId() == discount.getDiscountId());
        if(ifCategoryHasThisDiscount) throw new IllegalArgumentException("Category already has discount with id: "+discount.getDiscountId());
        category.addDiscount(discount);
        return categoryRepository.save(category);
    }

    @Override
    public void deleteDiscountFromCategory(Long aCategoryId, Discount aDiscount) {
        Discount discount = discountRepository.findById(aDiscount.getDiscountId()).get();
        Category category = categoryRepository.findById(aCategoryId).get();
        Optional<Discount> discountToDelete = category.getDiscounts().stream().filter(d -> d.getDiscountId() == discount.getDiscountId()).findAny();
        if(discountToDelete.isEmpty()) throw new IllegalArgumentException("This discount is already deleted or missing in this category. Category ID: " + aCategoryId+", Discount ID: "+aDiscount.getDiscountId());
        category.getDiscounts().remove(discountToDelete.get());
    }
}
