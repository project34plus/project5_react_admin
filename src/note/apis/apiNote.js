import apiRequest from '@/commons/libs/apiRequest';

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
