package com.gymapp.GymApp.Dao;
import com.gymapp.GymApp.Entidades.Usuario;
import org.springframework.data.repository.CrudRepository;

public interface GymDao extends CrudRepository<Usuario, String>{
    
}
