package com.cla311.portfolio.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;

import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import com.cla311.portfolio.models.Project;
import com.cla311.portfolio.repositories.ProjectRepository;

@Service public class ProjectService {
	@Autowired private ProjectRepository projectRepository;

	public List<Project> getProjects() {
		Sort sort = Sort.by(Direction.DESC, "end_date", "start_date");
		List<Project> projects = projectRepository.findAll(sort);

		return projects;
	}
}
