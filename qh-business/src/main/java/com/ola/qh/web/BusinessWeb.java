package com.ola.qh.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class BusinessWeb {

	@RequestMapping("/index")
	public String index(){
		return "index";
	}
}
