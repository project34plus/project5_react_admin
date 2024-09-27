import React, { useCallback } from 'react';
import styled from 'styled-components';
import cookies from 'react-cookies';
import { useTranslation } from 'react-i18next';
import { getCommonStates } from '../commons/contexts/CommonContext';
import { getUserContext } from '@/commons/contexts/UserInfoContext';
import { IoHome } from 'react-icons/io5';

const MAIN_URL = process.env.NEXT_PUBLIC_MAIN_URL;

const HeaderBox = styled.header`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  background: ${({ theme }) => theme.colors.navy};
  height: 50px;
  z-index: 1000;
  display: flex;
  align-items: center;
  padding: 0 20px;

  .site-top {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-size: ${({ theme }) => theme.fontSizes.extraSmall};
  }

  .home {
    color: ${({ theme }) => theme.colors.white};
    text-decoration: none;
    padding: 0 20px;
    transition: color 0.3s;
    cursor: pointer;

    &:hover {
      color: ${({ theme }) => theme.colors.gray};
    }
  }

  .layout-width {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  a {
    color: ${({ theme }) => theme.colors.white};
    text-decoration: none;
    padding: 0 20px;
    transition: color 0.3s;
    cursor: pointer;

    &:hover {
      color: ${({ theme }) => theme.colors.gray};
    }
  }
`;

const Icon = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.white};
  margin-right: 5px;
  position: relative;
  top: 2px;
`;

const Header = () => {
  const [login, setLogin] = useState(false);
  const { t } = useTranslation();
  const { showHeader } = getCommonStates();
  const {
    states: { isLogin, userInfo, isAdmin },
    actions: { setIsLogin, setIsAdmin, setUserInfo },
  } = getUserContext();

  
  useEffect(() => {
    setLogin(isLogin);
  }, [isLogin]);

  const onLogout = useCallback(() => {
    setIsLogin(false);
    setIsAdmin(false);
    setUserInfo(null);
    cookies.remove('token', { path: '/' });
  }, [setIsLogin, setIsAdmin, setUserInfo]);

  return (
    showHeader && (
      <HeaderBox>
        <section className="site-top">
          <div className="layout-width">
            <a className="home" href="/">
              <Icon>
                <IoHome />
              </Icon>
              {t('사이트홈')}
            </a>
            {isLogin ? (
              <>
                {/* 로그인 상태 */}
                {/* <span>
                  {userInfo?.userName}({userInfo?.email}){t('님_로그인')}
                </span> */}
                <a onClick={onLogout}>{t('로그아웃')}</a>
              </>
            ) : (
              <>
                {/* <a href="/member/join">{t('회원가입')}</a> */}
                <a href="/member/login">{t('로그인')}</a>
              </>
            )}
          </div>
        </section>
      </HeaderBox>
    )
  );
};

export default React.memo(Header);
