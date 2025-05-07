// JavaScript - Product Modal with Zoom and Clean Structure

class ProductModal {
  constructor() {
    this.modal = document.getElementById("product-modal");
    this.backButton = document.getElementById("back-button");
    this.productTitle = document.getElementById("product-title");
    this.bodyContainer = document.getElementById("body-container");
    this.overlay = document.getElementById("overlay");

    this.sections = [
      {
        imageEl: document.getElementById("product-image"),
        benefitsListEl: document.getElementById("benefits-list"),
        imageKey: "productImage",
        benefitsKey: "benefits",
      },
      {
        imageEl: document.getElementById("product-image-2"),
        benefitsListEl: document.getElementById("benefits-list-2"),
        imageKey: "productImage1",
        benefitsKey: "benefits2",
      },
      {
        imageEl: document.getElementById("product-image-3"),
        benefitsListEl: document.getElementById("benefits-list-3"),
        imageKey: "productImage2",
        benefitsKey: "benefits3",
      },
    ];

    this.setupEventListeners();
  }

  setupEventListeners() {
    this.backButton.addEventListener("click", () => this.closeModal());
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") this.closeModal();
    });
  }

  openModal(pointData, pointElement) {
    this.zoomToPoint(pointElement);
    this.populateModal(pointData);

    setTimeout(() => {
      this.modal.classList.add("active");
      this.sections.forEach((section) =>
        this.animateItems(section.benefitsListEl)
      );
    }, 600);
  }

  closeModal() {
    // Hide modal
    this.modal.classList.remove("active");

    // Reset zoom
    setTimeout(() => {
      this.resetZoom();
    }, 300);

    // ❗️إخفاء كل أقسام البيانات (info)
    const infos = document.querySelectorAll(".modal-body .info");
    infos.forEach((info) => {
      info.classList.add("hidden");
    });

    // ❗️إرجاع الزرائر لو كان فيها تصغير أو إخفاء
    const buttons = document.querySelectorAll(".productBtns .product");
    buttons.forEach((button) => {
      button.classList.remove("shrink"); // لو كنت مصغّرهم بكلاس معين
    });
  }

  populateModal(pointData) {
    this.productTitle.textContent = pointData.title;

    this.sections.forEach((section) => {
      const imageSrc = pointData[section.imageKey];
      const benefits = pointData[section.benefitsKey];
      this.populateSection(
        section.imageEl,
        imageSrc,
        pointData.title,
        section.benefitsListEl,
        benefits
      );
    });
  }

  populateSection(imageEl, imgSrc, title, listEl, benefitsArray) {
    imageEl.src = placeholderImages[imgSrc] || imgSrc;
    imageEl.alt = title;
    listEl.innerHTML = "";

    benefitsArray.forEach((benefit) => {
      const li = document.createElement("li");
      li.className = "benefit-item";
      li.innerHTML = `<div class="benefit-description">${benefit.description}</div>`;
      listEl.appendChild(li);
    });
  }

  animateItems(container) {
    const items = container.querySelectorAll(".benefit-item");
    items.forEach((item) => item.classList.add("animate"));
  }

  zoomToPoint(pointElement) {
    const rect = pointElement.getBoundingClientRect();
    const containerRect = this.bodyContainer.getBoundingClientRect();

    const offsetX =
      containerRect.width / 2 -
      (rect.left + rect.width / 2 - containerRect.left);
    const offsetY =
      containerRect.height / 2 -
      (rect.top + rect.height / 2 - containerRect.top);

    this.bodyContainer.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(2.5)`;
    this.bodyContainer.classList.add("zoomed");

    document
      .querySelectorAll(".btns")
      .forEach((btn) => btn.classList.add("hidden"));
    this.overlay.classList.remove("hidden");
  }

  resetZoom() {
    this.bodyContainer.style.transform = "translate(0, 0) scale(1)";
    this.bodyContainer.classList.remove("zoomed");

    document.querySelectorAll(".btns").forEach((btn) => {
      btn.classList.remove("hidden");
      btn.classList.add("reappear"); // Optional class for animation
      setTimeout(() => btn.classList.remove("reappear"), 300);
    });

    this.overlay.classList.add("hidden");
  }
}

// Create singleton instance
const productModal = new ProductModal();

// Buttons behavior inside modal (switching content)
document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".productBtns .product");
  const infos = document.querySelectorAll(".modal-body .info");

  buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
      const selectedInfo = infos[index];
      const isVisible = !selectedInfo.classList.contains("hidden");

      // لو ظاهر، نخفيه ونرجّع الزرائر لطبيعتها
      if (isVisible) {
        selectedInfo.classList.add("hidden");

        // نرجع كل الزرائر لحجمها الطبيعي
        buttons.forEach((btn) => {
          btn.classList.remove("shrink");
        });
      } else {
        // لو مش ظاهر، نظهره ونخفي الباقيين
        infos.forEach((info, i) => {
          if (i === index) {
            info.classList.remove("hidden");
          } else {
            info.classList.add("hidden");
          }
        });

        // نصغر الزرارين التانيين
        buttons.forEach((btn, i) => {
          if (i !== index) {
            btn.classList.add("shrink");
          } else {
            btn.classList.remove("shrink");
          }
        });
      }
    });
  });
});
