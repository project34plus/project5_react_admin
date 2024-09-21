'use client';
import React, { useLayoutEffect } from 'react';
import { getCommonActions } from '@/commons/contexts/CommonContext';
import NoteForm from '../components/NoteForm'; // NoteForm 컴포넌트 임포트

const NotePostsContainer = ({ params }) => {
    const { setMenuCode, setSubMenuCode } = getCommonActions();

    useLayoutEffect(() => {
        setMenuCode('note');
        setSubMenuCode('posts');
    }, [setMenuCode, setSubMenuCode]);

    return (
        <div>
            <h1>노트 목록</h1>
            <NoteForm /> {/* NoteForm 컴포넌트 호출 */}
        </div>
    );
};

export default React.memo(NotePostsContainer);
