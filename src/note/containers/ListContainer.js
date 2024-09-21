'use client';

import React, { useLayoutEffect } from 'react';
import { getCommonActions } from '@/commons/contexts/CommonContext';
import { useTranslation } from 'react-i18next';
import ListItems from '../components/ListItems';

const ListContainer = ({ searchParams }) => {
  const { setMenuCode, setSubMenuCode, setMainTitle } = getCommonActions();
  const { t } = useTranslation();

  useLayoutEffect(() => {
    setMenuCode('note');
    setSubMenuCode('list');
    setMainTitle(t('노트_목록'));
  }, [setMenuCode, setSubMenuCode, setMainTitle, t]);

  return <ListItems />;
};

export default React.memo(ListContainer);
