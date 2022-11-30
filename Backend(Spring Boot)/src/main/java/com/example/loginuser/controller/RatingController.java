package com.example.loginuser.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.loginuser.dto.RatingDto;
import com.example.loginuser.service.RatingService;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/rating")
public class RatingController {
	
	@Autowired
	public RatingService ratingService;
	
	@PostMapping("/in")
	public String UserRating(@RequestBody RatingDto ratingDto){
		if(ratingService.saveRating(ratingDto))
			return "Response Submitted Sucessfully";
		else
			return "Incorrect UserId Or MovieId";
	}
} 
 