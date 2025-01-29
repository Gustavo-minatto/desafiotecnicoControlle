import styled from 'styled-components';

export const CarouselWrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

export const Container = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  width: 100%;
`;

export const CarouselItem = styled.div`
  min-width: 100%;
  flex: 0 0 auto;
  padding: 20px;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.SECONDARY};
  color: white;
  border-radius: 8px;
  cursor: grab;

  &:active {
    cursor: grabbing;
  }
`;

export const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 10;

  &:first-of-type {
    left: 10px;
  }

  &:last-of-type {
    right: 10px;
  }
`;
