class Tooltip {}

class ProjectItem {
  constructor(id, switchProjectFunction) {
    this.id = id;
    this.switchProject = switchProjectFunction;
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
    switchBtn.addEventListener("click", this.handleSwitch.bind(this));
  }

  handleSwitch() {
    const switchBtn = this.projectItemElement.querySelector(
      "button:last-of-type"
    );
    const btnText = switchBtn.innerHTML;
    switchBtn.innerHTML = btnText === 'Finish' ? 'Activate' : 'Finish';
    this.switchProject(this.id);
  }
}

class ProjectsList {
  projects = [];

  constructor(listType) {
    this.listType = listType;
    this.projectItems = document.querySelectorAll(`#${listType}-projects li`);
    this.projectItems.forEach((p) =>
      this.projects.push(new ProjectItem(p.id, this.switchProject.bind(this)))
    );
  }

  // after removing the target object from this project list,
  // need to add the project to the other project list instance
  // this is the way to receive the function to cause changes in the other list instance
  setChangeOtherListFunction(changeOtherListFunction) {
    this.changeOtherList = changeOtherListFunction;
  }

  addProject(targetProject) {
    document.querySelector(`#${this.listType}-projects`).append(targetProject);
  }

  switchProject(projectId) {
    // targetProject is the project to be removed from current project list
    // and to be added to the other project list
    console.log(projectId);
    const targetProject = Array.from(this.projectItems).find(
      (p) => p.id === projectId
    );

    // remove the target project from this project list
    this.projects = this.projects.filter((p) => p.id !== projectId);

    this.changeOtherList(targetProject);
  }
}

class App {
  static init() {
    const activePjtList = new ProjectsList("active");
    const finishedPjtList = new ProjectsList("finished");

    activePjtList.setChangeOtherListFunction(
      finishedPjtList.addProject.bind(finishedPjtList)
    );
    finishedPjtList.setChangeOtherListFunction(
      activePjtList.addProject.bind(activePjtList)
    );
  }
}

App.init();
