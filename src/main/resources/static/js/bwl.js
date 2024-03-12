"use strict";

var page = $("html, body");

$(function () {
  // Carousel A Controls
  $("#carouselLimeLiteA .carousel-control-prev").on(
    "click",
    null,
    { target: "#carouselLimeLiteB" },
    carouselPrev
  );

  $("#carouselLimeLiteA .carousel-control-next").on(
    "click",
    null,
    { target: "#carouselLimeLiteB" },
    carouselNext
  );

  $("#thumb1A").on("click", null, { target: "#thumb1B" }, carouselThumbnail);

  $("#thumb2A").on("click", null, { target: "#thumb2B" }, carouselThumbnail);

  $("#thumb3A").on("click", null, { target: "#thumb3B" }, carouselThumbnail);

  $("#thumb4A").on("click", null, { target: "#thumb4B" }, carouselThumbnail);

  // Carousel B Controls
  $("#carouselLimeLiteB .carousel-control-prev").on(
    "click",
    null,
    { target: "#carouselLimeLiteA" },
    carouselPrev
  );

  $("#carouselLimeLiteB .carousel-control-next").on(
    "click",
    null,
    { target: "#carouselLimeLiteA" },
    carouselNext
  );

  $("#thumb1B").on("click", null, { target: "#thumb1A" }, carouselThumbnail);

  $("#thumb2B").on("click", null, { target: "#thumb2A" }, carouselThumbnail);

  $("#thumb3B").on("click", null, { target: "#thumb3A" }, carouselThumbnail);

  $("#thumb4B").on("click", null, { target: "#thumb4A" }, carouselThumbnail);
});

function carouselPrev(event) {
  var carousel = event.data.target;
  $(`${carousel} .carousel-control-next`).trigger("click");
}

function carouselNext(event) {
  var carousel = event.data.target;
  $(`${carousel} .carousel-control-next`).trigger("click");
}

function carouselThumbnail(event) {
  var thumbnail = event.data.target;
  $(thumbnail).trigger("click");
}
