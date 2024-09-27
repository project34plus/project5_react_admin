import React from 'react';
import AdminOnlyContainer from '@/member/containers/AdminOnlyContainer';
import UpdateContainer from '@/note/containers/UpdateContainer';

const NoteRegisterPage = ({ params }) => {
  return (
    <AdminOnlyContainer>
      <UpdateContainer params={params} />
    </AdminOnlyContainer>
  );
};

export default NoteRegisterPage;
