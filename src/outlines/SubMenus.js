'use client';
import React, { useMemo } from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import Link from 'next/link';
import { getCommonStates } from '@/commons/contexts/CommonContext';

const SubMenuBox = styled.nav`
  box-shadow: 2px 2px 10px ${({ theme }) => theme.colors.gray};
  border-radius: 5px;
  display: flex;

  a {
    line-height: 55px;
    padding: 0 20px;
    font-size: ${({ theme }) => theme.fontSizes.normal};
    border-radius: 5px;
  }
  a.on {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
  }
`;

const SubMenus = () => {
  const { menuCode, subMenuCode } = getCommonStates();

  const subMenus = useMemo(() => getSubMenus(menuCode), [menuCode]);
  return (
    subMenus &&
    subMenus.length > 0 && (
      <SubMenuBox>
        {subMenus.map(({ code, name, url }) => (
          <Link
            key={code}
            href={url}
            className={classNames({ on: code === subMenuCode })}
          >
            {name}
          </Link>
        ))}
      </SubMenuBox>
    )
  );
};

function getSubMenus(menuCode) {
  switch (menuCode) {
    case 'member': // 회원관리
      return [{ code: 'list', name: '회원목록', url: '/member/list' }];
    case 'board': // 게시판 관리
      return [
        { code: 'list', name: '게시판 목록', url: '/board/list' },
        { code: 'register', name: '게시판 등록', url: '/board/register' },
        { code: 'posts', name: '게시글 관리', url: '/board/posts' },
      ];
    case 'thesis': //논문관리
      return [];

    case 'note': // 노트 설정 관리
      return [
        { code: 'list', name: '노트 목록', url: '/note/list' },
        { code: 'register', name: '노트 등록', url: '/note/register' },
      ];
  }
}

export default React.memo(SubMenus);
