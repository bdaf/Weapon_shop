package com.bdaf.weapon_shop.controller;

import com.bdaf.weapon_shop.entity.Discount;
import com.bdaf.weapon_shop.service.DiscountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/discounts")
public class DiscountController {

    @Autowired
    private DiscountService discountService;

    @GetMapping
    public List<Discount> getAllDiscounts() {return discountService.findAllDiscounts();}

    @PostMapping
    public Discount saveDiscount(@RequestBody Discount aDiscount) {
        return discountService.saveDiscountToDatabaseIfNotExists(aDiscount);
    }

    @DeleteMapping("/{id}")
    public String deleteDiscountById(@PathVariable("id") Long aDiscountId){
        discountService.deleteDiscountById(aDiscountId);
        return "Discount with Id " + aDiscountId + " has been deleted successfully!";
    }
}
