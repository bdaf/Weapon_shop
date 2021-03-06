package com.bdaf.weapon_shop.repository;

import com.bdaf.weapon_shop.entity.Producer;
import com.bdaf.weapon_shop.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {

    Product findProductByNameAndProducer(String aName, Producer aProducer);

    List<Product> findProductsByForSale(Boolean aForSale);

    Product findProductByProductIdAndForSale(Long aProductId, Boolean aForSale);

    List<Product> findProductsByForSaleOrderByPriceAsc(Boolean aForSale);

    List<Product> findProductsByForSaleOrderByPriceDesc(Boolean aForSale);

    List<Product> findProductsByForSaleOrderByNameAsc(Boolean aForSale);

    List<Product> findProductsByForSaleOrderByNameDesc(Boolean aForSale);

    List<Product> findProductsByForSaleOrderByReleaseDateAsc(Boolean aForSale);

    List<Product> findProductsByForSaleOrderByReleaseDateDesc(Boolean aForSale);
}
