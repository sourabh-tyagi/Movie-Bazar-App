package com.example.loginuser.service.impl;


import java.util.Formatter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.loginuser.dto.RatingDto;
import com.example.loginuser.entity.Movie;
import com.example.loginuser.entity.Rating;
import com.example.loginuser.repository.MovieRepository;
import com.example.loginuser.repository.RatingRepository;
import com.example.loginuser.repository.UserRepository;
import com.example.loginuser.service.RatingService;
@Service
public class RatingServiceImpl implements RatingService {
	
	@Autowired
	UserRepository userRepository;
	@Autowired
	MovieRepository movieRepository;
	@Autowired
	RatingRepository ratingRepository;
	private int user_id;
	@Override
	public boolean saveRating(RatingDto ratingDto) {
		// TODO Auto-generated method stub
		try{
		user_id=userRepository.findByEmail(ratingDto.getEmail()).getUser_id();
		userRepository.findById(user_id).get();
		}catch(Exception e) {
			System.out.println("UserId not Found");
			return false;
		}
		
		Movie movie = null;
		try {
		 movie = movieRepository.findById(ratingDto.getMovie_id()).get();
		}catch (Exception e) {
			System.out.println("MovieId Not Found");
			return false;
		}
		int movieId=movie.getMovie_id();
		double value=movie.getOverAllRating();
		int count=movie.getCount();
		
		Rating rating=null;
		try{
			rating=ratingRepository.findByIds(user_id,ratingDto.getMovie_id());
			if(rating!=null) {
				System.out.println("Response Already submitted By UserId "+ratingDto.getUser_id());
				return false;
			}
		}
		catch (Exception e) {
			
		}
		rating = new Rating();
		rating.setMovie_id(ratingDto.getMovie_id());
		rating.setUser_id(user_id);
		rating.setRating(ratingDto.getRating());
		rating.setReview(ratingDto.getReview());
		ratingRepository.save(rating);
		System.out.println("New Response Added ");
		double sum=value*count;
		count++;
		sum=sum+ratingDto.getRating();
		value=sum/count;
		Formatter formatter = new Formatter();
		formatter.format("%.2f", value);
		formatter.close();
		movieRepository.setRating(movieId, value, count);
		System.out.println("Overall Rating Updated"+value);		
		return true;
	}

		
}
