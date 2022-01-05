package com.bdaf.weapon_shop.service;

import com.bdaf.weapon_shop.entity.Producer;
import com.bdaf.weapon_shop.repository.ProducerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProducerServiceImpl implements ProducerService{

    @Autowired
    private ProducerRepository producerRepository;

    @Override
    public Producer findProducerByNip(String aNip) {
        return producerRepository.findProducerByNip(aNip);
    }

    @Override
    public Producer addProducer(Producer aProducer) {
        return producerRepository.save(aProducer);
    }
}
