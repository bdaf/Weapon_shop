package com.bdaf.weapon_shop.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "ws_order")
public class Order {
    public static final String NOT_ORDERED = "NOT ORDERED";
    public static final String ORDERED = "ORDERED";
    public static final String PAYED = "PAYED";
    public static final String SENT = "SENT";
    public static final String DELIVERED = "DELIVERED";
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "order_sequence")
    @SequenceGenerator(name = "order_sequence", sequenceName = "order_sequence", allocationSize = 1)
    @Column(name = "order_id")
    private Long orderId;

    @Column(name = "name")
    private String name = "order";

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "customer_id", referencedColumnName = "customer_id")
    private Customer customer;

    @Column(name = "status")
    private String status = NOT_ORDERED;

    @OneToMany(fetch = FetchType.EAGER)
    @JoinColumn(name = "order_id", referencedColumnName = "order_id")
    private List<Product> products;

    public void addProduct(Product aProduct){
        if(products == null){
            products = new ArrayList<>();
        }
        products.add(aProduct);
    }
}