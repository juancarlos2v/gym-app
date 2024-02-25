//package com.gymapp.GymApp.Configuraciones;
//
//import com.gymapp.GymApp.Entidades.Usuario;
//import com.gymapp.GymApp.Servicios.UsuarioServicio;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.crypto.factory.PasswordEncoderFactories;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.security.provisioning.InMemoryUserDetailsManager;
//import org.springframework.security.web.SecurityFilterChain;
//
//import java.util.List;
//import org.springframework.security.core.userdetails.User;
//
//@Configuration
//public class ConfSeg {
//
//    @Autowired
//    UsuarioServicio usuarioServicio;
//
//    @Bean
//    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
//        http
//            .authorizeRequests((authorizeRequests) ->
//                authorizeRequests
//                    .anyRequest().authenticated()
//            )
//            .httpBasic();
//        return http.build();
//    }
//
//    @Bean
//    public UserDetailsService userDetailsService() {
//        PasswordEncoder passwordEncoder = PasswordEncoderFactories.createDelegatingPasswordEncoder();
//
//        List<Usuario> listU = usuarioServicio.listarUsuarios();
//
//        InMemoryUserDetailsManager userDetailsManager = new InMemoryUserDetailsManager();
//
//        for (Usuario usuario : listU) {
//            UserDetails user = User.withUsername(usuario.getNombre())
//                    .password(passwordEncoder.encode(usuario.getPassword()))
//                    .roles("USER")
//                    .build();
//            userDetailsManager.createUser(user);
//        }
//
//        UserDetails admin = User.withUsername("admin")
//            .password(passwordEncoder.encode("123"))
//            .roles("ADMIN", "USER")
//            .build();
//
//        userDetailsManager.createUser(admin);
//
//        return userDetailsManager;
//    }
//}





