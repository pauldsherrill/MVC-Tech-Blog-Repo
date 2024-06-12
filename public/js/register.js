const registerFormHandler = async (event) => {
  event.preventDefault();

  const emailInput = document.querySelector("#email-register").value.trim();
  const passwordInput = document
    .querySelector("#password-register")
    .value.trim();
  const usernameInput = document
    .querySelector("#username-register")
    .value.trim();

  if (emailInput && passwordInput && usernameInput) {
    const response = await fetch("/api/users/register", {
      method: "POST",
      body: JSON.stringify({
        email: emailInput,
        password: passwordInput,
        username: usernameInput,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/login");
    } else {
      alert("Sign Up failed");
    }
  }
};

document
  .querySelector(".register-btn")
  .addEventListener("click", registerFormHandler);
