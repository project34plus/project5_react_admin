import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/navigation';

const ListHeader = () => {
  const router = useRouter();

  const handleNavigation = (path) => {
    router.push(path); // 버튼 클릭 시 해당 경로로 이동
  };

  return (
    <HeaderWrapper>
      <ButtonContainer>
        <button onClick={() => handleNavigation('/thesis/list')}>전체보기</button>
        <button onClick={() => handleNavigation('/thesis/list/approval')}>승인 상태 논문</button>
        <button onClick={() => handleNavigation('/thesis/list/unapproval')}>미승인 상태 논문</button>
        <button onClick={() => handleNavigation('/thesis/list/rejected')}>거절된 논문</button>
      </ButtonContainer>
      <HeaderContent>
        <div className="header-subject">논문 제목</div>
        <div className="header-poster">저자</div>
        <div className="header-createAt">등록일</div>
        <div className="header-approval">승인여부</div>
        <div className="header-visible">공개여부</div>
      </HeaderContent>
    </HeaderWrapper>
  );
};

export default ListHeader;

// 스타일 정의
const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 2px solid #ccc;
  font-weight: bold;
  text-align: center;
  padding: 10px 0;
  gap: 20px; /* 버튼과 헤더 사이 여백 추가 */
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 10px;

  button {
    padding: 8px 10px;
    font-size: 14px;
    margin-right: 10px;
    cursor: pointer;
    border: 1px solid #001E6C;
    border-radius: 4px;
    background-color: #001E6C;
    color: white;
    &:hover {
      background-color: #0056b3;
    }
  }
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

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
    width: 5%;
  }

  .header-visible {
    width: 25%;
  }
`;