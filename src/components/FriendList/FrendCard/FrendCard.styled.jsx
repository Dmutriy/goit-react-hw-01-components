import styled from '@emotion/styled';

export const FrendItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  padding: 10px;

  background-color: aliceblue;
  border-radius: 7px;
  box-shadow: rgb(103 103 102 / 89%) 0px 5px 25px 5px;
  :last-child {
    margin-bottom: 0;
  }
`;

export const Chip = styled.span`
  content: '';
  width: 10px;
  height: 10px;

  border-radius: 50%;
  background-color: ${props => (props.isOnline ? `green` : `red`)};
`;

export const Avatar = styled.img`
  margin-left: 15px;
  border-radius: 13px;
  background-color: rgb(155, 201, 75);
`;
export const Name = styled.p`
  margin-left: 25px;
  font-weight: 700;
`;
