'use client';
import React, { useLayoutEffect } from 'react';
import { getCommonActions } from '@/commons/contexts/CommonContext';

const NoteListContainer = ({ searchParams }) => {
    const { setMenuCode, setSubMenuCode } = getCommonActions();

    useLayoutEffect(() => {
        setMenuCode('counseling');
        setSubMenuCode('list');
    }, [setMenuCode, setSubMenuCode]);

    return <h1>노트 목록...</h1>;
};

export default React.memo(NoteListContainer);