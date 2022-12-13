//package com.example.loginuser.controller;
//
//
//import static org.junit.Assert.*;
//import org.junit.jupiter.api.Test;
//import org.modelmapper.ModelMapper;
//import com.example.loginuser.dto.UserDto;
//import com.example.loginuser.entity.User;
//
//public class UserControllerTest {
//
//  //  private ModelMapper modelMapper = new ModelMapper();
//
//	private ModelMapper modelMapper = new ModelMapper();
//    @Test
//    public void  NewUserRegister() {
//        User user = new User();
//        user.setUser_id(1);
//        user.setName("Hari");
//        user.setPassword("abcd@3");
//        user.setName("SEt@gmail");
//        user.setPhoneNumber("2345678");
//        
//        UserDto userDto = modelMapper.map(user,UserDto.class);
//        assertEquals(user.getUser_id(),userDto.getUser_id());
//    }
//}
//
