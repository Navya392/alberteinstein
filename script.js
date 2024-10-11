function myFunction() {
    var x = document.getElementById("navbar");
    if (x.className === "nav-grid") {
      x.className += " responsive";
    } else {
      x.className = "nav-grid";
    }
  }
  