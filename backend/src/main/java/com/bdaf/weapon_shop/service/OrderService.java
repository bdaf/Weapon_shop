package com.bdaf.weapon_shop.service;

import com.bdaf.weapon_shop.entity.Order;

import java.util.List;

public interface OrderService {
    List<Order> findAllOrders();

    Order findOrderById(Long aOrderId);

    Order addOrder(Order aOrder);

    Order updateOrderById(Order aOrder, Long aOrderId);

    void deleteOrderById(Long aOrderId);
}
