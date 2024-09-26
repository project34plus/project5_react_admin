import React, { useState } from 'react';

// import {
//   FormWrapper,
//   Table,
//   ButtonContainer,
//   SubmitButton,
//   ResetButton,
// } from '../components/NoteRegisterForm.css';

const NoteRegisterForm = () => {
  const [formData, setFormData] = useState({
    noteID: '',
    noteName: '',
    noteCount: 20,
    pcPageGap: 10,
    moPageGap: 5,
    editorUsage: '사용',
    imageAttach: '사용',
    fileAttach: '사용',
    afterWritingMove: '노트목록',
    skin: '메모',
    noteList: '회원+관리자',
    noteView: '회원+관리자',
    noteWrite: '회원+관리자',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // 제출된 데이터 확인
  };

  const handleReset = () => {
    setFormData({
      noteID: '',
      noteName: '',
      noteCount: 20,
      pcPageGap: 10,
      moPageGap: 5,
      editorUsage: '사용',
      imageAttach: '사용',
      fileAttach: '사용',
      afterWritingMove: '노트목록',
      skin: '메모',
      noteList: '회원+관리자',
      noteView: '회원+관리자',
      noteWrite: '회원+관리자',
    });
  };

  return (
      <form onSubmit={handleSubmit}>
        {/* <Table> */}
          <thead>
            <tr>
              <th>사용여부</th>
              <th>노트 설정</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>노트ID</td>
              <td>
                <input
                  type="text"
                  name="noteID"
                  value={formData.noteID}
                  onChange={handleInputChange}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>노트 이름</td>
              <td>
                <input
                  type="text"
                  name="noteName"
                  value={formData.noteName}
                  onChange={handleInputChange}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>1페이지 노트 수</td>
              <td>
                <input
                  type="number"
                  name="noteCount"
                  value={formData.noteCount}
                  onChange={handleInputChange}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>페이지 구간 갯수(PC)</td>
              <td>
                <input
                  type="number"
                  name="pcPageGap"
                  value={formData.pcPageGap}
                  onChange={handleInputChange}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>페이지 구간 갯수(Mo)</td>
              <td>
                <input
                  type="number"
                  name="moPageGap"
                  value={formData.moPageGap}
                  onChange={handleInputChange}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>에디터</td>
              <td>
                <select
                  name="editorUsage"
                  value={formData.editorUsage}
                  onChange={handleInputChange}
                >
                  <option value="사용">사용</option>
                  <option value="미사용">미사용</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>이미지 첨부</td>
              <td>
                <select
                  name="imageAttach"
                  value={formData.imageAttach}
                  onChange={handleInputChange}
                >
                  <option value="사용">사용</option>
                  <option value="미사용">미사용</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>파일 첨부</td>
              <td>
                <select
                  name="fileAttach"
                  value={formData.fileAttach}
                  onChange={handleInputChange}
                >
                  <option value="사용">사용</option>
                  <option value="미사용">미사용</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>노트작성 후 이동</td>
              <td>
                <select
                  name="afterWritingMove"
                  value={formData.afterWritingMove}
                  onChange={handleInputChange}
                >
                  <option value="노트목록">노트목록</option>
                  <option value="다른페이지">다른페이지</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>스킨</td>
              <td>
                <select
                  name="skin"
                  value={formData.skin}
                  onChange={handleInputChange}
                >
                  <option value="메모">메모</option>
                  <option value="노트">노트</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>노트 목록</td>
              <td>
                <select
                  name="noteList"
                  value={formData.noteList}
                  onChange={handleInputChange}
                >
                  <option value="회원+관리자">회원+관리자</option>
                  <option value="관리자">관리자</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>노트 보기</td>
              <td>
                <select
                  name="noteView"
                  value={formData.noteView}
                  onChange={handleInputChange}
                >
                  <option value="회원+관리자">회원+관리자</option>
                  <option value="관리자">관리자</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>노트 쓰기</td>
              <td>
                <select
                  name="noteWrite"
                  value={formData.noteWrite}
                  onChange={handleInputChange}
                >
                  <option value="회원+관리자">회원+관리자</option>
                  <option value="관리자">관리자</option>
                </select>
              </td>
            </tr>
             <tr>
          <td colSpan="2">
            <button type="button" onClick={handleReset}>
              다시입력
            </button>
            <button type="submit">등록하기</button>
          </td>
        </tr>
          </tbody>
        {/* </Table> */}

        {/* <ButtonContainer>
          <ResetButton type="button" onClick={handleReset}>
            다시입력
          </ResetButton>
          <SubmitButton type="submit">등록하기</SubmitButton>
        </ButtonContainer> */}
      </form>
  );
};

export default NoteRegisterForm;
