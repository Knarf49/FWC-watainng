$(document).ready(function () {
  $.getJSON("f_proj.json", function (projects) {
    $.each(projects, function (idx, proj) {
      const $card = $($("#project-card-template").html());

      const imageUrl = proj.image_url
        ? proj.image_url
        : "https://placehold.co/300x150";
      $card.find(".project-img").attr("src", imageUrl);
      $card.find(".category-text").text(proj.category);
      $card.find(".title-text").text(proj.title);
      $card.find(".desc-text").text(proj.description);
      $card.find(".tech-text span").text(proj.tech_stack.join(", "));
      $card.find(".github-link").attr("href", proj.url ? proj.url : "#");

      $("#showcase-container").append($card);
    });
  }).fail(function () {
    console.error("Failed to load f_proj.json.");
    $("#showcase-container").append(
      "<p class='text-danger'>ไม่สามารถโหลดข้อมูลโปรเจกต์ได้</p>",
    );
  });
});
