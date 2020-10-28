package osbb.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import osbb.data.entity.User;
import osbb.data.repository.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public List<User> create(List<User> users) {
       return userRepository.saveAll(users);
    }
}
