document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".productBtns .product");
  const infos = document.querySelectorAll(".modal-body .info");

  buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
      const selectedInfo = infos[index];
      const isVisible = !selectedInfo.classList.contains("hidden");

      // لو ظاهر، نخفيه
      if (isVisible) {
        selectedInfo.classList.add("hidden");
      } else {
        // لو مش ظاهر، نظهره ونخفي الباقيين
        infos.forEach((info, i) => {
          if (i === index) {
            info.classList.remove("hidden");
          } else {
            info.classList.add("hidden");
          }
        });
      }
    });
  });
});

// Modal functionality
class ProductModal {
  constructor() {
    this.modal = document.getElementById("product-modal");
    this.backButton = document.getElementById("back-button");
    this.productImage = document.getElementById("product-image");
    this.productTitle = document.getElementById("product-title");
    this.benefitsList = document.getElementById("benefits-list");
    this.bodyContainer = document.getElementById("body-container");
    // this.productImage1 = document.getElementById("product-image-2");
    // this.benefitsList1 = document.getElementById("benefits-list-2");

    this.setupEventListeners();
  }

  setupEventListeners() {
    this.backButton.addEventListener("click", () => this.closeModal());

    // Close modal on escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") this.closeModal();
    });
  }

  openModal(pointData, pointElement) {
    // Calculate zoom position and scale
    this.zoomToPoint(pointElement);

    // Populate modal with data
    this.populateModal(pointData);

    // Show modal with animation
    setTimeout(() => {
      this.modal.classList.add("active");
      this.animateBenefits();
      this.animateBenefits1();
    }, 600); // Delay to allow zoom animation to complete
  }

  closeModal() {
    // Hide modal
    this.modal.classList.remove("active");

    // Reset zoom
    setTimeout(() => {
      this.resetZoom();
    }, 300); // Delay to allow modal to fade out
  }

  populateModal(pointData) {
    // Set product title
    this.productTitle.textContent = pointData.title;

    // Set product image
    // Using placeholders from config
    this.productImage.src =
      placeholderImages[pointData.productImage] || pointData.productImage;
    this.productImage.alt = pointData.title;
    // this.productImage1.src =
    //   placeholderImages[pointData.productImage1] || pointData.productImage1;
    // this.productImage.alt = pointData.title;
    // Clear and populate benefits list
    this.benefitsList.innerHTML = "";
    pointData.benefits.forEach((benefit) => {
      const benefitItem = document.createElement("li");
      benefitItem.className = "benefit-item";

      benefitItem.innerHTML = `
          <div class="benefit-description">${benefit.description}</div>
        `;

      this.benefitsList.appendChild(benefitItem);
    });

    // this.benefitsList1.innerHTML = "";
    // pointData.benefits2.forEach((benefit) => {
    //   const benefitItem = document.createElement("li");
    //   benefitItem.className = "benefit-item";

    //   benefitItem.innerHTML = `
    //       <div class="benefit-description">${benefit.description}</div>
    //     `;

    //   this.benefitsList1.appendChild(benefitItem);
    // });
  }

  zoomToPoint(pointElement) {
    const rect = pointElement.getBoundingClientRect();
    const containerRect = this.bodyContainer.getBoundingClientRect();

    // Calculate center position of the point relative to the container
    const pointCenterX = rect.left + rect.width / 2 - containerRect.left;
    const pointCenterY = rect.top + rect.height / 2 - containerRect.top;

    // Calculate the position to center the point
    const offsetX = containerRect.width / 2 - pointCenterX;
    const offsetY = containerRect.height / 2 - pointCenterY;

    // Apply zoom transformation
    this.bodyContainer.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(2.5)`;
    this.bodyContainer.classList.add("zoomed");

    const btns = document.querySelectorAll(".btns");
    btns.forEach((btn) => {
      btn.classList.add("hidden");
    });

    const overlay = document.getElementById("overlay");
    overlay.classList.remove("hidden");
  }

  resetZoom() {
    this.bodyContainer.style.transform = "translate(0, 0) scale(1)";
    this.bodyContainer.classList.remove("zoomed");
    const btns = document.querySelectorAll(".btns");
    btns.forEach((btn) => {
      btn.classList.remove("hidden");
    });

    const overlay = document.getElementById("overlay");
    overlay.classList.add("hidden");
  }

  animateBenefits() {
    const benefitItems = this.benefitsList.querySelectorAll(".benefit-item");
    benefitItems.forEach((item) => {
      item.classList.add("animate");
    });
  }

  animateBenefits1() {
    const benefitItems = this.benefitsList1.querySelectorAll(".benefit-item");
    benefitItems.forEach((item) => {
      item.classList.add("animate");
    });
  }
}

// Create singleton instance
const productModal = new ProductModal();
