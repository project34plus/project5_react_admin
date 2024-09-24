import apiRequest from '@/commons/libs/apiRequest';
import requestData from '@/commons/libs/requestData';
export const registerNote = (form) =>
  new Promise((resolve, reject) => {
    (async () => {
      try {
        const res = await apiRequest('/note/admin/register', 'POST', form);
        if (res.status === 201) {
          resolve(true);
          return;
        }

        reject(res.data);
      } catch (err) {
        reject(err);
      }
    })();
  });

export const updateNote = (form) =>
  new Promise((resolve, reject) => {
    (async () => {
      try {
        const res = await apiRequest(
          `/note/admin/update/${form.nid}`,
          'PATCH',
          form,
        );
        if (res.status === 200) {
          resolve(true);
          return;
        }

        reject(res.data);
      } catch (err) {
        reject(err);
      }
    })();
  });

/* 노트 목록 조회 */
export const getList = (search) => {
  search = search ?? {};

  const qs = [];

  for (const [k, v] of Object.entries(search)) {
    qs.push(`${k}=${v}`);
  }

  let url = '/note/admin/list';
  if (qs.length > 0) url += `?${qs.join('&')}`; //검색 조건이 있을 때

  return requestData(url);
};

/* 노트 설정 조회 */
export const getInfo = (nid) => requestData(`/note/admin/info/${nid}`);
