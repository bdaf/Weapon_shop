package com.bdaf.weapon_shop.service;

import com.bdaf.weapon_shop.entity.Category;

import java.util.List;

public interface CategoryService {
    Category saveCategoryToDatabaseIfNotExists(Category aCategory);

    List<Category> findAllCategories();

    Category findCategoryById(Long aCategoryId);

    Category findById(Long aCategoryId);
}
