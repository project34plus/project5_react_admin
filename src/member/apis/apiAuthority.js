import requestData from '@/commons/libs/requestData';

export const changeAuthority = (email, authority) =>
  requestData(`/member/admin/status/${email}/${authority}`);
