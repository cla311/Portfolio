package com.cla311.portfolio.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cla311.portfolio.models.Project;

@Repository
public interface ProjectRepository extends JpaRepository<Project, String> {
}
