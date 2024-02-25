package com.gymapp.GymApp.Servicios;


import com.gymapp.GymApp.Entidades.Clase;
import com.gymapp.GymApp.Entidades.Usuario;

import java.util.List;

public interface IClaseServicio {

    List<Clase> listarClases();
    Clase buscarClase(Long id);
    Clase agregarClases(Clase clase);
    //void modificarClase(Clase clase);
    void reservarClase(Long id_usuario, Long id_clase);
    void cancelarClase(Long id_usuario, Long id_clase);
    void borrarClase(Long id);
    void guardarClase(Clase clase);

}
