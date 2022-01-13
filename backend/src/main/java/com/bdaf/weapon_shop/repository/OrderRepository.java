package com.bdaf.weapon_shop.repository;

import com.bdaf.weapon_shop.entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order, Long> {

}
