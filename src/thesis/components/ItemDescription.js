import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import color from '@/theme/colors';
import fontSize from '@/theme/fontSizes';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { apiGetVersionLogs } from '../apis/apiInfo';
import { useRouter } from 'next/navigation';

const { gray, navy } = color;

const { small, normal, big } = fontSize;

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
    font-size: ${normal};
    margin-bottom: 10px;
  }

  dd {
    font-size: ${normal};
  }

  dl + dl {
    border-top: 1px solid ${gray};
  }

  button {
    width: 100px;
    height: 40px;
  }

  .btn-group {
    display: flex;
    gap: 30px;
    margin: 20px 0 0 10px;
    // justify-content: center;
  }
  .title {
    font-size: ${big};
    padding: 0 0 15px 15px;
    width: 95%;
  }

  .section-title {
    font-size: ${normal};
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

const ItemDescription = ({ item }) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState({});
  const [versionLogs, setVersionLogs] = useState(true);
  const [loadingVersions, setLoadingVersions] = useState(true); // 로딩 상태
  const router = useRouter();
  console.log(item);

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
    viewCount,
    majorVersion,
    minorVersion,
  } = item;

  const toggleInfo = (section) => {
    setIsOpen((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  // 수정하기 버튼 클릭 시 경로 이동 처리
  const handleEditClick = () => {
    router.push(`/thesis/update/${tid}`);
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
        <div className="section-1">
          <label className="section-title">승인 여부</label>
          <div>
            <label>
              <input
                type="radio"
                name="approvalStatus"
                value="APPROVED"
                checked={approvalStatus === 'APPROVED'}
              />
              승인
            </label>
            <label>
              <input
                type="radio"
                name="approval"
                value="REJECTED"
                checked={approvalStatus === 'REJECTED'}
              />
              거절
            </label>
            <label>
              <input
                type="radio"
                name="approval"
                value="PENDING"
                checked={approvalStatus === 'PENDING'}
              />
              대기
            </label>
          </div>
        </div>
      </div>
      <div className="btn-group">
        <button>{t('원문보기')}</button>
        <button>{t('다운로드')}</button>
        <button onClick={handleEditClick}>{t('수정하기')}</button>
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
