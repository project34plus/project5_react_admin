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
import { getList, deleteNote } from '../apis/apiNote';
import Pagination from '@/commons/components/Pagination';
import Container from '@/commons/components/Container';

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
      } catch (err) {
        console.error(err);
      }
    })();
  }, [search]);

  const onPageClick = useCallback((page) => {
    setSearch((search) => ({ ...search, page }));
  }, []);

  const handleDelete = async (nid) => {
    try {
      await deleteNote(nid);
      setItems((prevItems) => prevItems.filter((item) => item.nid !== nid));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Container>
        <ListItems items={items} onDelete={handleDelete} />
        {pagination && (
          <Pagination pagination={pagination} onClick={onPageClick} />
        )}
      </Container>
    </>
  );
};

export default React.memo(ListContainer);
