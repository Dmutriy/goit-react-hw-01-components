import styled from '@emotion/styled';
import { getRandomHexColor } from 'utils';

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25%;
  padding: 5px;
  background-color: ${getRandomHexColor};
`;
export const Label = styled.span`
  font-size: 10px;
  color: #f3f3f3;
  text-align: center;
`;
export const Percentage = styled.span`
  margin-top: 5px;
  font-size: 14px;
  color: #f3f3f3;
  text-align: center;
`;
