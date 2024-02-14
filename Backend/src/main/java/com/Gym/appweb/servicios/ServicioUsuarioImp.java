package com.Gym.appweb.servicios;

import com.Gym.appweb.dao_repositorio.UsuarioDao;
import com.gymapp.GymApp.Entidades.Usuario;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class ServicioUsuarioImp implements ServicioUsuario {

    @Autowired
    private UsuarioDao usuarioDao;

    @Override
    @Transactional(readOnly = true)
    public List<Usuario> listarUsuarios() {
        return (List<Usuario>) usuarioDao.findAll();
    }

    @Override
    @Transactional
    public Usuario guardarCambiar(Usuario usuario) {
        return usuarioDao.save(usuario);
    };

    @Override
    @Transactional
    public void borrar(Usuario usuario) {
        usuarioDao.delete(usuario);
    };

    @Override
    @Transactional(readOnly = true)
    public Usuario buscarPorId(Long idUsuario) {
        return usuarioDao.findById(idUsuario).orElse(null);
    }
}
