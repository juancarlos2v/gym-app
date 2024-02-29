//package com.gymapp.GymApp.Controladores;
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
//import org.springframework.core.annotation.Order;
//import org.springframework.security.core.userdetails.User;
//import static org.springframework.security.config.Customizer.withDefaults;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//
//@Configuration
//@EnableWebSecurity
//public class ConfSeg {
//
//    @Autowired
//    UsuarioServicio usuarioServicio;
//
//    @Bean
//    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
//        http
//                .authorizeRequests(authorize -> authorize
//                .anyRequest().authenticated()
//                )
//                .formLogin(withDefaults())
//                //                .loginPage("/login") // Página de inicio de sesión personalizada
//                //                .permitAll() // Permitir acceso a la página de inicio de sesión para todos
//                //                .and()
//                //                .logout() // Configuración de cierre de sesión
//                //                .logoutUrl("/logout") // URL para cerrar sesión
//                //                .logoutSuccessUrl("/login?logout") // Página de redirección después de cerrar sesión
//                //                .permitAll(); // Permitir acceso a la página de cierre de sesión para todos
//                .httpBasic(withDefaults());
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
//                .password(passwordEncoder.encode("123"))
//                .roles("ADMIN")
//                .build();
//
//        userDetailsManager.createUser(admin);
//
//        return userDetailsManager;
//    }
//
////    @Bean
////    @Order(1)
////    public SecurityFilterChain apiFilterChain(HttpSecurity http) throws Exception {
////        http
////                .securityMatcher("/api/**")
////                .authorizeHttpRequests(authorize -> authorize
////                .anyRequest().hasRole("ADMIN")
////                )
////                .httpBasic(withDefaults());
////        return http.build();
////    }
////
////    @Bean
////    public SecurityFilterChain formLoginFilterChain(HttpSecurity http) throws Exception {
////        http
////                .authorizeHttpRequests(authorize -> authorize
////                .anyRequest().authenticated()
////                )
////                .formLogin(withDefaults());
////        return http.build();
////    }
//}
