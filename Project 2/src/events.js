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


// INFINITE SCROLL --------------------------------------------------------------------

let curElementNumber = 0;

function scrollHandler() {
  // measure the total distance between our viewport and the end of the page (the actual end)
  const distanceToBottom = document.body.getBoundingClientRect().bottom;

  // compare the distance to the bottom to (the window height + 150px)
  // if we have less than 150px to the end of the page content
  // then create a new <div> element and append it to document body
  if (distanceToBottom < document.documentElement.clientHeight + 150) {
    const newDataElement = document.createElement("div");
    curElementNumber++;
    newDataElement.innerHTML = `<p>Element ${curElementNumber}</p>`;
    document.body.append(newDataElement);
  }
}

window.addEventListener("scroll", scrollHandler);


// FORM ------------------------------------------------------------------------------

const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault(); // prevent default behavior
  console.log(event);
});


// EVENT PROPAGATION ----------------------------------------------------------------

const firstDiv = document.querySelector("div");
firstDiv.addEventListener("click", () => {
  console.log("div clicked");
}); // set useCapture to true, execute the ancestor listener first

// firstDiv.addEventListener('click', () => {
//   console.log('div clicked');
// }, true); // set useCapture to true, execute the ancestor listener first

const firstButton = document.querySelector("button");
firstButton.addEventListener("click", (event) => {
  event.stopPropagation(); // stop event propagation, will not trigger ancestor event listeners
  console.log("button clicked");
});


// EVENT DELEGATION ----------------------------------------------------------------


/* traditional way - add multiple event listeners - more performance impact */

// const listItems = document.querySelectorAll("li");
// listItems.forEach((li) => {
//   li.addEventListener("click", (event) => {
//     event.target.classList.toggle('highlight');
//   });
// });


/* Method 1 to avoid multiple event listeners */
// const list = document.querySelector('ul');
// // since click event propagates, the <ul> element can also listen to the click on <li> element
// list.addEventListener('click', (event) => {
//   // event.target still refers to the <li> element clicked
//   event.target.classList.toggle('highlight');
// });


/* Method 1 does not work well when there is child element under <li>
Here is method 2 */
const list = document.querySelector('ul');
// since click event propagates, the <ul> element can also listen to the click on <li> element
list.addEventListener('click', (event) => {
  // event.target still refers to the <li> element clicked
  // use DOM traversal to find the nearest parent element or itself
  event.target.closest('li').classList.toggle('highlight');
});
