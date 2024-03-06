package com.gymapp.GymApp.Servicios;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.gymapp.GymApp.Dao.UsuarioDao;
import com.gymapp.GymApp.Entidades.Usuario;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class UsuarioServicio implements IUsuarioServicio {

    @Autowired
    private UsuarioDao usuarioDao;

    @Override
    public Usuario bajaUsuario(String dni) {
        Usuario usuario = usuarioDao.findByDni(dni);
        usuario.setActivo(false);
        usuarioDao.save(usuario);
        return usuario;
    }

    @Override
    @Transactional(readOnly = true)
    public List<Usuario> listarUsuarios() {
        return (List<Usuario>) usuarioDao.findAll();
    }

    @Override
    @Transactional
    public Usuario guardarCambiar(Usuario usuario) {
        return usuarioDao.save(usuario);
    }

    ;

    @Override
    @Transactional
    public void borrar(Usuario usuario) {
        usuarioDao.delete(usuario);
    }

    ;

    @Override
    @Transactional(readOnly = true)
    public Usuario buscarPorId(Long idUsuario) {
        return usuarioDao.findById(idUsuario).orElse(null);
    }

}
