import React from 'react';
import UpdateContainer from '@/note/containers/UpdateContainer';
import AdminOnlyContainer from '@/member/containers/AdminOnlyContainer';
const MemberUpdatePage = ({ params }) => {
  //const { seq } = params;

  return (
    <AdminOnlyContainer>
      <UpdateContainer params={params} />
    </AdminOnlyContainer>
  );
};

export default MemberUpdatePage;
