let mainEl = document.querySelector("main");
let limit = 5;
let page = 1;

async function fetchPostList() {
    let url = `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`;
    let response = await fetch(url);
    let json = await response.json();
    return json;
};

function generatePostElement(id, title, body) {
    let postEl = document.createElement("div");
    let postIndexEl = document.createElement("div");
    let postTitleEl = document.createElement("h2");
    let postBodyEl = document.createElement("p");
    let a = postEl.classList.add("post");
    postIndexEl.classList.add("post-index");
    postIndexEl.textContent = id;
    postTitleEl.textContent = title;
    postBodyEl.textContent = body;
    postEl.appendChild(postIndexEl);
    postEl.appendChild(postTitleEl);
    postEl.appendChild(postBodyEl);
    return postEl;
}

async function loadPost() {
    let posts = await fetchPostList();
    posts.forEach(({id, title, body}) => {
        let postEl = generatePostElement(String(id), title, body);
        mainEl.appendChild(postEl);
    })
    page++;
}
