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
  gap: 20px;
  margin-left: 30px;
  margin-top: 50px;
  margin-bottom: 50px;

  dl {
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 10px 0;
    border-bottom: 1px solid #eee;

    dt {
      width: 150px;
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
  }
  .etcblh {
    width: 5%;
  }
`;

const RadioButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  cursor: pointer;

  span {
    display: flex;
    align-items: center;
    gap: 5px;
    color: ${({ active }) => (active ? '#0070f3' : '#666')};
  }

  svg {
    font-size: 1.2rem;
    color: ${({ active }) => (active ? '#0070f3' : '#ddd')};
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
