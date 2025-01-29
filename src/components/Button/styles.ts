import styled from "styled-components";

export const StyledButton = styled.button<{ variant: "primary" | "remove" }>`
  padding: 10px 15px;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;

  background-color: ${({ theme, variant }) =>
    variant === "primary" ? theme.colors.PRIMARY : theme.colors.BUTTON};

  &:hover {
    background-color: ${({ variant }) =>
      variant === "primary" ? "#0056b3" : "#8B0000"};
  }
`;
