export interface DashboardProps {
  cards: { title: string; subtitle: string }[];
  handleDrop: (e: React.DragEvent, index: number) => void;
  handleDragStart: (e: React.DragEvent, index: number) => void;
  handleRemoveCard: (index: number) => void;
}
