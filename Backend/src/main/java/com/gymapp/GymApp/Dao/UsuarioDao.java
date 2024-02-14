package com.gymapp.GymApp.Dao;
import com.gymapp.GymApp.Entidades.Usuario;
import org.springframework.data.repository.CrudRepository;

public interface UsuarioDao extends CrudRepository<Usuario, Long>{
    Usuario findByDni(String dni);
    Object findById(String idUsuario);

    
}
