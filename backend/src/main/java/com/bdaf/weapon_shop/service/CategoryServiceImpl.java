package com.bdaf.weapon_shop.service;

import com.bdaf.weapon_shop.entity.Category;
import com.bdaf.weapon_shop.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CategoryServiceImpl implements CategoryService{

    @Autowired
    private CategoryRepository categoryRepository;

    private Category findCategoryByName(String aName) {
        return categoryRepository.findCategoryByName(aName);
    }

    private Category addCategory(Category aCategory) {
        return categoryRepository.save(aCategory);
    }

    public Category saveCategoryToDatabaseIfNotExists(Category aCategory) {
        Category category = findCategoryByName(aCategory.getName());
        if (category == null) {
            category = addCategory(aCategory);
        }
        return category;
    }
}
