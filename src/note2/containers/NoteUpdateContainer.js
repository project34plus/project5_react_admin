'use client';
import React, { useLayoutEffect } from 'react';
import { getCommonActions } from '@/commons/contexts/CommonContext';
import NoteRegisterForm from '../components/NoteRegisterForm';

const NoteUpdateContainer = ({ params }) => {
  const { setMenuCode, setSubMenuCode } = getCommonActions();

  useLayoutEffect(() => {
    setMenuCode('note');
    setSubMenuCode('register');
  }, [setMenuCode, setSubMenuCode]);

  return (
    <div>
      <h1>노트 등록</h1>
      <NoteRegisterForm />
    </div>
  );
};

export default React.memo(NoteUpdateContainer);
