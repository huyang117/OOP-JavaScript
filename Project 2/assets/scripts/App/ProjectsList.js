import { ProjectItem } from "./ProjectItem.js";
import { DOMUtils } from "../Utility/DOMUtils.js";

export class ProjectsList {
  projects = [];

  constructor(type) {
    this.type = type;
    const projectItems = document.querySelectorAll(`#${this.type}-projects li`);
    projectItems.forEach((p) =>
      this.projects.push(
        new ProjectItem(p.id, this.switchProject.bind(this), this.type)
      )
    );
    this.connectDroppable();
  }

  connectDroppable() {
    const list = document.querySelector(`#${this.type}-projects ul`);

    list.addEventListener("dragenter", (event) => {
      if (event.dataTransfer.types[0] === "text/plain") {
        list.parentElement.classList.add("droppable");
        event.preventDefault();
      }
    });

    list.addEventListener("dragover", (event) => {
      if (event.dataTransfer.types[0] === "text/plain") {
        event.preventDefault();
      }
    });

    list.addEventListener("dragleave", (event) => {
      if (event.relatedTarget.closest(`#${this.type}-projects ul`) !== list) {
        list.parentElement.classList.remove("droppable");
      }
    });

    list.addEventListener("drop", (event) => {
      const projectId = event.dataTransfer.getData("text/plain");
      if (this.projects.find((p) => p.id === projectId)) {
        return;
      }
      document
        .getElementById(projectId)
        .querySelector("button:last-of-type")
        .click();
      list.parentElement.classList.remove("droppable");
      event.preventDefault(); // not required
    });
  }

  setAddPjtToOtherList(addProjectToOtherListFunction) {
    this.addProjectToOtherList = addProjectToOtherListFunction;
  }

  addProject(project) {
    this.projects = this.projects.concat(project);
    DOMUtils.addProjectToList(project.id, `#${this.type}-projects ul`);
    project.updateAfterSwitch(this.switchProject.bind(this), this.type);
  }

  switchProject(projectId) {
    const projectSwitched = this.projects.find((p) => p.id === projectId);
    this.projects = this.projects.filter((p) => p.id !== projectId);
    this.addProjectToOtherList(projectSwitched);
  }
}
