import React from 'react';
import AdminOnlyContainer from '@/member/containers/AdminOnlyContainer';
import PostsContainer from '@/note/containers/PostsContainer';

const PostsPage = ({ searchParams }) => {
  return (
    <AdminOnlyContainer>
      <PostsContainer searchParams={searchParams} />
    </AdminOnlyContainer>
  );
};

export default PostsPage;
