'use client';
import React, { useLayoutEffect } from 'react';
import { getCommonActions } from '@/commons/contexts/CommonContext';

const NoteUpdateContainer = ({ Params }) => {
    const { setMenuCode, setSubMenuCode } = getCommonActions();

    const { seq } = params;

    useLayoutEffect(() => {
        setMenuCode('counseling');
        setSubMenuCode(seq ? 'update' : 'register');
    }, [setMenuCode, setSubMenuCode, seq]);

    return <h1>노트 등록/수정...</h1>;
};

export default React.memo(NoteUpdateContainer);