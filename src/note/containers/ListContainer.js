'use client';

import React, {
  useLayoutEffect,
  useEffect,
  useState,
  useCallback,
} from 'react';
import { getCommonActions } from '@/commons/contexts/CommonContext';
import { useTranslation } from 'react-i18next';
import ListItems from '../components/ListItems';
import { getList } from '../apis/apiNote';
import pagination from '@/commons/components/pagination';
import Pagination from '@/commons/components/pagination';

const ListContainer = ({ searchParams }) => {
  const { setMenuCode, setSubMenuCode, setMainTitle } = getCommonActions();
  const [search, setSearch] = useState(searchParams);
  const [items, setItems] = useState(null);
  const [pagination, setPagination] = useState(null);

  const { t } = useTranslation();

  useLayoutEffect(() => {
    setMenuCode('note');
    setSubMenuCode('list');
    setMainTitle(t('노트_목록'));
  }, [setMenuCode, setSubMenuCode, setMainTitle, t]);

  useEffect(() => {
    (async () => {
      try {
        const data = await getList(search);
        if (data) {
          setItems(data.items);
          setPagination(data.pagination);
        }

        console.log('data', data);
      } catch (err) {
        console.error(err);
      }
    })();
  }, [search]);

  const onPageClick = useCallback((page) => {
    setSearch((search) => ({ ...search, page }));
  }, []);

  return (
    <>
      <ListItems items={items} />
      {pagination && (
        <Pagination pagination={pagination} onClick={onPageClick} />
      )}
    </>
  );
};

export default React.memo(ListContainer);
