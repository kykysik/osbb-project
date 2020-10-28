package osbb.data.entity.key;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Embeddable;

import lombok.Data;

@Embeddable
@Data
public class UserKey implements Serializable {

    private static final long serialVersionUID = 1L;

    @Column(name = "User_Id", columnDefinition = "int(6)", nullable = false)
    private Integer userId;
    @Column(name = "Building_Id", columnDefinition = "int", nullable = false)
    private String buildingId;

    public UserKey() {

    }

    public UserKey(Integer userId, String buildingId) {
        this.userId = userId;
        this.buildingId = buildingId;
    }
}
