
setTimeout(main);

const images = {
  rocko: {
    default: "/rocko-1.jpg",
    hover: "/rocko-2.jpg",
  },
}

function main() {
  for(const [id, srcs] of Object.entries(images)) {
    const enterListener = swapImage(id, srcs.hover);
    const leaveListener = swapImage(id, srcs.default);
    const el = getElementById(id);
    el.addEventListener("mouseenter", enterListener);
    el.addEventListener("mouseleave", leaveListener);
    leaveListener();
  }
}

function getElementById(id) {
  const el = document.getElementById(id);
  if(el) {
    return el;
  } else {
    throw new Error(`Oh no! JavaScript tried to get an element with ID="${id}" but it doesn't exist in the DOM!`);
  }
}

function swapImage(id, src) {
  return () => {
    const el = getElementById(id);
    el.src = src;
  }
}
