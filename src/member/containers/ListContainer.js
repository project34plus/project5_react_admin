'use client';
import React, { useLayoutEffect } from 'react';
import { getCommonActions } from '@/commons/contexts/CommonContext';
import Container from '@/commons/components/Container';

const ListContainer = () => {
  const { setMenuCode, setSubMenuCode } = getCommonActions();

  useLayoutEffect(() => {
    setMenuCode('member');
    setSubMenuCode('list');
  }, [setMenuCode, setSubMenuCode]);

  return <Container></Container>;
};

export default React.memo(ListContainer);
