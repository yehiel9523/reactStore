import { useEffect, useState } from "react";
export default function useFetchUser(postId) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/                `)
            .then(res => res.json())
            .then(data => setPosts(data))
            .then(console.log(posts))
    }, [])

    return posts;

}