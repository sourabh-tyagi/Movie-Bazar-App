package com.example.loginuser.dto;

import com.example.loginuser.entity.Rating;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
@JsonIgnoreProperties(ignoreUnknown = true)	
public class ReviewDto {
	
		private int user_id;
		private String review;
		public int getUser_id() {
			return user_id;
		}
		public void setUser_id(int user_id) {
			this.user_id = user_id;
		}
		public String getReview() {
			return review;
		}
		public void setReview(String review) {
			this.review = review;
		}
		public ReviewDto(int user_id, String review) {
			super();
			this.user_id = user_id;
			this.review = review;
		}
		public ReviewDto(Rating rating) {
			// TODO Auto-generated constructor stub
			user_id = rating.getUser_id();
			review = rating.getReview();
		}

}
