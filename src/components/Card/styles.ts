import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.SECONDARY};
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 10px;
  display: flex;
  flex-direction: column;

  height: 100%;
  @media (max-width: 768px) {
    max-width: 100%; 
  }
`;

export const CardContent = styled.div`
  margin-bottom: 10px;
`;

export const CardTitle = styled.h3`
  color: ${({ theme }) => theme.colors.TEXT};
`;

export const CardSubtitle = styled.p`
  color: ${({ theme }) => theme.colors.TEXT};
`;
