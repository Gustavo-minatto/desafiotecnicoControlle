import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  padding: 10px;
`;

export const Form = styled.div`
  margin-bottom: 20px;
`;

export const Input = styled.input`
  padding: 10px;
  border-radius: 20px;
  margin: 0 10px 10px 0;
  border: 1px solid #ccc;
`;

export const Message = styled.div`
  padding: 10px;
  color: white;
  background-color: ${({ theme }) => theme.colors.PRIMARY};
  border-radius: 20px;
  font-size: 16px;
  text-align: center;
  margin-bottom: 20px; 
`;
