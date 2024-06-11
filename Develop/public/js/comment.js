const addCommentHandler = async (event) => {
  event.preventDefault();

  // Find the closest parent element with the class "card"
  const cardElement = event.target.closest(".card");

  // Select the comment text input within the same card
  const text = cardElement.querySelector(".comment-text").value.trim();

  // Select the post ID from the hidden "post-id" element within the same card
  const postId = cardElement.querySelector("#post-id").textContent.trim();
  const post = Number(postId);

  try {
    const response = await fetch("/api/comment", {
      method: "POST",
      body: JSON.stringify({ text, post }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.reload(); // Reload the page to see the new comment
    } else {
      throw new Error("Failed to comment");
    }
  } catch (error) {
    console.error("Error adding comment:", error);
    alert("Failed to comment!"); // Show alert if an error occurs
  }
};

// Add event listener to each comment button
document.querySelectorAll(".comment-btn").forEach((button) => {
  button.addEventListener("click", addCommentHandler);
});
