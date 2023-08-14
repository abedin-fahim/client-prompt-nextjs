'use client';
import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import Profile from '@components/Profile';

const MyProfile = () => {
  const { data: session } = useSession();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch(`/api/users/${session?.user.id}/posts`);
      const prompts = await response.json();

      setPosts(prompts);
    };
    if (session?.user.id) {
      fetchPost();
    }
  }, [session?.user.id]);

  const handleEdit = () => {};
  const handleDelete = () => {};
  return (
    <Profile
      name='My'
      desc='Welcome to your personal profile'
      data={posts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};

export default MyProfile;