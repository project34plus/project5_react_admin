'use client';
import React, { useLayoutEffect, useState, useCallback } from 'react';
import cookies from 'react-cookies';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { getCommonActions } from '@/commons/contexts/CommonContext';
import LoginForm from '../components/LoginForm';
import { apiLogin, apiUser } from '../apis/apiLogin';
import { getUserActions } from '@/commons/contexts/UserInfoContext';
import Container2 from '@/commons/components/Container2';
import LoginBox from '../components/LoginBox';

const LoginContainer = ({ searchParams }) => {
  const router = useRouter();
  const { t } = useTranslation();
  const { setMainTitle } = getCommonActions();
  useLayoutEffect(() => {
    setMainTitle(t('로그인'));
  }, [setMainTitle, t]);

  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

  const { setIsLogin, setIsAdmin, setUserInfo } = getUserActions();

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();

      const _errors = {};
      let hasErrors = false;

      /* 필수 항목 검증 S */
      const requiredFields = {
        email: t('이메일을_입력하세요'),
        password: t('비밀번호를_입력하세요'),
      };

      for (const [field, message] of Object.entries(requiredFields)) {
        if (!form[field] || !form[field].trim()) {
          _errors[field] = _errors[field] ?? [];
          _errors[field].push(message);
          hasErrors = true;
        }
      }
      /* 필수 항목 검증 E */

      setErrors(_errors);
      if (hasErrors) {
        return;
      }

      // 로그인 처리
      apiLogin(form)
        .then((res) => {
          const token = res.data;
          const options = { path: '/' };
          if (process.env.NODE_ENV !== 'development') {
            // 실서버에서 동작중일때
            const domain = process.env.NEXT_PUBLIC_DOMAIN;
            options.domain = `*.${domain}`;
          }
          cookies.save('token', token, options);
          console.log(form);

          (async () => {
            try {
              // 로그인 처리
              const user = await apiUser();
              console.log('user', user);

              if (user.deletedAt) {
                setErrors({ global: ['탈퇴한 회원입니다.'] });
                return;
              }

              setIsLogin(true); // 로그인 상태
              setUserInfo(user);
              setIsAdmin(user.userType === 'ADMIN'); // 관리자 여부

              /**
               * 후속 처리 : 회원 전용 서비스 URL로 이동
               * 예) /member/login?redirectURL=로그인 이후 이동할 경로
               *
               */
              setForm({});
              const redirectURL = searchParams?.redirectUrl || '/';
              router.replace(redirectURL);
            } catch (err) {
              console.error(err);
            }
          })();
        })
        .catch((err) => {
          _errors.global = _errors.global ?? [];
          _errors.global.push(err.message);
          setErrors({ ..._errors });
        });
    },
    [form, router, searchParams, setIsAdmin, setIsLogin, setUserInfo, t],
  );

  const onChange = useCallback((e) => {
    setForm((form) => ({ ...form, [e.target.name]: e.target.value }));
  }, []);

  return (
    <Container2>
      <LoginBox>
        <LoginForm
          form={form}
          errors={errors}
          onSubmit={onSubmit}
          onChange={onChange}
        />
      </LoginBox>
    </Container2>
  );
};

export default React.memo(LoginContainer);
