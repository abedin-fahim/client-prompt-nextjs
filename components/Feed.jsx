'use client';

import { useState, useEffect } from 'react';
import PromptCart from './PromptCard';

const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className='mt-16 prompt_layout'>
      {data.map((post) => (
        <PromptCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  );
};

const Feed = () => {
  const [posts, setPosts] = useState([]);

  // Search States
  const [searchText, setSearchText] = useState('');

  const handleTagClick = (e) => {};

  const fetchPosts = async () => {
    const response = await fetch('/api/prompt');
    const data = await response.json();

    setPosts(data);
  };
  useEffect(() => {
    fetchPosts();
  }, []);

  const handleSearchChange = (e) => {};

  return (
    <section className='feed'>
      {/* <form className='relative w-full flex-center'>
        <input
          type='text'
          placeholder='Search for a tag or a username'
          value={searchText}
          onChange={handleSearchChange}
          required
          className='search_input peer'
        />
      </form>
      <PromptCardList
        data={posts}
        handleTagClick={handleTagClick}
      /> */}
      <p>Feed</p>
    </section>
  );
};

export default Feed;
