package com.cla311.portfolio.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.cla311.portfolio.services.ProjectService;

@Controller
public class HomeController {
	@Autowired
	ResourceLoader resourceLoader;

	@Autowired
	private ProjectService projectService;

	private static final String[] mainLinks = {
			"/", "/#portfolio", "/#about", "/#contact"
	};
	private static final String[] indexLinks = {
			"#", "#portfolio", "#about", "#contact"
	};

	@GetMapping("/")
	public String index(Model model) {
		model.addAttribute("nav_links", indexLinks);
		model.addAttribute("project_list", projectService.getProjects());

		return "index";
	}

	@GetMapping("/{project:(?!favicon.ico).+}")
	public String index(
			@PathVariable(required = true) String project, Model model) {
		Resource cssFile = resourceLoader.getResource("classpath:static/css/" + project + ".min.css");
		Resource jsFile = resourceLoader.getResource("classpath:static/js/" + project + ".min.js");

		model.addAttribute("nav_links", mainLinks);
		model.addAttribute("project", projectService.getProjectByID(project));
		model.addAttribute("css_file", cssFile.exists());
		model.addAttribute("js_file", jsFile.exists());

		return "project";
	}
}
