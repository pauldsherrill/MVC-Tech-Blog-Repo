const editPostHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector("#post-title").value.trim();
  const text = document.querySelector("#post-text").value.trim();
  const id = document.querySelector("#post-id").textContent.trim();
  const postId = Number(id);
  console.log(postId);

  const response = await fetch(`/api/post/${postId}`, {
    method: "PUT",
    body: JSON.stringify({ title, text }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert("Failed to save!");
  }
};

const deletePostHandler = async (event) => {
  event.preventDefault();

  const id = document.querySelector("#post-id").textContent.trim();
  const postId = Number(id);
  console.log(postId);

  const response = await fetch(`/api/post/${postId}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert("Failed to delete!");
  }
};

document.querySelector(".save-btn").addEventListener("click", editPostHandler);
document
  .querySelector(".delete-btn")
  .addEventListener("click", deletePostHandler);
