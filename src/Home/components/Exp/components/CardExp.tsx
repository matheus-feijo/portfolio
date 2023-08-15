interface ICardExpProps {
  title: string;
  description: string;
}

export function CardExp({ title, description }: ICardExpProps) {
  return (
    <div className="max-w-lg border-2">
      <h1 className="text-lg font-semibold mb-5 border-b-2 leading-relaxed p-2">
        {title}
      </h1>
      <p className="p-2 text-justify indent-10">{description}</p>
    </div>
  );
}
