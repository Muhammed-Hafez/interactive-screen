document.addEventListener("DOMContentLoaded", () => {
  const textElement = document.getElementById("typewriter");
  const fullText =
    "       Welcome to Julphar, a leading Emirati pharmaceutical manufacturer, committed to innovation and excellence, we offer a diverse product portfolio addressing various disease areas and unmet needs for  patients and healthcare providers across the MENA region.";
  let index = 0;
  const speed = 50;

  function type() {
    if (index < fullText.length) {
      const span = document.createElement("span");
      span.textContent = fullText.charAt(index);
      textElement.appendChild(span);
      index++;
      setTimeout(type, speed);
    }
  }

  type();
});
