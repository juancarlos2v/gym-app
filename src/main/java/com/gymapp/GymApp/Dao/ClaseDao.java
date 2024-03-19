package com.gymapp.GymApp.Dao;

import com.gymapp.GymApp.Entidades.Clase;
import java.util.Optional;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

@Repository
public interface ClaseDao extends CrudRepository<Clase, Long> {
    Optional<Clase> findByEntrenador(String entrenador);
     Page<Clase> findAll(Pageable pageable);
}
