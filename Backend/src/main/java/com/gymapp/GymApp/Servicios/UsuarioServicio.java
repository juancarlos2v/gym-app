package com.gymapp.GymApp.Servicios;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.gymapp.GymApp.Dao.UsuarioDao;
import com.gymapp.GymApp.Entidades.Usuario;
import java.util.List;

@Service
public class UsuarioServicio implements IUsuarioServicio {

    @Autowired
    private UsuarioDao usuarioDao;

    @Override
    public List<Usuario> traerUsuarios() {
        List<Usuario> listaUsuarios = (List<Usuario>) usuarioDao.findAll();
        return listaUsuarios;
    }

    
}
