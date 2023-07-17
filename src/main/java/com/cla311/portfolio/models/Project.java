package com.cla311.portfolio.models;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotNull;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "projects")
public class Project {
	@NotNull
	private String title;

	@NotNull
	private String image;

	@NotNull
	private String tags;

	@NotNull
	private String cssTags;

	@NotNull
	private String startDate;

	private String endDate;

	@Id
	private String link;
}
