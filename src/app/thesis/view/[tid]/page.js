import React from 'react';
import Head from 'next/head';
import ThesisViewContainer from '@/thesis/containers/ThesisViewContainer';
import Container from '@/commons/components/Container';
import AdminOnlyContainer from '@/member/containers/AdminOnlyContainer';

const ViewPage = ({ params }) => {
  return (
    <Container>
      <h1>상세보기 페이지</h1>
      <ThesisViewContainer params={params} />
    </Container>
  );
};

export default React.memo(ViewPage);
