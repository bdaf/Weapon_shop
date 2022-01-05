package com.bdaf.weapon_shop.service;

import com.bdaf.weapon_shop.entity.Producer;
import com.bdaf.weapon_shop.repository.ProducerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProducerServiceImpl implements ProducerService{

    @Autowired
    private ProducerRepository producerRepository;

    private Producer findProducerByNip(String aNip) {
        return producerRepository.findProducerByNip(aNip);
    }

    private Producer addProducer(Producer aProducer) {
        return producerRepository.save(aProducer);
    }

    public Producer saveProducerToDatabaseIfNotExists(Producer aProducer) {
        Producer producer = findProducerByNip(aProducer.getNip());
        if (producer == null) {
            producer = addProducer(aProducer);
        }
        return producer;
    }
}
