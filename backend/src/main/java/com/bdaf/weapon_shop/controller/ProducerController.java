package com.bdaf.weapon_shop.controller;

import com.bdaf.weapon_shop.entity.Producer;
import com.bdaf.weapon_shop.service.ProducerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/producers")
public class ProducerController {

    @Autowired
    private ProducerService producerService;

    @GetMapping
    public List<Producer> getAllProducers() {
        return producerService.findAllProducers();
    }

    @GetMapping("/{id}")
    public Producer getProducerById(@PathVariable("id") Long aProducerId) {
        return producerService.findProducerById(aProducerId);
    }

    @PostMapping
    public Producer saveProducer(@RequestBody Producer aProducer) {
        return producerService.saveProducerToDatabaseIfNotExists(aProducer);
    }

    @PutMapping("/{id}")
    public Producer updateProducer(@RequestBody Producer aProducer, @PathVariable("id") Long aProducerId) {
        return producerService.updateProducerById(aProducer, aProducerId);
    }

    @DeleteMapping("/{id}")
    public String deleteProducer(@PathVariable("id") Long aProducerId) {
        producerService.deleteProducerById(aProducerId);
        return "Producer with ID "+aProducerId+" has been deleted successfully!";
    }
}
