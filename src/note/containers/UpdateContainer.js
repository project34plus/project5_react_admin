'use client';
import React, {
  useLayoutEffect,
  useState,
  useEffect,
  useCallback,
} from 'react';
import { getCommonActions } from '@/commons/contexts/CommonContext';
import { useTranslation } from 'react-i18next';
import { registerNote, updateNote } from '../apis/apiNote';
import NoteForm from '../components/NoteForm';

const UpdateContainer = ({ params }) => {
  const { setMenuCode, setSubMenuCode, setMainTitle } = getCommonActions();
  const { t } = useTranslation();
  const { nid } = params;
  const [form, setForm] = useState({
    active: false,
    locationAfterWriting: 'list',
    skin: 'default',
    mode: nid ? 'update' : 'register',
    nid,
  });
  const [errors, setErrors] = useState({});

  useLayoutEffect(() => {
    setMenuCode('note');
    setSubMenuCode(nid ? 'update' : 'register');
    setMainTitle(nid ? t('노트_수정') : t('노트_등록'));
  }, [setMenuCode, setSubMenuCode, setMainTitle, t, nid]);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();

      const _errors = {};
      let hasErrors = false;
      /* 유효성 검사 S */
      // 필수 항목 검증
      const requiredFields = {
        nid: t('게시판_ID를_입력하세요.'),
        nname: t('게시판명을_입력하세요.'),
      };

      for (const [field, message] of Object.entries(requiredFields)) {
        if (!form[field] || !form[field]?.trim()) {
          _errors[field] = _errors[field] ?? [];
          _errors[field].push(message);
          hasErrors = true;
        }
      }

      /* 유효성 검사 E */
      setErrors(_errors);
      if (hasErrors) {
        return;
      }

      // 게시판 등록, 수정
      (async () => {
        try {
          form.mode === 'update'
            ? await updateNote(form)
            : await registerNote(form);
        } catch (err) {
          console.error(err);

          const message = err.message;
          setErrors(
            typeof message === 'string' ? { global: [message] } : message,
          );
        }
      })();
    },
    [t, form],
  );

  const onChange = useCallback((e) => {
    setForm((form) => ({ ...form, [e.target.name]: e.target.value }));
  }, []);

  const onClick = useCallback((name, value) => {
    setForm((form) => ({ ...form, [name]: value }));
  }, []);

  return (
    <NoteForm
      form={form}
      errors={errors}
      onChange={onChange}
      onClick={onClick}
      onSubmit={onSubmit}
    />
  );
};

export default React.memo(UpdateContainer);
