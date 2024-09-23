import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import UserInfoContext from '@/commons/contexts/UserInfoContext';
import MessageBox from '@/commons/components/MessageBox';
import styled from 'styled-components';
import fontSize from '@/theme/fontSizes';
import fontWeight from '@/theme/fontWeight';
import color from '@/theme/colors';

const { small, normal } = fontSize;
const { gray } = color;
const { semiBold } = fontWeight;

//댓글 작성
const FormBox = styled.form`
  display: block;

  p {
    font-size: ${normal};
    font-weight: ${semiBold};
    padding-left: 10px;
    margin: 0 0 10px 0;
  }

  .comment-form {
    font-size: ${small};
    margin-bottom: 20px;
    border-top: 2px solid black;
    padding-top: 20px;

    .commenter {
      margin: 0 0 5px 5px;
    }

    .input-area {
      display: flex;
      align-items: center;

      textarea {
        display: block;
        width: 100%;
        height: 100px;
        padding: 12px 16px;
        border: 1px solid ${gray};
        color: ${gray};
        box-sizing: border-box;
        resize: none;
        border-radius: 5px;
        font-size: ${small};
      }

      button {
        width: 100px;
        height: 40px;
        margin: 0 5px 0 15px;
      }
    }
  }
`;

const CommentForm = ({ form, onChange, onSubmit, errors }) => {
  const { t } = useTranslation();
  const { userInfo } = useContext(UserInfoContext); // 사용자 정보 가져오기

  return (
    <FormBox onSubmit={onSubmit} autoComplete="off">
      <p>댓글</p>
      <div className="comment-form">
        <div className="commenter">
          {userInfo?.userName
            ? userInfo.userName
            : '댓글 작성은 로그인 후 가능합니다'}
        </div>
        {/*로그인한 회원명 나와야 하는데 안나옴*/}
        <div className="input-area">
          <textarea
            name="content"
            placeholder={t('소중한_의견을_남겨주세요')}
            value={form?.content}
            onChange={onChange}
          ></textarea>
          {errors?.content && (
            <MessageBox color="danger" messages={errors.content} />
          )}
          <button type="submit">{t('작성하기')}</button>
        </div>
      </div>
    </FormBox>
  );
};

export default React.memo(CommentForm);
