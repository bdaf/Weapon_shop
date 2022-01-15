package com.bdaf.weapon_shop.service;

import com.bdaf.weapon_shop.entity.Discount;

import java.util.List;

public interface DiscountService {
    List<Discount> findAllDiscounts();

    Discount saveDiscountToDatabaseIfNotExists(Discount aDiscount);
}
