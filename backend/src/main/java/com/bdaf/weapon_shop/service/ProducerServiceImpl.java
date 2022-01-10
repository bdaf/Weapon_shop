package com.bdaf.weapon_shop.service;

import com.bdaf.weapon_shop.entity.Producer;
import com.bdaf.weapon_shop.repository.ProducerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

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

    @Override
    public Producer updateProducerById(Producer aProducer, Long aProducerId) {
        return null;
    }

    @Override
    public void deleteProducerById(Long aProducerId) {

    }

    public Producer saveProducerToDatabaseIfNotExists(Producer aProducer) {
        Producer producer = findProducerByNip(aProducer.getNip());
        if (producer == null) {
            producer = addProducer(aProducer);
        }
        return producer;
    }

    @Override
    public List<Producer> findAllProducers() {
        return null;
    }

    @Override
    public Producer findProducerById(Long aProducerId) {
        return null;
    }
}
