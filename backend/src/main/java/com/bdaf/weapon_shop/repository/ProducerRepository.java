package com.bdaf.weapon_shop.repository;

import com.bdaf.weapon_shop.entity.Producer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProducerRepository extends JpaRepository<Producer, Long> {
    Producer findProducerByNip(String aNip);
}
