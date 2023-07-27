const postForm = document.getElementById('postForm');
const postsDiv = document.getElementById('posts');

postForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const username = document.getElementById('username').value;
  const postContent = document.getElementById('postContent').value;

  if (!username || !postContent) {
    alert('Please fill in all fields.');
    return;
  }

  const postElement = document.createElement('div');
  postElement.classList.add('post');

  const postContentHTML = `
    <h3>${username}</h3>
    <p>${postContent}</p>
  `;

  postElement.innerHTML = postContentHTML;
  postsDiv.appendChild(postElement);

  // Clear the form
  postForm.reset();
});
