import React from 'react';
import styled from 'styled-components';

const ApprovalList = ({ items }) => {
  // console.log("장성준  데이터:", items); // 데이터 확인
  return (
    <Wrapper>
      {items?.length > 0 &&
        items.map(({ tid, title, poster, createdAt, approvalStatus, visible }) => (
          <li key={tid}>
            <a href={`/thesis/view/${tid}`}>
              <div className="title">{title}</div>
              <div className="poster">{poster}</div>
              <div className="createdAt">{new Date(createdAt).toLocaleDateString()}</div> {/* 작성일 추가 */}
              <div className="approvalStatus">{approvalStatus}</div> {/* 승인 상태 추가 */}
              <div className="visible">{visible ? '공개' : '비공개'}</div> {/* 공개 여부 추가 */}
            </a>
          </li>
        ))}
    </Wrapper>
  );
};

export default ApprovalList;

// 스타일 정의 (가로 정렬)
const Wrapper = styled.ul`
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #ccc;

    .title,
    .poster,
    .createdAt,
    .approvalStatus,
    .visible {
      display: flex;
      align-items: center; /* 수직 가운데 정렬 */
      text-align: center;
    }

    .title {
      width: 30%;
      font-weight: bold;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis; /* 텍스트가 길면 생략 */
    }

    .poster {
      width: 15%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .createdAt {
      width: 10%;
    }

    .approvalStatus {
      width: 10%;
    }

    .visible {
      width: 15%;
    }

    a {
      display: flex;
      justify-content: space-between;
      width: 100%;
      text-decoration: none;
      color: inherit;
    }
  }
`;
