package osbb.data.dto;

import lombok.Data;
import lombok.experimental.Accessors;

import java.math.BigDecimal;

@Data
@Accessors(chain = true)
public class BuildingCreateDto {

    private String adminLogin;
    private String adminPassword;
    private String address;
    private Integer apartmentQuantity;
    private BigDecimal budgetQuantity;
    private String firstName;
    private String lastName;
}
