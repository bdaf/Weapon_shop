package com.bdaf.weapon_shop.repository;

import com.bdaf.weapon_shop.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepository extends JpaRepository<Customer, Long> {

    Customer findCustomerByEmail(String aEmail);

}
