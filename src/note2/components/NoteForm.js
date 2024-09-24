'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './NoteForm.css';

const NoteForm = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  // 노트 목록 가져오기
  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await axios.get('/api/notes');
        setNotes(response.data);
      } catch (error) {
        console.error('노트 목록을 가져오는 데 실패했습니다.', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNotes();
  }, []);

  const handleDelete = async (nid) => {
    if (window.confirm('정말 이 노트를 삭제하시겠습니까?')) {
      try {
        await axios.delete(`/api/notes/${nid}`);
        setNotes(notes.filter((note) => note.nid !== nid));
      } catch (error) {
        console.error('노트 삭제에 실패했습니다.', error);
      }
    }
  };

  const handleEdit = (nid) => {
    router.push(`/note/edit/${nid}`);
  };

  if (loading) {
    return <div>노트를 불러오는 중...</div>;
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>노트 이름</th>
            <th>카테고리</th>
            <th>페이지 당 행 수</th>
            <th>페이지 수</th>
            <th>수정, 삭제</th>
          </tr>
        </thead>
        <tbody>
          {notes.length > 0 ? (
            notes.map((note) => (
              <tr key={note.nid}>
                <td>{note.nid}</td>
                <td>{note.nName}</td>
                <td>{note.category}</td>
                <td>{note.rowsPerPage}</td>
                <td>{note.pageCount}</td>
                <td>
                  <button
                    className="edit-button"
                    onClick={() => handleEdit(note.nid)}
                  >
                    수정
                  </button>
                  <button
                    className="delete-button"
                    onClick={() => handleDelete(note.nid)}
                  >
                    삭제
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">노트가 없습니다.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default NoteForm;
