import React from 'react';

const ApprovalList = ({ items }) => {
  console.log("장성준  데이터:", items); // 데이터 확인
  return (
    <div>
      {items.length > 0 ? (
        <ul>
          {items.map((item) => (
            <li key={item.tid}>
              <div>제목: {item.title}</div>
              <div>저자: {item.poster}</div>
              <div>승인 상태: {item.approvalStatus}</div>
            </li>
          ))}
        </ul>
      ) : (
        <div>목록이 없습니다.</div>
      )}
    </div>
  );
};

export default ApprovalList;
