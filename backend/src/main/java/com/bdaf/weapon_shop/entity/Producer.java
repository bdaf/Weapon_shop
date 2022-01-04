package com.bdaf.weapon_shop.entity;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "ws_producer")
public class Producer {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "producer_sequence")
    @SequenceGenerator(name = "producer_sequence", sequenceName = "producer_sequence", allocationSize = 1)
    @Column(name = "producer_id", nullable = false)
    private Long producerId;

//    @Column(name = "owner_name", length = 31, nullable = false)
//    private String ownerName;
//
//    @Column(name = "owner_surname", length = 31, nullable = false)
//    private String ownerSurname;

    @Column(name = "company_name", length = 63, nullable = false)
    private String companyName;

    @Column(name = "nip", length = 15, nullable = false)
    private String nip;
}
