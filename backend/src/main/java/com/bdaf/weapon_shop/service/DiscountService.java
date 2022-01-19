package com.bdaf.weapon_shop.service;

import com.bdaf.weapon_shop.entity.Discount;

import java.util.List;

public interface DiscountService {
    List<Discount> findAllDiscounts();

    Discount saveDiscountToDatabaseIfNotExists(Discount aDiscount);

    void deleteDiscountById(Long aDiscountId);

    List<Discount> findAllDiscountsOrderedByPercentAsc();

    List<Discount> findAllDiscountsOrderedByPercentDesc();

    List<Discount> findAllDiscountsOrderedByFromAsc();

    List<Discount> findAllDiscountsOrderedByFromDesc();

    List<Discount> findAllDiscountsOrderedByToAsc();

    List<Discount> findAllDiscountsOrderedByToDesc();
}
