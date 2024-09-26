'use client';
import React, {
  useEffect,
  useState,
  useLayoutEffect,
  useCallback,
} from 'react';
import { getCommonActions } from '@/commons/contexts/CommonContext';
import MemberList from '../components/MemberList';
import Container from '@/commons/components/Container';
import { getMemberList } from '../apis/apiInfo';
import Pagination from '@/commons/components/Pagination';
import { useTranslation } from 'react-i18next';

const MemberListContainer = ({ searchParams }) => {
  const { setMenuCode, setSubMenuCode, setMainTitle } = getCommonActions();
  searchParams = searchParams ?? {};

  // 회원 목록 상태
  const [members, setMembers] = useState([]);
  const [pagination, setPagination] = useState(null);
  searchParams.page = searchParams?.page ?? 1;
  searchParams.limit = searchParams?.limit ?? 20;
  searchParams.sopt = searchParams?.sopt ?? 'ALL';

  const [search, setSearch] = useState(searchParams);

  // 로딩 상태
  const [loading, setLoading] = useState(true);
  // 오류 상태
  const [error, setError] = useState(null);

  const { t } = useTranslation();

  // 메뉴 코드 설정
  useLayoutEffect(() => {
    setMenuCode('member'); // 메인 메뉴 'member' 설정
    setSubMenuCode('list'); // 서브 메뉴 'list' 설정
    setMainTitle(t('회원_목록'));
  }, [setMenuCode, setSubMenuCode, setMainTitle, t]);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        // getMemberList API 호출하여 회원 목록 가져오기
        const data = await getMemberList(search); // 1페이지, 20개 항목
        const activeMembers = data.items.filter(
          (member) => member.deletedAt === null,
        );
        setMembers(activeMembers); // 회원 목록을 상태에 저장
        setPagination(data.pagination);
      } catch (err) {
        console.error('Error fetching members:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMembers();
  }, [search]);

  const onPageClick = useCallback((page) => {
    setSearch((search) => ({ ...search, page }));
  }, []);

  if (loading) return <div>로딩 중...</div>;

  if (error) return <div>오류 발생: {error}</div>;

  return (
    <Container>
      <MemberList members={members} />
      <Pagination pagination={pagination} onClick={onPageClick} />
    </Container>
  );
};

export default React.memo(MemberListContainer);
