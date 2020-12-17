import { Component } from './Component.js';

export class Tooltip extends Component {
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
    const tooltipTemplate = document.getElementById("tooltip");
    const tooltipBody = document.importNode(tooltipTemplate.content, true);
    tooltipBody.querySelector("p").textContent = this.content;
    tooltipEl.append(tooltipBody);

    const hostElPosLeft = this.hostElement.offsetLeft;
    const hostElPosTop = this.hostElement.offsetTop;
    const hostElHeight = this.hostElement.clientHeight;
    const parentElementScrolling = this.hostElement.parentElement.scrollTop;

    const x = hostElPosLeft + 20;
    const y = hostElPosTop + hostElHeight - parentElementScrolling - 10;

    tooltipEl.style.position = "absolute";
    tooltipEl.style.left = x + "px";
    tooltipEl.style.top = y + "px";

    tooltipEl.addEventListener("click", this.closeTooltip.bind(this));
    this.tooltipElement = tooltipEl;
  }
}
