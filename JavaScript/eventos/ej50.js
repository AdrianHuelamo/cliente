document.addEventListener("DOMContentLoaded", () => {
  const viewportDisplay = document.getElementById("viewport-coords");
  const pageDisplay = document.getElementById("page-coords");

  window.addEventListener("mousemove", (event) => {
    const x_page = event.pageX;
    const y_page = event.pageY;

    pageDisplay.textContent = `X: ${x_page}, Y: ${y_page}`;
  });
});
