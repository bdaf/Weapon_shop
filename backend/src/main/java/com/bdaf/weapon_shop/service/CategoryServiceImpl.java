package com.bdaf.weapon_shop.service;

import com.bdaf.weapon_shop.entity.Category;
import com.bdaf.weapon_shop.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryServiceImpl implements CategoryService{

    @Autowired
    private CategoryRepository categoryRepository;

    private Category findCategoryByName(String aName) {
        return categoryRepository.findCategoryByName(aName);
    }

    public Category saveCategoryToDatabaseIfNotExists(Category aCategory) {
        Category category = findCategoryByName(aCategory.getName());
        if (category == null) {
            category = categoryRepository.save(aCategory);
        }
        return category;
    }

    @Override
    public List<Category> findAllCategories() {
        return categoryRepository.findAll();
    }

    @Override
    public Category findCategoryById(Long aCategoryId) {
        return categoryRepository.findById(aCategoryId).get();
    }
}
