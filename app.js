let inp = document.querySelector("input");
let btn = document.querySelectorAll("button");

let string = "";

let arr = Array.from(btn);
arr.forEach((button) => {
  button.addEventListener("click", (e) => {
    try {
      if (e.target.innerHTML == "=") {
        string = eval(string);
        inp.value = string;
      } else if (e.target.innerHTML == "AC") {
        string = "";
        inp.value = string;
      } else if (e.target.innerHTML == "DEL") {
        string = string.substring(0, string.length - 1);
        inp.value = string;
      } else {
        string += e.target.innerHTML;
        inp.value = string;
      }
    } catch {
      inp.value = "Invalid Syntax";
    }
  });
});
