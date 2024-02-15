let UserCred = JSON.parse(sessionStorage.getItem("user-credentials"));
let UserInfo = JSON.parse(sessionStorage.getItem("user-info"));

let dropdown = document.getElementById("dropdown");

function openMenu() {
  dropdown.classList.toggle("active");
}

let logoutBtn = document.getElementById("logout-btn");

// let Signout = () => {
//   sessionStorage.removeItem("user-credentials");
//   sessionStorage.removeItem("user-info");
//   window.location.href = "index.html";
// };

// let CheckCred = () => {
//   if (sessionStorage.getItem("user-credentials")) {
//     window.location.href = "index.html";
//   }
// };

// window.addEventListener("load", CheckCred);
// logoutBtn.addEventListener("click", Signout);
