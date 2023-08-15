export function NavItem({
  name,
  scroll = 0,
}: {
  name: string;
  scroll?: number;
}) {
  return (
    <li className="text-2xl font-semibold border-b-0 hover:border-b-zinc-700 hover:border-b-2">
      <button
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ behavior: "smooth", top: scroll });
        }}
      >
        {name}
      </button>
    </li>
  );
}
