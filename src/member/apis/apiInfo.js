import requestData from '@/commons/libs/requestData';
import saveProcess from '@/commons/libs/saveProcess';
// 회원정보 수정
export const updateMemberInfo = async (form) =>
  saveProcess('/member/admin/update', 'PATCH', form);

// 회원 목록 조회
export const getMemberList = ({ page, limit, sopt, skey }) =>
  requestData(
    `/member/admin/info/list?page=${page}&limit=${limit}&sopt=${sopt}&skey=${
      skey?.trim() ?? ''
    }`,
  );

// 특정 회원 정보 조회 (이메일로)
export const getMemberInfoByEmail = (email) =>
  requestData(`/member/admin/info/${email}`);

// 회원 탈퇴
export const deleteMember = (seq) =>
  requestData(`/member/admin/withdraw`, 'PATCH', { seq });
