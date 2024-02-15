package com.gymapp.GymApp.Dao;
import com.gymapp.GymApp.Entidades.Usuario;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UsuarioDao extends CrudRepository<Usuario, Long>{
    Usuario findByDni(String dni);  
}
