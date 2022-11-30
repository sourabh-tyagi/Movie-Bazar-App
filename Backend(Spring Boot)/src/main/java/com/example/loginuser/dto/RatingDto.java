package com.example.loginuser.dto;

import javax.persistence.Column;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class RatingDto {
	
	private int rating_id;
	private int user_id;
	private int movie_id;
	private double rating;
	private String review;
	@Column(nullable=false,unique=true)
	private String email;
	
	
	public RatingDto(int rating_id, int user_id, int movie_id, double rating, String review, String email) {
		super();
		this.rating_id = rating_id;
		this.user_id = user_id;
		this.movie_id = movie_id;
		this.rating = rating;
		this.review = review;
		this.email = email;
	}


	public int getRating_id() {
		return rating_id;
	}


	public void setRating_id(int rating_id) {
		this.rating_id = rating_id;
	}


	public int getUser_id() {
		return user_id;
	}


	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}


	public int getMovie_id() {
		return movie_id;
	}


	public void setMovie_id(int movie_id) {
		this.movie_id = movie_id;
	}


	public double getRating() {
		return rating;
	}


	public void setRating(double rating) {
		this.rating = rating;
	}


	public String getReview() {
		return review;
	}


	public void setReview(String review) {
		this.review = review;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}
	
	
	




}
