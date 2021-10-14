package org.arsiu.rest.dal;

import org.arsiu.rest.models.Farm;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface FarmRepository extends JpaRepository<Farm,Integer> {

}
