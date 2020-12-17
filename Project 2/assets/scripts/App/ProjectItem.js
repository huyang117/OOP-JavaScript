// import { Tooltip } from "./Tooltip.js";
import { DOMUtils } from "../Utility/DOMUtils.js";

export class ProjectItem {
  constructor(id, switchProjectFunction, type) {
    this.id = id;
    this.projectItemDomEl = document.getElementById(this.id);
    this.connectMoreInfoBtn();
    this.connectSwitchBtn(type);
    this.connectDrag();

    this.switchProjectTriggered = switchProjectFunction; // receive from ProjectsList

    this.hasActiveTooltip = false;
  }

  showTooltip() {
    if (this.hasActiveTooltip) {
      return;
    }
    const tooltipText = this.projectItemDomEl.dataset.extraInfo;
    import("./Tooltip.js").then((module) => {
      const tooltip = new module.Tooltip(
        () => (this.hasActiveTooltip = false),
        tooltipText,
        this.id
      );
      tooltip.attach();
      this.hasActiveTooltip = true;
    });
  }

  connectDrag() {
    this.projectItemDomEl.addEventListener("dragstart", (event) => {
      event.dataTransfer.setData("text/plain", this.id);
      event.dataTransfer.effectAllowed = "move";
    });
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
