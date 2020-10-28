package osbb.data.entity;

import java.math.BigDecimal;
import java.math.BigInteger;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.google.common.collect.Lists;

import lombok.Data;
import lombok.experimental.Accessors;

@Entity
@Table(name = "building")
@Data
@Accessors(chain = true)
public class Building {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private BigInteger id;
    private String address;
    private Integer apartmentQuantity;
    private BigDecimal budgetQuantity;

    @OneToMany(mappedBy = "building")
    private List<User> users = Lists.newArrayList();

}
