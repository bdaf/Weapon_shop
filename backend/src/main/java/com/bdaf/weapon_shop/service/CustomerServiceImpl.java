package com.bdaf.weapon_shop.service;

import com.bdaf.weapon_shop.entity.Customer;
import com.bdaf.weapon_shop.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerServiceImpl implements CustomerService{

    @Autowired
    private CustomerRepository customerRepository;

    @Override
    public List<Customer> findAllCustomers() {
        return customerRepository.findAll();
    }

    @Override
    public Customer findCustomerById(Long aCustomerId) {
        return customerRepository.findById(aCustomerId).get();
    }

    @Override
    public Customer addCustomerBasedOnEmail(Customer aCustomer) {
        Customer customerFromDatabase = customerRepository.findCustomerByEmail(aCustomer.getEmail());
        if(customerFromDatabase == null) {
            return customerRepository.save(aCustomer);
        }
        return customerFromDatabase;
    }

    @Override
    public Customer updateCustomerById(Customer aCustomer, Long aCustomerId) {
        return null;
    }

    @Override
    public void deleteCustomerById(Long aCustomerId) {
        customerRepository.deleteById(aCustomerId);
    }

    @Override
    public Customer findById(Long aCustomerId) {
        return customerRepository.findById(aCustomerId).get();
    }
}
