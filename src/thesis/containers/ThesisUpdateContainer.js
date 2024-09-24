'use client';
import React, { useState, useEffect } from 'react';
import UpdateForm from '../components/UpdateForm';
import { apiGet } from '../apis/apiInfo';
import { updateThesis } from '../apis/apiUpload';
import Container from '@/commons/components/Container';

const initialFormData = {
  category: 'DOMESTIC',
  poster: '',
  contributor: '',
  thAbstract: '',
  reference: '',
  visible: 'false',
  publisher: '',
  title: '',
  fields: [''],
  language: '한국어',
  country: '한국',
  keywords: '',
};

const ThesisUpdateContainer = ({ params }) => {
  const { tid } = params; // 동적 경로에서 전달된 tid 값
  const [formData, setFormData] = useState(initialFormData);
  const [loading, setLoading] = useState(true);

  // 페이지 로드 시, tid로 기존 논문 데이터 가져오기
  useEffect(() => {
    if (tid) {
      const fetchThesisData = async () => {
        try {
          const thesisData = await apiGet(tid); // API 호출
          setFormData((prevFormData) => ({
            ...prevFormData,
            ...thesisData, // 받아온 데이터를 formData에 덮어씌움
          }));
          console.log('thesisData', thesisData);
        } catch (error) {
          console.error('Error fetching thesis data:', error);
        } finally {
          setLoading(false); // 로딩 상태 해제
        }
      };
      fetchThesisData();
    } else {
      setLoading(false); // tid가 없을 경우 로딩 해제
    }
  }, [tid]);

  const handleInputChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  //   const handleFieldsChange = (index, value) => {
  //     const newFields = [...formData.fields];
  //     newFields[index] = value;
  //     setFormData({ ...formData, fields: newFields });
  //   };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await updateThesis(tid, formData); // 논문 수정
      alert('논문 수정이 완료되었습니다.');
      window.location.href = '/thesis/list';
    } catch (error) {
      console.error('Error during form submission:', error);
      alert('논문 수정이 실패하였습니다.');
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <UpdateForm
        formData={formData}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        isEditMode={true} // 수정 모드
      />
    </Container>
  );
};

export default ThesisUpdateContainer;
