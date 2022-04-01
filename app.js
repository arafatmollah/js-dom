//post added
document.getElementById('post').addEventListener('click', function () {
    const commentBox = document.getElementById('comment-area');
    const comments = document.createElement('p');
    comments.innerText = commentBox.value;
    const comment = document.getElementById('comment');
    comment.appendChild(comments);
    commentBox.value = '';
})