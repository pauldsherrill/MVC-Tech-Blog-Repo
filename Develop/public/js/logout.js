const logout = async () => {
  const response = await fetch("/api/users/logout", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/login");
  } else {
    alert(response.statusText);
  }
};

document.querySelector("#logout").addEventListener("click", logout);

let timeout; // Variable to hold the timer

// Function to reset the timer
const resetTimer = () => {
  clearTimeout(timeout); // Clear the existing timer
  timeout = setTimeout(logout, 30 * 60 * 1000); // Set a new timer for 30 minutes (30 * 60 * 1000 milliseconds)
};

// Event listeners for user activity (e.g., mousemove and keydown events)
document.addEventListener("mousemove", resetTimer);
document.addEventListener("keydown", resetTimer);

// Initialize the timer when the page loads
resetTimer();
