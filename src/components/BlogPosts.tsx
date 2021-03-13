import React from 'react';
import './BlogPosts.css';
import PostsMapping from '../posts';

/* 
    The page served from /, displays all blogs
*/
function BlogPost() {

    return (

        <div className='blog-posts-container'>
            {PostsMapping.map((post) => {
                return (
                    <a href={'/blog/' + post['key']}>
                        <div className='blog-post-title-section'>
                            <h3>
                                {post['title']}
                            </h3>
                            <h3>
                                {post['date'].split(" ")[0]}
                            </h3>
                        </div>
                        
                        <div>
                            {post['teaser']()}
                        </div>
                    </a>
                );
            })}
        </div>
    )
}

export default BlogPost;