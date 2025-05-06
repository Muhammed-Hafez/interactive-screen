document.addEventListener("DOMContentLoaded", () => {
  const bodyImage = document.getElementById("body-image");
  bodyImage.src = placeholderImages["assets/body-image.jpg"];

  insertCustomArrowImages();

  const video = document.getElementById("intro-video");
  const splash = document.getElementById("video-splash");
  const content = document.getElementById("main-content");

  video.addEventListener("ended", () => {
    splash.style.display = "none";
    content.style.display = "block";
    document.body.style.overflow = "auto"; // يسمح بالسكول بعد الفيديو
  });
});

function insertCustomArrowImages() {
  const container = document.getElementById("interactive-points");

  const arrows = [
    {
      id: 1,
      src: "imgs/Untitled-1-01.png",
      left: "50%",
      top: "15%",
      labelImage: "imgs/D-icon.png",
      data: {
        productImage: "imgs/Dermatology-v1.png",
        benefits: [
          {
            title: "Feature 5",
            description:
              "• Healthy men and women (n=17,802) with LDL-C <130 mg/dL (3.4 mmol/L) and hs-CRP ≥2.0 mg/L.7<br> • Received Rosuvastatin, 20 mg daily, or placebo.7<br> • Follow-up for the occurrence of the combined primary end point of myocardial infarction, stroke, arterial revascularization, hospitalization for unstable angina, or death from cardiovascular causes.7<br> • Median follow-up of 1.9 years (maximum 5 years).7<br> • Rosuvastatin reduced LDL-C levels by 50% and high- sensitivity C-reactive protein (hs-CRP) levels by 37%.8",
          },
        ],
      },
    },
    {
      id: 2,
      src: "imgs/Untitled-1-02.png",
      left: "55%",
      top: "20%",
      labelImage: "imgs/wound.png",
      data: {
        productImage: "imgs/pack.png",
        benefits: [
          {
            title: "Feature 5",
            description:
              "• Healthy men and women (n=17,802) with LDL-C <130 mg/dL (3.4 mmol/L) and hs-CRP ≥2.0 mg/L.7<br> • Received Rosuvastatin, 20 mg daily, or placebo.7<br> • Follow-up for the occurrence of the combined primary end point of myocardial infarction, stroke, arterial revascularization, hospitalization for unstable angina, or death from cardiovascular causes.7<br> • Median follow-up of 1.9 years (maximum 5 years).7<br> • Rosuvastatin reduced LDL-C levels by 50% and high- sensitivity C-reactive protein (hs-CRP) levels by 37%.8",
          },
        ],
      },
    },
    {
      id: 3,
      src: "imgs/Untitled-1-03.png",
      left: "28%",
      top: "30%",
      labelImage: "imgs/cardio.png",
      data: {
        productImage: "imgs/pack.png",
        benefits: [
          {
            title: "Feature 5",
            description:
              "• Healthy men and women (n=17,802) with LDL-C <130 mg/dL (3.4 mmol/L) and hs-CRP ≥2.0 mg/L.7<br> • Received Rosuvastatin, 20 mg daily, or placebo.7<br> • Follow-up for the occurrence of the combined primary end point of myocardial infarction, stroke, arterial revascularization, hospitalization for unstable angina, or death from cardiovascular causes.7<br> • Median follow-up of 1.9 years (maximum 5 years).7<br> • Rosuvastatin reduced LDL-C levels by 50% and high- sensitivity C-reactive protein (hs-CRP) levels by 37%.8",
          },
        ],
      },
    },
    {
      id: 4,
      src: "imgs/Untitled-1-05.png",
      left: "30%",
      top: "40%",
      labelImage: "imgs/anti.png",
      data: {
        productImage: "imgs/pack.png",
        benefits: [
          {
            title: "Feature 5",
            description:
              "• Healthy men and women (n=17,802) with LDL-C <130 mg/dL (3.4 mmol/L) and hs-CRP ≥2.0 mg/L.7<br> • Received Rosuvastatin, 20 mg daily, or placebo.7<br> • Follow-up for the occurrence of the combined primary end point of myocardial infarction, stroke, arterial revascularization, hospitalization for unstable angina, or death from cardiovascular causes.7<br> • Median follow-up of 1.9 years (maximum 5 years).7<br> • Rosuvastatin reduced LDL-C levels by 50% and high- sensitivity C-reactive protein (hs-CRP) levels by 37%.8",
          },
        ],
      },
    },
    {
      id: 5,
      src: "imgs/Untitled-1-04.png",
      left: "52%",
      top: "45%",
      labelImage: "imgs/pain.png",
      data: {
        productImage: "imgs/pack.png",
        benefits: [
          {
            title: "Feature 5",
            description:
              "• Healthy men and women (n=17,802) with LDL-C <130 mg/dL (3.4 mmol/L) and hs-CRP ≥2.0 mg/L.7<br> • Received Rosuvastatin, 20 mg daily, or placebo.7<br> • Follow-up for the occurrence of the combined primary end point of myocardial infarction, stroke, arterial revascularization, hospitalization for unstable angina, or death from cardiovascular causes.7<br> • Median follow-up of 1.9 years (maximum 5 years).7<br> • Rosuvastatin reduced LDL-C levels by 50% and high- sensitivity C-reactive protein (hs-CRP) levels by 37%.8",
          },
        ],
      },
    },
  ];

  arrows.forEach((arrow) => {
    // Create image
    const img = document.createElement("img");
    img.src = arrow.src;
    img.alt = `Arrow ${arrow.id}`;
    img.style.position = "absolute";
    img.style.left = arrow.left;
    img.style.top = arrow.top;
    img.style.width = "18%";
    img.style.cursor = "pointer";
    img.classList.add("custom-arrow");

    // Create label
    // Create label as image
    const label = document.createElement("img");
    label.src = `${arrow.labelImage}`; // حط هنا مسار الصور حسب الترتيب
    label.alt = `Label ${arrow.id}`;
    label.className = "point-label";
    label.style.position = "absolute";
    label.style.left = `calc(${arrow.left} + 190px)`;
    label.style.top = `calc(${arrow.top} + -20px)`;
    label.style.width = "200px"; // أو المقاس اللي يناسبك
    label.style.cursor = "pointer";

    if (arrow.id == 3) {
      label.style.left = `calc(${arrow.left} + -200px)`;
      label.style.top = `calc(${arrow.top} + -25px)`;
    }
    if (arrow.id == 4) {
      label.style.left = `calc(${arrow.left} + -200px)`;
      label.style.top = `calc(${arrow.top} + -25px)`;
    }
    if (arrow.id == 5) {
      label.style.left = `calc(${arrow.left} + 190px)`;
      label.style.top = `calc(${arrow.top} + 160px)`;
    }
    // Shared click handler
    const clickHandler = () => productModal.openModal(arrow.data, img);

    img.addEventListener("click", clickHandler);
    label.addEventListener("click", clickHandler);

    container.appendChild(img);
    container.appendChild(label);
  });
}
