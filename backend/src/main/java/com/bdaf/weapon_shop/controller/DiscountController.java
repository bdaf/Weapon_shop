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

    @GetMapping("/order/percent/asc")
    public List<Discount> getAllDiscountsOrderedByPercentAsc() {return discountService.findAllDiscountsOrderedByPercentAsc();}

    @GetMapping("/order/percent/desc")
    public List<Discount> getAllDiscountsOrderedByPercentDesc() {return discountService.findAllDiscountsOrderedByPercentDesc();}

    @GetMapping("/order/from/asc")
    public List<Discount> getAllDiscountsOrderedByFromAsc() {return discountService.findAllDiscountsOrderedByFromAsc();}

    @GetMapping("/order/from/desc")
    public List<Discount> getAllDiscountsOrderedByFromDesc() {return discountService.findAllDiscountsOrderedByFromDesc();}

    @GetMapping("/order/to/asc")
    public List<Discount> getAllDiscountsOrderedByToAsc() {return discountService.findAllDiscountsOrderedByToAsc();}

    @GetMapping("/order/to/desc")
    public List<Discount> getAllDiscountsOrderedByToDesc() {return discountService.findAllDiscountsOrderedByToDesc();}

    @GetMapping("/{id}")
    public Discount getDiscountById(@PathVariable("id") Long aDiscountId) {return discountService.findDiscountById(aDiscountId);}

    @PostMapping
    public Discount saveDiscount(@RequestBody Discount aDiscount) {
        return discountService.saveDiscountToDatabaseIfNotExists(aDiscount);
    }

    @PutMapping("/{id}")
    public Discount updateDiscount(@PathVariable("id") Long aDiscountId, @RequestBody Discount aDiscount) {
        return discountService.updateDiscountById(aDiscountId, aDiscount);
    }

    @DeleteMapping("/{id}")
    public String deleteDiscountById(@PathVariable("id") Long aDiscountId){
        discountService.deleteDiscountById(aDiscountId);
        return "Discount with Id " + aDiscountId + " has been deleted successfully!";
    }
}
