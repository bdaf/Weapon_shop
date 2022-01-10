package com.bdaf.weapon_shop.controller;

import com.bdaf.weapon_shop.entity.Order;
import com.bdaf.weapon_shop.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/Orders")
public class OrderController {

    @Autowired
    private OrderService orderService;

    @GetMapping
    public List<Order> getAllOrders() {
        return orderService.findAllOrders();
    }

    @GetMapping("/{id}")
    public Order getOrderById(@PathVariable("id") Long aOrderId) {
        return orderService.findOrderById(aOrderId);
    }

    @PostMapping
    public Order saveOrder(@RequestBody Order aOrder) {
        return orderService.addOrder(aOrder);
    }

    @PutMapping("/{id}")
    public Order updateOrder(@RequestBody Order aOrder, @PathVariable("id") Long aOrderId) {
        return orderService.updateOrderById(aOrder, aOrderId);
    }

    @DeleteMapping("/{id}")
    public String deleteOrder(@PathVariable("id") Long aOrderId) {
        orderService.deleteOrderById(aOrderId);
        return "Order with ID "+aOrderId+" has been deleted successfully!";
    }
}