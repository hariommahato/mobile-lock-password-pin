// window.onload=()=>{
//     alert("heloo")
// }
let input = document.getElementById("display");
let buttons = Array.from(document.getElementsByClassName("btn"));
let okbtn = document.getElementById("ok");
let deletebtn = document.getElementById("delete");
let output = document.getElementById("output");
let set = document.getElementById("set");
let password = "";

set.addEventListener("click", () => {
  password = input.value;
  // console.log(password);
});
buttons.map((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      default:
        input.value += e.target.innerText;
    }
  });
});

okbtn.addEventListener("click", () => {
  if (input.value == password) {
    output.innerText = "Success";
    input.value = "";
  } else {
    output.innerText = "Please Enter correct password";
    input.value = "";
  }
});

deletebtn.addEventListener("click", () => {
  input.value = "";
  console.log("delete");
});
