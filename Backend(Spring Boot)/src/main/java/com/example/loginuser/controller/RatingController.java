package com.example.loginuser.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.loginuser.dto.MovieDto;
import com.example.loginuser.dto.RatingDto;
import com.example.loginuser.dto.ReviewDto;
import com.example.loginuser.repository.RatingRepository;
import com.example.loginuser.service.RatingService;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/rating")
public class RatingController {
	
	@Autowired
	public RatingService ratingService;
	@Autowired
	public RatingRepository ratingRepo;
	
	@PostMapping("/in")
	public String UserRating(@RequestBody RatingDto ratingDto){
		if(ratingService.saveRating(ratingDto))
			return "Response Submitted Sucessfully";
		else
			return "Incorrect UserId Or MovieId";
	}
	
	@GetMapping("/reviews")
	public Page<ReviewDto> getAllReviews(@RequestParam int movie_id, Pageable pageable){
		return ratingService.getAllReviews(pageable, movie_id);
	}
	
	
} 

 