'use client';
import React, {
  useLayoutEffect, //렌더링 되기 전 실행됨
  useEffect,
  useState,
  useCallback,
} from 'react';
import { apiList } from '../apis/apiInfo.js';
import Pagination from '@/commons/components/Pagination';
import ItemsBox from '../components/ItemBox.js';
import SearchBox from '../components/SearchBox';
import Loading from '@/commons/components/Loading.js';
import { useTranslation } from 'react-i18next';
import { getCommonActions } from '@/commons/contexts/CommonContext';
import Container from '@/commons/components/Container.js';
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

const ThesisListContainer = ({ searchParams }) => {
  const { t } = useTranslation();
  const [form, setForm] = useState(() => getQueryString(searchParams));
  const [search, setSearch] = useState(() => getQueryString(searchParams));
  const [items, setItems] = useState([]);
  const [pagination, setPagination] = useState({});
  const [loading, setLoading] = useState(false);
  const { setMainTitle } = getCommonActions();

  useLayoutEffect(() => {
    setMainTitle(t('논문학술자료'));
  }, [setMainTitle, t]);

  useEffect(() => {
    setLoading(true);
    apiList(search).then((res) => {
      console.log('res', res);
      setItems(res.items || []);
      setPagination(res.pagination || {});
      setLoading(false);
    });
  }, [search]);

  /* 검색 관련 함수 */
  const onChangeSearch = useCallback((e) => {
    setForm((form) => ({ ...form, [e.target.name]: e.target.value }));
  }, []);

  const onSubmitSearch = useCallback(
    (e) => {
      e.preventDefault();
      setSearch({ ...form, page: 1 });
    },
    [form],
  );

  //선택한 옵션으로 변경
  const selectChange = useCallback(
    (selectedOption) => {
      setForm(
        produce((draft) => {
          draft.persons = selectedOption ? selectedOption.value : null;
        }),
      );
    },
    [setForm],
  );

  /* 페이지 변경 함수 */
  const onChangePage = useCallback((p) => {
    setSearch((search) => ({ ...search, page: p }));
    window.location.hash = '#root';
  }, []);

  /* 로딩 처리 */
  if (loading) {
    return <Loading />;
  }

  return (
    <Container>
      <SearchBox
        form={form}
        onChange={onChangeSearch}
        onSubmit={onSubmitSearch}
        selectChange={selectChange}
      />
      <Header>
        <div className="header-subject">논문 제목</div>
        <div className="header-poster">작성자</div>
        <div className="header-createAt">등록일</div>
        <div className="header-approval">승인여부</div>
        <div className="header-visible">공개여부</div>
      </Header>
      <ItemsBox items={items} />
      {items.length > 0 && (
        <Pagination onClick={onChangePage} pagination={pagination} />
      )}
    </Container>
  );
};

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
    width: 20%;
  }

  .header-approval {
    width: 15%;
  }

  .header-visible {
    width: 10%;
  }
`;


export default React.memo(ThesisListContainer);
