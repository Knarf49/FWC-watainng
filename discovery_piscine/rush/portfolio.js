$(document).ready(function () {
  const $container = $("#showcase-container");
  if ($container.length === 0) return;

  const jsonFile = $container.data("json");

  $.getJSON(jsonFile, function (projects) {
    $.each(projects, function (idx, proj) {
      const $card = $($("#project-card-template").html());

      const imageUrl = proj.image_url
        ? proj.image_url
        : "https://placehold.co/300x150";
      $card.find(".project-img").attr("src", imageUrl);

      if (proj.category) $card.find(".category-text").text(proj.category);
      if (proj.title) $card.find(".title-text").text(proj.title);
      if (proj.description) $card.find(".desc-text").text(proj.description);
      if (proj.tech_stack)
        $card.find(".tech-text span").text(proj.tech_stack.join(", "));
      if (proj.url) $card.find(".github-link").attr("href", proj.url);

      $container.append($card);
    });
  }).fail(function () {
    console.error("Failed to load " + jsonFile);
    $container.append(
      "<p class='text-danger'>ไม่สามารถโหลดข้อมูลโปรเจกต์ได้</p>",
    );
  });
});
