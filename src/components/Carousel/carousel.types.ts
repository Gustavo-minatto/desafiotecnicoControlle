export interface CarouselProps {
  items: Array<{ title: string; subtitle: string }>;
  onDragStart: (e: React.DragEvent, index: number) => void;
}
