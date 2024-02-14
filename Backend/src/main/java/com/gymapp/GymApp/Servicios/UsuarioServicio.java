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

    @Override
    public Usuario registrarUsuario(String dni, String nombre, String apellido, String email, String password){

        Usuario usuario= new Usuario(dni,nombre,apellido,email,password,true);
        usuarioDao.save(usuario);
        return usuario;

    }

    @Override
    public Usuario bajaUsuario(String dni) {

        Usuario usuario=usuarioDao.findByDni(dni);
        usuario.setActivo(false);
    usuarioDao.save(usuario);
        return usuario;
    }

    @Override
    public Usuario borrarUsuario(Long id) {
        Usuario usuario = usuarioDao.findById(id).orElse(null);
        usuarioDao.delete(usuario);
        return usuario;
    }


}
