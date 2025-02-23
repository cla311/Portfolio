FROM gradle:jdk23 AS build
COPY . /home/gradle/source
WORKDIR /home/gradle/source
RUN gradle --no-daemon clean build -x test

FROM eclipse-temurin:23
EXPOSE 8080
COPY --from=build /home/gradle/source/build/libs/chrislouie-portfolio-1.0.jar app.jar
ENTRYPOINT ["java", "-Dspring.profiles.active=prod", "-jar", "app.jar"]