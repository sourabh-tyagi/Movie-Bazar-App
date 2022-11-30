package com.example.loginuser.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.loginuser.entity.Rating;

public interface RatingRepository extends JpaRepository< Rating,Integer>{
	
	@Query(nativeQuery = true, value="select * from rating where user_id=?1 and movie_id=?2")
	Rating findByIds(int user_id, int movie_id);


}
