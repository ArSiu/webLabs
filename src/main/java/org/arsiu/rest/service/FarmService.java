package org.arsiu.rest.service;

import org.arsiu.rest.dal.FarmRepository;
import org.arsiu.rest.models.Farm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.context.annotation.ApplicationScope;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
@ApplicationScope
public class FarmService {

    @Autowired
    private FarmRepository farmRepository;

    public Farm addFarm(final Farm farm) {
        return farmRepository.save(farm);
    }

    public Farm updateFarm(final Farm farm) {
        return farmRepository.save(farm);
    }

    public List<Farm> getFarms() {
        return farmRepository.findAll();
    }

    public Farm getFarmById(final Integer id) {
        return farmRepository.findById(id).orElse(null);
    }

    public void deleteFarmById(final Integer id) {
        farmRepository.deleteById(id);
    }
}
