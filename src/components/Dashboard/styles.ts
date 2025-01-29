import styled from "styled-components";

export const Container = styled.div`
  height: fit-content;
  max-width: 1200px;
  width: 100%;
  margin-bottom: 20px;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

`;

export const CardWrapper = styled.div`
  cursor: grab;
  &:active {
    cursor: grabbing;
  }

  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-5px);
  }

  flex: 1 1 calc(100% - 20px); 

  @media (min-width: 601px) and (max-width: 1000px) {
    flex: 1 1 calc(33.33% - 20px); 
  }

  @media (min-width: 1001px) {
    flex: 1 1 calc(25% - 20px);
  }
`;
