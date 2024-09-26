import React from 'react';
import styled from 'styled-components';

const JoinInput = styled.input`
  border-bottom: 3px solid ${({ theme }) => theme.colors.gray};
  padding: 5px 15px;
  margin-top: 15px;
  height: 70px;
  font-size: ${({ theme }) => theme.fontSizes.center};
  width: 100%;
`;
export default React.memo(JoinInput);
