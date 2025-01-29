import { useState } from "react";
import { Container, CarouselWrapper, CarouselItem, NavigationButton } from "./styles";
import { CarouselProps } from './carousel.types';

const Carousel: React.FC<CarouselProps> = ({ items, onDragStart }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  return (
    <CarouselWrapper>
      <NavigationButton onClick={handlePrev}>&lt;</NavigationButton>
      <Container style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {items.map((item, index) => (
          <CarouselItem
            key={index}
            draggable
            onDragStart={(e) => onDragStart(e, index)}
            onDragOver={(e) => e.preventDefault()}
          >
            <h3>{item.title}</h3>
            <p>{item.subtitle}</p>
          </CarouselItem>
        ))}
      </Container>
      <NavigationButton onClick={handleNext}>&gt;</NavigationButton>
    </CarouselWrapper>
  );
};

export default Carousel;
