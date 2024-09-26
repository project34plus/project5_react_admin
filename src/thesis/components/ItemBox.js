import React from 'react';
import styled from 'styled-components';

const ItemsBox = ({ items }) => {
  return (
    <Wrapper>
      {items?.length > 0 &&
        items.map(({ tid, title, poster, createdAt, approvalStatus, visible }) => (
          <li key={tid}>
            <a href={`/thesis/view/${tid}`}>
              <div className="title">{title}</div>
              <div className="poster">{poster}</div>
              <div className="createdAt">{new Date(createdAt).toLocaleDateString()}</div>
              <div className={`approvalStatus ${approvalStatus.toLowerCase()}`}>{approvalStatus}</div>
              <div className={`visible ${visible ? 'public' : 'private'}`}>{visible ? '공개' : '비공개'}</div>
            </a>
          </li>
        ))}
    </Wrapper>
  );
};

export default ItemsBox;

const Wrapper = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  border-top: 1px solid #eee;

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 20px;
    border-bottom: 1px solid #eee;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #f5f5f5;
    }

    a {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      text-decoration: none;
      color: #333;
    }

    .title {
      width: 30%;
      font-weight: bold;
      font-size: 1.1rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      color: #007acc;
      transition: color 0.3s ease;

      &:hover {
        color: #005fa3;
      }
    }

    .poster, .createdAt, .approvalStatus, .visible {
      width: 15%;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 0.9rem;
      white-space: nowrap; 
      overflow: hidden;   
      text-overflow: ellipsis; 
    }
    .poster, .approvalStatus, .visible {
      padding-right: 30px; /* 왼쪽으로 15px 이동 */
    }

    .approvalStatus {
      font-weight: bold;
      padding: 5px 10px;
      border-radius: 20px;
      transition: background-color 0.3s ease, color 0.3s ease;

      &.approved {
        background-color: #d1e7dd; /* 차분한 초록 */
        color: #0f5132;
      }

      &.rejected {
        background-color: #f8d7da; /* 차분한 빨강 */
        color: #842029;
      }

      &.pending {
        background-color: #fff3cd; /* 차분한 노랑 */
        color: #856404;
      }
    }

    .visible {
      padding: 5px 10px;
      border-radius: 20px;
      transition: background-color 0.3s ease, color 0.3s ease;

      &.public {
        background-color: #e2e3e5; /* 차분한 회색 */
        color: #6c757d;
      }

      &.private {
        background-color: #e2e3e5; /* 차분한 회색 */
        color: #6c757d;
      }
    }
  }
`;
