'use client'
import React from 'react';

const UpdateForm = ({
  formData,
  handleInputChange,
  handleFieldsChange,
  handleSubmit,
    isEditMode,
  approvalStatus,
}) => {
  return (
    <div style={styles.formWrapper}>
      <h1 style={styles.heading}>{isEditMode ? '논문 수정' : '논문 등록'}</h1>
      <form onSubmit={handleSubmit} style={styles.formContainer}>
        {/* 제목 입력 필드 */}
        <div style={styles.formGroup}>
          <label style={styles.label}>제목</label>
          <input
            type="text"
            name="title"
            placeholder="제목을 입력하세요"
            value={formData.title || ''}
            onChange={(e) => handleInputChange('title', e.target.value)}
            style={styles.input}
            required
            readOnly
          />
        </div>

        {/* 카테고리 선택 필드 */}
        <div style={styles.formGroup}>
          <label style={styles.label}>카테고리</label>
          <select
            name="category"
            value={formData.category || 'DOMESTIC'}
            onChange={(e) => handleInputChange('category', e.target.value)}
            style={styles.select}
            required
            disabled
          >
            <option value="DOMESTIC">국내 논문</option>
            <option value="FOREIGN">해외 논문</option>
          </select>
        </div>

        {/* 편집자 입력 필드 */}
        <div style={styles.formGroup}>
          <label style={styles.label}>편집자</label>
          <input
            type="text"
            name="poster"
            placeholder="편집자를 입력하세요"
            value={formData.poster || ''}
            onChange={(e) => handleInputChange('poster', e.target.value)}
            style={styles.input}
            required
            readOnly
          />
        </div>

        {/* 기여자 입력 필드 */}
        <div style={styles.formGroup}>
          <label style={styles.label}>기여자</label>
          <input
            type="text"
            name="contributor"
            placeholder="기여자를 입력하세요"
            value={formData.contributor || ''}
            onChange={(e) => handleInputChange('contributor', e.target.value)}
            style={styles.input}
            readOnly
          />
        </div>

        {/* 초록 입력 필드 */}
        <div style={styles.formGroup}>
          <label style={styles.label}>초록</label>
          <textarea
            name="thAbstract"
            placeholder="초록을 입력하세요"
            value={formData.thAbstract || ''}
            onChange={(e) => handleInputChange('thAbstract', e.target.value)}
            style={styles.textarea}
            readOnly
          />
        </div>

        {/* 참고 문헌 입력 필드 */}
        <div style={styles.formGroup}>
          <label style={styles.label}>참고 문헌</label>
          <textarea
            name="reference"
            placeholder="참고 문헌을 입력하세요"
            value={formData.reference || ''}
            onChange={(e) => handleInputChange('reference', e.target.value)}
            style={styles.textarea}
            readOnly
          />
        </div>

        {/* 발행기관 입력 필드 */}
        <div style={styles.formGroup}>
          <label style={styles.label}>발행기관</label>
          <input
            type="text"
            name="publisher"
            placeholder="발행기관을 입력하세요"
            value={formData.publisher || ''}
            onChange={(e) => handleInputChange('publisher', e.target.value)}
            style={styles.input}
            readOnly
          />
        </div>

        {/* 키워드 입력 필드 */}
        <div style={styles.formGroup}>
          <label style={styles.label}>키워드</label>
          <textarea
            name="keywords"
            placeholder="키워드를 입력하세요"
            value={formData.keywords || ''}
            onChange={(e) => handleInputChange('keywords', e.target.value)}
            style={styles.textarea}
            readOnly
          />
        </div>

        {/* 공개 여부 라디오 버튼 */}
        <div style={styles.formGroup}>
          <label style={styles.label}>공개 여부</label>
          <div style={styles.radioGroup}>
            <label>
              <input
                type="radio"
                name="visible"
                value={true}
                checked={formData.visible === true}
                onChange={(e) => handleInputChange('visible', true)}
              />
              공개
            </label>
            <label>
              <input
                type="radio"
                name="visible"
                value={false}
                checked={formData.visible === false}
                onChange={(e) => handleInputChange('visible', false)}
              />
              비공개
            </label>
          </div>
              </div>
              <div className="section-1">
          <label className="section-title">승인 여부</label>
          <div>
            <label>
            <input
                type="radio"
                name="approvalStatus"
                value="APPROVED"
                checked={formData.approvalStatus === 'APPROVED'} // approvalStatus 값 확인
                onChange={(e) => handleInputChange('approvalStatus', 'APPROVED')}
              />
              승인
            </label>
            <label>
            <input
                type="radio"
                name="approvalStatus"
                value="REJECTED"
                checked={formData.approvalStatus === 'REJECTED'}
                onChange={(e) => handleInputChange('approvalStatus', 'REJECTED')}
              />
              거절
            </label>
            <label>
            <input
                type="radio"
                name="approvalStatus"
                value="PENDING"
                checked={formData.approvalStatus === 'PENDING'}
                onChange={(e) => handleInputChange('approvalStatus', 'PENDING')}
              />
              대기
            </label>
          </div>
        </div>

        {/* 제출 버튼 */}
        <div style={styles.formGroup}>
          <button type="submit" style={styles.submitButton}>
            권한 수정
          </button>
        </div>
      </form>
    </div>
  );
};

export default React.memo(UpdateForm);

const styles = {
  formWrapper: {
    maxWidth: '600px',
    margin: '0 auto',
    backgroundColor: '#f9f9f9',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    fontSize: '28px',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '20px',
    color: '#333',
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    fontSize: '16px',
    fontWeight: '500',
    marginBottom: '5px',
    color: '#333',
  },
  input: {
    padding: '10px',
    fontSize: '14px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  textarea: {
    padding: '10px',
    fontSize: '14px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    minHeight: '100px',
  },
  radioGroup: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '200px',
  },
  select: {
    padding: '10px',
    fontSize: '14px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  submitButton: {
    padding: '10px',
    fontSize: '16px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    textAlign: 'center',
  },
};
