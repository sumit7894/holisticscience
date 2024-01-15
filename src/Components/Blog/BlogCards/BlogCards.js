import React, { useState, useEffect } from 'react';
import {db} from '../../../firebase-config'
import { collection,   getDocs } from 'firebase/firestore'
import './blogcard.css'
import { useNavigate } from 'react-router-dom';
const BlogCards = () => {
  const navigate = useNavigate();
  const [blogPosts, setBlogPosts] = useState([]); 
  const [selectedPost, setSelectedPost] = useState(null); 
  // State for the selected blog post
  const getData = async()=>{
    const valCardRef= collection(db,"post");
    const dataCardDb = await getDocs(valCardRef);
    const cards = dataCardDb.docs.map(val=>({...val.data(),id:val.id}));
    setBlogPosts(cards);
    console.log("here is blogpost",cards);
  }
  useEffect(()=>{
    // eslint-disable-next-line
    getData();
  },[]);

  const handleReadMore = (postId) => {
    const selectedPostData = blogPosts.find((post) => post.id === postId);

    if (selectedPostData) {
      setSelectedPost(selectedPostData);
    }
    navigate(`${selectedPostData?.id}`);
  };

  return (
    <div className="blog-page">
      <h2>Latest Blog Posts</h2>
      <div className="blog-list">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-card">
            <h3>{post.title}</h3>
            <p>{post.partialContent}</p>
            <p>
              <strong>Author:</strong> {post.author} | <strong>Date:</strong> {post.date}
            </p>
            <button 
            className='read-more-btn'
            onClick=
            {() => 
            handleReadMore(post.id)}>
            Read More
            </button>
          </div>
        ))}
      </div>

      {selectedPost && (
        <div className="selected-post">
          <h2>{selectedPost.title}</h2>
          <p>{selectedPost.fullContent}</p>
        </div>
      )}
    </div>
  );
};

export default BlogCards;
