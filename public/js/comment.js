const newCommentFormHandler = async (event) => {
    event.preventDefault();
  
    const id = parseInt(window.location.pathname.split('/').pop());

    const commentContent = document.querySelector('#new-comment').value.trim();
    
    if (commentContent) {
      const response = await fetch(`/api/comments`, {
          method: 'POST',
          body: JSON.stringify({ comment: commentContent, post_id }),
          headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        // setTimeout(() => document.location.reload(), 200);
        document.location.replace('/dashboard');
      } else {
          alert('Could not create a comment to post.');
      }
  }
};

document
  .querySelector('.new-comment-form')
  .addEventListener('submit', newCommentFormHandler);