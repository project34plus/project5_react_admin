'use client';
import React, { useEffect, useState } from 'react';
import ApprovalList from '@/thesis/components/ApprovalList'; // ApprovalList 컴포넌트를 임포트
import { apiApproveList } from '@/thesis/apis/apiInfo'; // 승인된 논문을 가져오는 API
import Loading from '@/commons/components/Loading';

const ApprovalContainer = () => {
  const [thesisList, setThesisList] = useState([]);
  const [pagination, setPagination] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTheses = async () => {
      try {
        const data = await apiApproveList(); // 승인된 논문 데이터 가져오기
        console.log('API에서 가져온 데이터:', data); // 데이터 확인용 로그
        setThesisList(data.items); // 상태에 저장
        setPagination(data.pagination);
      } catch (err) {
        console.error('데이터 가져오기 에러:', err); // 에러 처리
        setError(err); // 에러 상태 저장
      } finally {
        setLoading(false); // 로딩 종료
      }
    };
    fetchTheses();
  }, []);

  if (loading) return <Loading />; // 로딩 상태일 때
  return <ApprovalList items={thesisList} />; // ApprovalList에 thesisList 전달
};

export default ApprovalContainer;
