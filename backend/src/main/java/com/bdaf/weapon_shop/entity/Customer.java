package com.bdaf.weapon_shop.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="ws_customer")
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "customer_sequence")
    @SequenceGenerator(name = "customer_sequence", sequenceName = "customer_sequence", allocationSize = 1)
    @Column(name = "customer_id", nullable = false)
    private Long customerId;

    @Column(name = "name", length = 31, nullable = false)
    private String name;

    @Column(name = "surname", length = 31, nullable = false)
    private String surname;

    @Column(name = "email", length = 31, nullable = false, unique = true)
    private String email;

    @Column(name = "phone_number", length = 15, nullable = false, unique = true)
    private String phoneNumber;

    @Column(name = "street", length = 63, nullable = false)
    private String street;

    @Column(name = "house_number", length = 7, nullable = false)
    private String houseNumber;

    @Column(name = "city", length = 31, nullable = false)
    private String city;

    @Column(name = "postcode", length = 15, nullable = false)
    private String postcode;

    @Column(name = "country", length = 15, nullable = false)
    private String country;
}
