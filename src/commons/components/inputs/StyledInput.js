import React from 'react';
import styled from 'styled-components';
export const StyledInput = styled.input`
  border: 1px solid ${({ theme }) => theme.colors.gray};
  padding: 10px;
  border-radius: 3px;
  width: 100%;
`;

export const StyledTextArea = styled.textarea`
  border: 1px solid ${({ theme }) => theme.colors.gray};
  padding: 10px;
  border-radius: 3px;
  width: 100%;
  min-height: 150px;
  resize: none;
`;
