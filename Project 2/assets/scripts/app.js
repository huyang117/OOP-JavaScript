// class DOMUtil {
//   static clearEventListener(element) {
//     const clonedEl = element.cloneNode(true);
//     element.replaceWith(clonedEl);
//     return clonedEl;
//   }

//   static addProjectToList(project, destinationSelector) {
//     const targetProject = document.getElementById(project.id);
//     const newDestination = document.querySelector(destinationSelector);
//     newDestination.append(targetProject);
//   }
// }

// class Tooltip {}

// class ProjectItem {
//   constructor(id, switchProjectFunction, listType) {
//     this.id = id;
//     this.switchProject = switchProjectFunction;
//     this.projectItemElement = document.getElementById(this.id);
//     this.connectMoreInfoButton();
//     this.connectSwitchBtn(listType);
//   }

//   connectMoreInfoButton() {
//     const moreInfoBtn = this.projectItemElement.querySelector(
//       "button:first-of-type"
//     );
//     moreInfoBtn.addEventListener("click", () => {});
//   }

//   connectSwitchBtn(listType) {
//     let switchBtn = this.projectItemElement.querySelector(
//       "button:last-of-type"
//     );
//     switchBtn = DOMUtil.clearEventListener(switchBtn);
//     switchBtn.textContent = listType === 'finished' ? 'Activate' : 'Finish';
//     switchBtn.addEventListener("click", this.switchProject.bind(null, this.id));
//   }

//   update(newEventListener, listType) {
//     this.switchProject = newEventListener;
//     this.connectSwitchBtn(listType);
//   }
// }

// class ProjectsList {
//   projects = [];

//   constructor(listType) {
//     this.listType = listType;
//     this.projectItems = document.querySelectorAll(`#${listType}-projects li`);
//     this.projectItems.forEach((p) =>
//       this.projects.push(new ProjectItem(p.id, this.switchProject.bind(this), this.listType))
//     );
//   }

//   // after removing the target object from this project list,
//   // need to add the project to the other project list instance
//   // this is the way to receive the function to cause changes in the other list instance
//   setChangeOtherListFunction(changeOtherListFunction) {
//     this.changeOtherList = changeOtherListFunction;
//   }

//   addProject(targetProject) {
//     this.projects = this.projects.concat(targetProject);
//     DOMUtil.addProjectToList(targetProject, `#${this.listType}-projects ul`);
//     console.log(targetProject);
//     targetProject.update(this.switchProject.bind(this), this.type);
//   }

//   switchProject(projectId) {
//     // targetProject is the project to be removed from current project list
//     // and to be added to the other project list
//     console.log(projectId);
//     const targetProject = this.projects.find(
//       (p) => p.id === projectId
//     );

//     // remove the target project from this project list
//     this.projects = this.projects.filter((p) => p.id !== projectId);

//     this.changeOtherList(targetProject);
//   }
// }

// class App {
//   static init() {
//     const activePjtList = new ProjectsList("active");
//     const finishedPjtList = new ProjectsList("finished");

//     activePjtList.setChangeOtherListFunction(
//       finishedPjtList.addProject.bind(finishedPjtList)
//     );
//     finishedPjtList.setChangeOtherListFunction(
//       activePjtList.addProject.bind(activePjtList)
//     );
//   }
// }

// App.init();


// Practice modular programming

class App {
  static init() {
    const activePjts = new ProjectsList("active");
    const finishedPjts = new ProjectsList("finished");

    activePjts.setAddPjtToOtherList(finishedPjts.addProject.bind(finishedPjts));
    finishedPjts.setAddPjtToOtherList(activePjts.addProject.bind(activePjts));
  }
}

App.init();
