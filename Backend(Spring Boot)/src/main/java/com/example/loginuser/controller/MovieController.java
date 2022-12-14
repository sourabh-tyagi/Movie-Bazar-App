package com.example.loginuser.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.loginuser.dto.MovieDto;
import com.example.loginuser.service.MovieService;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/movies")
public class MovieController {
	@Autowired
	public MovieService movieService;
	
	@GetMapping
	public Page<MovieDto> getAllMovies(Pageable pageable){
		return movieService.findAll(pageable);
	}
	
	
	

}
