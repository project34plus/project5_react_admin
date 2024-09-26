import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { FiDownload, FiEdit } from 'react-icons/fi'; // 아이콘 추가
import { useRouter } from 'next/navigation';
import ThesisDelete from './ThesisDelete';

const Wrapper = styled.div`
  word-break: break-all;
  position: relative;

  dl {
    padding: 5px 15px;
    line-height: 170%;
  }

  dt {
    width: 140px;
    font-weight: bold;
    font-size: ${({ theme }) => theme.fontSizes.normal};
    margin-bottom: 10px;
  }

  dd {
    font-size: ${({ theme }) => theme.fontSizes.normal};
  }

  dl + dl {
    border-top: 1px solid ${({ theme }) => theme.colors.gray};
  }

  .btn-group {
    display: flex;
    gap: 20px;
    margin: 20px 0 0 10px;

    button {
      padding: 10px 25px;
      font-size: ${({ theme }) => theme.fontSizes.normal};
      border: none;
      border-radius: 5px;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 8px;
      transition: background-color 0.3s ease, box-shadow 0.3s ease;

      &:hover {
        background-color: ${({ theme }) => theme.colors.gray};
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      }

      .icon {
        font-size: 1.2rem;
      }
    }

    .download-btn {
      background-color: ${({ theme }) => theme.colors.primary};
      color: white;

      &:hover {
        background-color: ${({ theme }) => theme.colors.darkPrimary};
      }
    }

    .edit-btn {
      background-color: ${({ theme }) => theme.colors.navy};
      color: white;

      &:hover {
        background-color: ${({ theme }) => theme.colors.darkNavy};
      }
    }
  }

  .title {
    font-size: ${({ theme }) => theme.fontSizes.big};
    padding: 0 0 15px 15px;
    width: 95%;
  }

  .section-title {
    font-size: ${({ theme }) => theme.fontSizes.normal};
    padding: 10px 0;
  }

  .section-1 {
    margin-top: 20px;
  }

  .info2_wrap {
    margin: 40px 0;
    border-top: 2px solid black;
  }

  .toggle {
    width: 100%;
    position: relative;
    margin-top: 5px;
    display: flex;
    align-items: center;

    .arrow {
      position: absolute;
      right: 10px;
    }
  }
`;

const ApprovalSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
  margin-left: 10px;

  .approval-label {
    font-weight: bold;
    font-size: ${({ theme }) => theme.fontSizes.normal};
    color: ${({ theme }) => theme.colors.navy};
    margin-bottom: 10px;
  }

  .radio-group {
    display: flex;
    gap: 15px;

    .radio-button {
      position: relative;
      display: inline-block;
      padding: 5px 15px;
      background-color: ${({ theme }) => theme.colors.lightGray};
      border: 2px solid ${({ theme }) => theme.colors.gray};
      border-radius: 20px;
      cursor: pointer;
      transition: background-color 0.3s ease, border-color 0.3s ease;

      &.selected {
        background-color: ${({ theme }) => theme.colors.primary};
        border-color: ${({ theme }) => theme.colors.navy};
        color: ${({ theme }) => theme.colors.white};
      }

      input[type='radio'] {
        display: none;
      }

      &:hover {
        background-color: ${({ theme }) => theme.colors.gray};
        border-color: ${({ theme }) => theme.colors.navy};
      }

      label {
        font-size: 0.9rem;
        font-weight: bold;
        cursor: pointer;
      }
    }
  }
`;

const ItemDescription = ({ item }) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState({});
  const router = useRouter();

  const {
    tid,
    title,
    poster,
    contributor,
    _fields,
    category,
    thAbstract,
    toc,
    reference,
    publisher,
    approvalStatus,
    keywords,
  } = item;

  const toggleInfo = (section) => {
    setIsOpen((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleEditClick = () => {
    router.push(`/thesis/update/${tid}`);
  };

  const handleDeleteClick = () => {
    router.push(`/thesis/list/rejected`);
  };

  return (
    <Wrapper>
      <div className="title">{title}</div>
      <div className="info_wrap">
        <dl>
          <dt>{t('저자')}</dt>
          <dd>{poster}</dd>
        </dl>
        {contributor && (
          <dl>
            <dt>{t('기여자')}</dt>
            <dd>{contributor}</dd>
          </dl>
        )}
        <dl>
          <dt>{t('학문_분류')}</dt>
          <dd>
            {_fields && Object.keys(_fields).length > 0
              ? `${Object.values(_fields)?.[0][0]} | ${
                  Object.values(_fields)?.[0][1]
                }`
              : '학문 분류 없음'}
          </dd>
        </dl>
        <dl>
          <dt>{t('발행기관')}</dt>
          <dd>{publisher}</dd>
        </dl>
        {category && (
          <dl>
            <dt>{t('카테고리')}</dt>
            <dd>{category}</dd>
          </dl>
        )}
        {keywords && (
          <dl>
            <dt>{t('키워드')}</dt>
            <dd>{keywords}</dd>
          </dl>
        )}

        {/* 승인 여부 섹션 */}
        <ApprovalSection>
          <label className="approval-label">승인 여부</label>
          <div className="radio-group">
            <div
              className={`radio-button ${
                approvalStatus === 'APPROVED' ? 'selected' : ''
              }`}
              onClick={() => handleInputChange('approvalStatus', 'APPROVED')}
            >
              <input
                type="radio"
                name="approvalStatus"
                value="APPROVED"
                checked={approvalStatus === 'APPROVED'}
                onChange={(e) =>
                  handleInputChange('approvalStatus', 'APPROVED')
                }
              />
              <label>승인</label>
            </div>

            <div
              className={`radio-button ${
                approvalStatus === 'REJECTED' ? 'selected' : ''
              }`}
              onClick={() => handleInputChange('approvalStatus', 'REJECTED')}
            >
              <input
                type="radio"
                name="approvalStatus"
                value="REJECTED"
                checked={approvalStatus === 'REJECTED'}
                onChange={(e) =>
                  handleInputChange('approvalStatus', 'REJECTED')
                }
              />
              <label>거절</label>
            </div>

            <div
              className={`radio-button ${
                approvalStatus === 'PENDING' ? 'selected' : ''
              }`}
              onClick={() => handleInputChange('approvalStatus', 'PENDING')}
            >
              <input
                type="radio"
                name="approvalStatus"
                value="PENDING"
                checked={approvalStatus === 'PENDING'}
                onChange={(e) =>
                  handleInputChange('approvalStatus', 'PENDING')}
              />
              <label>대기</label>
            </div>
          </div>
        </ApprovalSection>
      </div>
      <div className="btn-group">
        <button className="download-btn">
          <FiDownload className="icon" />
          {t('다운로드')}
        </button>
        <button className="edit-btn" onClick={handleEditClick}>
          <FiEdit className="icon" />
          {t('수정하기')}
        </button>
        {approvalStatus === 'REJECTED' && <ThesisDelete tid={tid} />}
      </div>
      <div className="info2_wrap">
        <dl>
          <dt onClick={() => toggleInfo('abstract')} className="toggle">
            {t('초록')}
            <span className="arrow">
              {isOpen['abstract'] ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </span>
          </dt>
          {isOpen['abstract'] && (
            <dd>{thAbstract ? thAbstract : t('내용이_없습니다')}</dd>
          )}
        </dl>
        <dl>
          <dt onClick={() => toggleInfo('toc')} className="toggle">
            {t('목차')}
            <span className="arrow">
              {isOpen['toc'] ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </span>
          </dt>
          {isOpen['toc'] && <dd>{toc ? toc : t('내용이_없습니다')}</dd>}
        </dl>
        <dl>
          <dt onClick={() => toggleInfo('reference')} className="toggle">
            {t('참고문헌')}
            <span className="arrow">
              {isOpen['reference'] ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </span>
          </dt>
          {isOpen['reference'] && (
            <dd>{reference ? reference : t('내용이_없습니다')}</dd>
          )}
        </dl>
      </div>
    </Wrapper>
  );
};

export default React.memo(ItemDescription);
