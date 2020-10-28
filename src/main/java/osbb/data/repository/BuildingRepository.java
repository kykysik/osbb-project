package osbb.data.repository;

import java.math.BigInteger;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import osbb.data.entity.Building;

@Repository
public interface BuildingRepository extends JpaRepository<Building, BigInteger> {
}
