import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import ThesisListContainer from '@/thesis/containers/ThesisListContainer';
import Container from '@/commons/components/Container';
import AdminOnlyContainer from '@/member/containers/AdminOnlyContainer';

const SearchPage = () => {
  return (
    <AdminOnlyContainer>
      <ThesisListContainer />
    </AdminOnlyContainer>
  );
};

export default SearchPage