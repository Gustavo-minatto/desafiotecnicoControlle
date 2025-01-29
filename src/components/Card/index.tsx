import { Container, CardContent, CardTitle, CardSubtitle, RemoveButton } from './styles';
import { CardProps } from './cards.types';

const Card: React.FC<CardProps> = ({ id, title, subtitle, onRemove }) => {
  return (
    <Container>
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardSubtitle>{subtitle}</CardSubtitle>
      </CardContent>
      <RemoveButton onClick={() => onRemove(id)}>Remover</RemoveButton>
    </Container>
  );
};

export default Card;
