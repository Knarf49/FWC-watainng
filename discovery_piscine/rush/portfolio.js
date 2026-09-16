$(document).ready(function () {
  const projects = [
    {
      id: 1,
      title: "CE-Boostup-XIV Grader",
      description:
        "ระบบตรวจโค้ดอัตโนมัติ (Automated Grader) สำหรับแคมป์วิศวกรรมคอมพิวเตอร์ มีระบบแบ่งการทำงานชัดเจนทั้ง Frontend, Backend, และส่วน Compiler",
      tech_stack: ["Web Framework", "Node.js", "Compiler API"],
      repository_name: "CE-Boostup-XIV-Frontend",
      category: "Large Scale / Education",
    },
    {
      id: 2,
      title: "StudyAI & SummarizeAI",
      description:
        "เว็บแอปพลิเคชันสาย EdTech ที่ประยุกต์ใช้งาน AI เข้ามาช่วยในการสรุปเนื้อหาและส่งเสริมการเรียนรู้",
      tech_stack: ["Web Frontend", "LLM API"],
      repository_name: "StudyAI",
      category: "AI / Tech Trend",
    },
    {
      id: 3,
      title: "FitLife Smart Gym",
      description:
        "แอปพลิเคชันสำหรับสายสุขภาพและการจัดการยิม มี Use case การใช้งานในชีวิตประจำวันที่ชัดเจน",
      tech_stack: ["Full-stack Web"],
      repository_name: "FitLife-Smart-Gym",
      category: "Health & Fitness",
    },
    {
      id: 4,
      title: "Next.js E-Commerce Template",
      description:
        "ระบบร้านค้าออนไลน์ (E-Commerce) รองรับระบบตะกร้าสินค้าและการจัดการข้อมูลหลังบ้าน",
      tech_stack: ["Next.js", "Payload CMS"],
      repository_name: "PayloadEcommerce",
      category: "E-Commerce / Business",
    },
    {
      id: 5,
      title: "GPT Clone",
      description:
        "โปรเจกต์โคลนหน้าตาและการทำงานของ ChatGPT เพื่อทดสอบทักษะการสร้าง Interactive UI",
      tech_stack: ["React", "AI API"],
      repository_name: "gpt-clone",
      category: "Web Application",
    },
  ];

  $.each(projects, function (idx, proj) {
    const $card = $($("#project-card-template").html());

    $card.find(".category-text").text(proj.category);
    $card.find(".title-text").text(proj.title);
    $card.find(".desc-text").text(proj.description);
    $card.find(".tech-text span").text(proj.tech_stack.join(", "));
    $card
      .find(".github-link")
      .attr("href", "https://github.com/Knarf49/" + proj.repository_name);

    $("#showcase-container").append($card);
  });
});
