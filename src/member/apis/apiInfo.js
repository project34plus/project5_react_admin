import requestData from '@/commons/libs/requestData';
import saveProcess from '@/commons/libs/saveProcess';
import apiRequest from '@/commons/libs/apiRequest';

// 회원정보 수정
export const updateMemberInfo = async (form) =>
  saveProcess('/member/admin/update', 'PATCH', form);

/*
export const updateMemberInfo = (form) =>
  new Promise((resolve, reject) => {
    console.log(form);

    apiRequest('/member/admin/update', 'PATCH', form)
      .then((res) => {
        if (![201, 204, 200].includes(res.status)) {
          // 검증 실패

          reject(res.data);
          return;
        }
        resolve(res.data); // 성공
      })
      .catch((err) => {
        console.error(err);
        reject(err);
      });
  });
*/

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
export const withdrawMember = (seq) =>
  requestData(`/member/admin/withdraw`, 'PATCH', { seq });

// 회원 삭제
export const deleteMember = (seq) =>
  requestData(`/member/admin/delete/${seq}`, 'DELETE');
