package com.gymapp.GymApp.Servicios;

import com.gymapp.GymApp.Dao.ClaseDao;
import com.gymapp.GymApp.Entidades.Clase;
import com.gymapp.GymApp.Entidades.Usuario;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ClaseServicio implements IClaseServicio {

    @Autowired
    private ClaseDao claseDao;
    @Autowired
    private UsuarioServicio usuarioServicio ;

    @Override
    public List<Clase> listarClases() {
       return (List<Clase>) claseDao.findAll();
    }

    @Override
    public Clase buscarClase(Long id) {
        return claseDao.findById(id).orElse(null);
    }

    @Override
    public Clase agregarClases(Clase clase) {
        return claseDao.save(clase);
    }


  /*  @Override
    public void modificarClase(Clase clase) {
        return null;
    }
*/
    @Override
    public void reservarClase(Long id_usuario, Long id_clase) {
        Usuario usuario= usuarioServicio.buscarPorId(id_usuario);
        Clase clase = buscarClase(id_clase);

        if(usuario!=null && clase!=null){
            if(!usuario.getClases().contains(clase)){
                usuario.getClases().add(clase);
            }
            if(!clase.getUsuarios().contains(usuario)){
                clase.getUsuarios().add(usuario);
            }

            usuarioServicio.guardarCambiar(usuario);
        };
    }

    @Override
    public void cancelarClase(Long id_usuario, Long id_clase) {
        Usuario usuario= usuarioServicio.buscarPorId(id_usuario);
        Clase clase = buscarClase(id_clase);

        for (Clase c: usuario.getClases()){
            if(c.getId()== clase.getId()){
                c.setActivo(false);
            }
        }

        usuarioServicio.guardarCambiar(usuario);

    }

    @Override
    public void borrarClase(Long id) {
        claseDao.delete(claseDao.findById(id).orElse(null));
    }

    @Override
    public void guardarClase(Clase clase) {
        claseDao.save(clase);
    }

    @Override
    public Optional<Clase> buscarPorEntrenador(String entrenador) {
        return claseDao.findByEntrenador(entrenador);
    }
    
}
