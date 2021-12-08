import styled from "styled-components";

export const ButtonContainer = styled.button`
  width: 100%;
  height: 46px;

  background: ${({theme}) => theme.colors.primary};
  color: ${({theme}) => theme.colors.background};
  border: 1px solid ${({theme}) => theme.colors.primary};
  border-radius: 10px;

  margin-bottom: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  cursor: pointer;
  &:hover {
    filter: opacity(0.8);
  }
  &:disabled {
    filter: opacity(0.4);

  }
`