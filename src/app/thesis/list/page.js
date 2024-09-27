import React from 'react';
import ThesisListContainer from '@/thesis/containers/ThesisListContainer';
import AdminOnlyContainer from '@/member/containers/AdminOnlyContainer';

const SearchPage = () => {
  return (
    <AdminOnlyContainer>
      <ThesisListContainer />
    </AdminOnlyContainer>
  );
};

export default SearchPage