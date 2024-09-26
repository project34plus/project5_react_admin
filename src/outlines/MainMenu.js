'use client';
import React from 'react';
import { getCommonStates } from '@/commons/contexts/CommonContext';
import { getUserStates } from '@/commons/contexts/UserInfoContext';
import styled from 'styled-components';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';

const Menus = styled.aside`
  position: relative;
  margin-top: 230px;
  min-width: 200px;
  background: ${({ theme }) => theme.colors.white};

  a {
      display: block;
      background: ${({ theme }) => theme.colors.primary};
      line-height: 60px;
      font-size: ${({ theme }) => theme.fontSizes.normal};
      color: ${({ theme }) => theme.colors.white};
      padding: 0 20px;
      display: block;
    }
    a + a { 
        border-top: 1px solid ${({ theme }) => theme.colors.gray};
    }
    a.on {
      background: ${({ theme }) => theme.colors.navy};
    }
  }
`;

const MainMenu = () => {
  const { showMainMenu, menuCode } = getCommonStates();
  const { isAdmin } = getUserStates();
  const { t } = useTranslation();

  return (
    showMainMenu &&
    isAdmin && (
      <Menus>
        <a
          href="/member/list"
          className={classNames({ on: menuCode === 'member' })}
        >
          {t('회원관리')}
        </a>
        {/* <a
          href="/board/list"
          className={classNames({ on: menuCode === 'board' })}
        >
          {t('게시판목록')}
        </a> */}
        <a
          href="/thesis/list"
          className={classNames({ on: menuCode === 'thesis' })}
        >
          {t('논문목록')}
        </a>
        <a
          href="/note/list"
          className={classNames({ on: menuCode === 'note' })}
        >
          {t('노트관리')}
        </a>
      </Menus>
    )
  );
};

export default React.memo(MainMenu);
