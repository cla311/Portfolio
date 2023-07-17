FROM gradle:8.2.1-jdk17-alpine AS build
COPY . .
RUN gradle clean build -x test

FROM openjdk:17.0.2-jdk-slim
COPY --from=build /build/libs/chrislouie-portfolio-1.0.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-Dspring.profiles.active=prod", "-jar", "/app.jar"]