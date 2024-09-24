import requestData from '@/commons/libs/requestData';
import apiRequest from '@/commons/libs/apiRequest';

// 노트 설정 등록
export const apiRegisterNote = (formData) => {
  return apiRequest.post('/admin/register', formData);
};

// 노트 설정 수정
export const apiUpdateNote = (nid, formData) => {
  return apiRequest.patch(`/admin/update/${nid}`, formData);
};

// 노트 설정 목록 조회
export const apiListNotes = (searchParams) => {
  return apiRequest.get('/admin/list', { params: searchParams });
};

// 노트 설정 한 개 조회
export const apiGetNoteInfo = (nid) => {
  return apiRequest.get(`/admin/info/${nid}`);
};

// 노트 설정 삭제
export const apiDeleteNote = (nid) => {
  return apiRequest.delete(`/admin/${nid}`);
};
