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

class DOMUtils {
  static addProjectToList(projectId, destinationSelector) {
    const projectEl = document.getElementById(projectId);
    document.querySelector(destinationSelector).append(projectEl);
    projectEl.scrollIntoView({behavior: 'smooth'});
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

class Component {
  constructor(hostElementId, insertBefore = false) {
    this.hostElement = hostElementId
      ? document.getElementById(hostElementId)
      : document.body;

    this.insertBefore = insertBefore;
  }

  detach() {
    this.tooltipElement.remove();
  }

  attach() {
    this.hostElement.insertAdjacentElement(
      this.insertBefore ? "afterbegin" : "beforeend",
      this.tooltipElement
    );
  }
}

class Tooltip extends Component {
  constructor(tooltipClosedHandler, content, hostElementId) {
    super(hostElementId);
    // super('active-projects', true);
    this.tooltipClosed = tooltipClosedHandler;
    this.content = content;
    this.createTooltip();
  }

  closeTooltip() {
    this.detach();
    this.tooltipClosed();
  }

  createTooltip() {
    const tooltipEl = document.createElement("div");
    tooltipEl.className = "card";
    // tooltipEl.textContent = this.content;
    const tooltipTemplate = document.getElementById('tooltip');
    const tooltipBody = document.importNode(tooltipTemplate.content, true);
    tooltipBody.querySelector('p').textContent = this.content;
    tooltipEl.append(tooltipBody);

    const hostElPosLeft = this.hostElement.offsetLeft;
    const hostElPosTop = this.hostElement.offsetTop;
    const hostElHeight = this.hostElement.clientHeight;
    const parentElementScrolling = this.hostElement.parentElement.scrollTop;

    const x = hostElPosLeft + 20;
    const y = hostElPosTop + hostElHeight - parentElementScrolling - 10;

    tooltipEl.style.position='absolute';
    tooltipEl.style.left = x + 'px';
    tooltipEl.style.top = y + 'px';

    tooltipEl.addEventListener("click", this.closeTooltip.bind(this));
    this.tooltipElement = tooltipEl;
  }
}

class ProjectItem {
  constructor(id, switchProjectFunction, type) {
    this.id = id;
    this.projectItemDomEl = document.getElementById(this.id);
    this.connectMoreInfoBtn();
    this.connectSwitchBtn(type);

    this.switchProjectTriggered = switchProjectFunction; // receive from ProjectsList

    this.hasActiveTooltip = false;
  }

  showTooltip() {
    if (this.hasActiveTooltip) {
      return;
    }
    const tooltipText = this.projectItemDomEl.dataset.extraInfo;
    const tooltip = new Tooltip(
      () => (this.hasActiveTooltip = false),
      tooltipText,
      this.id
    );
    tooltip.attach();
    this.hasActiveTooltip = true;
  }

  connectMoreInfoBtn() {
    const moreInfoBtn = this.projectItemDomEl.querySelector(
      "button:first-of-type"
    );
    moreInfoBtn.addEventListener("click", this.showTooltip.bind(this));
  }

  connectSwitchBtn(type) {
    let switchBtn = this.projectItemDomEl.querySelector("button:last-of-type");
    switchBtn = DOMUtils.clearEventListener(switchBtn);
    switchBtn.addEventListener("click", () =>
      this.switchProjectTriggered(this.id)
    );
    DOMUtils.updateBtnText(switchBtn, type);
  }

  updateAfterSwitch(newEventHandler, listType) {
    this.switchProjectTriggered = newEventHandler;
    this.connectSwitchBtn(listType);
  }
}

class ProjectsList {
  projects = [];

  constructor(type) {
    this.type = type;
    const projectItems = document.querySelectorAll(`#${type}-projects li`);
    projectItems.forEach((p) =>
      this.projects.push(
        new ProjectItem(p.id, this.switchProject.bind(this), this.type)
      )
    );
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

class App {
  static init() {
    const activePjts = new ProjectsList("active");
    const finishedPjts = new ProjectsList("finished");

    activePjts.setAddPjtToOtherList(finishedPjts.addProject.bind(finishedPjts));
    finishedPjts.setAddPjtToOtherList(activePjts.addProject.bind(activePjts));
  }
}

App.init();
