const things = document.querySelectorAll(".thing");

things.forEach((thing) => {
  thing.ondragstart = function (event) {
    // console.log("ondragstart");

    event.dataTransfer.setData("text/plain", event.target.id);
  };

  thing.ondrag = function () {
    // console.log("ondrag");
  };
});

const secondBox = document.querySelector(".secondBox");

secondBox.ondragover = function (event) {
  event.preventDefault();
};

secondBox.ondrop = function (event) {
  console.log("ondrop");

  event.preventDefault();

  const data = event.dataTransfer.getData("text/plain");

  const draggedElement = document.getElementById(data);

  if (draggedElement) {
    secondBox.appendChild(draggedElement);
  }
};
