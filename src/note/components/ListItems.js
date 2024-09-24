'use client';
import React from 'react';
import { styled } from 'styled-components';
import { StyledButton } from '@/commons/components/buttons/StyledButton';
import { useTranslation } from 'react-i18next';

const ListItem = ({ item, className }) => {
  const { t } = useTranslation();
  const { nid, nname } = item;
  return (
    <tr className={className}>
      <td>{nid}</td>
      <td>{nname}</td>
      <td>
        <a href={`/note/update/${nid}`}>
          <StyledButton variant="primary">{t('설정_수정하기')}</StyledButton>
        </a>
      </td>
    </tr>
  );
};

const StyledListItem = styled(ListItem)``;

const StyledTable = styled.table``;

const ListItems = ({ items }) => {
  const { t } = useTranslation();
  return (
    <StyledTable>
      <thead>
        <tr>
          <th>{t('노트_ID')}</th>
          <th>{t('노트명')}</th>
          <td></td>
        </tr>
      </thead>
      <tbody>
        {items && items.length > 0 ? (
          items.map((item) => <StyledListItem key={item.nid} item={item} />)
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
