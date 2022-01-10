package com.bdaf.weapon_shop.controller;

import com.bdaf.weapon_shop.entity.Customer;
import com.bdaf.weapon_shop.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/customers")
public class CustomerController {

    @Autowired
    private CustomerService customerService;

    @GetMapping
    public List<Customer> getAllCustomers() {
        return customerService.findAllCustomers();
    }

    @GetMapping("/{id}")
    public Customer getCustomerById(@PathVariable("id") Long aCustomerId) {
        return customerService.findCustomerById(aCustomerId);
    }

    @PostMapping
    public Customer saveCustomer(@RequestBody Customer aCustomer) {
        return customerService.addCustomer(aCustomer);
    }

    @PutMapping("/{id}")
    public Customer updateCustomer(@RequestBody Customer aCustomer, @PathVariable("id") Long aCustomerId) {
        return customerService.updateCustomerById(aCustomer, aCustomerId);
    }

    @DeleteMapping("/{id}")
    public String deleteCustomer(@PathVariable("id") Long aCustomerId) {
        customerService.deleteCustomerById(aCustomerId);
        return "Customer with ID "+aCustomerId+" has been deleted successfully!";
    }
}