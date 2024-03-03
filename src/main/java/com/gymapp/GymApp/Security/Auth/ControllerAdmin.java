package com.gymapp.GymApp.Security.Auth;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;
//import org.springframework.security.access.annotation.Secured;
//import org.springframework.security.access.prepost.PreAuthorize;

@RestController
@RequestMapping("/ADMIN")
@RequiredArgsConstructor
public class ControllerAdmin {

    private final AuthService authService;

    //http://localhost:8080/ADMIN/register
    
//    @Secured("ROLE_ADMIN")
//    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping(value = "register")
    public ResponseEntity<AuthResponse> register(@RequestBody RegisterRequest request) {
        return ResponseEntity.ok(authService.register(request));
    }
}
