'use client';
import React, {
  useEffect,
  useState,
  useLayoutEffect,
  useCallback,
} from 'react';
import ApprovalList from '@/thesis/components/ApprovalList'; // ApprovalList 컴포넌트를 임포트
import { apiApprovalList } from '../apis/apiInfo';
import Loading from '@/commons/components/Loading';
import { useTranslation } from 'react-i18next';
import { getCommonActions } from '@/commons/contexts/CommonContext';
import Container from '@/commons/components/Container';
import Pagination from '@/commons/components/Pagination';
import styled from 'styled-components';

function getQueryString(searchParams) {
  const qs = {};
  if (searchParams?.size > 0) {
    for (const [k, v] of searchParams) {
      qs[k] = v;
    }
  }
  return qs;
}

const ApprovalContainer = ({ searchParams }) => {
  const [thesisList, setThesisList] = useState([]);
  const [pagination, setPagination] = useState({});
  const [search, setSearch] = useState(() => getQueryString(searchParams));
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { t } = useTranslation();
  const { setMainTitle } = getCommonActions();

  useLayoutEffect(() => {
    setMainTitle(t('승인된 논문 목록'));
  }, [setMainTitle, t]);

  useEffect(() => {
    setLoading(true);
    apiApprovalList(search).then((res) => {
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
      <Header>
        <div className="header-subject">논문 제목</div>
        <div className="header-poster">작성자</div>
        <div className="header-createAt">등록일</div>
        <div className="header-approval">승인여부</div>
        <div className="header-visible">공개여부</div>
      </Header>
      <ApprovalList items={thesisList} />
      {thesisList.length > 0 && (
        <Pagination onClick={onChangePage} pagination={pagination} />
      )}
    </Container>
  );
};

export default ApprovalContainer;

// 상단 헤더 스타일 정의
const Header = styled.div`
  display: flex;
  border-bottom: 2px solid #ccc;
  font-weight: bold;
  text-align: center;
  padding: 10px 0;

  .header-subject {
    width: 30%;
  }

  .header-poster {
    width: 15%;
  }

  .header-createAt {
    width: 25%;
  }

  .header-approval {
    width: 5%;
  }

  .header-visible {
    width: 20%;
  }
`;
