package com.bdaf.weapon_shop.service;

import com.bdaf.weapon_shop.entity.Discount;
import com.bdaf.weapon_shop.repository.DiscountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DiscountServiceImpl implements DiscountService{

    @Autowired
    private DiscountRepository discountRepository;

    @Override
    public List<Discount> findAllDiscounts() {
        return discountRepository.findAll();
    }

    @Override
    public Discount saveDiscountToDatabaseIfNotExists(Discount aDiscount) {
        return null;
    }
}
