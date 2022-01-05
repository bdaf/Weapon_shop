package com.bdaf.weapon_shop.service;

import com.bdaf.weapon_shop.entity.Category;

public interface CategoryService {
    Category saveCategoryToDatabaseIfNotExists(Category aCategory);
}
