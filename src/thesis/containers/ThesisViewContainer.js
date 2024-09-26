'use client';
import React, { useLayoutEffect, useEffect, useState, useContext } from 'react';
import { List } from 'react-content-loader';
import { apiGet } from '../apis/apiInfo.js';
import { getCommonActions } from '@/commons/contexts/CommonContext';
import { useTranslation } from 'react-i18next';
import Container from '@/commons/components/Container.js';
import UserInfoContext from '@/commons/contexts/UserInfoContext.js';
import { useRouter } from 'next/navigation'; //CSR ->router는 SSR
import View from '../components/View.js';
import { getFiles } from '@/commons/libs/apiFile.js';

const MyListLoader = () => <List />;

const ThesisViewContainer = ({ params }) => {
  const { t } = useTranslation();
  const [item, setItem] = useState(null);
  const router = useRouter();
  const { tid } = params;
  const { setMainTitle } = getCommonActions();

  const {
    states: { userInfo },
  } = useContext(UserInfoContext);

  useLayoutEffect(() => {
    setMainTitle(t('논문_상세정보'));
  }, [setMainTitle, t]);

  useEffect(() => {
    (async () => {
      try {
        const item = await apiGet(tid);
        if (item) {
          const files = await getFiles(item.gid);
          if (files && files.length > 0) {
            item.fileInfo = files;
          }
        }
        setMainTitle(item.title);
        setItem(item);
      } catch (err) {
        console.error(err);
        router.back();
      }

      window.scrollTo(0, 0);
    })();
  }, [tid, router, setMainTitle]);

  if (!item) {
    return <MyListLoader />;
  }

  return (
    <Container>
      <View item={item} />
    </Container>
  );
};

export default React.memo(ThesisViewContainer);
