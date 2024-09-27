import React from 'react';
import ApprovalContainer from '@/thesis/containers/ApprovalContainer';
import UnApprovalContainer from '@/thesis/containers/UnApprovalContainer';
import RejectedContainer from '@/thesis/containers/RejectedContainer';

const ThesisListByType = ({ params }) => {
  const { type } = params;
  let Container;

  switch (type) {
    case 'approval':
      Container = ApprovalContainer;
      break;
    case 'unapproval':
      Container = UnApprovalContainer;
      break;
    case 'rejected':
      Container = RejectedContainer;
      break;
    default:
      return <div>유효하지 않은 타입입니다.</div>;
  }

  return (
    <div>
      <Container />
    </div>
  );
};

export default ThesisListByType;
