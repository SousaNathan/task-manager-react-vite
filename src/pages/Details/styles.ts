import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas:
    "header"
    "content";

  > main {
    grid-area: content;
    overflow-y: auto;
  }
`;

export const Form = styled.form`
  max-width: 550px;
  margin: 38px auto;

  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 36px;

    a {
      font-size: 20px;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }
`;

export const CheckboxWrapper = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-top: 16px;
  margin-bottom: 28px;

  > input {
    appearance: none;
    width: 24px;
    height: 24px;
    border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_900};
    border-radius: 4px;
    position: relative;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    cursor: pointer;
    outline: none;

    &:checked {
      background-color: ${({ theme }) => theme.COLORS.ORANGE};
    }

    &:checked::before {
      content: "";
      position: absolute;
      width: 4px;
      height: 10px;
      border: solid white;
      border-width: 0 4px 4px 0;
      transform: rotate(45deg);
      top: 2px;
      left: 6px;
    }
  }

  > span {
    margin-left: 12px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }
`;
