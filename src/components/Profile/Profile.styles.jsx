import styled from '@emotion/styled';
import { getRandomHexColor } from 'utils';

export const ProfileStyled = styled.div`
  width: 220px;
  margin: 15px auto;
  border-radius: 7px;
  background-color: whitesmoke;
  overflow: hidden;
  box-shadow: rgba(103, 103, 102, 0.893) 0px 5px 25px 5px;
`;
export const Description = styled.div`
  text-align: center;
  width: 220px;
`;

export const Avatar = styled.img`
  width: 100px;
  margin-top: 15px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 50%;
  background-color: ${getRandomHexColor()};
`;
export const Name = styled.p`
  font-weight: 700;
  font-size: 18px;
  margin-top: 15px;
`;
export const Tag = styled.p`
  font-size: 16px;
  font-weight: 400;
  margin-top: 15px;
  color: rgb(110, 110, 110);
`;
export const Location = styled.p`
  font-size: 16px;
  font-weight: 400;
  margin-top: 15px;
  color: rgb(110, 110, 110);
`;

export const Stats = styled.ul`
  display: flex;
  justify-content: space-around;
  text-align: center;

  margin-top: 15px;
  background-color: rgb(220 227 236 / 35%);
  border-top: 1px solid #cfc2c2;
`;
export const StatsItem = styled.li`
  width: 33.3%;
  padding: 10px;
  border-right: 1px solid #cfc2c2;
  :last-child {
    border-right: 0;
  }
`;
export const Label = styled.span`
  display: block;
  font-size: 12px;
  font-weight: 400;
  color: rgb(110, 110, 110);
`;
export const Quantity = styled.span`
  margin-top: 5px;
  font-size: 16px;
  font-weight: 700;
`;
