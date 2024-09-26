import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import StyledMessage from '@/commons/components/StyledMessage';
import {
  StyledInput,
  StyledTextArea,
} from '@/commons/components/inputs/StyledInput';
import { StyledButton } from '@/commons/components/buttons/StyledButton';
import { IoIosRadioButtonOn, IoIosRadioButtonOff } from 'react-icons/io';

const FormBox = styled.form`
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin: 50px 30px;
  background-color: #f9f9f9;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  dl {
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 15px 0;
    border-bottom: 1px solid #eee;

    dt {
      width: 160px;
      font-weight: bold;
      color: #333;
    }

    dd {
      flex-grow: 1;
    }
  }

  dl:last-child {
    border-bottom: none;
  }

  button[type='submit'] {
    align-self: flex-end;
    margin-top: 30px;
    transition: background-color 0.3s ease, transform 0.3s ease;
    
    &:hover {
      background-color: #0056b3;
      transform: translateY(-2px);
    }
  }

  input, textarea {
    border-radius: 8px;
    padding: 10px;
    border: 1px solid #ccc;
    transition: all 0.3s ease;

    &:focus {
      border-color: #0070f3;
      box-shadow: 0 0 5px rgba(0, 112, 243, 0.5);
    }
  }
`;

const RadioButtonGroup = styled.div`
  display: flex;
  gap: 15px;
  cursor: pointer;

  span {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 15px;
    border-radius: 8px;
    transition: background-color 0.3s ease, color 0.3s ease;
    color: ${({ active }) => (active ? '#0070f3' : '#666')};
    background-color: ${({ active }) => (active ? '#e6f7ff' : 'transparent')};

    &:hover {
      background-color: ${({ active }) => (active ? '#d0eaff' : '#f2f2f2')};
    }
  }

  svg {
    font-size: 1.4rem;
    color: ${({ active }) => (active ? '#0070f3' : '#ddd')};
    transition: color 0.3s ease;
  }
`;

const NoteForm = ({ form, errors, onSubmit, onChange, onClick }) => {
  const { t } = useTranslation();
  return (
    <FormBox onSubmit={onSubmit} autoComplete="off">
      <dl>
        <dt>{t('노트_ID')}</dt>
        <dd>
          {form?.mode === 'update' ? (
            form.nid
          ) : (
            <StyledInput
              type="text"
              name="nid"
              value={form?.nid ?? ''}
              onChange={onChange}
            />
          )}
          <StyledMessage variant="danger">{errors?.nid}</StyledMessage>
        </dd>
      </dl>
      <dl>
        <dt>{t('노트명')}</dt>
        <dd>
          <StyledInput
            type="text"
            name="nname"
            value={form?.nname ?? ''}
            onChange={onChange}
          />
          <StyledMessage variant="danger">{errors?.nname}</StyledMessage>
        </dd>
      </dl>
      <dl>
        <dt>{t('사용여부')}</dt>
        <dd>
          <RadioButtonGroup active={form?.active}>
            <span onClick={() => onClick('active', true)}>
              {form?.active ? <IoIosRadioButtonOn /> : <IoIosRadioButtonOff />}
              {t('사용')}
            </span>
            <span onClick={() => onClick('active', false)}>
              {form?.active ? <IoIosRadioButtonOff /> : <IoIosRadioButtonOn />}
              {t('미사용')}
            </span>
          </RadioButtonGroup>
        </dd>
      </dl>
      <dl>
        <dt>{t('페이지별_게시글_갯수')}</dt>
        <dd>
          <StyledInput
            type="number"
            name="rowsPerPage"
            value={form?.rowsPerPage ?? 20}
            onChange={onChange}
          />
        </dd>
      </dl>
      <dl>
        <dt>{t('페이징_구간_갯수')}</dt>
        <dd>
          <StyledInput
            type="number"
            name="pageCount"
            value={form?.pageCount ?? 10}
            onChange={onChange}
          />
        </dd>
      </dl>
      <dl>
        <dt>{t('분류')}</dt>
        <dd>
          <StyledTextArea
            name="category"
            value={form?.category ?? ''}
            onChange={onChange}
          ></StyledTextArea>
        </dd>
      </dl>
      <dl>
        <dt>{t('글_작성_후_이동')}</dt>
        <dd>
          <RadioButtonGroup active={form?.locationAfterWriting === 'list'}>
            <span onClick={() => onClick('locationAfterWriting', 'list')}>
              {form?.locationAfterWriting === 'list' ? (
                <IoIosRadioButtonOn />
              ) : (
                <IoIosRadioButtonOff />
              )}
              {t('글목록')}
            </span>
            <span onClick={() => onClick('locationAfterWriting', 'view')}>
              {form?.locationAfterWriting === 'view' ? (
                <IoIosRadioButtonOn />
              ) : (
                <IoIosRadioButtonOff />
              )}
              {t('글보기')}
            </span>
          </RadioButtonGroup>
        </dd>
      </dl>
      <dl>
        <dt>{t('스킨')}</dt>
        <dd>
          <RadioButtonGroup active={form?.skin === 'default'}>
            <span onClick={() => onClick('skin', 'default')}>
              {form?.skin === 'default' ? (
                <IoIosRadioButtonOn />
              ) : (
                <IoIosRadioButtonOff />
              )}
              {t('기본스킨')}
            </span>
            <span onClick={() => onClick('skin', 'gallery')}>
              {form?.skin === 'gallery' ? (
                <IoIosRadioButtonOn />
              ) : (
                <IoIosRadioButtonOff />
              )}
              {t('갤러리스킨')}
            </span>
          </RadioButtonGroup>
        </dd>
      </dl>
      <StyledButton type="submit" variant="primary" width="120px">
        {form?.mode === 'update' ? t('수정하기') : t('등록하기')}
      </StyledButton>
      <StyledMessage variant="danger">{errors?.global}</StyledMessage>
    </FormBox>
  );
};

export default React.memo(NoteForm);
