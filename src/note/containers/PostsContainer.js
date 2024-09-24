'use client';
import React, { useLayoutEffect } from 'react';
import { getCommonActions } from '@/commons/contexts/CommonContext';
import { useTranslation } from 'react-i18next';
import PostItems from '../components/PostItems';

const PostsContainer = ({ searchParams }) => {
  const { setMenuCode, setSubMenuCode, setMainTitle } = getCommonActions();
  const { t } = useTranslation();

  useLayoutEffect(() => {
    setMenuCode('note');
    setSubMenuCode('posts');
    setMainTitle(t('노트글_관리'));
  }, [setMenuCode, setSubMenuCode, setMainTitle, t]);

  return <PostItems />;
};

export default React.memo(PostsContainer);
