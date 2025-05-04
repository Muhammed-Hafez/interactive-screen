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

const upBtn = document.getElementById("up");
const downBtn = document.getElementById("down");
const slide1 = document.getElementById("slide1");
const slide2 = document.getElementById("slide2");

downBtn.addEventListener("click", () => {
  slide1.style.display = "none";
  slide2.style.display = "block";
});

upBtn.addEventListener("click", () => {
  slide2.style.display = "none";
  slide1.style.display = "block";
});

function insertCustomArrowImages() {
  const container = document.getElementById("interactive-points");

  const arrows = [
    {
      id: 1,
      src: "imgs/Untitled-1-01.png",
      left: "50%",
      top: "10%",
      label: "Portfolio 1",
      data: {
        productImage: "imgs/pack.png",
        benefits: [
          {
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
      label: "Portfolio 2",
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
      label: "Portfolio 3",
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
      left: "22%",
      top: "40%",
      label: "Portfolio 4",
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
      label: "Portfolio 5",
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
    img.style.width = "25%";
    img.style.cursor = "pointer";
    img.classList.add("custom-arrow");

    // Create label
    const label = document.createElement("div");
    label.textContent = arrow.label;
    label.className = "point-label";
    label.style.position = "absolute";
    label.style.left = `calc(${arrow.left} + 265px)`;
    label.style.top = `calc(${arrow.top} + -10px)`;
    label.style.cursor = "pointer";

    if (label.textContent == "Portfolio 3") {
      label.style.left = `calc(${arrow.left} + -140px)`;
      label.style.top = `calc(${arrow.top} + -15px)`;
    }
    if (label.textContent == "Portfolio 4") {
      label.style.left = `calc(${arrow.left} + -140px)`;
      label.style.top = `calc(${arrow.top} + -15px)`;
    }
    if (label.textContent == "Portfolio 5") {
      label.style.left = `calc(${arrow.left} + 260px)`;
      label.style.top = `calc(${arrow.top} + 235px)`;
    }
    // Shared click handler
    const clickHandler = () => productModal.openModal(arrow.data, img);

    img.addEventListener("click", clickHandler);
    label.addEventListener("click", clickHandler);

    container.appendChild(img);
    container.appendChild(label);
  });
}
