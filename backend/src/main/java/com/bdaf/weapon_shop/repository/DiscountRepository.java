package com.bdaf.weapon_shop.repository;

import com.bdaf.weapon_shop.entity.Discount;
import org.springframework.data.jpa.repository.JpaRepository;

import java.sql.Date;

public interface DiscountRepository extends JpaRepository<Discount, Long> {

    Discount findDiscountByPercentAndFromDateAndToDate(Float aPercent, Date aFromDate, Date aToDate);
}
