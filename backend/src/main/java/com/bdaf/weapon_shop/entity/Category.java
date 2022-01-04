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
@Table(name = "ws_category")
public class Category {
    public static final String OTHER = "Inny";
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "category_sequence")
    @SequenceGenerator(name = "category_sequence", sequenceName = "category_sequence", allocationSize = 1)
    @Column(name = "category_id", nullable = false)
    private Long categoryId;

    @Column(name = "name", length = 63, unique = true)
    private String name = OTHER;

    @ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinTable(name = "ws_category_discount_map",
            joinColumns = @JoinColumn(
                    name = "category_id",
                    referencedColumnName = "category_id"
            ),
            inverseJoinColumns = @JoinColumn(
                    name = "discount_id",
                    referencedColumnName = "discount_id"
            )
    )

    private List<Discount> discounts;

    public void addDiscount(Discount aDiscount){
        if(discounts == null) discounts = new ArrayList<>();
        discounts.add(aDiscount);
    }


}