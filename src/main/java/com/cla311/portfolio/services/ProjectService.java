package com.cla311.portfolio.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.stereotype.Service;

import com.cla311.portfolio.models.Project;
import com.cla311.portfolio.repositories.ProjectRepository;

@Service
public class ProjectService {
	@Autowired
	private ProjectRepository projectRepository;

	public List<Project> getProjects() {
		Sort sort = Sort.by(Direction.DESC, "endDate", "startDate");
		List<Project> projects = projectRepository.findAll(sort);
		// projects.forEach(project -> System.out.println(project.toString()));

		return projects;
	}

	public Project getProjectByID(String link) {
		if (link == null || link.equals("")) {
			throw new IllegalArgumentException("No project id provided.");
		}
		return projectRepository.findById(link)
				.orElseThrow(() -> new IllegalArgumentException("No project with id " + link));
	}
}
