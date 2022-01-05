package com.bdaf.weapon_shop.service;

import com.bdaf.weapon_shop.entity.Producer;

public interface ProducerService {
    Producer findProducerByNip(String aNip);

    Producer addProducer(Producer aProducer);
}
