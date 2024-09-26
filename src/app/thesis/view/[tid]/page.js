'use client';
import React from 'react';
import Head from 'next/head';
import ThesisViewContainer from '@/thesis/containers/ThesisViewContainer';
import Container from '@/commons/components/Container';
import AdminOnlyContainer from '@/member/containers/AdminOnlyContainer';
import styled from 'styled-components';

// 제목을 꾸미기 위한 스타일링
const StyledTitle = styled.h1`
  font-size: 2.5rem; 
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary}; 
  margin-left: 30px; 
  text-transform: uppercase; /
  letter-spacing: 2px; 
  border-bottom: 2px solid ${({ theme }) => theme.colors.navy};
  padding-bottom: 10px;
`;

const ViewPage = ({ params }) => {
  return (
    <Container>
      <StyledTitle>상세보기 페이지</StyledTitle>
      <ThesisViewContainer params={params} />
    </Container>
  );
};

export default React.memo(ViewPage);
