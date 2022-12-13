package com.example.loginuser.service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.example.loginuser.dto.RatingDto;
import com.example.loginuser.dto.ReviewDto;


public interface RatingService {

	public boolean saveRating(RatingDto ratingDto);

	public Page<ReviewDto> getAllReviews(Pageable pageable, int movie_id);
	

}
