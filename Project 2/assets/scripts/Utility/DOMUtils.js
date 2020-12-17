class DOMUtils {
  static addProjectToList(projectId, destinationSelector) {
    const projectEl = document.getElementById(projectId);
    document.querySelector(destinationSelector).append(projectEl);
    projectEl.scrollIntoView({ behavior: "smooth" });
  }

  static clearEventListener(element) {
    const clonedEl = element.cloneNode(true);
    element.replaceWith(clonedEl);
    return clonedEl;
  }

  static updateBtnText(btn, type) {
    btn.textContent = type === "active" ? "Finish" : "Activate";
  }
}
