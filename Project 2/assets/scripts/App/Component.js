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
