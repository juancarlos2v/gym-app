package com.gymapp.GymApp.Dao;
import com.gymapp.GymApp.Entidades.Usuario;
import java.util.Optional;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

@Repository
public interface UsuarioDao extends CrudRepository<Usuario, Long>{
    Optional<Usuario> findByDni(String dni);
    Page<Usuario> findAll(Pageable pageable);
}
