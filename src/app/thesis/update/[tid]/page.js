import React from 'react';
import Head from 'next/head';
import ThesisViewContainer from '@/thesis/containers/ThesisViewContainer';
import Container from '@/commons/components/Container';
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
