package com.bdaf.weapon_shop.repository;

import com.bdaf.weapon_shop.entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category, Long> {
}
