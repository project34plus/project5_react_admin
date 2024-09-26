import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { IoCheckbox, IoCheckboxOutline, IoPersonSharp } from 'react-icons/io5';
import { updateMemberInfo, deleteMember } from '../apis/apiInfo';
import { changeAuthority } from '../apis/apiAuthority';
const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 600px;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  display: flex;
`;

const Table = styled.table`
  font-size: ${({ theme }) => theme.fontSizes.normal};
  width: 1300px;
  height: 150px;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  text-align: center;

  .thtitle {
    height: 40px;
    background: ${({ theme }) => theme.colors.navy};
    color: ${({ theme }) => theme.colors.white};
  }

  .td {
    border: 1px solid ${({ theme }) => theme.colors.gray};
  }
`;

const Select = styled.select`
  padding: 8px;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.normal};
  color: ${({ theme }) => theme.colors.black};
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.navy};
  }

  option {
    padding: 8px;
  }
`;

const Icon = styled.span`
  margin-right: 10px;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.primary};
`;

const Icon3 = styled.span`
  color: ${({ theme }) => theme.colors.navy};
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.small};
  cursor: pointer;
  width: 120px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.navy};
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  width: 1300px;
  margin-top: 20px;
`;

const MemberList = ({ members, setMembers }) => {
  const [selectedMembers, setSelectedMembers] = useState([]);
  const [editInfo, setEditInfo] = useState({});
  const authoritiesOptions = ['USER', 'ADMIN'];

  const onToggle = (email) => {
    setSelectedMembers((prev) => {
      const newSelection = prev.includes(email)
        ? prev.filter((memberEmail) => memberEmail !== email)
        : [...prev, email];

      console.log('선택된 멤버: ', newSelection);
      return newSelection;
    });
  };

  const handleEditChange = useCallback((email, authorities) => {
    changeAuthority(email, authorities);
  }, []);
 
  const handleDelete = async () => {
    console.log('삭제할 멤버: ', selectedMembers); // 삭제할 회원 확인
    if (selectedMembers.length > 0) {
      try {
        for (const email of selectedMembers) {
          const member = members.find((m) => m.email === email);
          if (member && member.seq) {
            await deleteMember(member.seq);
          } else {
            alert(`회원 ${email}의 정보를 찾을 수 없습니다.`);
          }
        }

        setMembers((members) =>
          members.filter((m) => !selectedMembers.includes(m.email)),
        );
        alert('선택한 회원이 탈퇴되었습니다.');
        setSelectedMembers([]); // 선택된 회원 목록 초기화
      } catch (error) {
        alert('탈퇴 중 오류가 발생했습니다: ' + error.message);
      }
    } else {
      alert('탈퇴할 회원을 선택하세요.');
    }
  };

  return (
    <Container>
      <Title>
        <Icon>
          <IoPersonSharp />
        </Icon>
        가입 회원 목록
      </Title>
      <Table>
        <thead>
          <tr>
            <th className="thtitle">선택</th>
            <th className="thtitle">이메일</th>
            <th className="thtitle">이름</th>
            <th className="thtitle">전화번호</th>
            <th className="thtitle">생년월일</th>
            <th className="thtitle">직업</th>
            <th className="thtitle">성별</th>
            <th className="thtitle">권한</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member) => (
            <tr key={member.email}>
              <td className="td">
                <Icon3 onClick={() => onToggle(member.email)}>
                  {selectedMembers.includes(member.email) ? (
                    <IoCheckbox />
                  ) : (
                    <IoCheckboxOutline />
                  )}
                </Icon3>
              </td>
              <td className="td">{member.email}</td>
              <td className="td">{member.userName}</td>
              <td className="td">{member.mobile}</td>
              <td className="td">{member.birth}</td>
              <td className="td">{member.job}</td>
              <td className="td">{member.gender}</td>
              <td className="td">
                <Select
                  defaultValue={
                    member.authorities && member.authorities.length > 0
                      ? member.authorities
                      : ''
                  } // 기본값 설정
                  onChange={(e) =>
                    handleEditChange(member.email, e.target.value)
                  }
                >
                  {authoritiesOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </Select>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <ButtonContainer>
        <Button onClick={handleDelete}>탈퇴하기</Button>
      </ButtonContainer>
    </Container>
  );
};

export default React.memo(MemberList);
