class Tooltip {}

class ProjectItem {
  constructor(id) {
    this.id = id;
    this.projectItemElement = document.getElementById(this.id);
    this.connectMoreInfoButton();
    this.connectSwitchBtn();
  }

  connectMoreInfoButton() {
    const moreInfoBtn = this.projectItemElement.querySelector(
      "button:first-of-type"
    );
    moreInfoBtn.addEventListener("click", () => {});
  }

  connectSwitchBtn() {
    const switchBtn = this.projectItemElement.querySelector(
      "button:last-of-type"
    );
    switchBtn.addEventListener("click", () => {});
  }
}

class ProjectsList {
  projects = [];

  constructor(listType) {
    this.listType = listType;
    const projectItems = document.querySelectorAll(`#${listType}-projects li`);
    projectItems.forEach((p) => this.projects.push(new ProjectItem(p.id)));
  }

  addProject() {}

  removeProject(projectId) {
    // targetProject is the project to be removed from current project list
    // and to be added to the other project list
    const targetProject = this.projects.find((p) => p.id === projectId);
    this.projects = this.projects.filter((p) => p.id !== projectId);
  }

}

class App {
  static init() {
    const activePjtList = new ProjectsList("active");
    const finishedPjtList = new ProjectsList("finished");
  }
}

App.init();
