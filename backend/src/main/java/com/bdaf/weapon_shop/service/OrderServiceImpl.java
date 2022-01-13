package com.bdaf.weapon_shop.service;

import com.bdaf.weapon_shop.entity.Customer;
import com.bdaf.weapon_shop.entity.Order;
import com.bdaf.weapon_shop.entity.Product;
import com.bdaf.weapon_shop.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderServiceImpl implements OrderService {

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private CustomerService customerService;

    @Autowired
    private ProductService productService;

    @Override
    public List<Order> findAllOrders() {
        return orderRepository.findAll();
    }

    @Override
    public Order findOrderById(Long aOrderId) {
        return orderRepository.findById(aOrderId).get();
    }

    @Override
    public Order addOrder(Order aOrder) {

        // finding product by id
        Product productFromOrder = productService.findById(aOrder.getProduct().getProductId());

        // finding customer by email
        Customer customerFromOrder = customerService.addCustomerBasedOnEmail(aOrder.getCustomer());

        // setting order name
        aOrder = orderRepository.save(aOrder);
        aOrder.setName("Order "+aOrder.getOrderId());

        // setting entire customer and product to order
        aOrder.setCustomer(customerFromOrder);
        aOrder.setProduct(productFromOrder);

        return orderRepository.save(aOrder);
    }

    @Override
    public Order updateOrderById(Order aOrder, Long aOrderId) {
        Order orderToChange = orderRepository.findById(aOrderId).get();

        // updating only status
        if(aOrder.getStatus() != null && !aOrder.getStatus().equalsIgnoreCase("")){
            orderToChange.setStatus(aOrder.getStatus());
        }

        return orderRepository.save(orderToChange);
    }

    @Override
    public void deleteOrderById(Long aOrderId) {
        orderRepository.deleteById(aOrderId);
    }
}
