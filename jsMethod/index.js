
setTimeout(main);

const images = {
  ".rocko": {
    default: "/rocko-1.jpg",
    hover: "/rocko-2.jpg",
  },
}

function main() {
  for(const [selector, srcs] of Object.entries(images)) {
    const enterListener = swapImage(srcs.hover);
    const leaveListener = swapImage(srcs.default);
    const els = findElements(selector);
    for(const el of els) {
      el.addEventListener("mouseenter", enterListener);
      el.addEventListener("mouseleave", leaveListener);
      leaveListener({ target: el });
    }
  }
}

function findElements(selector) {
  const els = document.querySelectorAll(selector);
  if(els.length > 0) {
    return els;
  } else {
    throw new Error(`Oh no! JavaScript tried to get an element with selector "${selector}" but it doesn't exist in the DOM!`);
  }
}

function swapImage(src) {
  return (event) => {
    const el = event.target;
    el.src = src;
  }
}
