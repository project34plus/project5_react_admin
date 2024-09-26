'use client';
import React from 'react';
import styled from 'styled-components';

const FormWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 40px 50px;
  border-radius: 10px;
  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.6);
`;

const Heading = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.big};
  font-weight: ${({ theme }) => theme.fontWeight};
  text-align: center;
  margin-bottom: 30px;
  color: ${({ theme }) => theme.colors.black};
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-size: ${({ theme }) => theme.fontSizes.center};
  font-weight: ${({ theme }) => theme.fontWeight};
  color: ${({ theme }) => theme.colors.navy};
  margin-bottom: 10px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: ${({ theme }) => theme.fontSizes.center};
  border: 2px solid ${({ theme }) => theme.colors.whiteGrayNavy};
  border-radius: 5px;
  background-color: #f9f9f9;
  transition: border-color 0.3s;

  &:focus {
    border-color: ${({ theme }) => theme.colors.grayNavy};
    outline: none;
  }
`;

const Textarea = styled.textarea`
  padding: 10px;
  font-size: ${({ theme }) => theme.fontSizes.center};
  border: 2px solid ${({ theme }) => theme.colors.whiteGrayNavy};
  border-radius: 5px;
  background-color: #f9f9f9;
  min-height: 100px;
  transition: border-color 0.3s;

  &:focus {
    border-color: ${({ theme }) => theme.colors.grayNavy};
    outline: none;
  }
`;

const Select = styled.select`
  padding: 10px;
  font-size: ${({ theme }) => theme.fontSizes.center};
  border: 2px solid ${({ theme }) => theme.colors.whiteGrayNavy};
  border-radius: 5px;
  background-color: #f9f9f9;
  transition: border-color 0.3s;

  &:focus {
    border-color: ${({ theme }) => theme.colors.grayNavy};
    outline: none;
  }
`;

const RadioGroup = styled.div`
  display: flex;
  gap: 20px;
`;

const SubmitButton = styled.button`
  padding: 10px;
  font-size: ${({ theme }) => theme.fontSizes.big};
  background-color: ${({ theme }) => theme.colors.navy};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.darkNavy};
  }
`;

const UpdateForm = ({
  formData,
  handleInputChange,
  handleSubmit,
  isEditMode,
}) => {
  return (
    <FormWrapper>
      <Heading>논문 관리</Heading>
      <FormContainer onSubmit={handleSubmit}>
        {/* 제목 입력 필드 */}
        <FormGroup>
          <Label>제목</Label>
          <Input
            type="text"
            name="title"
            placeholder="제목을 입력하세요"
            value={formData.title || ''}
            onChange={(e) => handleInputChange('title', e.target.value)}
            required
            readOnly
          />
        </FormGroup>

        {/* 카테고리 선택 필드 */}
        <FormGroup>
          <Label>카테고리</Label>
          <Select
            name="category"
            value={formData.category || 'DOMESTIC'}
            onChange={(e) => handleInputChange('category', e.target.value)}
            required
            disabled
          >
            <option value="DOMESTIC">국내 논문</option>
            <option value="FOREIGN">해외 논문</option>
          </Select>
        </FormGroup>

        {/* 편집자 입력 필드 */}
        <FormGroup>
          <Label>저자</Label>
          <Input
            type="text"
            name="poster"
            placeholder="저자를 입력하세요"
            value={formData.poster || ''}
            onChange={(e) => handleInputChange('poster', e.target.value)}
            required
            readOnly
          />
        </FormGroup>

        {/* 기여자 입력 필드 */}
        <FormGroup>
          <Label>기여자</Label>
          <Input
            type="text"
            name="contributor"
            placeholder="기여자를 입력하세요"
            value={formData.contributor || ''}
            onChange={(e) => handleInputChange('contributor', e.target.value)}
            readOnly
          />
        </FormGroup>

        {/* 초록 입력 필드 */}
        <FormGroup>
          <Label>초록</Label>
          <Textarea
            name="thAbstract"
            placeholder="초록을 입력하세요"
            value={formData.thAbstract || ''}
            onChange={(e) => handleInputChange('thAbstract', e.target.value)}
            readOnly
          />
        </FormGroup>

        {/* 참고 문헌 입력 필드 */}
        <FormGroup>
          <Label>참고 문헌</Label>
          <Textarea
            name="reference"
            placeholder="참고 문헌을 입력하세요"
            value={formData.reference || ''}
            onChange={(e) => handleInputChange('reference', e.target.value)}
            readOnly
          />
        </FormGroup>

        {/* 발행기관 입력 필드 */}
        <FormGroup>
          <Label>발행기관</Label>
          <Input
            type="text"
            name="publisher"
            placeholder="발행기관을 입력하세요"
            value={formData.publisher || ''}
            onChange={(e) => handleInputChange('publisher', e.target.value)}
            readOnly
          />
        </FormGroup>

        {/* 키워드 입력 필드 */}
        <FormGroup>
          <Label>키워드</Label>
          <Textarea
            name="keywords"
            placeholder="키워드를 입력하세요"
            value={formData.keywords || ''}
            onChange={(e) => handleInputChange('keywords', e.target.value)}
            readOnly
          />
        </FormGroup>

        {/* 공개 여부 라디오 버튼 */}
        <FormGroup>
          <Label>공개 여부</Label>
          <RadioGroup>
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
          </RadioGroup>
        </FormGroup>
        <FormGroup>
          <Label>승인 여부</Label>
          <RadioGroup>
            <label>
              <input
                type="radio"
                name="approvalStatus"
                value="APPROVED"
                checked={formData.approvalStatus === 'APPROVED'} // approvalStatus 값 확인
                onChange={(e) =>
                  handleInputChange('approvalStatus', 'APPROVED')
                }
              />
              승인
            </label>
            <label>
              <input
                type="radio"
                name="approvalStatus"
                value="REJECTED"
                checked={formData.approvalStatus === 'REJECTED'}
                onChange={(e) =>
                  handleInputChange('approvalStatus', 'REJECTED')
                }
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
          </RadioGroup>
        </FormGroup>

        {/* 제출 버튼 */}
        <FormGroup>
          <SubmitButton type="submit">권한 수정</SubmitButton>
        </FormGroup>
      </FormContainer>
    </FormWrapper>
  );
};

export default React.memo(UpdateForm);