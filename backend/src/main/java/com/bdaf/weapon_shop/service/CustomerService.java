package com.bdaf.weapon_shop.service;

import com.bdaf.weapon_shop.entity.Customer;

import java.util.List;

public interface CustomerService {
    List<Customer> findAllCustomers();

    Customer findCustomerById(Long aCustomerId);

    Customer addCustomer(Customer aCustomer);

    Customer updateCustomerById(Customer aCustomer, Long aCustomerId);

    void deleteCustomerById(Long aCustomerId);

    Customer findById(Long aCustomerId);
}
