export interface CardProps {
  id: number;
  title: string;
  subtitle: string;
  onRemove: (id: number) => void;
}
