import React from 'react';
import { useParams } from 'react-router-dom';

import PostsMapping from '../posts';

/* 
    The page served from /blog, potentially from /blog/:id. If just /blog, 
    then will serve a list of all the blog posts. Otherwise, will serve
    a specific post with that ID.
*/
function BlogPost() {
    const { id } = useParams() as any;

    const post = PostsMapping.find(post => post['key'] === id);

    return (
        <React.Fragment>
            {post !== undefined && post['post']()}
        </React.Fragment>
    )
}

export default BlogPost;