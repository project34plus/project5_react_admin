import React from 'react';
import ListContainer from '@/note/containers/ListContainer';
import AdminOnlyContainer from '@/member/containers/AdminOnlyContainer';
const NotePostsPage = ({ searchParams }) => {
  return (
    <AdminOnlyContainer>
      <ListContainer searchParams={searchParams} />
    </AdminOnlyContainer>
  );
};

export default NotePostsPage;
