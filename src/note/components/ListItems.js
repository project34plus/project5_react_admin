'use client';
import React from 'react';
import { styled } from 'styled-components';
import { StyledButton } from '@/commons/components/buttons/StyledButton';
import { useTranslation } from 'react-i18next';

// ListItem 컴포넌트
const ListItem = ({ item, className, onDelete }) => {
  const { t } = useTranslation();
  const { nid, nname } = item;

  return (
    <tr className={className}>
      <td>{nid}</td>
      <td>{nname}</td>
      <td>
        <div className="buttons">
          <a href={`/note/update/${nid}`}>
            <StyledButton variant="primary">
              {t('설정_수정하기')}
            </StyledButton>
          </a>
          <StyledButton variant="danger" onClick={() => onDelete(nid)}>
            {t('삭제')}
          </StyledButton>
        </div>
      </td>
    </tr>
  );
};

// StyledListItem 컴포넌트에 스타일 추가
const StyledListItem = styled(ListItem)`
  &:hover {
    background-color: #f1f1f1; // 마우스 오버 시 배경색
  }

  .buttons {
    display: flex;
    gap: 10px;
    width: 200px;
  }
`;

// StyledTable 컴포넌트에 스타일 추가
const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse; // 테이블 경계 중첩 제거
  margin-top: 20px; // 테이블 상단 여백

  th {
    background-color: #343a40; // 헤더 배경색
    color: #fff; // 헤더 텍스트 색상
    padding: 12px; // 헤더 패딩
    text-align: left; // 텍스트 정렬
  }

  td {
    padding: 10px; // 셀 패딩
    border-bottom: 1px solid #ddd; // 하단 경계선
  }

  tr:nth-child(even) {
    background-color: #f9f9f9; // 짝수 행 배경색
  }
`;

// ListItems 컴포넌트
const ListItems = ({ items, onDelete }) => {
  const { t } = useTranslation();
  return (
    <StyledTable>
      <thead>
        <tr>
          <th>{t('노트_ID')}</th>
          <th>{t('노트명')}</th>
          <th>{t('작업')}</th>
        </tr>
      </thead>
      <tbody>
        {items && items.length > 0 ? (
          items.map((item) => (
            <StyledListItem key={item.nid} item={item} onDelete={onDelete} />
          ))
        ) : (
          <tr>
            <td colSpan="3">{t('검색된_노트가_없습니다.')}</td>
          </tr>
        )}
      </tbody>
    </StyledTable>
  );
};

export default React.memo(ListItems);
