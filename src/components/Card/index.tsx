import { Container, CardContent, CardTitle, CardSubtitle } from "./styles";
import { CardProps } from "./cards.types";
import Button from "../Button";

const Card: React.FC<CardProps> = ({ id, title, subtitle, onRemove }) => {
  return (
    <Container>
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardSubtitle>{subtitle}</CardSubtitle>
      </CardContent>
      <Button onClick={() => onRemove(id)} variant="remove">Remover</Button>
    </Container>
  );
};

export default Card;
