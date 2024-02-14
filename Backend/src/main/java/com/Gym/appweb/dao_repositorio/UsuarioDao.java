package com.Gym.appweb.dao_repositorio;

import com.gymapp.GymApp.Entidades.Usuario;
import org.springframework.data.repository.CrudRepository;

public interface UsuarioDao extends CrudRepository<Usuario, Long>{

    public Object findById(String idUsuario);
    
}
