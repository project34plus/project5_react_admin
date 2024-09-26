'use client';
import React from 'react';
import { styled } from 'styled-components';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
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
            <button className="edit-btn" aria-label={t('설정_수정하기')}>
              <FaEdit />
            </button>
          </a>
          <button
            className="delete-btn"
            aria-label={t('삭제')}
            onClick={() => onDelete(nid)}
          >
            <FaTrashAlt />
          </button>
        </div>
      </td>
    </tr>
  );
};

// StyledListItem 컴포넌트에 스타일 추가
const StyledListItem = styled(ListItem)`
  &:hover {
    background-color: #f0f4f8; // 마우스 오버 시 부드러운 배경색
    transition: background-color 0.2s ease-in-out;
  }

  .buttons {
    display: flex;
    justify-content: center;
    gap: 15px;
  }

  .edit-btn,
  .delete-btn {
    background: none;
    border: none;
    font-size: 1.2rem;
    cursor: pointer;
    color: #6c757d;
    transition: color 0.2s ease-in-out;
  }

  .edit-btn:hover {
    color: #007bff; // 수정 버튼 호버 시 파란색
  }

  .delete-btn:hover {
    color: #dc3545; // 삭제 버튼 호버 시 빨간색
  }
`;

// StyledTable 컴포넌트에 스타일 추가
const StyledTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 10px; // 행 간 간격 추가
  margin-top: 20px;

  th {
    background-color: #6c757d;
    color: #fff;
    padding: 12px;
    text-align: center;
    font-weight: bold;
    border-radius: 10px 10px 0 0;
  }

  td {
    padding: 15px;
    background-color: #fff;
    border-radius: 10px;
    text-align: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); // 셀에 그림자 추가
    transition: box-shadow 0.2s ease-in-out;
  }

  td:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); // 마우스 오버 시 그림자 강화
  }

  tbody tr:last-child td {
    border-bottom: none;
  }

  td[colspan='3'] {
    text-align: center;
    color: #868e96;
    padding: 20px;
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
            <td colSpan="3">{t('검색된_노트가_없습니다')}</td>
          </tr>
        )}
      </tbody>
    </StyledTable>
  );
};

export default React.memo(ListItems);
