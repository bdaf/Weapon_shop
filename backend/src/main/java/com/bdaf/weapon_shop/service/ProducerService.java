package com.bdaf.weapon_shop.service;

import com.bdaf.weapon_shop.entity.Producer;

import java.util.List;

public interface ProducerService {
    Producer saveProducerToDatabaseIfNotExists(Producer aProducer);

    List<Producer> findAllProducers();

    Producer findProducerById(Long aProducerId);

//    Producer updateProducerById(Producer aProducer, Long aProducerId);
//
//    void deleteProducerById(Long aProducerId);
}
