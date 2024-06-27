document.getElementById('postForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const postText = document.getElementById('postText').value;

    const postDiv = document.createElement('div');
    postDiv.className = 'card mt-3';
    postDiv.innerHTML = `
        <div class="card-body">
            <p class="card-text">${postText}</p>
            <button class="btn btn-outline-success me-2 like-btn">Curtir</button>
            <button class="btn btn-outline-danger delete-btn">Excluir</button>
        </div>
    `;

    document.getElementById('postsContainer').appendChild(postDiv);

    document.getElementById('postText').value = '';

    postDiv.querySelector('.like-btn').addEventListener('click', function() {
        this.classList.toggle('liked');
        this.classList.toggle('btn-outline-success');
        this.classList.toggle('btn-success');
    });

    postDiv.querySelector('.delete-btn').addEventListener('click', function() {
        postDiv.remove();
    });
});
