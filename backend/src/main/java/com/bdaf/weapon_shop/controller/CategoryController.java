package com.bdaf.weapon_shop.controller;

import com.bdaf.weapon_shop.entity.Category;
import com.bdaf.weapon_shop.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/categories")
public class CategoryController {

    @Autowired
    private CategoryService CategoryService;

    @GetMapping
    public List<Category> getAllCategories() {
        return CategoryService.findAllCategories();
    }

    @GetMapping("/{id}")
    public Category getCategoryById(@PathVariable("id") Long aCategoryId) {
        return CategoryService.findCategoryById(aCategoryId);
    }

    @PostMapping
    public Category saveCategory(@RequestBody Category aCategory) {
        return CategoryService.saveCategoryToDatabaseIfNotExists(aCategory);
    }
}
