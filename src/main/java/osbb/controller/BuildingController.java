package osbb.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import osbb.data.dto.BuildingCreateDto;
import osbb.data.dto.UserDto;
import osbb.service.BuildingService;

import java.util.List;

@RestController
@RequestMapping("/building")
public class BuildingController {

    @Autowired
    private BuildingService buildingService;

    @RequestMapping(value = "/reg", method = RequestMethod.POST)
    @ResponseStatus(HttpStatus.CREATED)
    @CrossOrigin
    public ResponseEntity<List<UserDto>> createBuilding(@RequestBody BuildingCreateDto building) {
        return new ResponseEntity<>(buildingService.create(building), HttpStatus.CREATED);
    }
}
