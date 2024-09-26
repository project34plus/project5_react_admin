'use client';
import React, {
  useEffect,
  useState,
  useLayoutEffect,
  useCallback,
} from 'react';
import ItemBox from '@/thesis/components/ItemBox';
import { apiUnapprovalList } from '../apis/apiInfo';
import Loading from '@/commons/components/Loading';
import { useTranslation } from 'react-i18next';
import { getCommonActions } from '@/commons/contexts/CommonContext';
import Container from '@/commons/components/Container';
import Pagination from '@/commons/components/Pagination';
import styled from 'styled-components';
import ListHeader from '../components/ListHeader';

function getQueryString(searchParams) {
  const qs = {};
  if (searchParams?.size > 0) {
    for (const [k, v] of searchParams) {
      qs[k] = v;
    }
  }
  return qs;
}

const UnApprovalContainer = ({ searchParams }) => {
  const [thesisList, setThesisList] = useState([]);
  const [pagination, setPagination] = useState({});
  const [search, setSearch] = useState(() => getQueryString(searchParams));
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { t } = useTranslation();
  const { setMainTitle } = getCommonActions();

  useLayoutEffect(() => {
    setMainTitle(t('대기중인_논문_목록'));
  }, [setMainTitle, t]);

  useEffect(() => {
    setLoading(true);
    apiUnapprovalList(search).then((res) => {
      console.log('res', res);
      setThesisList(res.items || []);
      setPagination(res.pagination || {});
      setLoading(false);
    });
  }, [search]);

  /* 페이지 변경 함수 */
  const onChangePage = useCallback((p) => {
    setSearch((prevSearch) => ({ ...prevSearch, page: p }));
  }, []);

  if (loading) return <Loading />; // 로딩 상태일 때

  return (
    <Container>
      <ListHeader />
      {thesisList && thesisList.length > 0 ? (
        <>
          <ItemBox items={thesisList} />
          <Pagination onClick={onChangePage} pagination={pagination} />
        </>
      ) : (
        <NoData>거절 된 논문이 없습니다.</NoData>
      )}
    </Container>
  );
};

export default UnApprovalContainer;

const NoData = styled.div`
  font-size: 1.5em;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;
