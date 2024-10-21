import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  > header {
    width: 100%;
    height: 144px;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    display: flex;
    align-items: center;

    padding: 0 124px;

    svg {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      font-size: 24px;
    }
  }
`;

export const Form = styled.div`
  max-width: 340px;
  margin: 30px auto 0;

  > div:nth-child(4) {
    margin-top: 24 px;
  }
`;

export const Avatar = styled.div`
  position: relative;
  margin: -94px auto 32px;

  width: 186px;
  height: 186px;
  border-radius: 50%;

  background-color: ${({ theme }) => theme.COLORS.GRAY_100};

  display: flex;
  justify-content: center;
  align-items: center;

  > svg {
    color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    width: 116px;
    height: 116px;
  }
`;
