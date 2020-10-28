package osbb.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import osbb.data.entity.User;
import osbb.service.UserService;

@RestController
@RequestMapping
public class UserController {

    @Autowired
    private UserService userService;

//    @RequestMapping(value = "/users", method = RequestMethod.POST)
//    public ResponseEntity<User> createLocation(@RequestBody User user) {
//        return new ResponseEntity<>(userService.create(user), HttpStatus.CREATED);
//    }
}
