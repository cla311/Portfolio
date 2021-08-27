package com.cla311.portfolio.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;

import com.cla311.portfolio.models.Project;
import com.cla311.portfolio.services.ProjectService;

@Controller public class HomeController {
	@Autowired private ProjectService projectService;
	private static final String[] mainLinks = {
		"/#portfolio", "/#about", "/#contact"
	};
	private static final String[] indexLinks = {
		"#portfolio", "#about", "#contact"
	};

	@GetMapping("/") public String index(Model model) {
		model.addAttribute("nav_links", indexLinks);
		model.addAttribute("project_list", projectService.getProjects());

		return "index";
	}

	@GetMapping("/projects/{project}") public String index(
		@PathVariable(required = true) String project, Model model) {
		model.addAttribute("nav_links", mainLinks);
		model.addAttribute("project", projectService.getProjectByID(project));

		return "project";
	}
}
