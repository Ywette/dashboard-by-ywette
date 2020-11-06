function start() {
    var submit = document.getElementById("ty");
    submit.addEventListener("click", toggle);
  };
  
  function toggle() {
    var color = document.querySelector("main-container");
    color.classList.toggle("black");
  };