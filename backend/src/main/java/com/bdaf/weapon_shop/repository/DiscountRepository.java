package com.bdaf.weapon_shop.repository;

import com.bdaf.weapon_shop.entity.Discount;
import org.springframework.data.jpa.repository.JpaRepository;

import java.sql.Date;
import java.util.List;

public interface DiscountRepository extends JpaRepository<Discount, Long> {

    Discount findDiscountByPercentAndFromDateAndToDate(Float aPercent, Date aFromDate, Date aToDate);

    List<Discount> findByOrderByPercentAsc();
    List<Discount> findByOrderByPercentDesc();

    List<Discount> findByOrderByFromDateAsc();
    List<Discount> findByOrderByFromDateDesc();

    List<Discount> findByOrderByToDateAsc();
    List<Discount> findByOrderByToDateDesc();
}
