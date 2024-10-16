function joinCommunity() {
    let name = prompt("What is your name?");
    let email = prompt("What is your email address?");

    alert(`Thank you ${name}! We'll contact you shortly.`);
  }
  let button = document.querySelector(".join");
  button.addEventListener("click", joinCommunity);

  function changeTheme() {
    let body = document.querySelector("body");

    // body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
      body.classList.remove("dark");
    } else {
      body.classList.add("dark");
    }
  }

  let themeButton = document.querySelector("button");
  themeButton.addEventListener("click", changeTheme);