document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("cv-form");
  const editBtn = document.getElementById("edit-btn");
  const saveBtn = document.getElementById("save-btn");
  const cancelBtn = document.getElementById("cancel-btn");
  const allInputs = form.querySelectorAll("input, select");

  function setMode(isViewMode) {
    if (isViewMode) {
      form.classList.add("view-mode");
      allInputs.forEach((el) => {
        if (el.tagName === "SELECT") {
          el.disabled = true;
        } else {
          el.readOnly = true;
        }
      });
    } else {
      form.classList.remove("view-mode");
      allInputs.forEach((el) => {
        if (el.tagName === "SELECT") {
          el.disabled = false;
        } else {
          el.readOnly = false;
        }
      });
    }
  }

  setMode(true);

  editBtn.addEventListener("click", () => setMode(false));

  cancelBtn.addEventListener("click", () => {
    setMode(true);
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    setMode(true);
  });
});
