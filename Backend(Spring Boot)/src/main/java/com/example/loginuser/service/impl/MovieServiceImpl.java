package com.example.loginuser.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import com.example.loginuser.dto.MovieDto;
import com.example.loginuser.entity.Movie;
import com.example.loginuser.repository.MovieRepository;
import com.example.loginuser.service.MovieService;

@Service
public class MovieServiceImpl implements MovieService{
	
	@Autowired
	MovieRepository movieRepository;
	
	public Page<MovieDto> findAll(Pageable pageable) {
		// TODO Auto-generated method stub
		Page<Movie> result = movieRepository.findAll(pageable);
		Page<MovieDto> page = result.map(x -> new MovieDto(x));
		return page;
	}

	
}
