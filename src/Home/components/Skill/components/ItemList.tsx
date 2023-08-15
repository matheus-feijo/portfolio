import { ReactNode } from "react";

interface IItemListProps {
  icon: ReactNode;
  name: string;
}

export function ItemList({ name, icon }: IItemListProps) {
  return (
    <li className="flex gap-2 items-center border-b-2 pb-1">
      {icon}
      <p>{name}</p>
    </li>
  );
}
