package com.bdaf.weapon_shop.service;

import com.bdaf.weapon_shop.entity.Discount;
import com.bdaf.weapon_shop.repository.DiscountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DiscountServiceImpl implements DiscountService {

    @Autowired
    private DiscountRepository discountRepository;

    @Override
    public List<Discount> findAllDiscounts() {
        return discountRepository.findAll();
    }



    @Override
    public Discount saveDiscountToDatabaseIfNotExists(Discount aDiscount) {
        if (aDiscount.getPercent() > 0.99) aDiscount.setPercent(0.99F);
        if (aDiscount.getPercent() < 0.01) aDiscount.setPercent(0.01F);
        Discount discount = discountRepository.findDiscountByPercentAndFromDateAndToDate(aDiscount.getPercent(), aDiscount.getFromDate(), aDiscount.getToDate());
        if (discount != null)
            throw new IllegalArgumentException("This discount already is in database! Percent: " + aDiscount.getPercent() + ", From: " + aDiscount.getFromDate() + ", To: " + aDiscount.getToDate());
        if (aDiscount.getFromDate().getTime() > aDiscount.getToDate().getTime())
            throw new IllegalArgumentException("FromDate in discount cannot be more late than toDate. FromDate: " + aDiscount.getFromDate() + " ToDate: " + aDiscount.getToDate());
        return discountRepository.save(aDiscount);
    }

    @Override
    public void deleteDiscountById(Long aDiscountId) {
        discountRepository.deleteById(aDiscountId);
    }

    @Override
    public List<Discount> findAllDiscountsOrderedByPercentAsc() {
        return discountRepository.findByOrderByPercentAsc();
    }

    @Override
    public List<Discount> findAllDiscountsOrderedByPercentDesc() {
        return discountRepository.findByOrderByPercentDesc();
    }

    @Override
    public List<Discount> findAllDiscountsOrderedByFromAsc() {
        return discountRepository.findByOrderByFromDateAsc();
    }

    @Override
    public List<Discount> findAllDiscountsOrderedByFromDesc() {
        return discountRepository.findByOrderByFromDateDesc();
    }

    @Override
    public List<Discount> findAllDiscountsOrderedByToAsc() {
        return discountRepository.findByOrderByToDateAsc();
    }

    @Override
    public List<Discount> findAllDiscountsOrderedByToDesc() {
        return discountRepository.findByOrderByToDateDesc();
    }
}
