package com.bdaf.weapon_shop.service;

import com.bdaf.weapon_shop.entity.Category;
import com.bdaf.weapon_shop.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CategoryServiceImpl implements CategoryService{

    @Autowired
    private CategoryRepository categoryRepository;


    @Override
    public Category findCategoryByName(String aName) {
        return categoryRepository.findCategoryByName(aName);
    }

    @Override
    public Category addCategory(Category aCategory) {
        return categoryRepository.save(aCategory);
    }
}
