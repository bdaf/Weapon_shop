package com.bdaf.weapon_shop.repository;

import com.bdaf.weapon_shop.entity.Discount;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DiscountRepository extends JpaRepository<Discount, Long> {
}
