package com.bdaf.weapon_shop.service;

import com.bdaf.weapon_shop.entity.Order;
import com.bdaf.weapon_shop.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderServiceImpl implements OrderService {

    @Autowired
    private OrderRepository orderRepository;

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
        return orderRepository.save(aOrder);
    }

    @Override
    public Order updateOrderById(Order aOrder, Long aOrderId) {
        return null;
    }

    @Override
    public void deleteOrderById(Long aOrderId) {
        orderRepository.deleteById(aOrderId);
    }
}
