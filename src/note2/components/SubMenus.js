'use client';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { apiListNotes } from '@/note2/apis/apiNote'; // 노트 설정 목록 조회 API 호출을 사용
import { apiGetNoteInfo } from '@/note2/apis/apiNote'; // 노트 설정 한 개 조회 API 호출을 사용

// 스타일링 적용
const SubMenuBox = styled.aside`
  min-height: 650px;
  background: ${({ theme }) => theme.color.white};
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);

  a {
    display: inline-block;
    background: ${({ theme }) => theme.color.white};
    color: ${({ theme }) => theme.color.navy};
    font-size: ${({ theme }) => theme.fontSize.small};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    padding: 15px 20px;
    border-radius: 5px;
    transition: background 0.3s, color 0.3s, transform 0.2s;
    margin-bottom: 10px;

    &:hover {
      background: ${({ theme }) => theme.color.navy};
      color: ${({ theme }) => theme.color.white};
      transform: translateY(-2px);
    }
  }

  a + a {
    border-top: 1px solid ${({ theme }) => theme.color.gray};
  }
`;

// 노트 설정 목록을 가져오는 함수
async function fetchNotes() {
  try {
    const searchParams = {}; // 필요한 경우 검색 조건 추가
    return await apiListNotes(searchParams); // 노트 목록 API 호출
  } catch (err) {
    console.log(err); // 에러 처리
    return []; // 에러 발생 시 빈 배열 반환
  }
}

const SubMenus = () => {
  const { t } = useTranslation();
  const [notes, setNotes] = useState([]); // 노트 데이터를 관리하는 상태 변수

  // 컴포넌트 마운트 시 노트 데이터 가져오기
  useEffect(() => {
    async function getData() {
      const data = await fetchNotes();
      setNotes(data); // 데이터를 상태 변수에 저장
    }

    getData();
  }, []);

  return (
    <SubMenuBox>
      {notes.length > 0 ? (
        notes.map((note, index) => (
          <a href="#" key={index}>
            {t(note.nName)}
          </a> // 노트 이름 표시
        ))
      ) : (
        <p>Loading...</p> // 데이터가 없을 때 로딩 메시지 표시
      )}
    </SubMenuBox>
  );
};

export default SubMenus;
