package com.bdaf.weapon_shop.controller;

import com.bdaf.weapon_shop.entity.Category;
import com.bdaf.weapon_shop.entity.Discount;
import com.bdaf.weapon_shop.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/categories")
public class CategoryController {

    @Autowired
    private CategoryService categoryService;


    @GetMapping
    public List<Category> getAllCategories() {
        return categoryService.findAllCategories();
    }

    @GetMapping("/{id}")
    public Category getCategoryById(@PathVariable("id") Long aCategoryId) {
        return categoryService.findCategoryById(aCategoryId);
    }

    @PostMapping
    public Category saveCategory(@RequestBody Category aCategory) {
        return categoryService.saveCategoryAndIfAlreadyExistsThrowException(aCategory);
    }

    @PostMapping("/{id}")
    public Category saveDiscountToCategory(@PathVariable("id") Long aCategoryId, @RequestBody Discount aDiscount) {
        return categoryService.saveDiscountToCategory(aCategoryId, aDiscount);
    }

    @DeleteMapping("/{id}")
    public String deleteDiscountFromCategory(@PathVariable("id") Long aCategoryId, @RequestBody Discount aDiscount) {
        categoryService.deleteDiscountFromCategory(aCategoryId, aDiscount);
        return "Discount with Id " + aDiscount.getDiscountId() + " has been deleted successfully!";
    }

}
