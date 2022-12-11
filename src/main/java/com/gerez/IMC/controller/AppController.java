package com.gerez.IMC.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.gerez.IMC.model.User;
import com.gerez.IMC.repository.UserRepository; 
import org.springframework.ui.Model;

@Controller
public class AppController {
 
	@Autowired
	private UserRepository userRepo;
	
     
    @GetMapping({"","/login"})
    public String viewHomePage() {
        return "login";
    }
   
    @GetMapping("/admin")
    public String viewAdminPage() {
        return "admin";
    }
   
    @GetMapping("/registro")
	public String showRegistrationForm(Model model) {
		model.addAttribute("user", new User());
		return "registro";
	}
    
    @RequestMapping(value = "/registro", method = RequestMethod.POST)
    public ModelAndView validarRegistro(User user)
    {
    	BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        String encodedPassword = passwordEncoder.encode(user.getPassword());
        user.setPassword(encodedPassword);
        userRepo.save(user);
        return new ModelAndView("redirect:/");
    	
    }
    
    @GetMapping("/home")
	public String homePage(Authentication authentication, Model model) {
    	User user = userRepo.findByUsuario(authentication.getName());   	
    	model.addAttribute("userInfo", user);
		return "index";
	}
    
    
    @RequestMapping(value="/logout", method=RequestMethod.GET)  
    public String logoutPage(HttpServletRequest request, HttpServletResponse response) {  
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();  
        if (auth != null){      
           new SecurityContextLogoutHandler().logout(request, response, auth);  
        }  
         return "redirect:/";  
     }  
}
