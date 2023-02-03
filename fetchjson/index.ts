import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/posts/1';

interface Post {
    id: number;
    title: string;
    body: string;
}

axios.get(url).then((res) => {
    const post = res.data as Post;
    const { id, title, body } = post;
    logPost(id, title, body);
});

const logPost = (id: number, title: string, body: string) => {
    console.log(`
        Post with id: ${id}
        Has a title of ${title}
        boom, body: ${body}
    `);
};
