package osbb.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import osbb.data.dto.BuildingCreateDto;
import osbb.data.dto.UserDto;
import osbb.data.entity.Building;
import osbb.data.entity.User;
import osbb.data.repository.BuildingRepository;

import java.math.BigInteger;
import java.util.ArrayList;
import java.util.List;

@Service
public class BuildingService {

    @Autowired
    private BuildingRepository buildingRepository;
    @Autowired
    private UserService userService;

    private static final Integer ADMIN_NUMBER = 0;

    @Transactional
    public List<UserDto> create(BuildingCreateDto buildingCreateDto) {
        List<User> users = new ArrayList<>();
        Building entity = new Building()
                .setAddress(buildingCreateDto.getAddress())
                .setApartmentQuantity(buildingCreateDto.getApartmentQuantity())
                .setBudgetQuantity(buildingCreateDto.getBudgetQuantity());
        Building savedBuilding = buildingRepository.save(entity);

        addAdminUserToList(users, buildingCreateDto.getAdminLogin(), savedBuilding, ADMIN_NUMBER,
                buildingCreateDto.getAdminPassword(), buildingCreateDto.getFirstName(),
                buildingCreateDto.getLastName(), BigInteger.ONE);
        generateUserAccounts(users, savedBuilding);
        userService.create(users);

        List<UserDto> response = new ArrayList<>();
        users.forEach(user -> response.add(toUserDto(user)));

        return response;
    }

    private void generateUserAccounts(List<User> users, Building savedBuilding) {
        String apartmentValue;

        for (int i = 0; i < savedBuilding.getApartmentQuantity(); i++) {
            int startFromSecondIndex = i + 1;
            int apartmentNumber = startFromSecondIndex;
            apartmentValue = String.valueOf(apartmentNumber);

            addUserToList(users, apartmentValue, savedBuilding, apartmentNumber,
                    apartmentValue, BigInteger.valueOf(startFromSecondIndex));
        }
    }

    private List<User> addUserToList(List<User> users, String login, Building building, Integer apartmentNumber,
                                     String password, BigInteger id) {
        User user = new User()
                .setLogin(login)
                .setBuilding(building)
                .setApartmentNumber(apartmentNumber)
                .setPassword(password)
                .setId(id);

        users.add(user);
        return users;
    }

    private List<User> addAdminUserToList(List<User> users, String login, Building building, Integer apartmentNumber,
                                          String password, String firstName, String lastName, BigInteger id) {
        User user = new User()
                .setLogin(login)
                .setBuilding(building)
                .setApartmentNumber(apartmentNumber)
                .setPassword(password)
                .setLastName(lastName)
                .setFirstName(firstName)
                .setId(id);

        users.add(user);
        return users;
    }

    private UserDto toUserDto(User user) {
        if (user == null) {
            return null;
        }

        return new UserDto()
                .setLogin(user.getLogin())
                .setApartmentNumber(user.getApartmentNumber())
                .setFirstName(user.getFirstName())
                .setLastName(user.getLastName())
                .setPassword(user.getPassword());
    }
}
