interface IItemHeaderProps {
  label: string;
  containerId: string;
}

export function ItemHeader({ label, containerId }: IItemHeaderProps) {
  return (
    <li className="text-2xl font-semibold border-b-0 hover:border-b-zinc-700 hover:border-b-2">
      <button
        onClick={(e) => {
          document.getElementById(containerId)?.scrollIntoView({
            behavior: "smooth",
          });
        }}
      >
        {label}
      </button>
    </li>
  );
}
