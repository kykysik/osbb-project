package osbb.data.entity;

import java.math.BigInteger;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.Data;
import lombok.experimental.Accessors;

@Entity
@Table(name = "user_info")
@Data
@Accessors(chain = true)
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private BigInteger id;
    private String firstName;
    private String lastName;
    private Integer apartmentNumber;
    private String password;
    private String login;

    @ManyToOne
    @JoinColumn(name = "Building_Id", referencedColumnName = "Id")
    private Building building;

    public User() {

    }

    public User(BigInteger id, String login, String password, Integer apartmentNumber) {
        this.id = id;
        this.login = login;
        this.password = password;
        this.apartmentNumber = apartmentNumber;
    }
}
