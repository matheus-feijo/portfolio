interface ICardExpProps {
  title: string;
  description: string;
}

export function CardExp({ title, description }: ICardExpProps) {
  return (
    <div className="max-w-lg border-2">
      <h1 className="text-lg font-semibold mb-2 border-b-2 leading-relaxed p-2 bg-gray-300 h-20 flex justify-center items-center text-center">
        {title}
      </h1>
      <div>
        {description.split("\n").map((text) => (
          <p className="px-2 pt-1 indent-10 text-justify text-base">{text}</p>
        ))}
      </div>
    </div>
  );
}
