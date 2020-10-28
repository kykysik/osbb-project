package osbb.data.dto;

import lombok.Data;
import lombok.experimental.Accessors;

@Data
@Accessors(chain = true)
public class UserDto {
    private String firstName;
    private String lastName;
    private Integer apartmentNumber;
    private String password;
    private String login;
}
