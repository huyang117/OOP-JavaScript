const buttons = document.querySelectorAll("button");

const btnClickHandler = (event) => {
  event.target.disabled = true;
  console.log("Event: Button is clicked", event);
};

buttons.forEach((button) => {
  button.addEventListener("click", btnClickHandler);
});

// remove event listener for single button
// setTimeout(() => {
//   button.removeEventListener("click", btnClickHandler);
//   console.log('Event listener is removed');
// }, 2000);

let curElementNumber = 0;

function scrollHandler() {
  const distanceToBottom = document.body.getBoundingClientRect().bottom;

  if (distanceToBottom < document.documentElement.clientHeight + 150) {
    const newDataElement = document.createElement('div');
    curElementNumber++;
    newDataElement.innerHTML = `<p>Element ${curElementNumber}</p>`;
    document.body.append(newDataElement);
  }
}

window.addEventListener('scroll', scrollHandler);