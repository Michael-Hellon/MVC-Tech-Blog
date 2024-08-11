const deletePostFormHandler = async (event) => {
    event.preventDefault();
  
    const id = window.location.toString().split("/")[
      window.location.toString().split("/").length - 1
    ];
  
    console.log(id);
  
    const response = await fetch(`/api/posts/${id}`, {
      method: "DELETE",
      body: JSON.stringify({
        post_id: id,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  
    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert('Unable to delete post');
    }
  };
  
  document
    .querySelector("#delete")
    .addEventListener("click", deletePostFormHandler);