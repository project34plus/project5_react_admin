import React from 'react';
import Head from 'next/head';
import ThesisViewContainer from '@/thesis/containers/ThesisViewContainer';
import Container from '@/commons/components/Container';
import ThesisUpdateContainer from '@/thesis/containers/ThesisUpdateContainer';
import AdminOnlyContainer from '@/member/containers/AdminOnlyContainer';

const ViewPage = ({ params }) => {
  return (
    <AdminOnlyContainer>
          <h1>논문 관리</h1>
          <h2>※관리자는 공개여부와 승인여부만 수정 가능합니다.※</h2>
      <ThesisUpdateContainer params={params} />
    </AdminOnlyContainer>
  );
};

export default React.memo(ViewPage);
