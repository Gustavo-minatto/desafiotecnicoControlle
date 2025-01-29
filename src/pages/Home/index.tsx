import React, { useState } from "react";
import { Container, Form, Input, Button, Message } from "./styles";
import Dashboard from "../../components/Dashboard/index";
import Carousel from "../../components/Carousel/index";

const Home: React.FC = () => {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [cards, setCards] = useState<{ title: string; subtitle: string }[]>([
    { title: "Card 1", subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { title: "Card 2", subtitle: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { title: "Card 3", subtitle: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has" },
  ]);

  const [carouselItems] = useState<{ title: string; subtitle: string }[]>([
    { title: "Carousel 1", subtitle: "Arraste-me para o dashboard!" },
    { title: "Carousel 2", subtitle: "Arraste-me para o dashboard!" },
    { title: "Carousel 3", subtitle: "Arraste-me para o dashboard!" },
  ]);

  const handleDrop = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    const draggedIndex = e.dataTransfer.getData("draggedCard");
    const isFromCarousel = e.dataTransfer.getData("source") === "carousel";

    if (isFromCarousel) {
      const carouselIndex = Number(draggedIndex);
      const newCard = carouselItems[carouselIndex];
      setCards([...cards.slice(0, index), newCard, ...cards.slice(index)]);
    } else {
      const newCards = [...cards];
      const [draggedCard] = newCards.splice(Number(draggedIndex), 1);
      newCards.splice(index, 0, draggedCard);
      setCards(newCards);
    }
  };

  const handleDragStart = (e: React.DragEvent, index: number) => {
    e.dataTransfer.setData("draggedCard", index.toString());
  };

  const handleCarouselDragStart = (e: React.DragEvent, index: number) => {
    e.dataTransfer.setData("draggedCarouselCard", index.toString());
    e.dataTransfer.setData("source", "carousel");
  };

  const handleAddCard = () => {
    if (!title.trim() || !subtitle.trim()) {
      alert("Por favor, preencha tanto o título quanto o subtítulo antes de adicionar um card.");
      return;
    }

    setCards([...cards, { title, subtitle }]);
    setTitle("");
    setSubtitle("");
  };


  const handleRemoveCard = (index: number) => {
    const updatedCards = cards.filter((_, cardIndex) => cardIndex !== index);
    setCards(updatedCards);
  };

  return (
    <Container>
      <Message>Adicione um card preenchendo os 2 campos abaixo ou arrastando do carousel</Message>

      <Form>
        <Input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Título"
        />
        <Input
          type="text"
          value={subtitle}
          onChange={(e) => setSubtitle(e.target.value)}
          placeholder="Subtítulo"
        />
        <Button onClick={handleAddCard}>Adicionar Card</Button>
      </Form>

      <Dashboard
        cards={cards}
        handleDrop={handleDrop}
        handleDragStart={handleDragStart}
        handleRemoveCard={handleRemoveCard}
      />

      <Carousel items={carouselItems} onDragStart={handleCarouselDragStart} />
    </Container>
  );
};

export default Home;
