document.getElementById('comment-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const comment = document.getElementById('comment').value;
    if (comment) {
        const commentSection = document.getElementById('comments-section');
        const newComment = document.createElement('p');
        newComment.textContent = comment;
        commentSection.appendChild(newComment);
        document.getElementById('comment').value = '';
    }
});