package com.cla311.portfolio.models;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import lombok.Getter;
import lombok.Setter;

@Entity @Table(name = "projects") public class Project {
	@NotNull @Getter @Setter private String title;

	@NotNull @Getter @Setter private String image;

	@NotNull @Getter @Setter private String tags;

	@NotNull @Getter @Setter private String cssTags;

	@NotNull @Getter @Setter private String startDate;

	@Getter @Setter private String endDate;

	@Id @Getter @Setter private String link;

	public Project() {}

	public Project(String title, String image, String tags, String cssTags,
		String startDate, String endDate, String link) {
		this.title = title;
		this.image = image;
		this.tags = tags;
		this.cssTags = cssTags;
		this.startDate = startDate;
		this.endDate = endDate;
		this.link = link;
	}
}
