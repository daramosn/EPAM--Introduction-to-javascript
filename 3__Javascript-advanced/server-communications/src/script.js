async function getRandomUsers(quantity = 1, nationalities = '') {
    const url = `https://randomuser.me/api/?results=${quantity}&nat=${nationalities}&inc=name,email,nat&noinfo`;
    const response = await fetch(url);
    const data = await response.json();
    return data.results;
}

async function createPost(data) {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(data),
    });
    const post = await response.json();
    return post;
}