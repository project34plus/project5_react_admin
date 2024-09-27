import React from 'react';
import ThesisUpdateContainer from '@/thesis/containers/ThesisUpdateContainer';
import AdminOnlyContainer from '@/member/containers/AdminOnlyContainer';

const ViewPage = ({ params }) => {
  return (
    <AdminOnlyContainer>
      <ThesisUpdateContainer params={params} />
    </AdminOnlyContainer>
  );
};

export default React.memo(ViewPage);
