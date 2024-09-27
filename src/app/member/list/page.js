import AdminOnlyContainer from '@/member/containers/AdminOnlyContainer';
import ListContainer from '@/member/containers/ListContainer';
const MemberListPage = ({ searchParams }) => {
  return (
    <AdminOnlyContainer>
      <ListContainer searchParams={searchParams} />
    </AdminOnlyContainer>
  );
};

export default MemberListPage;
