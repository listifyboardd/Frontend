interface DropDownElement {
  id: number;
  name: string;
}

interface DropDownProps {
  id: string;
  title: string;
  elements: DropDownElement[];
  onSelect: ((element: DropDownElement | null) => void) | null;
}

export type { DropDownElement, DropDownProps };
