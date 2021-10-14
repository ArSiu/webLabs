package org.arsiu.rest.controllers;

import org.arsiu.rest.exception.farm.not.found.FarmNotFoundException;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.arsiu.rest.models.Farm;
import org.arsiu.rest.service.FarmService;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import javax.validation.Valid;
import org.slf4j.Logger;

import java.util.List;

@RestController
@RequestMapping(path = "/farm")

public class FarmController {

    private static final Logger LOGGER = LoggerFactory.getLogger(FarmController.class);

    @Autowired
    private FarmService farmService;

    @PostMapping
    public ResponseEntity<Farm> createFarm(@Valid @RequestBody final Farm farm) {
        LOGGER.info("Added new technique");
        return new ResponseEntity<Farm>(farmService.addFarm(farm), HttpStatus.OK);
    }

    @PutMapping(path = "/{id}" ,consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Farm> updateFarm(
            @PathVariable("id") final int id,
            @Valid @RequestBody final Farm farm) {

        if (farmService.getFarmById(id) == null) {
            LOGGER.error("Can't put(updateFarm) an farm with non-existing id: " + id);
            throw new FarmNotFoundException("Can't put(updateFarm) an farm with non-existing id: " + id);
        }
        LOGGER.info("Successfully updated technique with id: " + id);
        farm.setId(id);
        return new ResponseEntity<Farm>(farmService.updateFarm(farm), HttpStatus.OK);

    }

    @GetMapping
    public ResponseEntity<List<Farm>> getFarms() {
        LOGGER.info("Gave away all Farms");
        return new ResponseEntity<List<Farm>>(farmService.getFarms(), HttpStatus.OK);
    }

    @GetMapping(path = "/{id}")
    public ResponseEntity<Farm> getFarm(@PathVariable(name = "id") final Integer id) {
        if (farmService.getFarmById(id) == null) {
            LOGGER.error("Can't get(getFarm) an farm with non-existing id: " + id);
            throw new FarmNotFoundException("Can't get(getFarm) an farm with non-existing id: " + id);
        }
        LOGGER.info("Successfully get an farm with id: " + id);
        return new ResponseEntity<Farm>(farmService.getFarmById(id), HttpStatus.OK);
    }

    @DeleteMapping(path = "/{id}")
    public ResponseEntity<Farm> deleteFarmById(@PathVariable("id") final Integer id) {
        if (farmService.getFarmById(id) == null) {
            LOGGER.error("Can't delete(deleteFarmById) an farm with non-existing id: " + id);
            throw new FarmNotFoundException("Can't delete(deleteFarmById) an farm with non-existing id: " + id);
        }
        LOGGER.info("Successfully deleted farm with id: " + id);
        farmService.deleteFarmById(id);
        return ResponseEntity.noContent().build();
    }

}
