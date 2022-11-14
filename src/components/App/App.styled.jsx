import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
  background-color: #212121;

  @media screen and (min-width: 480px) {
    width: 320px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
    padding-left: 32px;
    padding-right: 32px;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
    padding-left: 15px;
    padding-right: 15px;
  }
`;
