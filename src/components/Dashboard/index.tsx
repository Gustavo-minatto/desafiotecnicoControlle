import { Container, CardWrapper, } from "./styles";
import Card from "../Card";
import { DashboardProps } from './dashboard.types';

const Dashboard: React.FC<DashboardProps> = ({
  cards,
  handleDrop,
  handleDragStart,
  handleRemoveCard,
}) => {
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  return (
    <Container>
      {cards.map((card, index) => (
        <CardWrapper
          key={index}
          draggable
          onDragStart={(e) => {
            handleDragStart(e, index);
            e.dataTransfer.setData("source", "dashboard");
          }}
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, index)}
        >
          <Card
            title={card.title}
            subtitle={card.subtitle}
            onRemove={() => handleRemoveCard(index)}
            id={index}
          />
        </CardWrapper>
      ))}
    </Container>
  );
};

export default Dashboard;
