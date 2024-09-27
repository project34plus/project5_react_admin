import React from 'react';
import AdminOnlyContainer from '@/member/containers/AdminOnlyContainer';
const MemberViewPage = ({ params }) => {
  //const { seq } = params;

  return (
    <AdminOnlyContainer>
      {/* <ViewContainer params={params} /> */}
    </AdminOnlyContainer>
  );
};

export default MemberViewPage;
