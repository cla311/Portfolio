"use strict";

$(function () {
  var carouselElementA = $("#carouselLimeLiteA"),
    carouselElementB = $("#carouselLimeLiteB");

  var carouselA = bootstrap.Carousel.getOrCreateInstance(carouselElementA),
    carouselB = bootstrap.Carousel.getOrCreateInstance(carouselElementB);

  // Carousel A Controls
  carouselElementA.find("carousel-control-prev").on("click", () => {
    carouselB.prev();
  });

  carouselElementA.find(".carousel-control-next").on("click", () => {
    carouselB.next();
  });

  $("#thumb1A").on("click", () => {
    carouselB.to(0);
  });

  $("#thumb2A").on("click", () => {
    carouselB.to(1);
  });

  $("#thumb3A").on("click", () => {
    carouselB.to(2);
  });

  $("#thumb4A").on("click", () => {
    carouselB.to(3);
  });

  // Carousel B Controls
  carouselElementB.find(".carousel-control-prev").on("click", (e) => {
    carouselA.prev();
  });

  carouselElementB.find(".carousel-control-next").on("click", () => {
    carouselA.next();
  });

  $("#thumb1B").on("click", () => {
    carouselA.to(0);
  });

  $("#thumb2B").on("click", () => {
    carouselA.to(1);
  });

  $("#thumb3B").on("click", () => {
    carouselA.to(2);
  });

  $("#thumb4B").on("click", () => {
    carouselA.to(3);
  });
});
