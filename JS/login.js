document
  .getElementById("inputEmail3")
  .addEventListener("keyup", function (event) {
    const btn = document.getElementById("btn");
    if (event.target.value == "emonsaha994@gmail.com") {
      btn.removeAttribute("disabled");
    } else {
      btn.setAttribute("disabled", true);
    }
  });
document
  .getElementById("inputPassword3")
  .addEventListener("keyup", function (event) {
    const btn = document.getElementById("btn");
    if (event.target.value == "1234") {
      btn.removeAttribute("disabled");
    } else {
      btn.setAttribute("disabled", true);
    }
  });
