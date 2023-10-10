let signupBtn = document.getElementById("signup");

signupBtn.addEventListener("click",()=>{
    let rightPanel = document.querySelector("#main .right");
    rightPanel.style.display = "none";
    let title = document.getElementById("title");
    title.innerHTML = "Sign Up";
    let button = document.querySelector("form .btn");
    button.setAttribute("value","Sign Up");

    let leftPanel = document.querySelector("#main .left");
    leftPanel.style.gridColumn = "span 2";
});